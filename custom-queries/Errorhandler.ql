import javascript

from ThrowStmt throwStmt, Error error
where
    throwStmt.getExpr() = error and
    // Check if the error message is too generic
    (
        error.getMessage().toLowerCase().matches("error") or
        error.getMessage().toLowerCase().matches("something went wrong") or
        error.getMessage().toLowerCase().matches("invalid")
    )
select throwStmt, "This error message is too generic and uninformative."
