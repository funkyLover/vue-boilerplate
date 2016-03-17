import * as types from './mutation-types'

export const increment = ({ dispatch }, x) => {
  dispatch(types.INCREMENT, x)
}
