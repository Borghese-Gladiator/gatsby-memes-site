SET location=C:\Users\Timot\Documents\GitHub\memes-site\src\Memes
for /R %location% %%A in (*.png *.jpg *.jpeg *.gif *.jfif) do call :repl "%%A"
goto :eof 

:repl
set "_fn=%~nx1"
ren %1 "%_fn: =_%"