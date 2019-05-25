@setlocal enableextensions
@cd /d "%~dp0"
 mklink /D %cd%\node_modules\templated-ui %cd%\src\types
 mklink /D %cd%\src\types\data-lookup C:\Work\data-lookup\src\types
 mklink /D %cd%\src\templates\report C:\Work\report-template\src
mklink %cd%\src\types\data-lookup.d.ts  C:\Work\data-lookup\src\index.d.ts 
mklink %cd%\src\types\report.d.ts C:\Work\report-template\src\index.d.ts 

 PAUSE