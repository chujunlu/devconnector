# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client, `cd` into the root of the project. Then run:

Linux/Unix

```bash
NODE_ENV=production node server.js
```

Windows Cmd Prompt or Powershell

```bash
$env:NODE_ENV="production"
node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

### Deploy to Heroku

If you followed the sensible advice above and included `config/default.json` and `config/production.json` in your .gitignore file, then pushing to Heroku will omit your config files from the push.

However, Heroku needs these files for a successful build. In order to get them to Heroku without commiting them to GitHub, what I suggest doing is to create a local only branch, let's call it _production_.

```bash
git checkout -b production
```

We can use this branch to deploy from, with our config files.

Add the config file:

```bash
git add -f config/production.json
```

This will track the file in git on this branch only. **DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

Commit:

```bash
git commit -m 'Add production config file for deployment'
```

Create your Heroku project

```bash
heroku create
```

And push the local production branch to the remote heroku main branch.

```bash
git push heroku production:main
```

Now Heroku will have the config it needs to build the project.

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

After deployment you can delete the production branch if you like.

```bash
git checkout main
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your main branch and merge those into your production branch.

```bash
git checkout production
git merge main
```

Once merged you can push to heroku as above and your site will rebuild and be updated.

---

## App Info

### Author

Chujun Lu

### Version

1.0.0

### License

This project is licensed under the MIT License