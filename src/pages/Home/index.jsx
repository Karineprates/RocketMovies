import {Container, Content, Brand, NewMovie } from './styles'
import { PiStarThin,PiStarFill } from "react-icons/pi";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi';



export function Home () {
  return (
    <Container>
      <Header/>
      <Content>
        <Brand>
        <h1>Meus filmes</h1>
        <NewMovie to="/new">
        <FiPlus/>
        Adicionar filme
      </NewMovie>
        </Brand>
        <Note data={{
        title:'Interestellar',
        description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela...',
        tags: [
            {id:'1', name:'Ficção Científica'},
            {id:'2', name:'Drama'},
            {id:'3', name:'Familia'},

          ]
          }}>

          </Note>
          <Note data={{
        title:'Interestellar',
        description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela...',
        tags: [
            {id:'1', name:'Ficção Científica'},
            {id:'2', name:'Drama'},
            {id:'3', name:'Familia'},

          ]
          }}>

          </Note>
          <Note data={{
        title:'Interestellar',
        description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela...',
        tags: [
            {id:'1', name:'Ficção Científica'},
            {id:'2', name:'Drama'},
            {id:'3', name:'Familia'},

          ]
          }}>

          </Note>
      </Content>
    </Container>
  )
}