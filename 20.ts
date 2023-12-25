import { $, T, S, O, Pipe, ComposeLeft, _ } from "hotscript";

declare global {
	type ToAsciiArt<T extends string> = Pipe<
		T,
		[
			S.Split<"\n">,
			T.FlatMap<
				ComposeLeft<
					[
						S.Uppercase,
						S.Split<"">,
						T.Map<O.Get<_, Letters>>,
						T.Reduce<T.ZipWith<S.Prepend>, ["", "", ""]>,
					]
				>
			>,
		]
	>;
}
 

// prettier-ignore
type Letters = {
    A: [
        '█▀█ ',
        '█▀█ ',
        '▀ ▀ ',
    ],
    B: [
        '█▀▄ ',
        '█▀▄ ',
        '▀▀  '
    ],
    C: [
        '█▀▀ ',
        '█ ░░',
        '▀▀▀ '
    ],
    E: [
        '█▀▀ ',
        '█▀▀ ',
        '▀▀▀ '
    ],
    H: [
        '█ █ ',
        '█▀█ ',
        '▀ ▀ '
    ],
    I: [
        '█ ',
        '█ ',
        '▀ '
    ],
    M: [
        '█▄░▄█ ',
        '█ ▀ █ ',
        '▀ ░░▀ '
    ],
    N: [
        '█▄░█ ',
        '█ ▀█ ',
        '▀ ░▀ '
    ],
    P: [
        '█▀█ ',
        '█▀▀ ',
        '▀ ░░'
    ],
    R: [
        '█▀█ ',
        '██▀ ',
        '▀ ▀ '
    ],
    S: [
        '█▀▀ ',
        '▀▀█ ',
        '▀▀▀ '
    ],
    T: [
        '▀█▀ ',
        '░█ ░',
        '░▀ ░'
    ],
    Y: [
        '█ █ ',
        '▀█▀ ',
        '░▀ ░'
    ],
    W: [
        '█ ░░█ ',
        '█▄▀▄█ ',
        '▀ ░ ▀ '
    ],
    ' ': [
        '░',
        '░',
        '░'
    ],
    ':': [
        '#',
        '░',
        '#'
    ],
    '*': [
        '░',
        '#',
        '░'
    ],
};