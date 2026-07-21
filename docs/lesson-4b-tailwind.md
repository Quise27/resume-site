# Lesson 4b — Tailwind

Time to make your page look like something you'd actually show someone.

> **You need Lesson 4a first.** If you skipped it, go back. This lesson assumes you know what
> `padding`, `color`, `font-size`, and `flex` are, and why the cascade is a problem.

---

## What Tailwind is

In 4a you wrote rules in a separate file:

```css
p {
  color: #1B1B1B;
  font-size: 1rem;
  padding: 1rem;
}
```

Tailwind gives you the same thing as small pre-made classes you attach directly:

```html
<p class="text-ink text-base p-4">Hello</p>
```

Same result. `text-ink` sets the color, `text-base` sets the size, `p-4` sets the padding.

> ⭐ **You are still writing CSS.** Every class is just a nickname for CSS you already understand.
> `p-4` *is* `padding: 1rem`. Nothing new is happening under the hood.

**Why bother, then?** One reason: a class only affects the element you put it on. There's no
cascade fight, no rule silently losing to something in a file you've never opened. Remember that
frustration from 4a, where a correct rule just does nothing? This mostly removes it.

Tailwind isn't easier to *understand* than CSS. It's easier to *not break*.

---

## Translating what you already know

| Real CSS | Tailwind | What it does |
|---|---|---|
| `color: #1B1B1B` | `text-ink` | Text color |
| `font-size: 1rem` | `text-base` | Body text size |
| `font-size: 1.875rem` | `text-3xl` | Big heading |
| `padding: 1rem` | `p-4` | Space inside, all round |
| `padding: 0 1.5rem` | `px-6` | Space inside, left and right only |
| `margin-top: 2rem` | `mt-8` | Space outside, top only |
| `display: flex` | `flex` | Lay children out in a row |
| `gap: 1rem` | `gap-4` | Space between those children |
| `justify-content: center` | `justify-center` | Center along the row |
| `align-items: center` | `items-center` | Center across the row |
| `border-radius: 0.5rem` | `rounded-lg` | Rounded corners |
| `font-weight: 700` | `font-bold` | Bold |
| `max-width: 42rem` | `max-w-2xl` | Stop it getting too wide |

**The number scale is consistent:** `1` = `0.25rem` (4px), so `p-4` = `1rem` = 16px, `p-8` = `2rem`
= 32px. Once you know `4 = 16px`, you can read the rest.

A full two-column reference lives in `docs/cheatsheet-css-tailwind.md`. Keep it open.

---

## How Tailwind gets onto your page

One line in the `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

That's it. No install, no build step, no terminal. It works with Live Server exactly as you're
already using it. **This line is already in every layout file** — you don't have to add it.

> **You will see an orange warning in the browser console** that says something about not using the
> CDN in production. **Ignore it.** It's telling you that real deployed sites use a build step
> instead. For learning and for a personal site this is completely fine, and it is not an error.

---

## Step 1 — Pick a layout

You get three. They are **structurally different**, not the same page in different colors.

| Layout | Feel |
|---|---|
| **Fun** | Rounded, asymmetric, icons, playful spacing |
| **Serious** | Tight grid, traditional, conservative. Looks like a professional CV |
| **Bold** | Editorial. Huge type, high contrast, magazine-like |

### See all three at once

**▶ Try it**

1. In VS Code, look at the file list on the **left**.
2. Open the `template` folder.
3. **Right-click** `preview-layouts.html`
4. Choose **Open with Live Server**

Your browser opens with all three layouts side by side, filled with sample content. Scroll each
panel. That's the same Live Server you used in Lesson 3b — nothing new.

### See one full size (do this too)

The three preview panels are narrow, so the layouts squeeze into their phone-sized versions. To see
what one actually looks like on a full screen:

**▶ Try it**

1. Open `template` → `layouts` in the file list.
2. **Right-click** `fun.html` (or `serious.html`, or `bold.html`)
3. Choose **Open with Live Server**

Now it fills the window. **Look at all three this way before deciding** — a couple of them look
quite different at full width than they do in the narrow preview.

> **Don't see "Open with Live Server" when you right-click?** The extension isn't installed. Click
> the Extensions icon in the left bar (four squares), search **Live Server**, click Install, then
> try again.

> ⭐ **All three use identical section names.** Switching later is the same copy-and-paste you're
> about to do now, so pick the one you like and don't overthink it. You are not locked in.

---

## Step 2 — Back up what you have

Before changing anything, make a copy of your current page. Thirty seconds now, saves real pain
later.

In VS Code's file explorer, right-click `template/index.html` → **Copy**, then right-click in the
same folder → **Paste**. Rename the copy to `index-backup.html`.

> ⭐ **Do not skip this.** Your real content is in `index.html` right now. If something goes sideways
> in the next step, this file is how you get it back.

---

## Step 3 — Move your content across

This is the actual work of the lesson, and it's mostly copy and paste.

Open two files side by side in VS Code (drag one tab to the right half of the screen):

- **Left:** `template/index.html` — your content
- **Right:** `template/layouts/serious.html` — or whichever you picked

Both files have the **same sections in the same order**, marked with the same comments:

```
about  ·  projects  ·  skills  ·  contact
```

Go section by section. Copy your **text** from the left into the matching section on the right.
Copy only the words. Leave the layout file's `class="..."` attributes alone.

**Example.** Your file has:

```html
<h1>Jordan Rivera</h1>
```

The layout file has:

```html
<h1 class="text-4xl font-bold text-brand">Your Name Here</h1>
```

You change it to:

```html
<h1 class="text-4xl font-bold text-brand">Jordan Rivera</h1>
```

**Your words go in. The classes stay put.** That's the whole pattern, repeated for each section.

Work through: name, tagline, about, projects, skills, contact, footer.

---

## Step 4 — Make it your page

Once your content is in the layout file:

1. Select everything in your filled-in layout file (**Ctrl+A**) and copy it (**Ctrl+C**).
2. Open `template/index.html`.
3. Select everything (**Ctrl+A**) and paste over it (**Ctrl+V**).
4. Save (**Ctrl+S**).

Refresh Live Server. **That's your site.**

*(Your untouched copy is still sitting in `index-backup.html` if you need it.)*

---

## Step 5 — Pick your colors

Near the top of your page, inside the `<head>`, there's a block that looks like this:

```html
<script>
  tailwind.config = { theme: { extend: { colors: {
    ink: '#1B1B1B',

    /* ===== PALETTE - EDIT THESE THREE ONLY ===== */
    brand:  '#0C2559',
    accent: '#2C62CC',
    pop:    '#FFE019',
    /* ===== END PALETTE ===== */
  }}}}
</script>
```

- **`brand`** — headings, header background, the main color of the page
- **`accent`** — links and buttons
- **`pop`** — small highlights

> ⭐ **`ink` sits outside the palette block and stays `#1B1B1B`.** That's your body text, at a
> 17:1 contrast ratio on white (from 4a). Leave it alone. It's the single thing standing between
> your site and unreadable grey-on-white text.

**▶ Try it**

1. In VS Code's file list, open the `template` folder.
2. **Right-click** `preview-palettes.html`
3. Choose **Open with Live Server**

Twelve palettes, each shown on a real card so you can see the three colors working together. Each
card prints its own three hex codes underneath, ready to copy.

Pick one, copy its three values into your palette block, save, and refresh your page.

**Pick from the list rather than inventing your own.** Every one of these has been contrast-checked
so your text stays readable. Picking three colors that work together is a genuinely hard design
problem, and there's no reason to solve it today.

### The twelve

| Name | brand | accent | pop |
|---|---|---|---|
| Carson Navy | `#0C2559` | `#2C62CC` | `#FFE019` |
| Forest | `#14532D` | `#16A34A` | `#FDE047` |
| Wine | `#7F1D1D` | `#DC2626` | `#FCD34D` |
| Plum | `#4C1D95` | `#7C3AED` | `#F0ABFC` |
| Teal | `#134E4A` | `#0D9488` | `#5EEAD4` |
| Slate | `#1E293B` | `#475569` | `#38BDF8` |
| Rust | `#7C2D12` | `#EA580C` | `#FED7AA` |
| Indigo | `#1E1B4B` | `#4F46E5` | `#A5B4FC` |
| Charcoal Gold | `#1C1917` | `#57534E` | `#EAB308` |
| Ocean | `#0C4A6E` | `#0284C7` | `#7DD3FC` |
| Berry | `#831843` | `#DB2777` | `#FBCFE8` |
| Moss | `#1A2E05` | `#4D7C0F` | `#BEF264` |

---

## Step 6 — Save your work

First make sure you're in your project folder:

```
pwd
```

The path should end in `SummerYouthProject`. If not, `cd Documents\SummerYouthProject` first.

**▶ Try it**
```
git add .
git commit -m "Apply Tailwind layout and palette"
git save
```

`git save` sends your work to **both** your own repo and the class showcase. If you haven't set that
up yet, use `git push` instead and see `docs/setup-showcase-remote.md`.

### Then check it in your browser

> ⭐ **A command with no error has not necessarily done what you think.** Checking takes fifteen
> seconds and catches problems while they're still easy to fix.

1. Go to `github.com/YOUR-USERNAME/my-resume-site` and refresh.
2. You should see **"Updated a few seconds ago."**
3. Open `template` → click `index.html`.
4. **Read the first few lines.** You should see your layout's code, not the old plain version. If it
   still looks like your Lesson 3b page, your save didn't include the change — check you ran
   `git add .` before committing.
5. If you've set up the showcase: open `github.com/cjackson-coc/summer-youth-26-showcase`, click the
   branch dropdown, and confirm `student/YOURNAME` is there with your latest work.

Take a screenshot of your styled page and save it as `progress-screenshots/2-css.png` in your repo.
Put it next to `1-html.png` from Lesson 3b. Same content, one lesson apart. That jump is the point.

---

## If it didn't work

**The whole page is unstyled — plain text, no colors.**
Tailwind isn't loading. Check the `<head>` still contains
`<script src="https://cdn.tailwindcss.com"></script>`. If you pasted over `index.html` and only
copied the `<body>`, you lost the `<head>` along with it. Recover from `index-backup.html` and redo
Step 4, copying the **entire** file.

**Colors changed for some things but not others.**
A typo in the palette block. Every line needs a quoted hex and a trailing comma:
`brand: '#0C2559',` — check for a missing quote, missing comma, or a `#` you dropped. One broken
line stops the whole block silently, exactly like the cascade problem from 4a.

**My content vanished.**
You almost certainly pasted in the wrong direction. That's what `index-backup.html` is for. Open
it, copy your text out, and try Step 3 again more slowly.

> **Still stuck?** Skip it and come back. Nothing here is a hard prerequisite for the next thing.
> Your page from Lesson 3b still works, and you can pick this up later without falling behind.

---

## When you get stuck (and you will)

**Do:** read the error out loud, ask a classmate, google the exact message.

**Don't:** ask an AI to fix it for you. Googling an error and reading the answers is the actual
skill. Every professional developer does it daily. The struggle is the lesson.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 4b**.

Markdown, `##` heading, at least one **bold** thing.

*Which layout did you pick and why? What's one Tailwind class you now know the CSS for?*
