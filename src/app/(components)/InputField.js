function InputField ({ label, id, type, register, name, autoComplete, errors }) {
  return (
      <>
        <label className='font-semibold mt-2 text-black' htmlFor={id}>
          {label}
        </label>
        <input
          className='border rounded p-1 focus:border-sky-500 text-black'
          name={name}
          id={id}
          type={type}
          autoComplete={autoComplete}
          {...register(name)}
        />
        {errors[name]?.message && (
          <p className='text-sm text-red-600'>{errors[name].message}</p>
        )}
      </>
  )
}

export default InputField
