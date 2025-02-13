/**
 * @name Unhandled Promises
 * @description Detect unhandled Promises in JavaScript/TypeScript code.
 * @kind problem
 * @tags reliability, correctness
 */

import javascript

class UnhandledPromise extends Expr {
  UnhandledPromise() {
    exists(this.getType().getAFunction()) and
    not exists(this.getAnOutermostCall().getATry().getCatchBlock())
  }
}

from CallExpr call, UnhandledPromise unhandled
where call = unhandled
select call, "Unhandled promise detected here."
