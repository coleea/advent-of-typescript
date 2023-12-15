type BoxToys<STR extends string, NUM extends number> = 
    NUM extends number
    ? MAKE_ARR<STR, NUM, []>
    : never; 

type MAKE_ARR<STR extends string , NUM extends number, ARR extends any[]> =
ARR['length'] extends NUM ? ARR : MAKE_ARR<STR, NUM, [...ARR, STR] >