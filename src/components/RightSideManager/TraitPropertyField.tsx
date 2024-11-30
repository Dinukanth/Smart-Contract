import React from "react";
import { useEditor } from "@grapesjs/react";
import { Trait } from "grapesjs";
import InputCustomize from "./StyleCustom/InputCustomize.tsx";
import { Checkbox } from "antd";

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
	trait: Trait;
}

export default function TraitPropertyField({
	trait,
	...rest
}: StylePropertyFieldProps) {
	const editor = useEditor();
	const handleChange = (value: string) => {
		trait.setValue(value);
	};

	const onChange = (event: any) => {
		handleChange(event.target.value);
	};

	const handleButtonClick = () => {
		const command = trait.get("command");
		if (command) {
			typeof command === "string"
				? editor.runCommand(command)
				: command(editor, trait);
		}
	};

	const type = trait.getType();
	const value = trait.getValue();

	let inputToRender = (
		<InputCustomize
			title={trait.getLabel()}
			placeholder={trait.getLabel()}
			value={value}
			onChange={onChange}
		/>
	);

	switch (type) {
		case "checkbox": {
			{
				inputToRender = (
					<div className="flex items-center gap-4">
						<div className="flex-grow text-sm">{trait.getLabel()}</div>
						<input
							type="checkbox"
							checked={value}
							onChange={(ev) => trait.setValue(ev.target.checked)}
						/>
					</div>
				);
			}
			break;
		}
		case "button": {
			{
				inputToRender = (
					<>
						<div className="flex mb-2 items-center">
							<div className="flex-grow text-sm">{trait.getLabel()}</div>
						</div>
						<button onClick={handleButtonClick}>
							{trait.getLabel()}
						</button>
					</>
				);
			}
			break;
		}
	}

	return (
		<div className="w-full" {...rest}>
			{inputToRender}
		</div>
	);
}
