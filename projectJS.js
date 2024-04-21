$(document).ready(() => {
    $("#personal-information").submit(generatePlanner);

    $("#clear-planner").click(clearPlanner);
    $("#finalizer-planner").click(finalizePlanner);

    $("#clear-plan").click(clearPlan);
    $("#print-plan").click(() => print("placeholder"));
    $("#download-plan").click(() => alert("placeholder"));
    $("#open-new-page").click(() => alert("window.location.href"));
});



function generatePlanner(e){
    e.preventDefault();

    $("#personal-information").parent().toggle();
    $("#clear-planner").parent().toggle();

    // add provided information in head
    $("#display-section").append(headFor($("#name-field").val(), $("#email-field").val(), $("#goal-field").val()));

    // add ability to add meals for week
    $("#display-section").append(`<div class="horizontal-scroll-volume"></div>`)
    for(let i = 1; i <= 7; i++)
    {
        $("#display-section .horizontal-scroll-volume").append(`day ${i}`);
    }
    
}

function headFor(nam, email, goal){
    return $("<div>")
    .append($("<h1>").append("Meal Plan").attr("class", "centered"))
    .append($("<p>").append($("<b>").append("Name")).append(`: ${nam}`))
    .append($("<p>").append($("<b>").append("Email")).append(`: ${email}`))
    .append($("<p>").append($("<b>").append("Goal")).append(`: ${goal}`))
    .append($("<br>"));
} // end headFor

function dailyPlannerFor(day){

} // end dailyPlannerFor()



function clearPlanner(){
    $("#personal-information").parent().toggle();
    $("#clear-planner").parent().toggle();

    n = $("#name-field").val("");
    e = $("#email-field").val("");
    g = $("#goal-field").val("");

    $("#display-section").html("");
}

function finalizePlanner(){
    $("#clear-planner").parent().toggle();
    $("#clear-plan").parent().toggle();

    // convert to final page like printable format
}



function clearPlan(){
    $("#clear-planner").parent().toggle();
    $("#clear-plan").parent().toggle();

    clearPlanner();
}