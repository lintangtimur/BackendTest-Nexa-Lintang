// const { PrismaClient } = require("@prisma/client");
const {PrismaClient} = require("../generated/client-mysql")

const prisma = new PrismaClient();

module.exports = prisma;