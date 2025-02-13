import javascript

/**
 * Detects calls to properties or methods on potentially `null` or `undefined` values.
 */
class NullOrUndefinedAccess extends Expr {
    NullOrUndefinedAccess() {
        exists(CallExpr call | 
            call.getType().getName() = "null" or
            call.getType().getName() = "undefined"
        )
    }
}

from NullOrUndefinedAccess access
select access, "Possible access to null or undefined value."
