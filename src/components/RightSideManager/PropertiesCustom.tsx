import React from "react";
import { Trait } from "grapesjs";
import TraitPropertyField from "./TraitPropertyField.tsx";

export default function PropertiesCustom({ traits }: { traits: Array<Trait> }) {
	return (
		<div className="flex flex-col gap-3 p-2">
			{!traits || traits.length === 0 ? (
				<div className="text-sm text-center">
					Select an element before using Trait Manager
				</div>
			) : (
				traits.map((trait: Trait) => (
					<TraitPropertyField key={trait.getId()} trait={trait} />
				))
			)}
		</div>
	);
}
