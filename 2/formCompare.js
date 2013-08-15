function FormCompare() {
    var form1,
        form2
    ;
}

FormCompare.prototype = {
    constructor: FormCompare,
    setForm1: function(form) {
        form1 = form;
        return this;
    },
    setForm2: function(form) {
        form2 = form;
        return this;
    },
    compare: function() {
        var compareResult = {};
        for (var i in form1) {
            if (form1.hasOwnProperty(i)) {
                if (typeof form2[i] != 'undefined') {
                    if (form1[i] === form2[i]) {
                        compareResult[i] = {
                            'status': 'not changed',
                            'value': form1[i]
                        };
                    } else {
                        compareResult[i] = {
                            'status': 'changed',
                            'value': form1[i],
                            'newValue': form2[i]
                        };
                    }
                } else {
                    compareResult[i] = {
                        'status': 'removed',
                        'value': form1[i]
                    };
                }
            }
        }

        for (var k in form2) {
            if (form2.hasOwnProperty(k) && typeof form1[k] == 'undefined') {
                compareResult[k] = {
                    'status': 'added',
                    'value': form2[k]
                };
            }
        }
        return compareResult;
    }
};