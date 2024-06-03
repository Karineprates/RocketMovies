import { Container,Profile, Brand, Search} from "./styles";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';

export function Header(){
  return(
    <Container>
      <Brand>
      <h1>RocketMovies</h1>
      </Brand>

      <Search>
    <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      
      <Profile to="/profile">  
        <img src="https://github.com/karineprates.png"
          alt="Foto do Usuário"
        />
        <div>
          <span>Karine Prates</span>
          <span>sair</span>
        </div>
      </Profile>


    </Container>
  );
}