# BlueCrown Finance — Fresh Project

A clean React + Vite website with a loan enquiry form that opens WhatsApp click-to-chat.

## WhatsApp destination

The form opens a pre-filled WhatsApp message for **+254 702 324 046** (`254702324046`).

**Important:** WhatsApp will not send the application automatically. The applicant must review the pre-filled message and press **Send** in WhatsApp. This website does not save applications to a database, send SMS messages, or approve loans.

The form intentionally does not ask for a national ID number. Avoid sending national ID numbers, passwords, PINs, or other highly sensitive information in the initial WhatsApp enquiry.

## Run on Windows

1. Extract `bluecrown-finance-fresh.zip`.
2. Open the extracted `bluecrown-finance-fresh` folder.
3. Click the File Explorer address bar, type `cmd`, and press Enter.
4. Run:

   ```bat
   npm install
   npm run dev
   ```

5. Open the local address shown in the terminal, normally `http://localhost:5173/`.
6. Keep that terminal window open while testing.

You need Node.js and npm installed. To make a production build, run `npm run build`.

## Main files

- `src/App.jsx` — page and WhatsApp form behaviour
- `src/styles.css` — responsive styling
- `index.html` — page metadata
- `package.json` — dependencies and commands

## Editing the WhatsApp number

In `src/App.jsx`, update `WHATSAPP_NUMBER` and the direct WhatsApp links together if the business number changes. Use the international number without `+`, spaces, or leading zero for the `wa.me` URL.
