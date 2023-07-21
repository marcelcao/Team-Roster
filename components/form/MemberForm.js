import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMember, updateMember } from '../../api/memberData';

const initialState = {
  first_name: '',
  last_name: '',
  image: '',
  role: '',
};

export default function MemberForm({ memberObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (memberObj.firebaseKey) {
      setFormInput(memberObj);
    }
  }, [memberObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memberObj.firebaseKey) {
      updateMember(formInput)
        .then(() => router.push(`/newMember/${memberObj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMember(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateMember(patchPayload).then(() => {
          router.push('/team');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</h2>

      {/* First name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Member's First Name"
          name="firstName"
          value={formInput.firstName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* last name  */}
      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Member's Last Name"
          name="lastName"
          value={formInput.lastName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* role */}
      <FloatingLabel controlId="floatingInput3" label="Role" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Member's role"
          name="role"
          value={formInput.role}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE */}
      <FloatingLabel controlId="floatingInput3" label="Member Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Member Image URL"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</Button>
    </Form>
  );
}

MemberForm.propTypes = {
  memberObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};
MemberForm.defaultProps = {
  memberObj: initialState,
};
