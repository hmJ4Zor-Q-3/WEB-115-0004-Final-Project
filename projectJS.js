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
    let hDVolume = $("<div>").attr("class", "horizontal-scroll-volume").attr("id", "plans");
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach((d) => hDVolume.append(dailyPlannerFor(d)));
    $("#display-section").append(hDVolume);
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
    dP = $("<div>").addClass("form").attr("id", day.toLowerCase())
    .append($("<h2>").addClass("_title").html(day))
    .append($("<hr>"));

    [{id: `${day.toLowerCase()}_breakfast`, name: "Breakfast"}, 
    {id: `${day.toLowerCase()}_snack_1`, name: "Snack"},
    {id: `${day.toLowerCase()}_lunch`, name: "Lunch"},
    {id: `${day.toLowerCase()}_snack_2`, name: "Snack"},
    {id: `${day.toLowerCase()}_dinner`, name: "Dinner"}]
    .forEach((m) => 
    dP.append($("<label>").attr("for", m.id).html(`${m.name}: `))
    .append($("<input>").attr("type", "text").attr("id", m.id)));

    return dP;
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

    let plans = Array.from(document.getElementById("plans").children)
    .map((x) => Array.from(x.children))
    .map((x) => 
    [{
        title: x.find((y) => y.classList.contains("_title")).innerHTML, 
        plans: x.filter((y) => y.nodeName == "INPUT")
    }][0]);
    
    plans.forEach((x) => x.plans = x.plans.map((y) =>
    [{
        title: $(`label[for=${y.id}]`).html(), 
        plan: y.value
    }][0]));

    $("#plans").remove();
    plans.forEach((x) => $("#display-section").append(dailyPlanFor(x)).append($("<br>")));
} // end finalizePlanner()

function dailyPlanFor(planData){
    let plan = $("<div>")
    .append($("<h2>").html(planData.title).append($("<hr>")))
    .append($("<br>"));
    
    planData.plans.forEach((x) => plan.append($("<div>")
    .append($("<h4>").html(x.title))
    .append($("<p>").html(x.plan)))
    .append($("<br>")));

    return plan;
} // end dailyPlanFor()



function clearPlan(){
    $("#clear-planner").parent().toggle();
    $("#clear-plan").parent().toggle();

    clearPlanner();
}