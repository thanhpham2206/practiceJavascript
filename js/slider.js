/**
 * Created by Root on 1/7/2016.
 */
$(document).ready(function(){
    displayNavigation();

    //Khi click vào slider-point thì trạng thái thay đổi
    $(".slider-point").on("click", function(){
        $(".slider-point").each(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }
        });
        $(this).addClass("active");

        var selectedId = $(this).attr("data-target");
        changeImage(selectedId);
    });
    //Truyen id của slider-item để thay đổi sang 1 cái slider-item khác
    function changeImage(id){
        $(".slider-item").each(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }
        });

        $(id).addClass("active");
        displayNavigation();
    }
    //Ẩn hiện nút điều hướng
    function displayNavigation(){
        var prevItem = $(".slider-item.active").prev();
        var nextItem = $(".slider-item.active").next();

        if(prevItem.length == 0 && nextItem.length > 0){
            if($("#btnPrev").hasClass("display")){
                $("#btnPrev").removeClass("display");
            }

            if(!$("#btnNext").hasClass("display")){
                $("#btnNext").addClass("display");
            }
        }

        if(prevItem.length > 0 && nextItem.length > 0){
            if(!$("#btnPrev").hasClass("display")){
                $("#btnPrev").addClass("display");
            }

            if(!$("#btnNext").hasClass("display")){
                $("#btnNext").addClass("display");
            }
        }

        if(prevItem.length > 0 && nextItem.length == 0){
            if(!$("#btnPrev").hasClass("display")){
                $("#btnPrev").addClass("display");
            }

            if($("#btnNext").hasClass("display")){
                $("#btnNext").removeClass("display");
            }
        }
    }
    //Set sự kiện khi click vào nút prev sẽ hiện: slide-item phía trước và slider-point phía trước
    $("#btnPrev").on("click", function(){
        var activeItem = $(".slider-item.active");
        var prevItem = $(activeItem).prev();
        if(prevItem.length > 0){
            $(activeItem).removeClass("active");
            $(prevItem).addClass("active");
            displayNavigation();
        }

        var activePoint = $(".slider-point.active");
        var prevPoint = $(activePoint).prev();
        if(prevPoint.length > 0){
            $(activePoint).removeClass("active");
            $(prevPoint).addClass("active");
        }
    });
    //Set sự kiện khi click vào nút prev sẽ hiện: slide-item phía SAU và slider-point phía SAU
    $("#btnNext").on("click", function(){
        var activeItem = $(".slider-item.active");
        var nextItem = $(activeItem).next();
        if(nextItem.length > 0){
            $(activeItem).removeClass("active");
            $(nextItem).addClass("active");
            displayNavigation();
        }

        var activePoint = $(".slider-point.active");
        var nextPoint = $(activePoint).next();
        if(nextPoint.length > 0){
            $(activePoint).removeClass("active");
            $(nextPoint).addClass("active");
        }
    });
});