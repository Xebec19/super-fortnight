const createSlide3 = (pptx: any) => {
    let dataChartAreaLine = [
        {
            name: "Actual Sales",
            labels: ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 127102, 12789, 10123],
        }, {
            name: "Projected Sales",
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121]
        }
    ];
    let slide = pptx.addSlide({ masterName: "MASTER_SLIDE1" });
    slide.addChart(pptx.ChartType.bar, dataChartAreaLine, { x: 1, y: 1, w: 8, h: 4 })
}

export default createSlide3;