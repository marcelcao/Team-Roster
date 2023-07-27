/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';
import { getMembers } from '../api/memberData';
import SearchBar from '../components/Search';

export default function Team() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  const filterResult = (query) => {
    if (!query) {
      getAllMembers();
    } else {
      const filter = members.filter((member) => member.firstName.toLowerCase().includes(query) || member.lastName.toLowerCase().includes(query) || member.role.toLowerCase().includes(query));
      setMembers(filter);
    }
  };

  return (
    <div>
      <SearchBar onKeyUp={(query) => filterResult(query)} />
      <Link href="/members/newMember" passHref>
        <Button>Add Member</Button>
      </Link>
      <div className="teams">
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </div>
  );
}
