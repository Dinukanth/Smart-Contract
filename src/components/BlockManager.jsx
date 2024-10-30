import React, { useState } from "react";
import { BlockCategory } from "../core/Blocks.const.ts";
import BlockSideBarManager from "./BlockSideBarManager.tsx";
import ChartPieIconImage from '../File/Image/Chart.png';
import BoltIconImage from '../File/Image/More Circle.png';
import ArrowTrendingUpIconImage from '../File/Image/Activity.png';

export default function BlockManager({ props }) {
  const blockCategories = [
    {
      label: BlockCategory.PatientInformationBlock,
      media: ChartPieIconImage,
    },
    {
      label: BlockCategory.ClinicalDocumentationBlock,
      media: BoltIconImage,
    },
    {
      label: BlockCategory.EncounterRecordsBlock,
      media: ArrowTrendingUpIconImage,
    },
  ];

  return (
    <>
      <div style={{ height: "100%" }} className="border border-gray-300 rounded-lg bg-gray-50 shadow-md mr-5 ">
        <BlockSideBarManager
          props={props}
          blockCategories={blockCategories}
        />
      </div>
    </>
  );
}
