type FindSanta<ARR extends Array<any>, Count extends any[] = []> = ARR extends [infer FIRST, ...infer REST] ? 
FIRST  extends  '🎅🏼' ? Count['length'] : FindSanta<REST, [...Count, any]>
: never ;  