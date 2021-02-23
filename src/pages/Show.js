import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
// eslint-disable-next-line arrow-body-style
const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  // eslint-disable-next-line no-console
  console.log('show', show);

  return <div>This is my show page</div>;
};

export default Show;
