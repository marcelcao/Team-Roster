/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getMembers } from '../../api/memberData';
import MemberCard from '../../components/MemberCard';
import { useAuth } from '../../utils/context/authContext';

export default function MemberQueryResult() {
  const [searchMembers, setSearchMembers] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { memberQuery } = router.query;

  const queryResults = () => {
    getMembers(user.uid).then((searchResults) => {
      const filter = searchResults.filter((member) => member.firstName.toLowerCase().includes(memberQuery) || member.lastName.toLowerCase().includes(memberQuery));
      setSearchMembers(filter);
    });
  };

  useEffect(() => {
    queryResults();
    return () => {
      setSearchMembers([]);
    };
  }, [memberQuery]);

  return (
    <div>
      {searchMembers.map((obj) => (
        <MemberCard key={obj.firebaseKey} memberObj={obj} onUpdate={queryResults} />
      ))}
    </div>
  );
}
