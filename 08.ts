type RemoveNaughtyChildren<OBJECT extends object> = {[K in keyof OBJECT as K extends `naughty_${string}` ? never  : K ] : OBJECT[K]  };
