function arrSort(a, b) {
    return a.toString().length - b.toString().length;
}

function numbSort(arr) {
    return arr.sort(arrSort);
}


console.log(numbSort([2, 37, 1, 2, 739, 2]));
console.log(numbSort([777, 182, 11, 881, 27]));
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]));

/////////

function sortStr(arr, str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let a = 0; a < arr.length; a++) {
            if (arr[a][0] === str[i]) {
                result.push(arr[a]);
                break;
            }
        }
    }
    return result;
}


console.log(sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop"));
console.log(sortStr(["middle", "junior", "senior"], "stnmj"));
console.log(sortStr(["bike", "car", "motorcycle"], "camrb"));


/////////

function revOddWord(str) {
    let newStr = str.split(' ');
    newStr = newStr.map(function (word) {
        if (word.length % 2 !== 0) {
            return word.split('').reverse().join('');
        } else {
            return word;
        }
    });
    return newStr.join(' ');
}

console.log(revOddWord("Egg"));
console.log(revOddWord("It is false"));
console.log(revOddWord('Dear Santa , give me a new iPhone'));
// Не совсем понял, как не учитывать запятую после santa.Каким способом можно решить это? ИИ какое-то сложное решение(или нет) выдает.