'use client'

const navigation = [
  { name: 'Lista basica', href: '#', current: false },
  { name: 'Lista de prioridades', href: '#', current: false },
  { name: 'Habitos semanales', href: '#', current: false },
  { name: 'Lista de compras', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function VerticalMenu({className}) {
  return (
    <section as="nav" className={`bg-gray-800 ${className} w-1/6 flex h-screen justify-start flex-col content-start p-5 gap-5`}>
      <div className="flex flex-shrink-0 items-center m-0 p-0">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <p className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-lg'} >
        Listas de tareas
      </p>
      <div className="flex flex-col w-full justify-start gap-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium ml-5'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  )
}
