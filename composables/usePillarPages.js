import { useAsyncData } from "#app";

export function usePillarPages(folder) {
  return useAsyncData(async () => {
    try {
      const pillarPages = await $fetch(`/api/list-folder`, {
        params: { folder },
      });
      return pillarPages;
    } catch (error) {
      console.error(`❌ Error fetching pillar pages from ${folder}:`, error);
      return [];
    }
  });
}
