# Lesson 6 — Your real resume

Everything on your page right now is placeholder text. Today you replace all of it with your own
real information.

**There is no new code in this lesson.** No new tags, no new classes, no new commands. Today is
writing — and most people find that harder than the technical part. That's normal.

> ⭐ **This is the session where the page stops being an exercise.** Up to now you've been
> practising. After today it's a real page about a real person that you could send to a teacher, a
> parent, or someone hiring.

---

## Step 1 — Get today's lesson

**▶ Try it**
```
cd Documents\SummerYouthProject
```

**▶ Try it**
```
pwd
```

The path must end in **`SummerYouthProject`**. If it doesn't, commands will fail with
`fatal: not a git repository`.

**▶ Try it**
```
git pull --no-edit lessons main
```

> ⭐ **Notice the `--no-edit` — that's new.** Without it, git sometimes opens a text editor asking
> you to name your download, and if you close it the wrong way your project gets stuck half-finished.
> `--no-edit` answers that question for you. **Use this version of the command from now on.**

---

## Step 2 — Open your page

You want the file that Live Server actually displays.

For most of you that's **`template/index.html`**.

> **Check the tab.** Whatever file you edit, its name must match the page you're previewing. If your
> page lives somewhere else — some of you are working in a file inside `template/layouts/` — then
> *that* is your page and that's the one to edit. Editing the wrong file is the number one reason
> people say "I changed it and nothing happened."

Right-click your page in VS Code's file list → **Open with Live Server**, and keep the browser
window next to VS Code so you can watch changes land as you save.

---

## Step 3 — What you're replacing

Here's everything on your page that's still fake. You'll work through them in order.

| Placeholder currently on your page | Becomes |
|---|---|
| `Your Name` (browser tab) | Your name |
| `Your Name` (the big heading) | Your name |
| `One line about who you are` | Your one-line description |
| `Two or three sentences about yourself...` | Your about section |
| `Project name` / `Another project` | Two real things you've made |
| The **sentence under each** — `What it is and what you used...` and `School projects count...` | What each one actually is |
| `HTML` / `CSS` / `Learning JavaScript` | Your real skills |
| `Email me` + `href="#"` | A working contact link |
| `© 2026 Your Name` | Your name |

**Using the bold layout?** You also have a `Portfolio` label above your name — change or delete it.
**Using the fun layout?** You also have `Want to talk? Say hello.` above your contact button.

> ⭐ **Change the words *between* the tags, not the tags themselves.** Edit
> `<h1 ...>Your Name</h1>` into `<h1 ...>Jordan Rivera</h1>`. Leave every `<`, `>`, and
> `class="..."` exactly as it is. If you delete a bracket by accident, press `Ctrl+Z`.

---

## Step 4 — Your name

There are three places your name appears. Do all three.

**1. The browser tab.** Near the top of the file, around line 6:

```html
<title>Your Name</title>
```

Change it to your name. This is what shows on the browser tab and what Google would display.

> **Yes, this one is above the `ONLY EDIT BELOW THIS LINE` comment.** Lesson 5 said Steps 3 and 4
> were the only times you'd go up there — this is one more. It's a single word between two tags and
> nothing near it can break your styling.

**2. The big heading.** Find `Your Name` in a `<h1>` tag further down and replace it.

> **Bold layout only:** yours reads `Your<br>Name`. The `<br>` forces the line break that makes the
> big stacked look. Keep it and put your name around it — `Jordan<br>Rivera` — or delete the `<br>`
> if your name looks better on one line.

**3. The footer**, at the very bottom: `© 2026 Your Name`.

**4. Your photo's description.** Find the line with your headshot on it:

```html
<img src="headshot.jpg" alt="Your name" ...>
```

Change `alt="Your name"` to `alt="Jordan Rivera"` — your actual name.

> ⭐ **`alt` is the text that gets read aloud to someone who can't see the image**, by the software
> blind people use to browse. It's also what shows if the photo fails to load. It costs you five
> seconds and it's the difference between your page working for everyone and only working for
> some people. Real sites get this wrong constantly. Yours won't.

*Using the initials circle instead of a photo? You don't have an `<img>` line — skip this one.*

**Then your one-liner.** Replace `One line about who you are` with a short description of yourself.
Aim for five to ten words.

Good ones are specific:

- *High school student learning web development*
- *Future software engineer. Currently obsessed with game design.*
- *Building things on the internet since this summer*

Save, and look at the browser. Your name is on your website.

---

## Step 5 — About

Replace `Two or three sentences about yourself...` with two or three real sentences.

Answer any of these — you don't need all of them:

- Who are you? (Year in school, what you're into.)
- What are you working on or learning right now?
- What do you want to do next?

**Write it like you'd explain yourself to someone you just met.** Not a formal essay. If reading it
back sounds nothing like you, rewrite it.

---

## Step 6 — Projects

Two entries. Each is a title and a sentence about what it is.

### "I don't have any projects"

You have more than you think. Define the word generously:

- **School projects count.** Anything you built, designed, researched, or presented.
- **Personal things count.** A game mod, a playlist you curate, something you fixed or took apart.
- **This website counts.** You built it from scratch over several sessions. It's a real project and
  it's the one you can talk about best.
- **What you're learning counts.** *Learning JavaScript* and *Building my first website* are honest,
  real entries.

### Write it plainly

Say what it is and what you used:

> **My resume website**
> Built from scratch with HTML, Tailwind CSS, and JavaScript. Includes a dark mode toggle I added
> myself.

> **Science fair project on water quality**
> Tested samples from three sites and presented the results to my class.

> ⭐ **Be honest rather than impressive.** A truthful beginner resume reads better than an inflated
> one, and people can always tell the difference. "Learning JavaScript" is a stronger entry than
> "JavaScript expert" — everyone reading it knows how long you've been at this.

---

## Step 7 — Skills

Three entries, already sitting there as `HTML`, `CSS`, and `Learning JavaScript`.

Those are probably true now. Keep the ones that are, change the ones that aren't, and add anything
else you can honestly claim.

Beginner skills are real skills. All of these are fine:

`HTML` · `CSS` · `Tailwind` · `Learning JavaScript` · `Git & GitHub` · `VS Code` · `Public speaking`
· `Teamwork` · `Microsoft Excel` · `Photography` · `Spanish`

**To add one**, copy an existing line and change the words between the tags. Copy the whole line
including the `<li ...>` and `</li>` so it keeps the same styling.

---

## Step 8 — Contact

This is the only place you write anything technical today.

Right now your button says `Email me` and points at `href="#"` — which means *go nowhere.* Find it:

```html
<a href="#"
```

Change the `#` to `mailto:` followed by your email address:

```html
<a href="mailto:jordan.rivera@example.com"
```

`mailto:` tells the browser to open a new email addressed to you. Leave everything after that on the
line — all the `class="..."` styling — exactly as it is.

**Rather use GitHub?** Point it at your profile instead and change the button text to `Find me on
GitHub`:

```html
<a href="https://github.com/YOUR-USERNAME"
```

### Test it

Save, refresh, and click your own button. An email window should open, or GitHub should load. **A
contact link that doesn't work is worse than no contact link**, so check it rather than assuming.

---

## Step 9 — The privacy pass

Read your whole page again, out loud, looking only for things that shouldn't be public.

**Leave off:**

- Your home address
- Your phone number
- Your school's name and your exact schedule together
- Anything about another person — a friend's name, a photo with someone else in it — unless they
  said yes
- Your date of birth

**An email address or a GitHub profile link is the normal way** to let someone reach you. That's it.

> ⭐ **Assume anything on this page can be seen by anyone.** Not because something has gone wrong,
> but because that's what putting a page on the internet means. Professional resumes leave this
> information off for exactly the same reason. When in doubt, leave it out.

---

## Step 10 — Check it on a phone

More people will open your page on a phone than on a laptop.

You don't need an actual phone. **Drag the right edge of your browser window slowly to the left**,
until the window is about as narrow as a phone.

Watch for:

- Text running off the edge of the screen
- Things overlapping each other
- Anything too small to read

The layouts are built to handle narrow screens, so most of it will just work. The usual culprit is
one long unbroken piece of text — a full web address like
`https://github.com/myname/my-really-long-project-name` can't wrap and pushes the page sideways.

**The fix:** make it a link with shorter words. Instead of showing the whole address, show
`My GitHub` and put the address in the `href`.

Drag the window back when you're done.

---

## Step 11 — The final sweep

The most common way to finish this lesson with placeholder text still on your page is simply missing
one.

In VS Code, press **`Ctrl+F`** and search your page for each line below. **Every one should return
zero results.**

| Search for | Catches |
|---|---|
| `Your Name` | Browser tab, big heading, footer — **and your photo's `alt` text** |
| `One line about` | Your one-liner |
| `Two or three sentences` | Start of your about section |
| `what you are interested in` | **End** of your about section |
| `Project name` | First project title |
| `What it is and` | First project **description** |
| `Another project` | Second project title |
| `School projects count` | Second project **description** |
| `href="#"` | A contact link that still goes nowhere |

**One more, depending on your layout:**

| Layout | Also search for |
|---|---|
| **bold** | `Your<br>` and `what you are into` |
| **fun** and **serious** | nothing extra |

**Bold layout, read this one:** your big heading is written `Your<br>Name`, so a search for
`Your Name` skips straight past it. It's the placeholder people on the bold layout leave behind.

### These are fine to keep

Not everything left over is a placeholder. **`Email me`** is a perfectly good button label, and so
are **`Portfolio`** on the bold layout and **`Want to talk? Say hello.`** on fun. None of them claim
to be facts about you — they're just words on a button or a heading.

Keep them, or change them to something you like better. Either is right.

> ⭐ **The descriptions are what people miss.** It's easy to replace `Project name` and leave the
> sentence underneath it still saying *"What it is and what you used to build it."* The three rows
> above about **descriptions** and the **end** of your about section are the ones to double-check.

If a search finds something, you missed one. Fix it and search again.

---

## Save your work

Check you're in the right folder:

```
pwd
```

Should end in `SummerYouthProject`.

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Add my real resume content"
```

**▶ Try it**
```
git save
```

`git save` sends your work to both your own repo and the class showcase. If it errors on the
showcase part, see `docs/setup-showcase-remote.md` — your own repo still got your work either way.

### Verify it uploaded

> ⭐ **A command with no error has not necessarily done what you think.** Thirty seconds now.

1. Go to `github.com/YOUR-USERNAME/my-resume-site` and refresh.
2. You should see **"Updated a few seconds ago."**
3. Open `template` → click your page file → **read it.** Your real name should be there, not
   `Your Name`.

### Screenshot

Take a screenshot of your finished resume and save it as `progress-screenshots/4-resume.png`.

**Then line all four up:** `1-html.png` → `2-css.png` → `3-js.png` → `4-resume.png`. Plain text, then
styled, then interactive, then real. That's your whole month in four pictures — it's worth thirty
seconds to look at them side by side.

---

## If it didn't work

**I changed the text but the page still shows the old words.**
Two causes. Either you didn't save — press `Ctrl+S`, the white dot on the editor tab means unsaved —
or you're editing a different file than Live Server is showing. Check the filename on the editor tab
matches the page in your browser.

**The page looks broken now — text is huge, or everything's in the wrong place.**
You deleted a `<` or `>` while editing. Press `Ctrl+Z` repeatedly until it looks right, then edit
again more slowly. Change only the words *between* the tags.

**My contact button doesn't open anything.**
Check for the colon in `mailto:` — `mailto jordan@...` won't work, `mailto:jordan@...` will. Also
check you didn't delete the closing quote after your address.

**Text runs off the side when the window is narrow.**
One long unbroken string, almost always a full web address. See Step 10.

**Everything's fine but it feels bad and I hate what I wrote.**
Completely normal, and not a technical problem. Get real words in every section first, then improve
one thing. A finished page you'll tweak later beats a perfect paragraph and five empty sections.

> **Still stuck?** Skip it and come back — nothing here is a hard prerequisite for the next thing.
> Your page works. This lesson only changes what it says.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 6**.

*Which section was hardest to write, and why? Is there anything on the page now that you're
actually proud of?*

**Done looks like:** no placeholder text anywhere, real content in every section, your photo or
initials showing, nothing breaking on a narrow screen — and you'd be willing to show it to someone
you respect.

Next up: **a second page, your own idea** — `docs/lesson-7-second-page.md`.
