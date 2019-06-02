# Contribution Guidelines

Hello 👋!

Follow me on [Twitter](<https://twitter.com/edwinloms>) if you have any query or suggestion or just anything you think maybe of help for this project.

I am grateful for your contributions and excited to welcome you aboard.

Happy contributing 🎉!

## Here are some ways that you can help

I encourage anyone and everyone especially those getting started to learn to code to find ways they can contribute and file their first PR. For example,

1. You know of some data structure or algorithm that has not been covered in the repo and you want it to feature here.
2. You want to write or add more test cases for some data structure or algorithm covered in this repo and you want it to be implemented.
3. You know of some way you can contribute to help this project be of help to the community and you feel like this can be of much help to me(I'm also learning to code remember), you, and the community.

## Contributing

Issues can be submitted by anyone - seasoned developers or newbies.

#### Getting Started on contributing

Fork this repository by clicking on the fork button on the top of this page.

![Fork image](https://res.cloudinary.com/dazskjikr/image/upload/v1559468477/fork.png)

This will create a copy of this repository in your account.

#### Clone the repository

![Clone image](https://res.cloudinary.com/dazskjikr/image/upload/v1559468477/clone.png)

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

![copy to clipboard image](https://res.cloudinary.com/dazskjikr/image/upload/v1559468477/clone_url.png)

For example:
```
git clone https://github.com/this-is-you/javascript-data-structures-and-algorithms.git
```
where `this-is-you` is your GitHub `username`. Here you're copying the contents of the first-contributions repository in GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd javascript-data-structures-and-algorithms
```
Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name>
```

For example:
```
git checkout -b add-graph-test
```


## Make necessary changes and commit those changes

Now open `Contributors.md` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.

![Git status](https://res.cloudinary.com/dazskjikr/image/upload/v1559469008/Screenshot_from_2019-06-02_12-39-57.png)


If you go to the project directory and execute the command `git status`, you'll see there are changes.


Add those changes to the branch you just created using the `git add` command:

```
git add file-name(s)
```

Change the `file-name(s)` to reflect the name(s) of your modified files. Now commit those changes using the `git commit` command:
```
git commit -m "add graph ds test cases"
```
replacing `<your-name>` with your name.

## Push changes to GitHub

Push your changes using the command `git push`:
```
git push origin <add-your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button. Click on that button.

![compare and pull](https://res.cloudinary.com/dazskjikr/image/upload/v1559469482/Screenshot_from_2019-06-02_12-57-09.png)

Now submit the pull request.

![Pull request](https://res.cloudinary.com/dazskjikr/image/upload/v1559469381/Screenshot_from_2019-06-02_12-55-36.png)

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

**I found a typo, should I report an issue before I can make a pull request?**

For typos and other wording changes, you can directly open pull requests without first creating an issue. Issues are more for discussing larger problems associated with code or structural aspect.

