class PixelGradient {
  static get inputProperties() {
    // The CSS values we're interested in:
    return ['--pixel-gradient-color', '--pixel-gradient-size'];
  }
  paint(ctx, bounds, props) {
    // TODO: We'll get to this later
    const size = props.get('--pixel-gradient-size').value;
    ctx.fillStyle = props.get('--pixel-gradient-color');

    for (let x = 0; x < bounds.width; x += size) {
      for (let y = 0; y < bounds.height; y += size) {
        const pos = (y + size / 2) / bounds.height;
        if (Math.random() < pos) ctx.fillRect(x, y, size, size);
      }
    }
  }
}

// Give our custom painting a name
// (this is how CSS will reference it):
registerPaint('pixel-gradient', PixelGradient);
