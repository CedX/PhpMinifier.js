using module ./Cmdlets.psm1

"Watching for file changes..."
Invoke-TypeScript Sources/tsconfig.json -SourceMap -Watch
