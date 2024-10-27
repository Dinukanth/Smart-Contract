export enum BlockCategory {
  PatientInformationBlock = "Patient Information",
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
	content: ` <input type="date" class="datepicker-field bg-gray-100 border border-gray-300 rounded py-2 px-4" />`
  }
];
