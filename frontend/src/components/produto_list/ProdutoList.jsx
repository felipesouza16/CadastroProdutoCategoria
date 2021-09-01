import { Component } from "react";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  
  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 700,
  //   },
  // });

class ProdutoList extends Component{
  repo;
    constructor(props){
      super(props);
      this.state = {
        list:[]
      }
    }
    componentDidMount(){
      this.repo = this.props.repo;
      this.setState({
        list: this.repo.list()
      })
      this.repo.inscrever(this.get_prods.bind(this))
    }
    componentWillUnmount(){
      this.repo.desinscrever(this.get_prods.bind(this))
    }
    get_prods(list){
      this.setState({
        list : list
      })
    }
    render(){
        return (
            <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Category</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.list.map((prod) => (
                  <StyledTableRow key={prod.name}>
                    <StyledTableCell 
                    // component="th" 
                    // scope="row"
                    >
                      {prod.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{prod.description}</StyledTableCell>
                    <StyledTableCell align="right">{prod.category}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
}
export default ProdutoList;