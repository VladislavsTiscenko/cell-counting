# App setup

This app can easily be deployed on Heroku. To do so:
1. Create an app on Heroku (preferably named _cell-counting_).
2. Add the following Heroku buildpacks in the app's settings:
 - heroku/python
 - heroku/nodejs
 - https://github.com/heroku/heroku-buildpack-nginx
 - https://github.com/heroku/heroku-buildpack-apt
3. To install the Heroku command line interface, run <pre>sudo snap install --classic heroku</pre>
4. The first time deploying this app, run the _heroku-add-remote.sh_ bash script to log into Heroku and add the Heroku remote to the git repository.
5. Every time you'd like to deploy the app, run <pre>npm run deploy</pre>

These steps have worked on my Ubuntu 21.04 setup.