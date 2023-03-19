// avoid long list of class names
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
