// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
          .title('Home Page Editor')
          .id('home')
          .schemaType('home')
          .documentId('singleton-home')
        ),
      S.listItem()
        .title('Contact Page')
        .child(
          S.editor()
          .title('Contact Page Editor')
          .id('contact')
          .schemaType('contact')
          .documentId('singleton-contact')
        ),
      S.listItem()
      .title('Work With')
      .child(
        S.editor()
        .title('Work With Page Editor')
        .id('workWith')
        .schemaType('workWith')
        .documentId('singleton-workWith')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(
          (listItem) =>
          !['home', 'contact', 'workWith'].includes(
            listItem.getId()
            )
            ),
            S.divider(),
      ]);