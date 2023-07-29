import { Container, Card,} from "react-bootstrap";


import React from 'react'

const BlogItems = ({heading,author,text}) => {
  return (
   <Container >
     <Card className="my-2 " style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{heading}</Card.Title>
                <Card.Text className="my-2 ">Name - {author}</Card.Text>
                <Card.Text className="my-2 ">{text} </Card.Text>
              </Card.Body>
            </Card>
   </Container>
  )
}

export default BlogItems