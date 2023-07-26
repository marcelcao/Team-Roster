import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchBar() {
  const [memberQuery, setMemberQuery] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setMemberQuery(e.target.value.toLowerCase());
    // console.warn('e.target.value', e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (memberQuery !== '') router.push(`/search/${memberQuery}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="searchBox">
          <input
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Members here"
            onChange={handleChange}
            type="text"
            value={memberQuery}
          />
          <Button variant="success" type="submit" onSubmit={handleSubmit} size="sm">search</Button>
        </div>
      </Form>
    </>
  );
}
