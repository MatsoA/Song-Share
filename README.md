# First Time Setup

All terminal commmands will probably work best if run in a terminal in admin mode

## Step 1: Installing node.js
This project is bootstrpped by the Expo CLI. In order for running the app to function correctly, node version 16.x or **earlier** is required.
The following procedure can be used to download node and manage versions.

1. Install the latest node.js version:
    from website: https://nodejs.org/en/download/
or 
    via scoop: `scoop install nodejs`

once downloaded, run `node -v` in terminal to verify installation

2. Install node version manager (nvm):

    The easiest way is to install it via `npm install nvm`. This method seems to work however it is technically deprecated, so if it doesn't work try the methods below:

    1. Install nvm via scoop:
    `scoop install nvm`
    2. Install nvm via curl:
    `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
    3. Install nvm via wget:
    `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`


nvm is a tool which provides clean management of node versions. It requires a version of node to be installed to function correctly, which is why
we needed to install node manually first.

run `nvm -v` in terminal to verify installation

3. Install node 16.x via nvm

Now that nvm is setup, we can use it to install the version of node we want by running:
    `nvm install 16`  

run `nvm ls` to verify installation. You should see `16.19.x` 

4. Uninstall initial node installation

We can now use nvm to manage our node versions. However, we still need to deal with the initial node installation we made in step 1. 
To do this, we can simply delete the nodejs folder we downloaded:

C:\Program Files\nodejs\

if node was installed with scoop:

C:\Users\malex\scoop\apps\nodejs

If we run `node -v` in a terminal, we should see `16.19.x` if not, try running `nvm use 16` to switch versions

Optional:
It would probably be a good idea to reinstall the latest node version with nvm so that you have it on your computer for use in other js projects. 
This can be done by running `nvm install latest`. 
`nvm ls` lists the current node versions on your computer that are managed by nvm
`nvm use [node version]` is used to switch between versions. Run `nvm use 16` to switch to node 16.19


## Step 2: Pulling the repo

At this point, you are ready to pull the repo from github. Then, navigate to the project folder in your terminal (vs code or cmd). 

*Make sure you're in the inner Song-Share folder* 
If you run `dir` you should see App.js, app.json, babel.config.js, package-lock.json, package.json and other js files. 


## Step 3: Installing the Expo CLI

Now, we can install the Expo CLI, which manages running React Native Apps. 
Once you're in the right folder on your terminal, run 

`npm install -g expo-cli`

Lastly, run `npm install` to add expo to the project. You should see a new .expo folder

The project should now (fingers crossed) be setup for development.

# Running the Project

When running the project for the first time in a development session, run `npm install` to add any new dependencies to the project.

Then, launch the project by running: 
`npm start`

You should hopefully see expo starting up. After a bit, you should see a menu with a few options, one of which is 
`Press w | open web`.

Press w to launch the web version of the app. After the menu reloads, navigate to localhost://19006 or the port noted on the terminal menu
