import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient instance across hot-reloads in development to
// avoid exhausting the database connection pool. In production a new client
// is created per server instance, so we do NOT cache it globally there.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismadb =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismadb;
}

export default prismadb;
