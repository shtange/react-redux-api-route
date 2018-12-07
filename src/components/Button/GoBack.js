import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGoBack = ({ toPath }) => (
  <Link to={toPath || '/'}>Go Back</Link>
);

export default ButtonGoBack;
