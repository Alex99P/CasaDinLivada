import React from "react";
import { Stack, Typography } from "@mui/material";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {posts.map((post) => (
         
       <Stack  key={post._id}  width="300px" spacing={2}>
            <Stack  
              direction="row"
              justifyContent="space-between"
              // margin="10px 30px 10px 30px"
              alignItems="flex-end"
              width="100%"
            >
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="h5">{post.rating}</Typography>
            </Stack>
            <Stack>
            <Typography variant="body1">{post.feedback}</Typography>
            </Stack>
          </Stack>


      ))}
    </div>
  );
};

export default Posts;
