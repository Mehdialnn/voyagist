import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export function UserPreferences() {
  const { user } = useAppContext();
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  if (!user) return <div>Please sign in to set your preferences.</div>;

  const handleSave = () => {
    // In a real app, you'd save these preferences to a database
    console.log('Saving preferences:', { currency, language });
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <div>
        <label>Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div>
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
}
