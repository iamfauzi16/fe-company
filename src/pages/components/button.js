const Button = ({children, type, model}) => {

  return(
    <button type={type} className={model}>{children}</button>
  )
}

export default Button