//@ts-ignore
import jinst from "jdbc/lib/jinst";
import { User } from "../entity/User";
import { testConn } from "./testConn";

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(["./drivers/jconn3.jar"]);
}

(async () => {
  await testConn(false);

  await User.clear();

  await User.create({
    firstName: "Tommy",
    lastName: "Chong",
    email: "tommy.chong@ha.org.hk",
    password: "guesswhat",
    loginCount: 0
  }).save();

  const users = await User.find();
  console.log("user", users);

  process.exit();
})();

/*
create table usr (
  uuid varchar(255) default newid(1),
  firstName nvarchar(255),
  lastName nvarchar(255),
  email nvarchar(255),
  password nvarchar(255),
  loginCount int
)
*/
