import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateBlogMutation } from "../slices/blog/blogApiSlice";
import Loader from "./Loader";
import { reset } from "../slices/blog/blogslice";

const BlogForm = () => {
  const [heading, setHeading] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  //   const { blogs } = useSelector((state) => state.blog);
  const [createBlogs, { isLoading }] = useCreateBlogMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createBlogs({ heading, author, text }).unwrap();
      toast.success("Blog successfully created");
      dispatch(reset())
      setAuthor('')
      setText('')
      setHeading('')
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };
  return (
    <Container className="my-4">
      <h2 className="justify-content-center">Welcome to Blog writing</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="heading">
          <Form.Label>Enter Heading of the Blog</Form.Label>
          <Form.Control
            type="text"
            placeholder="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Enter Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Write Your Blog here</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Start Writing"
            style={{ height: "200px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        {isLoading && <Loader />}
        <Button variant="primary" type="submit">
          Post Blog
        </Button>
      </Form>
    </Container>
  );
};

export default BlogForm;
