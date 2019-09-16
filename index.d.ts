declare module 'openseadragon'{
  import 'openseadragon';
  interface Viewer{
    selection: (options: {
      /**
       * html element to use for overlay
       *
       * @type {HTMLElement} [null]
       */
      element?: HTMLElement,
      /**
       * show button to toggle selection mode
       *
       * @type {boolean} [true]
       */
      showSelectionControl?: boolean, //
      /**
       * dom element to use as toggle button
       *
       * @type {HTMLElement} [null]
       */
      toggleButton?: HTMLElement,
      /**
       *
       *
       * @type {boolean} [true]
       */
      showConfirmDenyButtons?: boolean,
      /**
       *
       *
       * @type {boolean} [true]
       */
      styleConfirmDenyButtons?: boolean,
      /**
       *
       *
       * @type {boolean} [true]
       */
      returnPixelCoordinates?: boolean,
      /**
       * key to toggle selection mode
       *
       * @type {string} ['c']
       */
      keyboardShortcut?: string,
      /**
       * initial selection as an OpenSeadragon.SelectionRect object
       *
       * @type {Rect} [null]
       */
      rect?: any,
      /**
       * turn selection rotation on or off as needed
       *
       * @type {boolean} [true]
       */
      allowRotation?: boolean,
      /**
       * alternative method for drawing the selection; useful for rotated crops
       *
       * @type {boolean} [false]
       */
      startRotated?: boolean,
      /**
       * only used if startRotated=true; value is relative to image height
       *
       * @type {number} [0.1]
       */
      startRotatedHeight?: number,
      /**
       * true = do not allow any part of the selection to be outside the image
       *
       * @type {boolean} [false]
       */
      restrictToImage?: boolean,
      /**
       * callback
       *
       */
      onSelection?: (rect: Rect) => void,
      /**
       * overwrites OpenSeadragon's option
       *
       * @type {string} [null]
       */
      prefixUrl?: string,
      navImages?:               { // overwrites OpenSeadragon's options
          selection: {
              REST:   string; // 'selection_rest.png',
              GROUP:  string; // 'selection_grouphover.png',
              HOVER:  string; // 'selection_hover.png',
              DOWN:   string; // 'selection_pressed.png'
          },
          selectionConfirm: {
              REST:   string; // 'selection_confirm_rest.png',
              GROUP:  string; // 'selection_confirm_grouphover.png',
              HOVER:  string; // 'selection_confirm_hover.png',
              DOWN:   string; // 'selection_confirm_pressed.png'
          },
          selectionCancel: {
              REST:   string; // 'selection_cancel_rest.png',
              GROUP:  string; // 'selection_cancel_grouphover.png',
              HOVER:  string; // 'selection_cancel_hover.png',
              DOWN:   string; // 'selection_cancel_pressed.png'
          },
        }
      }) => Selection
  }

  class Selection{
    enable(): Selection;
    disable(): Selection;
    toggleState(): Selection;
    setState(state: boolean): Selection;
    setAllowRotation(allow: boolean): void;
    draw(): Selection;
    undraw(): Selection;
    confirm(): Selection;
    cancel(): Selection;
}

  interface Viewer{
    initializeAnnotations(): void;
  }
}
