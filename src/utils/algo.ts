import { pick } from './array'
import { genOps, type MappedOp } from './ops'
import { makeVarNames, randf, randi_range } from './rand'

const set_check = (op: MappedOp): MappedOp => {
	if (typeof op.a === 'number' && typeof op.b === 'number') {
		// console.log(JSON.stringify(op))
		switch (op.op) {
			case 'add': {
				op.a = op.a + op.b
				break
			}
			case 'sub': {
				op.a = op.a - op.b
				break
			}
			case 'div': {
				op.a = op.a / op.b
				break
			}
			case 'mul': {
				op.a = op.a * op.b
				break
			}
		}

		op.b = ''
		op.op = 'set'
		// console.log(JSON.stringify(op))
	}

	return op
}

const err: MappedOp = {
	op: 'err',
	a: '',
	b: '',
	out: '',
}

const notGood = (algo: MappedOp[]): boolean =>
	algo.some((op) => /* (op.op === 'div' || op.op === 'mul') && */ op.op === 'err' || op.a === 1 || op.b === 1)

export const buildAlgo = (answer: number, tries = 100): MappedOp[] => {
	const algo: MappedOp[] = []
	const values = Object.fromEntries(makeVarNames(randi_range(6, 9)).map((name) => [name]))
	const final_var = pick(Object.keys(values))

	const stack = (x: MappedOp) => algo.splice(0, 0, x)
	const queue = (x: MappedOp) => algo.push(x)

	const free_vars = () => Object.keys(values).filter((key) => isNaN(values[key]))

	const solve = (var_name: string, val: number) => {
		// console.log('Make "%s" to be %d', var_name, val)
		values[var_name] = val
		const op = pick(genOps(val))

		if (!op) {
			stack(err)
			return
		}

		const res: MappedOp = {
			op: op.op,
			a: op.a,
			b: op.b,
			out: var_name,
		}

		if (randf() < 0.67 && free_vars().length > 0 && op.a > 2) {
			const name_a = pick(free_vars())
			solve(name_a, op.a)
			res.a = name_a
		}

		if (randf() < 0.67 && free_vars().length > 0 && op.b > 2) {
			const name_b = pick(free_vars())
			solve(name_b, op.b)
			res.b = name_b
		}

		queue(set_check(res))
	}

	solve(final_var, answer)

	algo.push({
		op: 'out',
		a: '',
		b: '',
		out: final_var,
	})

	// console.log({ values })
	// console.table(algo)
	// console.log({ final_var })
	// console.log({ answer })
	// console.log({ notGood: notGood(algo) })

	const should_redo = notGood(algo) || (tries > 0 && free_vars().length > 0)

	return should_redo ? buildAlgo(answer, tries - 1) : algo
}
