import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/react-foundation-components/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
