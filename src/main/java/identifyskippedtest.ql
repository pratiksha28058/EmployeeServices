import javascript

/**
 * @name Skipped Jest tests
 * @description Detects test cases that are skipped (e.g., using `test.skip` or `it.skip`).
 * @kind problem
 * @problem.severity warning
 */

from CallExpression call
where
  call.getCallee().matches("test.skip") or
  call.getCallee().matches("it.skip")
select call, "This test is skipped. Consider enabling or removing it."
