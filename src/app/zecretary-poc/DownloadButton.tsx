'use client'
import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import download from 'downloadjs'
// import nar1 from '@/assets/nar1.pdf'

const fillPdfDoc = async () => {
  // Fetch the PDF with form fields
  const formUrl = '/forms/nar1.pdf'
  const formBytes = await fetch(formUrl).then((res) => res.arrayBuffer())

  // Fetch the Ubuntu font
  const fontUrl = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
  const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer())

  // Load the PDF with form fields
  const pdfDoc = await PDFDocument.load(formBytes)

  // Embed the Ubuntu font
  pdfDoc.registerFontkit(fontkit)
  await pdfDoc.embedFont(fontBytes)

  // fill form
  const form = pdfDoc.getForm()
  const companyNameField = form.getTextField(
    'topmostSubform[0].Page1[0].fill_2[0]',
  )
  const businessNameField = form.getTextField(
    'topmostSubform[0].Page1[0].fill_3[0]',
  )
  const companyTypeField = form.getRadioGroup(
    'topmostSubform[0].Page1[0].RadioButtonList[0]',
  )

  companyNameField.setText('Zecretary Inc.')
  businessNameField.setText('Zecretary 365')
  companyTypeField.select('2')

  const pdfBytes = await pdfDoc.save()

  return pdfBytes
}

export function DownloadButton() {
  const handleClick = async () => {
    const pdfBytes = await fillPdfDoc()
    download(pdfBytes, 'pdf-lib_form_creation_example.pdf', 'application/pdf')
  }

  return (
    <button
      type="button"
      className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleClick}
    >
      Download
    </button>
  )
}
