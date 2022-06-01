import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Locatie = () => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
   <>
   <Stack spacing={2}>
      <Typography>Page: </Typography>
      <Pagination count={2} onChange={handleChange} />
    </Stack>
   </>
   
  );
};

export default Locatie;
