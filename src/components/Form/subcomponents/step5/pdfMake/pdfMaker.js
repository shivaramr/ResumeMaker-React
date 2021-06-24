import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import resume from './resume';

export default function pdfMaker(data) {
  const { vfs } = vfsFonts.pdfMake;
  pdfMake.vfs = vfs;

  // pdfMake.createPdf({content: 'Hi. I am a PDF.'}).open();
  return pdfMake.createPdf(resume(data)).download();
}
