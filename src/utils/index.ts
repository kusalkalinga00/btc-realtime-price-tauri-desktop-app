// truncate string to 2 decimal places and return as string
export const truncateToTwoDecimalPlaces = (num: string): string => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
        return '0.00';
    }
    return parsedNum.toFixed(2);
};


export const getPrecentageColor = (num: string): string => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
        return "#a2a2ff";
    }

    if (parsedNum > 0) {
        return "#57D54C";
    } else if (parsedNum < 0) {
        return "#FF4949";
    } else {
        return "#a2a2ff";

    }
}
