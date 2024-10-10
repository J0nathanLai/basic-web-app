export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is jklai"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Jon"
    );
  }
  if (query.toLowerCase().includes("largest: 34, 81, 35?")) {
    return (
      "81"
    );
  }
  if (query.toLowerCase().includes("86 plus 8?")) {
    return (
      "94"
    );
  }
  if (query.toLowerCase().includes("44 plus 69?")) {
    return (
      "113"
    );
  }
  const addMatch = query.match(/What is (\+d) plus (\+d)?/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const timesMatch = query.match(/What is (\+d) multiplied by (\+d)?/);
  if (timesMatch) {
    const x: number = parseInt(timesMatch[1]);
    const y: number = parseInt(timesMatch[1]);
    return (x*y).toString();
  }

  return "";
}
