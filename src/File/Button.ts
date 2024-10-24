const Button = (editor: any, options: Record<string, unknown> = {}) => {
  const domComponents = editor.DomComponents;
  
  editor.BlockManager.add("button", {
    label: 'Button',
    content: {
      type: "button",
      content: `
        <button class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Double click to change text
        </button>`,
      classes: ["p-2", "text-sm", "outline-none"],
    },
    category: {
      id: "elements-1",
      open: false,
      attributes: {
        class: "icon-elements",
      },
    },
    attributes: {
      class: "button-icon-selected hover:border-orange-600 hover:bg-[#483831] pt-8",
    },
  });

  domComponents.addType("button", {
    view: {
      onRender() {
        this.el.addEventListener("dblclick", () => {
          this.openModal();
        });
      },
      openModal() {
        const modal = editor.Modal;
        const uniqueId = Date.now();
        const buttonLabelHTML = `
          <style>
            .gjs-mdl-dialog {
              width: 600px !important;
              border-radius: 5px;
            }
          </style>
          <div class="p-4 w-[600px] border-[0.5px] dark:border-none border-[#E6E6E6] rounded-[5px]">
            <div class="flex justify-between items-center">
              <label for="modal-text-input-${uniqueId}">Label</label>
              <button class="close-button">
                <i class="fas fa-times dark:text-white text-black"></i>
              </button>
            </div>
            <input
              id="modal-text-input-${uniqueId}"
              name="link"
              type="text"
              placeholder="Enter Button Label"
              class="block w-full mt-2 rounded-[5px] dark:bg-[#373737] bg-[#F3F3F3]  h-[38px] shadow-sm outline-none dark:placeholder:text-white placeholder:text-black px-2 dark:text-white text-black text-sm"
              autocomplete="off"
            />
            <div class="flex flex-row-reverse mt-2">
              <button
                type="button"
                class="rounded-[5px] add-button-label text-white bg-[#FC5D19] px-2.5 w-[137px] h-[38px] text-sm"
              >
                Add
              </button>
            </div>
          </div>
        `;
        
        modal.setContent(buttonLabelHTML);
        modal.setTitle("Add button label");
        modal.open();

        const closeButton = document.querySelector(".close-button") as HTMLElement;
        closeButton.addEventListener("click", () => modal.close());

        document
          .querySelectorAll(".add-button-label")
          .forEach((addButtonLabel) => {
            addButtonLabel.addEventListener("click", function () {
              const newLabel = (document.getElementById(`modal-text-input-${uniqueId}`) as HTMLInputElement)?.value;
              const button = editor.getSelected();
              button.set(
                "content",
                `
                <style>
                  /* Mobile phones (up to 480px) */
                  @media only screen and (min-width: 480px) {
                    .btn-style {
                      font-size: 14px !important;
                    }
                  }
                  /* Tablets (481px to 768px) */
                  @media (min-width: 481px) and (max-width: 768px) {
                    .btn-style {
                      font-size: 16px !important;
                    }
                  }
                  /* Desktop */
                  @media only screen and (min-width: 769px) {
                    .btn-style {
                      font-size: 18px !important;
                    }
                  }
                </style>
                <button type="submit" class="btn btn-primary btn-style bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ${newLabel}
                </button>`
              );
              modal.close();
            });
          });
      },
    },
  });
};

export default Button;
