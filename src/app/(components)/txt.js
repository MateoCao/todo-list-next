export default function Txt ({color, size, children, className}) {

    const colorDefault = "text-blue-gray-900"
    const sizeDefault = "text-xs"

    return (
        <p className={`rounded-sm font-bold ${ color || colorDefault } ${ size || sizeDefault } ${className}`}>
            {children}
        </p>
    )
}