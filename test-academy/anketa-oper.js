var surname = prompt("Фамилия?");
var name = prompt("Имя?");
var patronymic = prompt("Отчество?");
var age = prompt("Сколько тебе лет?");
var sex = confirm("Пол - женский?")
var retiredAge;
var ageInDays = age * 365;

((sex && (age >= 65)) || ((!sex) && age >=70)) ? retiredAge = "Да" : retiredAge = "Нет";

alert("ФИО:" + " " + surname + " " + name + " " + patronymic + '\n' +"Возраст:" + " " + age + '\n' + "Возраст в днях:" + " " + ageInDays + '\n' +  "Пенсионный возраст:" + " " + retiredAge);