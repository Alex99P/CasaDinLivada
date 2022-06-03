import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
  Rating,
  TextareaAutosize,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CloseIcon from "@mui/icons-material/Close";
import PaginationComponent from "./Pagination/Pagination";
import Posts from "./Pagination/Posts";
import axios from "axios";
import { feedback } from "../../redux/actions/booking";
import { useDispatch } from "react-redux";

import "./Feedback.scss";

const Feedback = () => {
  const btnStyle = {
    marginLeft: "175px",
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    height: "36px",
    width: "30%",
    // zIndex:-1,
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [ratingValue, setratingValue] = useState(5);
  const [textareaValue, setTextareaValue] = useState("");
  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);
  const [sumRating, setsumRating] = useState(0);

  const handleFeedback = () => {
    setShowFeedback(!showFeedback);
  };
  const handleTextarea = (value) => {
    setTextareaValue(value.target.value);
   
  };

  //Pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/feedback");

      setPosts(res.data);
      let sum = 0;
      res.data.map((rate) => {
        sum = sum + rate.rating;
      });
      console.log();
      setsumRating((sum / Object.keys(res.data).length).toFixed(1));

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  function onToken() {
    const { _id, name } = JSON.parse(localStorage.getItem("profile")).result;
    const reqObj = {
      user: _id,
      name: name,
      feedback: textareaValue,
      rating: ratingValue,
    };
    setTextareaValue("")
    dispatch(feedback(reqObj));
  }


  return (
    <div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
        spacing={2}
      >
        <Stack
          height="50px"
          width="50px"
          bgcolor="black"
          borderRadius={50}
          color="white"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            {sumRating}
          </Typography>
        </Stack>
        <Typography variant="body1">Excelent</Typography>
        <Stack direction={"row"}>
          <Typography
            variant="body2"
            component={Button}
            className="link"
            onClick={handleFeedback}
          >
            {posts.length} evaluari
          </Typography>
          <DoubleArrowIcon fontSize="small" />
        </Stack>
      </Stack>

      <Grid container direction="row" justifyContent="flex-end">
        {showFeedback && (
          <Grid item>
            <Paper
              className="paperFeedback"
              sx={{
                marginTop: "55px",
                marginBottom: "20px",
                // minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "#DBE2E9",
              }}
              elevation={20}
              width="100%"
            >
              <Stack spacing={4}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ backgroundColor: "white", border: "1px solid black" }}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    spacing={1}
                    sx={{ margin: "10px" }}
                  >
                    <Typography variant="h4">9.9</Typography>
                    <Typography variant="h6">Excelent</Typography>
                    <Typography variant="body1">
                      {posts.length} evaluari
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                  >
                    <IconButton
                      aria-label="app"
                      size="medium"
                      sx={{ color: "black", size: "200px", margin: "10px" }}
                      onClick={handleFeedback}
                    >
                      <CloseIcon fontSize="large" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ marginBottom: 10 }}
                >
                  <Rating
                    name="half-rating"
                    value={ratingValue / 2}
                    precision={0.5}
                    size="large"
                    onChange={(event, newValue) => {
                      setratingValue(newValue * 2);
                    }}
                  />
                  <form>
                    <TextareaAutosize
                      className={"textarea"}
                      aria-label="minimum height"
                      minRows={4}
                      value={textareaValue}
                      placeholder="Type your message here..."
                      style={{ resize: "none", width: "250px" }}
                      onChange={handleTextarea}
                    />
                    <Button
                      variant="outlined"
                      onClick={onToken}
                      style={btnStyle}
                    >
                      Submit
                    </Button>
                  </form>
                  {/* <Stack
                    direction="row"
                    // justifyContent="space-between"
                    // margin="10px 30px 10px 30px"
                    // alignItems="flex-end"
                  > */}

                  <Posts posts={currentPosts} loading={loading} />
                  {/* </Stack> */}
                  <Stack direction="row">
                    <PaginationComponent
                      postsPerPage={postsPerPage}
                      totalPosts={posts.length}
                      handleChange={handleChange}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Feedback;
