import {FiPlus, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function NoteItem ({isNew, value, onClick, ...rest}) {

  return (

    <Container isNew={isNew}>

      <input 
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />
    <button
      onClick={onClick}
      type='button'
      className={isNew ? 'button-add' : 'button-delete'}  
    >
      { isNew ? <FiPlus  /> : <FiX/>}
    
    </button>
      

    </Container>
  )
}

  NoteItem.propTypes = {
    isNew: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };