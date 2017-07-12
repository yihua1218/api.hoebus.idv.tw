'use strict';

const translate = require('google-translate-api');

translate('你好嗎？', {to: 'en'}).then(res => {
  console.log(res.text);
  //=> I speak English
  console.log(res.from.language.iso);
  //=> nl
  console.log(res);
}).catch(err => {
  console.error(err);
});

translate('How are you?', {to: 'zh-TW'}).then(res => {
  console.log(res.text);
  //=> I speak English
  console.log(res.from.language.iso);
  //=> nl
  console.log(res);
}).catch(err => {
  console.error(err);
});
