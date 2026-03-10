export type Dict<T extends { id: string }> = {
	[key in T['id']]: T
}
