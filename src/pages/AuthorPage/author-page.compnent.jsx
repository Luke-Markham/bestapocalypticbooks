import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const AuthorPage = ({ books }) => {
  const para = useParams();
  React.useEffect(() => {
    console.log(books);
    if (!books) {
      fetchAuthorPageBookAsync(para.id);
    }
  }, [books, para.id]);
  return <div className="author-page-container"></div>;
};

export default AuthorPage;
