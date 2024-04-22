let plan;
let params = new URLSearchParams(window.location.search);
if(params.has("plan"))
    plan = JSON.parse(params.get("plan"));
else
    console.warn("No plan data was provided");

let n = plan.name;
let email = plan.email;
let goal = plan.goal;

// user document.write as was instructed.
document.write("<div class=\"content slightly-horizontal-margined\">");
document.write(headFor(n, email, goal).prop("outerHTML"));
plan.plans.forEach((x) => document.write(dailyPlanFor(x).append($("<br>")).prop("outerHTML")));
document.write("</div>");