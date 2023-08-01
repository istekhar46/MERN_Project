import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
       animation='border' role='stauts' variant="primary"
       style={{
        width:"70px",
        height:"70px",
        margin:'auto',
        display:'block',
        position:'absolute',
        left:'50%',
        zIndex:'99'
       }}
    >
    </Spinner>
  )
}

export default Loader