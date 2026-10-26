import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Building the project...");
startProcess("npx", "tsc --build Sources/tsconfig.json");
