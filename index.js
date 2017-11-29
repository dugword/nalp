'use strict';

/*
    Perl Mode | Perl Extras
    $\ output record separator

    TODO:
    p should imply n
*/

const getOpts = require('./lib/get-opts').getOpts;

const opts = require('./cli-opts').opts;

const {flags, leftovers} = getOpts(opts, process.argv.slice(2));

const begin = (flags.begin || []).join(';');
const programFile = (flags.eval || []).concat(flags.evalExtra || []).join(';');
const end = (flags.end || []).join(';');

const program =
    `// BEGIN
${begin};
// PROGRAM
${programFile};
// END
${end};
`;

if (flags.debugNalp) {
    console.log('Eval-ing');
    console.dir(flags);
    console.log(program);
}

let $_;
if (flags.perlMode) {
    global.say = function say(...args) {
        if (!args.length) {
            console.log($_);
        }
        else {
            console.log(...args);
        }
    }

    global.print = function say(...args) {
        if (!args.length) {
            process.stdout.write($_);
        }

    }
}

if (flags.loop) {
    process.stdin.setEncoding('utf8');
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
    });

    eval(begin);

    rl.on('line', (line) => {
        $_ = line;
        const programFileResult = eval(programFile);
        flags.print && console.log($_);
        flags.printResult && console.log(programFileResult);
    }).on('close', () => {
        eval(end);
        process.exit(0);
    });
} else {
    (function() {
        eval(program);
    }())
}
