const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex items-center justify-center gap-2 py-4 text-lg leading-none border px-7 font-montserrat 
    ${
      backgroundColor
       ? `${backgroundColor} ${textColor} ${borderColor}` 
       : "text-white bg-coral-red border-coral-red hover:bg-white hover:text-coral-red" }
    rounded-full ${fullWidth && 'w-full'}
    `}>
      {label}

      {iconURL && <img src={iconURL} alt="arrow right icon"
      className="hover:border hover:border-coral-red w-5 h-5 ml-2 rounded-full" />}
    </button>
  )
}

export default Button