import { useEditor } from "@grapesjs/react";
import React from "react";
import type {
	Property,
	PropertyNumber,
	PropertyComposite,
	PropertyRadio,
	PropertySelect,
	PropertySlider,
} from "grapesjs";
import InputCustomize from "./InputCustomize.tsx";
import { FormControl, Select, MenuItem } from "@mui/material";

type StylePropertyFieldProps = {
	prop: Property | PropertyNumber | PropertyComposite | PropertyRadio | PropertySelect | PropertySlider;
} & React.HTMLAttributes<HTMLDivElement>;

export default function StylePropertyField({
	prop,
	...rest
}: StylePropertyFieldProps) {
	const editor = useEditor();

	const handleChange = (value: string) => {
		prop.upValue(value);
	};

	const onChange = (ev: React.ChangeEvent<{ value: unknown }>) => {
		handleChange(ev.target.value as string);
	};

	const handleStyleChange = (value: string) => {
		handleChange(value);
	};

	const type = prop.getType();
	const defValue = prop.getDefaultValue();
	const hasValue = prop.hasValue();
	const value = prop.getValue();
	const valueString = hasValue ? value : "";

	let inputToRender;

	// Render input based on type
	switch (type) {
		case "radio": {
			const radioProp = prop as PropertyRadio;
			inputToRender = (
				<div className="flex">
					{radioProp?.getOptions().map((option) => (
						<button
							key={radioProp.getOptionId(option)}
							className={`border w-[90px] h-[38px] p-2 flex justify-center items-center ${radioProp.getOptionId(option) === value ? "bg-gray-300" : ""
								}`}
							value={radioProp.getOptionId(option)}
							onClick={() => handleStyleChange(radioProp.getOptionId(option))}
						>
							<div
								style={{ width: "40px" }}
								dangerouslySetInnerHTML={{
									__html: radioProp.getOptionLabel(option),
								}}
							/>
						</button>
					))}
				</div>
			);
			break;
		}

		case "select": {
			const selectProp = prop as PropertySelect;
			inputToRender = (
				<FormControl fullWidth size="small">
					<Select
						style={{ border: "none" }}
						value={value}
						onChange={onChange}
					>
						{selectProp.getOptions().map((option) => (
							<MenuItem
								key={selectProp.getOptionId(option)}
								value={selectProp.getOptionId(option)}
							>
								{selectProp.getOptionLabel(option)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			);
			break;
		}

		default:
			// Fallback for other types (e.g., number, text) using InputCustomize
			inputToRender = (
				<InputCustomize
					placeholder={defValue}
					value={valueString}
					onChange={onChange}
					suffix={(prop as PropertyNumber)?.attributes?.unit}
					listValue={(prop as PropertyNumber)?.attributes?.units}
					onChangeSuffix={(value) => {
						(prop as PropertyNumber).upUnit(value);
					}}
				/>
			);
			break;
	}

	return (
		<div
			{...rest}
			className="flex justify-between gap-2 w-full"
		>
			{type !== "radio" && (
				<p className="max-w-[95px] min-w-[95px] text-xs capitalize " style={{ fontFamily: 'Arial, sans-serif' }}>
					{prop.getLabel()}
				</p>

			)}
			{inputToRender}
		</div>
	);
}
