import React from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div className="repositories-list">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
        <button>Search</button>
      </form>
    </div>
  );
};
