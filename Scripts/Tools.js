import {execSync} from "node:child_process";
import console from "node:console";
import {readdirSync, rmSync} from "node:fs";
import {join} from "node:path";
import process from "node:process";
import pkg from "../package.json" with {type: "json"};

/**
 * The project version number.
 * @type {{version: string}}
 */
export const {version} = pkg;

/**
 * Prints the specified message to the standard output.
 * @param {string} message The message to print.
 */
export const writeOutput = console.log.bind(console);

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
 */
export function startProcess(command) {
	try { execSync(command, {encoding: "utf8", stdio: "inherit"}); }
	catch (error) {
		const result = /** @type {import("node:child_process").SpawnSyncReturns<string>} */ (error);
		console.error(Error.isError(result) ? result.message : `Command failed: ${command}`);
		process.exit(Number.isInteger(result.status) ? result.status : 1);
	}
}
