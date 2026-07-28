# Lesson 10 — Make it move

Your site works and it's live. Now you make it feel *alive*. Today is all about **motion** — the
small movements that make a page feel polished instead of flat: things that grow when you hover,
buttons that lift, sections that fade in as the page loads.

**No new files, no new tools.** Everything today is Tailwind classes you add to elements you already
have — the same kind of classes you've used since Lesson 4b.

> ⭐ **Motion is the difference between "a student made this" and "this looks real."** It's also the
> cheapest polish there is — a handful of classes and your whole site levels up.

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

Open your page and your browser side by side, and open your page with **Live Server** so you see
each change the instant you save.

---

## Step 2 — The one class that makes motion smooth

Motion in Tailwind is two parts: **what changes**, and **`transition`** to make the change glide
instead of snap.

Find a button or a link on your page and add these three classes to it:

```
transition hover:scale-105 hover:shadow-lg
```

So your contact button might go from this:

```html
<a href="mailto:..." class="... rounded border-2 border-brand px-4 py-2">
```

to this:

```html
<a href="mailto:..." class="... rounded border-2 border-brand px-4 py-2 transition hover:scale-105 hover:shadow-lg">
```

Save and hover over it. It grows a little and lifts off the page.

> ⭐ **`hover:` means "only while the mouse is on it"** — you saw this with `dark:` in Lesson 5. And
> **`transition` is what makes it smooth.** Take `transition` off and the change happens instantly,
> which looks cheap. Leave it on and it glides. That one word is the whole trick.

---

## Step 3 — A menu of moves

Here's your toolkit. Each is a `hover:` class — add it to anything, always alongside `transition`.

| Add this (with `transition`) | What happens on hover |
|---|---|
| `hover:scale-105` | Grows slightly |
| `hover:scale-110` | Grows more |
| `hover:-translate-y-1` | Lifts up |
| `hover:shadow-lg` | Casts a shadow (looks like it's floating) |
| `hover:shadow-xl` | Bigger shadow |
| `hover:rotate-3` | Tilts a little |
| `hover:opacity-80` | Fades slightly |

**Mix them.** A card that lifts *and* shadows feels like it's rising toward you:

```
transition hover:-translate-y-1 hover:shadow-xl
```

Try these on:
- Your **project cards** or **skill tags** — `transition hover:-translate-y-1 hover:shadow-lg`
- Your **headshot** — `transition hover:scale-105`
- Your **links** — `transition hover:opacity-80`

> ⭐ **Speed matters.** Add `duration-300` to slow a move down (300 milliseconds), or `duration-150`
> to speed it up. `transition duration-300 hover:scale-105` feels smooth and expensive. Play with it.

---

## Step 4 — Make the page fade in when it loads

A nice touch: have your page gently fade in instead of just appearing.

Near the top of your file, find the `<style>` block in the `<head>` — it already has the
`reduced-motion` rule in it. Add this new animation just above the closing `</style>`:

```html
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  body { animation: fadeInUp 0.6s ease-out; }
```

Save and refresh. Your whole page slides up and fades in.

> ⭐ **`@keyframes` is you defining your own animation** — "start invisible and 20px low, end solid
> and in place." Then `animation:` plays it on the `<body>` over 0.6 seconds. This is real CSS
> animation, the same tool behind every slick site you've seen.

> **This is above the `ONLY EDIT BELOW THIS LINE` comment.** That's fine — the `<style>` block is
> made to be edited, and Lesson 5 already had you work up here. Just add the lines, don't remove the
> `reduced-motion` rule below them.

---

## Step 5 — Don't overdo it

Now that you have the toys, the skill is restraint.

> ⭐ **Good motion is felt, not noticed.** If a visitor thinks "nice," that's right. If they think
> "why is everything spinning," that's too much. Pick two or three moves and use them consistently —
> the same hover on every card, not a different one each time.

A good rule: **things you can click should react to hover** (buttons, links, cards). Plain text
shouldn't move. That alone makes a site feel intentional.

---

## Save your work

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add hover animations and a page fade-in"
```

**▶ Try it**
```
git save
```

Wait a minute, then open your **live site** and hover around. Your polish is now on the real
internet.

---

## If it didn't work

**Nothing moves when I hover.**
You probably left off `transition`, or the `hover:` class has a typo. Both are needed together:
`transition hover:scale-105`. Check the spelling and that there's a space between every class.

**The whole element jumps instead of gliding.**
That's `transition` missing. Add it to the same `class="..."` list as your `hover:` classes.

**The page-load animation didn't happen.**
Check your `@keyframes` block is *inside* the `<style>` tags, and that the `body { animation: ... }`
line spells `fadeInUp` exactly the same as the `@keyframes fadeInUp` above it. One misspelling and
it does nothing.

**A hover effect looks janky or clipped.**
Add `duration-300` to slow it down, and make sure the element has a little room around it — a scaled
element inside a tight box can get cut off. Move the class to a parent with padding if so.

> **Still stuck?** Motion is pure polish — your site works perfectly without any of it. Skip what's
> fighting you and keep the effects that landed.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 10**.

*Which effect is your favorite, and where did you use it? Did you catch yourself wanting to add too
much?*

**Done looks like:** clickable things on your page react smoothly to hover, your page fades in when
it loads, and it feels a notch more professional than it did yesterday.

Next up: **making your page actually do things with JavaScript** — `docs/lesson-11-interactive.md`.
