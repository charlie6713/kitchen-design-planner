import DesignsManager from "@/components/DesignsManager"
import { designs } from "@/data/designs"

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] px-10 py-10">
      <div className="mx-auto max-w-[1450px]">
        <DesignsManager designs={designs} />
      </div>
    </main>
  )
}