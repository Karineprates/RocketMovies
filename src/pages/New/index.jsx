import {Header} from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/Noteitem';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';









import { Container,Form } from './styles';

export function New () {
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
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Observações"/>

          <Section title="Marcadores">
            <div className='tags'  >
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador" />
            </div>

          </Section>
          <div className='button' >
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}