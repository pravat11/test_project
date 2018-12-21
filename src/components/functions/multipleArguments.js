/**
 * Avoid using more than three arguments in a function.
 */
const func1 = (a, b, c, d, e) => {
  //
};

func1(a, b, c, d, e);

/**
 * Alternative solution
 */
const func2 = params => {
  //
};

const params = {
  a,
  b,
  c,
  d,
  e
};

func2(params);

/**
 * Another approach
 */
const func3 = (...args) => {
  //
  args = [a, b, c, d, e, f];
};

func3(a, b, c, d, e, f);

/**
 * Curry
 */
const func4 = (a, b, c) => (d, e, f) => {
  //
};

func4(a, b, c)(d, e, f);
