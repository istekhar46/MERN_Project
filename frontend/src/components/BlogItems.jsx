import { Container, Card } from "react-bootstrap";
import { BsXSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useDeleteBlogMutation } from "../slices/blog/blogApiSlice";
import { toast } from "react-toastify";
import { filter } from "../slices/blog/blogslice";
import Loader from "./Loader";

const BlogItems = ({ heading, author, text, id }) => {
  const dispatch = useDispatch();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteBlog(id).unwrap();
      dispatch(filter({ res }));
      toast.success("Blog deleted");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Card className="my-2 " style={{ width: "100%" }}>
        <Card.Body style={{ backgroundColor: "#e8f7fc" }}>
          <button
            style={{
              margin: "2px",
              background: "transparent",
              border: "none",
              position: "absolute",
              right: "0",
              top: "0",
            }}
            onClick={handleClick}
          >
            <BsXSquare />
          </button>
          <Card.Title className='d-flex align-items-center justify-content-center '>
            <span style={{ color: "#0f4c81" }}>{heading}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
          <Card.Text className="my-3 ">{text} </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogItems;
