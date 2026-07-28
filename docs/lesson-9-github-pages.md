# Lesson 9 — Put your site on the real internet

This is the finale. Right now your site only exists on your laptop — Live Server runs on your
machine, shows it only to your machine, and stops the second you close the editor.

Today your site gets a **real web address** that anyone, anywhere, on any device, can open — whether
your laptop is on or not. The kind of link you can text to someone.

> ⭐ **This is the moment it stops being a school project and becomes a real, live website.** People
> have shipped entire careers off a link exactly like the one you're about to make.

---

## Why it doesn't work yet

A webpage needs a computer that's always on and always connected, ready to hand your files to anyone
who asks. That's all "hosting" is.

Your site is just files — HTML, CSS, a little JavaScript — with nothing that has to *run* on a
server. That's called a **static site**, and it's the easiest kind to put online. **GitHub Pages**
hosts static sites for free, straight from the repo you already have.

---

## Step 0 — Read this before you publish

Publishing makes your repository **public**. Anyone with the link can see everything in it —
including `reflections.md`.

Before you switch it on:

- Re-read your pages for anything that shouldn't be public: no home address, no phone number, no
  information about other people.
- Open `reflections.md`. If you wrote anything there you'd rather keep private, edit it out or move
  it now.

> ⭐ **This isn't a reason not to publish — it's a reason to look first.** Checking what's about to
> go public before you ship is exactly what a professional does. Thirty seconds now.

---

## Step 1 — Get today's lesson

**▶ Try it**
```
cd Documents\SummerYouthProject
```

**▶ Try it**
```
git pull --no-edit lessons main
```

---

## Step 2 — Add a front door

Here's the one wrinkle: GitHub Pages serves your site starting from the **top folder** of your repo
— but your actual page lives down inside `template/`. If you skip this step, your web address shows
nothing useful.

The fix is a tiny "front door" file at the top that forwards visitors to your real page.

1. **Right-click** in the empty space of VS Code's file list → **New File**.
2. Name it exactly **`index.html`** — and make sure it lands at the **top level** of your project,
   *not* inside `template/`. (In the file list it should sit next to `README.md` and the `docs`
   folder, not inside `template`.)
3. Paste this in exactly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=./template/index.html">
  <title>Redirecting to my site…</title>
</head>
<body>
  <p>Taking you to <a href="./template/index.html">my site</a>…</p>
</body>
</html>
```

Save.

> ⭐ **`http-equiv="refresh"` is a redirect** — it tells the browser "don't stop here, go straight
> to this other page." The `0` means do it instantly. Redirects run a huge amount of the real web;
> this is the same tool a company uses when it moves a page and doesn't want old links to break.

**Is your page inside the `layouts` folder instead of `template/index.html`?** Change **both** places
that say `./template/index.html` to point at your file — for example `./template/layouts/fun.html`.

---

## Step 3 — Upload the front door

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add homepage redirect"
```

**▶ Try it**
```
git save
```

---

## Step 4 — Turn on GitHub Pages

This part happens on the GitHub website, not in VS Code.

1. Go to `github.com/YOUR-USERNAME/my-resume-site`.
2. Click **Settings** (top right of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
5. Under **Branch**, pick **`main`**, leave the folder as **`/ (root)`**, and click **Save**.

That's it. GitHub now starts publishing your site. It takes a minute or two the first time.

> **If your repo was private:** GitHub may ask you to make it public first, or the Pages option may
> be greyed out until you do. Making it public is what lets the world see it — that's the point of
> today. (This is why you did the privacy check in Step 0.)

---

## Step 5 — Find your live address

Refresh the **Pages** settings screen after a minute or two. Near the top it shows:

> **Your site is live at** `https://YOUR-USERNAME.github.io/my-resume-site/`

Click **Visit site**. Because of your front door from Step 2, it forwards straight to your real page.

**That URL is your website. It's live right now, to the whole internet.**

Copy it somewhere safe — you'll want it.

---

## Step 6 — The tests that matter

1. **Open it on your phone.** Not your laptop — your actual phone, off wifi if you can. It should
   look and work exactly the same. That's the whole promise of hosting: same site, any device,
   anywhere.
2. **Click your links.** Your About page, your contact link — make sure they all still work on the
   live version.
3. **Text the link to someone.** A parent, a friend. That's the finale.

---

## Step 7 — Prove it updates itself

From now on, you never upload to the live site by hand. Publishing is automatic.

1. Make a small real change to your page — fix a word, tweak a color.
2. Save it the usual way:

```
git add .
```
```
git commit -m "Small update to my live site"
```
```
git save
```

3. Wait about a minute, then refresh your live address with **`Ctrl+Shift+R`** (that forces a fresh
   copy past your browser's cache).

Your change is there — and you never touched any upload button.

> ⭐ **`git save` is now your publish button.** Every save updates the live site by itself within a
> minute. This automatic loop — save your code, the live site updates on its own — is exactly how
> professional teams ship real software. You just set one up.

---

## If it didn't work

**404 — "There isn't a GitHub Pages site here."**
Two causes. Either it hasn't finished publishing — wait two minutes and refresh — or your front-door
`index.html` isn't at the **top level** of the repo. Check on GitHub that `index.html` sits next to
`README.md`, not inside `template/`.

**The address loads but the page has no styling.**
A filename-capitalization problem. On a real web server, `Template` and `template` are different
folders, even though Windows treats them the same. Check that the path in your redirect —
`./template/index.html` — matches your real folder and file exactly, all lowercase.

**My photo doesn't show on the live site, but it worked on my laptop.**
Same cause. `Headshot.jpg` and `headshot.jpg` are two different files to a web server. Make the
`src` in your page match the real filename exactly.

**My change isn't showing up.**
Give it a minute, then hard-refresh with `Ctrl+Shift+R` to get past your browser's cache. Also
double-check you actually ran `git save` after the change.

> **Still stuck?** Your site works perfectly on your own machine regardless. Publishing is the last
> step, not a prerequisite for anything — you can sort it out later without losing a thing.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 9**.

*How does it feel to have a real link you can send anyone? What would you add to the site next, now
that it's live?*

**Done looks like:** a real web address that loads on a phone, updates itself when you `git save`,
and that you've sent to at least one person.

You built a real website, from an empty file to a live link, using the actual tools professionals
use. That's a huge milestone — take a second to feel it.

And you're not done. Now that your site is live, the next stretch is about making it *impressive*:
motion, real interactive features you write yourself, live data from the internet, and a final
project that's entirely your own.

Next up: **making your site come alive** — `docs/lesson-10-motion.md`.
