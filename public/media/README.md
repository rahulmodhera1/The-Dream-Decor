# Media uploads

Drop your real photography and logo files straight into the folders below,
using the exact filenames listed in each folder's README. The moment a file
lands with the right name, the website swaps it in automatically, replacing
the placeholder graphics. No code changes needed.

**How to upload (no local setup required):** on GitHub, open the folder you
want (e.g. `public/media/logo`), click **Add file → Upload files**, drag your
image in, rename it to match exactly (lowercase), and commit. If this repo is
connected to Vercel, the live site redeploys automatically within a minute or
two.

| Folder | What goes there |
| --- | --- |
| [`logo/`](./logo) | Your logo mark, shown in the nav bar, footer, browser tab, and social share image |
| [`hero/`](./hero) | The homepage's full-screen background image or video |
| [`portfolio/`](./portfolio) | Real event photos, one per gallery piece |
| [`services/`](./services) | One photo for each of the three core services |
| [`about/`](./about) | Studio and service-area photos for the About page |

**Supported image formats:** WEBP (best quality/size), JPG, PNG (AVIF also
works). **Video:** MP4 or WEBM. Keep filenames lowercase, exactly as shown in
each folder's README, uploading `.jpg` vs `.png` etc. is fine, just match the
name before the extension.

Every image is served through Next.js's image pipeline, so uploads are
automatically resized, compressed, and served in the right format and size
for whichever device opens the site, phone, tablet, or desktop.
