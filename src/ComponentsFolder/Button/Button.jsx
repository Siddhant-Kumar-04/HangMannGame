import React from "react";
import getButtonStyling from "./getStyleType";


//  function getButtonStyling(styleType) {
// const primaryButtonStyling = "bg-blue-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
//     const secondaryButtonStyling = "bg-yellow-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
//     const warningButtonStyling = "bg-red-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
//     if (styleType === "primary") { 
//         return primaryButtonStyling;
//     }
//     else if (styleType === "secondary") {
//         return secondaryButtonStyling;
//     }
//     else if (styleType === "warning") {
//         return warningButtonStyling;
//     }
// }
function Button({ type,text,styleType,onclickHandler}) {
    
    return (
       
        <button className={`px-4 py-2 w-20 ${getButtonStyling(styleType)}`} type={type} onClick={onclickHandler}>
            { text} {10 * 10} {test()}
            
        </button>
       
    )
}

function test() {
    return "test";
}
export default Button;