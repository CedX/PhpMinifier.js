import {startProcess, version, writeOutput} from "./Tools.js";

writeOutput("Tagging the repository...");
startProcess("git", `tag v${version}`);
startProcess("git", `push origin v${version}`);

writeOutput("Publishing the package...");
startProcess("npm", "login");
startProcess("npm", "publish");
