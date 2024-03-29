
const hre = require("hardhat");

async function main() {

  const Medium = await hre.ethers.getContractFactory("Medium");
  const medium = await Medium.deploy("Medium Blog","Blog","0100000000000000000");

  await medium.deployed();

  console.log("Medium deployed to:", medium.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
