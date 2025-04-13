const fs = require("node:fs/promises");

async function main() {
  // get input from file
  const a = [], b = [];
  const contents = await fs.readFile("input.txt", { encoding: "utf-8" });

  // split file contents into lines
  let lines = contents.split("\n");
  lines = lines.slice(0, lines.length - 1);

  // put each element in respective array
  lines.map(
    (line) => {
      const [x, y] = line.split("   ");
      a.push(x);
      b.push(y);
    }
  );

  const sorter = (a, b) => a - b;

  // sort both arrays
  a.sort(sorter);
  b.sort(sorter);

  // find and add all absolute sums
  const n = a.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(a[i] - b[i]);
    console.log(a[i], b[i], diff);
    sum += diff; 
  }

  console.log(sum);
}

// Call the async function
main().catch(err => console.error(err));
