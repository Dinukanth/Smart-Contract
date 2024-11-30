import React, { useState } from "react";
import { useEditor } from "@grapesjs/react";
import {
	GRAPEJS_COMPONENT_CATEGORY,
	GRAPEJS_PROPS_POPOVER_FORM,
	PROP_COMPONENT_CATEGORY,
} from "../../core/Component.const.ts";
import Text from "./FormComponents/Text.tsx";
import RadioSelect from "./FormComponents/RadioSelect.tsx";

interface ComponentProps {
	props: any;
	type: PROP_COMPONENT_CATEGORY;
}

interface StyleProps {
	width?: string;
	position?: number;
}
export interface PropPovpoverProps {
	title?: string;
	components?: Array<ComponentProps>;
	style: StyleProps;
}

function renderComponent(type: string, props: any = {}) {
	if (PROP_COMPONENT_CATEGORY.text_input == type) {
		return <Text {...props} />;
	} else if (PROP_COMPONENT_CATEGORY.radio_select == type) {
		return <RadioSelect {...props} />;
	}
	return null;
}

function renderForm(type: string): any {

	if (type == GRAPEJS_COMPONENT_CATEGORY.input)
		return {
			title: "Place Holder Value",
			components:
				GRAPEJS_PROPS_POPOVER_FORM[GRAPEJS_COMPONENT_CATEGORY.input],
			style: {
				position: 290,
			},
		};
	
	return {};
}

const QuickActionPopOver = ({
	title = "Settings",
	components,
	style,
}: PropPovpoverProps) => {
	return (
		<div
			className={`bg-white  rounded-xl py-3 px-6 ${style?.width ? `w-[${style?.width}]` : "w-[288px]"} shadow-md`}
		>
			<h4 className="text-xs font-bold mb-4">{title}</h4>
			<div className="flex flex-col gap-2">
				{components?.map(({ type, props }) => renderComponent(type, props))}
			</div>
		</div>
	);
};


const QuickAction = () => {
	const editor = useEditor();
	const selected = editor.getSelected();

	const {
		left = 0,
		// top = 0,
		width = 0,
	} = selected?.getView()?.el?.getBoundingClientRect?.() || {};

	console.log(selected?.getName())

	const { title, components = [], style } = renderForm(selected?.getName());
	return (
		<div
			className="absolute z-30"
			style={{
				top: 100,
				left: left + width - (style?.position ? style?.position : 0) + 20,
			}}
		>
			<QuickActionPopOver style={style} title={title} components={components} />
		</div>
	);
};
export default QuickAction;
