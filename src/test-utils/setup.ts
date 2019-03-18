//@ts-ignore
import jinst from "jdbc/lib/jinst";
import { Note } from "../entity/Note";
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
    password: "guesswhat"
  }).save();

  const users = await User.find();

  for (const user of users) {
    await Note.create({
      title: "title",
      detail: "detail",
      user
    }).save();
  }

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
  loginCount int default 0,
  confirmed bit default 0
)

create table note (
  uuid varchar(255) default newid(1),
  userUuid nvarchar(255),
  title nvarchar(255),
  detail nvarchar(255)
)

drop table usr
drop table note

*/
