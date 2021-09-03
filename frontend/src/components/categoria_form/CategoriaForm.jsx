import {FormControl, TextField, Container} from "@material-ui/core"
// import { withStyles } from '@material-ui/core/styles';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

  // const StyledTableRow = withStyles((theme) => ({
  //   root: {
  //     '&:nth-of-type(odd)': {
  //       backgroundColor: theme.palette.action.hover,
  //     },
  //   },
  // }))(TableRow);

function CategoriaForm({repo}) {
  let name;
  return (
    <Container maxWidth="xs">
      <FormControl fullWidth>
        <TextField
          id="standard-basi"
          label="Cadastro de Categoria"
          autoFocus
          margin="normal"
          onKeyDown={(c) => {
            if (c.key === 'Enter') {
              name = c.target.value;
              console.log("indo");
              repo.createCateg(name);
              c.stopPropagation();
              c.preventDefault();
            }
          }}
        />
      </FormControl>
    </Container>
  );
}

export default CategoriaForm;