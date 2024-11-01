export enum BlockCategory {
  PatientInformationBlock = "Patient Information",
  ClinicalDocumentationBlock = "Clinical Documentation",
  EncounterRecordsBlock = "Encounter Records",
  OrderAndResultsBlock = "Order and Results",
}

export const PatientInformation_Block = [
  {
    id: "TextInput",
    label: "Text Input",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 2v14h18V5H3zm2 2h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2z" />
</svg>
`,
    content: `<input type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="Double click to edit" />`,
  },

  {
    id: "DatePicker",
    label: "Date Picker",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M7 10h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v14h14V6H5zm2-2h2V2h2v2h4V2h2v2h2v2H5V4h2z" />
</svg>`,
    content: ` <input type="date" class="datepicker-field bg-gray-100 border border-gray-300 rounded py-2 px-4" />`,
  },
  



  
  {
    id: "Dropdown",
    label: "Dropdown",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M5 7h14v2H5zm0 4h14v2H5zm0 4h14v2H5z"/>
  </svg>`,
    content: `
    <select class="dropdown-field bg-gray-100 border border-gray-300 rounded py-2 px-4">
      <option value="Option 1">Gender</option>
      <option value="Option 2">Male</option>
      <option value="Option 3">Female</option>
    </select>
  `,
  },

  {
    id: "FileUpload",
    label: "File Upload",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2L4 10h3v8h10v-8h3L12 2zm0 3.5l5.5 5.5H13v8H11v-8H6.5L12 5.5z"/>
  </svg>`,
    content: `
    <div class="file-drop-area bg-gray-800 text-white text-center border-2 border-dashed border-gray-500 p-4 rounded-lg cursor-pointer">
      Drop files here or click to upload
      <input type="file" class="hidden file-upload-field" />
    </div>
    <span class="file-upload-name text-gray-600 mt-2 block">No file selected</span>
  `,
  },

  {
    id: "Button",
    label: "Button",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 17h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/>
  </svg>`,
    content: `
    <button class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Double click to change text
    </button>`,
  },


  {
    id: "MultiLineText",
    label: "Multi-Line Text",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 2v14h18V5H3zm2 2h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2z"/></svg>`,
    content: `<textarea class="textarea-field bg-gray-100 border border-gray-300 rounded py-2 px-4" rows="4" placeholder="Enter your text here..."></textarea>`,
  },

  // Radio Button
  {
    id: "RadioButton",
    label: "Radio Button",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>`,
    content: `
      <div class="radio-group">
        <label class="radio-label inline-flex items-center">
          <input type="radio" name="radioGroup" value="Option 1" class="radio-input">
          <span class="ml-2">Option 1</span>
        </label>
        <label class="radio-label inline-flex items-center ml-4">
          <input type="radio" name="radioGroup" value="Option 2" class="radio-input">
          <span class="ml-2">Option 2</span>
        </label>
      </div>
    `,
  },

  // Status Indicator
  {
    id: "StatusIndicator",
    label: "Status Indicator",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5" fill="white"/></svg>`,
    content: `
      <div class="status-indicator flex items-center">
        <span class="status-dot bg-green-500 w-3 h-3 rounded-full mr-2"></span>
        <span class="status-text">Active</span>
      </div>
    `,
  },

  // Select Box
  {
    id: "SelectBox",
    label: "Select Box",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 7h14v2H5zm0 4h14v2H5zm0 4h14v2H5z"/></svg>`,
    content: `
      <select class="select-box bg-gray-100 border border-gray-300 rounded py-2 px-4">
        <option>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    `,
  },

  // Search Bar
  {
    id: "SearchBar",
    label: "Search Bar",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.474 6.474 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    content: `
      <div class="search-bar flex items-center border border-gray-300 rounded py-2 px-4 bg-gray-100">
        <input type="text" class="search-input flex-1 bg-transparent outline-none" placeholder="Search...">
        <button class="search-btn text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.474 6.474 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
      </div>
    `,
  },



  



];

export const ClinicalDocumentation_Block = [
  {
    id: "ClinicalTextInput",
    label: "Text Input",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 2v14h18V5H3zm2 2h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2z" />
</svg>
`,
    content: `<input type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="Double click to edit" />`,
  },
  {
    id: "ClinicalButton",
    label: "Button",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 17h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/>
  </svg>`,
    content: `
    <button class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Double click to change text
    </button>`,
  },
];

export const EncounterRecords_Block = [
  {
    id: "encounterTextInput",
    label: "Text Input",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 2v14h18V5H3zm2 2h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2z" />
</svg>
`,
    content: `<input type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="Double click to edit" />`,
  },

  {
    id: "encounterDatePicker",
    label: "Date Picker",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M7 10h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v14h14V6H5zm2-2h2V2h2v2h4V2h2v2h2v2H5V4h2z" />
</svg>`,
    content: ` <input type="date" class="datepicker-field bg-gray-100 border border-gray-300 rounded py-2 px-4" />`,
  },
  {
    id: "encounterFileUpload",
    label: "File Upload",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2L4 10h3v8h10v-8h3L12 2zm0 3.5l5.5 5.5H13v8H11v-8H6.5L12 5.5z"/>
  </svg>`,
    content: `
    <div class="file-drop-area bg-gray-800 text-white text-center border-2 border-dashed border-gray-500 p-4 rounded-lg cursor-pointer">
      Drop files here or click to upload
      <input type="file" class="hidden file-upload-field" />
    </div>
    <span class="file-upload-name text-gray-600 mt-2 block">No file selected</span>
  `,
  },
];

export const OrderAndResults_Block = [
  {
    id: "TextInput",
    label: "Text Input",
    media: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 2v14h18V5H3zm2 2h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2z" />
</svg>
`,
    content: `<input type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="Double click to edit" />`,
  },
  {
    id: "Button",
    label: "Button",
    media: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 17h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/>
  </svg>`,
    content: `
    <button class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Double click to change text
    </button>`,
  },
];
