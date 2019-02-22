/* 
    Make sure that each id or class is accompanied by your student id
    for example #id_1301171234 , .class_1301171234

    FOR QUESTION No. 2, PLEASE USE $.getJSON function to load the data
    FOR QUESTION No. 3, PLEASE USE $.ajax function to load data
*/

/*-------------------------------------
    PUT YOUR getJSON function here
---------------------------------------*/
$.getJSON("js/data_1301164110.json", function (data){
	console.log(data);
    $(".nama_1301164110").text(data.bio.name)
    $(".job_1301164110").text(data.bio.job)
    $(".birth_1301164110").text(data.bio.birth)
    $(".address_1301164110").text(data.bio.address)
    $(".phone_1301164110").attr("href","tel:"+data.bio.phone)
    $(".phone_1301164110").text(data.bio.phone)
    $("#id_1301164110").text(data.bio.email)
    $("#email_1301164110").text(data.bio.email)
    $(".alignleft").attr("src",data.prof_pict)

});

/*-------------------------------------
    End of getJSON Function
---------------------------------------*/




$(document).ready(function(){

/*-------------------------------------
    PUT YOUR $.ajax function here
---------------------------------------*/
    

/*-------------------------------------
    End Of $.ajax function
---------------------------------------*/
})