import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { Dispatch } from 'redux';
import { RepositoriesAction } from '../state/actions';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(actionCreators.SearchRepositories(term) as any);
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
