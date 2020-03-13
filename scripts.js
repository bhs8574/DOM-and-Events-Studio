// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    //Create my button variables
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    
    //initialize variables used for calculations
    let spaceShuttleHeight;
    let horiDistance = 0; 
    let vertDistance = 0;

    //Grab the dimensions of the shuttle and background to use later
    let shuttleBackgroundObject = document.getElementById("shuttleBackground");
    let rocketHeight = document.getElementById("rocket").height;
    let rocketWidth = document.getElementById("rocket").width;


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
        horiDistance = 0;
        vertDistance = 0;
        document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
    });

    abortButton.addEventListener("click", function (event) {
        let abortConfirm = confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
            document.getElementById("flightStatus").innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").setAttribute("style", "background-color: green;");
            document.getElementById("spaceShuttleHeight").innerText = "0";
            horiDistance = 0;
            vertDistance = 0;
            document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        }
    });

    upButton.addEventListener("click", function (event) {
        if (vertDistance > 0) {
            vertDistance -= 10;
            document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);            
        }

        spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
        spaceShuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
    });

    downButton.addEventListener("click", function (event) {
        if (vertDistance < (shuttleBackgroundObject.offsetHeight - rocketHeight)) {
            vertDistance += 10;
            document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        }
        
        spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerText);
        spaceShuttleHeight -= 10000;
        //Height can't be underground... I think.  I mean I guess it COULD be. But then we have worse issues than the height displaying wrong.
        if (spaceShuttleHeight <= 0) {
            spaceShuttleHeight = 0;
        }
        document.getElementById("spaceShuttleHeight").innerText = `${spaceShuttleHeight}`;
    });

    leftButton.addEventListener("click", function (event) {
        if (horiDistance < (shuttleBackgroundObject.offsetWidth/2)-(rocketWidth/2)) {
            horiDistance += 10;
            document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        }
    });

    rightButton.addEventListener("click", function (event) {
        if (horiDistance > -1*(shuttleBackgroundObject.offsetWidth/2)+(rocketWidth/2)) {
            horiDistance -= 10;
            document.getElementById("rocket").setAttribute("style", `top: ${vertDistance}px; right: ${horiDistance}px;`);
        }
    });
});