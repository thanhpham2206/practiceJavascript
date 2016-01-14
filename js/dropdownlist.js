/**
 * Created by Root on 1/7/2016.
 */
var element = document.getElementById("ddlButton");
var isDisplay = true;
element.onclick=function(){
    if(isDisplay){
        document.getElementById("ddl").style.display = "block";
    } else{
        document.getElementById("ddl").style.display = "none";
    }
    isDisplay =!isDisplay;
};