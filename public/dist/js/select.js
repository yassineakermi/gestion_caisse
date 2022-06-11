$(function () {
    //Initialize Select2 Elements
    $('.select2').select2()
    $('.select2 + .select2 .selection *').css("height","100%");
    $('.select2 + .select2 .selection * .select2-selection__arrow').css("height","100%");
});