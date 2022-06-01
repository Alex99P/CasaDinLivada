import React,{useState} from "react";
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ postsPerPage, totalPosts, handleChange }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return(
    <>
    <Pagination count={pageNumbers.length}  onChange={handleChange} />
    </>
  );
};

export default PaginationComponent;
