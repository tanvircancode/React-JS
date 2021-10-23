// import React from 'react';

// function Button({ handleClick, children }) {
//   console.log(`rendering button ${children}`);
//   return (
//     <p>
//       <button type="button" onClick={handleClick}>
//         {children}
//       </button>
//     </p>
//   );
// }
// export default React.memo(Button);
export default function Button({ link, text }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}