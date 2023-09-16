const log = (...args) => typeof process === 'object' && import.meta.url.endsWith(process.argv[1]) ? console.log(...args) : null

const sep = ''

const interleave = (arr, thing) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)

const collect = arr => interleave(arr.map(s => s.trim()), sep)

const h1 = s => '# '+s
const h2 = s => '## '+s
const h3 = s => '### '+s

const preamble = `
> Not from itself and not from something else, <br>
> Not from both and not without a cause, <br>
> Does any **dharma** whatsoever, <br>
> Anywhere, at any time, arise. <br>
> − Nagarjuna ([Mūlamadhyamakakārikā](https://en.wikipedia.org/wiki/Mūlamadhyamakakārikā))
`
const header = [
  preamble,
  'These are the collected "`dharmas`" (laws, doctrines, truths) as understood in the form of code and data structures.',
	'May they be of use if your practice.'
]

const placeholder = [
h1(`Dharmas Appearing as Singular`),
h1(`Dharmas Appearing as Dual`),
h1(`Dharmas Appearing in Sequence`),
h1(`Dharmas in Twos`),
h2(`Dharmas in Threes`),
h2(`Dharmas in Fours`),
h2(`Dharmas in Fives`),
h2(`Dharmas in Six`),
h2(`Dharmas in Ten`)
]

;collect([...header, ...placeholder]).map(x => log(x))
