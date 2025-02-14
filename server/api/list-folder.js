import fs from "fs/promises";
import path from "path";

// this api will list all the folders inside the given folder
// Look for an index.json file in each subfolder and return its content
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const folder = query.folder;

  if (!folder) {
    return { error: "Missing folder parameter" };
  }

  try {
    const dirPath = path.join(process.cwd(), "data", folder);

    // Read subfolders inside the given folder
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    const subFolders = items
      .filter((item) => item.isDirectory())
      .map((dir) => dir.name);

    // Fetch index.json from each subfolder
    const pillarPages = await Promise.all(
      subFolders.map(async (subFolder) => {
        const jsonPath = path.join(dirPath, subFolder, "index.json");

        try {
          const fileContent = await fs.readFile(jsonPath, "utf-8");
          const pageData = JSON.parse(fileContent);
          return { ...pageData, slug: subFolder }; // Add slug for easy linking
        } catch (error) {
          console.warn(`⚠️ No valid index.json found in ${subFolder}`);
          return null; // Ignore folders without valid index.json
        }
      })
    );

    return pillarPages.filter((p) => p !== null); // Remove null values
  } catch (error) {
    console.error(`❌ Error reading folder ${folder}:`, error);
    return { error: "Failed to read directory" };
  }
});
