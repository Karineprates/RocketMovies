import { Container } from "./styles";

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