#!/bin/sh

npm test &&

# # Sort the package.json to keep it neat
npx sort-package-json &&
git commit -m "chore(package.json): organize" &&

# # Get the name of the current working branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# # Generate the changelog then push to the current branch
npx standard-version && git push --follow-tags origin HEAD &&

# # Publish the current branch as a tagged npm package
if [ "$BRANCH" = "master" ]; then 
    npm publish
else
    npm publish --tag $BRANCH  
fi;