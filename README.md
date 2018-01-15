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

```
# .github/config.yml
maintainers:
  - evertonfraga
  - alexvandesande
  - marcgarreau
  - ryanio
```

Please make sure the referenced maintainers have write access to the repository.


See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.

