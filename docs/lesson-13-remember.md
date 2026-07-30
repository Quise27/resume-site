# Lesson 13 — Make your page remember

Right now, every time someone reloads your page, it forgets everything. Today you give it a **memory**
that survives a refresh — even closing the browser and coming back tomorrow.

You'll build a greeting that asks a visitor's name once, then welcomes them back by name every time
after. The tool is called **localStorage**, and it's how sites remember your dark-mode choice, your
login, what's in your cart.

> ⭐ **A page's memory normally lasts until you reload — then it's wiped.** `localStorage` is a
> little notebook the browser keeps on the visitor's own computer. Write to it, and it's still there
> next time. That's real persistence.

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

## Step 2 — Add the greeting and a name box

Between the fences, near the top of your page is nice (so people see it first):

```html
<!-- Remembers the visitor -->
<div class="my-6 text-center">
  <p id="greeting" class="mb-3 text-lg font-bold"></p>
  <input id="name-input" placeholder="What's your name?"
         class="rounded border-2 border-brand px-3 py-2">
  <button id="name-save" class="rounded border-2 border-brand px-4 py-2 transition hover:scale-105">
    Save
  </button>
</div>
```

Save. You'll see the box; the greeting is empty for now.

*(Bold layout? Swap `border-brand` for `border-pop`.)*

---

## Step 3 — Write the memory

Open **`script.js`**, scroll past `ONLY ADD YOUR OWN CODE BELOW THIS LINE`, and add:

```js
// REMEMBER THE VISITOR ------------------------------------

const greeting = document.getElementById('greeting');

// 1. When the page loads, check the notebook for a saved name.
const savedName = localStorage.getItem('visitorName');
if (savedName) {
  greeting.textContent = 'Welcome back, ' + savedName + '! 👋';
}

// 2. When they click Save, write their name into the notebook.
document.getElementById('name-save').addEventListener('click', function () {
  const name = document.getElementById('name-input').value;
  localStorage.setItem('visitorName', name);          // save it
  greeting.textContent = 'Welcome back, ' + name + '! 👋';
});
```

Save, refresh, type your name, click **Save**. The greeting appears.

Now the real test: **reload the page.** The greeting is *still there* — it remembered you, with no
name typed. Reloading normally wipes everything, but not this.

---

## Step 4 — Understand the two commands

localStorage is a notebook with just two moves:

- **`localStorage.setItem('visitorName', name)`** — write something down under a label. Here the
  label is `visitorName` and the value is whatever they typed.
- **`localStorage.getItem('visitorName')`** — read back whatever's under that label. If nothing was
  ever saved, you get `null`, which is why Step 3 checks `if (savedName)` first — only greet them if
  a name is actually there.

That's it. Write with `setItem`, read with `getItem`. The browser keeps the notebook on the
visitor's computer, so it's there next visit.

> ⭐ **The label matters.** `setItem` and `getItem` must use the *exact same* label —
> `'visitorName'` in both. Save under one label and read from another and you'll never find it, the
> same way a note filed under the wrong name is lost.

---

## Step 5 — Prove it really persists

Do this and watch:

1. Type your name, click Save. Greeting appears.
2. **Close the whole browser tab.** Open your page fresh again.
3. The greeting is *still there.*

> ⭐ **That's the difference between a page and an app.** It knows who you are without asking again.
> A "Clear" button that runs `localStorage.removeItem('visitorName')` would wipe the notebook — try
> adding one if you want.

---

## Optional — remember something better

A name is just the demo. `localStorage` can remember anything:

- **The dark-mode choice from Lesson 5**, so the page opens in the mode they last used.
- A **favorite color** they pick, applied every visit.
- A **counter** of how many times they've visited (read it, add one, save it back).

Same two commands every time: `setItem` to remember, `getItem` to recall.

---

## Save your work

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Make my page remember the visitor"
```

**▶ Try it**
```
git save
```

Wait a minute, then try it on your **live site** — type your name, reload, and watch it remember you
on the real internet.

---

## If it didn't work

**The greeting never appears.**
Press `F12` → **Console** for red text. A `null` error means an `id` doesn't match — check
`greeting`, `name-input`, and `name-save` are spelled the same in the HTML and the JavaScript.

**It greets me but forgets after I reload.**
The `getItem` label doesn't match the `setItem` label. Both must be exactly `'visitorName'`. Also
confirm the load-time check (Step 3, part 1) is actually in your file — that's the part that runs on
refresh.

**It shows "Welcome back, !" with no name.**
You saved an empty box. Type a name *before* clicking Save. (Real apps check for this — an
`if (name)` around the save would prevent it. Try adding that.)

**Everything broke after I typed in `script.js`.**
A missing bracket or quote. Delete what you added, save, confirm the page works, retype slowly.

> **Still stuck?** Skip it and come back. Nothing ahead depends on this — it's another tool in the
> box, not a gate.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 13**.

*What's the difference between something a page remembers and something it forgets on reload? What
would you want your page to remember about a visitor?*

**Done looks like:** your page asks a visitor's name once, then greets them by name every visit after
— surviving a reload and even a full browser restart.

Next up: **the developer tools — seeing inside your own code** — `docs/lesson-14-devtools.md`.
