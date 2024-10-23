import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



















// import React, { useEffect, useRef } from 'react';
// import grapesjs from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';
// import './App.css'; // Add your custom styles

// function App() {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     // Initialize GrapesJS editor
//     const editor = grapesjs.init({
//       container: '#gjs',
//       height: '100vh',
//       width: 'auto',
//       storageManager: { autoload: false },
//       blockManager: {
//         appendTo: '#blocks', // Attach the blocks to the left sidebar
//       },
//       styleManager: {
//         appendTo: '#right-sidebar', // Attach the style manager to the right sidebar
//       },
//       panels: {
//         defaults: [
//           {
//             id: 'layers',
//             el: '#right-sidebar', // Ensure this ID is correct and exists
//             resizable: true,
//           },
//         ],
//       },
//     });

//     // Adding blocks to the BlockManager
//     editor.BlockManager.add('text', {
//       label: 'Text',
//       content: '<div class="text">Insert your text here</div>',
//     });

//     editor.BlockManager.add('link', {
//       label: 'Link',
//       content: '<a href="#">Link</a>',
//     });

//     editor.BlockManager.add('image', {
//       label: 'Image',
//       content: '<img src="https://via.placeholder.com/150" alt="Placeholder Image" />',
//     });

//     editor.BlockManager.add('video', {
//       label: 'Video',
//       content: '<video controls><source src="movie.mp4" type="video/mp4"> Your browser does not support the video tag.</video>',
//     });

//     editorRef.current = editor;

//     return () => {
//       editor.destroy();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Smart Contract Interface Builder</h1>
//       </header>

//       <div className="container">
//         {/* Left Sidebar for Blocks */}
//         <aside className="left-sidebar">
//           <div id="blocks-section">
//             <h2>Blocks</h2>
//             <div id="blocks"></div> {/* Blocks from GrapesJS BlockManager */}
//           </div>

//           <div id="template-variables-section">
//             <h2>Template Variables</h2>
//             <button className="add-variable">+ New Variable</button>
//             <div className="variables">
//               <p>No variables added yet.</p>
//             </div>
//           </div>
//         </aside>

//         {/* GrapesJS Editor (Center) */}
//         <main id="gjs" className="editor-container"></main> {/* GrapesJS will attach here */}

//         {/* Right Sidebar for Properties and Traits */}
//         <aside className="right-sidebar">
//           <div id="right-sidebar">
//             <h2>Properties</h2>
//             {/* Traits and properties will be appended here */}
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;
