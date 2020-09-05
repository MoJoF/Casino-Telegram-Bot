let main_menu = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Dice 🎲', callback_data: 'dice' },
      { text: 'Crash 〽️', callback_data: 'crash' }],
      [{ text: 'Minesweeper 💣', callback_data: 'minesweeper' },
      { text: 'Blackjack 🃏', callback_data: 'blackjack' }],
      [{ text: 'Double Game ☸️', callback_data: 'double' }],
      [{ text: 'Bonus 💰', callback_data: 'bonus' }],
      [{ text: 'Камень Ножницы Бумага 🆕', callback_data: 'knb' }]
    ]
  })
}

let bonus = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Dice 🎲', callback_data: 'dice' },
      { text: 'Crash 〽️', callback_data: 'crash' }],
      [{ text: 'Minesweeper 💣', callback_data: 'minesweeper' },
      { text: 'Blackjack 🃏', callback_data: 'blackjack' }],
      [{ text: 'Double Game ☸️', callback_data: 'double' }],
      [{ text: 'Камень Ножницы Бумага 🆕', callback_data: 'knb' }]
    ]
  })
}

module.exports.main_menu = main_menu;
module.exports.bonus = bonus;
