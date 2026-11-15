import {startProcess, writeOutput} from "./Tools.js";

writeOutput("Watching for file changes...");
startProcess("npx", "tsc --build Sources/tsconfig.json --preserveWatchOutput --sourceMap --watch");
