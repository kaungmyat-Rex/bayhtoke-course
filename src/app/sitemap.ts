import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.bayhtokecourse.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses/r2tYNzEfiyGCIvx2fBFI",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses/0fNgObgBuFUzZTzT7qD1",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses/Q4v7ALvqx9R8cmaEZo3a",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses/ZklXt6KAwnvZRwbfHb9q",
      lastModified: new Date(),
    },
    {
      url: "https://www.bayhtokecourse.com/courses/xxiY0MElvbGWk6I4UYwC",
      lastModified: new Date(),
    },
  ];
}
