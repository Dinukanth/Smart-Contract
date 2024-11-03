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

export default function StylePropertyField({
	prop,
	...rest
}) {
	const editor = useEditor();
    
	const handleChange = (value: string) => {
		prop.upValue(value);
	};

	const onChange = (ev: any) => {
		handleChange(ev.target.value);
	};

	const type = prop.getType();
	const defValue = prop.getDefaultValue();
	const hasValue = prop.hasValue();
	const value = prop.getValue();
	const valueString = hasValue ? value : "";

	let inputToRender = (
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

	return (
		<div
			{...rest}
			className="flex justify-between gap-2 w-full"
		>
			{"radio" !== type && (
				<p className="max-w-[95px] min-w-[95px] text-xs capitalize">
					{prop.getLabel()}
				</p>
			)}
			{inputToRender}
		</div>
	);
}