export function capitalizeWords(str: string) {
  return str.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
}
