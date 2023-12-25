type FindSanta<DOUBLE_TUPLE extends any[][], OUTER_INDEX_ARR extends any[] = []> = 
DOUBLE_TUPLE['length'] extends 0
? never 
: DOUBLE_TUPLE extends [infer FIRST, ...infer REST extends any[]] 
? (SEARCH<FIRST> extends number ? [OUTER_INDEX_ARR['length'], SEARCH<FIRST>] : FindSanta<REST, [...OUTER_INDEX_ARR, 1]>)
: never

type SEARCH<ARR, INDEX_ARR extends any[] = []> = 

ARR extends [infer FIRST, ...infer REST]  ? (
	FIRST extends '🎅🏼' 
	? INDEX_ARR['length'] 
	: SEARCH<REST, [...INDEX_ARR, 1]>
) : '꽝' ; 