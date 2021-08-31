import { Component } from 'react';
import {Container}  from "react-bootstrap"
import ProdutoForm from './components/produto_form';

class App extends Component {
  render(){
    return(
   <Container fluid="xxl">
     <ProdutoForm />
   </Container>
    )}
}
export default App;
