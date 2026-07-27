# Lesson 7 — A second page, your own idea

Your resume page is finished. Today you build a **second** page — and this one is entirely your
idea. No template, no placeholders to fill in. The first fully blank-canvas thing in the whole
program.

Two pages that link to each other is the moment this stops being "a page" and becomes "a site."

> ⭐ **"From scratch" does not mean "from nothing."** You'll start by copying the page you already
> built, so your new page inherits your fonts, your colors, and your layout automatically. The
> creative part is what you put *in* it.

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

The path must end in **`SummerYouthProject`**, or commands will fail with `fatal: not a git
repository`.

**▶ Try it**
```
git pull --no-edit lessons main
```

*(Same `--no-edit` you've used since Lesson 5 — it stops git popping open a text editor mid-download.)*

---

## Step 2 — Copy your page

Find your page in VS Code's file list on the left. For most of you that's **`index.html`**. *(If
your page lives inside the `layouts` folder, use that file instead — everything below works the same,
just keep your new page in the same folder as your old one.)*

1. **Right-click** your page → **Copy**
2. **Right-click** in the empty space of the file list → **Paste**

You'll get a second file called something like `index copy.html`.

3. **Right-click** that copy → **Rename**, and call it **`about.html`**

> ⭐ **Lowercase, no spaces, ending in `.html`.** `about.html` and `my-hobbies.html` are good.
> `About Me.html` will break once your site is live — the internet treats `About` and `about` as two
> different files. Get in the habit now.

Not building an about-me page? Name it for your idea — `gallery.html`, `music.html`, whatever fits.

---

## Step 3 — Clear the middle, keep the top

Open `about.html`. Right now it's an exact copy of your resume. You're going to empty out the
content but keep the machinery that styles it.

Find these two lines — the same fence you've worked inside all along:

```html
<!-- ===================== ONLY EDIT BELOW THIS LINE ===================== -->
```
```html
<!-- ===================== ONLY EDIT ABOVE THIS LINE ===================== -->
```

**Delete everything *between* those two lines.** Leave both fence comments in place, and leave
everything *outside* them — the whole top section — completely alone.

> ⭐ **That top section is why your new page already looks like your old one.** It loads your font,
> Tailwind, and your color palette. You copied it instead of rebuilding it. Touch nothing above the
> top fence and your new page matches your resume for free.

Save. Right-click `about.html` → **Open with Live Server**. You'll see a blank page with your
styling ready to go. That blank space between the fences is yours.

---

## Step 4 — Build your page

This is the open part. Put whatever you want between the fences.

**Stuck for an idea?** What could you talk about for ten minutes without getting bored? Build a page
about that. A few that work well:

- An **about-me** page — hobbies, music, games, what you're into
- A page about **one thing you care about**, built like a mini-project
- A **photo gallery**
- Something **you made** and want to show off

You already know the tags you need — you used them all on your resume. Steal from yourself: open
`index.html` in a second tab, copy a section that's close to what you want, paste it into `about.html`
between the fences, and change the words.

Here's a heading and a paragraph to start with if you want one:

```html
<main class="mx-auto max-w-3xl px-6 py-10">
  <h1 class="text-4xl font-bold text-brand">My favorite games</h1>
  <p class="mt-4 text-base leading-relaxed">
    Write anything here. This is your page.
  </p>
</main>
```

`text-brand`, `max-w-3xl`, `px-6` — every one of those is a Tailwind class from Lesson 4b. Nothing
new to learn. If a class did something on your resume, it does the same thing here.

> **Bold layout?** Your page has a dark background, and `text-brand` is a dark color — the heading
> would vanish into it. Use `text-white` instead: `<h1 class="text-4xl font-bold text-white">`. Same
> reason your resume headings used light colors, from Lesson 5's dark-mode work.

> ⭐ **One page, one idea, finished.** A small page you complete beats a huge one you abandon. You
> can always add more later — but get it to "done" first.

---

## Step 5 — Link the two pages together

Two pages aren't a website until you can walk between them. That takes two links.

**On your resume (`index.html`)**, between the fences, add a link *to* your new page:

```html
<a href="about.html" class="text-accent underline">See my About page</a>
```

**On your new page (`about.html`)**, between the fences, add a link *back*:

```html
<a href="index.html" class="text-accent underline">Back to my resume</a>
```

> ⭐ **The filename in the link must match the real file exactly** — same spelling, same lowercase.
> `href="about.html"` finds `about.html`. `href="About.html"` does not. This is the single most
> common thing to get wrong today.

The `text-accent underline` classes just make it look like a link — you can style it fancier later,
or match how your other links look.

> **Bold layout?** Swap `text-accent` for `text-pop` on both links —
> `class="text-pop underline"`. On your dark background `text-accent` is too dim to read easily;
> `text-pop` is the bright color and stands out cleanly. (Not sure which layout you have? If your
> page background is dark, this is you.)

---

## Step 6 — Take the round trip

Open `index.html` with Live Server. Then:

1. Click your **"See my About page"** link. Your new page should load.
2. Click **"Back to my resume"**. You should land back on your resume.

**Going both ways is the whole lesson.** If one direction works and the other doesn't, you're missing
a link or a filename doesn't match — check Step 5.

---

## Save your work

Check you're in the right folder:

```
pwd
```

Should end in `SummerYouthProject`.

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add my second page"
```

**▶ Try it**
```
git save
```

`git save` sends your work to both your own repo and the class showcase. If it errors on the
showcase part, see `docs/setup-showcase-remote.md` — your own repo still got your work.

### Verify it uploaded

> ⭐ **A command with no error hasn't necessarily done what you think.** Thirty seconds now.

1. Go to `github.com/YOUR-USERNAME/my-resume-site` and refresh.
2. You should see **"Updated a few seconds ago."**
3. Confirm your new file — `about.html` — is **listed there**. If it isn't, it didn't upload;
   check you ran `git add .` before committing.

No screenshot this session — you already have your four from Lessons 3b, 4b, 5, and 6.

---

## If it didn't work

**Clicking the link says "Cannot GET" or "file not found."**
The filename in your link doesn't match the real file. Check the spelling and the capitals — they
have to be identical. If your file is `about.html`, the link must say `href="about.html"`, not
`About.html` or `about.HTML`.

**My new page has no styling — it's plain black text on white.**
The top section didn't come across, or you deleted part of it. The fix: copy `index.html` fresh
again, rename it, and this time delete *only* what's between the two fence comments. Everything above
the top fence must stay.

**I can get to the new page but not back.**
You only made one link. Add the return link on `about.html` — Step 5, second box.

**My old resume content is still showing on the new page.**
You copied the file but didn't clear the middle. Delete everything between the fences on `about.html`
and put your own content there.

> **Still stuck?** Skip it and come back — nothing here blocks the next lesson. Your resume page
> works fine on its own, and you can add a second page any time.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 7**.

*What page did you build, and why that one? Was starting from a blank space easier or harder than
filling in a template?*

**Done looks like:** two pages that link to each other in both directions, styled to match, with
content that was your idea instead of a template's.

Next up, once everyone's ready: **the group homepage** — `docs/lesson-8-homepage.md`.
