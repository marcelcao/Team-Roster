import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleMember } from '../api/memberData';

export default function MemberCard({ memberObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.firstName} ${memberObj.lastName}?`)) {
      deleteSingleMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="team-card">
      <Card.Img variant="top" src={memberObj.image} alt={memberObj.firstName} style={{ height: '8em' }} className="member-img" />
      <Card.Body>
        <Card.Title>{memberObj.firstName} {memberObj.lastName}</Card.Title>
        <Card.Title className="role">{memberObj.role}</Card.Title>
        {/* DYNAMIC LINK TO EDIT THE MEMBER DETAILS  */}
        <Link href={`/members/edit/${memberObj.firebaseKey}`} passHref>
          <Button className="card-edit">EDIT</Button>
        </Link>
        <Button onClick={deleteThisMember} className="card-delete">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
