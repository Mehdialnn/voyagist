import { useAppContext } from '@/context/AppContext';

export function PastSearches() {
  const { user } = useAppContext();
  // In a real app, you'd fetch past searches from a database
  const pastSearches = ['Paris hotels', 'New York restaurants', 'Tokyo attractions'];

  if (!user) return <div>Please sign in to view your past searches.</div>;

  return (
    <div>
      <h2>Past Searches</h2>
      <ul>
        {pastSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
}
