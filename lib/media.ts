import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { GalleryItem } from "@/lib/data";

export type GalleryItemWithMedia = GalleryItem & { src: string | null };

const IMAGE_EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];
const LOGO_EXTENSIONS = ["svg", "webp", "png", "jpg", "jpeg"];
const VIDEO_EXTENSIONS = ["mp4", "webm"];

function resolve(relativePath: string, extensions: string[]): string | null {
  for (const ext of extensions) {
    const filePath = join(process.cwd(), "public", "media", `${relativePath}.${ext}`);
    if (existsSync(filePath)) {
      return `/media/${relativePath}.${ext}`;
    }
  }
  return null;
}

/**
 * Looks for an uploaded image at public/media/{relativePath}.{ext} (checked in
 * order: webp, jpg, jpeg, png, avif) and returns its public URL, or null if the
 * site owner hasn't uploaded one yet. Server-only (reads the filesystem).
 */
export function resolveImage(relativePath: string): string | null {
  return resolve(relativePath, IMAGE_EXTENSIONS);
}

/**
 * Same idea as resolveImage, for mp4/webm hero video backgrounds.
 */
export function resolveVideo(relativePath: string): string | null {
  return resolve(relativePath, VIDEO_EXTENSIONS);
}

/**
 * Logo marks are commonly SVG, unlike photography, so this checks svg first.
 */
export function resolveLogoImage(relativePath = "logo/mark"): string | null {
  return resolve(relativePath, LOGO_EXTENSIONS);
}

const MIME_TYPES: Record<string, string> = {
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
};

/**
 * Reads the uploaded logo mark as a base64 data URI, for embedding directly
 * inside generated favicon/apple-icon images (ImageResponse/Satori can't read
 * from the public folder, only inline data).
 */
export function resolveLogoDataUri(relativePath = "logo/mark"): string | null {
  for (const ext of Object.keys(MIME_TYPES)) {
    const filePath = join(process.cwd(), "public", "media", `${relativePath}.${ext}`);
    if (existsSync(filePath)) {
      const buffer = readFileSync(filePath);
      return `data:${MIME_TYPES[ext]};base64,${buffer.toString("base64")}`;
    }
  }
  return null;
}
