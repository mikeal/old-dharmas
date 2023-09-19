

const not_in = (arr, appends) => appends.filter(x => !arr.includes(x))

class Dharma {
	constructor ({ name, called, marks }) {
		this.name = name
		this.called = called ? [ name, ...called ] : [ name ]
		this.marks =  marks || new Map()
	}
	also_called (called) {
		if (Array.isArray(called)) this.called = [...this.called, ...not_in(this.called, called) ]
		else if (!this.called.includes(called)) {
			this.called.push(called)
		}
	}
	mark (object, _mark) {
		const mark = new Mark(this, object, _mark)
		if (!this.marks.has(mark.name)) this.marks.set(mark.name, mark)
		return mark
	}
}

const abhidharma = new Map()
const on_numbered_dharma = dharma => {
	if (typeof dharma.num !== 'number') throw new Error('dharma.num must be a number')
	if (!abhidharma.has(dharma.num)) abhidharma.set(dharma.num, new Set())
  abhidharma.get(dharma.num).add(dharma)	
}

class Mark extends Dharma {
	constructor (subject, object, mark) {
		this.subject = subject
		this.object = object
		this.mark = mark
		if (typeof mark === 'number') {
			on_numbered_dharma(this)
		  super({ name: `dharma(${ object.name }) in subject(${ subject.name }) @ ${ mark }` })
		} else {
			super({ name: `dharma(${ object.name }) in subject(${ subject.name }) has "${ mark }"` })
		}
	}
}

class Dharmas extends Dharma {
	constructor (opts) {
		super(opts)
		if (!opts.dharmas instanceof Set) throw new Error('dharmas must be a Set()') 
		this.dharmas = opts.dharmas
		this.sequential = new Map()
	}
	sequence (arr) {
		const name = `${this.name} in sequence [ ${ arr.map(dharma => dharma.name).join(',' } ]`
		if (!this.sequential.has(name)) {
			this.sequential.set(name, sequence(name, arr))
		}
		return this.sequential.get(name)
	}
}

class Sequence extends Dharmas {
	constructor (opts) {
		opts.dharmas = new Set(opts.sequence)
		super(opts)
		let i = 0
		while (i < this.sequence.length) {
			this.mark(this.sequence[i], i)
			i++
		}
	}
}

const sequence = (name, sequence) => new Sequence({ name, sequence })

const dharma = (...args) => new Dharma(...args)
const dharmas = (...args) => new Dharmas(...args)

export { Dharma, dharma, Dharmas, dharmas, Mark, sequence }
