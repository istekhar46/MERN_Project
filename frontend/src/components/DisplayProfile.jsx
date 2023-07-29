import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import BlogItems from "./BlogItems";
import { useGetBlogMutation } from "../slices/blog/blogApiSlice";
import { setBlogs } from "../slices/blog/blogslice";
import Loader from "./Loader";

const DisplayProfile = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { userBlogs } = useSelector((state) => state.blog);
  const [getBlog, { isLoading }] = useGetBlogMutation();
  const blog = userBlogs.blog ? userBlogs.blog : [];

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await getBlog().unwrap();
      dispatch(setBlogs({ ...res }));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      {userInfo ? (
        <>
          <Container className="my-5">
            <h1>Welcome {userInfo.name}</h1>

            <Card className="mx-2" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Profile</Card.Title>
                <Card.Text className="my-2 mx-2">
                  Name - {userInfo.name}
                </Card.Text>
                <Card.Text className="my-2 mx-2">
                  Email - {userInfo.email}
                </Card.Text>
                <LinkContainer to="/createblogs">
                  <Button type="button" className="mx-2">
                    Create Blogs
                  </Button>
                </LinkContainer>
                <LinkContainer to="/profileupdate">
                  <Button className="my-2" type="button" variant="secondary">
                    Edit Profile
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            {isLoading && <Loader />}
            <Button
              className="my-2 mx-2"
              variant="info"
              style={{ width: "20rem" }}
              onClick={handleClick}
            >
              Show Blogs
            </Button>
            {blog.length > 0 ? (
              <Row>
                {blog.map((blog) => (
                  <Col key={blog._id} xs={12} md={4}>
                    <BlogItems
                      heading={blog.heading}
                      author={blog.author}
                      text={blog.text}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <></>
            )}
          </Container>
        </>
      ) : (
        <>
          <Navigate to="/login" replace />
        </>
      )}
    </>
  );
};

export default DisplayProfile;
