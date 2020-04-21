export default (canvas: HTMLCanvasElement, xArray: number[], yArray: number[], color: string, x:number) => {
    let Ctx = null as any;
    const Width = canvas && canvas.width;
    const Height = canvas && canvas.height;
    const MaxX = x;
    const MinX = -x;
    const MaxY = (MaxX * Height) / Width;
    const MinY = (MinX * Height) / Width;


    function XC(x: number) {
        return ((x - MinX) / (MaxX - MinX)) * Width;
    }

    function YC(y: number) {
        return Height - ((y - MinY) / (MaxY - MinY)) * Height;
    }

    function Draw() {
        if (canvas.getContext) {
            Ctx = canvas.getContext('2d');
            RenderFunction();
        }
    }


    function RenderFunction() {
        if (Ctx) {
            let first = true;
            Ctx.beginPath();
            xArray.forEach((x, index) => {
                if (first) {
                    Ctx.moveTo(XC(x), YC(yArray[index]));
                    first = false;
                } else {
                    Ctx.lineTo(XC(x), YC(yArray[index]));
                }
            });
            Ctx.strokeStyle = color;
            Ctx.stroke();
        }
    }

    Draw();
};
