let eat = 3; //количество приемов пищи в день
let everyMonthhaveday = 28; //каждый месяц имеет 28 дней 
let mealspermonth = eat * everyMonthhaveday; //количество приемов пищи в месяц
let mealPeryear = mealspermonth * 12; //количество месяцев году 
let mealperDay = mealPeryear / 336; //количество приемов пищи в день



document.getElementById('button').onclick = function () {
   let login = document.getElementById('login').value;
   let password = document.getElementById('password').value;

   if (login == 'admin' && password == 'qwerty')
      alert('Welcome');
   else if (login == 'father' && password == 'Bandera')
      alert('Glory to Ukrain');
   else alert('voucher for bakhmut <3');
}