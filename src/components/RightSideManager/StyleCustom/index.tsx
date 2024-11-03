import { Sector } from "grapesjs";
import Empty from "./Empty.tsx";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import StylePropertyField from "./StylePropertyField.tsx";

type StyleCustomProps = {
	sectors: Array<Sector>;
};

export default function StyleCustom({ sectors }: StyleCustomProps) {
	const [activeExpand, setActiveExpand] = useState<Array<string>>([]);

	const onActiveExpand = (id: string) => {
		if (activeExpand.includes(id))
			setActiveExpand(activeExpand.filter((childId) => childId !== id));
		else setActiveExpand([...activeExpand, id]);
	};

	return (
		<div className="flex flex-col">
			{sectors?.length ? (
				sectors.map((sector) => (
					<div key={sector.getId()}>
						<button
							onClick={() => onActiveExpand(sector.getId())}
							className="sticky top-0 z-10 bg-gray-25 dark:bg-zinc-800 px-2 py-1 border-b border-gray-300 dark:border-zinc-700 w-full"
						>
							<div className="flex gap-2 w-full flex-wrap items-center">
								<div className="text-left flex-1">
									<div className="flex flex-wrap space-x-1 items-center">
										<div className="mr-2">{sector.getName()}</div>
										<div className="w-[6px] h-[6px] rounded-full bg-amber-500" />
									</div>
								</div>
								{activeExpand.includes(sector.getId()) ? (
									<IoIosArrowUp />
								) : (
									<IoIosArrowDown />
								)}
							</div>
						</button>
						{activeExpand.includes(sector.getId()) && (
							<div className="flex flex-col px-2 py-4 gap-3">
								{sector.getProperties().map((prop) => (
									<StylePropertyField key={prop.getId()} prop={prop} />
								))}
							</div>
						)}
					</div>
				))
			) : (
				<Empty />
			)}
		</div>
	);
}
