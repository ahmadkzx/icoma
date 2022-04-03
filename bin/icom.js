#!/usr/bin/env node
const path = require("path");
const fs = require("fs").promises;
const { Command } = require("commander");
const { exec } = require("child_process");

const APP_SRC = path.join(__dirname, "../icoma/dist");
const APP_DEST = path.join(__dirname, "../../.icoma");

(function iniCLI() {
  const program = new Command()

	program
		.command("init")
		.description("initialize icoma")
    .action(async () => {
      await fs.mkdir(APP_DEST, { recursive: true });
      const entries = await fs.readdir(APP_SRC, { withFileTypes: true });

      for (let entry of entries) {
        let srcPath = path.join(APP_SRC, entry.name);
        let destPath = path.join(APP_DEST, entry.name);
        await fs.copyFile(srcPath, destPath);
      }
    });

  program
		.command("start")
		.description("initialize icoma")
    .action(async () => {
      exec("node .icoma/server.icoma.js");
      console.log("✅ Icoma started on http://localhost:5000/app");
    });

	program.parse(process.argv);
})()