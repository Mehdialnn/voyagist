import { useAppContext } from '@/context/AppContext';

export function UserProfile() {
  const { user } = useAppContext();

  if (!user) return <div>Please sign in to view your profile.</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
}
