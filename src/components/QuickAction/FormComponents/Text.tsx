import React, { useCallback } from "react";
import { useEditor } from "@grapesjs/react";
//  refactor the mode and stuff to a generic
const Text = ({ title, placeholder = "text", styleProp, callback }: any) => {
  const editor = useEditor();
  const handleChange = useCallback(
    (value: string) => {
      callback(editor, value, styleProp);
      editor.getSelected()?.set(styleProp, value);
    },
    [editor]
  );
  return (
    <div className="flex flex-col ">
      <label htmlFor={title} className="text-gray-700 font-medium text-sm">
        {title}
      </label>
      <input
        id={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
        placeholder={placeholder}
        name={title}
        className="h-10 px-4 rounded-lg border border-gray-300 text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400"
      />
    </div>
  );
};

export default Text;
