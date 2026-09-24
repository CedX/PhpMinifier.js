using module ./Cmdlets.psm1

"Updating the dependencies..."
$modules = Import-PowerShellDataFile PSModules.psd1
$modules.Keys | ForEach-Object { Update-PSResource $_ -Repository $modules[$_].repository -TrustRepository }
Update-NpmPackage
