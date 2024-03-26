import IconType from '../../types/icon'
import cn from '../../util/cn'

const MenuIcon: React.FC<IconType> = (props) => (
  <img
    {...props}
    className={cn('cursor-pointer', props.className)}
    src='/images/icon-menu.svg'
    alt='Menu'
  />
)

export default MenuIcon
