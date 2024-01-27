export default function Input({
  name,
  type,
  valid,
  label,
  children,
  id,
  maxW,
  ...props
}) {
  return (
    <div
      className={
        'flex flex-col items-start w-full max-w-sm mx-auto my-2 input-with-placeholder ' +
        (maxW && ' max-w-[100px] inline')
      }
    >
      <input
        type={type}
        name={name}
        id={id || name}
        {...props}
        required
        className={
          'w-full px-3 py-2 text-base font-medium text-center transition-all duration-300 bg-transparent border-b-2 outline-none border-opacity-20 focus:border-opacity-50 border-base-content text-base-content placeholder:opacity-40 ' +
          (valid && ' text-teal-600 border-teal-600')
        }
      />
      <label
        htmlFor={id}
        className="z-50 mb-0 text-sm font-medium tracking-wider uppercase bg-opacity-0 bg-neutral-content"
      >
        {label}
      </label>
      {/* { valid && <label htmlFor={name}><i className="fa-solid fa-check"></i></label>} */}
    </div>
  );
}
