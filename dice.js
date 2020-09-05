let profits = {
  '1%': 99,
  '2%': 49.5,
  '3%': 33,
  '4%': 24.75,
  '5%': 19.8,
  '6%': 16.15,
  '7%': 14.14,
  '8%': 12.37,
  '9%': 11,
  '10%': 9.9,
  '11%': 9,
  '12%': 8.25,
  '13%': 7.61,
  '14%': 7.07,
  '15%': 6.6,
  '16%': 6.18,
  '17%': 5.82,
  '18%': 5.5,
  '19%': 5.21,
  '20%': 4.95,
  '21%': 4.71,
  '22%': 4.5,
  '23%': 4.3,
  '24%': 4.12,
  '25%': 3.96,
  '26%': 3.8,
  '27%': 3.66,
  '28%': 3.53,
  '29%': 3.41,
  '30%': 3.3,
  '31%': 3.19,
  '32%': 3.09,
  '33%': 3,
  '34%': 2.91,
  '35%': 2.82,
  '36%': 2.75,
  '37%': 2.67,
  '38%': 2.6,
  '39%': 2.53,
  '40%': 2.47,
  '41%': 2.41,
  '42%': 2.35,
  '43%': 2.3,
  '44%': 2.25,
  '45%': 2.2,
  '46%': 2.15,
  '47%': 2.1,
  '48%': 2.06,
  '49%': 2.02,
  '50%': 1.98,
  '51%': 1.94,
  '52%': 1.9,
  '53%': 1.86,
  '54%': 1.83,
  '55%': 1.8,
  '56%': 1.76,
  '57%': 1.73,
  '58%': 1.7,
  '59%': 1.67,
  '60%': 1.65,
  '61%': 1.62,
  '62%': 1.59,
  '63%': 1.57,
  '64%': 1.54,
  '65%': 1.52,
  '66%': 1.5,
  '67%': 1.47,
  '68%': 1.45,
  '69%': 1.43,
  '70%': 1.41,
  '71%': 1.39,
  '72%': 1.37,
  '73%': 1.35,
  '74%': 1.33,
  '75%': 1.32,
  '76%': 1.3,
  '77%': 1.28,
  '78%': 1.26,
  '79%': 1.25,
  '80%': 1.23,
  '81%': 1.22,
  '82%': 1.2,
  '83%': 1.19,
  '84%': 1.17,
  '85%': 1.16,
  '86%': 1.15,
  '87%': 1.13,
  '88%': 1.12,
  '89%': 1.11,
  '90%': 1.1,
  '91%': 1.08,
  '92%': 1.07,
  '93%': 1.06,
  '94%': 1.05,
  '95%': 1.04,
  '96%': 1.03,
  '97%': 1.02,
  '98%': 1.01,
  '99%': 1.005,
  '100%': 1
}

let percents1 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '1%', callback_data: '1%' },
        { text: '2%', callback_data: '2%' },
        { text: '3%', callback_data: '3%' },
        { text: '4%', callback_data: '4%' },
        { text: '5%', callback_data: '5%' }
      ],
      [
        { text: '6%', callback_data: '6%' },
        { text: '7%', callback_data: '7%' },
        { text: '8%', callback_data: '8%' },
        { text: '9%', callback_data: '9%' },
        { text: '10%', callback_data: '10%' }
      ],
      [
        { text: '11%', callback_data: '11%' },
        { text: '12%', callback_data: '12%' },
        { text: '13%', callback_data: '13%' },
        { text: '14%', callback_data: '14%' },
        { text: '15%', callback_data: '15%' }
      ],
      [
        { text: '16%', callback_data: '16%' },
        { text: '17%', callback_data: '17%' },
        { text: '18%', callback_data: '18%' },
        { text: '19%', callback_data: '19%' },
        { text: '20%', callback_data: '20%' }
      ],
      [
        { text: '21%', callback_data: '21%' },
        { text: '22%', callback_data: '22%' },
        { text: '23%', callback_data: '23%' },
        { text: '24%', callback_data: '24%' },
        { text: '25%', callback_data: '25%' }
      ],
      [
        { text: ' ', callback_data: '.' },
        { text: ' ', callback_data: '..' },
        { text: '➡️', callback_data: 'next1' }
      ]
    ]
  })
}

let percents2 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '26%', callback_data: '26%' },
        { text: '27%', callback_data: '27%' },
        { text: '28%', callback_data: '28%' },
        { text: '29%', callback_data: '29%' },
        { text: '30%', callback_data: '30%' }
      ],
      [
        { text: '31%', callback_data: '31%' },
        { text: '32%', callback_data: '32%' },
        { text: '33%', callback_data: '33%' },
        { text: '34%', callback_data: '34%' },
        { text: '35%', callback_data: '35%' }
      ],
      [
        { text: '36%', callback_data: '36%' },
        { text: '37%', callback_data: '37%' },
        { text: '38%', callback_data: '38%' },
        { text: '39%', callback_data: '39%' },
        { text: '40%', callback_data: '40%' }
      ],
      [
        { text: '41%', callback_data: '41%' },
        { text: '42%', callback_data: '42%' },
        { text: '43%', callback_data: '43%' },
        { text: '44%', callback_data: '44%' },
        { text: '45%', callback_data: '45%' }
      ],
      [
        { text: '46%', callback_data: '46%' },
        { text: '47%', callback_data: '47%' },
        { text: '48%', callback_data: '48%' },
        { text: '49%', callback_data: '49%' },
        { text: '50%', callback_data: '50%' }
      ],
      [
        { text: '⬅️', callback_data: 'prev1' },
        { text: ' ', callback_data: '...' },
        { text: '➡️', callback_data: 'next2' }
      ]
    ]
  })
}

let percents3 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '51%', callback_data: '51%' },
        { text: '52%', callback_data: '52%' },
        { text: '53%', callback_data: '53%' },
        { text: '54%', callback_data: '54%' },
        { text: '55%', callback_data: '55%' }
      ],
      [
        { text: '56%', callback_data: '56%' },
        { text: '57%', callback_data: '57%' },
        { text: '58%', callback_data: '58%' },
        { text: '59%', callback_data: '59%' },
        { text: '60%', callback_data: '60%' }
      ],
      [
        { text: '61%', callback_data: '61%' },
        { text: '62%', callback_data: '62%' },
        { text: '63%', callback_data: '63%' },
        { text: '64%', callback_data: '64%' },
        { text: '65%', callback_data: '65%' }
      ],
      [
        { text: '66%', callback_data: '66%' },
        { text: '67%', callback_data: '67%' },
        { text: '68%', callback_data: '68%' },
        { text: '69%', callback_data: '69%' },
        { text: '70%', callback_data: '70%' }
      ],
      [
        { text: '71%', callback_data: '71%' },
        { text: '72%', callback_data: '72%' },
        { text: '73%', callback_data: '73%' },
        { text: '74%', callback_data: '74%' },
        { text: '75%', callback_data: '75%' }
      ],
      [
        { text: '⬅️', callback_data: 'prev2' },
        { text: ' ', callback_data: '....' },
        { text: '➡️', callback_data: 'next3' }
      ]
    ]
  })
}

let percents4 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '76%', callback_data: '76%' },
        { text: '77%', callback_data: '77%' },
        { text: '78%', callback_data: '78%' },
        { text: '79%', callback_data: '79%' },
        { text: '80%', callback_data: '80%' }
      ],
      [
        { text: '81%', callback_data: '81%' },
        { text: '82%', callback_data: '82%' },
        { text: '83%', callback_data: '83%' },
        { text: '84%', callback_data: '84%' },
        { text: '85%', callback_data: '85%' }
      ],
      [
        { text: '86%', callback_data: '86%' },
        { text: '87%', callback_data: '87%' },
        { text: '88%', callback_data: '88%' },
        { text: '89%', callback_data: '89%' },
        { text: '90%', callback_data: '90%' }
      ],
      [
        { text: '91%', callback_data: '91%' },
        { text: '92%', callback_data: '92%' },
        { text: '93%', callback_data: '93%' },
        { text: '94%', callback_data: '94%' },
        { text: '95%', callback_data: '95%' }
      ],
      [
        { text: '96%', callback_data: '96%' },
        { text: '97%', callback_data: '97%' },
        { text: '98%', callback_data: '98%' },
        { text: '99%', callback_data: '99%' },
      ],
      [
        { text: '⬅️', callback_data: 'prev3' },
        { text: ' ', callback_data: '.....' },
        { text: ' ', callback_data: '.' }
      ]
    ]
  })
}

let bets = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: '1💵', callback_data: '1' },
        { text: '5💵', callback_data: '5' },
        { text: '10💵', callback_data: '10' },
        { text: '25💵', callback_data: '25' },
        { text: '50💵', callback_data: '50' },
        { text: '100💵', callback_data: '100' }
      ]
    ]
  })
}

let confirm = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Подтвердить ставку ✅", callback_data: 'confirm' }]
    ]
  })
}

let again = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Играть снова ♻️", callback_data: 'again' },
      { text: "Изменить ставку ✏️", callback_data: 'change' }],
      [{ text: "х2 ставку", callback_data: 'x2' },
      { text: "x3 ставку", callback_data: 'x3' }],
      [{ text: "/2 ставку", callback_data: '/2' },
      { text: "/3 ставку", callback_data: '/3'}]
    ]
  })
}

function r(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

module.exports.profits = profits;
module.exports.percents1 = percents1;
module.exports.percents2 = percents2;
module.exports.percents3 = percents3;
module.exports.percents4 = percents4;
module.exports.bets = bets;
module.exports.confirm = confirm;
module.exports.again = again;
module.exports.r = r;
