rm -rf  dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy.sh 提交" &&
git branch -M master &&
#git remote add origin git@github.com:1446450047/Vue3.0-UI-website.git &&
git remote add origin git@gitee.com:he_zhongfeng/vue3.0-ui-website.git &&
git push -f -u origin master
cd ..