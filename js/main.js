$(document).ready(function () {
    var body = $('body')
    body.fadeTo(5000, 1, 'linear');
});


var insertEmail = function () {
    var email = 'b.kodres@gmail.com';

    $('#insert-email')
        .attr('href', 'mailto:' + email)
        .text(email);
};