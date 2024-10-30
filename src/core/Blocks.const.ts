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
