# Probot Auto Assigner

[![npm](https://badge.fury.io/js/probot-auto-assigner.svg)](https://www.npmjs.com/package/probot-auto-assigner)


A GitHub App built with [probot](https://github.com/probot/probot) that automatically assigns one of the maintainers to issues. 

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

## Configuration

Create .github/auto_assign.yml in your repository:

```
# Set to true to add reviewers to pull requests
addReviewers: true

# Set to true to add assignees to pull requests
addAssignees: true

# A list of reviewers to be added to pull requests (GitHub user name)
reviewers: 
  - reviewerA
  - reviewerB
  - reviewerC

# A number of reviewers added to the pull request
# Set 0 to add all the reviewers (default: 0)
numberOfReviewers: 0

# A list of keywords to be skipped the process that add reviewers if pull requests include it 
# skipKeywords:
#   - wip
```

Please make sure the referenced maintainers have write access to the repository.


See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.

