import fs from "fs/promises";
import path from "path";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const slug = query.slug;

  if (!slug) {
    return { error: "Missing slug parameter" };
  }

  try {
    const jsonPath = path.join(
      process.cwd(),
      "data",
      "resources",
      slug,
      "index.json"
    );

    // Read the file
    const fileContent = await fs.readFile(jsonPath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    return jsonData;
  } catch (error) {
    console.error(`❌ Error fetching resource for ${slug}:`, error);
    return { error: "Resource not found" };
  }
});
