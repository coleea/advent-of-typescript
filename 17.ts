type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type WhoWins<A,B> = 
A extends '👊🏻' 
? VSRock<B>
: A extends '🖐🏾' 
? VSPaper<B>
: A extends '✌🏽' 
? VSScissors<B>
: never
;

type VSScissors<TARGET> = 
TARGET extends '👊🏻' 
? 'win'
: TARGET extends '🖐🏾' 
? 'lose' : 
TARGET extends '✌🏽' 
? 'draw'
: never
;


type VSPaper<TARGET> = 
TARGET extends '👊🏻' 
? 'lose'
: TARGET extends '🖐🏾' 
? 'draw' : 
TARGET extends '✌🏽' 
? 'win'
: never
;



type VSRock<TARGET> = 
TARGET extends '👊🏻' 
? 'draw'
: TARGET extends '🖐🏾' 
? 'win' : 
TARGET extends '✌🏽' 
? 'lose'
: never
;