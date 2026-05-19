"Deleting all generated files..."
Remove-Item Distributable -ErrorAction Ignore -Force -Recurse
Remove-Item Temp/* -Exclude .gitkeep -Force -Recurse
