import { tokenBucket, shield, detectBot} from "@arcjet/node";
import arcjet from "@arcjet/node";
import "dotenv/config"

// init arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // bot detection
        shield({mode: "LIVE"}), // shield protect application from common attacks, SQL injection, XSS, CSRF attacks
        detectBot({
            mode: "LIVE",
            // block all bot except search engine
            allow: [
                "CATEGORY:SEARCH_ENGINE"
            ]
        }),
        // rate limit
        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 5,
        })
    ],
})