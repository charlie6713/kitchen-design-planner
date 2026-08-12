"use client"

import { useState } from "react"
import { createDesign } from "@/app/designs/create/actions"

export default function CreateDesignForm() {
  const [designName, setDesignName] = useState("")
  const [wallWidth, setWallWidth] = useState("")

  function handleDesignNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDesignName(event.target.value)
  }

  function handleWallWidthChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWallWidth(event.target.value)
  }

  return (
    <form action={createDesign} className="space-y-4">
      <div>
        <label htmlFor="designName">Design Name</label>

        <input
          id="designName"
          name="designName"
          type="text"
          value={designName}
          onChange={handleDesignNameChange}
          className="block border p-2"
        />
      </div>

      <div>
        <label htmlFor="wallWidth">Wall Width (mm)</label>

        <input
          id="wallWidth"
          name="wallWidth"
          type="number"
          value={wallWidth}
          onChange={handleWallWidthChange}
          className="block border p-2"
        />
      </div>

      <button type="submit" className="border px-4 py-2">
        Create Design
      </button>
    </form>
  )
}