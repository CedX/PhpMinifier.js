using module ./Cmdlets.psm1

"Running the test suite..."
Invoke-TypeScript Sources/tsconfig.json -SourceMap
Invoke-NodeTest
