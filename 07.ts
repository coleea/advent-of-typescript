type AppendGood<T> = {  [P in keyof T as `good_${Uncapitalize<string & P>}`]: T[P];
};
