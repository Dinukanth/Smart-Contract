import React, { useState } from "react";
import { motion } from "framer-motion";
import { BlocksResultProps } from "@grapesjs/react";
import { BlockCategory } from "../core/Blocks.const";
import { cn } from "../common/utils.ts";

const BlockSideBarManager = ({
  props,
  selectedBlockGroup,
}: {
  props: BlocksResultProps;
  selectedBlockGroup: BlockCategory;
}) => {
  const { dragStart, dragStop, blocks } = props;

  return (
    <>
      <div className="bg-transparent">
        <div className="bg-transparent">
          <div className="bg-transparent py-2 px-2 text-black border bg-slate-200">
            <motion.div className={cn(" text-black")}>
              <span className="no-underline">{selectedBlockGroup}</span>
            </motion.div>
          </div>
          <div className="bg-transparent px-0 py-0 border-none">
            <motion.div className="grid grid-cols-2 gap-2">
              {blocks
                ?.filter(
                  (block) => block.getCategoryLabel() == selectedBlockGroup
                )
                .map((block) => (
                  <motion.div
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
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlockSideBarManager;
