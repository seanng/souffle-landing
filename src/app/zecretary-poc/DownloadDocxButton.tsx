'use client'

import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  IParagraphOptions,
  IRunOptions,
  Packer,
  PageNumber,
  Paragraph,
  SectionType,
  TextRun,
  UnderlineType,
} from 'docx'
import { saveAs } from 'file-saver'

const defaultConfig = {
  text: '',
  bold: false,
  italics: false,
  color: '#000000',
  font: 'Times New Roman',
}
function text(input: IRunOptions | string) {
  if (typeof input === 'string') {
    return new TextRun({ ...defaultConfig, text: input })
  }
  return new TextRun({ ...defaultConfig, ...input })
}
function paragraph(input: IParagraphOptions) {
  return new Paragraph({
    style: 'normal',
    ...input,
  })
}

function saveDocumentToFile(doc, fileName) {
  // Create new instance of Packer for the docx module
  // const packer = new Packer()
  // Create a mime type that will associate the new file with Microsoft Word
  const mimeType =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  // Create a Blob containing the Document instance and the mimeType
  Packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType)
    // Save the file using saveAs from the file-saver package
    saveAs(blob, fileName)
  })
}

const sectionFooter = new Footer({
  children: [
    paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        text({
          children: [PageNumber.CURRENT],
        }),
      ],
    }),
    paragraph({}),
    paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'Written Board Resolutions - Approval of accounts',
          italics: true,
        }),
      ],
    }),
  ],
})

function generateDoc({ companyNumber = '1', companyName = 'Zecretary Inc.' }) {
  // Documents contain sections, you can have multiple sections per document,
  let doc = new Document({
    // a Section is a grouping of paragraphs that have a specific set of Properties used to define the pages on which the text will appear.
    styles: {
      paragraphStyles: [
        {
          id: 'normal',
          name: 'Normal',
          basedOn: 'Normal',
          quickFormat: true,
          run: {
            font: 'Times New Roman',
            size: 11 / 0.5,
          },
        },
      ],
    },
    sections: [
      {
        // Properties include page size, page number, page orientation, headers, borders and margins.
        properties: {
          type: SectionType.CONTINUOUS,
          page: {
            margin: {
              top: '0.69in',
              bottom: '0.79in',
              left: '1.25in',
              right: '1.25in',
            },
          },
        },

        children: [
          paragraph({
            text: `Company No. : ${companyNumber}`,
          }),
          paragraph({
            alignment: AlignmentType.CENTER,
            children: [text(companyName)],
          }),
          paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              text({
                text: '(incorporated in Hong Kong with limited liability)',
                italics: true,
              }),
            ],
          }),
          paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              text('(the '),
              text({ text: '“Company”', bold: true }),
              text(')'),
            ],
          }),
          paragraph({}),
          paragraph({
            border: {
              top: {
                color: 'auto',
                style: BorderStyle.SINGLE,
                size: 6,
                space: 1,
              },
            },
          }),
          paragraph({
            alignment: AlignmentType.JUSTIFIED,
            text: 'WRITTEN RESOLUTIONS OF DIRECTORS made pursuant to the Articles of Association of the abovenamed Company:',
          }),
          paragraph({
            border: {
              bottom: {
                color: 'auto',
                style: BorderStyle.SINGLE,
                size: 6,
                space: 1,
              },
            },
          }),
          paragraph({}),
          paragraph({
            children: [
              text({
                text: 'DECLARATION OF INTERESTS',
                bold: true,
                underline: {
                  type: UnderlineType.SINGLE,
                },
              }),
            ],
          }),
          paragraph({}),
          paragraph({
            alignment: AlignmentType.JUSTIFIED,
            children: [
              text({ text: 'Noted that', bold: true }),
              text(
                ' the directors of the Company had fully disclosed their interest, if any, in connection with the transactions as mentioned below in accordance with the articles of association of the Company (the ',
              ),
              text({ text: '“Articles”', bold: true }),
              text(
                ') and the applicable law.  The directors were not, as a result of such interests, prohibited from forming the quorum and voting in accordance with the Articles and the applicable law.',
              ),
            ],
          }),
        ],
        footers: { default: sectionFooter },
      },
    ],
  })
  return doc
}

export function DownloadDocxButton() {
  const handleClick = async () => {
    const doc = generateDoc({})
    saveDocumentToFile(doc, 'New Document.docx')
  }

  return (
    <button
      type="button"
      className="rounded bg-teal-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      onClick={handleClick}
    >
      Download DOCX
    </button>
  )
}
