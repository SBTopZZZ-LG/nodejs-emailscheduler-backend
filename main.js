require("dotenv").config()
const app = require("./Scripts/start_express")

app.use(require("./Routers/send/send_v1"))