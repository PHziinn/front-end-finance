
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';


export const StyledTable = () => {

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

  return{
    StyledTableCell,
    StyledTableRow,
    TableRow,
  }
}