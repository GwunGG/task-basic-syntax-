export function romanToInteger(str) {
    let result = 0;
    let array = str.split('');
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'M':
                if (array[i - 1] === 'C') {
                    result += 800;
                } else {
                    result += 1000;
                }
                break;
            case 'D':
                if (array[i - 1] === 'C') {
                    result += 300;
                } else {
                    result += 500;
                }
                break;
            case 'C':
                if (array[i - 1] === 'X') {
                    result += 80;
                } else {
                    result += 100;
                }
                break;
            case 'L':
                if (array[i - 1] === 'X') {
                    result += 30;
                } else {
                    result += 50;
                }
                break;
            case 'X':
                if (array[i - 1] === 'I') {
                    result += 8;
                } else {
                    result += 10;
                }
                break;
            case 'V':
                if (array[i - 1] === 'I') {
                    result += 3;
                } else {
                    result += 5;
                }
                break;
            case 'I':
                result += 1;
                break;
            default:
                result += 0;
        }
    }
    return result;
}
