const hre = require("hardhat")
const { items } = require("../src/items.json")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
