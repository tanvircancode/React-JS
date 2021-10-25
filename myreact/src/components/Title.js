// import React from 'react';

// function Title() {
//   console.log('rendering title.......');
//   return <h2>useCallback Hook tutorial</h2>;
// }
// export default React.memo(Title);
export default function Title({className, text }) {
  return <span className={className}>{text}</span>;
}
