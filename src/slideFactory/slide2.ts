const createSlide2 = (pptx: any) => {
    const rows: any[] = [];
    rows.push([
        { text: "TH1", options: { fill: "0088cc", color: "ffffff", valign: "middle" } },
        { text: "TH2", options: { fill: "0088CC", color: "ffffff", valign: "middle" } },
        { text: "TH3", options: { fill: "0088CC", color: "ffffff", valign: "middle" } },
    ]);
    for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
        let col3Lines = [{ text: "Complex-Title", options: { bold: true,  breakLine: true } }];
        for (let lineIdx = 0; lineIdx < 9; lineIdx++) {
            col3Lines.push({ text: `This is ROW#:${rowIdx + 1} LNE#:${lineIdx + 1}`, options: { bold:true,breakLine: true } });
        }
        rows.push([{text:''},{text:""},{text: col3Lines}])
    }
    let slide = pptx.addSlide({ masterName: "MASTER_SLIDE1" });
    slide.addTable(rows, { w: 9, x: 1, y: 1 ,autoPage:true, autoPageRepeatHeader: true,})
}

export default createSlide2;