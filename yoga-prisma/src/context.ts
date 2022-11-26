import {} from "prisma"

export const context = {
  db: new PrismaClient(),
}
