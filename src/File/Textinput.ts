const TextInput = (editor: any, opts: Record<string, unknown> = {}) => {
    const domComponents = editor.DomComponents;

    domComponents.addType("text-input", {
      model: {
        defaults: {},
      },
      view: {

        events: () => ({
          dblclick: "onDblClick",
        }),
        onDblClick(ev: MouseEvent) {
          console.log("ssaa")
          ev?.stopPropagation();
         console.log(opts)
          opts.setShowQuickActions();
        },
      },
    });
  
    // domComponents.addType("text-input", {
    //   model: {
    //     defaults: {
    //       draggable: false,
    //       badgable: false,
    //       hoverable: false,
    //       droppable: false,
    //    traits: [
    //         {
    //           type: "place-holder",
    //           label: "",
    //           name:"Place Holder"
    //         },
    //      ],
    //       toolbar: [],
    //     },
    //   },
    //   view: {
    //     onRender() {
    //       this.el.addEventListener("dblclick", () => {
    //         this.openModal();
    //       });
    //     },
    //     openModal() {
    //       const modal = editor.Modal;
    //       const uniqueId = Date.now();
    //       const inputLabelHTML = `
    //         <style>
    //           .gjs-mdl-dialog {
    //             width: 600px !important;
    //             border-radius: 5px;
    //           }
    //         </style>
    //         <div class="p-4 w-[600px] border-[0.5px] dark:border-none border-[#E6E6E6] rounded-[5px]">
    //           <div class="flex justify-between items-center">
    //             <label for="modal-text-input-${uniqueId}">Input Placeholder</label>
    //             <button class="close-button">
    //               <i class="fas fa-times dark:text-white text-black"></i>
    //             </button>
    //           </div>
    //           <input
    //             id="modal-text-input-${uniqueId}"
    //             name="placeholder"
    //             type="text"
    //             placeholder="Enter Placeholder Text"
    //             class="block w-full mt-2 rounded-[5px] dark:bg-[#373737] bg-[#F3F3F3] h-[38px] shadow-sm outline-none dark:placeholder:text-white placeholder:text-black px-2 dark:text-white text-black text-sm"
    //             autocomplete="off"
    //           />
    //           <div class="flex flex-row-reverse mt-2">
    //             <button
    //               type="button"
    //               class="rounded-[5px] add-placeholder-label text-white bg-[#FC5D19] px-2.5 w-[137px] h-[38px] text-sm"
    //             >
    //               Add
    //             </button>
    //           </div>
    //         </div>
    //       `;
  
    //       modal.setContent(inputLabelHTML);
    //       modal.setTitle("Edit Text Input");
    //       modal.open();
  
    //       const closeButton = document.querySelector(".close-button") as HTMLElement;
    //       closeButton.addEventListener("click", () => modal.close());
  
    //       document
    //         .querySelectorAll(".add-placeholder-label")
    //         .forEach((addPlaceholderLabel) => {
    //           addPlaceholderLabel.addEventListener("click", function () {
    //             const newPlaceholder = (document.getElementById(`modal-text-input-${uniqueId}`) as HTMLInputElement)?.value;
    //             const textInput = editor.getSelected();
    //             textInput.set(
    //               "content",
    //               `
    //               <input type="text" class="input-field bg-gray-100 border border-gray-300 rounded py-2 px-4" placeholder="${newPlaceholder}" />
    //               `
    //             );
    //             modal.close();
    //           });
    //         });
    //     },
    //   },
    // });
  };
  
  export default TextInput;
  