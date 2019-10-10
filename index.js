module.exports = function (sails) {

    const init = require('./lib/init.js');
    const notify = require('./lib/notify.js');
    const install = require('./lib/install.js');

    gladys.on('ready', function(){
        init().catch(sails.log.warn);
    });
      
    return {
        install: install,
        notify: notify
    };
};