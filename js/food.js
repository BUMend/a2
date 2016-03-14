window.onload = function() {
        $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
        $('#myTabs a:first').tab('show') // Select first tab
        $('#myTabs a:last').tab('show') // Select last tab
        $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
        ChangePhoto();
}
// var $this = $(this);
//         var server = $('.server-tab');
//         server.hide();
//         var name = ".ser"+$this.attr("class").toString();
//         $(name).show();
//         ChangePhoto();
//         if(name === ".server-football"){
//             $('.triangle').css("left","23.48%");
//             $('.ver-football').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-football').css("background","#fc3e4c");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//             // $('.server').css("background","");
//         }
//         if(name === ".server-food" ){
//             $('.triangle').css("left","36.38%");
//             $('.ver-food').css("color","#fff");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-food').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name === ".server-fun"){
//             $('.triangle').css("left","49.28%");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#fff");
//             $('.ver-fun').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name===".server-traffic"){
//             $('.triangle').css("left","62.18%");
//             $('.ver-traffic').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-traffic').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name === ".server-stay"){
//             $(".triangle").css("left","75.08%");
//             $('.ver-stay').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-stay').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//         }
//         $('.ver-football').on("mouseover",function() {
//             $(".ver-football").css("background-color","#fc3e4c");
//             // $(".ver-food").css("background-color","#fff2eb");
//             // $(".ver-fun").css("background-color","#fff2eb");
//             // $(".ver-traffic").css("background-color","#fff2eb");
//             // $(".ver-stay").css("background-color","#fff2eb");
//         });
//         $('.ver-football').on("mouseover",function() {
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//         });
//         $('.ver-food').on("mouseover",function() {
//             $(".ver-food").css("background-color","#ffca76");
//         });
//         $('.ver-fun').on("mouseover",function() {
//             $(".ver-fun").css("background-color","#ffe57e");
//         });
//         $('.ver-traffic').on("mouseover",function() {
//             $(".ver-traffic").css("background-color","#a4dbff");
//         });
//         $('.ver-stay').on("mouseover",function() {
//             $(".ver-stay").css("background-color","#decdff");
//         });