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

## Make it yours — pick a different API

The dog service is just one address. Below is a **menu of safe, free APIs** — every one was tested
for this class, needs no sign-up, and works exactly like the dog. Pick whatever sounds fun.

> ⭐ **Only use the ones on this list.** There are thousands of APIs on the internet, but some need
> a paid key, some don't work from a webpage, and some aren't appropriate. These are all checked and
> ready — start here.

### First, one thing to know: images vs. text

APIs give back one of two kinds of thing, and each goes to a slightly different place:

- **An image** (like the dog) → you put the result into an **image's `src`**, exactly like Step 3:
  ```js
  document.getElementById('dog-img').src = data.message;
  ```
- **Text** (a joke, a fact) → you put it into a **paragraph's text** instead. Add a `<p id="output"></p>`
  next to your button, then:
  ```js
  document.getElementById('output').textContent = data.fact;
  ```

The menu below tells you, for each API, the exact **field to use** and whether it's an image or text.

### 🐶 Animals
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| A dog photo | `https://dog.ceo/api/breeds/image/random` | `data.message` | image |
| A fox photo | `https://randomfox.ca/floof/` | `data.image` | image |
| A cat photo | `https://cataas.com/cat?json=true` | `data.url` | image |
| A cat fact | `https://catfact.ninja/fact` | `data.fact` | text |

### 😂 Jokes & fun
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| A two-line joke | `https://official-joke-api.appspot.com/random_joke` | `data.setup` then `data.punchline` | text |
| A yes/no + gif | `https://yesno.wtf/api` | `data.answer` (text) and `data.image` (gif) | both |
| A random recipe | `https://www.themealdb.com/api/json/v1/1/random.php` | `data.meals[0].strMeal` and `data.meals[0].strMealThumb` | both |
| A made-up person | `https://randomuser.me/api/` | `data.results[0].name.first`, image `data.results[0].picture.large` | both |

### 🎮 Games & code
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| A Pokémon | `https://pokeapi.co/api/v2/pokemon/pikachu` *(swap the name)* | `data.name`, image `data.sprites.front_default` | both |
| **Your** GitHub stats | `https://api.github.com/users/YOUR-USERNAME` | `data.name`, `data.public_repos`, image `data.avatar_url` | both |

### 🔒 Tech & networking
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| Your internet info | `https://ipwho.is/` | `data.city`, `data.country`, `data.ip` | text |
| Live weather | `https://api.open-meteo.com/v1/forecast?latitude=33.8&longitude=-118.3&current_weather=true` | `data.current_weather.temperature` | text |

### 🎬 Movies & characters
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| A Studio Ghibli film | `https://ghibliapi.vercel.app/films` | `data[0].title`, `data[0].description` | text |
| A Disney character | `https://api.disneyapi.dev/character` | `data.data[0].name` | text |
| A Harry Potter character | `https://hp-api.onrender.com/api/characters` | `data[0].name`, image `data[0].image` | both |

### 📚 Words & name games
| What you get | URL to fetch | Use this field | Type |
|---|---|---|---|
| A word's definition | `https://api.dictionaryapi.dev/api/v2/entries/en/happy` *(swap the word)* | `data[0].meanings[0].definitions[0].definition` | text |
| Guess age from a name | `https://api.agify.io/?name=YOUR-NAME` | `data.age` | text |
| Guess gender from a name | `https://api.genderize.io/?name=YOUR-NAME` | `data.gender` | text |
| Guess where a name is from | `https://api.nationalize.io/?name=YOUR-NAME` | `data.country[0].country_id` | text |
| A trivia question | `https://the-trivia-api.com/v2/questions?limit=1` | `data[0].question.text`, `data[0].correctAnswer` | text |

### Not sure which? Go with what you're into:
- **Into games or coding?** Try **Pokémon** or **your own GitHub stats**.
- **Into tech or networking?** Try **your internet info** — it shows your own city and connection.
- **Into animals?** Any of the **dog / fox / cat** ones.
- **Into movies?** **Ghibli**, **Disney**, or **Harry Potter**.
- **Love words or facts?** **Word definition**, **the name games**, or **trivia**.

> ⭐ **The code is always the same three steps** no matter which you pick: `fetch` the URL →
> `.then` turn it into data → put a field on the page. You already wrote it once for the dog. Swap
> the URL and the field, and you can pull almost anything.

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
