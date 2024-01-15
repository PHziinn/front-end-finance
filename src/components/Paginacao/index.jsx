/* eslint-disable react/prop-types */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export const PaginacaoFinance = ({ count, onChange }) => {

  return (

  
    <Stack>
      <Pagination
        className="px-4 py-4 flex justify-end"
        variant="outlined" 
        color="success" 
        count={count}
        onChange={onChange}
        showFirstButton
        showLastButton
        />
    </Stack>
    
  );
}

