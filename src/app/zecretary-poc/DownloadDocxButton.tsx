// 'use client'

// import {
//   AlignmentType,
//   Document,
//   Footer,
//   Header,
//   Packer,
//   PageNumber,
//   Paragraph,
//   SectionType,
//   TextRun,
// } from 'docx'
// import { saveAs } from 'file-saver'

// function saveDocumentToFile(doc, fileName) {
//   // Create new instance of Packer for the docx module
//   // const packer = new Packer()
//   // Create a mime type that will associate the new file with Microsoft Word
//   const mimeType =
//     'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//   // Create a Blob containing the Document instance and the mimeType
//   Packer.toBlob(doc).then((blob) => {
//     const docblob = blob.slice(0, blob.size, mimeType)
//     // Save the file using saveAs from the file-saver package
//     saveAs(docblob, fileName)
//   })
// }

// export function DownloadDocxButton() {
//   const handleClick = async () => {
//     // Documents contain sections, you can have multiple sections per document,
//     let doc = new Document({
//       // a Section is a grouping of paragraphs that have a specific set of Properties used to define the pages on which the text will appear.
//       sections: [
//         {
//           // Properties include page size, page number, page orientation, headers, borders and margins.
//           properties: { type: SectionType.CONTINUOUS },
//           children: [new Paragraph({ children: [new TextRun('Hello World')] })],
//           footers: {
//             default: new Footer({
//               children: [
//                 new Paragraph({
//                   alignment: AlignmentType.CENTER,
//                   children: [new TextRun(PageNumber.CURRENT)],
//                 }),
//                 new Paragraph({
//                   alignment: AlignmentType.CENTER,
//                   children: [
//                     new TextRun({
//                       text: 'Written Board Resolutions - Approval of accounts',
//                       italics: true,
//                     }),
//                   ],
//                 }),
//               ],
//             }),
//           },
//         },
//       ],
//     })

//     saveDocumentToFile(doc, 'New Document.docx')
//   }

//   return (
//     <button
//       type="button"
//       className="rounded bg-teal-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
//       onClick={handleClick}
//     >
//       Download DOCX
//     </button>
//   )
// }
