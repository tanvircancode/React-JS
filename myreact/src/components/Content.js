// import Counter from './Counter';
// import HoverCounter from './HoverCounter';
// import { useContext } from 'react';
// import ThemeContext from '../contexts/themeContext';

// export default function Content() {
//   const context = useContext(ThemeContext);
//   const { theme, switchTheme } = context;
//   console.log('content rendered');
//   return (
//     <div>
//       <h1>This is a Content</h1>
//       <Counter>
//         {(count, incrementCount) => (
//           <HoverCounter
//             count={count}
//             incrementCount={incrementCount}
//             theme={theme}
//             switchTheme={switchTheme}
//           />
//         )}
//       </Counter>
//     </div>
//   );
// }
export default function Content({ children }) {
  return <div className="content">{children}</div>;
}
