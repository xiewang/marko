module.exports = require('marko/widgets/legacy').defineComponent({
    template: require('./template.marko'),

    init: function() {
        this.name = 'app-foo';
    }
});