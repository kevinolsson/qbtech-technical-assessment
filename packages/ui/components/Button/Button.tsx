import { Button as _Button, type ButtonProps as _ButtonProps } from "react-aria-components"
import { cva } from "class-variance-authority"

interface ButtonProps extends _ButtonProps {
  variant: 'primary' | 'secondary'
}

const buttonStyle = cva(["py-3 px-9 rounded-full outline-offset-2"], {
  variants: {
    variant: {
      primary: ["bg-sky-500 text-white border-transparent"],
      secondary: ["bg-transparent text-black border ring-black",]
    }
  }
})

const Button = ({ className, variant, children, ...forwardProps }: ButtonProps) => {

  return (
    <_Button className={`bg-amber-400 dark:bg-amber-950 ${className ?? ''}`} {...forwardProps}>
      {children}
    </_Button>
  )
}

export { Button }