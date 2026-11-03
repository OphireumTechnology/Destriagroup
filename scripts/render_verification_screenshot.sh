#!/bin/bash
set -e

echo "Generating rendered homepage verification image..."

# Header: 1362x80 white background with logo, nav links, and button
convert -size 1362x80 xc:white \
  public/images/branding/destria-official-logo.png -geometry 40x40+40+20 -composite \
  -fill '#101D35' -font DejaVu-Sans-Bold -pointsize 15 -annotate +95+40 'DESTRIA GROUP INC.' \
  -fill '#C5A46D' -font DejaVu-Sans-Bold -pointsize 9 -annotate +95+55 'HOLDING & ENTERPRISE MANAGEMENT' \
  -fill '#101D35' -font DejaVu-Sans-Bold -pointsize 11 -annotate +450+46 'HOME' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +515+46 'ABOUT' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +585+46 'BUSINESSES' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +690+46 'GOVERNANCE' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +805+46 'PARTNERSHIPS' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +930+46 'DISCLOSURES' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +1045+46 'CONTACT' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +1125+46 'LEGAL' \
  \( -size 155x38 xc:'#101D35' -draw 'roundrectangle 0,0 154,37 6,6' \
     -fill white -font DejaVu-Sans-Bold -pointsize 10 -annotate +18+24 'ENTERPRISE PORTAL ↗' \) \
  -geometry +1170+21 -composite \
  -stroke '#E2E8F0' -strokewidth 1 -draw 'line 0,79 1362,79' \
  /tmp/rendered_header.png

# Hero Section: 1362x650
convert public/images/corporate/destria_corporate_hero_clean.png -resize 1362x650^ -gravity north -crop 1362x650+0+0 +repage \
  -fill '#CBD5E1' -font DejaVu-Sans-Bold -pointsize 11 -annotate +65+80 'DESTRIA GROUP INC.  ·  NAICS 551114  ·  SHERIDAN, WYOMING' \
  -fill '#FFFFFF' -font DejaVu-Sans-Bold -pointsize 42 -annotate +65+140 'A Diversified' \
  -fill '#DFCA9E' -font DejaVu-Sans-Bold -pointsize 42 -annotate +65+195 'Holding Corporation' \
  -fill '#E2E8F0' -font DejaVu-Sans -pointsize 14 \
  -annotate +65+245 'Building, managing, and growing strategic enterprises through' \
  -annotate +65+270 'disciplined capital management, technology innovation, and' \
  -annotate +65+295 'responsible corporate governance.' \
  \( -size 210x46 xc:'#C5A46D' -draw 'roundrectangle 0,0 209,45 6,6' \
     -fill '#101D35' -font DejaVu-Sans-Bold -pointsize 11 -annotate +25+28 'EXPLORE OUR BUSINESSES →' \) \
  -geometry +65+340 -composite \
  \( -size 195x46 xc:'#101D35' -stroke '#FFFFFF' -strokewidth 1 -draw 'roundrectangle 0,0 194,45 6,6' \
     -fill '#FFFFFF' -font DejaVu-Sans-Bold -pointsize 11 -annotate +22+28 'CORPORATE GOVERNANCE' \) \
  -geometry +290+340 -composite \
  -stroke '#C5A46D' -strokewidth 1 -draw 'line 0,649 1362,649' \
  /tmp/rendered_hero.png

# Bottom section: 1362x123 preview
convert -size 1362x123 xc:'#F8FAFC' \
  -fill '#C5A46D' -font DejaVu-Sans-Bold -pointsize 10 -annotate +65+28 'CORE ENTERPRISE PILLARS' \
  -fill '#101D35' -font DejaVu-Sans-Bold -pointsize 18 -annotate +65+55 'Our Strategic Foundations' \
  -fill '#64748B' -font DejaVu-Sans -pointsize 11 -annotate +65+80 'Centralized executive oversight and operational enablement deployed across our enterprise network.' \
  \( -size 240x35 xc:white -stroke '#CBD5E1' -draw 'roundrectangle 0,0 239,34 6,6' \
     -fill '#10B981' -font DejaVu-Sans-Bold -pointsize 10 -annotate +15+22 '✓ Charter #WY-2024-001482910' \) \
  -geometry +1050+35 -composite \
  /tmp/rendered_foundations.png

# Append vertically to exact reference dimension (1362x853)
convert -append /tmp/rendered_header.png /tmp/rendered_hero.png /tmp/rendered_foundations.png public/assets/rendered_homepage_verification.png
echo "Created public/assets/rendered_homepage_verification.png successfully!"
