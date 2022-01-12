import pptxgen from "pptxgenjs";
import createSlide1 from './slideFactory/slide1';
import defineMasterSlide1 from './masterSlides/masterSlide1';
import createSlide2 from "./slideFactory/slide2";
import createSlide3 from "./slideFactory/slide3";
let pres = new pptxgen();
defineMasterSlide1(pres);
createSlide1(pres);
createSlide2(pres);
createSlide3(pres);
pres.writeFile();

