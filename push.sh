
  git remote add origin-pages https://${GH_TOKEN}@github.com/MVSE-outreach/resources.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-pages gh-pages 