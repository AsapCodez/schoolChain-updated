$(document).ready(function() {
    $(".button").click(function() {
        var initial = $("select").val();
        console.log(initial);
        var go_to_url = $("select").find(":selected").val();
        window.open(go_to_url, '_blank');
    })
});