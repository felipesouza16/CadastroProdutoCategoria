import {Container} from "@material-ui/core"
import { useState } from "react";
import ProdutoForm from './components/produto_form';
import CategoriaForm from "./components/categoria_form"
import ProdutoList from "./components/produto_list"
import "./assets/css/App.css"
import ProdutoRepository from './repository/ProdutoRepository';
import CategoriaRepository from './repository/CategoriaRepository'

function App () {
    let [repoP] = useState(new ProdutoRepository());
    let [repoC] = useState(new CategoriaRepository());
    return (
      <div id="div-mae">
        <header id="header"></header>
        <div id="div-product">
          <Container maxWidth="sm">
            <ProdutoForm repoP = {repoP} repoC={repoC}/>
            <ProdutoList repoP = {repoP}/>
          </Container>
        </div>
        <div>
          <Container maxWidth = "sm">
            <CategoriaForm repo = {repoC} />
          </Container>
        </div>
      </div>
    );}

export default App;
