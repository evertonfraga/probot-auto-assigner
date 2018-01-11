module.exports = (robot) => {
  // Your code here
  console.log('Yay, the app was loaded!')

  robot.on('issues.opened', async context => {
    const {payload, github} = context;

    console.log('Payload debug:', payload);
    console.log('Github debug:', github);

    if (payload.issue.assignees.length > 0) return;

    const {maintainers} = await context.config('config.yml');
    console.log('Maintainers: ', maintainers);

    if (maintainers && maintainers.length > 0) {
      const maintainerIndex = payload.issue.number % maintainers.length;

      console.log('Assginees length', payload.issue.assignees.length);
      await github.issues.addAssigneesToIssue(context.issue({assignees: [maintainers[maintainerIndex]]}));
    }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
