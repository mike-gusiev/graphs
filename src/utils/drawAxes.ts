export default (canvas: HTMLCanvasElement, x: number) => {
    let Ctx = canvas.getContext("2d");
    Ctx && Ctx.clearRect(0, 0, 600, 600)
    const Width = canvas && canvas.width;
    const Height = canvas && canvas.height;
    const MaxX = x;
    const MinX = -x;
    const MaxY = (MaxX * Height) / Width;
    const MinY = (MinX * Height) / Width;
    const XTickDelta = 1;
    const YTickDelta = 1;

    function XC(x: number) {
        return ((x - MinX) / (MaxX - MinX)) * Width;
    }

    function YC(y: number) {
        return Height - ((y - MinY) / (MaxY - MinY)) * Height;
    }

    function drawAxes() {
        if (Ctx) {
            Ctx.strokeStyle = 'black';
            let i;
            Ctx.save();
            Ctx.lineWidth = 2;
            // +Y axis
            Ctx.beginPath();
            Ctx.moveTo(XC(0), YC(0));
            Ctx.lineTo(XC(0), YC(MaxY));
            Ctx.stroke();

            // -Y axis
            Ctx.beginPath();
            Ctx.moveTo(XC(0), YC(0));
            Ctx.lineTo(XC(0), YC(MinY));
            Ctx.stroke();

            // Y axis tick marks
            let delta = YTickDelta;
            for (i = 1; i * delta < MaxY; ++i) {
                Ctx.beginPath();
                Ctx.moveTo(XC(0) - 5, YC(i * delta));
                Ctx.lineTo(XC(0) + 5, YC(i * delta));
                Ctx.stroke();
            }

            delta = YTickDelta;
            for (i = 1; i * delta > MinY; --i) {
                Ctx.beginPath();
                Ctx.moveTo(XC(0) - 5, YC(i * delta));
                Ctx.lineTo(XC(0) + 5, YC(i * delta));
                Ctx.stroke();
            }

            // +X axis
            Ctx.beginPath();
            Ctx.moveTo(XC(0), YC(0));
            Ctx.lineTo(XC(MaxX), YC(0));
            Ctx.stroke();

            // -X axis
            Ctx.beginPath();
            Ctx.moveTo(XC(0), YC(0));
            Ctx.lineTo(XC(MinX), YC(0));
            Ctx.stroke();

            // X tick marks
            delta = XTickDelta;
            for (i = 1; i * delta < MaxX; ++i) {
                Ctx.beginPath();
                Ctx.moveTo(XC(i * delta), YC(0) - 5);
                Ctx.lineTo(XC(i * delta), YC(0) + 5);
                Ctx.stroke();
            }

            delta = XTickDelta;
            for (i = 1; i * delta > MinX; --i) {
                Ctx.beginPath();
                Ctx.moveTo(XC(i * delta), YC(0) - 5);
                Ctx.lineTo(XC(i * delta), YC(0) + 5);
                Ctx.stroke();
            }
            Ctx.restore();
        }

    }

    drawAxes()
}
