/* The Hundred Dharmas, as taught in sequence by Vasubandhu */
import { dharma, sequence } from '../dharmas.js'

/*
> **All dharmas are empty.**
> 

What are “all dharmas” and how are they “empty?”
*/

/* Mind Dharmas */

const mind = dharmas('mind', [
   dharma('seeing consciousness'),
	 dharma('hearing consciousness'),
	 dharma('smelling consciousness')

| 1.1 | 🤩 | Visual Consciousness | cak·ṣur vi·jñā·na | 1 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E7%9C%BC%E8%AD%98 |
| 1.2 | 🙉 | Sound Consciousness | śro·tra vi·jñā·na | 2 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E8%80%B3%E8%AD%98 |
| 1.3 | 🍵 | Smell Consciousness | ghrā·ṇa vi·jñā·na | 3 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E9%BC%BB%E8%AD%98 |
| 1.4 | 😋 | Taste Consciousness | jih·vā vi·jñā·na | 4 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E8%88%8C%E8%AD%98 |
| 1.5 | 🤸 | Body Consciousness | kā·ya vi·jñā·na | 5 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E8%BA%AB%E8%AD%98 |
| 1.6 | 💭 | Thought Consciousness | ma·no vi·jñā·na | 6 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E6%84%8F%E8%AD%98 |
| 1.7 | 🤬 | Appropriating Consciousness | https://en.wikipedia.org/wiki/Manas-vijnana | 7 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E6%84%8F |
| 1.8 | 🕳️ | Adhering Consciousness | https://en.wikipedia.org/wiki/Eight_Consciousnesses#Ālayavijñāna | 8 | http://tibetanbuddhistencyclopedia.com/en/index.php?title=%E9%98%BF%E8%B3%B4%E8%80%B6%E8%AD%98 |
|
])

/* Dharmas Belonging to Mind */

mind.dharmas = mind.sequence([
  
])

// The following dharmas are appearances of mind
// that are not appropriated *as* mind. Therefor, they
// are produced as separate sequential appearances of
// mind.

/* Form Dharmas */

const form = mind.sequence([
])

/* Conditioned Dharmas Unassociated with Mind */

const conditioned = mind.sequence([
])
const unconditioned = mind.sequence([
])
dual(conditioned, unconditioned)

/* They are in this sequence because the first are supreme, the second interact with the first, the third are the ***shadows manifest by the previous two***, the fourth are separate from the positions of the previous three, and the fifth are *revealed by the previous four*. */




const dharmas = sequence('The Hundred Dharmas', sequential)

export { mind, dharmas, not_mind, mind.not }
