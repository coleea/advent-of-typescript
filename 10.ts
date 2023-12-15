type StreetSuffixTester<T , U> = T extends `${infer FIRST}${string & U}` ? true : false  ;
