import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import CartType from '../types/cart'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
  converter: JSON,
})

const cartSate = atom<CartType>({
  key: 'textState',
  default: {
    name: '',
    thumb: '',
    price: 0,
    count: 0,
  },
  effects_UNSTABLE: [persistAtom],
})

export default cartSate
