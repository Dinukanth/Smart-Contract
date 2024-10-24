const Dropdown = (editor: any, options: Record<string, unknown> = {}) => {
    const domComponents = editor.DomComponents;
  
    // Add the dropdown block to the editor
    editor.BlockManager.add("dropdown", {
      label: 'Dropdown',
      content: {
        type: "dropdown",
        content: `
          <select class="dropdown-field bg-gray-100 border border-gray-300 rounded py-2 px-4">
            <option value="Option 1">Gender</option>
            <option value="Option 2">Male</option>
            <option value="Option 3">Female</option>
          </select>
        `,
        classes: ["dropdown"],
      },
      category: {
        id: "elements-1",
        open: false,
        attributes: {
          class: "icon-elements",
        },
      },
      attributes: {
        class: "dropdown-icon-selected hover:border-orange-600 hover:bg-[#483831] pt-8",
      },
    });
  
    // Define the dropdown component type
    domComponents.addType("dropdown", {
      view: {
        onRender() {
          this.el.addEventListener("dblclick", () => {
            this.openModal();
          });
        },
        openModal() {
          const modal = editor.Modal;
          const uniqueId = Date.now();
          const dropdownOptionsHTML = `
            <style>
              .gjs-mdl-dialog {
                width: 600px !important;
                border-radius: 5px;
              }
            </style>
            <div class="p-4 w-[600px] border-[0.5px] dark:border-none border-[#E6E6E6] rounded-[5px]">
              <div class="flex justify-between items-center">
                <label for="modal-dropdown-options-${uniqueId}">Dropdown Options</label>
                <button class="close-button">
                  <i class="fas fa-times dark:text-white text-black"></i>
                </button>
              </div>
              <textarea
                id="modal-dropdown-options-${uniqueId}"
                name="options"
                placeholder="Enter options, one per line"
                class="block w-full mt-2 rounded-[5px] dark:bg-[#373737] bg-[#F3F3F3]  h-[100px] shadow-sm outline-none dark:placeholder:text-white placeholder:text-black px-2 dark:text-white text-black text-sm"
                autocomplete="off"
              ></textarea>
              <div class="flex flex-row-reverse mt-2">
                <button
                  type="button"
                  class="rounded-[5px] add-dropdown-options text-white bg-[#FC5D19] px-2.5 w-[137px] h-[38px] text-sm"
                >
                  Add Options
                </button>
              </div>
            </div>
          `;
  
          modal.setContent(dropdownOptionsHTML);
          modal.setTitle("Edit Dropdown Options");
          modal.open();
  
          const closeButton = document.querySelector(".close-button") as HTMLElement;
          closeButton.addEventListener("click", () => modal.close());
  
          document
            .querySelectorAll(".add-dropdown-options")
            .forEach((addDropdownOptions) => {
              addDropdownOptions.addEventListener("click", function () {
                const optionsText = (document.getElementById(`modal-dropdown-options-${uniqueId}`) as HTMLTextAreaElement)?.value;
                const optionsArray = optionsText.split("\n").map(option => option.trim()).filter(option => option.length > 0);
  
                const dropdown = editor.getSelected();
                const optionsHTML = optionsArray.map(option => `<option value="${option}">${option}</option>`).join("\n");
  
                dropdown.set(
                  "content",
                  `
                  <select class="dropdown-field bg-gray-100 border border-gray-300 rounded py-2 px-4">
                    ${optionsHTML}
                  </select>
                  `
                );
                modal.close();
              });
            });
        },
      },
    });
  };
  
  export default Dropdown;
  