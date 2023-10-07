export function sumAllPrice(arr: any[] = []) {
    return arr.reduce((a, b) => a + b.price * b.quantity, 0)
}