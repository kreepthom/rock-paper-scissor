
type Ipicked = number | null

export const deliveration = (pickedIA: Ipicked, pickedP: Ipicked) => {

    if (pickedP === pickedIA) {
        return 'draw';
    }
    if ((pickedP === 1 && pickedIA === 0) || (pickedP === 2 && pickedIA === 1) || (pickedP === 0 && pickedIA === 2)) {
        return 'win';
    }
    if ((pickedP === 0 && pickedIA === 1) || (pickedP === 1 && pickedIA === 2) || (pickedP === 2 && pickedIA === 0)) {
        return 'lose';
    }
}