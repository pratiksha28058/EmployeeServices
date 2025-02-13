/**
 * @name Unsafe Evaluation Functions
 * @description Detects usage of `eval`, `setTimeout`, and `setInterval` with string arguments.
 * @kind problem
 * @problem.severity error
 * @id js/unsafe-eval
 * @tags security
 */

import javascript

predicate isUnsafeCall(CallExpr call, string funcName) {
  call.getCallee() instanceof MemberAccess &&
  call.getCallee().getName() = funcName &&
  call.getArgument(0).getType().toString() = "string"
}

from CallExpr call
where
  isUnsafeCall(call, "eval") or
  isUnsafeCall(call, "setTimeout") or
  isUnsafeCall(call, "setInterval")
select call, "This function uses unsafe evaluation: " + call.getCallee().getName() + "."
