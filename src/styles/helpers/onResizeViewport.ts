const setupZoom = () => {
  const viewportWidth = window.innerWidth;
  const zoom = window.innerWidth / (viewportWidth > 680 ? 1440 : 480);
  document.documentElement.style.zoom = zoom.toString();
};

export function onResizeViewport(): void {
  const onResize = () => {
    // setupZoom();
  };

  onResize();

  window.addEventListener('resize', onResize);
}
