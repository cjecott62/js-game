document.getElementById("demo").innerHTML = "Would you like to play a game?";
function start_game()
{
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("guide").innerHTML = "Which direction to go?";
    document.getElementById("textbox").style.display = "";

}
function get_response()
{
    var input = document.getElementById("start").innerHTML;
    document.getElementById("response").innerHTML = input;
}