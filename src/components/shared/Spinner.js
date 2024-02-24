import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => {
  return (
    <Spinner animation="border" role="status" className="mt-2">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
};

export default SpinnerComponent;