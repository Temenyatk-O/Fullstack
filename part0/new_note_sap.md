sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes a note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message": "note saved successfully"}
    deactivate server

    Note right of browser: The browser updates the UI to display the new note without reloading the page