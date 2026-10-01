# Aman’s Life Archive

A personal blog with dated Markdown entries, automatic year/month archives, topic filters and full-text search. No account system, database, tracking, external fonts or paid theme.

## Publish with GitHub Pages

1. Create a GitHub repository named `aman-life-archive`.
2. Extract this ZIP. Upload the **contents** of the `aman-life-archive` folder into the repository root. Keep `_layouts`, `_posts` and `assets` intact.
3. In `_config.yml`, set `url` to `https://YOUR-USERNAME.github.io`. Keep `baseurl: "/aman-life-archive"` when using that repository name. If your repository is named `YOUR-USERNAME.github.io`, use `baseurl: ""`. Use an empty baseurl for a custom domain as well.
4. Review `about.md`, `my-story.md` and the sample post. Replace the sample with your own words; set `sample: false`.
5. Open repository **Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/(root)**. Save.
6. Check the Pages deployment status and open the URL displayed by GitHub.

This package has not been published to your GitHub account. GitHub builds the Jekyll source when Pages is enabled. Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Add an entry in your browser

In your GitHub repository choose **Add file → Create new file**. Name it `_posts/YYYY-MM-DD-your-title.md`, for example `_posts/2026-10-02-an-ordinary-friday.md`. Copy the template from `templates/new-post.md`. Change title, date (including time zone), category, excerpt and body. Remove `published: false` or set it to `true` when ready. Commit the file to main. The entry, archive and search update on the next deployment. Future-dated entries are excluded until a build occurs on or after their date; no scheduled rebuild is configured.

Supported topic choices: Journal, Running, Work & Learning, Travel & Memories, Thoughts, Letters to Future Me. Use these exact values for the homepage filter; search works with any category.

## Photos

Upload a photo to `assets/images/`, then insert:

```liquid
![A description of the photo]({{ '/assets/images/my-photo.jpg' | relative_url }})
```

Compress large photos, use meaningful names and descriptions, and keep original photos separately. No photos are bundled.

## Keep it for decades

Your writing is plain Markdown, so it can move to another platform. Download a repository ZIP periodically, and keep another copy of your writing and photos. Hosting and domain ownership require ongoing maintenance; this package does not promise 20-year availability.

Everything published on GitHub Pages is public. `published: false` keeps a post off the generated site, but the source remains visible in a public repository. Keep private journal entries outside that repository.

## Local development (optional)

Install Ruby and Bundler, then run `bundle install` and `bundle exec jekyll serve`. Open the address Jekyll prints. The supplied `preview.html` is a standalone design preview, not the live Jekyll output; it is excluded from deployment.

## Write your life story

Edit `my-story.md` to tell your childhood, school, college and career story. The page contains your approved story. You can add photos using the same photo syntax as blog posts. Keep dated updates in journal posts as your story continues.
