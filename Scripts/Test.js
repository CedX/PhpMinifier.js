import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Running the test suite...");
startProcess("npx", "tsc --build Sources/tsconfig.json --sourceMap");
startProcess("npx", "mocha --config Configuration/Mocha.js --file Tests/Should.js Tests");
