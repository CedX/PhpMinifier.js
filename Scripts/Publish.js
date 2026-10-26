import {getVersion, startProcess, writeOutput} from "./Tools.js";

writeOutput("Publishing the package...");
const version = getVersion();
startProcess(`git tag v${version}`);
startProcess(`git push origin v${version}`);
startProcess("npm login");
startProcess("npm publish");
