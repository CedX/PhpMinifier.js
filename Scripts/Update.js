import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Updating the dependencies...");
startProcess("npm", "update");
