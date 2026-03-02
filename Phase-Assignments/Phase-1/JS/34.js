import rs from 'readline-sync'



function areaOfSquare() {
    let side = rs.questionInt('Enter the side of the Square: ')
    if (typeof side != 'number' || isNaN(side) || side < 0) {
        return 'Enter a valid side'
    }
    let area = side * side
    return area
}

function areaOfRectangle() {
    let length = rs.questionInt('Enter the length of the rectangle: ')
    let breadth = rs.questionInt('Enter the breadth of the rectangle: ')
    if (typeof length != 'number' || isNaN(length) || length < 0) {
        return 'Enter valid length'
    }
    if (typeof breadth != 'number' || isNaN(breadth) || breadth < 0) {
        return 'Enter valid length'
    }
    let area = length * breadth
    return area
}
function areaOfCircle() {
    let radius = rs.questionInt('Enter the radius of the circle: ')
    if (typeof radius != 'number' || isNaN(radius) || radius < 0) {
        return 'Enter valid radius'
    }

    const pi = 3.14
    let area = pi * (radius * radius)
    return area

}


function main() {
    while (true) {
        console.log('====Area of Shapes===');
        console.log('0. Exit');
        console.log('1. Area of Square');
        console.log('2. Area of Rectangle');
        console.log('3. Area of Circle');

        const choice = rs.questionInt('Enter your choice: ')
        switch (choice) {
            case 0:
                return
            case 1:
                console.log(areaOfSquare())
                break
            case 2:
                console.log(areaOfRectangle())
                break
            case 3:
                console.log(areaOfCircle())
                break
            default:
                console.log('Enter a valid choice');

                break

        }
    }
}
main()