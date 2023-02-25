function min(a, b) {
    if (Array.isArray(a)) {
        console.log(Math.max(...a));
    }
    else if(typeof a === 'number' && typeof b === 'number') {
        console.log(Math.max(a, b));
    }
    else {
        let one = a.a
        let two = a.b
        let oneB = b?.a
        let twoB = b?.b
        if (b) {
            console.log(Math.max(one, two, oneB, twoB));
        }
        console.log(Math.max(one, two));
    }
}

min(7, 2)
min([1, 2, 6])
min({ a: 1, b: 8 })
min({ a: 1, b: 2 }, { a: 11, b: 12 })