type Reverse<T extends string> = T extends `${infer FIRST}${infer REST}`  ? `${Reverse<REST>}${FIRST}` : "";
