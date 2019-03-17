import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "sybase",
    host: "localhost",
    port: 5000,
    username: "sa",
    password: "myPassword",
    domain: "MYSYBASE",
    database: "master",
    logging: true,
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "/../entity/*.*"],
    options: {
      disableOutputReturning: true
    }
  });
};
