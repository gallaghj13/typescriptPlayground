// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = { 
//     id: 1, 
//     name: 'john', 
//     retire: (date: Date) => {
//     console.log(date);
// } };

// function kgToLbs(weight: number | string): number {
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');

// type Draggable = {
//     drag: () => void;
// }

// type Resizable = {
//     resize: () => void;
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }
