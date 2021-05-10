
cd %~dp0
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Casey-ckx/casey_blog.git master:gh-pages
@REM pause

@REM echo 111

