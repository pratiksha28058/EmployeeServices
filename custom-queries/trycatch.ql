import javascript

from TryStmt tryStmt
where
    // Missing catch block
    not tryStmt.getCatchClause().exists() or
    // Return statement in finally block
    tryStmt.getFinallyClause().getBody().getAChild() instanceof ReturnStmt or
    // Throw statement in finally block
    tryStmt.getFinallyClause().getBody().getAChild() instanceof ThrowStmt
select tryStmt, "Improper usage of try-catch-finally block detected."
