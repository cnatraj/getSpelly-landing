import { useRoute } from "vue-router";
import { computed } from "vue";

export function useBreadcrumbs() {
  const route = useRoute();

  const breadcrumbs = computed(() => {
    // Start with Home
    const crumbs = [
      {
        title: "Home",
        to: "/",
      },
    ];

    // Split the path into segments
    const pathSegments = route.path.split("/").filter((segment) => segment);

    // Build up the breadcrumbs based on the path segments
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Format the title (capitalize and replace hyphens/underscores with spaces)
      const title = segment
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // If it's the last segment (current page)
      if (index === pathSegments.length - 1) {
        crumbs.push({
          title: route.meta.title || title,
          disabled: true,
        });
      } else {
        crumbs.push({
          title: route.meta.title || title,
          to: currentPath,
        });
      }
    });

    return crumbs;
  });

  return {
    breadcrumbs,
  };
}
