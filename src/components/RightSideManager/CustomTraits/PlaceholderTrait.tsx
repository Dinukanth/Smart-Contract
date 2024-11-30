const placeHolderTrait = (editor) => {

	return {
	  createInput({ trait }) {
	    const traitEl = document.createElement("div");
   
	    traitEl.innerHTML = `
			<div class="dark:bg-[#282828] bg-white">
			<div class="mb-4">Content <span class="font-semibold text-orange-600">AI</span><div>
			<div class="dark:bg-[#373737] bg-[#F3F3F3] p-4 mb-4 border-[0.5px] dark:border-[#504F4F] border-[#E6E6E6] rounded-md  w-84">
			    <div class="flex items-center justify-evenly mb-4">
			    <img src="" />
				   <h2 class="dark:text-white text-black text-m font-semibold">What do you want to generate?</h2>
			    </div>
			    <div class="relative-container rounded-md ">
				   <textarea class="w-full p-2 bg-gray-700 dark:text-white dark:placeholder:text-white placeholder:text-black text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#272727]" rows="3" placeholder="I want an explanation for nature as a service provided."></textarea>
				   <div class="refresh-btn flex dark:bg-[#272727] bg-white pr-2 rounded-md hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
				   <img src="" class="p-2"/>
					 <button class="dark:text-white text-black" >Refresh</button>
				   </div>
			    </div>
			</div>
			<div>
				   <button id="generate-ai" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 flex items-center justify-center">
					  <img src="" class="p-2"/>
					  <span>Generate with AI</span>
				   </button>
			    </div>
			</div>
			`;
   
	    // Add custom CSS to the document
	    const style = document.createElement("style");
	    style.innerHTML = `
			.relative-container {
			    position: relative;
			}
			.refresh-btn {
			    position: absolute;
			    bottom: 10px;
			    right: 10px;
			}
			`;
	    document.head.appendChild(style);
   
	    // Handle button click for API call
	     const generateButton = traitEl.querySelector("#generate-ai");
	     generateButton.addEventListener("click", async () => {
		   const textArea = traitEl.querySelector("textarea");
		   const inputText = textArea.value;
   
		   editor.getSelected().set("content", inputText);
	     });
   
	    return traitEl;
	  },
	};
   };
   
   export default placeHolderTrait;