import { Button as _Button, type ButtonProps as _ButtonProps } from "react-aria-components"
import { cva } from "class-variance-authority"

interface ButtonProps extends _ButtonProps {
  variant: 'primary' | 'secondary'
}

const buttonStyle = cva(["py-3 px-9 rounded-full outline-offset-2"], {
  variants: {
    variant: {
      primary: ["bg-sky-500 text-white border-transparent", "dark:bg-amber-950"],
      secondary: ["bg-transparent text-black border ring-black",]
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