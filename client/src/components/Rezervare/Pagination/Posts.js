import React from "react";
import { Stack, Typography,Divider } from "@mui/material";
import "../Feedback.scss";


const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="postContainer">
      
      {posts.map((post) => (
         
       <Stack  key={post._id} m={2}  mt={4} spacing={2}>
            <Stack  
              direction="row"
              justifyContent="space-between"
            >
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="h5">{post.rating}</Typography>
            </Stack>
            <Stack>
            <Typography variant="body1">{post.feedback}</Typography>
            <Stack mb={5}>
            <Divider />
            </Stack>

            </Stack>
           
          </Stack>


      ))}
    </div>
  );
};

export default Posts;
