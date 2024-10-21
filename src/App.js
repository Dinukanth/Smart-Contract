
import React from 'react';
import { Editor } from '@grapesjs/react'; // Correct import for the GrapesJS editor component
import 'grapesjs/dist/css/grapes.min.css'; // GrapesJS default styles
import './App.css'; // Your existing styles

function App() {
  const editorConfig = {
    container: '#gjs', // GrapesJS editor container
    fromElement: true, // Use any pre-existing content inside the container
    storageManager: false, // Disable storage manager for now
    height: '100vh', // Set the height of the editor
    width: 'auto', // Set the width of the editor to fit the container
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Contract Interface Builder</h1>
        {/* Render the GrapesJS Editor component */}
        <Editor id="gjs" config={editorConfig} />
      </header>
    </div>
  );
}

export default App;
