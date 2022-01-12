import pptxgen from "pptxgenjs";
import createSlide1 from './slideFactory/slide1';
let pres = new pptxgen();
createSlide1(pres);
pres.writeFile();

