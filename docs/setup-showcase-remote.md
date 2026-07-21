# Setup — The Showcase Remote

You're going to add **one more connection** to your project. It takes about two minutes, you do
it **once**, and after that it runs itself.

> **Read this whole page before you type anything.** It's short. Knowing what you're doing makes
> the actual setup take two minutes instead of twenty.

---

## What you already have

Right now your project folder is connected to **two** places on GitHub. You set these up in
Lesson 1:

| Nickname | Points at | What you do with it |
|---|---|---|
| `lessons` | Cam's lesson repo | **Pull from it** — this is how new lessons arrive |
| `origin` | **Your own** repo | **Push to it** — this is where your work goes |

A **remote** is just a nickname for a GitHub address. Two nicknames, two directions: lessons come
*down*, your work goes *up*.

## What you're adding

A third nickname: **`showcase`**.

| Nickname | Points at | What you do with it |
|---|---|---|
| `showcase` | The class showcase repo | **Push to it** — a backup Cam can see |

## Why bother? You already push to `origin`

Two honest reasons:

1. **Your repo is yours.** That's the point — but it also means if something happens to your
   account, or you delete something by accident, it's gone. The showcase is a second copy.
2. **Cam needs to be able to see everyone's work in one place** — for putting the class site
   together at the end, and so nothing gets lost.

Think of `origin` as your backpack and `showcase` as the classroom shelf. Same stuff, two places.

> ⭐ **You get your own private lane in the showcase.** Nobody else can touch it, and you can't
> touch theirs. More on that below — it's the part that makes this safe.

---

## Set it up

You'll run **three commands**. Type them one at a time. Take your time.

### Step 1 — Add the connection

**▶ Try it** (copy this exactly — nothing to change)
```
git remote add showcase https://github.com/cjackson-coc/summer-youth-26-showcase.git
```

Nothing prints. That's normal — most git commands say nothing when they work.

### Step 2 — Claim your lane

This is the one command where **you have to change something.** Replace `YOURNAME` with your own
first name, lowercase, no spaces.

**▶ Try it**
```
git config remote.showcase.push refs/heads/main:refs/heads/intern/YOURNAME
```

So if your name is Jordan, you type:
```
git config remote.showcase.push refs/heads/main:refs/heads/intern/jordan
```

**What that line does:** it tells git *"whenever I push to showcase, put my work on a branch
called `intern/jordan`."* A **branch** is your own private lane in a shared repo.

> ⭐ **This is why nobody can ever overwrite your work, and you can't overwrite theirs.**
> Everyone gets their own lane. You never share a file with another student.

### Step 3 — Make one command do everything

**▶ Try it** (copy exactly — nothing to change)
```
git config --global alias.save "!git push origin main && git push showcase"
```

That creates a shortcut called **`git save`**. From now on, `git save` pushes to **both** places —
your repo *and* the showcase — in one go. You don't have to remember two commands.

---

## Check it worked

**▶ Try it**
```
git remote -v
```

You should see **three** nicknames (six lines — each one appears twice, once for fetch and once
for push):

```
lessons   https://github.com/cjackson-coc/SummerYouthProject.git (fetch)
lessons   https://github.com/cjackson-coc/SummerYouthProject.git (push)
origin    https://github.com/YOUR-USERNAME/my-resume-site.git (fetch)
origin    https://github.com/YOUR-USERNAME/my-resume-site.git (push)
showcase  https://github.com/cjackson-coc/summer-youth-26-showcase.git (fetch)
showcase  https://github.com/cjackson-coc/summer-youth-26-showcase.git (push)
```

Check that **`origin` has YOUR username in it.** If `origin` points at Cam's repo, something got
mixed up in Lesson 1 — flag it before you go further.

**▶ Now test the whole thing**
```
git save
```

If it prints a few lines about writing objects and ends without the word `error`, you're done.
Your work is now in two places.

---

## The one rule

> ⭐ **Never `git pull` from showcase. Ever.**
> `git save` pushes **to** it. Nothing ever comes back **from** it.

Here's why that matters. The showcase has everyone's lanes in it plus Cam's own work on `main`.
If you *pull* from it, git tries to mix all of that into your project, and you get a mess called a
**merge conflict** that takes a while to untangle.

You never need anything from the showcase. Everything you need comes from `lessons`.

**So, for the rest of the program:**

| To do this | Type this |
|---|---|
| Get a new lesson | `git pull lessons main` |
| Save your work (both places) | `git save` |

That's it. Two commands, forever.

---

## If it didn't work

**`error: remote showcase already exists`**
You already ran Step 1 — that's fine, it worked the first time. Skip to Step 2. If you want to be
sure it's pointing at the right place, run `git remote -v` and check the address matches.

**`remote: Permission to cjackson-coc/summer-youth-26-showcase.git denied`**
You haven't been added to the showcase repo yet. This isn't something you can fix on your end —
tell Cam and keep working. **Your work is still safe**, because `git push` to your own `origin`
still works normally. Use plain `git push` until you're added.

**`git: 'save' is not a git command`**
Step 3 didn't take. Run it again, and check you copied the whole line including the `!` right
after the opening quote. That exclamation mark matters.

**`src refspec main does not match any`**
You haven't made any commits yet, so there's nothing to push. Commit something first
(`git add .` then `git commit -m "first commit"`), then `git save`.

**`error: failed to push some refs`**
Usually means you're on a different branch than `main`. Run `git branch` — if the star isn't next
to `main`, run `git checkout main` and try again.

> **Still stuck after trying the above?** Skip it and come back. Nothing here blocks the next
> lesson — you can keep building your site and set the showcase up later. Just use plain
> `git push` in the meantime so your work keeps saving to your own repo.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Showcase Setup**.

*In your own words: what's the difference between `origin` and `showcase`? Why does everyone get
their own branch instead of all sharing one?*
