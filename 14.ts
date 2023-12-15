type DecipherNaughtyList<STR, PREV extends string = ``> = 
STR extends `${infer FIRST}${infer REST}` ? 
		(FIRST extends '/' ? PREV | DecipherNaughtyList<REST> 
  											: DecipherNaughtyList<REST, `${PREV}${FIRST}`>)
 : PREV ;