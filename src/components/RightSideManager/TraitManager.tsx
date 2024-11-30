import placeHolderTrait from "./CustomTraits/PlaceholderTrait.tsx";

export const traitManager = (editor) => {
	editor.TraitManager.addType('place-holder', placeHolderTrait(editor));
}