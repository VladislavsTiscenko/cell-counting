heroku login
heroku git:clone -a deploy-folder
cd deploy-folder
git add .
git commit -am "deployment"
git push heroku master
cd ..
rm -rf deploy-folder