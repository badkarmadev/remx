const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

async function build() {
  // Clean dist directory
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  // Get all CSS files
  const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.css'));

  console.log('Building CSS files...\n');

  // Process each file
  for (const file of files) {
    const inputPath = path.join(srcDir, file);
    const outputName = file.replace('.css', '.min.css');
    const outputPath = path.join(distDir, outputName);

    try {
      await execAsync(`npx postcss ${inputPath} -o ${outputPath}`);
      const size = fs.statSync(outputPath).size;
      console.log(`✓ ${outputName} (${(size / 1024).toFixed(2)} KB)`);
    } catch (error) {
      console.error(`✗ Failed to build ${file}:`, error.message);
      process.exit(1);
    }
  }

  console.log(`\n✅ Build complete! Generated ${files.length} files in dist/`);
}

build().catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
});
