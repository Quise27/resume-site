# Lesson 4c — Your Headshot

Your site has a spot for a photo of you. This lesson is how to get it there.

> **Read this before Cam comes around with the flash drive.** The actual copying takes about
> ninety seconds if you already know the steps. If you're reading it for the first time while
> holding the drive, it takes ten minutes and everyone waits.

---

## First — you have a choice here

You do **not** have to use a photo of yourself.

Every layout also works with an **initials avatar** — a clean circle with your initials in it,
styled to match your colors. Plenty of real developers' sites use exactly that.

> ⭐ **Both options look good.** The initials avatar isn't the "didn't get a photo" version — it's
> a real design choice. Pick whichever you'd rather have on a page you show people.

If you want the initials avatar, skip to **[Option B](#option-b--initials-avatar)** at the bottom.
You're done in one step.

---

## Option A — Use your photo

### What you're doing, in one sentence

Copy one file off a flash drive into your project folder, rename it to `headshot.jpg`, and save.

Your `index.html` already has this line in it, waiting:

```html
<img src="headshot.jpg" alt="your name" class="headshot">
```

`src="headshot.jpg"` means *"look for a file named `headshot.jpg` right next to me."* Right now
that file doesn't exist, which is why you see a broken-image icon. You're about to fix that by
putting the file exactly where it's looking.

### Step 1 — Plug in the drive and find it

Plug the flash drive into a USB port.

Open **File Explorer** (the folder icon on your taskbar, or press **Windows key + E**).

In the left sidebar, click **This PC**. Your drive shows up under **Devices and drives** — usually
called something like `USB Drive (D:)` or `SUMMER (E:)`. The letter changes computer to computer;
that's normal.

Double-click it.

### Step 2 — Find your photo

The photos are named by **first name** — `jordan.jpg`, `alex.jpg`, and so on. Find yours.

*(If two people share a first name, yours will have a last initial: `alex-r.jpg`.)*

**Click it once to select it. Don't drag it yet.** Copy it with **Ctrl+C**.

### Step 3 — Open your project folder

Now you need the folder your website actually lives in — the one with `index.html` in it.

**The fastest way:** in VS Code, right-click `index.html` in the file explorer on the left and
choose **Reveal in File Explorer**. That opens the exact right folder every time.

> ⭐ **The photo must sit in the same folder as `index.html`.** Not one folder above it, not in a
> new folder you make. Right next to it. That's what `src="headshot.jpg"` means.

### Step 4 — Paste it

In that folder, press **Ctrl+V**.

Your photo is now in your project. You should see it sitting next to `index.html`.

### Step 5 — Rename it

Right-click the photo you just pasted → **Rename**.

Type exactly:

```
headshot.jpg
```

**All lowercase. `.jpg`, not `.jpeg`.** This matters more than it looks like it should — see
"If it didn't work" below.

> **Can't see the `.jpg` part when renaming?** Windows hides file extensions by default. In File
> Explorer, click the **View** menu and tick **File name extensions**. Now you can see and edit
> the whole name. Do this — it prevents the most common mistake on this page.

### Step 6 — Check it worked

Go back to VS Code. You should see `headshot.jpg` in the file list on the left.

Open your page with **Live Server** (right-click `index.html` → **Open with Live Server**).

**Your face should be on your website.** That's the whole lesson.

### Step 7 — Save it

Check you're in your project folder first:

```
pwd
```

Should end in `SummerYouthProject`. If not, `cd Documents\SummerYouthProject`.

**▶ Try it**
```
git add .
git commit -m "Add my headshot"
git save
```

`git save` sends your work to both your own repo and the class showcase. Haven't set that up yet?
Use `git push` and see `docs/setup-showcase-remote.md`.

### Step 7b — Verify it uploaded

> ⭐ **Photos are the most common thing to go missing on upload.** Check now, not later.

1. Go to `github.com/YOUR-USERNAME/my-resume-site` and refresh.
2. Open the `template` folder.
3. **`headshot.jpg` should be listed there.** Click it — your photo should display in the browser.

If it isn't listed, it never uploaded. Usually that means the file sits outside your project folder,
so `git add .` never saw it. Go back to Step 3 and confirm it's in the *same* folder as
`index.html`, then save again.

### Step 8 — Eject the drive

Don't just yank it out. In File Explorer, right-click the drive → **Eject**. Wait for the
"safe to remove" message, then pull it out and hand it back.

---

## If it didn't work

**You see a broken-image icon instead of your face.**
Nine times out of ten it's the filename. Check all three of these:
- Is it `headshot.jpg` — all lowercase, no capitals?
- Is it `.jpg` and not `.jpeg`? (Turn on file extensions — see the note in Step 5.)
- Is there a hidden double extension, like `headshot.jpg.jpg`? That happens when extensions were
  hidden while you renamed.

**The file's there but the page still shows nothing.**
It's probably in the wrong folder. `headshot.jpg` has to be in the *same* folder as `index.html`.
Use **Reveal in File Explorer** from Step 3 to be certain you're in the right place, and check the
photo is sitting right beside `index.html` — not one level up, not in a subfolder.

**The photo shows up but it's enormous / sideways / squished.**
Not your fault and not worth fixing by hand. The layouts crop and size it for you once you get to
Lesson 4b. If it looks wrong *before* you've applied a layout, that's expected.

> **Still stuck?** Skip it and come back. Nothing here is a hard prerequisite for the next thing —
> your site works fine without a photo, and you can drop it in any time later. Use the initials
> avatar for now and keep moving.

---

## Option B — Initials avatar

Nothing to copy, nothing to rename. In your layout file, find this line:

```html
<img src="headshot.jpg" alt="your name" class="headshot">
```

and replace it with this — putting your own initials between the tags:

```html
<div class="headshot-initials">JR</div>
```

The styling comes with the layout. Done.

---

## Before you move on

Add a couple of sentences to `reflections.md` under **Lesson 4c**.

*Which did you pick — photo or initials — and why? Did anything about getting the file into the
right place surprise you?*
