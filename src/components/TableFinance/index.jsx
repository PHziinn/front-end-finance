/* eslint-disable react/prop-types */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useConvertValues } from '../../hooks/useConvertValues';
import { useDelete } from './../../hooks/useDelete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';


export const TableFinance = ({listFinance}) => {
  const { convertValues} = useConvertValues()
  const { handleDelete } = useDelete()

  const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
  },
  
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: '#FFFFFF',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#303030',

  },
  '&:nth-of-type(even)': {
      backgroundColor: '#454545',
      
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Descrição</StyledTableCell>
            <StyledTableCell align="center" >Valor</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell align="center">Data</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {listFinance.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell>Nenhuma Finança Encontrada!</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          ) : (
            listFinance.map((finance) => (
              <StyledTableRow key={finance.id}>

                <StyledTableCell 
                  component="th" 
                  scope="row">
                  {finance.titulo}
                </StyledTableCell>

                <StyledTableCell 
                  align="center" 
                  style={finance.categoria === 'Ganho' ? 
                  {color: '#22bd22', fontWeight: 'bold'} : 
                  {color: '#B32222', fontWeight: 'bold'}}>
                  {convertValues(Number(finance.valor))}
                </StyledTableCell>

                <StyledTableCell 
                  align="center" 
                  style={finance.categoria === 'Ganho' ? 
                  {color: '#22bd22', fontWeight: 'bold'} : 
                  {color: '#B32222', fontWeight: 'bold'}}>
                    {finance.categoria}
                </StyledTableCell>

                <StyledTableCell 
                  align="center">
                  {(finance.data)}
                </StyledTableCell>

                <StyledTableCell 
                  align="center">
                  <DeleteForeverIcon 
                    onClick={() => handleDelete(finance.id)}
                  />
                </StyledTableCell>

              </StyledTableRow>
            ))
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
