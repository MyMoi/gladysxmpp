module.exports = function(){
	
	var type = {
		name: 'Xmpp',
		service: 'gladysxmpp'
	};

	return gladys.notification.install(type);
};