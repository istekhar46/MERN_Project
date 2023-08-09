import "../index.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPublicBlogMutation } from "../slices/blog/blogApiSlice";
import { setPublicBlogs } from "../slices/blog/publicBlogSlice";
import Loader from "./Loader";

const PublicBlogContainer = () => {
  const dispatch = useDispatch();

  const { publicBlogs } = useSelector((state) => state.publicBlog);
  const [getPublicBlog, { isLoading }] = useGetPublicBlogMutation();
  const publicBlog = publicBlogs.blog ? publicBlogs.blog : [];

  const fetchPublicBlogs = async () => {
    const res = await getPublicBlog().unwrap();
    dispatch(setPublicBlogs({ ...res }));
  };

  useEffect(() => {
    fetchPublicBlogs();
  }, []);

  return (
    <>
      <Container>
        <h1 className="flex">Welcome to the Blog posts</h1>

        {isLoading && <Loader />}

        {publicBlog.length > 0 ? (
          <>
            <Row>
              {publicBlog.map((blog) => (
                <Col key={blog._id} className="my-2" xs={12} md={12}>
                  <Card>
                    <Card.Body
                      className="d-flex flex-row bd-highlight  border-0"
                      style={{ backgroundColor: "#e6e6e6" }}
                    >
                      <Card.Img
                        className="w-50"
                        src="https://thumbs.dreamstime.com/z/working-home-laptop-woman-writing-blog-female-hands-keyboard-65929526.jpg?w=992"
                      ></Card.Img>
                      <Container className="position-relative">
                        <Card.Title
                          className="flex"
                          style={{ color: "#0f4c81" }}
                        >
                          {blog.heading}
                        </Card.Title>
                        <Card.Subtitle>Writer: {blog.author}</Card.Subtitle>
                        {/* <Card.Text className="mt-4">{blog.text}</Card.Text> */}
                        {blog.text.split(' ').slice(0, 150).join(' ')} ...
                      <Button className='position-absolute bottom-0 end-0'>Read More</Button>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default PublicBlogContainer;
