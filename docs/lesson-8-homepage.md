# Lesson 8 — The class site

This is where all the individual work comes together. Everyone's pages get gathered into one shared
**class site**, and today you make sure your part of it is complete and write the short blurb that
represents you on the class homepage.

> ⭐ **Your work is already on the class showcase.** Every time you ran `git save`, it went to two
> places — your own repo *and* the shared class repo, onto your own branch. Today isn't about
> uploading again. It's about checking your branch is complete and writing your homepage entry.

---

## How the class site fits together

You each have **your own branch** in the shared repo, named `student/yourname`. Nobody else can
write to your branch, and you can't write to theirs — so nothing anyone does can ever touch your
work. That's the whole reason it's set up this way.

The class homepage gets assembled from everyone's branches after they're checked. You don't merge
anything yourself, and there are no merge conflicts to fight — the branch setup makes them
impossible.

> ⭐ **Never `git pull` from the showcase. Ever.** Work only ever goes *up* to it, never comes back
> down. Pulling from it would try to drag everyone's work into your project at once and make a mess.
> Your normal `git save` is push-only — you're safe as long as you don't pull.

---

## Step 1 — Get today's lesson

**▶ Try it**
```
cd Documents\SummerYouthProject
```

**▶ Try it**
```
pwd
```

The path must end in **`SummerYouthProject`**, or commands fail with `fatal: not a git repository`.

**▶ Try it**
```
git pull --no-edit lessons main
```

---

## Step 2 — Make sure your branch is complete

First, upload the very latest of everything:

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Final version"
```

`nothing to commit`? Good — it means you were already saved. Keep going.

**▶ Try it**
```
git save
```

---

## Step 3 — Check your branch on GitHub

> ⭐ **This is the real task today: confirm your finished work actually made it to the showcase.**

1. Go to `github.com/cjackson-coc/summer-youth-26-showcase`
2. Click the **branch dropdown** near the top left (it probably says `main`).
3. Select **`student/yourname`**.
4. Open the `template` folder and check that all of your work is there:
   - **your resume page** — for most people that's `index.html`; if you built inside the `layouts`
     folder, it's your file in there. Whatever your main page is, make sure it's present.
   - your **second page** from Lesson 7 (`about.html` or whatever you named it)
   - `headshot.jpg`, if you used a photo
   - `reflections.md` (this one is at the top level, not inside `template`)
5. Click into your resume page and confirm it's your **latest** version — your real name and
   content, not an old draft.

> **See files with strange names, like `huh` or `bold.html copy`?** Those are leftovers from earlier
> sessions. They don't hurt anything, but if you want a clean site, you can delete them in VS Code
> (right-click → Delete) and `git save` again.

**Branch not in the dropdown, or files look old?** See "If it didn't work" below — it's almost always
a quick fix, and your work is safe in your own repo the whole time.

---

## Step 4 — Write your homepage entry

The class homepage needs one short entry from each of you. Add yours to the bottom of
`reflections.md`, under a heading called **Homepage entry**, in exactly this format:

```
### Homepage entry

- **Name:** Jordan Rivera
- **One line:** High school student who got into web development this summer.
- **Link:** template/index.html
```

For the **Link**, put the path to *your* main page. Most people: `template/index.html`. If your page
lives in the `layouts` folder, use that path instead — for example `template/layouts/fun.html`.

Three things: your name, one honest sentence about yourself, and the path to your page. That's all
that gets pulled onto the shared homepage next to everyone else's.

> ⭐ **Keep it to one line.** Yours sits right next to everyone else's, so a whole paragraph looks
> out of place. One good sentence beats five rushed ones.

Save, then upload it:

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add my homepage entry"
```

**▶ Try it**
```
git save
```

---

## If it didn't work

**My branch isn't in the dropdown.**
Your work never reached the showcase — usually the branch setup didn't happen. Open
`docs/setup-showcase-remote.md` and redo Step 2 (claiming your branch), checking the spelling of your
name carefully, then `git save` again and refresh.

**My branch is there, but the files are old.**
You committed but didn't upload, or uploaded before your last change. Run `git add .`, then
`git commit -m "update"`, then `git save`, and refresh the branch on GitHub.

**`Permission denied` when I run `git save`.**
Your account hasn't been added to the showcase repo yet, or you haven't accepted the invitation.
Flag it — nothing's wrong on your end and your work is safe in your own repo meanwhile.

**`git: 'save' is not a git command`.**
The `git save` shortcut didn't get set up on this laptop. Redo Step 3 of
`docs/setup-showcase-remote.md`. Plain `git push` works in the meantime.

> **Still stuck?** Your own repo has all your work regardless. The showcase is a copy for showing
> off — nothing here can cost you anything you've built.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 8**.

*What's it like seeing everyone's work in one place? Anything you saw in a classmate's page you'd
want to try yourself?*

**Done looks like:** your branch in the shared repo holds your complete, current work, and your
one-line homepage entry is written and uploaded.

Next up, the finale: **putting your site on the real internet** — `docs/lesson-9-github-pages.md`.
