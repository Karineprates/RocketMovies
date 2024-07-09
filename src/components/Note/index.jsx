import { Container,Star } from './styles'
import {Tag} from "../Tag"
import { PiStarThin,PiStarFill } from "react-icons/pi";
import PropTypes from 'prop-types';

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

Note.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired,
}