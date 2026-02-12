#!/usr/bin/env node

/**
 * Extract PNG images from SVG files with embedded base64 data
 * This fixes the Safari iOS black box rendering issue
 * Processes both vendor-logos and client-logos directories
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Process both vendor and client logos
const directories = [
  {
    input: path.join(__dirname, 'public', 'vendor-logos'),
    output: path.join(__dirname, 'public', 'vendor-logos-png')
  },
  {
    input: path.join(__dirname, 'public', 'client-logos'),
    output: path.join(__dirname, 'public', 'client-logos-png')
  }
];

let totalExtracted = 0;
let totalSkipped = 0;

directories.forEach(({ input, output }) => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Processing: ${path.basename(input)}`);
  console.log('='.repeat(60));

  // Create output directory if it doesn't exist
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  // Read all SVG files
  const svgFiles = fs.readdirSync(input).filter(file => file.endsWith('.svg'));
  console.log(`\nFound ${svgFiles.length} SVG files to process...\n`);

  svgFiles.forEach(svgFile => {
    const svgPath = path.join(input, svgFile);
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Extract base64 PNG data
    const base64Match = svgContent.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
    
    if (base64Match) {
      const base64Data = base64Match[1];
      const pngBuffer = Buffer.from(base64Data, 'base64');
      
      // Generate output filename
      const pngFileName = svgFile.replace('.svg', '.png');
      const pngPath = path.join(output, pngFileName);
      
      // Write PNG file
      fs.writeFileSync(pngPath, pngBuffer);
      const sizeKB = (pngBuffer.length / 1024).toFixed(1);
      console.log(`✓ Extracted: ${pngFileName.padEnd(30)} (${sizeKB} KB)`);
      totalExtracted++;
    } else {
      console.log(`✗ No base64 data: ${svgFile.padEnd(30)} (Pure SVG)`);
      totalSkipped++;
    }
  });

  console.log(`\n✓ ${path.basename(output)} directory updated!`);
});

console.log(`\n${'='.repeat(60)}`);
console.log('Summary:');
console.log('='.repeat(60));
console.log(`✓ Total extracted: ${totalExtracted} PNG files`);
console.log(`✗ Total skipped:   ${totalSkipped} files (pure SVG)`);
console.log(`\nNext steps:`);
console.log('1. Update src/components/TrustSection.jsx to use client-logos-png/');
console.log('2. Already updated: src/components/TrustedByVendors.jsx');
