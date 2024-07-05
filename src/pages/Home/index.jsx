import {Container, Content, Brand,NewMovie} from './styles'
import { PiStarThin,PiStarFill } from "react-icons/pi";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';




export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();


  function handleDetails (id) {

navigate(`/details/${id}`);

  }
  


  const fetchNotes = async (searchTerm = '') => {
    try {
      const response = await api.get(`/notes?title=${searchTerm}`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }; 


  // useEffect para buscar as notas quando o componente monta ou search muda
  useEffect(() => {
    if (search.trim() === '') {
      // Se search estiver vazio, busca todas as notas
      fetchNotes();
    } else {
      // Se search não estiver vazio, busca com o filtro de search
      fetchNotes(search);
    }
  }, [search]); // Executa sempre que search mudar 
  
  return (
    <Container>
      
      <Header />
      <Content>
        <Brand>
  
        <h1>Meus filmes</h1>
        
        <NewMovie to="/new">
        <FiPlus/>
        Adicionar filme
      </NewMovie>
        </Brand>
        {
        notes.map(note => (
        <Note  
        data={note}
        key={String(note.id)}
        onClick={() => handleDetails(note.id)}
        />  
        ))
        }
      </Content>
    </Container>
  )
}

