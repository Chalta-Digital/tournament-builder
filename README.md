# Backend and Frontend Template

Latest version: https://git.chalmers.se/courses/eda397/1920/platform

Adapted from https://git.chalmers.se/courses/dit341/group-00-web, big thanks to Joel Scheuner

* [Backend](./backend/README.md)
  * [FAQ](./backend/docs/FAQ.md)
  * [Troubleshooting](./backend/docs/TROUBLESHOOTING.md)
* [Frontend](./frontend/README.md) frontend

## Requirements

The version numbers in brackets indicate the tested versions but feel free to use more recent versions.
You can also use alternative tools if you know how to configure them (e.g., Firefox instead of Chrome).

* [Git](https://git-scm.com/) (v2) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
  * [Add your Git username and set your email](https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html#add-your-git-username-and-set-your-email)
    * `git config --global user.name "YOUR_USERNAME"` => check `git config --global user.name`
    * `git config --global user.email "email@example.com"` => check `git config --global user.email`
  * > **Windows users**: We recommend to use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) shell from your Git installation or the Bash shell from the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run all shell commands for this project.
* [Chalmers GitLab](https://git.chalmers.se/) => Login with your **Chalmers CID** choosing "Sign in with" **Chalmers Login**. (contact [support@chalmers.se](mailto:support@chalmers.se) if you don't have one)
  * EDA397/DIT192 course group: https://git.chalmers.se/courses/eda397
  * [Setup SSH key with Gitlab](https://docs.gitlab.com/ee/ssh/)
    * Create an SSH key pair `ssh-keygen -t ed25519 -C "email@example.com"` (skip if you already have one)
    * Add your public SSH key to your Gitlab profile under https://git.chalmers.se/profile/keys
    * Make sure the email you use to commit is registered under https://git.chalmers.se/profile/emails
  * Checkout the [Backend-Frontend](https://git.chalmers.se/courses/eda397/1920/platform) template `git clone git@git.chalmers.se:courses/eda397/1920/platform.git`
* [Backend Requirements](./backend/README.md#Requirements)
* [Frontend Requirements](./frontend/README.md#Requirements)

## Getting started

```bash
# Clone repository
git clone git@git.chalmers.se:courses/eda397/1920/platform.git

# Change into the directory
cd platform

# Setup backend
cd backend && npm install
npm run dev

# Setup frontend
cd frontend && npm install
npm run serve
```

## Visual Studio Code (VSCode)

Open the `backend` and `frontend` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.
