module.exports = function toReadable(number) {
    let ten = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let hundreds = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let a = String(number);
    if (number <= 19) {
        return ten[number];
    } else if (number <= 20) {
        return hundreds[a[0]];
    } else if (number <= 99 && number % 10 == 0) {
        return hundreds[a[0]];
    } else if (number <= 99) {
        return hundreds[a[0]] + " " + ten[a[1]];
    } else if (number < 1000) {
        return ten[a[0]] + " hundred " + hundreds[a[1]] + " " + ten[a[2]];
    }
};
