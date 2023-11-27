function InputField ({ label, id, type, register, name, autoComplete, errors, icon }) {
  return (
      <>
        {/*
          <label className='font-semibold mt-2 text-black' htmlFor={id}>
          {label}
        </label>
        */}
        <div id="container" className='border rounded focus:border-sky-500 text-black flex justify-start items-center p-3 gap-1'>
          {icon}
          <input
            className='rounded px-1 text-black focus:outline-none focus:ring-0 appearance-none w-full'
            name={name}
            id={id}
            type={type}
            autoComplete={autoComplete}
            placeholder={label}
            {...register(name)}
          />
          {errors[name]?.message && (
            <p className='text-sm text-red-600'>{errors[name].message}</p>
          )}
        </div>
      </>
  )
}

export default InputField
