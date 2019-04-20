@setlocal enableextensions
@cd /d "%~dp0"
 mklink /D %cd%\node_modules\templated-ui %cd%\src\types
 PAUSE