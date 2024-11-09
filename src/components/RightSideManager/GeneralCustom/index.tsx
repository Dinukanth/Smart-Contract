import { useEditor } from '@grapesjs/react';
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaPlus } from 'react-icons/fa';

const GeneralCustom = () => {
  const [isFormFieldsOpen, setFormFieldsOpen] = useState(true);
  const editor = useEditor();
  

  const toggleSection = () => {
    setFormFieldsOpen(!isFormFieldsOpen);
  };

  return (
    <div className="p-4 w-72 bg-white shadow-md rounded-lg">
      {/* Form Fields Section */}
      <div>
        <button
          onClick={toggleSection}
          className="flex justify-between items-center w-full py-2 font-medium text-gray-700"
        >
          Form fields
          <FaChevronRight
            className={`transform transition-transform ${
              isFormFieldsOpen ? 'rotate-90' : ''
            }`}
          />
        </button>
        {isFormFieldsOpen && (
          <div className="space-y-2 mt-2 bg-gray-100 p-2 rounded-md">
            <div className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
              <span className="text-gray-700">name</span>
              <FaChevronRight className="text-gray-400" />
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm">
              <span className="text-gray-700">email</span>
              <FaChevronRight className="text-gray-400" />
            </div>
            <div className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
              <span className="text-gray-700">message</span>
              <FaChevronRight className="text-gray-400" />
            </div>
            <button className="flex justify-center items-center w-8 h-8 bg-blue-500 text-white rounded-full mx-auto mt-2 shadow-md">
              <FaPlus />
            </button>
          </div>
        )}
      </div>

      {/* Other Sections */}
      <div className="space-y-2 mt-4">
        {["Options", "Actions After Submit", "Email", "Email2", "Submit Button"].map((section) => (
          <div
            key={section}
            className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm cursor-pointer"
          >
            <span className="text-gray-700">{section}</span>
            <FaChevronRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralCustom;
