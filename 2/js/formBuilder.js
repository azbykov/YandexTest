function FormBuilder(boxId) {
    this.formParams = {};
    var self = this,
        box = $('#' + boxId),
        form = box.children('form'),
        addButton = box.find('[name="add"]'),
        addBox = box.children('.formAdder'),
        create = function(params) {
            var newEl = createEl(params),
                nameLabel = params.name + ': '
                ;
            form.append(nameLabel, newEl);
            self.formParams[params.name] = params.value;
        },
        setEventAdd = function() {
            addButton.on('click', function(e) {
                var inputs = addBox.children(),
                    params = {
                        name: inputs[0].value,
                        value: inputs[1].value
                    }

                ;
                if (params.name && !self.formParams[params.name]) {
                    create(params);
                    inputs
                        .val('')
                        .removeClass('errorInput')
                    ;
                } else {
                    inputs.addClass('errorInput');
                    e.preventDefault();
                }
            });
            form.on('keyup', 'input', function(){
                var inp = $(this);
                self.formParams[inp.attr('name')] = inp.val();
            });
        },
        createEl = function(params) {
            var el = $('<input type="text" />');
            el.attr(params);
            return el;
        };
    setEventAdd();
}

FormBuilder.prototype = {
    constructor: FormBuilder,
    getParams: function() {
        return this.formParams;
    }
};