import React, { useState } from "react";
import { BlockCategory } from "../core/Blocks.const.ts";
import BlockSideBarManager from "./BlockSideBarManager.tsx";
import Navbar from "../File/Navbar.jsx";

export default function BlockManager({ props }) {
  const [selectedBlockGroup, setSelectedBlockGroup] = useState<BlockCategory>(
    BlockCategory.PatientInformationBlock
  );

  return (

    <>
    <div className="border border-gray-300 rounded-lg bg-gray-50 shadow-md mr-5 ">
    
      <BlockSideBarManager
        props={props}
        selectedBlockGroup={selectedBlockGroup}
      />
    </div>

    <Navbar/>


    </>
  );
}
