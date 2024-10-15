import { UserPreferences } from '@/components/UserPreferences';

export default function PreferencesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Preferences</h1>
      <UserPreferences />
    </div>
  );
}
