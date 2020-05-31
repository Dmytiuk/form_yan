let Validate = {
    onload: document.addEventListener('DOMContentLoaded', function() { Validate.init(); }),
    init: function() {
        this.bind();
    },
    bind: function() {
        $(document).on('click', 'button#submit', function(e) {
            e.preventDefault();
            const name = $('input#name').val();
            const surname = $('input#surname').val();
            const address = $('input#address').val();
            const email = $('input#email').val();
            Validate.validateValue(name, surname, address, email);
        });
    },

    validateValue: function (name, surname, address, email) {
        let errors = []

        if (name.length < 3) {
            errors = 'name'
            $("input#name").next().text('Коротке name');
        }

        if (errors.length === 0) {
            $('form').get(0).reset();
            $('form').hide();
            $('.thank-you').show();

            setTimeout(function () {
                $('form').show();
            }, 3500);
        } else {

        }
    }
};