# 🍵 TEA — Luxury Scroll-Driven Narrative Experience

A high-performance, cinematic, scroll-driven narrative web experience for **TEA** — a luxury Indian botanical tea brand. Built with a zero-build vanilla stack, GSAP ScrollTrigger, Lenis smooth scrolling, and pre-decoded HTML5 Canvas video scrubbing.

---

## ✨ Features & Highlights

- **Scroll-Controlled Cinematic Film**: The 800vh hero section pins a full-screen `<canvas>` that scrubs through pre-extracted, high-fidelity video frames (`ImageBitmap`) in lockstep with the user's scroll.
- **Eager Frame Preloading**: Preloads all ~227 frames as `ImageBitmap` objects via parallel blob decoding to eliminate flicker, tearing, and scroll stutter.
- **Momentum Smooth Scroll**: Powered by **Lenis 1.1.20** coupled to **GSAP ScrollTrigger** for consistent, buttery 60fps scrolling across desktop (macOS/Windows) and touch devices.
- **Dynamic Text Choreography**: Staggered word-by-word narrative text reveals tied to specific timeline scroll milestones over dark regions of the footage.
- **"The Collection" Product Showcase**: Interactive product cards for **Dawn**, **Dusk**, and **Night** botanical blends with micro-interactions and smooth anchors.
- **Luxury Aesthetic & Typography**: Dark palette (`#030303`), gold/amber accents, Google Fonts (*Cormorant Garamond* display + *Inter* body), and bespoke vertical scroll progress tracking.
- **Zero-Build Architecture**: Single-file frontend (`public/index.html`) with inline CSS & JavaScript — no bundlers, transpilers, or framework overhead required.
- **Production & Server Resilience**: Lightweight Node.js / Express static server with automatic port-conflict fallback, plus zero-config static deployment for **Vercel**.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS (ES6+) | Direct DOM manipulation & HTML5 Canvas cover-fit rendering |
| **Animation** | [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) | Scrubbed timeline synchronization and canvas pinning |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) (1.1.20) | Smooth momentum scrolling integrated with GSAP ticker |
| **Typography** | Google Fonts | *Cormorant Garamond* (Editorial Display) & *Inter* (Body/UI) |
| **Server** | Node.js + Express.js | Static asset delivery and dynamic port negotiation |
| **Asset Pipeline**| FFmpeg | Server-side video frame extraction and compression |
| **Hosting** | Vercel / Node.js | Configured with `vercel.json` pointing to `public/` |

---

## 📁 Project Structure

```text
portfolio/
├── package.json              # Project metadata & start script
├── server.js                 # Express server with automatic port fallback
├── vercel.json               # Static deployment configuration for Vercel
├── MASTER-PROMPT.md          # Architectural & design specification
├── resourcess-assets/
│   └── video-01.mp4          # Source 1080p hero film (~30s, 30fps)
└── public/
    ├── index.html            # Main application (HTML, CSS, JS inline)
    ├── newsletter-bg.jpg     # Extracted hero still for footer/newsletter
    ├── dawn.jpg              # Dawn product blend imagery (16:9)
    ├── dusk.jpg              # Dusk product blend imagery (16:9)
    ├── night.jpg             # Night product blend imagery (16:9)
    └── frames/
        ├── frame_0001.jpg    # Pre-extracted video frames for canvas scrubbing
        └── ...
        └── frame_0227.jpg
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [FFmpeg](https://ffmpeg.org/) *(only required if regenerating video frames from raw video)*

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local server:
   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000) (if port 3000 is occupied, the server will automatically bind to the next available port and log the URL in your terminal).

---

## 🎬 Asset Pipeline (FFmpeg Frame Extraction)

If you replace `resourcess-assets/video-01.mp4` or need to regenerate frames, run the following commands from the project root:

```bash
# 1. Extract ~227 hero frames (7.5 fps, scaled to 1600px width, JPEG quality 3)
ffmpeg -i resourcess-assets/video-01.mp4 -vf "fps=7.5,scale=1600:-2" -q:v 3 public/frames/frame_%04d.jpg

# 2. Extract newsletter background still from the 24.9s mark
ffmpeg -ss 24.9 -i resourcess-assets/video-01.mp4 -frames:v 1 -q:v 3 public/newsletter-bg.jpg
```

> **Performance Tip**: For lower memory consumption on mobile or slower devices, change `scale=1600:-2` to `scale=1280:-2` or adjust `fps=6`.

---

## 🚢 Deployment

### Deploying to Vercel

The project includes a ready-to-use [`vercel.json`](./vercel.json) configured to serve the `public/` folder directly:

1. Install the Vercel CLI: `npm i -g vercel`
2. Run:
   ```bash
   vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Deploying with Node / Docker / VPS

Run `node server.js` behind any reverse proxy (e.g., Nginx, Caddy) or standard cloud hosting service (Railway, Render, Fly.io, etc.).

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).
