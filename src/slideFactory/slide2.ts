const createSlide2 = (pptx: any) => {
    const rows = [["Cell 1", "Cell 2", "Cell 3"]];
    let slide = pptx.addSlide({ masterName: "MASTER_SLIDE1" });
    slide.addTable(rows, { w: 9, x: 1, y:1 })
}

export default createSlide2;