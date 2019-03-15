import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "sybase",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "pms1eds2",
    database: "master",
    logging: true,
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "/../entity/*.*"]
  });
};
