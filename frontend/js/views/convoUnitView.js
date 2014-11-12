// Namespace
var app = app || {};

app.convoUnitView = Backbone.View.extend({

    tagName: "li",
    className: "convoUnit",

    events: {
    	"click .convoUnit":"testfunction"
    },

    template: _.template($("#convoUnitView").html()),        // represented as a template in index.html
                                                             // TODO: build template

    render: function() {
        var convoUnitTemplate = this.template(this.model.toJSON());
        this.$el.html(convoUnitTemplate);
        return this;
    }

});