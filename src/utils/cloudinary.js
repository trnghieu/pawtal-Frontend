export function cloudinaryUrl(publicId, { transforms = "f_auto,q_auto" } = {}) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName || !publicId) return "";
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}

export function imageOrFallback(src, fallback) {
  return src || fallback;
}