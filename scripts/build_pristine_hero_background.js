/**
 * Build pristine architectural corporate hero background from official asset Destriagroup_649ca668.png
 * 1. Crop top 96px header
 * 2. Solid 100% opaque twilight navy cover from x=0 to x=730 (fading seamlessly from x=730 to x=785)
 *    to guarantee 100% elimination of old text/buttons from image pixels.
 * 3. Soft plaza reflection cover over the bottom 5 icons bar on the left so the 5 strategic foundations
 *    live cleanly in the dedicated section below.
 * 4. Preserves 100% of the luminous 3D holographic digital globe, gold orbital data arcs,
 *    modern corporate headquarters with official 3D gold DESTRIA logo, and the AI governance HUD visualization!
 */
import { execSync } from 'child_process';

console.log('Building pristine hero background from Destriagroup_649ca668.png...');

const run = (cmd) => execSync(cmd, { shell: '/bin/bash' });

try {
  // 1. Crop top 96px header
  run('convert public/assets/aistudio/Destriagroup_649ca668.png -crop 1672x845+0+96 +repage /tmp/new_base.png');
  
  // 2. Left mask:
  // Solid white (100% opaque) from x=0 to x=730.
  // Smooth linear fade from 1.0 to 0.0 from x=730 to x=785.
  // Solid black (0% opaque) from x=785 to x=1672.
  run('convert -size 730x845 xc:white /tmp/new_mask_solid.png');
  run('convert -size 55x845 gradient:white-black /tmp/new_mask_fade.png');
  run('convert -size 887x845 xc:black /tmp/new_mask_black.png');
  run('convert +append /tmp/new_mask_solid.png /tmp/new_mask_fade.png /tmp/new_mask_black.png /tmp/new_left_mask.png');
  
  // Left solid twilight color matching the sky (#071325 to #081830)
  run(`convert -size 1672x845 gradient:'#071325-#081830' /tmp/new_left_color.png`);
  run('convert /tmp/new_left_color.png /tmp/new_left_mask.png -alpha off -compose CopyOpacity -composite /tmp/new_left_cover.png');
  
  // Also cover the bottom 5 icons bar on the left (y: 690 to 845, x: 0 to 860) with twilight plaza reflection
  run(`convert -size 860x155 gradient:'#081830-#071120' /tmp/bottom_cover_color.png`);
  run(`convert -size 860x155 xc:black -fill white -draw 'rectangle 0,30 800,155' -blur 0x25 /tmp/bottom_cover_mask.png`);
  run('convert /tmp/bottom_cover_color.png /tmp/bottom_cover_mask.png -alpha off -compose CopyOpacity -composite /tmp/bottom_cover.png');

  // Composite left cover over base
  run('convert /tmp/new_base.png /tmp/new_left_cover.png -geometry +0+0 -compose Over -composite /tmp/step1.png');
  run('convert /tmp/step1.png /tmp/bottom_cover.png -geometry +0+690 -compose Over -composite public/images/corporate/destria_corporate_hero_clean.png');
  run('cp public/images/corporate/destria_corporate_hero_clean.png public/images/corporate/destria_corporate_hero.png');

  console.log('Successfully created ultra-clean hero background from Destriagroup_649ca668.png!');
} catch (err) {
  console.error('Error generating image:', err);
}
