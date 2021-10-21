import ComponentB from './ComponentB';
import { useEffect, useReducer } from 'react';

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
                setError('');
            });
      .catch(err => {

        });
  }, []);

  return (
    <div>
      <ComponentB />
    </div>
  );
}
