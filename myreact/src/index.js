import ReactDOM from 'react-dom';

function Clock({locale}) {
    return (
      <h1 className="heading">
        <span className="text">{new Date().toLocaleTimeString(locale)}</span>
      </h1>
    );
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));