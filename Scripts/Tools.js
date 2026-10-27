import {execSync} from "node:child_process";
import {error, log} from "node:console";
import {readdirSync, rmSync} from "node:fs";
import {join} from "node:path";
import {exit} from "node:process";
import pkg from "../package.json" with {type: "json"};

/**
 * The project version number.
 * @type {{version: string}}
 */
export const {version} = pkg;

/**
 * Cleans the directory located at the specified path.
 * @param {string} path The path of the directory to clean.
 */
export function clearItem(path) {
	for (const entry of readdirSync(path))
		if (entry != ".gitkeep") removeItem(join(path, entry));
}

/**
 * Deletes the file system entry located at the specified path.
 * @param {string} path The path of the file system entry to delete.
 */
export function removeItem(path) {
	rmSync(path, {force: true, recursive: true});
}

/**
 * Invokes the specified command.
 * @param {string} command The command to invoke.
 * @param {string} argumentList The command arguments.
 */
export function startProcess(command, argumentList = "") {
	const commandLine = `${command} ${argumentList}`.trimEnd();
	try { execSync(commandLine, {encoding: "utf8", stdio: "inherit"}); }
	catch (err) { writeError(Error.isError(err) ? err.message : `Command failed: ${commandLine}`); }
}

/**
 * Prints the specified message to the standard error and terminates the process.
 * @param {string} message The message to print.
 */
export function writeError(message) {
	error(message);
	exit(1);
}

/**
 * Prints the specified message to the standard output.
 * @param {string} message The message to print.
 */
export function writeOutput(message) {
	log(message);
}
