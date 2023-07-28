import { Container, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const DisplayProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <>
          <Container className="my-5">
            <h1>Welcome {userInfo.name}</h1>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Profile</Card.Title>
                <Card.Text className="my-2">Name - {userInfo.name}</Card.Text>
                <Card.Text className="my-2">Email - {userInfo.email}</Card.Text>
                <LinkContainer to="/profileupdate">
                  <Button className="my-2" type="button" variant="primary">
                    Edit Profile
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
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
