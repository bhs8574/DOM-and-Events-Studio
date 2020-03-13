// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let spaceShuttleHeight;
    let horiDistance = 0; 
    let vertDistance = 0;
    takeOffButton.addEventListener("click", function (event) {
        let launchConfirm = confirm("Confirm that the shuttle is ready for takeoff.");
        if (launchConfirm) {
            document.getElementById("flightStatus").innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").setAttribute("style", "background-color: blue;");
            spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
            spaceShuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
        }
    });
    landButton.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged!");
        document.getElementById("flightStatus").innerText = "The shuttle has landed.";
        document.getElementById("shuttleBackground").setAttribute("style", "background-color: green;");
        document.getElementById("spaceShuttleHeight").innerText = "0";
    });
    abortButton.addEventListener("click", function (event) {
        let abortConfirm = confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
            document.getElementById("flightStatus").innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").setAttribute("style", "background-color: green;");
            document.getElementById("spaceShuttleHeight").innerText = "0";
        }
    });
    upButton.addEventListener("click", function (event) {
        vertDistance -= 10;
        document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
        spaceShuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
    });
    downButton.addEventListener("click", function (event) {
        vertDistance += 10;
        document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
        spaceShuttleHeight -= 10000;
        if (spaceShuttleHeight <= 0) {
            spaceShuttleHeight = 0;
        }
        document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
    });
    leftButton.addEventListener("click", function (event) {
        horiDistance += 10;
        document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
    });
    rightButton.addEventListener("click", function (event) {
        horiDistance -= 10;
        document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
    });
});