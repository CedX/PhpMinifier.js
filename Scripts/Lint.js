import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Performing the static analysis of source code...");
startProcess("npx tsc --build Sources/tsconfig.json --noEmit");
startProcess("npx eslint --cache --cache-location Temp --config Configuration/ESLint.js Scripts Sources Tests");
