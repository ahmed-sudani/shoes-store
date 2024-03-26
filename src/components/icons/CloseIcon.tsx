import IconType from '../../types/icon'
import cn from '../../util/cn'

const CloseIcon: React.FC<IconType> = (props) => (
  <img
    {...props}
    className={cn('cursor-pointer', props.className)}
    src='/images/icon-close.svg'
    alt='close'
  />
)

export default CloseIcon
