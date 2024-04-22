function headFor(nam, email, goal){
    return $("<div>")
    .append($("<h1>").append("Meal Plan").attr("class", "centered"))
    .append($("<p>").append($("<b>").append("Name")).append(`: ${nam}`))
    .append($("<p>").append($("<b>").append("Email")).append(`: ${email}`))
    .append($("<p>").append($("<b>").append("Goal")).append(`: ${goal}`))
    .append($("<br>"));
} // end headFor

function dailyPlanFor(planData){
    let plan = $("<div>")
    .append($("<h2>").html(planData.title).append($("<hr>")))
    .append($("<br>"));
    
    planData.plans.forEach((x) => plan.append($("<div>")
    .append($("<h4>").html(x.title))
    .append($("<p>").html(x.plan))));

    return plan;
} // end dailyPlanFor()