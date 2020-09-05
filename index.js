const TelegramBot = require('node-telegram-bot-api');
const token = '924051933:AAFmyF3-UvPPTVSZFTgOa5x0Zk3XjiPGx-c';
const tg = new TelegramBot(token, {polling: true});
const main = require('./inline_keyboards.js');
const menu = require('./keyboards.js');
let user = require('./user.js');
let dice = require('./dice.js');
let double = require('./double.js');
let blackjack = require('./blackjack.js');

tg.on('message', (msg) => {
  let chatId = msg.chat.id;
  if (msg.text == '/start') {
    tg.sendMessage(chatId, "Добро пожаловать на Fortune Games. Выбери игру", main.main_menu);
    tg.sendMessage(chatId, "Чтобы проверить в баланс перейдите в личный кабинет. Для этого нажмите кнопку внизу", menu.menu);
    user.user['name'] = msg.from.username;
  }
  if (msg.text == 'Личный кабинет 🙎‍♂️') {
    if (user.user['balance'] < 0) {
      user.user['balance'] = 0;
    }
    tg.sendMessage(chatId, `Профиль\nИмя: ${user.user['name']}\nБаланс: ${user.user['balance']}💰\n`, main.main_menu);
  }
  if (msg.text == 'Пополнить счет 💷'){
    tg.sendMessage(chatId, "Данный функционал находится в разработке 👨‍💻");
  }
  if (msg.text == 'Вывести деньги 💸'){
    tg.sendMessage(chatId, "Данный функционал находится в разработке 👨‍💻");
  }
});

tg.on('callback_query', (query, match) => {
  let id = query.message.chat.id;
  switch (query.data) {
    // Dice
    case 'dice':
      user.user['bet'] = 0;
      user.user['profit'] = 0;
      user.user['probability'] = 0;
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents1);
    break;
    case 'next1':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents2);
    break;
    case 'next2':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents3);
    break;
    case 'next3':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents4);
    break;
    case 'prev3':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents3);
    break;
    case 'prev2':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents2);
    break;
    case 'prev1':
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents1);
    break;

    // Probability
    case '1%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['1%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 1;
      user.user['profit'] = dice.profits['1%'];
    break;
    case '2%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['2%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 2;
      user.user['profit'] = dice.profits['2%'];
    break;
    case '3%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['3%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 3;
      user.user['profit'] = dice.profits['3%'];
    break;
    case '4%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['4%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 4;
      user.user['profit'] = dice.profits['4%'];
    break;
    case '5%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['5%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 5;
      user.user['profit'] = dice.profits['5%'];
    break;
    case '6%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['6%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 6;
      user.user['profit'] = dice.profits['6%'];
    break;
    case '7%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['7%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 7;
      user.user['profit'] = dice.profits['7%'];
    break;
    case '8%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['8%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 8;
      user.user['profit'] = dice.profits['8%'];
    break;
    case '9%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['9%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 9;
      user.user['profit'] = dice.profits['9%'];
    break;
    case '10%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['10%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 10;
      user.user['profit'] = dice.profits['10%'];
    break;
    case '11%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['11%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 11;
      user.user['profit'] = dice.profits['11%'];
    break;
    case '12%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['12%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 12;
      user.user['profit'] = dice.profits['12%'];
    break;
    case '13%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['13%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 13;
      user.user['profit'] = dice.profits['13%'];
    break;
    case '14%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['14%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 14;
      user.user['profit'] = dice.profits['14%'];
    break;
    case '15%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['15%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 15;
      user.user['profit'] = dice.profits['15%'];
    break;
    case '16%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['16%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 16;
      user.user['profit'] = dice.profits['16%'];
    break;
    case '17%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['17%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 17;
      user.user['profit'] = dice.profits['17%'];
    break;
    case '18%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['18%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 18;
      user.user['profit'] = dice.profits['18%'];
    break;
    case '19%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['19%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 19;
      user.user['profit'] = dice.profits['19%'];
    break;
    case '20%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['20%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 20;
      user.user['profit'] = dice.profits['20%'];
    break;
    case '21%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['21%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 21;
      user.user['profit'] = dice.profits['21%'];
    break;
    case '22%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['22%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 22;
      user.user['profit'] = dice.profits['22%'];
    break;
    case '23%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['23%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 23;
      user.user['profit'] = dice.profits['23%'];
    break;
    case '24%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['24%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 24;
      user.user['profit'] = dice.profits['24%'];
    break;
    case '25%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['25%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 25;
      user.user['profit'] = dice.profits['25%'];
    break;
    case '26%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['26%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 26;
      user.user['profit'] = dice.profits['26%'];
    break;
    case '27%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['27%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 27;
      user.user['profit'] = dice.profits['27%'];
    break;
    case '28%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['28%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 28;
      user.user['profit'] = dice.profits['28%'];
    break;
    case '29%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['29%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 29;
      user.user['profit'] = dice.profits['29%'];
    break;
    case '30%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['30%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 30;
      user.user['profit'] = dice.profits['30%'];
    break;
    case '31%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['31%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 31;
      user.user['profit'] = dice.profits['31%'];
    break;
    case '32%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['32%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 32;
      user.user['profit'] = dice.profits['32%'];
    break;
    case '33%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['33%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 33;
      user.user['profit'] = dice.profits['33%'];
    break;
    case '34%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['34%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 34;
      user.user['profit'] = dice.profits['34%'];
    break;
    case '35%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['35%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 35;
      user.user['profit'] = dice.profits['35%'];
    break;
    case '36%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['36%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 36;
      user.user['profit'] = dice.profits['36%'];
    break;
    case '37%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['37%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 37;
      user.user['profit'] = dice.profits['37%'];
    break;
    case '38%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['38%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 38;
      user.user['profit'] = dice.profits['38%'];
    break;
    case '39%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['39%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 39;
      user.user['profit'] = dice.profits['39%'];
    break;
    case '40%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['40%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 40;
      user.user['profit'] = dice.profits['40%'];
    break;
    case '41%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['41%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 41;
      user.user['profit'] = dice.profits['41%'];
    break;
    case '42%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['42%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 42;
      user.user['profit'] = dice.profits['42%'];
    break;
    case '43%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['43%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 43;
      user.user['profit'] = dice.profits['43%'];
    break;
    case '44%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['44%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 44;
      user.user['profit'] = dice.profits['44%'];
    break;
    case '45%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['45%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 45;
      user.user['profit'] = dice.profits['45%'];
    break;
    case '46%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['46%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 46;
      user.user['profit'] = dice.profits['46%'];
    break;
    case '47%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['47%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 47;
      user.user['profit'] = dice.profits['47%'];
    break;
    case '48%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['48%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 48;
      user.user['profit'] = dice.profits['48%'];
    break;
    case '49%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['49%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 49;
      user.user['profit'] = dice.profits['49%'];
    break;
    case '50%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['50%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 50;
      user.user['profit'] = dice.profits['50%'];
    break;
    case '51%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['51%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 51;
      user.user['profit'] = dice.profits['51%'];
    break;
    case '52%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['52%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 52;
      user.user['profit'] = dice.profits['52%'];
    break;
    case '53%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['53%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 53;
      user.user['profit'] = dice.profits['53%'];
    break;
    case '54%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['54%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 54;
      user.user['profit'] = dice.profits['54%'];
    break;
    case '55%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['55%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 55;
      user.user['profit'] = dice.profits['55%'];
    break;
    case '56%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['56%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 56;
      user.user['profit'] = dice.profits['56%'];
    break;
    case '57%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['57%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 57;
      user.user['profit'] = dice.profits['57%'];
    break;
    case '58%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['58%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 58;
      user.user['profit'] = dice.profits['58%'];
    break;
    case '59%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['59%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 59;
      user.user['profit'] = dice.profits['59%'];
    break;
    case '60%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['60%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 60;
      user.user['profit'] = dice.profits['60%'];
    break;
    case '61%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['61%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 61;
      user.user['profit'] = dice.profits['61%'];
    break;
    case '62%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['62%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 62;
      user.user['profit'] = dice.profits['62%'];
    break;
    case '63%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['63%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 63;
      user.user['profit'] = dice.profits['63%'];
    break;
    case '64%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['64%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 64;
      user.user['profit'] = dice.profits['64%'];
    break;
    case '65%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['65%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 65;
      user.user['profit'] = dice.profits['65%'];
    break;
    case '66%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['66%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 66;
      user.user['profit'] = dice.profits['66%'];
    break;
    case '67%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['67%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 67;
      user.user['profit'] = dice.profits['67%'];
    break;
    case '68%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['68%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 68;
      user.user['profit'] = dice.profits['68%'];
    break;
    case '69%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['69%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 69;
      user.user['profit'] = dice.profits['69%'];
    break;
    case '70%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['70%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 70;
      user.user['profit'] = dice.profits['70%'];
    break;
    case '71%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['71%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 71;
      user.user['profit'] = dice.profits['71%'];
    break;
    case '72%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['72%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 72;
      user.user['profit'] = dice.profits['72%'];
    break;
    case '73%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['73%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 73;
      user.user['profit'] = dice.profits['73%'];
    break;
    case '74%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['74%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 74;
      user.user['profit'] = dice.profits['74%'];
    break;
    case '75%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['75%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 75;
      user.user['profit'] = dice.profits['75%'];
    break;
    case '76%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['76%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 76;
      user.user['profit'] = dice.profits['76%'];
    break;
    case '77%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['77%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 77;
      user.user['profit'] = dice.profits['77%'];
    break;
    case '78%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['78%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 78;
      user.user['profit'] = dice.profits['78%'];
    break;
    case '79%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['79%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 79;
      user.user['profit'] = dice.profits['79%'];
    break;
    case '80%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['80%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 80;
      user.user['profit'] = dice.profits['80%'];
    break;
    case '81%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['81%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 81;
      user.user['profit'] = dice.profits['81%'];
    break;
    case '82%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['82%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 82;
      user.user['profit'] = dice.profits['82%'];
    break;
    case '83%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['83%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 83;
      user.user['profit'] = dice.profits['83%'];
    break;
    case '84%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['84%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 84;
      user.user['profit'] = dice.profits['84%'];
    break;
    case '85%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['85%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 85;
      user.user['profit'] = dice.profits['85%'];
    break;
    case '86%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['86%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 86;
      user.user['profit'] = dice.profits['86%'];
    break;
    case '87%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['87%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 87;
      user.user['profit'] = dice.profits['87%'];
    break;
    case '88%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['88%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 88;
      user.user['profit'] = dice.profits['88%'];
    break;
    case '89%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['89%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 89;
      user.user['profit'] = dice.profits['89%'];
    break;
    case '90%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['90%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 90;
      user.user['profit'] = dice.profits['90%'];
    break;
    case '91%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['91%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 91;
      user.user['profit'] = dice.profits['91%'];
    break;
    case '92%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['92%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 92;
      user.user['profit'] = dice.profits['92%'];
    break;
    case '93%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['93%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 93;
      user.user['profit'] = dice.profits['93%'];
    break;
    case '94%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['94%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 94;
      user.user['profit'] = dice.profits['94%'];
    break;
    case '95%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['95%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 95;
      user.user['profit'] = dice.profits['95%'];
    break;
    case '96%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['96%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 96;
      user.user['profit'] = dice.profits['96%'];
    break;
    case '97%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['97%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 97;
      user.user['profit'] = dice.profits['97%'];
    break;
    case '98%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['98%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 98;
      user.user['profit'] = dice.profits['98%'];
    break;
    case '99%':
      tg.sendMessage(id, "Ваш коэффициент выигрыша составит: х" + dice.profits['99%'] + ". \nВыберите вашу ставку: ", dice.bets);
      user.user['probability'] = 99;
      user.user['profit'] = dice.profits['99%'];
    break;
    // Probability End

    // Bets
    case '1':
      user.user['bet'] += 1;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    case '5':
      user.user['bet'] += 5;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    case '10':
      user.user['bet'] += 10;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    case '25':
      user.user['bet'] += 25;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    case '50':
      user.user['bet'] += 50;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    case '100':
      user.user['bet'] += 100;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, dice.confirm);
    break;
    // Bets End

    // Confirm Bet
    case 'confirm':
      if (user.user['balance'] <= 0) {
        tg.sendMessage("Получите бонус 💷", dice.percents1);
      } else {
        tg.sendMessage(id, "Вы подтвердили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        let m = dice.r(1, 100);
        if (m <= user.user['probability']) {
          user.user['balance'] = user.user['balance'] + (user.user['bet'] * user.user['profit']);
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;
    // Confirm Bet End
    case 'again':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        tg.sendMessage(id, "Вы подтвердили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        if (dice.r(1, 100) <= user.user['probability']) {
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;

    case 'x2':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] * 2;
        tg.sendMessage(id, "Вы удвоили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        if (dice.r(1, 100) <= user.user['probability']) {
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;

    case 'x3':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] * 3;
        tg.sendMessage(id, "Вы утроили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        if (dice.r(1, 100) <= user.user['probability']) {
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;

    case '/2':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] / 2;
        tg.sendMessage(id, "Вы уменьшили ставку в 2 раза. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        if (dice.r(1, 100) <= user.user['probability']) {
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;

    case '/3':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] / 3;
        tg.sendMessage(id, "Вы уменьшили ставку втрое. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        if (dice.r(1, 100) <= user.user['probability']) {
          tg.sendMessage(id, `Вы выиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку ниже.`, dice.again);
        } else {
          tg.sendMessage(id, `Вы проиграли. Ваш баланс ${user.user['balance']}. \nЧтобы сделать повторную ставку, нажмите кнопку нижу.`, dice.again);
        }
      }
    break;

    case 'change':
      user.user['bet'] = 0;
      user.user['profit'] = 0;
      user.user['probability'] = 0;
      tg.sendMessage(id, "Выберите вероятность выигрыша: ", dice.percents1);
    break;

    // Dice End

    case 'bonus':
      tg.sendMessage(id, "Вы получили ежедневный бонус 50 💰.");
      tg.sendMessage(id, "Вы можете получить бонус раз в сутки. \nВыберите игру: ", main.bonus);
      user.user['balance'] += 50;
    break;


    // Double

    case 'double':
      tg.sendMessage(id, "Выбери цвет: ", double.double_change_color);
    break;

    // Change Color
    case 'black':
      double.result['user_color'] = 'black';
      user.user['bet'] = 0;
      user.user['profit'] = 2;
      tg.sendMessage(id, "При выигрыше ваша ставка увеличится в 2 раза.\nВаша ставка: ", double.bet);
    break;
    case 'yellow':
      double.result['user_color'] = 'yellow';
      user.user['bet'] = 0;
      user.user['profit'] = 3;
      tg.sendMessage(id, "При выигрыше ваша ставка увеличится в 3 раза. \nВаша ставка: ", double.bet);
    break;
    case 'red':
      double.result['user_color'] = 'red';
      user.user['bet'] = 0;
      user.user['profit'] = 5;
      tg.sendMessage(id, "При выигрыше ваша ставка увеличится в 5 раз. \nВаша ставка: ", double.bet);
    break;
    case 'green':
      double.result['user_color'] = 'green';
      user.user['bet'] = 0;
      user.user['profit'] = 50;
      tg.sendMessage(id, "При выигрыше ваша ставка увеличится в 50 раз. \nВаша ставка: ", double.bet);
    break;
    // Change Color End

    // Bet
    case 'double_1':
      user.user['bet'] = user.user['bet'] + 1;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    case 'double_5':
      user.user['bet'] = user.user['bet'] + 5;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    case 'double_10':
      user.user['bet'] = user.user['bet'] + 10;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    case 'double_25':
      user.user['bet'] = user.user['bet'] + 25;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    case 'double_50':
      user.user['bet'] = user.user['bet'] + 50;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    case 'double_100':
      user.user['bet'] = user.user['bet'] + 100;
      tg.sendMessage(id, `Ваша ставка ${user.user['bet']}`, double.double_confirm);
    break;
    // Bet End

    // Confirm Bet
    case 'double_confirm':
      if (user.user['balance'] <= 0) {
        tg.sendMessage("Получите бонус 💷", dice.percents1);
      } else {
        tg.sendMessage(id, "Вы подтвердили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    // Confirm Bet End

    // Again Bet
    case 'double_again':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    case 'double_x2':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] * 2;
        tg.sendMessage(id, "Вы удвоили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    case 'double_x3':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] * 3;
        tg.sendMessage(id, "Вы утроили ставку. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    case 'double_/2':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] / 2;
        tg.sendMessage(id, "Вы уменьишил ставку в 2 раза. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    case 'double_/3':
      if (user.user['balance'] <= 0) {
        user.user['balance'] = 0;
        tg.sendMessage(id, `На вашем балансе не осталось средств. Попробуйте получить бонус 💰`);
      }
      else {
        user.user['bet'] = user.user['bet'] / 3;
        tg.sendMessage(id, "Вы уменьшили ставку в 3 раза. ");
        user.user['balance'] = user.user['balance'] - user.user['bet'];
        double.result['color'] = double.color();
        if (double.result['color'] == double.result['user_color']) {
          let win = user.user['bet'] * user.user['profit'];
          user.user['balance'] = user.user['balance'] + win;
          tg.sendMessage(id, `Поздравляем, ${user.user['name']}, вы выиграли. Ваш выигрыш ${win}.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        } else {
          tg.sendMessage(id, `К сожалению, ${user.user['name']}, вы проиграли.\nВаш баланс: ${user.user['balance']}`, double.again_bet);
        }
      }
    break;
    // Again Bet End

    // Double End

    // Blackjack
    case 'blackjack':
      tg.sendMessage(id, "Данный функционал я заебался разрабатывать. Сделаю попозже.");
    break;

    // Blackjack End

    case 'minesweeper':
      tg.sendMessage(id, "Данный функционал находится еще в разработке 🧑‍💻");
    break;
    case 'crash':
      tg.sendMessage(id, "Данный функционал находится еще в разработке 🧑‍💻");
    break;
  }
});

tg.on("polling_error", (err) => console.log(err));
