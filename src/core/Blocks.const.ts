export enum BlockCategory {
  PatientInformationBlock = "Patient Information",
  ClinicalDocumentationBlock = "Clinical Documentation",
  EncounterRecordsBlock = "Encounter Records",
  OrderAndResultsBlock = "Order and Results",
  
}

export const PatientInformation_Block = [
  {
    id: "textInput",
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
    content: `<div class="flex flex-col space-y-2">
  <div class="text-gray-700 font-medium text-sm">
    Your Label Text
  </div>
  <input
    id="text-input"
    data-gjs-type="text-input"
    type="text"
    class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4"
    placeholder="Double click to edit"
  />
</div>
`,
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

  {
    id: "PatientForm",
    label: "Patient Form",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 8-8 8z"/>
            </svg>`,
    content: `
      <div class="flex justify-center"> <!-- Center the form on the page -->
        <form data-gjs-type="form-field" class="space-y-4 text-left w-full max-w-md"> <!-- Restrict form width and keep text left-aligned -->
          <!-- Gender Dropdown -->
          <div>
            <label data-gjs-type="label-field" class="block text-gray-700 font-medium mb-2">Gender</label>
            <select data-gjs-type="select-field" class="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
  
          <!-- Age Input -->
          <div>
            <label data-gjs-type="label-field" class="block text-gray-700 font-medium mb-2">Age</label>
            <input type="number" class="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" placeholder="Enter patient age" />
          </div>
  
          <!-- Signs and Symptoms Textarea -->
          <div>
            <label data-gjs-type="label-field" class="block text-gray-700 font-medium mb-2">Signs and Symptoms</label>
            <textarea class="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" rows="3" placeholder="Describe patient's signs and symptoms"></textarea>
          </div>
  
          <!-- Findings Textarea -->
          <div>
            <label data-gjs-type="label-field" class="block text-gray-700 font-medium mb-2">Findings</label>
            <textarea class="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" rows="3" placeholder="Provide a description of your findings"></textarea>
          </div>
  
          <!-- Submit Button -->
          <div>
            <button data-gjs-type="button-field" type="submit" class="w-full bg-black text-white font-medium py-2 rounded">Get Diagnoses</button>
          </div>
        </form>
      </div>
    `,
  },

  {
    id: "OneColumnLayout",
    label: "One Column Layout",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><rect x="5" y="5" width="14" height="14"/></svg>`,
    content: `
      <div class="grid grid-cols-1 border border-green-500 p-4">
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
      </div>
    `,
  },

  {
    id: "TwoColumnLayout",
    label: "Two Column Layout",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 5h6v14H5V5zm8 0h6v14h-6V5z"/></svg>`,
    content: `
      <div class="grid grid-cols-2 gap-4 border border-green-500 p-4">
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
      </div>
    `,
  },

  {
    id: "ThreeColumnLayout",
    label: "Three Column Layout",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 5h4.67v14H5V5zm6.67 0h4.67v14h-4.67V5zm6.67 0H23v14h-4.67V5z"/></svg>`,
    content: `
      <div class="grid grid-cols-3 gap-4 border border-green-500 p-4">
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
      </div>
    `,
  },

  {
    id: "FourColumnLayout",
    label: "Four Column Layout",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 5h3.5v14H5V5zm5.5 0h3.5v14H10.5V5zm5.5 0h3.5v14h-3.5V5zm5.5 0H23v14h-3.5V5z"/></svg>`,
    content: `
      <div class="grid grid-cols-4 gap-4 border border-green-500 p-4">
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
        <div class="column border border-gray-300 relative p-4">
          <span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-1 py-0.5 rounded">Column</span>
          <div class="flex justify-center items-center h-full">
            <button class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
          </div>
        </div>
      </div>
    `,
  }
  
  
  
  
  
  
  
  





  



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
    content: `<input data-gjs-type="textInput" type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="Double click to edit" />`,
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
