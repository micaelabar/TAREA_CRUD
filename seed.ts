"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.product.createMany({
        data: [
            { name: 'Product 1', description: 'Description for product 1', price: 10.0 },
            { name: 'Product 2', description: 'Description for product 2', price: 20.0 },
            { name: 'Product 3', description: 'Description for product 3', price: 30.0 },
            { name: 'Product 4', description: 'Description for product 4', price: 40.0 },
            { name: 'Product 5', description: 'Description for product 5', price: 50.0 },
            { name: 'Product 6', description: 'Description for product 6', price: 60.0 },
            { name: 'Product 7', description: 'Description for product 7', price: 70.0 },
            { name: 'Product 8', description: 'Description for product 8', price: 80.0 },
            { name: 'Product 9', description: 'Description for product 9', price: 90.0 },
            { name: 'Product 10', description: 'Description for product 10', price: 100.0 },
        ],
    });
}
main()
    .catch((e) => {
