```mermaid

sequenceDiagram
  participant browser
  participant server

  Note right of browser: User inputs data into the textfield and clicks on the Save button
  Note right of browser: JavaScript code executes by creating the new note, adding it to the notes list and rerendering the note list in the page

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server->>browser: HTTP Status Code 201
  deactivate server
