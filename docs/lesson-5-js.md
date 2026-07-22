# Lesson 5 — JavaScript

Your page looks good. Today you make it *do* something.

> **You need Lesson 4b first.** This lesson adds to the Tailwind layout you applied there. If your
> page isn't using a layout yet, go back and finish 4b — it'll only take a few minutes.

---

## The third language

You've now met all three:

| Language | What it controls | You learned it in |
|---|---|---|
| **HTML** | Structure — what's on the page | Lesson 3b |
| **CSS / Tailwind** | Appearance — what it looks like | Lesson 4a / 4b |
| **JavaScript** | **Behavior** — what *happens* | Today |

JavaScript is the only one of the three that can react to a person. Click, type, scroll — HTML and
CSS can't hear any of it. JavaScript can.

Today you add exactly one working feature: a button that switches your page between light and dark.

> ⭐ **You are not expected to write JavaScript from scratch today.** The goal is to read a small
> piece of working code, understand roughly what it does, and change it. That's it. If you get the
> button working and can explain it out loud, you've met the goal for this lesson.

---

## Step 1 — Get today's files

Make sure you're in your project folder first:

**▶ Try it**
```
pwd
```

The path should end in `SummerYouthProject`. If it doesn't, run `cd Documents\SummerYouthProject`
and check again. Commands run in the wrong folder are the single most common problem in this course.

**▶ Try it**
```
git pull lessons main
```

In VS Code's file list on the left, open the `template` folder. You should now see a new file:
**`script.js`**. That's your JavaScript.

---

## Step 2 — Read the code

Click `script.js` to open it. Read it all the way through before you change anything. It's about
fifteen lines and every one has a comment.

Here's the part that matters:

```js
// Find the button in the page.
const toggleButton = document.getElementById('dark-mode-toggle');

// Wait for someone to click it, then run the code inside.
toggleButton.addEventListener('click', function () {

  // Put the class "dark" on the page - or take it off if it's already there.
  document.documentElement.classList.toggle('dark');

});
```

Read it as three plain-English sentences:

1. **`getElementById('dark-mode-toggle')`** — go find the thing in my HTML whose `id` is
   `dark-mode-toggle`. This is how JavaScript grabs one specific element off the page.

   **`id` is new — it's a name tag you stick on one element.** You write it in the HTML like this:
   `<button id="dark-mode-toggle">`. Unlike a Tailwind class, which you put on lots of elements,
   an `id` should be used **once per page**. It exists so code can point at exactly one thing and
   never grab the wrong one. You've actually already got some — scroll your page and you'll find
   `id="about"`, `id="projects"`, `id="contact"` on your sections. That's how a link that jumps
   partway down a page knows where to land.

2. **`addEventListener('click', ...)`** — listen for a click on that thing. When it happens, run
   the code in the braces. Nothing runs until someone clicks.
3. **`classList.toggle('dark')`** — add the class `dark` to the page. If it's already there, take it
   off. Toggle means flip.

That's the whole feature. **JavaScript doesn't change any colors.** All it does is add or remove one
word. Tailwind does the rest — which is Step 3.

---

## Step 3 — Turn dark mode on in the config

Open `template/index.html` and look near the top, inside the `<head>`, for the palette block you
edited in Lesson 4b. The first line of it is this:

```html
tailwind.config = { theme: { extend: {
```

Change it to this — you're adding `darkMode: 'class',` right after the first `{`:

```html
tailwind.config = { darkMode: 'class', theme: { extend: {
```

Save with `Ctrl+S`.

> ⭐ **This tells Tailwind: when the word `dark` appears on the page, switch to the dark version of
> everything.** Without this line the button will click but nothing will happen — Tailwind won't be
> listening for that word.

> **Yes, this is above the "ONLY EDIT BELOW THIS LINE" comment.** Steps 3 and 4 are the only two
> times in this whole course you edit above it. Type exactly what's shown, change nothing else, and
> you're fine. If the page goes completely unstyled after this, you made a typo — press `Ctrl+Z`
> until it comes back, then try again slowly.

---

## Step 4 — Say what "dark" should look like

Still in `template/index.html`, find the `<body>` line just below that block. It looks like this:

```html
<body class="bg-white font-sans text-ink leading-normal">
```

Add two classes to the end of that list:

```html
<body class="bg-white font-sans text-ink leading-normal dark:bg-ink dark:text-white">
```

Save.

**`dark:` is a prefix, and it means "only when the page is in dark mode."** Everything you already
know about Tailwind classes still applies — `dark:bg-ink` is just `bg-ink` with a condition attached.
Normally the page is `bg-white`. When the word `dark` is on the page, it becomes `bg-ink` instead.

`ink` is the near-black from your palette. It's the one color that's locked and can't be edited, so
it's always safe to use here.

> **Using the bold layout?** Your `<body>` already says `bg-ink ... text-white` — your page starts
> dark. So add `dark:bg-white dark:text-ink` instead, and your button gives you a *light* mode.
> Same code, opposite direction. Change your button's label to "Light Mode" and carry on — Step 8
> has a section just for you.

---

## Step 5 — Add the button

Scroll down until you hit this line — it's a long row of `=` signs, hard to miss:

```html
<!-- ===================== ONLY EDIT BELOW THIS LINE ===================== -->
```

Everything from there down is yours.

Find your `<footer>` near the bottom and paste this **just above** it:

```html
<button id="dark-mode-toggle"
        class="mx-auto mb-8 block rounded border-2 border-brand px-4 py-2 text-sm dark:border-pop dark:text-pop">
  Dark Mode
</button>
```

Save.

> **Using the bold layout?** Use this version instead — your page starts dark, so the colors are the
> other way round:
>
> ```html
> <button id="dark-mode-toggle"
>         class="mx-auto mb-8 block rounded border-2 border-pop px-4 py-2 text-sm text-pop dark:border-brand dark:text-brand">
>   Light Mode
> </button>
> ```

> ⭐ **`id="dark-mode-toggle"` has to stay exactly that.** It's the name `script.js` searches for in
> Step 2. Change the words *between* the tags all you like — that's the visible label. Change the
> `id` and the button stops working.

---

## Step 6 — Connect the script

The page doesn't know `script.js` exists yet. HTML only loads what you tell it to.

At the very bottom of your editable section — **just above** the matching
`<!-- ===================== ONLY EDIT ABOVE THIS LINE ===================== -->` comment — add
this line:

```html
<script src="script.js"></script>
```

Save.

It goes at the *bottom* on purpose. The script looks for your button, so the button has to exist
before the script runs. Put it at the top and it'll search an empty page and find nothing.

---

## Step 7 — Click it

Right-click `index.html` in VS Code's file list → **Open with Live Server**.

Click your button. **The page should flip to dark and back.**

That's a working feature on your own website, built out of three things you wrote yourself.

*(The orange Tailwind warning in the console is still expected. Ignore it, same as Lesson 4b.)*

---

## Step 8 — Finish the job

Look closely. The background flipped, but some pieces didn't come with it — your header might still
be a white block, your headings might be dark navy on near-black and barely readable.

That's because those elements set their *own* colors, and yours override the body's. So they each
need their own `dark:` version.

> ⭐ **One rule saves you a lot of work: only fix what sits directly on the page background.**
> If something sits inside a colored block — a yellow card, a navy panel — that block keeps its own
> colors in dark mode and everything inside it is still readable. **Leave those alone.** They already
> look right.

**Find your layout below.** You picked it in Lesson 4b.

### If you picked *serious*

| Find an element with | Add next to it | Why |
|---|---|---|
> **Use `Ctrl+F` in VS Code and search for each one — they turn up in more than one place.**
> Missing the second copy is the most common way to end up with one invisible line of text.

| Find an element with | Add next to it | Where it appears (serious layout) |
|---|---|---|
| `bg-white` | `dark:bg-ink` | Your header — a white band across a dark page |
| `text-ink` | `dark:text-white` | **Two places:** the line under your name, *and* your footer |
| `text-brand` | `dark:text-white` | **Three places:** your name heading, *and* both project titles |
| `text-accent` | `dark:text-pop` | All four section headings, *and* your "Get in touch" link |
| `border-slate-200` | `dark:border-slate-700` | The divider lines between sections |
| `border-brand` | `dark:border-pop` | Same problem, thicker line |
| **your "Email me" button only** (`bg-brand text-white`) | `dark:bg-pop dark:text-ink` | Otherwise it's a dark block on a dark page |

So your header becomes:

```html
<header id="top" class="border-b-4 border-brand bg-white dark:border-pop dark:bg-ink">
```

### If you picked *fun*

Your layout is mostly colored cards, so there's very little to do — that's the rule above paying off.

| Find an element with | Add next to it |
|---|---|
| `text-brand` on the **Projects** and **Skills** headings | `dark:text-pop` |
| `border-brand` on a project card | `dark:border-pop` |
| `text-ink` in your footer | `dark:text-white` |

**Leave alone:** the navy header, the yellow About card, the skill pills, and the Contact panel.
They're colored blocks — they look the same in both modes, on purpose. In particular **don't touch
the About card's heading** — it's dark text on a yellow card, which is exactly right already.

### If you picked *bold*

Yours is the reverse: the page starts dark and your button makes it **light**. That means every
color built for a dark background has to be given a light-background version.

| Find an element with | Add next to it |
|---|---|
| `border-white/20` (six of them, the divider lines) | `dark:border-ink/20` |
| `text-white/80`, `/70`, `/60`, `/40` (the greyed-out text) | `dark:text-ink/80`, `/70`, `/60`, `/40` — match the number |
| `text-pop` (the "Portfolio" label and every section heading) | `dark:text-brand` |
| `text-white` on your "Email me" link | `dark:text-ink` |
| `decoration-pop` on that same link | `dark:decoration-brand` |

> ⭐ **`text-pop` is the one you can't skip.** `pop` is a bright color — on a white background it's
> almost invisible, in every single palette. `dark:text-brand` is the fix, and `brand` is dark in
> all twelve, so it always works.

Work down the page one element at a time, saving and clicking the button as you go. You don't have
to catch every single one — get the headings and the borders and it'll look deliberate.

> ⭐ **This is the actual lesson about `dark:`.** Nothing is happening automatically. Every change
> you see is one you asked for by name. That's true of Tailwind generally, and it's why it's hard to
> break.

---

## Optional — go further

All of this is bonus. The button working is the requirement.

**Change the button's label.** The text between `<button>` and `</button>`. Try "Night Mode" or
"Lights Off". Leave the `id` alone.

**Change the dark colors.** Don't like near-black? Swap `dark:bg-ink` for `dark:bg-slate-800`. Try
`dark:text-pop` on a heading. Nothing here can break your light version — `dark:` classes only ever
apply when the button is on.

**Meet the console.** Press `F12` in the browser, then click the **Console** tab. This is where
JavaScript errors show up — they never appear on the page itself. Try this: change your button's
`id` to `dark-mode-togle` (drop an `l`), save, reload, and click. Read the red error. Then fix it.

> ⭐ **Knowing where the errors are printed is a real skill.** JavaScript failing silently on the
> page is normal. Every developer has `F12` open all day. Now you know why.

**Write your own line.** At the bottom of `script.js`, below the
`// ONLY ADD YOUR OWN CODE BELOW THIS LINE` marker, try:

```js
console.log('My page loaded');
```

Save, reload, look at the Console tab. You just wrote JavaScript.

---

## Save your work

Check you're in your project folder:

```
pwd
```

Should end in `SummerYouthProject`. If not, `cd Documents\SummerYouthProject`.

**▶ Try it**
```
git add .
git commit -m "Add dark mode button"
git save
```

`git save` sends your work to both your own repo and the class showcase. Haven't set that up yet?
Use `git push` and see `docs/setup-showcase-remote.md`.

### Verify it uploaded

> ⭐ **A command with no error has not necessarily done what you think.** Fifteen seconds now saves
> an hour later.

1. Go to `github.com/YOUR-USERNAME/my-resume-site` and refresh.
2. You should see **"Updated a few seconds ago."**
3. Open the `template` folder. **`script.js` should be listed there.**
4. If you've set up the showcase: open `github.com/cjackson-coc/summer-youth-26-showcase`, click the
   branch dropdown, and confirm `student/YOURNAME` has your latest work.

Take a screenshot of your page **with dark mode switched on** and save it as
`progress-screenshots/3-js.png`, next to `1-html.png` and `2-css.png`.

---

## If it didn't work

**The button does nothing at all.**
Three things to check, in this order. First, is `<script src="script.js"></script>` actually in your
`index.html`? Without it none of the code ever runs. Second, does your button's `id` still read
exactly `dark-mode-toggle`? One wrong character and the script can't find it. Third, press `F12` →
**Console** and read the red text — `Cannot read properties of null` means the script ran but
couldn't find the button, which is the id again.

**The button clicks but the page doesn't change color.**
You missed Step 3. Check the config line says
`tailwind.config = { darkMode: 'class', theme: { extend: {`. If that's right, check your `<body>`
has `dark:bg-ink dark:text-white` on it from Step 4. Both are needed — one turns the feature on, the
other says what it does.

**The whole page went unstyled — plain text, no colors.**
A typo in the config line from Step 3, which breaks the entire block silently. Same failure as a bad
palette line in 4b. Press `Ctrl+Z` until your styling comes back, then retype it carefully, watching
the quotes and the comma.

**Everything broke right after I typed something in `script.js`.**
A missing bracket, brace, or quote stops the whole file. Delete the line you just added, save,
confirm the button works again, then retype it slowly. Keep everything above the "ONLY ADD YOUR OWN
CODE BELOW THIS LINE" marker as it is.

**Dark mode works but parts of the page stay light.**
That's not a bug, that's Step 8. Those elements set their own colors and need their own `dark:`
classes.

> **Still stuck?** Skip it and come back. Nothing here is a hard prerequisite for the next thing.
> Your page works perfectly well without a dark mode button, and Lesson 6 doesn't touch any of this.

---

## When you get stuck (and you will)

**Do:** read the error out loud, ask a classmate, google the exact message.

**Don't:** ask an AI to fix it for you. Googling an error and reading the answers is the actual
skill. Every professional developer does it daily. The struggle is the lesson.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 5**.

*What did you expect the JavaScript to be doing before you read it — and was it more or less
complicated than you thought? Did the console show you anything useful?*

Next up: **building your actual resume page** — `docs/lesson-6-resume.md`.
