
export const allIcons = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function getIcon(iconName: string): string {
  const match = Object.entries(allIcons).find(([path]) =>
    path.endsWith(`/${iconName}.svg`)
  );

  if (!match) {
    console.warn(`Icon "${iconName}" not found.`);
    return '';
  }

  return match[1];
}
