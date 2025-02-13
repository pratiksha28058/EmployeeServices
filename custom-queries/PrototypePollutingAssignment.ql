import javascript

from DataFlow::PathNode source, DataFlow::PathNode sink
where source.asExpr().toString() = "sourceIdentifier" and sink.asExpr().toString() = "sinkIdentifier"
select sink, source, "Prototype pollution detected."
