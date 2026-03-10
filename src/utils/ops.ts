import { blank, pickSome } from './array'

type OpType = 'add' | 'sub' | 'mul' | 'div'
type ExType = OpType | 'set' | 'out' | 'err'
type Op = {
	a: number
	b: number
	op: OpType
}
type MappedOp = {
	op: ExType
	a: string | number
	b: string | number
	out: string
}
const ops: OpType[] = ['add', 'sub', 'mul', 'div']
const MAX = 100

const { min, max } = Math

const isInt = (x: number): boolean => Math.round(x) == x
const inRange = (x: number): boolean => x > 0 && x < 100
const isFitting = ([a, b]: number[]): boolean => isInt(a) && isInt(b) && inRange(a) && inRange(b)
const checkRate = ([a, b]: number[]): boolean => max(a, b) / min(a, b) < 10

const asSum = (x: number) =>
	blank(x + 1)
		.map((_, i) => [x - i, i])
		.filter(isFitting)

const asMult = (x: number) =>
	blank(x)
		.map((_, i) => [x / (i + 1), i + 1])
		.filter(checkRate)
		.filter(isFitting)

const asDiv = (x: number, up = MAX) =>
	blank(up - 1)
		.map((_, i) => [i + 1, (i + 1) / x])
		.filter(isFitting)

const asSub = (x: number, up = MAX) =>
	blank(up)
		.map((_, i) => [i, i - x])
		.filter(checkRate)
		.filter(isFitting)

const toOp =
	(opType: OpType) =>
	(x: number[]): Op => ({
		a: x[0],
		b: x[1],
		op: opType,
	})

const genOps = (answer: number) => {
	const mul = asMult(answer).map(toOp('mul'))
	const div = asDiv(answer).map(toOp('div'))

	const subCount = (mul.length + div.length) / 2

	const sum = pickSome(asSum(answer).map(toOp('add')), subCount)
	const sub = pickSome(asSub(answer, answer * 1.5).map(toOp('sub')), subCount)

	console.info('solutions for ', answer)

	console.info(sum)
	console.info(mul)
	console.info(sub)
	console.info(div)

	return sum.concat(mul).concat(sub).concat(div)
}

export { genOps, type Op, type MappedOp }
