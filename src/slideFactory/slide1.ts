const createSlide1 = (pptx:any) => {
	let slide = pptx.addSlide({masterName: "MASTER_SLIDE1"});
	const textboxText = "Hello World! How are you ?";
	const textboxOpts = { x:1, y:1, color: "363636" };
	slide.addText(textboxText,textboxOpts);
};

export default createSlide1;