1 == '1';       // is true. javascript will convert one side to evaluate. type coercion is languages converting one type to another type.
//  double equals is asking javascript to use type coercion. If they have different types, try to coerce one into same type.

1 === '1';      // 3 equals means compare but don't try to coerce the values. is false. Be explicit with comparison.

if (1) {        // javascript coerces 1 to equal true (truthiness). displays 5 cuz 1 is true.
    console.log(5);
}

if (0) {        // coerces to false, so doesn't run.
    console.log(5);
}

-0 === +0;      // return true, although technically different.

Object.is(-0, +0);      // returns false. Object.is works for the most part like triple =, except for some cases.

NaN === NaN;    // returns false
Object.is(NaN, NaN);       // returns true. refer to MDN article for Object.is comparisons.