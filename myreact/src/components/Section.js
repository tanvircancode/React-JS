import Content from './Content';

export default function Section({theme}) {
  return (
    <div>
      <h1>This is a Section</h1>
          <Content theme={theme}/>
    </div>
  );
}
