const fs = require("fs")

fs.readdirSync("./projects/assets/images")
    .forEach((dir) => {
        console.log("🚀 ~ .forEach ~ dir:", dir)

    })