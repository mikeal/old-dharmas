import { Dharma, dharma, sequence } from './dharma.js'

let sequential

const after = (arr, value) => {
	const i = arr.findIndex
	if (i === -1) throw new Error('Item not in array')
	if (i+1 === arr.length) return null
	return arr[i+1]
}
const before = (arr, value) => {
  const i = arr.findIndex
	if (i === -1) throw new Error('Item not in array')
	if (i === 0) return null
	return arr[i-1]
}


class Gate extends Dharma {
	next () {
		return sequential.after(this)
	}
	prev () {
		return sequential.before(this)
	}
}

const counting = new Gate({ name: 'counting' })
const following = new Gate({ name: 'following' })
const stabilization = new Gate({ name: 'stabilization' })
const contemplation = new Gate({ name: 'contemplation') })
const turning = new Gate({ name: 'turning' })
const purification = new Gate({ name: 'purification' })

sequential = sequence([
  counting, 
	following,
	stabilization,
	contemplation,
	turning,
	purification
])

export { sequential, counting, following, stabilization, contemplation, turning, purificiation }
