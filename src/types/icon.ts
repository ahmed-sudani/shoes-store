import { ClassValue } from 'clsx'

type IconType = { className: ClassValue } & Exclude<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'className'
>

export default IconType
