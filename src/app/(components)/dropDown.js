import Txt from './txt'

export default function DropDown ({ lsOptions }) {
  return (
        <select className="px-1 w-4/10 rounded-sm text-blue-gray-900 text-xs">
            { handleOptions(lsOptions) }
        </select>
  )
}

const handleOptions = (lsOptions) => {
  return lsOptions.map((opt) => { return <option key={opt} className="px-1 w-1/3 rounded-sm text-blue-gray-900 text-xs"> <Txt> {opt} </Txt> </option> })
}
