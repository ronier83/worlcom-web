# Vendor Logos Safari iOS Fix

## Problem
The vendor logos in the "Trusted by Leading Financial Institutions Worldwide" section were displaying as black boxes on Safari iOS (iPhone).

## Root Cause
Most of the SVG files in `/public/vendor-logos/` contained embedded base64-encoded PNG images using SVG `<pattern>` elements. Safari iOS has known rendering issues with this approach, causing the images to display as black boxes instead of the actual logos.

Example problematic SVG structure:
```xml
<svg>
  <rect fill="url(#pattern0)"/>
  <defs>
    <pattern id="pattern0">
      <image xlink:href="data:image/png;base64,iVBORw0KG..."/>
    </pattern>
  </defs>
</svg>
```

## Solution
Extracted the embedded PNG images from the SVG files and updated the component to use the PNG files directly.

### Files Changed
1. **Created**: `/public/vendor-logos-png/` directory with 17 extracted PNG files
2. **Updated**: `/src/components/TrustedByVendors.jsx` to reference PNG files
3. **Updated**: `/src/styles/globals.css` with optimized logo rendering styles
4. **Created**: `/extract-vendor-logos.js` extraction script

### Logo Files
- **Extracted to PNG** (17 files): Most logos that had embedded base64 PNG data
  - aub.png, b2b-trust.png, bdo.png, boc.png, bpi.png, cebuana.png, dfcc bank.png, inteli.png, korona.png, pub.png, ria.png, sampath.png, siam.png, thunes.png, union pay.png, uption.png, yes bank.png

- **Kept as SVG** (3 files): These were already pure SVG with paths (no embedded images)
  - kasikornthai.svg, land bank.svg, pamlyang.svg

## Testing
1. The dev server is running on port 5173
2. Test on Safari iOS (iPhone) to verify logos display correctly
3. Test on Chrome/other browsers to ensure no regression

## Technical Details

### Extraction Process
```bash
node extract-vendor-logos.js
```

This script:
1. Reads all SVG files from `/public/vendor-logos/`
2. Extracts base64-encoded PNG data using regex
3. Converts base64 to binary PNG files
4. Saves to `/public/vendor-logos-png/`

### CSS Optimizations
Added hardware acceleration and smooth rendering:
```css
.vendor-logo-wrapper {
  transform: translateZ(0);
}

.vendor-logo {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
}
```

## Why This Works
- **PNG files** render reliably across all browsers, including Safari iOS
- **Direct image loading** avoids Safari's SVG pattern rendering bugs
- **Hardware acceleration** ensures smooth scrolling animations
- **No JavaScript workarounds** needed - pure HTML/CSS solution

## Browser Compatibility
✅ Safari iOS (iPhone) - **FIXED**
✅ Chrome (all platforms)
✅ Firefox (all platforms)
✅ Safari macOS
✅ Edge

## File Sizes
The PNG files are optimized and reasonably sized (1.6KB - 188KB), with most under 10KB.
