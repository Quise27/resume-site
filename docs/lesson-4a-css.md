# Lesson 4a — CSS

Your page works. It's also grey text on a white background, stacked in one column, and it looks
like it's from 1994. That's not a mistake. HTML describes **structure** and nothing else.

CSS is the part that makes it look like something.

> **This lesson is mostly reading.** There's one thing to try at the end. The typing comes in
> Lesson 4b. Read this first anyway, because 4b will make almost no sense otherwise.

---

## What CSS actually is

**CSS is a list of rules that say how things should look.**

Every rule has the same three parts:

```css
h1 {
  color: navy;
}
```

- **`h1`** — the **selector**. *Which* thing on the page this applies to.
- **`color`** — the **property**. *What* you're changing about it.
- **`navy`** — the **value**. *What you're changing it to.*

Read out loud: *"Find every `h1`. Set its color to navy."*

That's the entire language. Thousands of properties exist, but every single one is that same
`property: value;` shape inside a `selector { }` block.

---

## The four properties that do most of the work

You'll meet dozens eventually. These four cover most of what a page needs.

### 1. `color` — the color of text

```css
p {
  color: #1B1B1B;
}
```

That `#1B1B1B` is a **hex code**: a `#` followed by six characters that describe a color. `#000000`
is pure black, `#FFFFFF` is pure white, and everything else is somewhere in between.

> ⭐ **`#1B1B1B` is not a random choice.** It's a near-black that sits at a **17:1 contrast ratio**
> against white. Contrast ratio measures how easy text is to read. Anything above 7:1 is considered
> excellent; a lot of real websites ship body text at 3:1 or worse and are genuinely hard to read.
> You'll see this exact value again in 4b, and it's locked so nobody can accidentally ship grey
> text nobody can read.

### 2. `font-size` — how big text is

```css
h1 {
  font-size: 36px;
}
```

`px` means pixels. There's a second unit you'll see called `rem`, which means *"relative to the
browser's base font size."*

The difference matters more than it sounds. If someone has increased their default text size
because they have trouble reading small text, `rem` respects that setting and `px` ignores it
completely. Sites built entirely in `px` are quietly unusable for those people.

### 3. `padding` — breathing room *inside* a box

```css
.card {
  padding: 16px;
}
```

Every element on a page is a rectangle. `padding` is space **inside** that rectangle, between its
edge and its content.

There's a partner property, `margin`, which is space **outside** the rectangle, pushing other
things away.

> ⭐ **Padding is inside, margin is outside.** Padding pushes the walls out from your content;
> margin pushes other people away from your walls. Nearly every "why is this spacing weird" problem
> is these two being confused.

### 4. `display: flex` — putting things in a row

By default, HTML stacks block elements vertically. One thing, then the next thing, down the page.
That's why your site is a single column right now.

```css
.row {
  display: flex;
  gap: 16px;
}
```

`display: flex` tells a container to lay its children out **in a row instead of a stack**, and
`gap` sets the space between them. This one property is responsible for most horizontal layout on
the modern web.

Two companions you'll see constantly:

```css
.row {
  display: flex;
  justify-content: center;  /* position along the row (left to right) */
  align-items: center;      /* position across the row (top to bottom) */
}
```

---

## The cascade, and why it defeats people

CSS stands for **Cascading** Style Sheets. The "cascading" part is the thing that makes CSS hard,
and it's worth understanding before you meet it in the wild.

**The problem:** what happens when two rules disagree?

```css
p { color: navy; }
p { color: red; }
```

The paragraph turns red. Later rules beat earlier ones.

Fine. But now:

```css
p            { color: red; }
.intro       { color: navy; }
#top-note    { color: green; }
```

If one paragraph matches all three, what color is it?

**Green.** Not because it's last, but because CSS scores selectors by how *specific* they are. An
ID (`#top-note`) outranks a class (`.intro`), which outranks a plain tag (`p`). Order only breaks
ties between rules of equal specificity.

> ⭐ **This is the thing that defeats beginners, and it's not your fault when it does.**
> You write a rule. It's correct. It does nothing. Somewhere else in the file, a more specific
> selector is quietly winning, and there is no error message telling you so. Nothing is broken,
> nothing turns red, it just silently doesn't apply.

It gets worse in practice. Real sites accumulate thousands of lines of rules written by different
people at different times, all competing. The usual "fix" is `!important`, which forces a rule to
win, which then causes the next person to need a bigger hammer. Professional codebases genuinely
suffer from this.

**None of this means CSS is bad.** It's a deliberate design that makes site-wide theming possible.
But it does mean that "why isn't my style applying" is one of the most common and most frustrating
questions in web development.

---

## Where this is going

In Lesson 4b you'll use **Tailwind**, which is CSS with a different delivery method. Instead of
writing rules in a separate file and hoping the right one wins, you attach small pre-made classes
directly to the element:

```html
<p class="text-ink text-base p-4">Hello</p>
```

That's the same as writing `color: #1B1B1B; font-size: 1rem; padding: 1rem;` — just applied
directly to that one paragraph.

> ⭐ **Tailwind is not easier to understand than CSS. It's easier to not break.**
> Everything you just read still applies underneath. What changes is that a class only ever affects
> the one element you put it on, so there's no cascade fight and no rule silently losing to a rule
> somewhere else in a file you've never opened.
>
> This is exactly why you learned real CSS first. When you write `p-4`, you should know that means
> padding, that padding is space inside the box, and that it's `1rem` not `16px`.

---

## Try one thing

You don't need to write any CSS yet, but you should see the cascade with your own eyes once.

**▶ Try it**

1. Open your page with Live Server.
2. Right-click anywhere on the page and choose **Inspect**. A panel opens. This is the same tool
   professional developers use every day.
3. Click the arrow icon at the top-left of that panel, then click your name on the page.
4. On the right you'll see the CSS rules applying to it.

Look for any rule with a **line through it**. That's a rule that lost. The browser is showing you
the cascade resolving in real time, and which rule won.

*Nothing is broken. This is normal on every website on the internet.*

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 4a**.

Write it in Markdown, with a `##` heading and at least one **bold** thing.

*What's the difference between padding and margin? And in your own words, why does the cascade make
CSS frustrating?*

Next up: **Tailwind, and actually making your page look good** — `docs/lesson-4b-tailwind.md`
