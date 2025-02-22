// Generated from ./src/components/Search/Parser/SearchGrammar.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState,
	DFA,
	Lexer,
	LexerATNSimulator,
	PredictionContextCache,
	Token,
} from 'antlr4'
export default class ExprParserLexer extends Lexer {
	public static readonly AND = 1
	public static readonly OR = 2
	public static readonly NOT = 3
	public static readonly EQ = 4
	public static readonly NEQ = 5
	public static readonly LT = 6
	public static readonly LTE = 7
	public static readonly GT = 8
	public static readonly GTE = 9
	public static readonly COMMA = 10
	public static readonly SEMI = 11
	public static readonly QUOT = 12
	public static readonly LPAREN = 13
	public static readonly RPAREN = 14
	public static readonly LCURLY = 15
	public static readonly RCURLY = 16
	public static readonly ID = 17
	public static readonly STRING = 18
	public static readonly WS = 19
	public static readonly EOF = Token.EOF

	public static readonly channelNames: string[] = [
		'DEFAULT_TOKEN_CHANNEL',
		'HIDDEN',
	]
	public static readonly literalNames: (string | null)[] = [
		null,
		"'AND'",
		"'OR'",
		"'NOT'",
		"'='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"','",
		"';'",
		"'\"'",
		"'('",
		"')'",
		"'{'",
		"'}'",
	]
	public static readonly symbolicNames: (string | null)[] = [
		null,
		'AND',
		'OR',
		'NOT',
		'EQ',
		'NEQ',
		'LT',
		'LTE',
		'GT',
		'GTE',
		'COMMA',
		'SEMI',
		'QUOT',
		'LPAREN',
		'RPAREN',
		'LCURLY',
		'RCURLY',
		'ID',
		'STRING',
		'WS',
	]
	public static readonly modeNames: string[] = ['DEFAULT_MODE']

	public static readonly ruleNames: string[] = [
		'AND',
		'OR',
		'NOT',
		'EQ',
		'NEQ',
		'LT',
		'LTE',
		'GT',
		'GTE',
		'COMMA',
		'SEMI',
		'QUOT',
		'LPAREN',
		'RPAREN',
		'LCURLY',
		'RCURLY',
		'ID',
		'STRING',
		'WS',
	]

	constructor(input: CharStream) {
		super(input)
		this._interp = new LexerATNSimulator(
			this,
			ExprParserLexer._ATN,
			ExprParserLexer.DecisionsToDFA,
			new PredictionContextCache(),
		)
	}

	public get grammarFileName(): string {
		return 'SearchGrammar.g4'
	}

	public get literalNames(): (string | null)[] {
		return ExprParserLexer.literalNames
	}
	public get symbolicNames(): (string | null)[] {
		return ExprParserLexer.symbolicNames
	}
	public get ruleNames(): string[] {
		return ExprParserLexer.ruleNames
	}

	public get serializedATN(): number[] {
		return ExprParserLexer._serializedATN
	}

	public get channelNames(): string[] {
		return ExprParserLexer.channelNames
	}

	public get modeNames(): string[] {
		return ExprParserLexer.modeNames
	}

	public static readonly _serializedATN: number[] = [
		4, 0, 19, 98, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2,
		4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
		10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2,
		15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 1, 0, 1, 0, 1, 0,
		1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4,
		1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 9,
		1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 1, 13, 1, 14, 1,
		14, 1, 15, 1, 15, 1, 16, 4, 16, 81, 8, 16, 11, 16, 12, 16, 82, 1, 17, 1,
		17, 5, 17, 87, 8, 17, 10, 17, 12, 17, 90, 9, 17, 1, 17, 1, 17, 1, 18, 4,
		18, 95, 8, 18, 11, 18, 12, 18, 96, 1, 88, 0, 19, 1, 1, 3, 2, 5, 3, 7, 4,
		9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27,
		14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 1, 0, 2, 5, 0, 45, 45, 48,
		57, 65, 90, 95, 95, 97, 122, 3, 0, 9, 10, 12, 13, 32, 32, 100, 0, 1, 1,
		0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1,
		0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17,
		1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0,
		25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0,
		0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 1, 39, 1, 0, 0,
		0, 3, 43, 1, 0, 0, 0, 5, 46, 1, 0, 0, 0, 7, 50, 1, 0, 0, 0, 9, 52, 1, 0,
		0, 0, 11, 55, 1, 0, 0, 0, 13, 57, 1, 0, 0, 0, 15, 60, 1, 0, 0, 0, 17,
		62, 1, 0, 0, 0, 19, 65, 1, 0, 0, 0, 21, 67, 1, 0, 0, 0, 23, 69, 1, 0, 0,
		0, 25, 71, 1, 0, 0, 0, 27, 73, 1, 0, 0, 0, 29, 75, 1, 0, 0, 0, 31, 77,
		1, 0, 0, 0, 33, 80, 1, 0, 0, 0, 35, 84, 1, 0, 0, 0, 37, 94, 1, 0, 0, 0,
		39, 40, 5, 65, 0, 0, 40, 41, 5, 78, 0, 0, 41, 42, 5, 68, 0, 0, 42, 2, 1,
		0, 0, 0, 43, 44, 5, 79, 0, 0, 44, 45, 5, 82, 0, 0, 45, 4, 1, 0, 0, 0,
		46, 47, 5, 78, 0, 0, 47, 48, 5, 79, 0, 0, 48, 49, 5, 84, 0, 0, 49, 6, 1,
		0, 0, 0, 50, 51, 5, 61, 0, 0, 51, 8, 1, 0, 0, 0, 52, 53, 5, 33, 0, 0,
		53, 54, 5, 61, 0, 0, 54, 10, 1, 0, 0, 0, 55, 56, 5, 60, 0, 0, 56, 12, 1,
		0, 0, 0, 57, 58, 5, 60, 0, 0, 58, 59, 5, 61, 0, 0, 59, 14, 1, 0, 0, 0,
		60, 61, 5, 62, 0, 0, 61, 16, 1, 0, 0, 0, 62, 63, 5, 62, 0, 0, 63, 64, 5,
		61, 0, 0, 64, 18, 1, 0, 0, 0, 65, 66, 5, 44, 0, 0, 66, 20, 1, 0, 0, 0,
		67, 68, 5, 59, 0, 0, 68, 22, 1, 0, 0, 0, 69, 70, 5, 34, 0, 0, 70, 24, 1,
		0, 0, 0, 71, 72, 5, 40, 0, 0, 72, 26, 1, 0, 0, 0, 73, 74, 5, 41, 0, 0,
		74, 28, 1, 0, 0, 0, 75, 76, 5, 123, 0, 0, 76, 30, 1, 0, 0, 0, 77, 78, 5,
		125, 0, 0, 78, 32, 1, 0, 0, 0, 79, 81, 7, 0, 0, 0, 80, 79, 1, 0, 0, 0,
		81, 82, 1, 0, 0, 0, 82, 80, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 34, 1,
		0, 0, 0, 84, 88, 5, 34, 0, 0, 85, 87, 9, 0, 0, 0, 86, 85, 1, 0, 0, 0,
		87, 90, 1, 0, 0, 0, 88, 89, 1, 0, 0, 0, 88, 86, 1, 0, 0, 0, 89, 91, 1,
		0, 0, 0, 90, 88, 1, 0, 0, 0, 91, 92, 5, 34, 0, 0, 92, 36, 1, 0, 0, 0,
		93, 95, 7, 1, 0, 0, 94, 93, 1, 0, 0, 0, 95, 96, 1, 0, 0, 0, 96, 94, 1,
		0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 38, 1, 0, 0, 0, 4, 0, 82, 88, 96, 0,
	]

	private static __ATN: ATN
	public static get _ATN(): ATN {
		if (!ExprParserLexer.__ATN) {
			ExprParserLexer.__ATN = new ATNDeserializer().deserialize(
				ExprParserLexer._serializedATN,
			)
		}

		return ExprParserLexer.__ATN
	}

	static DecisionsToDFA = ExprParserLexer._ATN.decisionToState.map(
		(ds: DecisionState, index: number) => new DFA(ds, index),
	)
}
