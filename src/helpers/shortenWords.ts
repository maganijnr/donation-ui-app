const shortenWords = (str: any, n: number): string => {
  if (!str) return "";

  return str.length > n ? str.substring(0, n) + "..." : str;
};

export default shortenWords;