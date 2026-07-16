# Lesson 3a — The Terminal

You've already used the terminal. Every `git` command you typed in Lesson 1 went into it. You
copied what your mentor typed, and it worked. This lesson is where you actually understand what
you were doing.

> **Type every command you see.** Reading about the terminal teaches you nothing — using it does.
> Go at your own pace. Nothing here is timed.

---

## What is it?

**The terminal is a way to talk to your computer by typing instead of clicking.** That's the
whole definition.

Clicking around is like ordering food by pointing at pictures on the menu. The terminal is just
*telling* the waiter what you want. Pointing is easier when you're new. Talking is faster once
you know the words — and you can order things that aren't on the picture menu at all.

## Why bother, if clicking works?

- **It's precise.** Clicking is "that one — no, the other one." Typing says exactly what you mean.
- **It's fast**, once you know the words.
- **A huge amount of professional software has no buttons at all.** Git is one of them. There is
  no icon anywhere that does `git push -u origin main`. If you can't use a terminal, you can't
  use those tools. That's the real reason.

## You can't break it

The terminal looks scary because it's a blank screen with a blinking cursor and **zero hints.** A
normal app shows you buttons — it tells you what it can do. The terminal tells you nothing. It
just sits there.

**You cannot break your computer by typing a wrong command.** You'll get an error message. That's
all. Error messages are the computer telling you what's wrong — they're *information*, not
failure. Read them.5

## Open one

In VS Code: **Terminal → New Terminal**

Look at the text just to the left of your blinking cursor. That's the **prompt** — and it's the
most important thing on the screen, because **it tells you where you are.**

---

## 1. Where am I?

> ⭐ **The most important idea in this entire lesson:**
> **Every command runs wherever you are standing.**

Think of the terminal as **you, standing in one room of your house.** If you say "clean up," it
cleans **that room** — not the whole house.

This is why `git pull` works in one folder and says *"not a git repository"* in another. Same
command. Wrong room.

**▶ Try it**
```
pwd
```

`pwd` = **p**rint **w**orking **d**irectory = **"where am I?"** It prints the folder you're
standing in. When you're lost, this is always your first move.

## 2. What's here?

**▶ Try it**
```
ls
```

`ls` = "list." Shows what's in this folder — you, looking around the room.
*(Command Prompt uses `dir` instead.)*

## 3. Moving around

**▶ Try it**
```
cd Documents
pwd
ls
```

`cd` = **c**hange **d**irectory = **walk into** that folder. Then `pwd` proves you moved, and
`ls` shows you the new room.

**▶ Try it**
```
cd ..
pwd
```

`..` means **the folder above me**. So `cd ..` = go back up one level. Remember the two dots —
they show up again.

## 4. Tab — the most useful key on the keyboard

**▶ Try it:** type `cd Doc` and press **Tab**.

It finishes the word for you.

> ⭐ **If Tab doesn't complete it, the thing you're typing doesn't exist.**
> That's free error-checking before you even hit Enter.

**▶ Try it:** press **Tab twice** on an empty line. It shows you everything available.

**Use Tab for every folder name, every time.** It kills typos and proves the folder is real.

## 5. The arrow keys

**▶ Try it:** press **↑**

Your last command came back.

- **↑** = go back through your history (older commands)
- **↓** = come forward again (newer commands)

> ⭐ You almost never retype a command. Long git command? **↑**. Typo? **↑**, fix the one letter,
> Enter.

**▶ Now try this:** press ↑ to bring back a command, then **try to click** in the middle of it to
fix something.

**Nothing happens.** Your cursor doesn't move.

**You are not doing it wrong.** The terminal doesn't let you click to move your cursor.

**Why? The terminal is older than the mouse.** This way of using computers is from the **1970s** —
before mice were a normal thing. It was built for a keyboard and only a keyboard, and it never
learned to care about clicks. Your mouse can *highlight* text to copy it, but it can **never**
move your typing cursor.

So how do you fix a typo in the middle?

- **← →** walk your cursor through the line, one character at a time
- **Home** jumps to the start of the line · **End** jumps to the end
- *(In Git Bash or on a Mac: **Ctrl+A** = start, **Ctrl+E** = end)*

> ⭐ **↑ ↓ = *which* command. ← → = *where in* the command.** The mouse does nothing.
> Four keys — that's your whole terminal editing toolkit.

## 6. Open VS Code from the terminal

**From now on, this is how you start every day.** No more clicking the VS Code icon.

**▶ Try it** (use **Tab** so you don't typo the folder name)
```
cd Documents\SummerYouthProject
code .
```

- `cd Documents\SummerYouthProject` — walk into your project folder
- `code .` — open VS Code **here**

> ⭐ **`.` means HERE** — the folder you're standing in right now.
> `code .` literally reads as *"VS Code, open here."*

You'll see that dot for the rest of your life. It always means "this folder."

**Why do it this way instead of clicking the icon?** Because it forces you to know where you are —
and it opens the right folder every single time. No more "why is my file explorer empty?"

**Two notes:**
- **If you're using Git Bash**, use forward slashes: `cd Documents/SummerYouthProject`
- Some terminals let you combine both lines: `cd Documents\SummerYouthProject && code .` — if
  that gives you an error about `&&`, don't worry about it, just use the two separate lines. Both
  work fine.

## 7. Reading a command

Every command has the same shape:

```
   cd     Documents
   ^          ^
 command   argument
  (verb)    (noun)
```

- **command** = the verb — *what to do*
- **argument** = the noun — *what to do it to*

**Flags** are the adverbs. They start with a dash and change *how* it runs.

**You already used one.** In Lesson 1 you typed `git push -u origin main`. That **`-u`** meant
"remember this as my default." That one little dash is the whole reason you can now just type
`git push` with nothing after it.

- **One dash = one letter:** `-a`
- **Two dashes = a whole word:** `--all`
- Usually the same thing, spelled two ways.

> **Walk** (command) **to the store** (argument) **quickly** (flag).

### Symbols you'll see

| Symbol | Means |
|---|---|
| `.` | here — this folder |
| `..` | up one folder |
| `-` `--` | a flag |
| `&&` | "and then" — run the next one only if this one worked |
| `\|` | "pipe" — feed the output of the left into the right |
| `" "` | quotes — needed for names with spaces: `cd "My Folder"` |

You won't need most of these in this class. They're here so the symbols stop being a mystery when
you see them online.

---

## Your task

**Part 1 — prove you can do it without looking.**

1. Close VS Code completely.
2. Open a terminal.
3. `pwd` — where are you?
4. `cd` your way to your project folder (**use Tab**)
5. `code .` to open it
6. Get today's next lesson: `git pull lessons main`
7. `ls` — do you see the new files that just arrived?

**Part 2 — small challenges.**

- Use `cd ..` and `ls` to explore two folders *above* your project. Where do you end up?
- Re-run a command using **↑** instead of retyping it.
- Type a command with a typo *in the middle* on purpose. Fix it using **←** and **Home** — without
  deleting the whole line.
- Run `pwd` in two different folders and compare. Convince yourself that "where you're standing"
  is a real thing.

---

## When you get stuck (and you will)

Being stuck is normal. It's most of the job.

**Do:**
- **Read the error message out loud.** Actually read it — it usually tells you exactly what's wrong.
- **Ask a classmate.** Working it out together is real teamwork, not cheating.
- **Google the exact error message.** Copy it, paste it into Google, read what comes back.

**Don't:**
- **Don't ask an AI to fix it for you.**

**Why?** Because googling an error and reading through the answers **is the actual skill.** Every
professional developer does it every single day — that's not a shortcut, that's the job. An AI
hands you an answer and you learn nothing; you'll be just as stuck next time. Working it out is
the point. **The struggle *is* the lesson.**

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 3a**.

**Write it in Markdown** — use a `##` heading and make at least one thing **bold**. You learned
that in Lesson 2; keep those muscles working.

*What surprised you about the terminal? What still feels weird?*

Next up: **HTML** — `docs/lesson-3b-html.md`
