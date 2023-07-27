/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <div className="index">
        <h1>Welcome back</h1>
        <h2 className="username"><i>{user.displayName}</i></h2>
      </div>
      <div className="options">
        <Link passHref href="/team">
          <div className="option-box-1">
            <h3 className="index-h3">View</h3>
            <h3 className="index-h3">Your</h3>
            <h3 className="index-h3">Team</h3>
          </div>
        </Link>
        <Link href="/members/newMember" passHref>
          <div className="option-box-2">
            <h3 className="index-h3">Add</h3>
            <h3 className="index-h3">New</h3>
            <h3 className="index-h3">Member</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
