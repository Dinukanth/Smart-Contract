const DatePicker = (editor: any, options: Record<string, unknown> = {}) => {
    const domComponents = editor.DomComponents;
  
    // Add the date picker block to the editor
    editor.BlockManager.add("date-picker", {
      label: 'Date Picker',
      content: {
        type: "date-picker",
        content: `
          <input type="date" class="datepicker-field bg-gray-100 border border-gray-300 rounded py-2 px-4" />
        `,
        classes: ["datepicker"],
      },
      category: {
        id: "elements-1",
        open: false,
        attributes: {
          class: "icon-elements",
        },
      },
      attributes: {
        class: "datepicker-icon-selected hover:border-orange-600 hover:bg-[#483831] pt-8",
      },
    });
  
    // Define the date picker component type
    domComponents.addType("date-picker", {
      view: {
        onRender() {
          this.el.addEventListener("dblclick", () => {
            this.openModal();
          });
        },
        openModal() {
          const modal = editor.Modal;
          const uniqueId = Date.now();
          const datePickerSettingsHTML = `
            <style>
              .gjs-mdl-dialog {
                width: 600px !important;
                border-radius: 5px;
              }
            </style>
            <div class="p-4 w-[600px] border-[0.5px] dark:border-none border-[#E6E6E6] rounded-[5px]">
              <div class="flex justify-between items-center">
                <label for="modal-date-format-${uniqueId}">Date Format</label>
                <button class="close-button">
                  <i class="fas fa-times dark:text-white text-black"></i>
                </button>
              </div>
              <input
                id="modal-date-format-${uniqueId}"
                name="date-format"
                type="text"
                placeholder="Enter date format (e.g. YYYY-MM-DD)"
                class="block w-full mt-2 rounded-[5px] dark:bg-[#373737] bg-[#F3F3F3]  h-[38px] shadow-sm outline-none dark:placeholder:text-white placeholder:text-black px-2 dark:text-white text-black text-sm"
                autocomplete="off"
              />
              <div class="flex flex-row-reverse mt-2">
                <button
                  type="button"
                  class="rounded-[5px] add-date-settings text-white bg-[#FC5D19] px-2.5 w-[137px] h-[38px] text-sm"
                >
                  Apply
                </button>
              </div>
            </div>
          `;
  
          modal.setContent(datePickerSettingsHTML);
          modal.setTitle("Edit Date Picker Settings");
          modal.open();
  
          const closeButton = document.querySelector(".close-button") as HTMLElement;
          closeButton.addEventListener("click", () => modal.close());
  
          document
            .querySelectorAll(".add-date-settings")
            .forEach((addDateSettings) => {
              addDateSettings.addEventListener("click", function () {
                const newFormat = (document.getElementById(`modal-date-format-${uniqueId}`) as HTMLInputElement)?.value;
                const datePicker = editor.getSelected();
  
                // Update the format (Note: Native HTML date pickers don't use custom formats, but this can be used for external libraries)
                datePicker.set(
                  "content",
                  `
                  <input type="date" class="datepicker-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="${newFormat}" />
                  `
                );
                modal.close();
              });
            });
        },
      },
    });
  };
  
  export default DatePicker;
  