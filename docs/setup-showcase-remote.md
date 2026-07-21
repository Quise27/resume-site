# Setup — The Showcase Remote

You're adding **one more connection** to your project. It takes about two minutes, you do it
**once**, and after that a single command saves your work everywhere it needs to go.

> **Read this whole page before typing anything.** It's short, and knowing what you're doing makes
> the setup take two minutes instead of twenty.

---

## What you already have

Your project folder is connected to **two** places on GitHub, set up back in Lesson 1:

| Nickname | Points at | What you do with it |
|---|---|---|
| `lessons` | The class lesson repo | **Pull from it** — this is how new lessons arrive |
| `origin` | **Your own** repo | **Push to it** — this is where your work goes |

A **remote** is just a nickname for a GitHub address. Two nicknames, two directions: lessons come
*down*, your work goes *up*.

## What you're adding

A third nickname: **`showcase`** — a shared class repo where a copy of everyone's work lives.

Two reasons it exists:

1. **Your repo is yours**, which also means if something happens to your account or you delete
   something by accident, it's gone. This is a second copy.
2. **It puts everyone's work in one place** for building the class site at the end.

Think of `origin` as your backpack and `showcase` as the classroom shelf. Same work, two places.

> ⭐ **You get your own private branch.** Nobody else can touch it and you can't touch theirs.
> That's what makes this safe.

---

## Step 0 — Be in the right folder

**Every command below only works inside your project folder.** If you're somewhere else, you'll get
`fatal: not a git repository`, which just means "you're standing in the wrong place."

**▶ Try it**

```
cd Documents\SummerYouthProject
code .
```

Then check where you are:

```
pwd
```

You should see a path ending in `SummerYouthProject`. If it doesn't, you're in the wrong folder —
`cd` there before going on.

*(In Git Bash use forward slashes: `cd Documents/SummerYouthProject`)*

---

## Step 1 — Add the connection

**▶ Try it** — copy exactly, nothing to change

```
git remote add showcase https://github.com/cjackson-coc/summer-youth-26-showcase.git
```

Nothing prints. That's normal — most git commands stay silent when they work.

## Step 2 — Claim your branch

This is the **one command where you change something.** Replace `YOURNAME` with your own first
name, lowercase, no spaces.

**▶ Try it**

```
git config remote.showcase.push refs/heads/main:refs/heads/student/YOURNAME
```

So if your name is Jordan:

```
git config remote.showcase.push refs/heads/main:refs/heads/student/jordan
```

**What it does:** tells git *"whenever I push to showcase, put my work on a branch called
`student/jordan`."* A **branch** is your own separate copy inside a shared repo.

> ⭐ **This is why nobody can overwrite your work and you can't overwrite theirs.**
> You never share a file with another student.

## Step 3 — Set up `git save`

**▶ Try it** — copy exactly

```
git config --global alias.save "!git push origin main && git push showcase"
```

## What `git save` is (this is new — read it)

Up to now you've used `git push`, which sends your work to **one** place: your own repo.

You now have **two** places to send it, so you'd have to type two commands every time. Instead,
that line above creates a **shortcut** called `git save` that runs both for you.

| Command | Sends your work to |
|---|---|
| `git push` | your repo only |
| **`git save`** | **your repo *and* the showcase** |

`save` isn't a built-in git command — it's a nickname you just created. That's what `alias` means.

**From now on, `git save` replaces `git push`.** Your saving routine becomes:

```
git add .
git commit -m "what you changed"
git save
```

Same first two commands as always. Only the last one changes.

> **If `git save` ever errors**, plain `git push` still works and your own repo still gets your
> work. Use that and keep going.

---

## Step 4 — Check the setup worked

**▶ Try it**

```
git remote -v
```

You should see **three** nicknames (six lines — each appears twice, once for fetch, once for push):

```
lessons   https://github.com/cjackson-coc/SummerYouthProject.git (fetch)
lessons   https://github.com/cjackson-coc/SummerYouthProject.git (push)
origin    https://github.com/YOUR-USERNAME/my-resume-site.git (fetch)
origin    https://github.com/YOUR-USERNAME/my-resume-site.git (push)
showcase  https://github.com/cjackson-coc/summer-youth-26-showcase.git (fetch)
showcase  https://github.com/cjackson-coc/summer-youth-26-showcase.git (push)
```

**Check that `origin` has YOUR username in it.** If `origin` points at the class repo, something got
mixed up back in Lesson 1 — flag it before going further.

## Step 5 — Save, then verify it actually worked

**▶ Try it**

```
git add .
git commit -m "Set up showcase remote"
git save
```

> ⭐ **Now go look at it in your browser. Don't skip this.**
> A command that prints no error has *not* necessarily done what you expected. Checking takes
> fifteen seconds and catches problems while they're still easy to fix.

**Check 1 — your own repo**

1. Go to `github.com/YOUR-USERNAME/my-resume-site`
2. Refresh the page.
3. You should see your files, and near the top a message like *"Updated a few seconds ago."*
4. Click into `template` and confirm `index.html` is there.

**Check 2 — the showcase**

1. Go to `github.com/cjackson-coc/summer-youth-26-showcase`
2. Click the **branch dropdown** near the top left. It probably says `main`.
3. **Find your branch in the list:** `student/YOURNAME`
4. Click it. You should see your files.

**If your branch isn't in that list, your work did not reach the showcase.** Check the
troubleshooting below.

---

## The one rule

> ⭐ **Never `git pull` from showcase. Ever.**
> `git save` pushes **to** it. Nothing ever comes back **from** it.

The showcase holds everyone's branches. Pulling from it tries to mix all of that into your project
and creates a tangle that takes a while to undo. You never need anything from it — everything you
need comes from `lessons`.

**For the rest of the program:**

| To do this | Type this |
|---|---|
| Get a new lesson | `git pull lessons main` |
| Save your work | `git save` |

---

## If it didn't work

**`fatal: not a git repository`**
Wrong folder. Go back to Step 0.

**`error: remote showcase already exists`**
Step 1 already ran successfully. Skip to Step 2. Run `git remote -v` to confirm the address is right.

**`remote: Permission to ... denied`**
Your account hasn't been added to the showcase repo yet. Nothing you can fix — flag it and keep
working. **Your work is still safe** because `git push` to your own repo still works. Use plain
`git push` until you're added.

**`git: 'save' is not a git command`**
Step 3 didn't take. Run it again, and check you copied the whole line including the `!` right after
the opening quote. That exclamation mark matters.

**`src refspec main does not match any`**
You have no commits yet. Run `git add .` and `git commit -m "first commit"`, then `git save`.

**Your branch isn't showing in the showcase branch list**
Re-run Step 2, checking the spelling carefully — it's easy to typo `refs/heads`. Then
`git save` again and refresh the branch list.

> **Still stuck?** Skip it and come back. Nothing here blocks the next lesson. Keep using plain
> `git push` so your work keeps saving to your own repo, and set the showcase up later.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Showcase Setup**.

*In your own words: what's the difference between `origin` and `showcase`? Why does everyone get
their own branch instead of sharing one?*
