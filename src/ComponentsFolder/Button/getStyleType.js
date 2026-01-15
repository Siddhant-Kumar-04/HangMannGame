function getButtonStyling(styleType) {
const primaryButtonStyling = "bg-blue-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
    const secondaryButtonStyling = "bg-yellow-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
    const warningButtonStyling = "bg-red-500 border border-blue-700 text-white rounded-2xl  hover:bg-pink-700 border-pink-700 transition-colors duration-300";
    if (styleType === "primary") { 
        return primaryButtonStyling;
    }
    else if (styleType === "secondary") {
        return secondaryButtonStyling;
    }
    else if (styleType === "warning") {
        return warningButtonStyling;
    }
}

export default getButtonStyling;