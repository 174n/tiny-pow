const fs = require("fs");

const code = fs.readFileSync("tiny-pow.min.js").toString();
fs.writeFileSync("tiny-pow.module.min.js", code.replace(/window\.tinyPow=/g, "export default ").slice(6, -5));