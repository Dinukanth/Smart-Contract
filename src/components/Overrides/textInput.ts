import { Editor } from "grapesjs";
import { LoadOverridePlugin } from ".";

const TextInput = (editor: Editor, opts: LoadOverridePlugin) => {
	const domc = editor.DomComponents;

	domc.addType("TextInput", {
		isComponent: (el) => el.id === "TextInput",
		model: {
			draggable: false,
			droppable: false,
			defaults: {},
		},
		view: {
			events: () => ({
				dblclick: "onDblClick",
			}),
			onDblClick(ev: MouseEvent) {
				console.log("ssaa")
				ev?.stopPropagation();

				opts.setShowQuickActions();
			},
		},
	});


};

export default TextInput;
