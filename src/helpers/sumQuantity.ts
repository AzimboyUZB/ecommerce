export function sumQuantity(arr: any[] = []) {
    return arr.reduce((a, b) => a + b.quantity, 0)
}