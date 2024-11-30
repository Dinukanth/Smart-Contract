import React from "react";
import { useEditor } from "@grapesjs/react";
import { Editor } from "grapesjs";

interface RadioSelectProps {
	title: string;
	textOptions: Array<{ label: string; value: string }>;
	callback: (editor: Editor, value: string) => void;
}

const RadioSelect = ({ title, textOptions, callback }: RadioSelectProps) => {
	const editor = useEditor();

	const handleChange = (value: string) => {
		callback(editor, value);
	};

	return (
		<div>
			<label className="text-gray-700 font-medium text-sm">{title}</label>
			<div className="mt-2">
				{textOptions?.map((option, index) => (
					<label key={index} className="flex items-center space-x-2 mb-2">
						<input
							type="radio"
							name="radio-select"
							value={option.value}
							className="form-radio"
							onChange={() => handleChange(option.value)}
						/>
						<span>{option.label}</span>
					</label>
				))}
			</div>
		</div>
	);
};

export default RadioSelect;
