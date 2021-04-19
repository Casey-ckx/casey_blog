@echo off
rem open var delay
setlocal enabledelayedexpansion
rem recev var 
set port=8081
if "%port%" == "" (
    echo Please enter port
    goto end
)
echo ---------------start find who is using port %port%----------------------- 
rem Add colon before port and space after port to ensure no mistake
for /f "tokens=1-5" %%a in ('netstat -ano ^| find ":%port% "') do (
    rem a is protocol,b is local ip:port, c is remote ip:port,d is state or pid,e is pid or null 
    echo %%a %%b %%c %%d %%e
    rem Cut the %%b with the : to get the port
    for /f "delims=:, tokens=1-2" %%j in ("%%b") do (set destport=%%k)
    rem Delay variable in for loop must use! Symbol instead of% symbol
    echo The port found here is !destport!. What we need is %port%  
    rem If %%b cuts the same port as the target port
    if "!destport!" equ "%port%" (
        if "%%e" == "" (
            rem sometimes e is empty pid in d
            if not "%%d" == "0" (
                echo get d col pid %%d
                set pid=%%d
            )
        ) else (
            if not "%%e" == "0" (
               echo get e col pid %%e
               set pid=%%e
            )
        )
    ) else (
        echo this row local not use port %port% 
    )
)
echo ---------------end find who is using port %port%----------------------- 
if "%pid%"=="" (
 echo Port %port% is not in use 
) else (
 echo used port %port% the process %pid%
 taskkill /f /pid %pid%
)


:end
echo

cd %~dp0
start cmd /k npm run dev