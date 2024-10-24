const FileUpload = (editor: any, options: Record<string, unknown> = {}) => {
    const domComponents = editor.DomComponents;
  
    // Add the file upload block to the editor
    editor.BlockManager.add("file-upload", {
      label: 'File Upload',
      content: {
        type: "file-upload",
        content: `
          <div class="file-drop-area bg-gray-800 text-white text-center border-2 border-dashed border-gray-500 p-4 rounded-lg cursor-pointer">
           
            <input type="file" class="hidden file-upload-field" />
          </div>
          <span class="file-upload-name text-gray-600 mt-2 block"></span>
        `,
        classes: ["file-upload"],
      },
      category: {
        id: "elements-1",
        open: false,
        attributes: {
          class: "icon-elements",
        },
      },
      attributes: {
        class: "file-upload-icon-selected hover:border-orange-600 hover:bg-[#483831] pt-8",
      },
    });
  
    // Define the file upload component type
    domComponents.addType("file-upload", {
      view: {
        onRender() {
          // Reference elements
          const dropArea = this.el.querySelector(".file-drop-area") as HTMLElement;
          const inputElement = this.el.querySelector(".file-upload-field") as HTMLInputElement;
          const fileNameElement = this.el.querySelector(".file-upload-name") as HTMLElement;
  
          // Click the drop area to trigger file input dialog
          dropArea.addEventListener("click", () => {
            inputElement.click(); // Open the file dialog when the drop area is clicked
          });
  
          // Handle file selection
          inputElement.addEventListener("change", () => {
            const file = inputElement.files ? inputElement.files[0] : null;
            if (file) {
              fileNameElement.textContent = `Selected file: ${file.name}`;
            } else {
              fileNameElement.textContent = "No file selected";
            }
          });
  
          // Handle drag and drop
          dropArea.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropArea.classList.add("bg-gray-700"); // Change style on hover
          });
  
          dropArea.addEventListener("dragleave", () => {
            dropArea.classList.remove("bg-gray-700"); // Revert style when leaving
          });
  
          dropArea.addEventListener("drop", (e) => {
            e.preventDefault();
            dropArea.classList.remove("bg-gray-700");
  
            if (e.dataTransfer?.files) {
              inputElement.files = e.dataTransfer.files;
              const file = inputElement.files[0];
              if (file) {
                fileNameElement.textContent = `Selected file: ${file.name}`;
              }
            }
          });
  
          // Double-click to open the modal (if needed)
          this.el.addEventListener("dblclick", () => {
            this.openModal();
          });
        },
  
        openModal() {
          const modal = editor.Modal;
          const uniqueId = Date.now();
          const fileUploadSettingsHTML = `
            <style>
              .gjs-mdl-dialog {
                width: 600px !important;
                border-radius: 5px;
              }
            </style>
            <div class="p-4 w-[600px] border-[0.5px] dark:border-none border-[#E6E6E6] rounded-[5px]">
              <div class="flex justify-between items-center">
                <label for="modal-file-types-${uniqueId}">Allowed File Types</label>
                <button class="close-button">
                  <i class="fas fa-times dark:text-white text-black"></i>
                </button>
              </div>
              <input
                id="modal-file-types-${uniqueId}"
                name="file-types"
                type="text"
                placeholder="Enter file types (e.g. PDF, JPEG)"
                class="block w-full mt-2 rounded-[5px] dark:bg-[#373737] bg-[#F3F3F3] h-[38px] shadow-sm outline-none dark:placeholder:text-white placeholder:text-black px-2 dark:text-white text-black text-sm"
                autocomplete="off"
              />
              <div class="flex flex-row-reverse mt-2">
                <button
                  type="button"
                  class="rounded-[5px] add-file-settings text-white bg-[#FC5D19] px-2.5 w-[137px] h-[38px] text-sm"
                >
                  Apply
                </button>
              </div>
            </div>
          `;
  
          modal.setContent(fileUploadSettingsHTML);
          modal.setTitle("Edit File Upload Settings");
          modal.open();
  
          const closeButton = document.querySelector(".close-button") as HTMLElement;
          closeButton.addEventListener("click", () => modal.close());
  
          document
            .querySelectorAll(".add-file-settings")
            .forEach((addFileSettings) => {
              addFileSettings.addEventListener("click", function () {
                const fileTypes = (document.getElementById(`modal-file-types-${uniqueId}`) as HTMLInputElement)?.value;
                const fileUpload = editor.getSelected();
  
                // Update the accepted file types
                fileUpload.set(
                  "content",
                  `
                  <div class="file-drop-area bg-gray-800 text-white text-center border-2 border-dashed border-gray-500 p-4 rounded-lg cursor-pointer">
                    Drop files here or click to upload
                    <input type="file" class="hidden file-upload-field" accept="${fileTypes}" />
                  </div>
                  <span class="file-upload-name text-gray-600 mt-2 block"></span>
                  `
                );
                modal.close();
              });
            });
        },
      },
    });
  };
  
  export default FileUpload;
  