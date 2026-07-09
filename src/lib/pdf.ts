export async function extractPdfText(file: File): Promise<string> {
  const [pdfjsLib, { default: pdfjsWorker }] = await Promise.all([
    import("pdfjs-dist"),
    import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
  ])
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

  const buffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise

  const pageTexts: string[] = []
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber)
    const content = await page.getTextContent()
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ")
    pageTexts.push(pageText)
  }

  return pageTexts.join("\n\n").trim()
}
