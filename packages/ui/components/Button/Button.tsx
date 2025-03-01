import { Button as _Button, type ButtonProps as _ButtonProps } from "react-aria-components"
import { cva } from "class-variance-authority"

interface ButtonProps extends _ButtonProps {
  variant: 'primary' | 'secondary'
}

const buttonStyle = cva(["py-3 font-semibold px-9 rounded-full outline-offset-2 hover:cursor-pointer transition ease-out"], {
  variants: {
    variant: {
      primary: ["bg-sky-500 hover:bg-sky-600 text-white border-transparent", "dark:hover:bg-sky-400"],
      secondary: ["bg-transparent text-gray-800 ring ring-gray-800 ",]
    }
  }
})

const Button = ({ className, variant, children, ...forwardProps }: ButtonProps) => {

  return (
    <_Button className={`${buttonStyle({ variant })} ${className ?? ''}`} {...forwardProps}>
      {children}
    </_Button>
  )
}

export { Button }