let plan;
let params = new URLSearchParams(window.location.search);
if(params.has("planUUID"))
    plan = JSON.parse(localStorage.getItem(params.get("planUUID")));
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