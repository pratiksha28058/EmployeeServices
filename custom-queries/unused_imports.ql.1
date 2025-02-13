import javascript

class UnusedImport extends Modules::Import {
  // Implement the required abstract predicates
  override predicate getImportedModuleNode() {
    result = this.getImportedModule()
  }

  override predicate getImportedPath() {
    result = this.getImportPath()
  }

  override predicate getEnclosingModule() {
    result = this.getModule()
  }
}

from UnusedImport ui
where
  // Add a condition to identify unused imports
  not exists(ui.getModule().getAReference())
select ui, "This import is unused."
