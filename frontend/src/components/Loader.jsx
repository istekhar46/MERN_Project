import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
       animation='border' role='stauts' variant="primary"
       style={{
        width:"70px",
        height:"70px",
        margin:'auto',
        display:'block'
       }}
    >
    </Spinner>
  )
}

export default Loader