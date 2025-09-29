const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
//assert.deepStrictEqual(toHoursMinutesSeconds(7540), "2:5:40")