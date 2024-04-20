# Create Google Forms from Google Sheets

This Google Apps Script [(`createForm.gs`)](createForm.gs) automates the process of creating Google Forms based on the data provided in a Google Sheets document. It is designed to convert survey or quiz questions stored in a spreadsheet into a functional Google Form, streamlining the creation process.

## Getting Started

### Prerequisites

- A Google account.
- Access to Google Sheets and Google Forms.

### Setup Instructions

#### Step 1: Prepare Your Google Sheet

1. Open Google Sheets and create a new document.
2. In the first sheet, which will be used by the script, input your form questions and configurations according to the format below. Ensure this sheet is in the first position (farthest left tab).

Example table for Google Sheet:

| Question Title               | Question Type      | Options                                      |
|------------------------------|--------------------|----------------------------------------------|
| Section 1: Personal Information | SECTION           | Please fill out the following personal details. |
| What is your full name?      | TEXT               |                                              |
| Describe yourself            | PARAGRAPH          |                                              |
| What is your favorite color? | MULTIPLE_CHOICE    | Red, Green, Blue, Yellow                     |
| Section 2: Preferences       | SECTION            | Let us know about your preferences.          |
| Which fruits do you like?    | CHECKBOX           | Apple, Banana, Cherry, Date                  |
| Choose your department       | DROPDOWN           | HR, Tech, Marketing, Sales                   |
| Section 3: Feedback          | SECTION            | Please provide your feedback.                |
| Rate your satisfaction       | SCALE              | 10, Very Unsatisfied, Very Satisfied         |
| Select your birthdate        | DATE               |                                              |
| What time do you wake up?    | TIME               |                                              |

#### Step 2: Add the Script to Google Forms

1. Open Google Forms.
2. Navigate to the 'Extensions' menu, then select 'Apps Script'.
3. Clear any existing code in the script editor and paste the code from `createForm.gs`.
4. Save the script under a suitable name, e.g., "Create Form from Sheet".

#### Step 3: Run the Script

1. Execute the script by clicking on the play button in the toolbar of the Apps Script editor.
2. If this is your first time running the script, Google will request authorization to access your Google account. Follow the prompts to allow the necessary permissions.

### Important Notes

- When the script runs for the first time, it automatically creates a Google Form and links it to a new Form Responses sheet within your Google Sheets document.
- To run the script with a new set of questions, ensure the sheet with those questions is in the first position.

## Troubleshooting

Ensure that:
- The questions sheet is in the first tab position.
- The first row of your sheet contains headers and is excluded from the form creation.

## Contributions

Contributions to improve the script are welcome! Please fork this repository and submit a pull request with your suggested changes.

## Support

For assistance, please raise an issue in the repository.

## Author

@clarkdever

## License

This project is licensed under the [MIT License](LICENSE).
