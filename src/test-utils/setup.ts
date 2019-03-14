//@ts-ignore
import jinst from "jdbc/lib/jinst";
import { testConn } from "./testConn";

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(["./drivers/jconn3.jar"]);
}

testConn(true).then(() => process.exit());
