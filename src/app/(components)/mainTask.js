export default function MainTask ({ children, className }) {
  return (
        <section id='mainTask'
        className={`h-screen w-full p-8 ${className} flex flex-wrap align-items justify-center gap-10`} >
            { children }
        </section>
  )
}
