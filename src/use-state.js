// import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';

// const App = () => {
//   return <HookSwitcher/>
// }

// const HookSwitcher = () => {

//   const [color, setColor] = useState('white')
//   const [fonstSize, setFontSize] = useState(14)
  
//   return (
//     <div style={{
//       padding: '10px',
//       backgroundColor: color,
//       fontSize: `${fonstSize}px`
//     }}>
//       How Are You
//       <button
//         onClick={() => setColor('gray')}>
//         Dark
//       </button>
//       <button
//         onClick={() => setColor('white')}>
//         Light
//       </button>
//       <button
//         onClick={() => setFontSize(state => state + 2)}>
//         make font bigger
//       </button>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

