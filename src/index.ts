import { Probot } from "probot";
const fetch = require('node-fetch');

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {

    app.log(context);

     
    const response = await fetch('https://meme-api.herokuapp.com/gimme/ProgrammerHumor');
    const data = await response.json();
    
    app.log(data);
 

    var meme = data.url;
    


    const issueComment = context.issue({
      body: `![Meme](${meme})`
    });

    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
