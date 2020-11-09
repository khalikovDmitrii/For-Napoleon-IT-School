const arr = [];
const N = +prompt('Введите количество элементов массива');

for (i = 0; i < N; i++) {
    let input = +prompt(`Введите ${i+1} элемент`)
    arr.push(input);
}

console.log(`Изначально ${arr}`);

const length = arr.length;
let gap = Math.floor(length / 2);
while (gap >= 1) {
    for (let i = gap; i < length; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - gap] > current) {
            arr[j] = arr[j - gap];
            j -= gap;
        }
        arr[j] = current;
    }
    gap = Math.floor(gap / 2);
}

console.log(`После сортировки Шелла ${arr}`);
