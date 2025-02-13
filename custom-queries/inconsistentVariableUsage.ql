import javascript

/**
 * @name Inconsistent loop variable usage
 * @description Detects inconsistent use of `var`, `let`, and `const` in loops.
 * @kind problem
 * @problem.severity warning
 */

from ForStatement fs, VariableDeclaration vd
where
  // Match variable declarations within a for loop
  fs.getVariableDeclaration() = vd and
  // Ensure the declaration uses `var` (flag inconsistent usage)
  vd.getKind() = "var"
select fs, "Inconsistent usage of 'var' in loop declaration. Use 'let' or 'const' instead."
