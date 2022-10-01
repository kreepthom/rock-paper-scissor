

export const numberGenerator = (min = 0 ,max = 2) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}