export default function Titulo ({ children, className }) {
  return (
        <h1 id="title" className={`font-bold text-2xl text-slate-900 ${className}`}> { children } </h1>
  )
}
