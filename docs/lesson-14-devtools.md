# Lesson 14 — Developer Tools, Part 1: Reading Your Own Code

You've built a whole website. Today you get the tool that lets you **see inside any web page** —
including your own — and finally connect what's *on the screen* to the *code that made it*.

It's called the **Developer Tools** (or "dev tools," or "the inspector"). Every professional has it
open all day. Think of it as **x-ray goggles for websites.**

> ⭐ **You built your page from a template. Today it stops being magic.** By the end you'll be able to
> point at anything on your page and find the exact line of code behind it.

*This lesson is reading and exploring — there's nothing to save or upload. Just follow along on your
own live site.*

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

Open your page with **Live Server** (or open your live GitHub Pages site — either works today).

---

## Step 2 — Open the Developer Tools

Three ways — any of them works:
- Press **`F12`**, or
- **Right-click anywhere on your page → Inspect**, or
- `Ctrl+Shift+I`

A big panel opens, usually on the right or bottom. **Don't panic — it looks like a lot.** We're only
going to use a few parts, and we'll name them so nothing's scary.

*(To move it: click the three-dots menu in the dev tools → "Dock side" to put it on the bottom,
right, or its own window.)*

---

## Step 3 — The tour: what all those tabs are

Across the top of the dev tools is a row of tabs. Here's what each one is, one line each — you only
need two or three of them, but now none of them are a mystery:

| Tab | What it's for |
|---|---|
| **Elements** | Your page's HTML, live. *(We live here today.)* |
| **Console** | Where JavaScript messages and errors show up. *(You met this in Lesson 5.)* |
| **Sources** | The actual files your page loaded. |
| **Network** | Every file and request the page makes. *(Lesson 15.)* |
| **Application** | Storage — including the `localStorage` from Lesson 13. |
| **Lighthouse** | An automatic report card for your page. *(Lesson 15.)* |

Today = **Elements**. Click it.

---

## Step 4 — The magic button: hover to inspect

Find the little **arrow-in-a-box icon** at the top-left of the dev tools (or press `Ctrl+Shift+C`).
Click it — it turns blue.

Now **move your mouse over your page.** As you hover, each thing you point at lights up, and the dev
tools jump to the exact code behind it.

**Hover your headshot.** See it highlight? Look at the Elements panel — it's showing your
`<img src="headshot.jpg" ...>` line, selected.

> ⭐ **This is the whole point of dev tools.** Hover anything, on any website, and instantly see the
> code that made it. That's how developers understand code they didn't write — which is most of the
> job.

Try it on a few things: your name, a project, a button. Each hover jumps to its code.

---

## Step 5 — Your page is *live* in here

In the Elements panel you're looking at your real HTML. Click the little triangles (▶) to open and
close sections, like folders. This is the same structure you edited in VS Code — but *live*.

Click on your `<h1>` (your name). It highlights on the page. Now look to the right at the **Styles**
panel — it lists all the classes on that element. **Those are your Tailwind classes** — `text-4xl`,
`font-bold`, `text-brand`, all the ones you added.

You're seeing, in one place, the connection you've been taking on faith: **this class → this look.**

---

## Step 6 — Change it live (don't worry, it's temporary)

Here's the fun part. **Anything you change in here is temporary** — a refresh puts it right back. So
you can experiment fearlessly.

1. With your `<h1>` still selected, find its `class="..."` in the Elements panel.
2. **Double-click** the class list and type a change — add `text-red-500`, or delete `font-bold`.
3. Press Enter. **Watch your page update instantly.**
4. Now **refresh the page** — your change vanishes. No harm done.

> ⭐ **This is how you experiment before committing.** Try a change here first, see if you like it,
> *then* go make it real in VS Code. Pros do this constantly — it's faster than guessing.

**Try turning a class off:** in the Styles panel, hover a rule and a checkbox appears next to it.
Uncheck it and watch that style switch off. Check it back on. This is how you figure out which class
does what.

---

## Step 7 — See the box model (this connects to Lesson 4a)

Remember **padding and margin** from Lesson 4a — the space inside and outside a box? Dev tools draws
it for you.

With any element selected, scroll the Styles panel to the bottom. There's a **colored diagram**:
- The **blue** middle is the element itself
- **Green** around it is the **padding** (space inside)
- **Orange** around that is the **margin** (space outside)

Hover each ring and it highlights on the page. **That's padding and margin, made visible.** The
thing that was hard to picture in Lesson 4a is now a diagram you can point at.

---

## Step 8 — Connect the dots (your turn)

Do this yourself — it's the skill that ties the whole course together:

1. Pick **three** things on your page (a heading, a button, your headshot).
2. For each one: use the hover-inspect tool to select it, then read its classes in the Styles panel.
3. For each, answer: **which class makes it that color? which makes it that size?**

You wrote all of these. Now you can *see* which one does what — that's what it means to actually
understand your code instead of just copying it.

---

## Step 9 — A peek at the Console

Click the **Console** tab. This is where JavaScript talks to you — you saw it in Lesson 5 when
hunting for the dark-mode button.

Type this and press Enter:

```js
document.querySelectorAll('button').length
```

It tells you how many buttons are on your page. The Console lets you *ask your page questions* and
run little bits of JavaScript live. You don't need it much yet — but now you know it's there and
what it's for.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 14**.

*What surprised you about seeing your own code in the dev tools? Point at one thing on your page —
can you now name the class that controls it?*

**Done looks like:** you can open the dev tools, use the hover-inspect tool to find the code behind
anything on your page, and name which class controls a color, size, or spacing.

Next up: **using dev tools to test your site on every device** — `docs/lesson-15-testing.md`.
