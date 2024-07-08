import { Container,Star } from './styles'
import {Tag} from "../Tag"
import { PiStarThin,PiStarFill } from "react-icons/pi";


export function Note({data, ...rest}) {
  return(
    <Container {...rest} >
      <h1>{data.title}</h1>
      <Star><PiStarFill/><PiStarFill/><PiStarFill/><PiStarFill/><PiStarThin/></Star>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.name} title={tag.name}  />)
          }
        </footer>
      }
    </Container>
  );
}