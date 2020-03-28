import React from "react"

const iconTypes = new Map([
    ['chronotype', 'typcn-time'],
    ['cycles', 'typcn-adjust-contrast'],
    ['settings', 'typcn-cog'],
]);

const Icon = ({ type, className, size=24 }) => (
    <span className={`typcn ${iconTypes.get(type)} ${className}`} style={{fontSize: size}}></span>
)

export default Icon;