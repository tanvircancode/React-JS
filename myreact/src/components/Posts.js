import { useParams } from 'react-router-dom';

export default function Posts({ match }) {
  const { category, topic } = useParams();

  //   console.log(parameters);
  //   const { params } = match;
    // console.log(match);

  return (
    <div>
      <div>
        This is the post page {category} / {topic}
      </div>
    </div>
  );
}
