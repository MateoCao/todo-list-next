import Tag from './tag'

export default function Tags ({ children }) {
  return (
        <section id="etiquetas" className="w-full p-5 flex flex-wrap justify-start gap-1 h-1/6">
            { children }
            <Tag>+</Tag>
        </section>
  )
}
