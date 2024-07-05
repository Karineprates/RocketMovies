import {Header} from '../../components/Header';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/Noteitem';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';







import { Container,Form } from './styles';

export function New () {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("");

const navigate= useNavigate();


function handleAddTag(){
  setTags(prevState => [...prevState, newTag]);
  setNewTag("");
}

function handleRemoveTag(deleted){
  setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewNote() {
  if(!title){
    return alert ("Digite o título da nota")
  }

  if (newTag){
    return alert("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio.")
  }

  await api.post("/notes",{
    title,
    description,
    tags
  });

  alert("Nota criada com sucesso");
  navigate("/");
}
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <Link to="/">
            <FiArrowLeft />
            Voltar
            </Link>
            <h1>Novo Filme</h1>
          </header>
          <div>
          <Input 
          placeholder="Título"
          value={title}
          onChange={e => setTitle (e.target.value)}
          />
          <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea 
          placeholder="Observações"
          value={description}
          onChange={e => setDescription (e.target.value)}
          
          />

          <Section title="Marcadores">
            <div className='tags'  >
            {
            tags.map((tag, index) => (
            <NoteItem 
            key={String(index)}
            value={tag} 
            onClick={()=> handleRemoveTag(tag)}
            />
              ))
            }
            <NoteItem 
            isNew 
            placeholder="Novo marcador" 
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
            />
            </div>

          </Section>
          <div className='button' >
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}