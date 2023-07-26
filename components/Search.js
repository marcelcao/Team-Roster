// import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function SearchBar({ onKeyUp }) {
  // const [memberQuery, setMemberQuery] = useState('');
  // const router = useRouter();

  const handleChange = (e) => {
    onKeyUp(e.target.value.toLowerCase());
    // console.warn('e.target.value', e.target.value.toLowerCase());
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (memberQuery !== '') router.push(`/search/${memberQuery}`);
  // };

  return (
    <>
      <Form>
        <div className="searchBox">
          <input
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Members here"
            onChange={handleChange}
            type="text"
            // value={memberQuery}
          />
          {/* <Button variant="success" type="submit" onSubmit={handleSubmit} size="sm">search</Button> */}
        </div>
      </Form>
    </>
  );
}

SearchBar.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};
