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
import { FormControl, Select, MenuItem, TextField, InputAdornment } from "@mui/material";
import image1 from './images/text-align-left.png';
import image2 from './images/text-align-center.png';
import image3 from './images/text-align-right.png';
import image4 from './images/download-alt.png';
import image5 from './images/download-alt (1).png';

type StylePropertyFieldProps = {
  prop: Property | PropertyNumber | PropertyComposite | PropertyRadio | PropertySelect | PropertySlider;
  displayName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function StylePropertyField({
  prop,
  displayName,
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

  const typographyImages = [image1, image2, image3, image4, image5];

  let inputToRender;

  if (displayName === "Typography" && type === "radio") {
    const radioProp = prop as PropertyRadio;

    inputToRender = (
      <div className="flex space-x-2">
        {radioProp?.getOptions().map((option, index) => (
          <button
            key={radioProp.getOptionId(option)}
            className={`border w-[40px] h-[38px] p-2 flex justify-center items-center ${
              radioProp.getOptionId(option) === value ? "bg-gray-300" : ""
            }`}
            value={radioProp.getOptionId(option)}
            onClick={() => handleStyleChange(radioProp.getOptionId(option))}
          >
            <img
              src={typographyImages[index]}
              alt={radioProp.getOptionLabel(option)}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    );
  } else {
    switch (type) {
      case "radio": {
        const radioProp = prop as PropertyRadio;
        inputToRender = (
          <div className="flex">
            {radioProp?.getOptions().map((option) => (
              <button
                key={radioProp.getOptionId(option)}
                className={`border w-[90px] h-[38px] p-2 flex justify-center items-center ${
                  radioProp.getOptionId(option) === value ? "bg-gray-700" : ""
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

      case "color": {
        inputToRender = (
          <TextField
            fullWidth
            placeholder={defValue}
            value={valueString}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div
                    className="w-[15px] h-[15px] rounded-full border"
                    style={{ backgroundColor: valueString || defValue }}
                  >
                    <input
                      type="color"
                      className="w-[15px] h-[15px] cursor-pointer opacity-0"
                      value={valueString || defValue}
                      onChange={(ev) => handleChange(ev.target.value)}
                    />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        );
        break;
      }

      default:
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
  }

  return (
    <div {...rest} className="flex justify-between gap-2 w-full">
      {type !== "radio" && (
        <p className="max-w-[95px] min-w-[95px] text-xs capitalize" style={{ fontFamily: 'Arial, sans-serif' }}>
          {prop.getLabel()}
        </p>
      )}
      {inputToRender}
    </div>
  );
}



















// import { useEditor } from "@grapesjs/react";
// import React from "react";
// import type {
// 	Property,
// 	PropertyNumber,
// 	PropertyComposite,
// 	PropertyRadio,
// 	PropertySelect,
// 	PropertySlider,
// } from "grapesjs";
// import InputCustomize from "./InputCustomize.tsx";
// import { FormControl, Select, MenuItem } from "@mui/material";

// type StylePropertyFieldProps = {
// 	prop: Property | PropertyNumber | PropertyComposite | PropertyRadio | PropertySelect | PropertySlider;
// } & React.HTMLAttributes<HTMLDivElement>;

// export default function StylePropertyField({
// 	prop,
// 	...rest
// }: StylePropertyFieldProps) {
// 	const editor = useEditor();

// 	const handleChange = (value: string) => {
// 		prop.upValue(value);
// 	};

// 	const onChange = (ev: React.ChangeEvent<{ value: unknown }>) => {
// 		handleChange(ev.target.value as string);
// 	};

// 	const handleStyleChange = (value: string) => {
// 		handleChange(value);
// 	};

// 	const type = prop.getType();
// 	const defValue = prop.getDefaultValue();
// 	const hasValue = prop.hasValue();
// 	const value = prop.getValue();
// 	const valueString = hasValue ? value : "";

// 	let inputToRender;

// 	// Render input based on type
// 	switch (type) {
// 		case "radio": {
// 			const radioProp = prop as PropertyRadio;
// 			inputToRender = (
// 				<div className="flex">
// 					{radioProp?.getOptions().map((option) => (
// 						<button
// 							key={radioProp.getOptionId(option)}
// 							className={`border w-[90px] h-[38px] p-2 flex justify-center items-center ${radioProp.getOptionId(option) === value ? "bg-gray-700" : ""
// 								}`}
// 							value={radioProp.getOptionId(option)}
// 							onClick={() => handleStyleChange(radioProp.getOptionId(option))}
// 						>
// 							<div
// 								style={{ width: "40px" }}
// 								dangerouslySetInnerHTML={{
// 									__html: radioProp.getOptionLabel(option),
// 								}}
// 							/>
// 						</button>
// 					))}
// 				</div>
// 			);
// 			break;
// 		}

// 		case "select": {
// 			const selectProp = prop as PropertySelect;
// 			inputToRender = (
// 				<FormControl fullWidth size="small">
// 					<Select
// 						style={{ border: "none" }}
// 						value={value}
// 						onChange={onChange}
// 					>
// 						{selectProp.getOptions().map((option) => (
// 							<MenuItem
// 								key={selectProp.getOptionId(option)}
// 								value={selectProp.getOptionId(option)}
// 							>
// 								{selectProp.getOptionLabel(option)}
// 							</MenuItem>
// 						))}
// 					</Select>
// 				</FormControl>
// 			);
// 			break;
// 		}

// 		default:
// 			// Fallback for other types (e.g., number, text) using InputCustomize
// 			inputToRender = (
// 				<InputCustomize
// 					placeholder={defValue}
// 					value={valueString}
// 					onChange={onChange}
// 					suffix={(prop as PropertyNumber)?.attributes?.unit}
// 					listValue={(prop as PropertyNumber)?.attributes?.units}
// 					onChangeSuffix={(value) => {
// 						(prop as PropertyNumber).upUnit(value);
// 					}}
// 				/>
// 			);
// 			break;
// 	}

// 	return (
// 		<div
// 			{...rest}
// 			className="flex justify-between gap-2 w-full"
// 		>
// 			{type !== "radio" && (
// 				<p className="max-w-[95px] min-w-[95px] text-xs capitalize " style={{ fontFamily: 'Arial, sans-serif' }}>
// 					{prop.getLabel()}
// 				</p>

// 			)}
// 			{inputToRender}
// 		</div>
// 	);
// }










// import { useEditor } from "@grapesjs/react";
// import React from "react";
// import type {
//   Property,
//   PropertyNumber,
//   PropertyComposite,
//   PropertyRadio,
//   PropertySelect,
//   PropertySlider,
// } from "grapesjs";
// import InputCustomize from "./InputCustomize.tsx";
// import { FormControl, Select, MenuItem } from "@mui/material";

// // Import the images
// import Image1 from './images/align-right.png';
// import Image2 from './images/align-left.png';
// import Image3 from './images/align-left.png';
// import Image4 from './images/align-left.png';
// import Image5 from './images/align-left.png';
// import Image6 from './images/align-left.png';

// type StylePropertyFieldProps = {
//   prop: Property | PropertyNumber | PropertyComposite | PropertyRadio | PropertySelect | PropertySlider;
// } & React.HTMLAttributes<HTMLDivElement>;

// /**
//  * Component to render style properties in the form of radio buttons, select dropdowns, or custom input fields.
//  */
// export default function StylePropertyField({
//   prop,
//   ...rest
// }: StylePropertyFieldProps) {
//   const editor = useEditor();

//   // Helper function to handle style changes for each property type
//   const handleChange = (value: string) => {
//     prop.upValue(value);
//   };

//   // Generic onChange handler for the Select component
//   const onChange = (ev: React.ChangeEvent<{ value: unknown }>) => {
//     handleChange(ev.target.value as string);
//   };

//   // Extract key property attributes
//   const type = prop.getType();
//   const defValue = prop.getDefaultValue();
//   const hasValue = prop.hasValue();
//   const value = prop.getValue();
//   const valueString = hasValue ? value : "";

//   // Variable to hold the JSX element for the appropriate input type
//   let inputToRender;

//   switch (type) {
//     case "radio": {
//       const radioProp = prop as PropertyRadio;
//       const images = [Image1, Image2, Image3, Image4, Image5, Image6]; // Array of imported images

//       inputToRender = (
//         <div className="flex border rounded-lg bg-gray-100">
//           {radioProp.getOptions().map((option, index) => {
//             const optionId = radioProp.getOptionId(option);
//             const isSelected = optionId === value;

//             return (
//               <button
//                 key={optionId}
//                 type="button"
//                 className={`border w-[90px] h-[38px] p-2 flex justify-center items-center ${
//                   isSelected ? "bg-gray-300" : ""
//                 }`}
//                 onClick={() => handleChange(optionId)}
//               >
//                 <div style={{ width: "40px" }}>
//                   {/* Display the image for each option */}
//                   <img src={images[index]} alt={`Option ${index + 1}`} style={{ width: '24px', height: '24px' }} />
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       );
//       break;
//     }

//     case "select": {
//       const selectProp = prop as PropertySelect;
//       inputToRender = (
//         <FormControl fullWidth size="small">
//           <Select
//             style={{ border: "none" }}
//             value={value}
//             onChange={onChange}
//           >
//             {selectProp.getOptions().map((option) => (
//               <MenuItem
//                 key={selectProp.getOptionId(option)}
//                 value={selectProp.getOptionId(option)}
//               >
//                 {selectProp.getOptionLabel(option)}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       );
//       break;
//     }

//     default:
//       // Fallback for other types using InputCustomize component
//       inputToRender = (
//         <InputCustomize
//           placeholder={defValue}
//           value={valueString}
//           onChange={onChange}
//           suffix={(prop as PropertyNumber)?.attributes?.unit}
//           listValue={(prop as PropertyNumber)?.attributes?.units}
//           onChangeSuffix={(value) => {
//             (prop as PropertyNumber).upUnit(value);
//           }}
//         />
//       );
//       break;
//   }

//   return (
//     <div
//       {...rest}
//       className="flex justify-between gap-2 w-full"
//     >
//       {/* Display the label only for non-radio types */}
//       {type !== "radio" && (
//         <p className="max-w-[95px] min-w-[95px] text-xs capitalize" style={{ fontFamily: 'Arial, sans-serif' }}>
//           {prop.getLabel()}
//         </p>
//       )}
//       {inputToRender}
//     </div>
//   );
// }
