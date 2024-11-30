import { Editor, Plugin } from "grapesjs";
import TextInput from "./textInput.ts";

export interface LoadOverridePlugin {
	setShowQuickActions: () => void;
}
const LoadOverrides: Plugin<LoadOverridePlugin> = (editor: Editor, opts) => {
	TextInput(editor, opts);
};

export default LoadOverrides;
