import { FiArrowLeft } from 'react-icons/fi'
import { PiStarThin,PiStarFill } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { Container,Content,Star, Profile } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function Details () {
  const params = useParams();
  const [data, setData] = useState(null)

  useEffect(()=> {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
  }, [])

  

  return (
    <Container>

      <Header />
      { data &&
      <main>
        <Content>

        <ButtonText to="/" Icon={FiArrowLeft} title="Voltar"/> 
        
        <div>
          <h1>{data.title}</h1> <Star><PiStarFill/><PiStarFill/><PiStarFill/><PiStarFill/><PiStarThin/></Star>
        </div>

        <Profile to="profile">
        <img src="https://github.com/karineprates.png" alt="Avatar"
        />
        <div >
          <span>Por Karine prates</span>
          <GoClock/>
          <span>23/05/22 às 08:00</span>
          </div>

        </Profile>
          {
            data.tags &&
          <Section>
            {
              data.tags.map(tag => (
          <Tag 
          title={tag.name}
          key={String(tag.id)}
          />
              ))
            }
          </Section>
          }
          <p>
          {data.description}
          </p>

    
    


      </Content>
    </main>
    }
  </Container>
  
  );
}