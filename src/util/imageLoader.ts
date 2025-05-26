export const allProjectImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function getProjectImages( folderName: string ): string[] {
  const filtered = Object.entries(allProjectImages)
    .filter(([path]) => path.includes(`/assets/${folderName}/`))
    .map(([, src]) => src);
  return filtered;
}