# Lesson 11 — Make it interactive

In Lesson 5 you *read* some JavaScript and flipped a switch. Today you **write** a real feature from
scratch: a **lightbox** — click any image and it pops up big on a dark background, click again to
close. It's the thing every photo site and portfolio uses.

This lesson runs across two sessions if you need it. Take your time — this is the first thing you're
building yourself, not filling in.

> ⭐ **Every interactive feature on the web is the same three steps you'll use today:** find things
> on the page, listen for a click, change the page in response. Lightbox today, anything tomorrow.

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

Open your page with **Live Server**, side by side with your editor.

---

## Step 2 — Add the popup layer

First, the box that shows the enlarged image. Add this **once**, anywhere between the
`ONLY EDIT BELOW THIS LINE` and `ONLY EDIT ABOVE THIS LINE` fences — the bottom of your page is a
good spot:

```html
<!-- Lightbox popup (hidden until an image is clicked) -->
<div id="lightbox" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 p-4">
  <img id="lightbox-img" src="" alt="Enlarged image" class="max-h-full max-w-full rounded-lg">
</div>
```

Save. You won't see anything yet — it's `hidden` on purpose. It waits off-screen until you open it.

> ⭐ **`fixed inset-0` makes it cover the whole screen; `z-50` puts it on top of everything;
> `bg-black/80` is black at 80% see-through.** Those are all Tailwind classes you already know — a
> popup is just a full-screen box that's normally hidden.

---

## Step 3 — Mark which images can be clicked

On each image you want to be clickable, add the class **`zoomable`**. Start with your headshot:

```html
<img src="headshot.jpg" alt="..." class="... zoomable">
```

Add `zoomable` to any other images you have too (project pictures, a gallery). Just that one word,
added to the existing `class="..."` list.

> **Using the initials circle instead of a photo?** You don't have an `<img>` to click — add
> `zoomable` to any picture you *do* add later, or just watch it work with a classmate's photo for
> now. The code below is still worth reading.

---

## Step 4 — Write the JavaScript

Open **`script.js`** (you connected it in Lesson 5). Scroll to the bottom, past the line that says
`ONLY ADD YOUR OWN CODE BELOW THIS LINE`, and add this:

```js
// LIGHTBOX ------------------------------------------------

// 1. Find the popup and every image marked "zoomable".
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomables = document.querySelectorAll('.zoomable');

// 2. For each zoomable image, listen for a click.
zoomables.forEach(function (image) {
  image.style.cursor = 'zoom-in';                // hint that it's clickable
  image.addEventListener('click', function () {
    lightboxImg.src = image.src;                 // copy the clicked image into the popup
    lightbox.classList.remove('hidden');         // show the popup...
    lightbox.classList.add('flex');              // ...and center its contents
  });
});

// 3. Click anywhere on the dark background to close it.
lightbox.addEventListener('click', function () {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
});
```

Save, refresh, and click your headshot. It fills the screen. Click the dark area — it closes.

**You just built that.**

---

## Step 5 — Understand what you wrote

Read it back against these three sentences — this is the pattern behind *all* interactivity:

1. **Find the things** — `getElementById` grabs the popup; `querySelectorAll('.zoomable')` grabs
   *every* image with that class at once. `forEach` then does the same setup to each one.
2. **Listen** — `addEventListener('click', ...)` waits for a click and runs the code inside when it
   happens. You used this exact call in Lesson 5.
3. **Change the page** — `lightboxImg.src = image.src` copies the clicked photo into the popup, and
   `classList.remove('hidden')` reveals it. Same `classList` you used for dark mode.

> ⭐ **Nothing here is new machinery — it's Lesson 5's three tools, aimed at a bigger job.** Once you
> see that every feature is *find → listen → change*, you can build almost anything.

---

## Optional — go further

- **Close with the Escape key too.** Add this in `script.js`:

  ```js
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  });
  ```

- **Add a real gallery.** Put a few images in a grid between the fences, give each `zoomable`, and
  your lightbox already works on all of them — no new code needed. That's the payoff of
  `querySelectorAll`: it caught every one automatically.

---

## Save your work

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add a lightbox for my images"
```

**▶ Try it**
```
git save
```

Wait a minute, then click an image on your **live site**. It works there too.

---

## If it didn't work

**Clicking the image does nothing.**
Three checks, in order. (1) Does the image have `zoomable` in its `class`? (2) Is `script.js`
actually connected — do you have `<script src="script.js"></script>` near the bottom of your page
from Lesson 5? (3) Press `F12` → **Console** and read any red text. `Cannot read properties of null`
means it couldn't find the `#lightbox` box — check Step 2 is on the page and spelled `id="lightbox"`.

**The popup opens but won't close.**
The close listener (Step 4, part 3) is missing or the `id` doesn't match. The popup's `id` must be
exactly `lightbox` in both the HTML and the JavaScript.

**The image shows but isn't centered / is squished.**
When you show it, you need `flex` added (Step 4 does this with `classList.add('flex')`). If you
removed that line, the centering breaks.

**Everything broke after I typed in `script.js`.**
A missing `)`, `}`, or `;` stops the whole file. Delete what you just added, save, confirm the page
works again, then retype it slowly.

> **Still stuck?** Skip it and come back — your site works fine without it. This is the hardest
> lesson so far because you're writing, not filling in. Getting it half-working is still a win.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 11**.

*This was the first feature you wrote yourself instead of filling in a template. How did that feel
different? What part clicked for you?*

**Done looks like:** you click an image on your page and it opens big on a dark background, and you
can explain the find → listen → change pattern in your own words.

Next up: **pulling live information off the internet** — `docs/lesson-12-live-data.md`.
