"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmModuleConfigured = void 0;
const typeorm_1 = require("@nestjs/typeorm");
var config = {
    type: "postgres",
    port: 5432,
    host: "127.0.0.1",
    database: "ucare-db",
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
    username: "postgres",
    password: "password"
};
exports.TypeOrmModuleConfigured = typeorm_1.TypeOrmModule.forRoot(config);
//# sourceMappingURL=orm.config.js.map