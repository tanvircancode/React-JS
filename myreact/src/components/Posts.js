import { useParams, useHistory } from 'react-router-dom';

export default function Posts() {
    const { category, topic } = useParams();
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    // console.log(history);
  //   const { params } = match;
    // console.log(match);

  return (
    <div>
      <div>
        This is the post page {category} / {topic}
          </div>
          <button type="button" onClick={handleClick}>Go Home</button>
    </div>
  );
}
