declare module 'customsb' {
    interface CustomizeScrollbarOptions {
        scrollbarWidth?: string;
        trackBackground?: string;
        thumbBackground?: string;
        thumbBorderRadius?: string;
    }

    function customizeScrollbar(options?: CustomizeScrollbarOptions): void;

    export default customizeScrollbar;
}