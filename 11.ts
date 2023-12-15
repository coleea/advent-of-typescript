// WIP

type SantaListProtector<OBJ extends Record<any, any> > = { 
    readonly [ KEY in keyof OBJ ] : OBJ[KEY] extends Record<any, any> ? SantaListProtector<OBJ[KEY]> : OBJ[KEY]  
} ; 