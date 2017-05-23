# Git-flow

### Git-Flow is a working practice, for use with any version control system, that helps to:
1. Maintain overall code quality
2. Facilitate collaboration on a single project
3. Protect the codebase

We have tweaked it a little from what is [described on GitHub][1] 

### There are 5 basic steps to our process:
1. Create or clone a repo.
```sh
# For example, to clone this repo.
git clone git@github.com:moj-analytical-services/our-coding-standards.git
```
2. Create a new branch for the work you're about to do.
```sh
# To create a new branch and switch onto it.
git checkout -b my-new-sensibly-named-branch
```
3. Make some commits on the new branch.
```sh
# Make some changes then stage each file you've changed - e.g. file1.txt and file2.txt.
git add file1.txt
git add file2.txt
# etc.

# Commit your changes using a descriptive commit message.
git commit
# If you got stuck in Vim, exit.
:wq
# Then configure your default text editor for Git
git config --global core.editor <my-favourite-text-editor>
# And try again
git commit
```
4. When you're ready, submit a pull request and wait for peer-review.
```sh
# push your branch to the remote repo
git push origin my-new-sensibly-named-branch
# then go to github, open a PR and invite at least one reviewer
```
5. To make further changes, just make more commits on the same branch and push them to the remote repo again.
6. Once peer review is comeplete, and any comments addressed, merge into the master branch using a rebase.

The **master branch should be 100% functional at all times**, on any machine.  Please ensure it is [protected](https://help.github.com/articles/about-protected-branches/) and that your tests and / or linters run automatically on all pull requests.

If you want to test this out, clone this repo and make a contribution :)

[1]: https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow
