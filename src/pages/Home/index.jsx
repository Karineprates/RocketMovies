import {Container, Content, Brand,NewMovie} from './styles'
import { PiStarThin,PiStarFill } from "react-icons/pi";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Input } from '../../components/Input';





export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');


  const fetchNotes = async (searchTerm = '') => {
    try {
      const response = await api.get(`/notes?title=${searchTerm}`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    if (search.trim() === '') {
      fetchNotes();
    } else {
      fetchNotes(search);
    }
  }, [search]);

  
  return (
    <Container>
      
      <Header onSearchChange={setSearch} />
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
          to={`/details/${note.id}`} 
          key={String (note.id)}
          data={note} />
        ))
        }
      </Content>
    </Container>
  )
}

