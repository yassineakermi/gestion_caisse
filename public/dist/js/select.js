$(function () {
    //Initialize Select2 Elements
    $('#sel').select2()
    $('#sel + .select2 .selection *').css("height","100%");
    $('#sel + .select2 .selection * .select2-selection__arrow').css("height","100%");
});