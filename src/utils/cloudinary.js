export function cloudinaryUrl(publicId, options = {}) {
  const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloud || !publicId) return '';
  const transforms = options.transforms || 'f_auto,q_auto';
  return `https://res.cloudinary.com/${cloud}/image/upload/${transforms}/${publicId}`;
}

export function imageOrFallback(primary, fallback) {
  return primary || fallback || 'https://placehold.co/1200x800/e9e5d7/0b5d91?text=Pawtal';
}
