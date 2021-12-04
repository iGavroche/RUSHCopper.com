require("dotenv").config({ path: "./.env.production" });

const { Client } = require("node-scp");

async function deployBuild() {
  try {
    const client = await Client({
      host: process.env.SSH_HOST,
      port: process.env.SSH_PORT,
      username: process.env.SSH_USERNAME,
      password: process.env.SSH_PASS,
    });

    await client.uploadDir("./build", process.env.DEST_BUILD_PATH);
    client.close();
  } catch (e) {
    console.log(e);
  }
}

deployBuild();
