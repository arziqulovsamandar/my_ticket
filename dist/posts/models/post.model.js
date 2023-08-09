"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const admin_model_1 = require("../../admin/models/admin.model");
let Post = exports.Post = class Post extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'unique id' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'post1', description: 'Post title' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'post body', description: 'Post body' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'post image', description: 'Post image' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'post owner id', description: 'Post owner' }),
    (0, sequelize_typescript_1.ForeignKey)(() => admin_model_1.Admin),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Post.prototype, "adminId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => admin_model_1.Admin),
    __metadata("design:type", admin_model_1.Admin)
], Post.prototype, "author", void 0);
exports.Post = Post = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'posts' })
], Post);
//# sourceMappingURL=post.model.js.map