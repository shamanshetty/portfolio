# Visual Enhancements Guide

This document explains the visual improvements added to your portfolio and how to customize or reverse them.

## ✨ What Was Added

### 1. **Interactive Starfield with Mouse Parallax**
- Stars now respond to mouse movement with a smooth parallax effect
- Different layers of stars move at different speeds based on their "depth"
- **Location:** `components/starfield.tsx`

### 2. **Subtle Glow Effects**
- Primary elements (heading, buttons, stars) have a soft yellow glow
- Glow intensity is subtle and doesn't overpower the minimalist design
- **Applied to:** Hero heading, project cards, connect button, social links, large stars

### 3. **Depth with Shadows**
- Elevated UI elements now have subtle shadows for depth
- **Applied to:** Header, project cards, social link cards

### 4. **Enhanced Metadata**
- Updated all SEO metadata with your personal information
- Added Open Graph and Twitter card support
- Keywords optimized for AI/ML engineer profile
- **Location:** `app/layout.tsx`

---

## 🔧 How to Customize or Reverse Changes

### To Disable Glow Effects Completely
Open `app/globals.css` and change:
```css
--glow-intensity: 0.15;  /* Change to 0 */
```

### To Disable Mouse Parallax
Open `app/globals.css` and change:
```css
--parallax-strength: 15;  /* Change to 0 */
```

### To Remove Shadows
Open `app/globals.css` and change shadow variables to:
```css
--shadow-elevation-sm: 0 0 0 transparent;
--shadow-elevation-md: 0 0 0 transparent;
--shadow-elevation-lg: 0 0 0 transparent;
```

### To Adjust Glow Intensity
Increase or decrease the value (0 = no glow, 0.3 = strong glow):
```css
--glow-intensity: 0.15;  /* Adjust between 0 and 0.5 */
```

### To Change Parallax Strength
Adjust the movement distance in pixels:
```css
--parallax-strength: 15;  /* Higher = more movement */
```

---

## 📋 CSS Classes Added

All new visual effects use these utility classes (in `globals.css`):

- `.glow-primary` - Adds primary color glow
- `.glow-primary-lg` - Adds larger primary color glow
- `.elevation-sm` - Small shadow for depth
- `.elevation-md` - Medium shadow for depth
- `.elevation-lg` - Large shadow for depth
- `.text-glow` - Text shadow with glow effect
- `.hover-glow` - Glow appears on hover
- `.hover-glow-lg` - Larger glow on hover

---

## 🎨 Where Effects Are Applied

### Hero Section (`components/hero.tsx`)
- ✅ Text glow on main heading

### Projects Section (`components/projects.tsx`)
- ✅ Elevation shadow on cards
- ✅ Hover glow on cards

### Header (`components/header.tsx`)
- ✅ Elevation shadow for depth

### Connect Section (`components/connect.tsx`)
- ✅ Hover glow on GitHub button
- ✅ Elevation and hover glow on social cards

### Starfield (`components/starfield.tsx`)
- ✅ Interactive mouse parallax
- ✅ Glow on large stars
- ✅ Glow on nebula gradients

---

## 🚀 Quick Toggle Commands

### Turn Everything Off (Minimal Mode)
Add this to your `globals.css` under `:root`:
```css
--glow-intensity: 0;
--parallax-strength: 0;
--shadow-elevation-sm: 0 0 0 transparent;
--shadow-elevation-md: 0 0 0 transparent;
--shadow-elevation-lg: 0 0 0 transparent;
```

### Turn Everything On (Maximum Impact)
```css
--glow-intensity: 0.3;
--parallax-strength: 25;
--shadow-elevation-sm: 0 2px 8px oklch(0 0 0 / 0.3);
--shadow-elevation-md: 0 4px 16px oklch(0 0 0 / 0.4);
--shadow-elevation-lg: 0 8px 32px oklch(0 0 0 / 0.5);
```

---

## 💡 Performance Notes

- **Starfield Parallax:** Uses efficient CSS transforms, minimal performance impact
- **Glow Effects:** Pure CSS box-shadow, no JavaScript overhead
- **Shadows:** Hardware-accelerated, performs well on modern browsers

---

## 🎯 Current Settings (Default)

```css
--glow-intensity: 0.15;        /* Subtle glow */
--parallax-strength: 15;        /* Moderate parallax */
--shadow-elevation-sm: enabled  /* Small shadows active */
```

This provides a balanced enhancement that adds visual interest without compromising the minimalist aesthetic.
