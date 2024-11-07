import { Sector } from "grapesjs";
import Empty from "./Empty.tsx";
import React, { useState, memo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import StylePropertyField from "./StylePropertyField.tsx";

type StyleCustomProps = {
	sectors: Array<Sector>;
};

// Define the desired display names in order
const displayNames = ["Position", "Appearance", "Typography", "Fill"];

const SectorCollapse = memo(
	({ sector, displayName, isActive, toggleActive }: { 
		sector: Sector; 
		displayName: string; 
		isActive: boolean; 
		toggleActive: () => void; 
	}) => (
		<div key={sector.getId()}>
			<button
				onClick={toggleActive}
				className="sticky top-0 z-10 bg-white  px-2 py-1 border-b border-gray-300  w-full"
			>
				<div className="flex gap-2 w-full flex-wrap items-center">
					<div className="text-left flex-1">
						<div className="flex flex-wrap space-x-1 items-center">
							<div className="mr-2  text-black font-semibold " >{displayName}</div>
							{/* <div className="w-[6px] h-[6px] rounded-full bg-amber-500" /> */}
						</div>
					</div>
					{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</div>
			</button>
			{isActive && (
				<div className="flex flex-col px-2 py-4 gap-3">
					{sector.getProperties()?.map((prop) => (
						<StylePropertyField key={prop.getId()} prop={prop} />
					))}
				</div>
			)}
		</div>
	)
);

export default function StyleCustom({ sectors = [] }: StyleCustomProps) {
	const [activeExpand, setActiveExpand] = useState<Set<string>>(new Set());

	const onActiveExpand = (id: string) => {
		setActiveExpand((prevExpand) => {
			const newExpand = new Set(prevExpand);
			if (newExpand.has(id)) newExpand.delete(id);
			else newExpand.add(id);
			return newExpand;
		});
	};

	return (
		<div className="flex flex-col">
			{sectors.length ? (
				sectors.map((sector, index) => (
					<SectorCollapse
						key={sector.getId()}
						sector={sector}
						displayName={displayNames[index] || sector.getName()}  // Use custom name or fallback to original name
						isActive={activeExpand.has(sector.getId())}
						toggleActive={() => onActiveExpand(sector.getId())}
					/>
				))
			) : (
				<Empty />
			)}
		</div>
	);
}

