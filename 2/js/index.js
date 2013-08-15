$(function(){
    var form_1 = new FormBuilder('form_1'),
        form_2 = new FormBuilder('form_2'),
        comparer = new FormCompare()
    ;
    $('#compareButton').on('click', function() {
        var compareResult = comparer
            .setForm1(form_1.getParams())
            .setForm2(form_2.getParams())
            .compare()
        ;
        drawObject(compareResult);
    });

    function drawObject(object) {
        $('.container-fluid').append(html);
        var html = '',
            obj,
            value
        ;
        for (var i in object) {
            obj = object[i];
            value = (obj.status != 'changed') ? obj.value : obj.newValue + ' (old value: ' + obj.value + ')';

            html += '<p class="lead">Input name: ' + i + '</br>status: ' + obj.status +'</br>Value: ' + value +'</p>';
        }
        $('#objectBox').append(html);
    }
});