// მომხმარებელს შეყავს ორი რიცხვი, თქვენ უნდა დაითვალოთ პირველი რიცხვიდან მეორე რიცხვამდე ყველა ნატურალური რიცხვის ჯამი

const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');

let sum = 0;

if (firstNumber >= secondNumber) {
  alert('First value must not be greater than second value');
} else {
  for (let i = firstNumber; i < secondNumber; i++) {
    sum += i;
  }
}
console.log(sum);


// მომხმარებელს შეყავს ორი რიცხვი, თქვენ უნდა დაითვალოთ პირველი რიცხვიდან მეორე რიცხვამდე ყველა ნატურალური რიცხვის ნამრავლი

const first = +prompt('Enter First Number');
const second = +prompt('Enter Second Number');

let mult = 1;

if (first >= second) {
  alert('First value must not be greater than second value')
} else {
  for (let i = first; i < second; i++) {
    mult *= i;
    console.log(mult);
  }
}

console.log(mult);

// დაითვალეთ 100 დან 100000-მდე ყველა ისეთი რიცხვის რაოდენობა რომელიც იყოფა 11ზე უნაშთოდ

for (let i = 100; i < 100000; i++) {
  if (i % 11 === 0) {
    console.log(i);
  }
}

// მომხმარებელს შეყავს ქართული ასოები. თქვენ უნდა დაწეროთ კონსოლში ეს ასო ხმოვანია თუ თანხმოვანი.

const letter = prompt('გთხოვთ შეიყვანოთ ქართული ნებისმიერი ასო');

if (letter === 'ა' || letter === 'ე' || letter === 'ი' || letter === 'ო' || letter === 'უ') {
  alert('თქვენი შეყვანილი ასო ხმოვანია');
} else {
  alert('თქვენი შეყვანილი ასო თანხმოვანია');
};


// მომხმარებელს შეყავს რიცხვი. თქვენ უნდა დაბეჭდოთ კონსოლში ამ რიცხვიდან 1-მდე ყველა რიცხვი.

let number = +prompt('Enter any number');

if (number > 0) {
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
} else {
  for (let i = number; i <= 1; i++) {
    console.log(i);
  }
};


// მომხმარებელს შეყავს რიცხვი(მინიმუმ 2 ნიშნა). კონსოლში დაბეჭდეთ ამ რიცხვის ბოლო ციფრი(მაგ: 25 -ის შემთხვევაში 5, 139 - ის შემთხვევაში 9 და ასე შემდეგ)

const highNumber = +prompt('Enter a number that is greater than or equal to 10');

let lastUnit = highNumber % 10;

if (highNumber <= 10) {
  alert('Please enter a number that is equal or greater that 10')
} else {
  console.log(lastUnit);
}