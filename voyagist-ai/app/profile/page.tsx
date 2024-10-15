import { UserProfile } from '@/components/UserProfile';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserProfile />
    </div>
  );
}
