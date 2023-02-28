const getChatId = (msg) => {
	return msg.chat.id;
}
const sendCongrats = (bot, msg) => {
	const congratsMsg = 'Welcome';
	// bot.sendPhoto(getChatId(msg), photo);
	bot.sendMessage(getChatId(msg), congratsMsg);
}

const stateFisrtOperation = (bot, msg) => {
	const text1 = `Привіт! Радий тебе бачити на квесті 🟢
	Ось тут інструкція до квесту. Прохання: облаштуй простір для своєї команди так, як буде усім зручно. За кілька хвилин розпочинаємо!".`;
	const text2 = `Як називається твоя команда?`;
	console.log('work');

	bot.sendMessage(getChatId(msg), text1);
	const sndFirstMsg2 = (msg, photo) => {
		bot.sendPhoto(getChatId(msg), photo);
	}
	const sndFirstMsg3 = (msg, text) => {
		bot.sendMessage(getChatId(msg), text);
	}
	setTimeout(sndFirstMsg2, 1000, msg, 'AgACAgIAAxkBAAIDPWMJ0vbz4blxM4X9MDDrq1pxQXMbAAKBvzEbBplQSB1zy0O3ScCbAQADAgADeAADKQQ');
	setTimeout(sndFirstMsg3, 2000, msg, text2);
}
const stateSecondOperation = (bot, msg) => {
	const textSecond1 = `Чудово! Радий познайомитися. Весь квест ти будеш проходити тут разом зі мною. Я надсилатиму тобі питання, а ти мені — відповіді.
   
	Якщо тобі потрібна підказка (а їх може бути максимум три протягом всього квесту), йди до @lerkindidenko 💚 Із технічними моментами розібратися допоможе @miraculous_bog `;
	const textSecond2 = `Розпочнемо із розминки:
	Мвужпю Ргктрм Ерлщ
	Підказка до шифру: ROT2
	Що це? 
	`;
	bot.sendMessage(getChatId(msg), textSecond1);
	const sndSecondMsg2 = (msg, text) => {
		bot.sendMessage(getChatId(msg), text);
	}
	setTimeout(sndSecondMsg2, 1000, msg, textSecond2);
}
const stateThirdOperation = (bot, msg) => {
	const textThird = `Якщо ви впорались із попереднім завданням — ви круті! (ніхто й не сумнівався)

	Оруелла читали? А про новомову чули? 
	У наших сусідів (русні) вона теж з’явилась. 
	Перевіримо, наскільки ти у ній розбираєшся.
	В кінці на тебе чекатиме кодове слово, яке і буде ключем до наступного завдання. 
	https://cutt.ly/SXmO6zO  `;
	bot.sendMessage(getChatId(msg), textThird);
}
const stateFourthOperation = (bot, msg) => {
	const textFourth = `Як бачите, вони не здатні ні на що. Ні на що. 
	Вони навіть музику не пишуть, а крадуть — бо їм бракує. Послухайте усі композиції та скажіть скільки з цих пісень не вкрадені.`;

	bot.sendMessage(getChatId(msg), textFourth);
	const sndFourthMsg = (msg, audio) => {
		bot.sendAudio(getChatId(msg), audio);
	}
	setTimeout(sndFourthMsg, 500, msg, 'CQACAgIAAxkBAAIDUGMJ3Sp7_9F8jL_gPbHaUSluubHPAALwHAACBplQSDtau26esQoxKQQ');
	setTimeout(sndFourthMsg, 1000, msg, 'CQACAgIAAxkBAAIDUmMJ3VICa48Wb-ji2UJz-jxQpS2ZAALyHAACBplQSJow1N2GyM0mKQQ');
	setTimeout(sndFourthMsg, 1500, msg, 'CQACAgIAAxkBAAIDVGMJ3WVuTjopY0W29cxNgnVmib35AALzHAACBplQSO--gEMOLTsiKQQ');
	setTimeout(sndFourthMsg, 2000, msg, 'CQACAgIAAxkBAAIDVmMJ3YEHjWuqxjQF2NRR4e9yRhvFAAL1HAACBplQSLyDzknEqNjeKQQ');
	setTimeout(sndFourthMsg, 2500, msg, 'CQACAgIAAxkBAAIDWGMJ3Zxd-n3Hom2URYYbGY8L4JlDAAL3HAACBplQSLtiyQHYRO44KQQ');
}
const stateFifthOperation = (bot, msg) => {
	const textFifth = `Але ми максимально бережемо те, що істинно наше. Як-от петриківський розпис, наша спадщина ЮНЕСКО. 
	Перейдіть за цим посиланням і зберіть пазл: https://www.jigsawplanet.com/?rc=play&pid=389c01b1855f
	Зробіть скріншот і надішліть його @lerkindidenko — тільки так ви отримаєте кодове слово для боту і зможете пройти далі. 
	Поспішіть!`;

	bot.sendMessage(getChatId(msg), textFifth);
}
const stateSixthOperation = (bot, msg) => {
	const textSixth = `Всі, напевне, знають таку гру як Аліас. Зараз ми пограємо саме таку гру. 
	Оберіть одну людину, яка найкраще грає в Аліас і знає максимум історій Ukraїner. Повідомте про це @ma_alla і слідуйте інструкції.
	Готуйтеся відгадувати слова, а ваш колега буде вам їх пояснювати. Не можна використовувати спільнокореневі слова, переклад, показувати слово на собі або на інших тощо.
	Що більше слів ви зможете відгадати, то більше літер вам скаже координатор. І то більше шансів, що з цих літер ви зможете скласти слово-відгадку до цього завдання. `;

	bot.sendMessage(getChatId(msg), textSixth);
}
const stateSeventhOperation = (bot, msg) => {
	const textSixth = `Вже чимало завдань пройдено, але й чимало ще попереду. Чи уважні ви? Чи добре пам’ятаєте, ким ми є? 
	Як по всій території України, наче намистини, розсипані національні спільноти та корінні народи, так і у нашому магічному квадраті приховані їх назви. А от як багато ви зможете знайти? 
	Скидайте @lerkindidenko перелік назв нацспільнот, які ви знайшли у квадраті, і отримайте кодове слово, якщо набрали прохідний мінімум — 10 слів з 18.`;
	bot.sendMessage(getChatId(msg), textSixth);
	const snSeventhMsg = (msg, photo) => {
		bot.sendPhoto(getChatId(msg), photo);
	}
	setTimeout(snSeventhMsg, 1000, msg, 'AgACAgIAAxkBAAIDP2MJ0xvDE0jFLq5U6qOV4RgWVuFYAAKCvzEbBplQSF48G0Em3Bm5AQADAgADeAADKQQ')
}
const stateEighthOperation = (bot, msg) => {
	const textEighth1 = `Було занадто просто, чи не так? А тепер збираємося у експедицію! Не забудь відкласти вбік окуляри і взяти з собою бінокль — нам знадобиться твій гострий зір. 
	`;
	const textEighth2 = `Подивися на перелік замків України перед собою. 
	Подивися на фрагменти ілюстрацій. Запрошуємо тебе на прогулянку замками України, впродовж якої тобі необхідно буде знайти усі загублені елементи.
	Склади, будь ласка, слово і скажи мені його.`;
	bot.sendMessage(getChatId(msg), textEighth1);
	const sndEighthMsgTxt = (msg, text) => {
		bot.sendMessage(getChatId(msg), text);
	}
	const sndEighthMsgImg = (msg, photo) => {
		bot.sendPhoto(getChatId(msg), photo);
	}
	setTimeout(sndEighthMsgImg, 1000, msg, 'AgACAgIAAxkBAAIDQWMJ0z9rtyG54qXwciMZlkBRr-GPAAKDvzEbBplQSB_WRSvSSfTpAQADAgADeAADKQQ');
	setTimeout(sndEighthMsgImg, 1500, msg, 'AgACAgIAAxkBAAIDzWMJ7FrD9-rmp20qBKoafvtHA5giAAKEvzEbBplQSDq-AbR-KeB0AQADAgADeAADKQQ');
	setTimeout(sndEighthMsgTxt, 2000, msg, textEighth2);
}
const stateNinthOperation = (bot, msg) => {
	const textNinth = `Так! У Ukraїner є саме такі історії, які треба дивитися в усі боки — буквально роззираючись по сторонах. Знайдіть добірку цих історій і дайте відповіді на ці питання (так-так, самі розберіться куди яке питання підходить): 
	Скільки разів з’являвся у кадрі Козак?
	Скільки курок й півнів може прогодувати одну бабусю у зоні відчуження?
Скільки котів прийшло послухати ромські пісні?
Скільки ікон в Коморі?
Скільки медових вареників з’їв Пашко?

Склади докупи усі цифри (просто додай), відніми один, введи це число в пошук на сторінці Ukraїner, знайди серед усіх історій найбільш неприйнятний контент і скажи згадку якого мема ти бачиш на початку статті.`;
	bot.sendMessage(getChatId(msg), textNinth);
}
const stateTenthOperation = (bot, msg) => {
	const textTenth1 = `Знайомий мем, чи не так? Шукай пронумеровані аудіо з мемними фразами українських політиків та картинка-розшифровка. `;
	const textTenth2 = `
	Скористайся картинкою та постав номери аудіо у послідовності відповідно до їх авторів. Скажи мені послідовність цифр, яка у тебе виходить. 
	Ти так близький до фінішу, не помилися!
	`;
	bot.sendMessage(getChatId(msg), textTenth1);
	const sndTenthMsgTxt = (msg, txt) => {
		bot.sendMessage(getChatId(msg), txt);
	}

	const sndTenthMsgAudio = (msg, audio) => {
		bot.sendAudio(getChatId(msg), audio);
	}
	bot.sendPhoto(getChatId(msg), 'AgACAgIAAxkBAAIEI2MJ7fFYcDk2A9m48JKDYiCET2-gAAKFvzEbBplQSE1ZOJLjr9FwAQADAgADeAADKQQ');
	setTimeout(sndTenthMsgAudio, 1000, msg, 'CQACAgIAAxkBAAIDbmMJ5nyy-yjxrUsLH33XvSLLJGY1AAIOHQACBplQSH1tELC_a5f5KQQ');
	setTimeout(sndTenthMsgAudio, 1500, msg, 'CQACAgIAAxkBAAIDcGMJ5o_EgavGvVUHCKvlAU79bkzSAAIPHQACBplQSI-2aeogNNZ-KQQ');
	setTimeout(sndTenthMsgAudio, 2000, msg, 'CQACAgIAAxkBAAIDcmMJ5p51a3B27jEE1EpAH1fLzBc3AAIQHQACBplQSJ-tl0OqSjDMKQQ');
	setTimeout(sndTenthMsgAudio, 2500, msg, 'CQACAgIAAxkBAAIDdGMJ5rReKoJPDrs_TD3lgWcmoB9pAAIRHQACBplQSHOWLrsgHcf4KQQ');
	setTimeout(sndTenthMsgAudio, 3000, msg, 'CQACAgIAAxkBAAIDdmMJ5wHUE8Xv6KDtQ__sB0l6y-JXAAIUHQACBplQSPZ0xJlkLRoyKQQ');
	setTimeout(sndTenthMsgAudio, 3500, msg, 'CQACAgIAAxkBAAIGkGMJ-phrfnxyznxE7VIsVqg3Af3FAAKeHQACBplQSHgrX7tksJz1KQQ');
	setTimeout(sndTenthMsgAudio, 4000, msg, 'CQACAgIAAxkBAAIGkWMJ-rPgfovsj2PDSre8YWBCFrLbAAKgHQACBplQSOem92iGPVbrKQQ');
	setTimeout(sndTenthMsgAudio, 4500, msg, 'CQACAgIAAxkBAAIGkmMJ-sMrV4fEjU2jKcALgaqdctLvAAKiHQACBplQSAw2Y50paWRzKQQ');
	setTimeout(sndTenthMsgTxt, 5000, msg, textTenth2);
}
const stateEleventhOperation = (bot, msg) => {
	const textEleventh1 = `Круто, це правильний код! 
	Зафіксуй на камеру цей прекрасний момент — ваша команда буквально за крок до фінішу. Зроби скрін або сфотографуйся усією командою і надішли мені у відповідь на це повідомлення фото. `;
	bot.sendMessage(getChatId(msg), textEleventh1);
}
const stateЕwelfthOperation = (bot, msg) => {
	const textEleventh1 = `Дякую! А тепер використай цифровий код із завдання про меми, щоб увійти в цю зустріч: 

	Meeting ID: 881 5771 6230
	
	Дякую тобі за якісну гру!
	`;
	bot.sendMessage(getChatId(msg), textEleventh1);
}
module.exports = {
	stateFisrtOperation, stateSecondOperation, stateThirdOperation, stateFourthOperation, stateFifthOperation, stateSixthOperation, stateSeventhOperation, stateEighthOperation, stateNinthOperation, stateTenthOperation, stateEleventhOperation, stateЕwelfthOperation, sendCongrats
};