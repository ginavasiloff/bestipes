export const slugify = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, "-");
};

export const key = () => Math.random().toString();