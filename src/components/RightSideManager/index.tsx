import React, { useState } from 'react'
import StyleCustom from "./StyleCustom/index.tsx";

export default function RightSideManager({
	styleProps,
	traitProps,
	selectorProps,
}) {
	const [activeTab, setActiveTab] = useState(0);

  return (
	<div className="flex">

		<div
			className="max-h-[calc(100vh-50px)] h-[calc(100vh-50px)]"

		>
			<div
				className="h-full overflow-y-auto scroll-view overflow-x-hidden ml-4 bg-[#fff] border border-[#c6c6c9] text-[#9CA3AF]"


			>
				<div className="flex w-full flex-nowrap">
					<button
						onClick={() => setActiveTab(0)}
						className={
							"flex-1 text-sm focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80 border-b-2 px-4 py-2 border-gray-300 dark:border-zinc-700"
					}
					>
						Styles
					</button>
					<button
						onClick={() => setActiveTab(1)}
						className={
							"flex-1 text-sm focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80 border-b-2 px-4 py-2 border-gray-300 dark:border-zinc-700"	
						}
					>
						Properties
					</button>
				</div>
				<div className="flex flex-col w-full">
					
						<>
							
							<StyleCustom sectors={styleProps.sectors} />
						</>
					
				</div>
			</div>
		</div>
</div>
  )
}
