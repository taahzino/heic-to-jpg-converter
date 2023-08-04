# HEIC to JPEG Converter

This project is a simple Node.js application that converts .heic files to .jpg format. It's very useful for batch processing of images and can be handy if you have a lot of .heic files that you want to convert.

## Requirements

- Node.js version: 20.2.0
- Npm version: 9.6.1

## Dependencies

- fs: for file system related operations
- heic-convert: for converting .heic files to .jpg

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/tushariar/heic-to-jpg-converter.git
   ```

2. Navigate to the project directory:

   ```
   cd heic-to-jpg-converter
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

1. Update the `DIR` and `OUTPUT` path in the index.js file to point to your directory with .heic files and output directory respectively.

2. Set the `deleteAfterConversion` variable in index.js file to true if you want to delete the .heic files after conversion.

3. Run the application:

   ```
   npm start
   ```

## Important Note

This application converts all .heic files found in the specified directory to .jpg. If you set `deleteAfterConversion` to true, it will also delete the original .heic files after conversion. Please ensure you have a backup of your files before using this feature.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
