# Lesson 12 — Pull live data from the internet

Everything on your page so far, you typed. Today your page reaches out to **another computer on the
internet**, asks it for something, and shows whatever comes back — live, fresh every time.

You'll build a button that fetches a **random dog photo** from a real public service. Silly on
purpose — it makes the magic obvious. The skill underneath is exactly how apps load your feed, the
weather, scores, prices, everything.

> ⭐ **This is the "whoa" lesson.** When that photo appears out of nowhere, you're doing the same
> thing every real app does: asking another computer for data and showing it. That's most of modern
> web development in one button.

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

Open your page with **Live Server**.

---

## Step 2 — Add the button and a place for the photo

Between the fences (bottom of the page is fine), add:

```html
<!-- Random dog widget -->
<div class="my-8 text-center">
  <button id="dog-btn" class="rounded border-2 border-brand px-5 py-2 transition hover:scale-105">
    Show me a dog 🐶
  </button>
  <img id="dog-img" src="" alt="A random dog" class="mx-auto mt-4 hidden max-h-80 rounded-lg shadow-lg">
</div>
```

Save. You'll see the button; the image is `hidden` until one arrives.

*(Bold layout? Swap `border-brand` for `border-pop` so the button shows up on your dark background.)*

---

## Step 3 — Write the fetch

Open **`script.js`**, scroll past `ONLY ADD YOUR OWN CODE BELOW THIS LINE`, and add:

```js
// RANDOM DOG ----------------------------------------------

document.getElementById('dog-btn').addEventListener('click', function () {

  // 1. Ask the dog service for a random photo.
  fetch('https://dog.ceo/api/breeds/image/random')

    // 2. When it answers, unpack the response into usable data.
    .then(function (response) { return response.json(); })

    // 3. Now we have the data — put the photo on the page.
    .then(function (data) {
      const dogImg = document.getElementById('dog-img');
      dogImg.src = data.message;          // the photo's web address
      dogImg.classList.remove('hidden');  // reveal it
    });
});
```

Save, refresh, and click the button. **A dog appears.** Click again — a different dog. Every one is
pulled live from the internet the instant you click.

---

## Step 4 — Understand the new idea

One genuinely new word today: **`fetch`**.

- **`fetch(...)`** means "go ask that web address for data." It takes a moment — the request travels
  to another computer and back — so the code doesn't wait around. It says *"when the answer comes,
  do this next,"* and that's what **`.then(...)`** is: **"then, once it's back, run this."**
- The service answers with a chunk of text. **`.json()`** turns that text into data your code can
  actually use — here, `data.message` is the photo's web address.
- You set that address as an image's `src`, and the browser loads the photo. Done.

> ⭐ **`fetch` → `.then` → use the data.** That's the whole shape of talking to the internet from
> code. Swap the web address and you can pull almost anything.

---

## Step 5 — Handle the "what if it fails" case

The internet isn't always there. Add one more `.then`'s cousin — **`.catch`** — so a dropped
connection shows a message instead of silently doing nothing. Update your code's ending:

```js
    .then(function (data) {
      const dogImg = document.getElementById('dog-img');
      dogImg.src = data.message;
      dogImg.classList.remove('hidden');
    })
    .catch(function () {
      alert('Could not reach the dog service — check your internet and try again.');
    });
```

> ⭐ **`.catch` runs only if something goes wrong.** Real apps always plan for the request failing —
> wifi drops, servers hiccup. Handling it is what separates a toy from something you'd ship.

---

## Optional — make it yours

The dog service is just one address. Swap the URL and the `.json()` field to pull something else:

- **Random joke:** fetch `https://official-joke-api.appspot.com/random_joke`, then show
  `data.setup` and `data.punchline` as text instead of an image.
- Search the web for **"free public API no key"** and try one. The pattern never changes:
  `fetch` → `.then` → use the data.

---

## Save your work

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add a live data widget"
```

**▶ Try it**
```
git save
```

Wait a minute, then click it on your **live site**. Your published page is now pulling live data from
another computer on the internet.

---

## If it didn't work

**Nothing happens when I click.**
Press `F12` → **Console** and read the red text. `null` errors mean an `id` doesn't match — check the
button is `id="dog-btn"` and the image is `id="dog-img"`, spelled exactly, in both the HTML and the
JavaScript.

**The button reacts but no photo shows.**
Check the image's `id` is `dog-img` and that you kept `dogImg.classList.remove('hidden')` — without
it the photo loads but stays hidden.

**I get the "could not reach" alert every time.**
Your internet is down or blocked. Try loading a normal website to confirm you're online. On some
school networks a filter can block these services — tell your instructor if so; it's not your code.

**Everything broke after I typed in `script.js`.**
A missing `)`, `}`, or `.` breaks the file. The `fetch` chain has a lot of brackets — count that
every `(` has a `)`. Delete it and retype slowly if you're not sure.

> **Still stuck?** Skip it and come back. Your site works fine without it — this is a bonus
> superpower, not a requirement for anything ahead.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 12**.

*Where does the dog photo actually come from when you click? Now that you can pull live data, what
would you want your page to fetch?*

**Done looks like:** a button on your live site that pulls a fresh photo from another computer on the
internet every time you click, and handles the case where the internet isn't there.

Next up: **making your page remember things** — `docs/lesson-13-remember.md`.
