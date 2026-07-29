import type {StructureResolver} from 'sanity/structure'

const singletonTypes = [
  {id: 'homePage', title: 'Home'},
  {id: 'publicationsPage', title: 'Publications'},
  {id: 'practicePage', title: 'Practice'},
  {id: 'advisoryPage', title: 'Advisory'},
  {id: 'cvPage', title: 'CV'},
  {id: 'contactPage', title: 'Contact'},
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(
      singletonTypes.map(({id, title}) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(S.document().schemaType(id).documentId(id))
      )
    )
