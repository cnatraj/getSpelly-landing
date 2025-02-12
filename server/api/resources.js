import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async () => {
  const resourcesDir = path.resolve("data/resources");

  try {
    const files = await fs.readdir(resourcesDir);
    const slugs = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));

    return { slugs };
  } catch (error) {
    console.error("Error reading resource files:", error);
    return { slugs: [] };
  }
});
