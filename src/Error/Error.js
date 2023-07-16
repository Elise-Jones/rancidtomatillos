import "./Error.css"

import { Link } from 'react-router-dom'
const Error = ({ setError }) => {
  return (
    <div className="error-container">
      <h1 className="error-message">Oops... Something went wrong!</h1>
      <Link to="/">
        <button onClick={() => setError('')}>
          <span className="material-icons-round">arrow_back</span>Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
