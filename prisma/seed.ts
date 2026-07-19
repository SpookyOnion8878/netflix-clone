import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

/**
 * Seed script: populates the database with a small set of sample movies so the
 * Netflix clone has content to display. Run with `npm run db:seed`.
 *
 * Sample videos use the free, royalty-licensed "Big Buck Bunny" / "Sintel"
 * trailers hosted by Google for demo purposes.
 */
const movies = [
  {
    title: "Big Buck Bunny",
    description:
      "A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, in this open-source animated short.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl: "/images/poster.png",
    genre: "Animation",
    duration: "10m",
  },
  {
    title: "Sintel",
    description:
      "A lonely young woman, Sintel, helps and befriends a dragon she names Scales, in this Blender Foundation short film.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailUrl: "/images/poster.png",
    genre: "Fantasy",
    duration: "15m",
  },
  {
    title: "Elephants Dream",
    description:
      "Two characters explore a strange and ever-changing mechanical world in the first open-movie project by the Blender Foundation.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl: "/images/poster.png",
    genre: "Sci-Fi",
    duration: "11m",
  },
  {
    title: "For Bigger Blazes",
    description: "A short promotional clip demonstrating Chromecast streaming in action.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "/images/poster.png",
    genre: "Action",
    duration: "0m",
  },
  {
    title: "Tears of Steel",
    description:
      "A group of soldiers and scientists try to save the world from destruction in a future Amsterdam in this VFX-heavy short.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnailUrl: "/images/poster.png",
    genre: "Sci-Fi",
    duration: "12m",
  },
];

async function main() {
  console.log(`Seeding ${movies.length} movies...`);

  for (const movie of movies) {
    const existing = await db.movie.findFirst({ where: { title: movie.title } });

    if (existing) {
      await db.movie.update({ where: { id: existing.id }, data: movie });
    } else {
      await db.movie.create({ data: movie });
    }
  }

  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
