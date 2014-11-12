// Namespace
var app = app || {};

app.convoUnit = Backbone.Model.extend({

    defaults: {
        title: "no title",
        img: "no image",
        id: 0,
        thread: null
    },

    initialize : function() {
        console.log("initialize called in convo unit model");
        this.thread = new app.textUnitCollection([]);
    }
});