import { MetadataRoute } from "next"
import { aboutData } from "@/lib/about-data"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: aboutData.publicBaseUrl,
      priority: 1,
    },
    {
      url: `${aboutData.publicBaseUrl}/privacy`,
      priority: 0.5,
    },
    {
      url: `${aboutData.publicBaseUrl}/terms`,
      priority: 0.5,
    },
  ]
}
