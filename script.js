$(document).ready(function () {
    $('#button').on('click', function () {
       
        var toAdd = $('input[name=addItem]').val();
        if($('input[name=addItem]').val()==""){
            alert("Please Input Something!")
        }else{  $('ol')
        .append(
            '<li class="remove">' + toAdd + ' <button class="btn"> remove</button></li>'
        )
        .css({'text-transform': 'capitalize'});}
      
        $(document).on('click', '.remove', function () {
            $(this).addClass('strike').fadeOut('slow');
        });
        if ($(".input").val("")) {
            $(".input").on("focus", function () {
              $(".input").val("");
            });
          }
    });
    $("input[name=addItem]").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#button").click();
        }
    });
    $('input').focus(function () {
        $(this).val('');
    });
    $('ol').sortable();
});