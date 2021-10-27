export default function Posts({match}) {
    const { params } = match;

    console.log(match);
  return (
    <div>
      <div>This is the post page {params.category} / {params.topic} </div>
    </div>
  );
}
