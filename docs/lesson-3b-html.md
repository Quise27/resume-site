# Lesson 3b — HTML basics

> **Do `docs/lesson-3a-terminal.md` first** if you haven't — you'll need the terminal to pull
> this lesson down and to open your project.

## What HTML actually is

HTML (HyperText Markup Language) describes the **structure** of a webpage —
what's a heading, what's a paragraph, what's a list, what's an image. It has
no styling at all by itself. That's on purpose — next lesson (CSS) is where
it starts looking good.

## The tags you need for this lesson

```html
<h1>Biggest heading</h1>
<h2>Smaller heading</h2>
<p>A paragraph of text.</p>
<ul>
  <li>A bullet point</li>
  <li>Another bullet point</li>
</ul>
<a href="https://github.com">A clickable link</a>
<img src="photo.jpg" alt="description of the photo">
```

Every tag that opens (`<p>`) needs to close (`</p>`). The browser doesn't
usually complain if you forget, but nothing may show up.

## What's a comment?

A comment is a note in the code that the browser completely ignores — it's
there for humans, not the computer. In HTML it looks like
`<!-- this is a comment -->`. You'll see these marking spots where you're
meant to type your own content.

Every language writes comments a little differently — HTML uses
`<!-- -->`, but CSS and JavaScript use a different style. You'll see that
in the next couple of lessons. Same idea, different syntax.

## Your task

1. Pull the latest — you should now have `template/index.html` in your
   project. Open it.
2. It's a bare skeleton with `<!-- TODO -->` comments marking where your
   resume content goes: your name, a short bio, a projects list, contact
   info.
3. Look for the `<!-- ONLY EDIT BELOW THIS LINE -->` and
   `<!-- ONLY EDIT ABOVE THIS LINE -->` comments — everything between them
   is yours to fill in. Everything outside them is boilerplate every page
   needs, so leave that alone.
4. Fill in the `TODO` sections with your real (or placeholder) info.
5. Right-click `template/index.html` → **Open with Live Server** to see it
   in your browser. It'll auto-refresh every time you save.

It's going to look extremely plain right now — no colors, no layout, just
text stacked top to bottom. That's expected! Next lesson fixes that.

## Before you move on

1. Take a screenshot of your page as it looks right now (plain, unstyled).
   Save it as `progress-screenshots/1-html.png` in your own repo (create
   that folder if it doesn't exist). This is your "before" picture — CSS is
   about to make the difference obvious.
2. Add a couple sentences to `reflections.md` under **Lesson 3**.

Next up: **CSS** — `docs/lesson-4-css.md`.
