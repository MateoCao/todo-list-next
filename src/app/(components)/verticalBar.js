export default function VerticalBar ({ children, bg }) {
  const bgDefault = 'blue-gray-200'

  return (
        <aside id='verticalBar' className={`h-[100vh] w-1/6 drop-shadow-lg ${bg || bgDefault}`}>
            { children }
        </aside>
  )
}
