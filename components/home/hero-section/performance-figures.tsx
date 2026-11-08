import { Figure } from "@/components/home/hero-section/figure"
import { performanceFiguresData } from "@/lib/performance-figures-data"

export function PerformanceFigures() {
  return (
    <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-50 rounded-xl">
      {performanceFiguresData.map((performanceFigure) => (
        <Figure
          key={performanceFigure.id}
          title={performanceFigure.title}
          value={performanceFigure.value}
          suffix={performanceFigure.suffix}
        />
      ))}
    </div>
  )
}
