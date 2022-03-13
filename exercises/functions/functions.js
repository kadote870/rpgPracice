const roll_2k10_and_add_20 = () => Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + 20;

function roll_2k10_and_add_30() {
    return Math.floor((Math.random() * 10) + 1) +
        Math.floor((Math.random() * 10) + 1)
        + 30;
}

console.log(roll_2k10_and_add_20())
console.log(roll_2k10_and_add_30())

//----------------------------------------
function test(get_name) {
    console.log(`test1: My name is ${get_name}`)
}

test('Earl')
//----------------------------------------
const test2 = get_name => {
    console.log(`test2: My name is ${get_name}`)
}
test2('Joahim')
//----------------------------------------
const test3 = (get_name, get_age) => {
    console.log(`test3: My name is ${get_name}, im ${get_age} years old`)
}
test3('Joahim', 51)
test3('HITLER', 500)
//----------------------------------------
const add2 = (num1, num2) => num1 * num2
add2(22,2)

const add3 = (num1, num2) => {
    console.log()
    return num1 * num2}
add3(2,10)