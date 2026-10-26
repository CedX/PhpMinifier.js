import {startProcess, version, writeOutput} from "./Tools.js";

writeOutput("Publishing the package...");
startProcess(`git tag v${version}`);
startProcess(`git push origin v${version}`);
startProcess("npm login");
startProcess("npm publish");
