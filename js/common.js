(function() {

var app = {

initialize : function () {
this.modules();
this.setUpListeners();
},

modules: function () {

},

setUpListeners: function () {
    $('form').on('submit', app.submitForm);
},

submitForm: function (e) {
    e.preventDefault();

    var form = $(this);

    if(app.validateForm(form) === false ) return false;

    console.log('go in ajax');
},
      validateForm: function(form){
        var inputs = form.find('input'),
            valid = true;
        input.tooltip('destroy');

        $.each(inputs, function(index, val) {
          var input = $(val),
          val = input.val(),
          formGroup = input.parents('.form-group'),
          label = formGroup.find('label').text().toLowerCase(),
          textError = 'Введіть' + label;

          if(val.lenght === 0){
            input.tooltip({
              trigger: 'manual',
              placement: 'right',
              title: textError
            }).tooltip('show');
            valid = false
          }else{

          }


        });
              return valid;
      }
}

app.initialize();

}());
