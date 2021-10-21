import { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.result,
      };
    case 'ERROR':
      return {
        loading: false,
        error: 'There was a problem fetching!',
        post: {},
      };
    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch('https://jsonpaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'SUCCESS',
          result: data,
        });
      })
      .catch(() => {
        dispatch({ type: 'ERROR' });
      });
  }, []);

    return (
      <div>
        {state.loading ? 'Loading...' : state.post.title}
        {state.error || null}
      </div>
    );
}
