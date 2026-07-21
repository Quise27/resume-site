# Cheat Sheet — CSS to Tailwind

Keep this open while you work. Left column is the real CSS. Right column is the Tailwind class that
does the same thing.

> **The number scale:** `1` = `0.25rem` = 4px. So `4` = 16px, `8` = 32px, `12` = 48px.
> Once you know **`4` means 16px**, the whole scale reads itself.

---

## Text

| CSS | Tailwind | Notes |
|---|---|---|
| `color: #1B1B1B` | `text-ink` | Your locked body color |
| `color: <brand>` | `text-brand` | From your palette |
| `color: <accent>` | `text-accent` | From your palette |
| `color: #FFFFFF` | `text-white` | |
| `font-size: 0.875rem` | `text-sm` | 14px |
| `font-size: 1rem` | `text-base` | 16px, body default |
| `font-size: 1.125rem` | `text-lg` | 18px |
| `font-size: 1.5rem` | `text-2xl` | 24px |
| `font-size: 1.875rem` | `text-3xl` | 30px |
| `font-size: 2.25rem` | `text-4xl` | 36px |
| `font-size: 3rem` | `text-5xl` | 48px |
| `font-weight: 400` | `font-normal` | |
| `font-weight: 700` | `font-bold` | |
| `line-height: 1.5` | `leading-normal` | Space between lines |
| `line-height: 1.25` | `leading-tight` | Good for big headings |
| `letter-spacing: -0.025em` | `tracking-tight` | Big headings look better slightly tightened |
| `text-align: center` | `text-center` | |
| `text-decoration: underline` | `underline` | |
| `text-decoration: none` | `no-underline` | |
| `text-transform: uppercase` | `uppercase` | |

## Space inside a box (padding)

| CSS | Tailwind |
|---|---|
| `padding: 0.5rem` | `p-2` |
| `padding: 1rem` | `p-4` |
| `padding: 1.5rem` | `p-6` |
| `padding: 2rem` | `p-8` |
| `padding-left/right: 1rem` | `px-4` |
| `padding-top/bottom: 1rem` | `py-4` |
| `padding-top: 2rem` | `pt-8` |
| `padding-bottom: 2rem` | `pb-8` |

## Space outside a box (margin)

| CSS | Tailwind |
|---|---|
| `margin: 1rem` | `m-4` |
| `margin-top: 2rem` | `mt-8` |
| `margin-bottom: 1rem` | `mb-4` |
| `margin-left/right: auto` | `mx-auto` (centers a fixed-width box) |

**Remember:** padding is inside the box, margin is outside it.

## Layout (rows and columns)

| CSS | Tailwind | Notes |
|---|---|---|
| `display: flex` | `flex` | Children go in a row |
| `flex-direction: column` | `flex-col` | Back to a stack |
| `gap: 1rem` | `gap-4` | Space between children |
| `justify-content: center` | `justify-center` | Along the row |
| `justify-content: space-between` | `justify-between` | Pushed to the ends |
| `align-items: center` | `items-center` | Across the row |
| `display: grid` | `grid` | |
| `grid-template-columns: repeat(2, 1fr)` | `grid-cols-2` | Two equal columns |
| `grid-template-columns: repeat(3, 1fr)` | `grid-cols-3` | Three equal columns |

## Size

| CSS | Tailwind |
|---|---|
| `width: 100%` | `w-full` |
| `max-width: 42rem` | `max-w-2xl` |
| `max-width: 56rem` | `max-w-4xl` |
| `height: 100%` | `h-full` |
| `width: 8rem; height: 8rem` | `w-32 h-32` |

## Backgrounds, borders, corners

| CSS | Tailwind |
|---|---|
| `background: <brand>` | `bg-brand` |
| `background: <accent>` | `bg-accent` |
| `background: <pop>` | `bg-pop` |
| `background: #FFFFFF` | `bg-white` |
| `border-radius: 0.5rem` | `rounded-lg` |
| `border-radius: 1rem` | `rounded-2xl` |
| `border-radius: 9999px` | `rounded-full` (pills and circles) |
| `border: 1px solid` | `border` |
| `border: 2px solid` | `border-2` |
| `border-color: <brand>` | `border-brand` |
| `box-shadow: small` | `shadow` |
| `box-shadow: medium` | `shadow-md` |
| `box-shadow: large` | `shadow-lg` |

## Images

| CSS | Tailwind |
|---|---|
| `object-fit: cover` | `object-cover` (fills the box, crops overflow) |
| `border-radius: 9999px` | `rounded-full` (circular headshot) |

## Interaction

| CSS | Tailwind | Notes |
|---|---|---|
| `:hover { background: ... }` | `hover:bg-accent` | Prefix any class with `hover:` |
| `transition: ...` | `transition` | Makes hover changes fade instead of snap |
| `:focus-visible { outline: ... }` | `focus-visible:outline` | Keyboard focus ring. Keep these |

## Responsive (phones vs laptops)

Tailwind is **mobile first**. A plain class applies everywhere. Add a prefix to change it on
bigger screens only.

```html
<div class="text-2xl md:text-4xl">
```

That reads: *24px on phones, 36px once the screen is medium or larger.*

| Prefix | Applies from |
|---|---|
| *(none)* | all sizes, phones included |
| `sm:` | 640px and up |
| `md:` | 768px and up |
| `lg:` | 1024px and up |

**▶ Try it:** shrink your browser window narrow, like a phone. Everything should still be readable
with nothing running off the edge.

---

## The five you'll use constantly

If you only remember five:

1. **`p-4`** — space inside
2. **`flex gap-4`** — put things in a row with space between
3. **`text-3xl font-bold`** — a big bold heading
4. **`text-ink`** — readable body text
5. **`max-w-2xl mx-auto`** — a centered column that doesn't stretch too wide

---

## Looking things up

The official docs are genuinely good and have a search box: **tailwindcss.com/docs**

Search the CSS property you want (`padding`, `border-radius`) and it shows you the class. That's a
normal thing developers do all day. You are not expected to memorize any of this.
