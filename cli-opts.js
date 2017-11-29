const opts = {
  recordSeparator: {
    short: '0',
    long: 'record-separator',
    type: 'string',
    description: 'Specify record separator',
    default: '\n',
    implemented: false,
  },
  autosplit: {
    short: 'a',
    long: 'autosplit',
    type: 'boolean',
    description: 'Autosplit mode with -n or -p. Implies -n',
    implemented: false,
    implies: {
      loop: true
    }
  },
  check: {
    short: 'c',
    long: 'check',
    type: 'boolean',
    description: 'Syntax check script without executing',
    implemented: false,
  },
  eval: {
    short: 'e',
    long: 'eval',
    type: 'string',
    multi: true, // Maybe change this name/format
    description: 'One line of program, several -e\'s allowed, omit programFile',
    implemented: true,
  },
  evalExtra: {
    short: 'E',
    long: 'eval-extra',
    type: 'string',
    multi: true,
    description: 'Like -e, but with all default node modules loaded',
    implemented: false,
  },
  fieldSeparator: {
    short: 'F',
    long: 'field-separator',
    type: 'string',
    description: 'Split pattern for -a switch, will be treated as a regex',
    implemented: false,
  },
  editInPlace: {
    short: 'i',
    long: 'edit-in-place',
    type: 'boolean',
    description: 'Edits files in place',
    implemented: false,
  },
  editInPlaceExtension: {
    long: 'edit-in-place-backup',
    type: 'string',
    description: 'Makes backup of files edited in place',
    implemented: false,
    implies: {
      editInPlance: true,
    }
  },
  includeDirectory: { // TODO: Probably don't need this
    long: 'include-directory',
    short: 'I',
    description: 'Specifies directories to look in for require',
    implemented: false,
  },
  lineTerminator: {
    long: 'line-terminator',
    short: 'l',
    description: 'Enable line ending processing with specified line terminator',
    implemented: false,
  },
  module: {
    long: 'module',
    short: 'M',
    description: 'Import module: const <module> = require(\'module\');',
    implemented: false,
  },
  loop: {
    long: 'loop',
    short: 'n',
    description: 'Execute program file once per line',
    implemented: true,
  },
  print: {
    long: 'print',
    short: 'p',
    description: 'Assumes -n and prints the value of the line',
    implemented: true,
    implies: {
      loop: true,
    }
  },
  printResult: {
    long: 'print-result',
    short: 'P', // Maybe save P for 'P'erl mode
    description: 'Assumes -n and prints the value of the last expression',
    implemented: true,
    implies: {
      loop: true,
    }
  },
  printTrue: {
    long: 'print-true',
    short: 'T',
    description: 'Only print lines with -p or -P if the last expression is true',
    implemented: true,
  },
  parseSwitch: {
    long: 'parse-switch',
    short: 's',
    description: 'Enable rudimentary parsing for switces',
    implemented: false,
  },
  programPath: {
    long: 'program-path',
    short: 'S',
    description: 'Look for programFile using path environment variable',
    implemented: false,
  },
  taintWarnings: {
    long: 'taint-warnings',
    short: 't',
    description: 'Enable tainting warnings',
    implemented: false,
  },
  taintCheck: {
    long: 'taint-check',
    // short: 'T', // stole this for print if True
    description: 'Enable tainting checks',
    implemented: false,
  },
  dumpCore: {
    long: 'dump-core',
    short: 'u',
    description: 'Dump core after parsing program',
    implemented: false,
  },
  unsafe: {
    long: 'unsafe',
    short: 'U',
    description: 'Allow unsafe operations',
    implemented: false,
  },
  version: {
    long: 'version',
    short: 'v',
    description: 'Print version',
    implemented: false,
  },
  configurationSummary: {
    long: 'config-summary',
    short: 'V',
    description: 'Print configuration summary',
    implemented: false,

  },
  warnings: {
    long: 'warnings',
    short: 'w',
    description: 'Enable many useful warnings',
    implemented: false,
  },
  warningsAll: {
    long: 'warnings-all',
    short: 'W',
    description: 'Enable all warnings',
    implemented: false
  },
  ignoreText: {
    long: 'ignoreText',
    short: 'x',
    description: 'Ignore text until #!perl or <script>',
    implemented: false,
  },
  disableWarnings: {
    long: 'disable-warnings',
    short: 'X',
    description: 'Disable all warnings',
    implemented: false,
  },
  chDir: {
    long: 'change-dir',
    short: 'C',
    type: 'string',
    description: 'Change to a directory before executing the script',
    implemented: false,
  },
  encoding: {
    long: 'encoding',
    description: 'Specify the default external and internal character encodings',
    implemented: false,
  },
  enable: {
    long: 'enable',
    description: 'Enable optional features',
    implemented: false,
  },
  disable: {
    long: 'disable',
    description: 'Disable optional features',
    implemented: false,
  },
  externalEncoding: {
    long: 'external-encoding',
    description: 'Specify the default external encoding',
    implemented: false,
  },
  internalEncoding: {
    long: 'internal-encoding',
    description: 'Specify the default internal encoding',
    implemented: false,
  },
  ineractive: {
    long: 'interactive',
    description: 'Always enter the REPL even if stdin does not appear to be a terminal',
    implemented: false,
  },
  requireModule: {
    long: 'require',
    description: 'Module to load',
    multi: false,
    implemented: false,
  },
  noDeprecation: {
    long: 'no-deprecation',
    description: 'Silence deprecation warnings',
    implemented: false,
  },
  throwDeprecation: {
    long: 'throw-deprecation',
    description: 'Throw error on deprecations',
    implemented: false,
  },
  jsonParse: {
    long: 'json-parse',
    short: 'j',
    description: 'Parse JSON in $_ before executing script',
    implemented: false,
  },
  jsonStringify: {
    long: 'json-stringify',
    short: 'J',
    description: 'Stringify json before printing with -p, implies -p',
    implemented: false,
    implies: {
      print: true,
    }
  },
  begin: {
    long: 'begin',
    short: 'A',
    description: 'Evaluate code prior to running programFile',
    multi: true,
    implemented: false,
  },
  end: {
    long: 'end',
    short: 'Z',
    description: 'Evaluate code after running programFile',
    implemented: false,
  },
  perlMode: {
    long: 'perl-mode',
    description: 'Enable perl like functions',
    implemented: true,
  },
  slurp: {
    long: 'slurp',
    description: 'Slurp input into $_',
    implemented: false,
  },
  showCode: {
    long: 'show-code',
    description: 'Show the code that will be evaluated',
    implemented: false,
  },
  debugNalp: {
    long: 'debug-nalp',
    description: 'Debug output for nalp',
    implemented: true,
  },
  httpServer: {
    long: 'http-server',
    description: 'Enable HTTP Server mode',
    implemented: false,
  },
  httpClient: {
    long: 'http-client',
    description: 'Enable HTTP Client mode',
    implemented: false,
  },
  xmlParse: {
    long: 'xml-parse',
    description: 'Parse XML on input',
    implemented: false,
  },
  htmlParse: {
    long: 'html-parse',
    description: 'Parse HTML on input',
    implemented: false,
  },
  plugin: {
    long: 'plugin',
    description: 'Load nalp plugin',
    multi: true,
    implemented: false,
  },
  keepOnTruckin: {
    long: 'keep-on-truckin',
    description: 'Wrap programFile in try/catch block, print errors to STDERR',
    implemented: false,
  },
  fileFind: {
    long: 'file-find',
    description: 'Run file-find plugin',
    implemented: false,
  }
};

module.exports = {
  opts,
};
