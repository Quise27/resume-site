# Lesson 15 — Developer Tools, Part 2: Testing on Every Device

Yesterday you learned to *read* your code with the dev tools. Today you use them to **test** your
site the way professionals do — especially on a **phone**, because that's how most people will
actually see it.

You'll also see something surprising: a real website (ours — the class showcase) that **looks
different on a phone than on a computer**, on purpose. By the end you'll know how that works and how
to check your own site for it.

> ⭐ **"It works on my laptop" is not the same as "it works."** Real developers test on phones,
> tablets, and slow connections. Today you learn the tools that make that easy.

*This lesson is testing and fixing. You'll make a few small fixes to your own site and save them at
the end.*

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

Open your page with **Live Server**, and open the dev tools (`F12`).

---

## Step 2 — Turn on phone mode

In the dev tools, find the **little phone/tablet icon** near the top-left (or press `Ctrl+Shift+M`).
Click it. This is **device mode** — your page redraws at phone size.

- At the top, there's a dropdown to pick a device — **iPhone**, **iPad**, and others. Try a few.
- Drag the edges to resize, or click the **rotate icon** to go landscape.

You're now seeing your site roughly the way a phone would. **Click the icon again to turn it off.**

---

## Step 3 — See a site that changes shape (our showcase)

Here's the cool part. Open the **class showcase** in your browser:

```
https://cjackson-coc.github.io/carson-youth-showcase/
```

1. On a normal (wide) window, look at the top — everyone's names are spread across the bar.
2. Now open dev tools → device mode (`Ctrl+Shift+M`) → pick a phone.
3. **Watch the top bar change.** The row of names disappears and becomes a **hamburger menu** (the ☰
   icon). Tap it — the names drop down instead.

Same website. Two completely different layouts, depending on screen size. **That's called
responsive design**, and it's everywhere — every good site does it.

> ⭐ **Why it changes:** the code says "show the names in a row *on wide screens*, and show a
> hamburger *on narrow screens*." Those are the `md:` classes you've been using — `md:flex` means
> "flex, but only on medium screens and up." The site checks the screen size and picks a layout.

---

## Step 4 — The breakpoints you already used

Those `sm:` and `md:` prefixes on your own page are **breakpoints** — screen-size switches:

| Prefix | Kicks in at | Rough meaning |
|---|---|---|
| *(none)* | always | the phone/base look |
| `sm:` | ~640px+ | big phone / small tablet and up |
| `md:` | ~768px+ | tablet / laptop and up |
| `lg:` | ~1024px+ | big screens |

So `flex-col sm:flex-row` means "stack things in a column on a phone, put them in a row on bigger
screens." Your layout already does this — that's why it didn't fall apart on mobile. Now you know
the mechanism.

---

## Step 5 — Test YOUR site on a phone

Turn device mode on and put your own page in a phone size. Walk down it slowly and look for:

- **Text running off the right edge** (needing sideways scroll)
- **Things overlapping** or crammed together
- **Buttons too small** to tap with a thumb
- **An image spilling past the screen edge**

Found something? Good — you just caught a real bug before a real visitor did.

**The two most common fixes:**
- **An image too wide?** Add `max-w-full h-auto` to it — it shrinks to fit instead of overflowing.
- **A long unbroken word or email/link running off?** Add `break-all` (or `break-words`) so it can
  wrap. *(This is the exact fix if your contact email gets cut off.)*

Make any fixes your page needs. Test again in phone mode until it's clean.

---

## Step 6 — Watch the internet happen (Network tab)

Click the **Network** tab in dev tools, then **refresh your page.** Watch the list fill up — every
file your page loads shows up: your HTML, the fonts, Tailwind, your headshot.

Now, if you built the live-data button in Lesson 12: click it while the Network tab is open. **A new
line appears** — that's your `fetch` request going out to the internet and coming back. Click it to
see what came back.

> ⭐ **This is the request you wrote, made visible.** Everything a page loads or fetches shows up
> here. When something doesn't load, this tab is where you find out why.

---

## Step 7 — Get your report card (Lighthouse)

Chrome can grade your page automatically — the same tool real teams run before they ship.

1. Best on your **live GitHub Pages URL** (a truer test than Live Server).
2. Dev tools → **Lighthouse** tab (click the `»` if you don't see it).
3. Leave the defaults, click **Analyze page load**, wait ~30 seconds.

You get four scores out of 100: **Performance, Accessibility, Best Practices, SEO.**

> ⭐ **Don't chase a perfect 100 — read the list.** Under each score it names exactly what to fix, in
> plain words. Fix one or two, re-run, watch the number climb. Each fix teaches you something real.

**The usual things it flags** (and how to fix them):
- **Missing `alt` text on an image** → add a real description: `alt="Maria in front of a mural"`.
- **Low color contrast** → text too pale on its background; darken it.
- **No page description** → add this in your `<head>`, under the `<title>`:
  ```html
  <meta name="description" content="Maria Lopez — student web developer. My resume and projects.">
  ```

Fix at least one thing it finds, and re-run to watch your score go up.

---

## Save your work

If you made any fixes today, save them:

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Fix mobile issues and improve Lighthouse score"
```

**▶ Try it**
```
git save
```

Wait a minute, then check your live site on a phone — real device if you have one. It should hold up.

---

## If it didn't work

**Device mode makes everything tiny/zoomed weird.**
That's normal — it's simulating a high-resolution phone. Use the zoom dropdown at the top of device
mode to set it to 100% if you want a truer size.

**I can't find the Lighthouse tab.**
Click the `»` at the end of the dev tools tab row to reveal hidden tabs. If it's still missing, use
plain **Chrome** (not Edge) — Lighthouse is a Chrome feature.

**I fixed something in dev tools but it went back after refresh.**
That's expected — dev-tools changes are temporary (Lesson 14, Step 6). Make the *real* fix in VS
Code, save, and `git save`.

> **Still stuck?** Your site works. Testing and polishing is about making it *great*, not about
> unblocking the next step — do what you can and note the rest.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 15**.

*What did phone mode or Lighthouse catch that you hadn't noticed? What's one thing you fixed?*

**Done looks like:** you can test your site in phone mode, you understand why our showcase changes
shape on mobile, and you've fixed at least one real issue and improved a Lighthouse score.

Next up: **working together — Pull Requests and the class summary page** — `docs/lesson-16-collaborate.md`.
