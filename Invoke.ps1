#!/usr/bin/env pwsh
param (
	# The script to invoke.
	[Parameter(Position = 1)]
	[ArgumentCompleter({
		param ([string] $commandName, [string] $parameterName, [string] $wordToComplete)
		(Get-Item "$PSScriptRoot/Scripts/$wordToComplete*.js").BaseName
	})]
	[ValidateScript(
		{ Test-Path "$PSScriptRoot/Scripts/$_.js" -PathType Leaf },
		ErrorMessage = "The specified script does not exist."
	)]
	[string] $Script = "Default",

	# The script arguments.
	[Parameter(ValueFromRemainingArguments)]
	[string[]] $Arguments = @()
)

$ErrorActionPreference = "Stop"
$PSNativeCommandUseErrorActionPreference = $true
node "$PSScriptRoot/Scripts/$Script.js" @Arguments
