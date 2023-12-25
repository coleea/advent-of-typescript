type Count<ARR extends any[], TARGET, COUNT extends any[] = [] > = 
ARR['length'] extends 0 
? COUNT['length']
: ARR extends [infer FIRST, ...infer REST] 
? (FIRST extends TARGET ? Count<REST, TARGET, [...COUNT, 1]> : Count<REST, TARGET, COUNT>)
: COUNT
;
