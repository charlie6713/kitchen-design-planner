"use server"

export async function createDesign(formData: FormData) {
  const designNameValue = formData.get("designName")
  const wallWidthValue = formData.get("wallWidth")

  const designName = String(designNameValue ?? "")
  const wallWidth = Number(wallWidthValue ?? 0)

  console.log("Creating design on server")
  console.log("Design Name:", designName)
  console.log("Wall Width:", wallWidth)
}