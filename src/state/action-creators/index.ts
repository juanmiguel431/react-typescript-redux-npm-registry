import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { RepositoriesAction } from '../actions';

interface Response {
  objects: [
    {
      package: {
        name: string;
      }
    }
  ]
}

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>) => {
    dispatch({
      type: ActionType.SearchRepositories
    });

    try {
      const { data }: { data: Response } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });
      const names = data.objects.map(p => {
        return p.package.name;
      });

      dispatch({
        type: ActionType.SearchRepositoriesSuccess,
        payload: names
      });

    } catch (e) {
      if (e instanceof Error) {
        dispatch({
          type: ActionType.SearchRepositoriesError,
          payload: e.message
        })
      }
    }
  }
};
