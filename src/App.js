import React from 'react';
import GjsEditor from '@grapesjs/react'; // Import the GjsEditor component
import 'grapesjs/dist/css/grapes.min.css'; // GrapesJS default styles
import './App.css'; // Your custom styles

function App() {
  const gjsOptions = {
    container: '#gjs', // Container for GrapesJS editor
    height: '100vh',
    width: '100%',
    storageManager: { autoload: false }, // Disable autoload for now
  };

  const onEditor = (editor) => {
    console.log('GrapesJS editor initialized:', editor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Contract Interface Builder</h1>
        <GjsEditor
          id="gjs"
          className="gjs-custom-editor overflow-y-hidden text-black bg-[#F7F9F6]"
          grapesjs="https://unpkg.com/grapesjs"
          grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
          options={gjsOptions}
          plugins={[
            {
              id: 'gjs-blocks-basic',
              src: 'https://unpkg.com/grapesjs-blocks-basic',
            },
            {
              id: 'grapesjs-rulers',
              src: 'https://unpkg.com/grapesjs-rulers',
            },
            // LoadOverrides and TraitManager should be defined or imported here
          ]}
          onEditor={onEditor}
        />
      </header>
    </div>
  );
}

export default App;
