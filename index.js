// masala 1
// function StudentMalumoti(ismi, kursR) {
//   this.ismi = ismi;
//   this.kursR = kursR;

//   this.introduce = function () {
//     return (
//       "Mening ismim " + this.ismi + " " + this.kursR + " " + "kursda o'qiyman."
//     );
//   };
// }

// const student1 = new StudentMalumoti("Ali", 3);
// console.log(student1.introduce());

// masala2 avto ulov obekti
// function Avtoulov(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;

//   this.getInfo = function () {
//     console.log(this.make + " " + this.model + " " + this.year);
//   };
// }

// const toyota = new Avtoulov("Nissan", "Tiida", 2024);
// toyota.getInfo();

// const malibu = new Avtoulov("Toyota", "Camry", 2021);
// malibu.getInfo();

// masala 3 talaba
// function Talaba(ismi, yoshi, bahosi) {
//   this.ismi = ismi;
//   this.yoshi = yoshi;
//   this.bahosi = bahosi;

//   this.isPassed = function () {
//     console.log(this.bahosi >= 60);
//   };
// }

// const talaba2 = new Talaba("Ezoza", 20, 60);
// talaba2.isPassed();

// const talaba3 = new Talaba("Saidaxror", 19, 50);
// talaba3.isPassed();

// masala 4 avtomabil boshqarish
// function Car(brand, speed) {
//   this.brand = brand;
//   this.speed = speed;

//   this.accelerate = function (amount) {
//     this.speed += amount;
//   };

//   this.brake = function (amount) {
//     this.speed = Math.max(this.speed - amount, 0);
//   };

//   this.getSpeed = function () {
//     return this.brand + ":" + " " + this.speed + " " + "km/soat";
//   };
// }

// let car = new Car("Toyota", 100);
// console.log(car.getSpeed());

// car.accelerate(50);
// console.log(car.getSpeed());

// car.brake(30);
// console.log(car.getSpeed());

// masala 5 ob-havo malumoti
// function Weather(shahar, harorat, unit) {
//   this.harorat = harorat;
//   this.shahar = shahar;
//   this.unit = unit;

//   this.convertToCelsius = function () {
//     if (this.unit == "fahrenheit") {
//       this.harorat = ((this.harorat - 32) * 5) / 9;
//       this.unit = "celsius";
//     }
//   };

//   this.convertToFahrenheit = function () {
//     if (this.unit == "celsius") {
//       this.harorat = (this.harorat * 9) / 5 + 32;
//       this.unit = "fahrenheit";
//     }
//   };

//   this.getTemperature = function () {
//     if (this.unit == "celsius") {
//       return this.shahar + " " + this.harorat.toFixed(1) + "°C";
//     } else {
//       return this.shahar + " " + this.harorat.toFixed(1) + "°F";
//     }
//   };
// }

// let weather = new Weather("New York", 21, "fahrenheit");
// console.log(weather.getTemperature());

// weather.convertToCelsius();
// console.log(weather.getTemperature());

// weather.convertToFahrenheit();
// console.log(weather.getTemperature());

// masala 6 (5-taskdagi misol)
// Array uchun yig'indini hisoblash
// Array.prototype.yigindisi = function () {
//   return "Yegindisi: " + this.reduce((sum, current) => sum + current, 0);
// };

// const a = [1, 3, 2];
// console.log(a.yigindisi());

// const b = [1, 2];
// console.log(b.yigindisi());

// masala 7 (Bank hisob raqami)
// function BankAccount(accountNumber, initialBalance) {
//   this.accountNumber = accountNumber;
//   this.balance = initialBalance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = function (amount) {
//     if (amount > this.balance) {
//       this.balance = "Yetarli mablag' mavjud emas";
//     } else {
//       this.balance -= amount;
//     }
//   };
// }

// const account = new BankAccount("123456789", 1000);
// account.deposit(500);
// console.log(account.balance);

// account.withdraw(200);
// console.log(account.balance);

// account.withdraw(2000);
// console.log(account.balance);

// masala 8 (4-task rasmidagi masala)
// Number.prototype.kvadrati = function () {
//   return "Kvadrati: " + this * this + " " + "ga teng";
// };

// const a = 12;
// console.log(a.kvadrati());

// const b = 2;
// console.log(b.kvadrati());
