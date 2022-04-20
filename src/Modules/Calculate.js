
export const CalcDiscount = (price, discount, amount ) => {
    return +amount*(price - (price*discount)/100)
}

