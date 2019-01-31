// growing roots with 2D text arrays
//
// display blank 2D array
// TODO maybe instead of creating and destroying array constantly
// just overwrite current array over and over again?
let rootArray = new Array();
let rootPrint = ""; // text to be printed
for (let v = 0; v < 27; v++) {
        rootArray.push([]);
    for (let h = 0; h < 50; h++) {
        rootArray[v].push("");
        rootPrint += "~";
    }
    rootPrint += "<br>";
}
document.getElementById("roots").innerHTML = rootPrint; // print text
//
// FUNCTIONS
//
function renderRoots() {
    rootPrint = "";
    for (let v = 0; v < rootArray.length; v++) {
        for (let h = 0; h < rootArray[v].length; h++) {
            switch(rootArray[v][h]) {
                case "O":
                    rootPrint += "O";
                    break;
                case "I":
                    rootPrint += "I";
                    break;
                case "S":
                    rootPrint += "S";
                    break;
                case "J":
                    rootPrint += "J";
                    break;
                case "L":
                    rootPrint += "L";
                    break;
                case "X":
                    rootPrint += "X";
                    break;
                case "~":
                    rootPrint += "&#160";
                    break;
                default:
                    rootPrint += ".";
            }
            //rootPrint += rootArray[v][h];
        }
        rootPrint += "<br>";
        //console.log(rootPrint);
    }
}

function determineCharacter(v, h) {
    if (v == 0 && Math.random() > 0.66) {
        return "O";
    }
    else if (v == 1 && rootArray[v-1][h] == "O") {
        return "I";
    }
    else if (v > 0 && (rootArray[v-1][h] == "I"
    || rootArray[v-1][h-1] == "L"
    || rootArray[v-1][h+1] == "J")) {
        if (Math.random() > 0.66) {
            return "X";
        }
        else if (Math.random() > 0.33) {
            return "S";
        }
        else {
            return "I";
        }
    }
    else if (v > 0 && rootArray[v-1][h+1] == "S") {
        if (Math.random() > 0.66) {
            return "X";
        }
        else {
            return "J";
        }
    }
    else if (v > 0 && rootArray[v-1][h-1] == "S") {
        if (Math.random() > 0.66) {
            return "X";
        }
        else {
            return "L";
        }
    }
    else {
        return "~";
    }
}

function growRoots() {
    //rootArray = new Array();
    rootPrint = "";
    for (let v = 0; v < rootArray.length; v++) {
        //rootArray.push([]);
        for (let h = 0; h < rootArray[v].length; h++) {
            //rootArray[v].push(determineCharacter(v, h));
            rootArray[v][h] = determineCharacter(v,h);
            rootPrint += rootArray[v][h];
        }
        rootPrint += "<br>";
    }
    //console.log(rootArray.length + " | " + rootArray[0].length);
    // TODO RENDER ROOTS WITH NEW CHARACTERS HERE
    renderRoots();
    document.getElementById("roots").innerHTML = rootPrint; // print text
}