import "../produto_form/produto_form.css"
import React, { useState } from 'react';
import {TextField, Container, Button } from "@material-ui/core"
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import Produto from "../../model/Produto"

function ProdutoForm( {repoP, repoC} ) {
  let id;
  let name;
  let description;
  let category;

  let [lista, setList] = useState([]);
  repoC.inscrever(setList);
  return (
    <Container>
      <h2>Cadastro de Produtos</h2>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          repoP.create(new Produto(id, name, description, category));
        }}
      >
        <TextField
          id="id"
          label="ID"
          fullWidth
          onChange={(c) => (id = c.target.value)}
        />
        <TextField
          id="name"
          label="Name"
          fullWidth
          onChange={(c) => (name = c.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          fullWidth
          onChange={(c) => (description = c.target.value)}
        />
        <select
          /*autoWidth*/
          onChange={(c) => {
            (category = c.target.value)}}
        >
          {
            lista.map((ç,q) => 
             <option key={q} value={ç.id}>{ç}</option>
              
            )
          }
        </select>
        <div id="butao">
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Container>
  );
}
export default ProdutoForm;