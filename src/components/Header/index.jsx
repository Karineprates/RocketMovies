import { Container,Profile, Brand, Search, Logout} from "./styles";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../../assets/avatar_placeholder.svg'
import { useState,useEffect } from "react";


export function Header({ onSearchChange }) {
  const [search, setSearch] = useState('');
  const [tagsSelected, setTagsSelected] = useState('');
  const [notes, setNotes] = useState([]);
  const { signOut, user } = useAuth();
  const navigation = useNavigate();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    // Verifica se o campo de busca não está vazio antes de chamar a API
    if (search.trim() !== '') {
      fetchNotes();
    } else {
      // Se o campo de busca estiver vazio, limpa as notas
      setNotes([]);
    }
  }, [search, tagsSelected]);

  const handleSignOut = () => {
    navigation("/");
    signOut();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    onSearchChange(inputValue); // Propaga o valor para o componente pai (Home)
  };


  return(
    <Container>
      <Brand>
      <h1>RocketMovies</h1>
      </Brand>

      <Search>
    <Input 
    placeholder="Pesquisar pelo título" 
    icon={FiSearch} 
    onChange={handleInputChange}
    />
      </Search>
      
      <Profile to="profile">  
        <img src={avatarUrl}
          alt={user.name}
        />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      
    <Logout onClick={handleSignOut}> Sair
      
      
      </Logout> 


    </Container>
  );
}