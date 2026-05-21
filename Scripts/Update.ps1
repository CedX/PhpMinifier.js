using module ./Cmdlets.psm1

"Updating the dependencies..."
$modules = Import-PowerShellDataFile PSModules.psd1
foreach ($key in $modules.Keys) { Update-PSResource $key -Repository $modules[$key].repository -TrustRepository }
Update-NpmPackage
