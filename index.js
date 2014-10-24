module.exports = {
    name: 'ember-cli-building-blocks-ffos',
    included: function(app) {
        this._super.included(app);
        app.import(app.bowerDirectory + '/building-blocks/themes/whatev/action_menu.css');
        app.import(app.bowerDirectory + '/building-blocks/js/action_menu.js');
    }
};
