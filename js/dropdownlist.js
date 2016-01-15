/**
 * Created by Root on 1/7/2016.
 */
var isDisplay = true;
function myFunction() {
    if (isDisplay) {
        document.getElementById("demo").style.display = "block";
        document.getElementById("ddl").style.display = "block";
    }
    isDisplay =!isDisplay;
}
