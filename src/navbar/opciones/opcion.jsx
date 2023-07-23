import React from "react";
import { Link } from "react-router-dom";

const Opcion = (props) => {
  const { texto, url } = props;
  return (
    <div className="py-4 px-3 text-gray-700 hover:text-gray-900">
      <Link to={url}>{texto}</Link>
    </div>
  );
};

export default Opcion;
