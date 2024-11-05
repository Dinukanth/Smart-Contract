import React from "react";
import { Popover } from "antd";
import { LuCheck } from "react-icons/lu";

type InputCustomizeProps = {
	title?: string;
	startIcon?: SVGAElement;
	suffix?: string;
	listValue?: Array<string>;
	onChangeSuffix?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputCustomize(props: InputCustomizeProps) {
	return (
		<div className="flex-1 text-sm">
			{props.title && (
				<label className="flex mb-1 flex-wrap space-x-1 items-center">
					<div>{props.title}</div>
				</label>
			)}
			<div className="flex bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-700 border rounded px-3 py-1 space-x-0.5 items-center">
				<div className="opacity-50 cursor-ns -ml-2">
					<svg viewBox="0 0 24 24" role="presentation" width={14} height={14}>
						<path
							d="M12,2.5L8,7H16L12,2.5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M8,17L12,21.5L16,17H8Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				<div className="flex-1">
					<input
						className="w-full bg-transparent focus:outline-none placeholder:text-neutral-400 placeholder:dark:text-neutral-500"
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						{...props}
					/>
				</div>
				{props.suffix && props.listValue && (
					<div className="flex items-center">
						<button className="w-full text-left cursor-pointer rounded focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80">
							<div className="bg-red-700 dark:bg-zinc-900 border rounded border-transparent overflow-auto px-0.5">
								<div className="flex flex-wrap items-center">
									<Popover
										content={
											<div className="flex flex-col">
												{props.listValue?.map((item) => (
													<div
														key={item}
														onClick={() => {
															if (props?.onChangeSuffix) {
																props.onChangeSuffix(item);
															}
														}}
														className="cursor-pointer flex px-2 py-1 gap-2 flex-wrap items-center text-[#9CA3AF]"
													>
														<div>{item}</div>
														{item === props.suffix && <LuCheck />}
													</div>
												))}
											</div>
										}
										overlayInnerStyle={{
											backgroundColor: "rgb(24 24 27)",
											border: "1px solid rgb(63, 63, 70)",
										}}
										trigger="click"
										placement="bottom"
									>
										<div className="truncate flex-1">{props.suffix}</div>
									</Popover>
								</div>
							</div>
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
