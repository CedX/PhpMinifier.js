import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Checking for outdated dependencies...");
startProcess("npm", "outdated");
