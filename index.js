const dotenv = require('dotenv').config();
const Token = dotenv.parsed.Token;
const TelegramBot = require("node-telegram-bot-api");
const msgSender = require('./msgSender');
const bot = new TelegramBot(Token, { polling: true });
const Generator = require('id-generator');
const uniqeSeparator = '===???---&&&';
let g = new Generator();

const Users = [
  {
    id: 357629644, username: "miraculous_bog", click: 0, isAdmin: true, post: {
      state: 0,
      title: '',
      text: '',
      dateStart: "",
      dateEnd: "",
      photo: '',
      link: '',
      linkName: ''
    }
  }
];
const Archive = [];
const Posts = [
  // {
  //   state: 3,
  //   title: 'title3',
  //   text: 'text3',
  //   dateStart: 1675099800000,
  //   dateEnd: 1675099800000,
  //   photo: 'AgACAgQAAxkBAAIBoGPWXkKvFN3eHyNsTFykh3M5DmieAAJXuTEbMQ25UkhPcHxOss6ZAQADAgADcwADLQQ',
  //   id: '687a2d61-efeb-48c1-b742-aee5dc544024.3',
  //   link: 'Go&&https://www.google.com'
  // },
  // {
  //   state: 1,
  //   title: 'title',
  //   text: 'text',
  //   dateStart: 1675004400000,
  //   dateEnd: 1675099800000,
  //   photo: 'AgACAgQAAxkBAAIBoGPWXkKvFN3eHyNsTFykh3M5DmieAAJXuTEbMQ25UkhPcHxOss6ZAQADAgADcwADLQQ',
  //   id: '687a2d61-efeb-48c1-b742-aee5dc544024.1',
  //   link: 'Go&&https://www.google.com'
  // },
  // {
  //   state: 2,
  //   title: 'title2',
  //   text: 'text2',
  //   dateStart: 1675090800000,
  //   dateEnd: 1675099800000,
  //   photo: 'AgACAgQAAxkBAAIBsmPWXmFbKUIstsq0pdVi_a9ZsPHkAAJbuTEbMQ25UnZW9NddwJvnAQADAgADcwADLQQ',
  //   id: 'f46210e0-d9c7-44f7-bece-f1405f02c6c9.1',
  //   link: 'Go&&https://www.google.com'
  // }
];

const stepText = {
  0: "Ви припинили процес створення посту",
  1: "Ведіть назву",
  2: "Введіть текст",
  3: "Введіть дату початку у форматі (1.1.2024.12.12) де(день, місяць,рік,година, хвилина)",
  4: "Введіть дату закінчення у форматі (1.1.2024.12.12) де(день, місяць,рік,година, хвилина)",
  5: "Введіть назву кнопки для посилання",
  6: "Введіть посилання на реєстрацію",
  7: "Завантажити фото",
}

const isAdmin = (msg) =>
  Users.find((admin) => admin.id === msg.chat.id && admin.isAdmin === true);


const getUserById = (id) => Users.find((user) => user.id === id);

const getChatId = (msg) => {
  return msg.chat.id;
};

const getUser = function (msg) {
  return Users.find((el) => el.id === msg.from.id);
};
const getState = (msg) => getUser(msg).post.state;

const getPhotoMenu = (id, photo) => {
  bot.sendPhoto(id, photo);
  bot.sendMessage(id, `Ви завантажили це фото. Зберегти та продовжити?`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Зберегти?",
            callback_data: "save-photo",
          },
          {
            text: "Ввести ще раз",
            callback_data: "again",
          },
        ],
      ],
    },
  });
}
const acceptMsg = (msg, text) => {
  bot.sendMessage(msg.from.id, text);
  bot.sendMessage(msg.from.id, `Ви завантажили цей текст. Зберегти та продовжити?`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Зберегти?",
            callback_data: "save-text",
          },
          {
            text: "Ввести ще раз",
            callback_data: "again",
          },
          {
            text: "Припинити",
            callback_data: "stop",
          },
        ],
      ],
    },
  });
}

bot.on("message", (msg) => {
  // if (getUser(msg).status) return;
  console.log(msg);
  let type;
  if (msg.hasOwnProperty('text')) {
    if (msg.text[0] === '/') return;
    type = 'text';
  } else if (msg.hasOwnProperty('photo')) {
    type = 'photo';
  }
  // console.log(getUser(msg));

  const state = getState(msg);
  if (state === 13) return;
  switch (state) {
    case 1:
      console.log('------------------------------------');
      getUser(msg).post.title = msg.text;
      acceptMsg(msg, msg.text);
      break;
    case 2:
      console.log('------------------------------------');
      getUser(msg).post.text = msg.text;
      acceptMsg(msg, msg.text);
      break;
    case 3:
      console.log('------------------------------------');
      const currentDate = (msg.text).split(".");
      const formatedCurrentDate = currentDate.map(el => Number(el));
      console.log(formatedCurrentDate);
      const newDate = new Date(formatedCurrentDate[2], formatedCurrentDate[1] - 1, formatedCurrentDate[0], formatedCurrentDate[3], formatedCurrentDate[4]);
      const unixDate = +new Date(newDate)
      getUser(msg).post.dateStart = unixDate;
      acceptMsg(msg, newDate);
    case 4:
      console.log('------------------------------------');
      const currentDateEnd = (msg.text).split(".");
      const formatedCurrentDateEnd = currentDateEnd.map(el => Number(el));
      console.log(formatedCurrentDateEnd);
      const newDateEnd = new Date(formatedCurrentDateEnd[2], formatedCurrentDateEnd[1] - 1, formatedCurrentDateEnd[0], formatedCurrentDateEnd[3], formatedCurrentDateEnd[4]);
      const unixDateEnd = +new Date(newDateEnd)
      getUser(msg).post.dateEnd = unixDateEnd;
      acceptMsg(msg, newDateEnd);
      break;
    case 5:
      getUser(msg).post.linkName = msg.text;
      acceptMsg(msg, msg.text);
      console.log("after5")
      break;
    case 6:
      getUser(msg).post.link = msg.text;
      acceptMsg(msg, msg.text);
      console.log("after6")
      break;
    case 7:
      console.log('------------------------------------');
      getUser(msg).post.photo = msg.photo[0].file_id;
      getPhotoMenu(getChatId(msg), msg.photo[0].file_id);
      console.log("after4")
      break;
  }
});

const sendList = (id, post) => {
  bot.sendMessage(id, `${post.title}\nКоли?: ${(new Date(post.dateStart)).toLocaleString('uk-UA', { dateStyle: "medium", timeStyle: "short", timeZone: 'Europe/Kiev' })} \nКінець: ${(new Date(post.dateEnd)).toLocaleString('uk-UA', { dateStyle: "medium", timeStyle: "short", timeZone: 'Europe/Kiev' })} `, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Детальніше",
            callback_data: `more-info${uniqeSeparator}${post.id}`,
          }
        ],
      ],
    },
  });
}

const sendListArchive = (id, post) => {
  console.log(id, post);
  bot.sendMessage(id, `${post.title}\nКоли?: ${(new Date(post.dateStart)).toLocaleString('uk-UA', { dateStyle: "medium", timeStyle: "short", timeZone: 'Europe/Kiev' })} \nКінець: ${(new Date(post.dateEnd)).toLocaleString('uk-UA', { dateStyle: "medium", timeStyle: "short", timeZone: 'Europe/Kiev' })} `, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Детальніше",
            callback_data: `more-info-arc${uniqeSeparator}${post.id}`,
          },
          {
            text: "Видалити",
            callback_data: `more-info-del${uniqeSeparator}${post.id}`,
          }
        ],
      ],
    },
  });
}
const sendPost = (id, post) => {
  console.log(post)
  bot.sendPhoto(id, post.photo);

  bot.sendMessage(id, post.text, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: post.linkName,
            url: post.link,
          }
        ],
      ],
    },
  });
}

const relocateToArchive = (id) => {
  const currentPost = Posts.find(item => item.id === id);
  const indexPost = Posts.indexOf(currentPost);
  Archive.push(currentPost);
  Users.forEach(item => {
    if (item.isAdmin === true) bot.sendMessage(item.id, `Подія ${currentPost.title} завершилась(Переміщено в архів)`);
  });
  Posts.splice(indexPost, 1);
  console.log(Posts, '==============', Archive);
}
const deleteArchivePost = (id) => {
  console.log('DEELEEETING');
  const currentArchivePost = Archive.find(item => item.id === id);
  console.log(currentArchivePost);
  const indexArchivePost = Archive.indexOf(currentArchivePost);
  console.log(indexArchivePost);
  Users.forEach(item => {
    if (item.isAdmin === true) { bot.sendMessage(item.id, `Подія ${currentArchivePost.title} видалена з архіву`); }
  });
  Archive.splice(indexArchivePost, 1);
}

const getMsg = (query) => {
  if (query.data.includes(uniqeSeparator)) {
    console.log('yeeeeeeeeep');
    let dataBeforeSeparator = query.data.split(uniqeSeparator);
    console.log(dataBeforeSeparator);
    switch (dataBeforeSeparator[0]) {
      case 'more-info':
        console.log('more-info');
        console.log(dataBeforeSeparator);
        sendPost(query.message.chat.id, Posts.find(el => el.id === dataBeforeSeparator[1]))
        break;
      case 'more-info-del':
        deleteArchivePost(dataBeforeSeparator[1]);
        break;
      case 'more-info-arc':
        sendPost(query.message.chat.id, Archive.find(el => el.id === dataBeforeSeparator[1]))
        break;
    }
  }
  console.log(query);

  switch (query.data) {
    case "save-text":

      console.log(Users, query.message.chat.id);
      let currentAdmin = Users.find((el) => el.id === query.message.chat.id);
      currentAdmin.post.state += 1;
      bot.sendMessage(query.message.chat.id, stepText[`${currentAdmin.post.state}`]);
      // Posts.forEach(i => sendEventAll());

      // intermediateControllerPhoto(objPhoto);
      break;
    case "save-photo":
      console.log('saaaaaaaaaaavee---teeeext');
      let currentAdminPhoto = Users.find((el) => el.id === query.message.chat.id);
      currentAdminPhoto.post.state = 0;

      bot.sendMessage(query.message.chat.id, 'Ви додали новий пост!');

      let newId = g.newId();
      Posts.push({ ...currentAdminPhoto.post, id: newId });
      g.reset();
      console.log('POSSTT', Posts);
      Users.forEach(user => {
        bot.sendMessage(user.id, `Хей, у нас тут нова подія`);
        setTimeout(sendList, 1000, user.id, { ...currentAdminPhoto.post, id: newId });
      });

      const activePostTime = currentAdminPhoto.post.dateEnd - (+new Date());
      setTimeout(relocateToArchive, activePostTime, newId);
      break;
    case "get_list_events":
      Posts.sort(function (a, b) {
        return a.date - b.date;
      });

      Posts.forEach((postElement, i = 1) => setTimeout(sendList, i * 1000, query.message.chat.id, postElement));
      break;
    case "again":
      bot.sendMessage(query.message.chat.id, 'Введіть ще раз!');
      break;
    case "stop":
      let currentAdminStop = Users.find((el) => el.id === query.message.chat.id);
      currentAdminStop.post.state = 0;
      bot.sendMessage(query.message.chat.id, 'Ви припинили проце створення поста');
      break;
  };
}

bot.on("callback_query", (query) => {
  getMsg(query);
});

bot.onText(/\/start/, (msg) => {
  console.log('staaaaaaaart');
  const userId = msg.from.id;
  const isExist = Users.find((item) => item.id === userId);


  !isExist
    ? Users.push({
      id: msg.from.id,
      username: msg.from.username,
      click: 0,
      isAdmin: false
    })
    : null;

  msgSender.sendCongrats(bot, msg);

  Posts.sort(function (a, b) {
    return a.date - b.date;
  });

  Posts.forEach((postElement, i = 1) => setTimeout(sendList, i * 1000, msg.from.id, postElement));
});


bot.onText(/\/show/, (msg) => {
  Posts.sort(function (a, b) {
    return a.date - b.date;
  });

  Posts.forEach((postElement, i = 1) => setTimeout(sendList, i * 1000, msg.from.id, postElement));

});
bot.onText(/\/turnAdmin (.+)/, (msg, source, match) => {
  const currentText = Number(source[1]);
  // console.log(currentText);
  if (isAdmin(msg)) {
    // console.log("before user");
    const user = getUserById(currentText);
    // console.log(user);
    if (user.isAdmin === false) {
      user.isAdmin = true;
      user.post = {
        state: 0,
        title: '',
        text: '',
        dateStart: "",
        dateEnd: "",
        photo: '',
        link: '',
        linkName: ''
      };
      bot.sendMessage(currentText, `Вітаю! Ти адмін.\nСписок доступних команд:\n/post запуск процесу створення новї події\n/Archive показ подій, які вже минули, можливість їх видалення(ті що з кнопкою видалити)\n(/sendMsgPerson *ваше повідомлення*) можливість надіслати своє повідомлення всім користувачам`);
    }
    else {
      user.isAdmin = false;
      bot.sendMessage(currentText, 'Тепер ви не адмін((');
    }
  }
});

bot.onText(/\/sendMsgPerson (.+)/, (msg, source, match) => {
  if (isAdmin(msg)) {
    const currentText = source[1];
    Users.forEach(user => bot.sendMessage(user.id, currentText));
  }
});

bot.onText(/\/post/, (msg) => {
  if (isAdmin(msg)) {
    console.log('post1');
    console.log(getUser(msg));
    getUser(msg).post.state = 1;

    console.log('post2');

    bot.sendMessage(
      getChatId(msg),
      stepText[`${getUser(msg).post.state}`]
    );
  }
});

bot.onText(/\/Archive/, (msg) => {
  if (isAdmin(msg)) {
    if (Archive.length === 0) {
      console.log("IF");
      bot.sendMessage(
        getChatId(msg),
        `Архів пустий(`
      );
    }
    console.log("GO");

    Archive.forEach((postElement, i = 1) => setTimeout(sendListArchive, i * 1000, msg.from.id, postElement));
  }
});

bot.onText(/\/getUsers/, (msg) => {
  if (isAdmin(msg)) {


    Users.forEach(post => bot.sendMessage(getChatId(msg), JSON.stringify(post)));
  }
});
