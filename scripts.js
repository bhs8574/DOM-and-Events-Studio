// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function (event) {
        let launchConfirm = confirm("Confirm that the shuttle is ready for takeoff.");
        if (launchConfirm) {
            document.getElementById("flightStatus").innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").setAttribute("style", "background-color: blue;");
            let spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
            spaceShuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
        }
    });
});