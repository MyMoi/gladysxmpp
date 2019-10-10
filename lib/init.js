var Promise = require('bluebird');
var xmpp = require('simple-xmpp');
module.exports = function init() {
	return new Promise(function (resolve, reject) {


		xmpp.on('online', function (data) {
			console.log('Connected with JID: ' + data.jid.user);
			console.log('XMPP -- Yes, I\'m connected!');
		});
		//var message = `Hey, human, it's Gladys !`;
		xmpp.on('chat', function (from, message) {
			sails.log.debug(`XMPP : Receive Mesage : "${message}" from : "${from}"`);
			//	gladys.message.send({id: 1}, {text: message});
			//var message = `Hey, human, it's Gladys !`;
			gladys.user.getById({ id: 1 })
				.then((user) => {
					return gladys.message.send(user, { text: message });
				})
				.catch(() => {

					sails.log.warn(`XMPP -- ERROR`);
					return Promise.reject();
				});

			//return Promise.resolve();
			//	xmpp.send(from, 'echo: ' + message);
		});

		xmpp.on('error', function (err) {
			console.error(err);
		});

		xmpp.on('subscribe', function (from) {
			//	if (from === 'a.friend@gmail.com') {
			//		xmpp.acceptSubscription(from);
			//	}
		});
		gladys.param.getValues(['XMPP_JID', 'XMPP_PASSWORD', 'XMPP_HOST'])
        .spread((xmppJid, xmppPassword, xmpphost) => {

		
		xmpp.connect({
			jid: xmppJid,
			password: xmppPassword,
			host: xmpphost,
			port: 5222
		});
		})
		});
};
//xmpp.subscribe('your.friend@gmail.com');
// check for incoming subscription requests
//xmpp.getRoster();