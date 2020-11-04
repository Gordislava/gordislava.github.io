var surname = prompt("Фамилия?");
var name = prompt("Имя?");
var patronymic = prompt("Отчество?");
var age = prompt("Сколько тебе лет?");
var sex = confirm("Пол - женский?")
var retiredAge;
var ageInDays = age * 365;

if ((sex && (age >= 57)) || ((!sex) && age >=62)) {
    retiredAge = "Да"; 
} else {
    retiredAge = "Нет";
}

alert("ФИО:" + " " + surname + " " + name + " " + patronymic + '\n' +"Возраст:" + " " + age + '\n' + "Возраст в днях:" + " " + ageInDays + '\n' +  "Пенсионный возраст:" + " " + retiredAge);