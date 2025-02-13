import javascript

/**
 * @name Unused function
 * @description Finds functions that are never called.
 * @kind problem
 * @problem.severity warning
 */

from Function f
where not exists (CallExpr ce | ce.getCallee() = f)
select f, "This function is never called."
