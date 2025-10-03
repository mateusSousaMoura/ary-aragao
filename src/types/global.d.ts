declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
    // Permitir propriedades CSS customizadas
    WebkitTextStroke?: string;
    WebkitTextStrokeColor?: string;
    backdropFilter?: string;
    boxSizing?: 'border-box' | 'content-box' | 'initial' | 'inherit';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'initial' | 'inherit';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'initial' | 'inherit';
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'initial' | 'inherit';
    pointerEvents?: 'auto' | 'none' | 'initial' | 'inherit';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | 'initial' | 'inherit';
  }
}
