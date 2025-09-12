export const transformTokens = (flatTokens: Record<string, string>) => {
  const nestedTokens: Record<string, any> = {};

  for (const key in flatTokens) {
    if (Object.prototype.hasOwnProperty.call(flatTokens, key)) {
      const value = flatTokens[key];
      const parts = key.split(/(?=[A-Z])/).map(part => part.toLowerCase());

      let current: Record<string, any> = nestedTokens;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = { $value: value, name: key }; // Add original key as name
        } else {
          if (!current[part]) {
            current[part] = {};
          }
          current = current[part];
        }
      }
    }
  }
  return nestedTokens;
};
