module.exports = (robot) => {

  robot.on('issues.opened', async context => {
    const {payload, github} = context;

    if (payload.issue.assignees.length > 0) return;

    const {maintainers} = await context.config('config.yml');

    if (maintainers && maintainers.length > 0) {
      const maintainerIndex = payload.issue.number % maintainers.length;
      await github.issues.addAssigneesToIssue(context.issue({assignees: [maintainers[maintainerIndex]]}));
    }
  });
}
