 import { saveAs } from 'file-saver'; //npm i file-saver

/**
 * Saves a file by opening file-save-as dialog in the browser
 * using file-save library.
 * 
 * @param blobContent file content as a Blob
 * @param fileName name file should be saved as
 */
export const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
};

