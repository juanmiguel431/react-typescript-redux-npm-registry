import { ActionType } from '../action-types';
import { RepositoriesAction } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: []
};

export const repositoriesReducer = (state: RepositoriesState = initialState, action: RepositoriesAction): RepositoriesState => {
  switch (action.type) {
    case ActionType.SearchRepositories:
      return { loading: true, error: null, data: [] };
    case ActionType.SearchRepositoriesSuccess:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SearchRepositoriesError:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
