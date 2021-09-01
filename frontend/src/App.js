import { Component } from 'react';
import {Container, Grid} from "@material-ui/core"
import ProdutoForm from './components/produto_form';
import CategoriaForm from "./components/categoria_form"
import ProdutoList from "./components/produto_list"
import "./assets/css/App.css"
import ProdutoRepository from './repository/ProdutoRepository';
import CategoriaRepository from './repository/CategoriaRepository'

class App extends Component {
  repoP;
  repoC;
  constructor(){
    super();
    this.repoP = new ProdutoRepository();
    this.repoC = new CategoriaRepository();
  }

  render(){
    return (
      <div id="div-mae">
        <header id="header"></header>
        <div id="div-product">
          <Container maxWidth="sm">
            <ProdutoForm create = {this.repoP.create.bind(this.repo)} list = {this.repoC.categorias}/>
            <ProdutoList repo = {this.repoP}/>
          </Container>
        </div>
        <div>
          <Container maxWidth>
            <CategoriaForm createCateg = {this.repoC.createCateg.bind(this.repoC)} list = {this.repoC.categorias}/>
          </Container>
        </div>
      </div>
    );}
}
export default App;
