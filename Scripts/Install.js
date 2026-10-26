import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Installing the dependencies...");
startProcess("npm", "install");
