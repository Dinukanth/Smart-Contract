import React, { useRef, useCallback, useState } from "react";
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
import grapesjs from "grapesjs";
import {
  BlockCategory,
  ClinicalDocumentation_Block,
  EncounterRecords_Block,
  PatientInformation_Block,
} from "./core/Blocks.const.ts";
import BlockManager from "./components/BlockManager.jsx";
import PropertiesManager from "./components/PropertiesManager.tsx";
import RightSideManager from "./components/RightSideManager/index.tsx";
import './App.css';
import Navbar from "./File/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Form from "./File/Form.ts";
import { traitManager } from "./components/RightSideManager/TraitManager.tsx";
import { useOnClickOutside } from "usehooks-ts";
import LoadOverrides from "./components/Overrides/index.tsx";
import QuickAction from "./components/QuickAction/index.tsx";
import TextInput from "./File/Textinput.ts";
 
function App() {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const containerRef = useRef(null);

  const closeQuickActions = useCallback(() => {
		setShowQuickActions(false);
	}, [setShowQuickActions]);

	useOnClickOutside(containerRef, closeQuickActions);

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
        ...ClinicalDocumentation_Block.map((block) => {
          return {
            ...block,
            category: {
              id: BlockCategory.ClinicalDocumentationBlock,
              open: false,
              label: BlockCategory.ClinicalDocumentationBlock,
              attributes: {
                class: "icon-clinic",
              },
            },
          };
        }),

        ...PatientInformation_Block.map((block) => {
          return {
            ...block,
            category: {
              id: BlockCategory.PatientInformationBlock,
              open: true,
              label: BlockCategory.PatientInformationBlock,
              attributes: {
                class: "icon-patient",
              },
            },
          };
        }),

        ...EncounterRecords_Block.map((block) => {
          return {
            ...block,
            category: {
              id: BlockCategory.EncounterRecordsBlock,
              open: true,
              label: BlockCategory.EncounterRecordsBlock,
              attributes: {
                class: "icon-patient",
              },
            },
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
    plugins:[LoadOverrides, TextInput],
    pluginsOpts: {
      [LoadOverrides.toString()]: {
        setShowQuickActions: () => {
          setShowQuickActions(true);
        },
      },
      [TextInput.toString()]: {
        setShowQuickActions: () => {
          setShowQuickActions(true);
        },
      },
    }
  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
      >
        <WithEditor>
         <Header/>
        </WithEditor>
        <div style={{ display: "flex" }} className="flex">
          {/* <Navbar /> */}
          <div style={{ width: 320, backgroundColor: "#f5f5f5" }}>
            <BlocksProvider>
              {(props) => <BlockManager props={props} />}
            </BlocksProvider>
          </div>
          <div style={{ flex: 1 }} className="w-full">
            <div className="rounded-xl relative">
            {showQuickActions ? (
								<div ref={containerRef}>
									<WithEditor>
										<QuickAction />
									</WithEditor>
								</div>
							) : null}
              <Canvas className="h-[calc(100%-72px)]" style={{ backgroundColor: "#f5f5f5" }}/>
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
