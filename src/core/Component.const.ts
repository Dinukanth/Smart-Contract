import { Editor } from "grapesjs";

export enum PROP_COMPONENT_CATEGORY {
  "text_input" = "Text-input",
  "radio_select" = "Radio-select",
}

export enum GRAPEJS_COMPONENT_CATEGORY {
  "input" = "Text-input",
}

const TEXT_INPUT = [
  {
    type: PROP_COMPONENT_CATEGORY.text_input,
    props: {
      callback: (editor: Editor, data: any, props: any) => {
        const selectedComponent = editor.getSelected();

        if (selectedComponent) {
          // Check if the component supports the 'placeholder' attribute
          selectedComponent.set({
            attributes: {
              ...selectedComponent.get("attributes"), // Keep other attributes intact
              placeholder: data, // Set the new placeholder
            },
          });

          console.log(`Placeholder updated to: ${data}`);
        }
      },
    },
  },
  {
    type: PROP_COMPONENT_CATEGORY.radio_select,
    props: {
      title: "Is Required?",
      textOptions: [
        { label: "Yes", value: "true" },
        { label: "No", value: "false" },
      ],
      callback: (editor: Editor, data: any, props: any) => {
        const selectedComponent = editor.getSelected();

        if (selectedComponent) {
          const parent = selectedComponent.parent(); // Get the parent component
          if (parent) {
            const siblings = parent.components(); // Get all child components of the parent
            const selectedIndex = siblings.indexOf(selectedComponent); // Find the index of the current component

            // Check if there is a next sibling (neighbor)
            const nextSibling = siblings.at(selectedIndex - 1);
		  console.log(nextSibling);
            if (nextSibling) {
              // Update the content of the neighboring component
              const currentContent = nextSibling.get("content");
		    
              if (data == 'true') {
			// Append '*' if not already present
			if (!currentContent.trim().endsWith("*")) {
			  nextSibling.append({
			    type: 'textnode',
			    content: ' *',
			  });
			}
		   } else {
			// Remove '*' if it exists
			const contentNodes = nextSibling.components();
			const lastNode = contentNodes.last();
	
			if (lastNode && lastNode.is('textnode') && lastNode.get('content').trim() === '*') {
			  lastNode.remove();
			}
		   }
	
            } else {
              console.log("No neighboring component found.");
            }
          } else {
            console.log("No parent component found.");
          }
        } else {
          console.log("No component selected.");
        }
      },
    },
  },
];

export const GRAPEJS_PROPS_POPOVER_FORM = {
  [GRAPEJS_COMPONENT_CATEGORY.input]: TEXT_INPUT,
};
