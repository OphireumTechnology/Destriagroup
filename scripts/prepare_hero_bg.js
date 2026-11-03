/**
 * Script to create clean responsive background from the reference skyline hero
 */
const { execSync } = require('child_process');

console.log('Generating pristine background asset from reference hero...');

// 1. Create left gradient cover (smooth fade from #061426 to transparent at x=740)
// 2. Create right panel cover (smooth dark glass fill over the card content at x=1110-1595, y=110-610)
const cmd = `
convert public/images/corporate/hero_skyline_base.png \\
  \\( -size 760x864 gradient:'#061325-#061325' \\
     -size 760x864 gradient:'white-black' -alpha off \\
     -compose CopyOpacity -composite \\) \\
  -geometry +0+0 -compose Over -composite \\
  \\( -size 480x500 xc:'#0C192E' \\
     -fill '#0A1526' -draw 'rectangle 10,10 470,490' \\
     -blur 0x8 \\) \\
  -geometry +1115+115 -compose Over -composite \\
  public/images/corporate/hero_skyline_clean.png
`;

try {
  execSync(cmd);
  console.log('Successfully created public/images/corporate/hero_skyline_clean.png');
} catch (err) {
  console.error('Error creating background:', err);
}
