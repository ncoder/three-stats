export declare class Stats {
    REVISION: 16;
    dom: HTMLDivElement;
    domElement: HTMLDivElement;
    setMode: (id: number) => void;
    private mode;
    private container;
    private beginTime;
    private prevTime;
    private frames;
    private fpsPanel;
    private msPanel;
    private memPanel;
    constructor();
    addPanel(panel: Panel): Panel;
    showPanel(id: number): void;
    begin(): void;
    end(): number;
    update(): void;
}
export declare class Panel {
    private name;
    private fg;
    private bg;
    dom: any;
    private min;
    private max;
    private PR;
    private WIDTH;
    private HEIGHT;
    private TEXT_X;
    private TEXT_Y;
    private GRAPH_X;
    private GRAPH_Y;
    private GRAPH_WIDTH;
    private GRAPH_HEIGHT;
    private canvas;
    private context;
    constructor(name: any, fg: any, bg: any);
    update(value: any, maxValue: any): void;
}
