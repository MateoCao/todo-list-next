export default function Tag ({ textSize, tagColor, children }) {

    const textSizeDefault = "text-xs"
    const tagColorDefault = "bg-red-600"

    return(
        <section id="tag">
            <button className={ `text-blue-50 px-2 py-1 rounded-sm font-bold ${ textSize || textSizeDefault } ${ tagColor || tagColorDefault }` }>
                { children }
            </button>
        </section>
    )
}