# Music Player Application

A beautiful, responsive music player built with HTML, CSS, and JavaScript.

## Features

✅ Play/Pause functionality
✅ Next/Previous song navigation
✅ Progress bar with seek functionality
✅ Current time and duration display
✅ Album artwork display
✅ Playlist management
✅ Auto-play next song when current ends
✅ Keyboard shortcuts (Space to play/pause, Arrow keys to navigate)
✅ Responsive design (works on mobile and desktop)
✅ Modern UI with smooth animations

## How to Add Songs

### Step 1: Add Audio Files
Place your `.mp3` files in the `assets/music/` folder:
```
assets/
└── music/
    ├── 7-years.mp3
    ├── blinding-lights.mp3
    ├── levitating.mp3
    └── (add more songs here)
```

### Step 2: Add Album Cover Images
Place your album cover images in the `assets/images/` folder:
```
assets/
└── images/
    ├── 7 years.jpg
    ├── blinding-lights.jpg
    ├── levitating.jpg
    └── (add more images here)
```

### Step 3: Update the Playlist Configuration
Open `script.js` and find the **PLAYLIST CONFIGURATION** section at the top.

Add your songs to the `playlist` array:

```javascript
const playlist = [
    {
        name: "Your Song Title",
        artist: "Artist Name",
        image: "assets/images/your-image.jpg",
        audio: "assets/music/your-song.mp3"
    },
    // Add more songs...
];
```

**Example:**
```javascript
{
    name: "Blinding Lights",
    artist: "The Weeknd",
    image: "assets/images/blinding-lights.jpg",
    audio: "assets/music/blinding-lights.mp3"
}
```

## File Structure

```
Task_2/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Player functionality (EDIT THIS TO ADD SONGS)
├── README.md           # This file
└── assets/
    ├── images/         # Album cover images
    └── music/          # Audio files
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Play/Pause |
| → (Right Arrow) | Next Song |
| ← (Left Arrow) | Previous Song |

## Code Comments

All code is thoroughly commented and organized into sections:
- **HTML**: Each element is labeled with its purpose
- **CSS**: Grouped by component with clear section headers
- **JavaScript**: Functions are well-documented with parameter descriptions

## How to Edit

### To Change Colors
Edit `style.css` and look for the color values:
- Primary Color (Green): `#1db954` and `#1ed760`
- Background: `linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)`
- Dark Background: `rgba(0, 0, 0, 0.8)`

### To Change Size/Layout
Edit `.container` in `style.css` to adjust:
- `max-width`: Width of the player
- `padding`: Internal spacing
- `gap`: Space between elements

### To Add New Features
Edit `script.js` and add functions in the appropriate section:
- Player State: Variable declarations
- Event Listeners: Add new `addEventListener()` calls

## Browser Compatibility

✓ Chrome/Edge (Latest)
✓ Firefox (Latest)
✓ Safari (Latest)
✓ Mobile Browsers

## Troubleshooting

**Songs not playing?**
- Check file paths match exactly (case-sensitive on Linux/Mac)
- Ensure audio files are in `assets/music/` folder
- Verify file names in `script.js` match actual file names

**Images not showing?**
- Check image files are in `assets/images/` folder
- Verify image file paths in `script.js` are correct

**Styles not applied?**
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure `style.css` is linked in `index.html`

## Future Enhancements

You can easily add:
- Volume control slider
- Shuffle/Repeat buttons
- Search/filter playlist
- Local storage to remember last played song
- Dark/Light theme toggle
- Visualization effects
