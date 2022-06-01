console.log(`
RegExp Creates a regular expression object for matching text with a pattern. new RegExp('\\w+')
RegExp.prototype.dotAll Indicates whether or not the "s" flag is used with the regular expression. regex1.dotAll
RegExp.prototype.flags Returns a string consisting of the flags of the current regular expression object, examples: /foo/ig.flags, /bar/myu.flags
RegExp.prototype.global Indicates whether or not the "g" flag is used with the regular expression. regex1.global
RegExp.prototype.hasIndices Indicates whether or not the "d" flag is used with the regular expression regex1.hasIndices
RegExp.prototype.ignoreCase Indicates whether or not the "i" flag is used with the regular expression. regex2.ignoreCase
RegExp: lastIndex Specifies the index at which to start the next match. regex1.lastIndex
RegExp.prototype.multiline Indicates whether or not the "m" flag is used with the regular expression. regex1.multiline
RegExp.prototype.exec() Executes a search for a match in a specified string, examples: new RegExp('foo', 'g').exec('table football, foosball')*
RegExp.prototype.test() Executes a search for a match between a regular expression and a specified string. Returns true or false. regex.test(str)
`);