import { Container } from "./styles";
import PropTypes from 'prop-types';

export function ButtonText({Icon,title,...rest}){
  return(
    <Container
    type="button"
    {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
ButtonText.propTypes = {
  Icon: PropTypes.elementType, 
  title: PropTypes.string.isRequired 
};