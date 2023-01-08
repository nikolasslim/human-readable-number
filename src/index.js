module.exports = function toReadable(number) {
    let oneTo19 = [
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
    let dozens = [
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
    let b = Number(a.slice(1));
    if (number == 0) return "zero";
    if (number <= 19) return oneTo19[number];
    if (number <= 99 && number % 10 != 0) {
        return dozens[a[0]] + " " + oneTo19[a[1]];
    }
    if (number <= 99 && number % 10 == 0) return dozens[a[0]];
    if (number > 99 && number % 100 == 0) return oneTo19[a[0]] + " hundred";
    if (number > 100 && b < 20) return oneTo19[a[0]] + " hundred " + oneTo19[b];
    if (number > 100 && number % 10 == 0)
        return oneTo19[a[0]] + " hundred " + dozens[a[1]];
    if (number >= 120 && number % 10 != 0)
        return oneTo19[a[0]] + " hundred " + dozens[a[1]] + " " + oneTo19[a[2]];
};
