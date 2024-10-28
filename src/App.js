import React, { useRef } from "react";
import GjsEditor, {
  BlocksProvider,
  Canvas,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
  WithEditor,
} from "@grapesjs/react"; // Import GjsEditor component
import "grapesjs/dist/css/grapes.min.css"; // GrapesJS default styles
import "./App.css"; // Your custom styles
import Button from "./File/Button.ts";
import TextInput from "./File/Textinput.ts";
import Dropdown from "./File/Dropdown.ts";
import DatePicker from "./File/Datepicker.ts";
import FileUpload from "./File/Fileupload.ts";
import grapesjs from "grapesjs";
import {
  BlockCategory,
  PatientInformation_Block,
} from "./core/Blocks.const.ts";
import BlockManager from "./components/BlockManager.tsx";
import { AnimatePresence } from "framer-motion";
import CanvasToolbar from "./TopToolbar/CanvasToolbar.tsx";
import PropertiesManager from "./components/PropertiesManager.tsx";
import RightSideManager from "./components/RightSideManager/index.tsx";
import './App.css';

function App() {
  const containerRef = useRef(null);

  // Editor options for GrapesJS
  const gjsOptions = {
    height: "100vh",
    storageManager: {
      type: "local",
      autosave: true,
      autoload: true,
      stepsBeforeSave: 1,
    },
    blockManager: {
      custom: true,
      blocks: [
        ...PatientInformation_Block.map((block) => {
          return {
            ...block,
            category: BlockCategory.PatientInformationBlock,
          };
        }),
      ],
    },
    canvas: {
      scripts: [
        "https://cdn.tailwindcss.com",
        "https://kit.fontawesome.com/ba1a5bd07e.js",
      ],
      styles: [""],
    },
  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        plugins={[
          {
            id: "gjs-blocks-basic",
            src: "https://unpkg.com/grapesjs-blocks-basic",
          },
          {
            id: "grapesjs-rulers",
            src: "https://unpkg.com/grapesjs-rulers",
          },
          Button,
          TextInput,
          Dropdown,
          DatePicker,
          FileUpload,
        ]}
      >
        <CanvasToolbar />
        <div style={{ display: "flex" }} className="flex">
          <div style={{ width: 300, backgroundColor: "#f5f5f5" }}>
            <BlocksProvider>
              {(props) => <BlockManager props={props} />}
            </BlocksProvider>
          </div>
          <div style={{ flex: 1 }} className="w-full">
            <div className="rounded-xl relative">
              <Canvas className="h-[calc(100%-72px)]" />
            </div>
          </div>
          <div style={{ width: 300, backgroundColor: "#f5f5f5" }}>
            <PropertiesManager />
            <StylesProvider>
              {(styleProps) => (
                <TraitsProvider>
                  {(traitProps) => (
                    <SelectorsProvider>
                      {(selectorProps) => (
                        <RightSideManager
                          styleProps={styleProps}
                          traitProps={traitProps}
                          selectorProps={selectorProps}
                        />
                      )}
                    </SelectorsProvider>
                  )}
                </TraitsProvider>
              )}
            </StylesProvider>
          </div>
        </div>
      </GjsEditor>
    </>
  );
}

export default App;
