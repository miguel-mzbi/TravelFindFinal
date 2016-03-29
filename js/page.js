function runEffect(x) {
    var selectedEffect = "clip";
    var options = {};
    $(x).show(selectedEffect, options, 500);
};

function callback(x) {
    setTimeout(function() {
        $(x+":visible").removeAttr("style").fadeOut();
    }, 200 );
    butClick=0;
};

function getSearch(){
    
}

var butClick = 0; //0 = none open, 1 = search open, 2 = contact open

$(".Button").button();
$("#alertSearch").dialog({
    autoOpen: false
});
$("#alertSearch").dialog({
    width:1000
});

$(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true
});

$("#B1").click(function() {
    if (butClick==0){
        runEffect("#searchForm");
        butClick=1;
    }else if(butClick==1){
        callback("#searchForm");
        butClick=0;
    }else if(butClick==2){
        callback("#contactForm");
        runEffect("#searchForm");
        butClick=1;
    }
});

$("#B2").click(function() {
    if (butClick==0){
        runEffect("#contactForm");
        butClick=2;
    }else if(butClick==1){
        callback("#searchForm");
        runEffect("#contactForm");
        butClick=2
    }else if(butClick==2){
        callback("#contactForm");
        butClick=0;
    }
});

$("#searchB").click(function(){
    $("#alertSearch").dialog("open");
});