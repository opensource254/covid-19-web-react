import React from "react"

import ContentLoader from "react-content-loader"

const Placeholader = () => (
    <ContentLoader speed={2} backgroundColor="#ffffff" foregroundColor="#f0f0f0" width="100%">
        <rect x="6" y="16" rx="7" ry="7" width="99%" height="131" />
    </ContentLoader>
)

export default Placeholader
