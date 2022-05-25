(function ($) {

    "use strict";

    document.getElementById("buttonmail").addEventListener("click", message_content);

    $(document).ready(function () {
        $('.alert-danger').addClass('d-none');
        $('.alert-success').addClass('d-none');
        $('.alert-warning').addClass('d-none');
    });

    function message_content() {
        //document.getElementById("buttonmail")
        $('.alert-success').addClass('d-none');
        $('.alert-danger').addClass('d-none');
        $('.alert-warning').removeClass('d-none');
        setTimeout(
            function () {
                console.log(localStorage.getItem('mailsended'));
                if (localStorage.getItem('mailsended') !== null) {
                    if (localStorage.getItem('mailsended') == 'false') {
                        $('.alert-danger').removeClass('d-none');
                        $('.alert-success').addClass('d-none');
                        $('.alert-warning').addClass('d-none');
                    } else if (localStorage.getItem('mailsended') == 'true') {
                        $('.alert-success').removeClass('d-none');
                        $('.alert-danger').addClass('d-none');
                        $('.alert-warning').addClass('d-none');
                    } else {
                        $('.alert-danger').addClass('d-none');
                        $('.alert-success').addClass('d-none');
                        $('.alert-warning').addClass('d-none');
                    }
                } else {
                    $('.alert-danger').addClass('d-none');
                    $('.alert-success').addClass('d-none');
                    $('.alert-warning').addClass('d-none');
                }
            }, 3500);
    }




})(jQuery);