const defineMasterSlide1 = (pptx:any) => {
    pptx.defineSlideMaster({
        title: "MASTER_SLIDE1",
        background: { color: "FFFFFF" },
        objects: [
            { rect: { x: 0.0, y: 0.0, w: "100%", h: 0.75, fill: { color: "0088CC" }}},
            { image: { x: 7, y: 0, w:1.67, h: 0.75, path: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
        ],
        slideNumber: {x:"50%", y:"90%"},
    });
}
export default defineMasterSlide1;