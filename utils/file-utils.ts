
export const downloadBlobPdf = async (fileName: string, blobData: any) => {
	const linkSource = await window.URL.createObjectURL(new Blob([blobData]));
	const downloadLink = document.createElement('a');
	downloadLink.href = linkSource;
	downloadLink.download = fileName;
	downloadLink.click();
	downloadLink.remove();
}