type Rebuild<ARR extends any[]> = 
ARR['length'] extends 0
? []
: ARR extends [infer FIRST, ...infer REST] 
? [...MAKE_ARR_OF_SYMBOL<FIRST, GET_SYMBOL<ARR['length']>>, ...Rebuild<REST>]
: never ;


type GET_SYMBOL<LENGTH extends number> = 
LENGTH extends 7 ? '🛹'
: LENGTH extends 6 ? '🚲'
: LENGTH extends 5 ? '🛴'
: LENGTH extends 4 ? '🏄'
: LENGTH extends 3 ? '🛹' 
: LENGTH extends 2 ? '🚲' 
: LENGTH extends 1 ? '🛴' 
: never ;

type MAKE_ARR_OF_SYMBOL<COUNT, SYMBOL extends string, ARR extends any[] = []> = 
ARR['length'] extends COUNT 
? ARR
: MAKE_ARR_OF_SYMBOL<COUNT, SYMBOL, [...ARR, SYMBOL]> ;