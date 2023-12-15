type DayCounter<FROM,TO, ARRAY extends Array<number> = [1] > = FROM extends TO ? 
TupleToUnion<ARRAY>
: DayCounter<[...ARRAY, any]['length'],TO, [...ARRAY, [...ARRAY, any]['length'] ]>
;

type TupleToUnion<ARR extends any[]> = ARR extends [infer FIRST, ...infer REST] ? FIRST | TupleToUnion<REST> : never ;