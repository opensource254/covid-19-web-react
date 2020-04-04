import React from "react"

import "./Footer.scss"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-credit">
                    Data source from{" "}
                    <a
                        className="interactive"
                        href="http://worldometers.info"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.worldometers.info
                    </a>{" "}
                    - made with{" "}
                    <span className="heart" role="img">
                        ❤
                    </span>{" "}
                    &{" "}
                    <div className="spinning">
                        <span className="react" role="img">
                            ⚛
                        </span>
                    </div>{" "}
                    by{" "}
                    <a
                        className="interactive"
                        href="http://github.com/cyrus43/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cyrus
                    </a>{" "}
                    and{" "}
                    <a
                        className="interactive"
                        href="http://github.com/BILLthebuilder/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bill
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
