//const shared = require('./shared.js');
var xmpp = require('simple-xmpp');
//const from = '--------@quicksy.im'
//XMPP_TALK_TO
module.exports = function notify(message, user) {

//    if(shared.bot === null) return Promise.reject(`BOT_NOT_INITIALIZED`);
            
    return gladys.param.getValue(`XMPP_TALK_TO`)
        .then((value) => {

          return xmpp.send(value, message.text)
          .catch(() => {
            sails.log.warn(`XMPP : Can't send notification.`);
            return Promise.reject();
          });
            //return Promise.resolve(true);
        });
   
        //.catch(() => {
            
          //  sails.log.warn(`Telegram : Conversation not linked to a user in Gladys.`);
            //sails.log.warn(`Create a param in Gladys "TELEGRAM_USER_${user.id}_CHAT_ID" with in value the chat ID of your telegram conversation with Gladys.`);

            //return Promise.reject();
        //});
};
