# Child Word App Update Workflow

This repo is the smartphone practice app connected to Yuki's English lesson analysis project.

## App URL

```text
https://yukikkc.github.io/childword/
```

The app is updated by pushing to GitHub:

```text
origin https://github.com/yukikkc/childword.git
branch main
```

## Related English Project

Lesson transcripts and reports are stored here:

```text
/Users/y-mah/Desktop/web制作/AI/claude-code/english/
```

Important files:

- transcripts: `english/camp-text/`
- reports: `english/report/`
- latest workflow instructions: `english/CLAUDE.md`

## How to Add New Practice Cards

1. Edit `vocabulary.js`.
2. Add new objects near the end of the array.
3. For weekly lesson-derived cards, use the current weekly category unless Yuki asks otherwise:

```js
{ category: "今週の練習 2026-05-18", jp: "...", en: "...", exampleJp: "...", exampleEn: "..." }
```

4. Update cache/version references:

```text
index.html: <script src="vocabulary.js?..."></script>
sw.js: const CACHE_NAME = "..."
```

5. Run checks:

```bash
node --check vocabulary.js
node --check sw.js
node -e "const fs=require('fs');const vm=require('vm');const code=fs.readFileSync('vocabulary.js','utf8')+'; vocabulary';const vocabulary=vm.runInNewContext(code,{});console.log(vocabulary.length);"
```

6. Commit and push:

```bash
git add index.html sw.js vocabulary.js
git commit -m "Add ... practice cards ..."
git push origin main
```

## Current State

The app has a settings button named:

```text
最新を反映
```

Yuki should tap it after new cards are pushed.

Latest relevant commit at the time this file was created:

```text
038b74a Add emergency practice cards to weekly set
```

