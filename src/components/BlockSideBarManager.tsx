import React, { useState } from "react";
import { BlocksResultProps } from "@grapesjs/react";
import { cn } from "../common/utils.ts";
import { BlockCategory } from "../core/Blocks.const.ts";

const BlockSideBarManager = ({
  props,
  blockCategories,
}: {
  props: BlocksResultProps;
  blockCategories;
}) => {
  const { dragStart, dragStop, blocks } = props;

  const [selectedBlockGroup, setSelectedBlockGroup] = useState({
    label: BlockCategory.PatientInformationBlock,
  });

  return (
    <>
      <div style={{ height: "100%" }} className="bg-transparent">
        <div style={{ height: "100%" }} className="bg-transparent flex">
          <div
            style={{ width: "80px" }}
            className="bg-transparent py-2 px-2 text-black border bg-slate-200"
          >
            {blockCategories &&
              blockCategories?.map((block) => (
                <button
                  className={`p-3 rounded-full  ${
                    selectedBlockGroup.label == block.label
                      ? "bg-indigo-100"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedBlockGroup(block)}
                >
                  <img src={block.media} alt="Home" className="h-8 w-8" />
                </button>
              ))}
          </div>
          <div className="bg-transparent px-0 py-0 border-none">
            <div className={cn(" text-black text-center")}>
              <span className="no-underline">{selectedBlockGroup.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {blocks
                ?.filter(
                  (block) =>
                    block.getCategoryLabel() == selectedBlockGroup.label
                )
                .map((block) => (
                  <div
                    key={block.getLabel()}
                    draggable
                    className={cn(
                      "flex m-2 bg-white/10 text-black border rounded-2xl flex-col items-center cursor-pointer p-2 transition-colors"
                    )}
                    onDragStart={(event_: any) => {
                      dragStart(block as any, event_.nativeEvent);
                    }}
                    onDragEnd={() => dragStop(false)}
                  >
                    <div
                      className="px-5 py-3 items-center"
                      dangerouslySetInnerHTML={{
                        __html: block.getMedia() as string | TrustedHTML,
                      }}
                    />
                    <div
                      className="text-sm text-center w-full py-2 border-t-2"
                      title={block.getLabel()}
                    >
                      {block.getLabel()}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlockSideBarManager;
