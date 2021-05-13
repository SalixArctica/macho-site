import * as React from "react"
import BotWidget from '../components/botWidget';
import { BunchOfSpinners } from '../components/bunchOfSpinners';

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <h1>💯 WELCOME 💯 TO 💯 THE 💯 MACHO 💯 MAN 💯 RANDY 💯 SAVAGE 💯 FAN 💯 CLUB 💯</h1>
            <div>
                <BunchOfSpinners count={100} />
            </div>
            <iframe src="https://discordapp.com/widget?id=381718894559100940&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            <BotWidget />
        </main>
    )
}

export default IndexPage
