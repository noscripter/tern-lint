exports['test invalid arguments validation'] = require('./validate_argument');
exports['test invalid object literal properties validation'] = require('./validate_property_objl');
exports['test unknown property/identifier validation'] = require('./validate_unknown');
exports['test unused variable/function validation'] = require('./validate_unused');
exports['test RegExp validation'] = require('./validate_regexp');

// JSDoc
//exports['test Assignmement JSDoc validation'] = require('./validate_assignmement_jsdoc');
exports['test Argument JSDoc validation'] = require('./jsdoc/validate_assignmement.js');

// Full validation
exports['test full validation'] = require('./validate_full');

if (require.main === module) require("test").run(exports);