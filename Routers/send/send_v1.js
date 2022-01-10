const express = require("express")
const Mailer = require("../../Scripts/nodemailer")

const Router = express.Router()

Router.post("/send", async (req, res, next) => {
    try {
        const data = req.body

        const email = data["email"]
        const subject = data["subject"]
        const body = data["body"]

        if (!email || !subject || !body)
            return res.status(400).send("Insufficient information")

        Mailer.sendEmail(email, subject, body)

        return res.status(200).send("Success")
    } catch (e) {
        return res.status(500).send("Internal exception")
    }
})

module.exports = Router