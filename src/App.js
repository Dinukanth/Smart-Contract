import React from 'react';
import GjsEditor from '@grapesjs/react'; // Import GjsEditor component
import 'grapesjs/dist/css/grapes.min.css'; // GrapesJS default styles
import './App.css'; // Your custom styles
import Button from './File/Button.ts';
import TextInput from './File/Textinput.ts';
import Dropdown from './File/Dropdown.ts';
import DatePicker from './File/Datepicker.ts';
import FileUpload from './File/Fileupload.ts';

function App() {
  // Editor options for GrapesJS
  const gjsOptions = {
    container: '#gjs',
    height: '100vh',
    width: 'auto',
    storageManager: { autoload: false }, // Disable autoload for now
    blockManager: {
      appendTo: '#blocks', // Blocks will be added in the left sidebar
    },
    styleManager: {
      appendTo: '#right-sidebar', // Right sidebar for traits and properties
    },
  };

  // Callback when the editor is initialized
  const onEditor = (editor) => {
    console.log('GrapesJS editor initialized:', editor);
    // Example block addition
    editor.BlockManager.add('text-block', {
      label: 'Text',
      content: '<p>Insert your text here</p>',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Contract Interface Builder</h1>
      </header>

      <div className="container">
        {/* Left Sidebar for Blocks and Template Variables */}
        <aside className="left-sidebar">
          <div id="blocks-section">
            <h2>Blocks</h2>
            <div id="blocks"></div> {/* GrapesJS will append blocks here */}
          </div>

         
        </aside>

        {/* GrapesJS Editor Component */}
        <main className="editor-container">
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
              Button,
              TextInput,
              Dropdown,
              DatePicker,
              FileUpload
            ]}
            onEditor={onEditor}
          />
        </main>

        {/* Right Sidebar for Properties */}
        <aside className="right-sidebar">
          <div id="right-sidebar">
            <h2>Properties</h2>
            {/* Traits and style properties will be appended here by GrapesJS */}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
