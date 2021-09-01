import { Component } from "react";
import {FormControl, TextField, Container} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

class CategoriaForm extends Component{
    categ;
    constructor(props){
      super(props);
      this.list = props.list;
      this.state = {
        list : this.list
      }
    }
    handlerEnter(event){
      if (event.keyCode === 13){
        this.categ = event.target.value;
        console.log("indo")
        this.handlerSalvar(event)
        event.stopPropagation();
        event.preventDefault();
      }
    }
    handlerSalvar(event){
      this.props.createCateg(this.categ)
      event.stopPropagation();
      event.preventDefault();
    }
    render(){
        return (
          <Container maxWidth="xs">
            <FormControl fullWidth>
              <TextField
                id="standard-basi"
                label="Cadastro de Categoria"
                autoFocus
                margin="normal"
                onChange = {this.handlerSalvar.bind(this)}
                onKeyDown = {this.handlerEnter.bind(this)}
              />
            </FormControl>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Categorias</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.list.map((c, i) =>
                    <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {c}
                    </StyledTableCell>
                  </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        );
    }
}

export default CategoriaForm;