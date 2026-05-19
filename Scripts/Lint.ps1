using module PSScriptAnalyzer
using module ./Cmdlets.psm1

"Performing the static analysis of source code..."
Invoke-ScriptAnalyzer $PSScriptRoot -ExcludeRule PSUseShouldProcessForStateChangingFunctions -Recurse
Invoke-TypeScript Sources/tsconfig.json -NoEmit
Invoke-ESLint Sources, Tests -Configuration Configuration/ESLint.js
