function extractFile(text) {
    let lastIndex = text.lastIndexOf('\\');
    let fileName = text.substring(lastIndex + 1).split('.');
    let extension = fileName.pop();
    let template = fileName.join('.');

    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')