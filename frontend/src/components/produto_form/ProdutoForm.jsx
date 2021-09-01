import { Component } from "react";
import "../produto_form/produto_form.css"
import React from 'react';
import {TextField, FormControl, Container, InputLabel, Button } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Categoria from "../../model/Categoria"
import Produto from "../../model/Produto"

class ProdutoForm extends Component{
  name;
  description;
  categoria = new Categoria();

  constructor(props){
    super(props);
    this.list = props.list;
  }
  
  handlerName(event){
    this.name = event.target.value;
  }
  handlerDescription(event){
    this.description = event.target.value;
  }
  handlerCategory(event){
    this.categoria = event.target.value;
  }

  handlerSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let prod = new Produto();
    prod.name = this.name;
    prod.description = this.description;
    prod.Categoria = this.categoria;
    this.props.create(prod);
  }

    render(){
        return (
          <Container>
            <h2>Cadastro de Produtos</h2>
            <form>
              <TextField
                id="name" 
                label="Name" 
                fullWidth
                onChange = {this.handlerName.bind(this)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                fullWidth
                onChange = {this.handlerDescription.bind(this)}
              />
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select 
                  autoWidth
                  onChange = {this.handlerCategory.bind(this)}
                >
                  <MenuItem>
                    <em>Categoria</em>
                  </MenuItem>
                  {this.list.map((c,i) =>{
                    <MenuItem value={10} key={i}>
                      {c}
                    </MenuItem>;
                  })}
                  
                </Select>
              </FormControl>
              <div id = "butao">
                <Button
                  variant="contained" 
                  color="primary"
                  onChange = {this.handlerSubmit.bind(this)}
                >
                  Salvar
                </Button>
              </div>
            </form>
          </Container>
        );
    }
}
export default ProdutoForm;