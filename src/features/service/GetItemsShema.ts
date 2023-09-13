export type IndustryIdentifiers = {
  type: string
  identifier: string
}

export type ReadingModes = {
  text: boolean
  image: boolean
}

export type PanelizationSummary = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export type ImageLinks = {
  smallThumbnail: string
  thumbnail: string
}

export type VolumeInfo = {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: IndustryIdentifiers[]
  readingModes: ReadingModes
  pageCount: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export type SaleInfo = {
  country: string
  saleability: string
  isEbook: boolean
}

export type Epub = {
  isAvailable: boolean
}

export type Pdf = {
  isAvailable: boolean
  acsTokenLink: string
}

export type AccessInfo = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export type SearchInfo = {
  textSnippet: string
}

export type Items = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}

export type BookType = {
  kind?: string
  totalItems?: number
  items?: Items[]
}
