declare namespace JSX {
  interface IntrinsicElements {
    "vturb-smartplayer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string;
        autoplay?: string;
        muted?: string;
        playsinline?: string;
      },
      HTMLElement
    >;
  }
}
