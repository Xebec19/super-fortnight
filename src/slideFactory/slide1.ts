const createSlide1 = (pptx:any) => {
	let slide = pptx.addSlide();
	const textboxText = "Hello World!";
	const textboxOpts = { x:1, y:1, color: "363636" };
	slide.addText(textboxText,textboxOpts);
};

export default createSlide1;