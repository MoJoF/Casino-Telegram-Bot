let double_change_color = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "⬛️", callback_data: 'black' },
        { text: "🟨", callback_data: 'yellow' },
        { text: "🟥", callback_data: 'red' },
        { text: '🟩', callback_data: 'green' }
      ]
    ]
  })
}

let bet = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '1💵', callback_data: 'double_1' },
        { text: '5💵', callback_data: 'double_5' },
        { text: '10💵', callback_data: 'double_10' },
        { text: '25💵', callback_data: 'double_25' },
        { text: '50💵', callback_data: 'double_50' },
        { text: '100💵', callback_data: 'double_100' }
      ]
    ]
  })
}

let double_confirm = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Подтвердить ставку ✅", callback_data: 'double_confirm' }
      ]
    ]
  })
}

let again_bet = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Повторить ставку 🔄", callback_data: 'double_again' }
      ],
      [
        { text: "x2", callback_data: 'double_x2' },
        { text: "x3", callback_data: 'double_x3' }
      ],
      [
        { text: '/2', callback_data: 'double_/2' },
        { text: '/3', callback_data: 'double_/3' }
      ]
    ]
  })
}

let result = {
  'color': '',
  'user_color': ''
}

function color() {
  let rand = Math.random() * 100;
  let m = Math.floor(rand);
  if (m <= 48) {
    return 'black';
  }
  else if (m >= 49 && m <= 79) {
    return 'yellow';
  }
  else if (m >= 80 && m <= 97) {
    return 'red';
  }
  else if (m >= 98 && m <= 100) {
    return 'green';
  }
};

module.exports.double_change_color = double_change_color;
module.exports.bet = bet;
module.exports.double_confirm = double_confirm;
module.exports.result = result;
module.exports.color = color;
module.exports.again_bet = again_bet;
