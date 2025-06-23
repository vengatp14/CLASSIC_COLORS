const products = [
  { id: 1, title: "Berger Bison", category: "Tiling Soloutions", discription: "Durable, weather-resistant paint offering smooth application and long-lasting protection for interior and exterior surfaces.", image: "assets/img/iteams/item 1.jpg" },
  { id: 2, title: "Bison Glow", category: "Clothing", discription: "Provides a rich, glowing finish with excellent washability and vibrant color retention for modern interior spaces.", image: "assets/img/iteams/item 2.jpg" },
  { id: 3, title: "Berger Rangoli", category: "Books", discription: "A vibrant emulsion paint designed for beautiful walls, providing smooth coverage and exceptional color brightness and durability.", image: "assets/img/iteams/item 3.jpg" },
  { id: 4, title: "Berger Easy Clean", category: "Electronics", discription: "Stain-resistant paint perfect for homes, enabling easy cleaning while keeping walls bright, fresh, and attractive for longer.", image: "assets/img/iteams/item 4.jpg" },
  { id: 5, title: "Berger Silk Glamor", category: "Clothing", discription: "Luxury finish paint with a silky sheen, offering superior coverage, elegance, and long-lasting wall beauty.", image: "assets/img/iteams/item 5.jpg" },
  { id: 6, title: "Berger Silk Glam Art", category: "Electronics", discription: "Decorative designer finish paint with textures and shimmer, perfect for feature walls and artistic home interiors.", image: "assets/img/iteams/item 6.jpg" },
  { id: 7, title: "Silk Glam Art Non Metallic", category: "Electronics", discription: "Delivers a rich, textured appearance without metallic sheen, adding a unique and classy touch to any space.", image: "assets/img/iteams/item 7.jpg" },
  { id: 8, title: "Easy Clean Silky Touch And Fresh", category: "Clothing", discription: "Soft sheen finish with fragrance technology, ensuring cleanliness, freshness, and elegant aesthetics in living areas.", image: "assets/img/iteams/item 8.jpg" },
  { id: 9, title: "Berger Walmasta Glow", category: "Books", discription: "Economical paint for exteriors, offering vibrant glow and resistance to weather and fading, suitable for all climates.", image: "assets/img/iteams/item 9.jpg" },
  { id: 10, title: "Berger Walmasta Lite", category: "Electronics", discription: "Budget-friendly emulsion that provides neat, clean finish for exteriors with good coverage and easy application.", image: "assets/img/iteams/item 10.jpg" },

  { id: 11, title: "longlife pu tile can", category: "Roof & Floor Coating", discription: "A premium PU-based coating designed for tiles, offering excellent adhesion, durability, and long-lasting weather protection.", image: "assets/img/Roof & Floor Coating/longlife pu tile can.jpg" },
  { id: 12, title: "Weathercoatfloorprotector", category: "Roof & Floor Coating", discription: "Tough floor coating that resists stains, abrasions, and weather, providing a clean, glossy, and protective finish.", image: "assets/img/Roof & Floor Coating/Weathercoatfloorprotector.jpg" },

  { id: 13, title: "epoxy_tile_grout_2p", category: "Tiling Soloutions", discription: "Two-part epoxy grout ideal for joints, offering high strength, chemical resistance, and seamless tile aesthetics.", image: "assets/img/Tiling Soloutions/epoxy_tile_grout_2p.jpg" },
  { id: 14, title: "epoxy_tile_grout_3p", category: "Tiling Soloutions", discription: "Three-part epoxy system delivering waterproofing, strong bonding, and long-lasting protection for tiled surfaces.", image: "assets/img/Tiling Soloutions/epoxy_tile_grout_3p.jpg" },
  { id: 15, title: "home_shield_tile_grout", category: "Tiling Soloutions", discription: "High-performance grout that protects against moisture, stains, and cracks, ideal for kitchens and bathrooms.", image: "assets/img/Tiling Soloutions/home_shield_tile_grout.jpg" },
  { id: 16, title: "tile_adhesive", category: "Tiling Soloutions", discription: "Reliable tile adhesive ensuring strong grip and flexibility for walls and floors in all conditions.", image: "assets/img/Tiling Soloutions/tile_adhesive.jpg" },
  { id: 17, title: "tile_adhesive_plus", category: "Tiling Soloutions", discription: "Enhanced bonding adhesive with superior workability, water resistance, and ideal for heavy-duty tile installations.", image: "assets/img/Tiling Soloutions/tile_adhesive_plus.jpg" },
  { id: 18, title: "tile_bond_anti_slip", category: "Tiling Soloutions", discription: "Specially formulated adhesive with anti-slip properties for vertical tiling and safe flooring applications.", image: "assets/img/Tiling Soloutions/tile_bond_anti_slip.jpg" },
  { id: 19, title: "tilebondhi-flex", category: "Tiling Soloutions", discription: "Flexible tile adhesive that accommodates substrate movement, ideal for exterior and wet area tiling.", image: "assets/img/Tiling Soloutions/tilebondhi-flex.jpg" },
  { id: 20, title: "tile-cleaner-back-min", category: "Tiling Soloutions", discription: "Powerful tile cleaner that removes stains, dirt, and grime from tiled surfaces, restoring their original shine.", image: "assets/img/Tiling Soloutions/tile-cleaner-back-min.jpg" },

  { id: 21, title: "wonder_flex", category: "Tiling Soloutions", discription: "Flexible tiling solution designed to provide superior adhesion and crack resistance for various tile applications.", image: "assets/img/Tiling Soloutions/wonder_flex.jpg" },

  { id: 22, title: "diyProduct3", category: "Do It Your Self", discription: "A beginner-friendly DIY paint kit with easy-to-use tools and colors for small home projects and touch-ups.", image: "assets/img/DO IT YOUR SELF/diyProduct3.jpg" },
  { id: 23, title: "ipaint enamel paint", category: "Do It Your Self", discription: "Glossy enamel paint that provides a tough, high-sheen finish perfect for doors, windows, and metal surfaces.", image: "assets/img/DO IT YOUR SELF/ipaint enamel paint.jpg" },
  { id: 24, title: "ipaint enamel self paint kit", category: "Do It Your Self", discription: "A complete DIY enamel paint kit with all essentials to repaint surfaces quickly, smoothly, and professionally.", image: "assets/img/DO IT YOUR SELF/ipaint enamel self paint kit.jpg" },
  { id: 25, title: "ipaint enamel spray paint", category: "Do It Your Self", discription: "Quick-drying spray enamel ideal for instant touch-ups, available in vibrant shades for metal, wood, and plastic.", image: "assets/img/DO IT YOUR SELF/ipaint enamel spray paint.jpg" },
  { id: 26, title: "ipaint glow in dark kit", category: "Do It Your Self", discription: "Innovative paint that glows in darkness, ideal for artistic walls, kids’ rooms, or creative design effects.", image: "assets/img/DO IT YOUR SELF/ipaint glow in dark kit.jpg" },
  { id: 27, title: "ipaint wall stencil kit_0", category: "Do It Your Self", discription: "Stylish wall stencil kit to create decorative patterns effortlessly with professional results using trendy paint shades.", image: "assets/img/DO IT YOUR SELF/ipaint wall stencil kit_0.jpg" },
  { id: 28, title: "wonder_flex", category: "Do It Your Self", discription: "Decorative wall sticker kit featuring flexible paint and adhesive designs for easy peel-and-stick artistic looks.", image: "assets/img/DO IT YOUR SELF/ipaint wall sticker kit (1).jpg" },

  { id: 29, title: "luxol_pu_enamel_canshot", category: "Enamels", discription: "PU-based enamel offering exceptional gloss, durability, and resistance to water, scratches, and weathering.", image: "assets/img/ENAMELS/luxol_pu_enamel_canshot.jpg" },
  { id: 30, title: "luxol_satin_enamel_canshot", category: "Enamels", discription: "Smooth satin enamel finish that delivers a luxurious mid-sheen look, ideal for interiors and exteriors alike.", image: "assets/img/ENAMELS/luxol_satin_enamel_canshot.jpg" },

  { id: 31, title: "product_luxol_hi_gloss_enamel", category: "Enamels", discription: "A premium enamel paint with a high-gloss finish, providing excellent durability, stain resistance, and shine retention.", image: "assets/img/ENAMELS/product_luxol_hi_gloss_enamel.jpg" },

  { id: 32, title: "imperia_breathe_easy-2272x1280", category: "Wood Finish", discription: "Low-VOC wood finish that protects and beautifies wood surfaces while ensuring safe indoor air quality.", image: "assets/img/WOOD FINISHES/imperia_breathe_easy-2272x1280.jpg" },
  { id: 33, title: "imperiadurakoat-min", category: "Wood Finish", discription: "Tough, long-lasting wood coating that enhances grain beauty while protecting against moisture, stains, and wear.", image: "assets/img/WOOD FINISHES/imperiadurakoat-min.jpg" },
  { id: 34, title: "imperia-polyester-2272x1280", category: "Wood Finish", discription: "Glossy polyester finish for wood, offering exceptional clarity, smoothness, and a mirror-like rich appearance.", image: "assets/img/WOOD FINISHES/imperia-polyester-2272x1280.jpg" },
  { id: 35, title: "melamine_24_carat-min", category: "Wood Finish", discription: "Rich melamine finish providing durable, glossy protection to furniture with a luxurious 24-carat shine.", image: "assets/img/WOOD FINISHES/melamine_24_carat-min.jpg" },
  { id: 36, title: "product_woodkeeper_fill_o_dent", category: "Wood Finish", discription: "Filler putty specially designed to cover cracks and dents in wooden surfaces before polishing or painting.", image: "assets/img/WOOD FINISHES/product_woodkeeper_fill_o_dent.jpg" },
  { id: 37, title: "rainbow", category: "Wood Finish", discription: "Multi-tonal wood finish that adds a colorful, creative twist while maintaining the texture of natural wood.", image: "assets/img/WOOD FINISHES/rainbow.jpg" },
  { id: 38, title: "thumbnail_imperiatrendz", category: "Wood Finish", discription: "Designer-grade wood coating offering modern textures and patterns, enhancing visual appeal in stylish interiors.", image: "assets/img/WOOD FINISHES/thumbnail_imperiatrendz.jpg" },
  { id: 39, title: "wood_protektor_canshot", category: "Wood Finish", discription: "Weather-resistant wood coating that shields wooden surfaces from UV rays, moisture, and fungal attacks.", image: "assets/img/WOOD FINISHES/wood_protektor_canshot.jpg" },
  { id: 40, title: "woodkeeper_1k_pu-min", category: "Wood Finish", discription: "Single-component PU-based wood finish that ensures scratch resistance and long-lasting shine for furniture and panels.", image: "assets/img/WOOD FINISHES/woodkeeper_1k_pu-min.jpg" },

  { id: 41, title: "alplast-super", category: "water proofing", discription: "High-performance waterproofing compound for concrete and masonry, offering superior protection against water ingress and damage.", image: "assets/img/water proofing/alplast-super.jpg" },
  { id: 42, title: "bituseal_dpc", category: "water proofing", discription: "Effective damp-proofing cream for walls, preventing moisture penetration and protecting structures from water damage.", image: "assets/img/water proofing/bituseal_dpc.jpg" },
  { id: 43, title: "block_bond", category: "water proofing", discription: "Premium quality block bond adhesive for strong, durable bonding of concrete blocks and bricks in construction.", image: "assets/img/water proofing/block_bond.jpg" },
  { id: 44, title: "dampstop_advanced-2272x1280_1", category: "water proofing", discription: "Advanced damp-proofing solution for walls and floors, providing long-lasting protection against moisture and dampness.", image: "assets/img/water proofing/dampstop_advanced-2272x1280_1.jpg" },
  { id: 45, title: "dampstop_duo-7yr_0", category: "water proofing", discription: "Dual-action damp-proofing product that seals and protects against moisture, ideal for basements and below-grade applications.", image: "assets/img/water proofing/dampstop_duo-7yr_0.jpg" },
  { id: 46, title: "dampstop_elasto", category: "water proofing", discription: "Elastomeric waterproofing coating that provides a flexible, seamless, and durable barrier against water intrusion.", image: "assets/img/water proofing/dampstop_elasto.jpg" },
  { id: 47, title: "home_shield_crack_fill_paste-2272x1280-min", category: "water proofing", discription: "Crack filling paste that seals and repairs cracks in walls, preventing water penetration and damage.", image: "assets/img/water proofing/home_shield_crack_fill_paste-2272x1280-min.jpg" },
  { id: 48, title: "home_shield_pu_elastoseal_non_uv_1_k", category: "water proofing", discription: "Non-yellowing, UV-resistant elastomeric sealant for long-lasting protection against water and weather elements.", image: "assets/img/water proofing/home_shield_pu_elastoseal_non_uv_1_k.jpg" },
  { id: 49, title: "home_shield_ultraseal_ba-2272x1280", category: "water proofing", discription: "Ultra-durable sealant that provides a waterproof, flexible, and protective layer for various surfaces.", image: "assets/img/water proofing/home_shield_ultraseal_ba-2272x1280.jpg" },
  { id: 50, title: "home_shield_wall_shield_2k-2272x1280_0", category: "water proofing", discription: "Two-component waterproofing system that offers superior adhesion, flexibility, and protection for walls and foundations.", image: "assets/img/water proofing/home_shield_wall_shield_2k-2272x1280_0.jpg" },
  { id: 51, title: "home_shield_waterproof_putty_canshot", category: "water proofing", discription: "Waterproof putty that provides a strong, flexible seal for joints, cracks, and gaps in various building materials.", image: "assets/img/water proofing/home_shield_waterproof_putty_canshot.jpg" },
  { id: 52, title: "latex-shield-2k-2272x1280-min", category: "water proofing", discription: "High-performance latex-based waterproofing membrane that provides excellent protection against water and moisture.", image: "assets/img/water proofing/latex-shield-2k-2272x1280-min.jpg" },
  { id: 53, title: "leakstop", category: "water proofing", discription: "Leak-proofing compound that seals and protects against water leaks in roofs, walls, and other structures.", image: "assets/img/water proofing/leakstop.jpg" },
  { id: 54, title: "product_homhield_power_plasticizer", category: "water proofing", discription: "Plasticizer additive for mortars and concretes, enhancing workability, adhesion, and durability of the mix.", image: "assets/img/water proofing/product_homeshield_power_plasticizer.jpg" },
  { id: 55, title: "proshield-hdpe", category: "water proofing", discription: "HDPE waterproofing membrane that provides a robust, flexible, and durable barrier against water and moisture ingress.", image: "assets/img/water proofing/proshield-hdpe.jpg" },
  { id: 56, title: "pu-elastoseal-min", category: "water proofing", discription: "Polyurethane elastomeric sealant that offers excellent adhesion, flexibility, and resistance to water and weathering.", image: "assets/img/water proofing/pu-elastoseal-min.jpg" },
  { id: 57, title: "repario-min", category: "water proofing", discription: "Repair mortar for concrete and masonry, designed to fill, patch, and seal surfaces against water infiltration.", image: "assets/img/water proofing/repario-min.jpg" },
  { id: 58, title: "roofguard-11yr", category: "water proofing", discription: "Advanced roof waterproofing compound that provides long-lasting protection against water, UV rays, and extreme weather conditions.", image: "assets/img/water proofing/roofguard-11yr.jpg" },
  { id: 59, title: "rustoff_0", category: "water proofing", discription: "Rust-inhibiting primer that provides a protective barrier against rust and corrosion on metal surfaces.", image: "assets/img/water proofing/rustoff_0.jpg" },
  { id: 60, title: "seal_o_prime-5yr", category: "water proofing", discription: "Sealer and primer in one, providing a strong, water-resistant base for paints and coatings on various surfaces.", image: "assets/img/water proofing/seal_o_prime-5yr.jpg" },
  { id: 61, title: "sealocrete", category: "water proofing", discription: "Waterproofing and sealing compound for concrete, masonry, and other porous surfaces, preventing water penetration and damage.", image: "assets/img/water proofing/sealocrete.jpg" },
  { id: 62, title: "shalicrystal100-min-min", category: "water proofing", discription: "Crystal-clear waterproofing sealer that provides invisible protection against water, stains, and dirt on surfaces.", image: "assets/img/water proofing/shalicrystal100-min-min.jpg" },
  { id: 63, title: "SUPER advanced_latex_plus-2272x1280_0", category: "water proofing", discription: "Premium latex-based waterproofing compound that offers superior protection, flexibility, and durability for various applications.", image: "assets/img/water proofing/SUPER advanced_latex_plus-2272x1280_0.jpg" },
  { id: 64, title: "tank-kool-min", category: "water proofing", discription: "Thermal insulation and waterproofing compound that reflects heat and prevents water ingress in roofs and walls.", image: "assets/img/water proofing/tank-kool-min.jpg" },
  { id: 65, title: "thumbnail_mikroconkrete", category: "water proofing", discription: "Micro-concrete repair and waterproofing compound that fills and seals cracks, holes, and surface defects.", image: "assets/img/water proofing/thumbnail_mikroconkrete.jpg" },

  { id: 66, title: "roof_kool_and_seal_-10yr", category: "Roof Coats", discription: "Reflective roof coating that provides excellent UV protection and energy savings by keeping roofs cool.", image: "assets/img/Roof Coats/roof_kool_and_seal_-10yr.jpg" },
  { id: 67, title: "super_grout", category: "Roof Coats", discription: "High-performance grout for roofs, offering superior adhesion, flexibility, and resistance to weathering and UV rays.", image: "assets/img/Roof Coats/super_grout.jpg" },
  { id: 68, title: "thumbnail_puroofcoat12_1", category: "Roof Coats", discription: "Premium roof coat that provides a tough, weather-resistant barrier, protecting roofs from leaks and damage.", image: "assets/img/Roof Coats/thumbnail_puroofcoat12_1.jpg" },

  { id: 69, title: "butterflysyntheticenamel-2272x1280_1", category: "Synthetic Enamel", discription: "High-quality synthetic enamel that offers a durable, glossy finish with excellent adhesion and weather resistance.", image: "assets/img/Synthetic Enamel/butterflysyntheticenamel-2272x1280_1.jpg" },

  { id: 70, title: "product_parrot_wood_primer", category: "Wood Primer", discription: "Specially formulated primer for wood that enhances adhesion of topcoats while providing a protective barrier.", image: "assets/img/WOOD PRIMER/product_parrot_wood_primer.jpg" },

  { id: 71, title: "product_bp_cement_primer", category: "Interior Primer", discription: "Cement-based primer that provides excellent adhesion and durability for interior surfaces, especially concrete and masonry.", image: "assets/img/INTERIOR PRIMER/product_bp_cement_primer.jpg" },

  { id: 72, title: "bp_white_primer-2272x1280_0", category: "Primers", discription: "White primer that offers a smooth, even base for paints, enhancing the durability and appearance of the topcoat.", image: "assets/img/PRIMERS/bp_white_primer-2272x1280_0.jpg" },
  { id: 73, title: "product_bp_exterior_cement_primer", category: "Primers", discription: "Exterior-grade primer that provides superior adhesion and protection for cementitious surfaces in harsh weather conditions.", image: "assets/img/PRIMERS/product_bp_exterior_cement_primer.jpg" },
  { id: 74, title: "walmasta-exteriorinterior-primer-2272x1280_0", category: "Primers", discription: "Versatile primer suitable for both exterior and interior surfaces, offering excellent adhesion and stain-blocking properties.", image: "assets/img/PRIMERS/walmasta-exteriorinterior-primer-2272x1280_0.jpg" },

  { id: 75, title: "bp_white_primer_st_canshot", category: "Solvent Primers", discription: "Solvent-based primer that provides a strong, water-resistant base for paints and coatings on various surfaces.", image: "assets/img/SOLVENT PRIMERS/bp_white_primer_st_canshot.jpg" },
  { id: 76, title: "bp_cement_primer-2272x1280-min", category: "Solvent Primers", discription: "Fast-drying solvent-based primer for cement and concrete, enhancing the adhesion and durability of the topcoat.", image: "assets/img/SOLVENT PRIMERS/bp_cement_primer-2272x1280-min.jpg" },

  { id: 77, title: "luxolqd1kepoxyprimer-2272x1280_0", category: "Primers For Metals", discription: "Epoxy primer for metals that provides excellent adhesion, corrosion resistance, and durability for metal surfaces.", image: "assets/img/PRIMERS FOR METALS/luxolqd1kepoxyprimer-2272x1280_0.jpg" },
  { id: 78, title: "product_butterfly", category: "Primers For Metals", discription: "High-performance primer for metal surfaces, offering superior adhesion, rust prevention, and a smooth finish.", image: "assets/img/PRIMERS FOR METALS/product_butterfly.jpg" },

  { id: 79, title: "silkacrylicputty", category: "Acrylic Putty", discription: "Acrylic-based putty that provides a smooth, durable finish for filling cracks and imperfections in walls and ceilings.", image: "assets/img/ACRYLIC PUTTY/silkacrylicputty.jpg" },

  { id: 80, title: "bison_wall_putty", category: "Cement Putty", discription: "Cement-based putty for walls that offers excellent adhesion, durability, and ease of sanding for a smooth finish.", image: "assets/img/CEMENT PUTTY/bison_wall_putty.jpg" },
  { id: 81, title: "product_bison_levelling_putty", category: "Cement Putty", discription: "Self-levelling cementitious compound that provides a smooth, even surface for subsequent flooring or finishing layers.", image: "assets/img/CEMENT PUTTY/product_bison_levelling_putty.jpg" },

  { id: 82, title: "durocem_extra_1_1", category: "Cem", discription: "High-strength cement additive that enhances the durability, water resistance, and adhesion of cementitious mixes.", image: "assets/img/CEM/durocem_extra_1_1.jpg" },
  { id: 83, title: "Durocem Neo 279 x 270", category: "Cem", discription: "Advanced cement-based product designed for superior bonding, sealing, and protection in construction and repair.", image: "assets/img/CEM/Durocem Neo 279 x 270.jpg" },

  { id: 84, title: "Floranita Sandstone paint can-02", category: "Textures", discription: "Sandstone texture paint that creates a beautiful, natural stone finish for interiors and exteriors.", image: "assets/img/TEXTURES/Floranita Sandstone paint can-02.jpg" },
  { id: 85, title: "Florantina Glitteratti paint can-02_0", category: "Textures", discription: "Glittering texture paint that adds a sparkling, decorative finish to walls and ceilings.", image: "assets/img/TEXTURES/Florantina Glitteratti paint can-02_0.jpg" },
  { id: 86, title: "Florantina Glitteratti paint can-02_0", category: "Textures", discription: "Glittering texture paint that adds a sparkling, decorative finish to walls and ceilings.", image: "assets/img/TEXTURES/Florantina Glitteratti paint can-02_0.jpg" },
  { id: 87, title: "ruff_n_tuff paint can-02", category: "Textures", discription: "Rough texture paint that provides a tough, durable finish with a unique, rugged appearance.", image: "assets/img/TEXTURES/ruff_n_tuff paint can-02.jpg" },
  { id: 88, title: "ruff_n_tuff paint can-02_0", category: "Textures", discription: "Rough texture paint that provides a tough, durable finish with a unique, rugged appearance.", image: "assets/img/TEXTURES/ruff_n_tuff paint can-02_0.jpg" },
  { id: 89, title: "Solitaire granite paint can-02", category: "Textures", discription: "Granite texture paint that creates a luxurious, stone-like finish with depth and character.", image: "assets/img/TEXTURES/Solitaire granite paint can-02.jpg" },
  { id: 90, title: "Solitaire stone paint can-02", category: "Textures", discription: "Stone texture paint that provides a natural, earthy finish, enhancing the beauty of interior and exterior surfaces.", image: "assets/img/TEXTURES/Solitaire stone paint can-02.jpg" },
  { id: 91, title: "ruff_n_tuff paint can-02_5", category: "Textures", discription: "Rough texture paint that provides a tough, durable finish with a unique, rugged appearance.", image: "assets/img/TEXTURES/ruff_n_tuff paint can-02_5.jpg" },

  { id: 92, title: "FLEXO", category: "Exterior Products", discription: "Flexible exterior paint that offers excellent adhesion, durability, and resistance to weathering for long-lasting protection.", image: "assets/img/EXTERIOR PRODUCTS/FLEXO.jpg" },
  { id: 93, title: "LONG LIFE 10", category: "Exterior Products", discription: "High-performance exterior paint that provides superior protection against weather, UV rays, and fading.", image: "assets/img/EXTERIOR PRODUCTS/LONG LIFE 10.jpg" },
  { id: 94, title: "LONG LIFE 15", category: "Exterior Products", discription: "Premium exterior paint that offers exceptional durability, color retention, and resistance to harsh weather conditions.", image: "assets/img/EXTERIOR PRODUCTS/LONG LIFE 15.jpg" },
  { id: 95, title: "Walmasta Antifungal Emulsion", category: "Exterior Products", discription: "Antifungal emulsion paint that protects surfaces from fungal growth while providing a durable, weather-resistant finish.", image: "assets/img/EXTERIOR PRODUCTS/Walmasta Antifungal Emulsion.jpg" },
  { id: 96, title: "Walmasta Glow", category: "Exterior Products", discription: "Exterior paint that provides a vibrant glow and excellent protection against weathering and UV rays.", image: "assets/img/EXTERIOR PRODUCTS/Walmasta Glow.jpg" },
  { id: 97, title: "WALMASTA LITE", category: "Exterior Products", discription: "Lightweight exterior paint that offers good coverage, adhesion, and resistance to the elements.", image: "assets/img/EXTERIOR PRODUCTS/WALMASTA LITE.jpg" },
  { id: 98, title: "Weathercoat Anti Dustt", category: "Exterior Products", discription: "Anti-dust exterior paint that repels dust and dirt, keeping surfaces cleaner for longer.", image: "assets/img/EXTERIOR PRODUCTS/Weathercoat Anti Dustt.jpg" },
  { id: 99, title: "Weathercoat Glow", category: "Exterior Products", discription: "Glow-in-the-dark exterior paint that provides visibility and safety at night while enhancing surface protection.", image: "assets/img/EXTERIOR PRODUCTS/Weathercoat Glow.jpg" },

  { id: 100, title: "Bison Glow", category: "Interior Products", discription: "Interior paint that provides a rich, glowing finish with excellent washability and vibrant color retention.", image: "assets/img/INTERIOR PRODUCTS/Bison Glow.jpg" },
  { id: 101, title: "Bison Lite", category: "Interior Products", discription: "Lightweight interior paint that offers good coverage, adhesion, and resistance to the elements.", image: "assets/img/INTERIOR PRODUCTS/Bison Lite.jpg" },
  { id: 102, title: "Bison", category: "Interior Products", discription: "Durable interior paint offering smooth application and long-lasting protection for various surfaces.", image: "assets/img/INTERIOR PRODUCTS/Bison.jpg" },
  { id: 103, title: "Ceiling White", category: "Interior Products", discription: "Bright white ceiling paint that provides a clean, fresh look while enhancing light reflection in rooms.", image: "assets/img/INTERIOR PRODUCTS/Ceiling White.jpg" },
  { id: 104, title: "Easy Clean Fresh", category: "Interior Products", discription: "Fresh-scented paint that ensures cleanliness and elegance in living areas with its soft sheen finish.", image: "assets/img/INTERIOR PRODUCTS/Easy Clean Fresh.jpg" },
  { id: 105, title: "Easy Clean Silky Touch", category: "Interior Products", discription: "Silky touch paint that offers easy cleaning and maintenance, keeping walls looking fresh and new.", image: "assets/img/INTERIOR PRODUCTS/Easy Clean Silky Touch.jpg" },
  { id: 106, title: "Easy Clean", category: "Interior Products", discription: "Easy-to-clean paint that resists stains and dirt, maintaining the beauty and brightness of interior walls.", image: "assets/img/INTERIOR PRODUCTS/Easy Clean.jpg" },
  { id: 107, title: "Glamor Dazzle", category: "Interior Products", discription: "Dazzling interior paint that adds a touch of glamour and sophistication to walls with its stunning finish.", image: "assets/img/INTERIOR PRODUCTS/Glamor Dazzle.jpg" },
  { id: 108, title: "Rangoli Rich Matt", category: "Interior Products", discription: "Rich matt finish paint that provides a deep, luxurious look to interior walls, enhancing their beauty.", image: "assets/img/INTERIOR PRODUCTS/Rangoli Rich Matt.jpg" },
  { id: 109, title: "Rangoli", category: "Interior Products", discription: "Vibrant interior paint that offers excellent color brightness and durability, ideal for creating stunning wall effects.", image: "assets/img/INTERIOR PRODUCTS/Rangoli.jpg" },
  { id: 110, title: "Silk Glam Art Metallica 2", category: "Interior Products", discription: "Metallic silk finish paint that adds a luxurious and artistic touch to interior walls and surfaces.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Metallica 2.jpg" },
  { id: 111, title: "Silk Glam Art Metallica", category: "Interior Products", discription: "Elegant metallic silk paint that provides a rich, lustrous finish, perfect for sophisticated interior spaces.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Metallica.jpg" },
  { id: 112, title: "Silk Glam Art Non Metallica.", category: "Interior Products", discription: "Non-metallic silk paint that offers a smooth, elegant finish with a subtle sheen for refined interiors.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Non Metallica..jpg" },
  { id: 113, title: "Silk Glam Art Stones & Tones", category: "Interior Products", discription: "Textured silk paint that creates stunning stone and tone effects, adding depth and character to walls.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Stones & Tones.jpg" },
  { id: 114, title: "Silk Glam Art Stucco", category: "Interior Products", discription: "Stucco finish paint that provides a unique, textured look with excellent durability and weather resistance.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Stucco.jpg" },
  { id: 115, title: "Silk Glam Art Vintage", category: "Interior Products", discription: "Vintage-style silk paint that offers a soft, elegant finish with a timeless appeal for classic interiors.", image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Vintage.jpg" },
  { id: 116, title: "Silk Glamor 1", category: "Interior Products", discription: "Luxurious silk paint that provides a rich, glossy finish, enhancing the beauty and elegance of interior spaces.", image: "assets/img/INTERIOR PRODUCTS/Silk Glamor 1.jpg" },
  { id: 117, title: "Silk Glamor 2", category: "Interior Products", discription: "Silk paint with a glamorous finish that adds sophistication and style to walls and ceilings.", image: "assets/img/INTERIOR PRODUCTS/Silk Glamor 2.jpg" },
  { id: 118, title: "Silk Glamor", category: "Interior Products", discription: "Premium silk paint that offers a beautiful, lustrous finish with excellent coverage and durability.", image: "assets/img/INTERIOR PRODUCTS/Silk Glamor.jpg" },
];

let cart = [];
let currentPage = 1;
let itemsPerPage = 6;
let currentView = 'grid';

function filterProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const min = parseFloat(document.getElementById("minPrice").value) || 0;
  const max = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const sort = document.getElementById("sortFilter").value;

  let result = products.filter(p =>
    p.title.toLowerCase().includes(search) &&
    (category === "" || p.category === category)
    // Removed price filter as products don't have discountPrice property
  );

  // Sorting by price only if discountPrice exists
  if (sort === "low") result.sort((a, b) => (a.discountPrice || 0) - (b.discountPrice || 0));
  if (sort === "high") result.sort((a, b) => (b.discountPrice || 0) - (a.discountPrice || 0));

  return result;
}

function renderPagination(totalItems) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = (e) => {
      e.preventDefault();
      currentPage = i;
      render(); // your content render function
    };
    pagination.appendChild(li);
  }

  // Scroll to beginning so leftmost page is visible
  setTimeout(() => {
    const wrapper = document.querySelector(".pagination-wrapper");
    if (wrapper) {
      wrapper.scrollLeft = 0;
    }
  }, 0);
}


function renderProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  container.className = currentView === 'list' ? "list-view" : "row";

  const start = (currentPage - 1) * itemsPerPage;
  const showItems = list.slice(start, start + itemsPerPage);

  showItems.forEach(p => {
    const col = document.createElement("div");
    col.className = currentView === 'grid' ? "col-6 col-md-4 mb-4" : "col-12 mb-3";

    col.innerHTML = `
      <div class="card product-card h-100">
        <img src="${p.image}" class="card-img-top" alt="${p.title}">
        <div class="card-body">
          <h6>${p.title}</h6>
          <p class="small text-muted"> ${p.discription}</p>
          <button data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" class="btn btn-sm btn-outline-danger w-100" onclick="addToCart(${p.id})">Buy Now</button>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

// Function to increase item quantity in cart
function increaseQuantity(id) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.quantity++;
    updateCart();
  }
}

// Function to decrease item quantity in cart
function decreaseQuantity(id) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCart();
    }
  }
}

function updateCart() {
  const cartContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  cartContainer.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-2";
    div.innerHTML = `
      <div>
        <strong>${item.title}</strong>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-secondary me-1" onclick="decreaseQuantity(${item.id})">-</button>
        <span class="mx-1">${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary ms-1" onclick="increaseQuantity(${item.id})">+</button>
        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${item.id})">&times;</button>
      </div>`;
    cartContainer.appendChild(div);
  });

  // Show total quantity of products in cartTotal
  cartTotal.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = cart.reduce((a, c) => a + c.quantity, 0);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

document.getElementById("checkoutBtn").onclick = () => {
  if (cart.length === 0) return alert("Cart is empty!");
  let msg = "🛒 *Order Summary*:\n";
  cart.forEach(item => {
    msg += `• ${item.title} x ${item.quantity}\n`;
  });
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/+919894324458?text=${encoded}`, "_blank");
};

function render() {
  const list = filterProducts();
  renderPagination(list.length);
  renderProducts(list);
}

// Filters and sorting
document.querySelectorAll("#searchInput, #categoryFilter, #minPrice, #maxPrice, #sortFilter").forEach(el => {
  el.addEventListener("input", () => { currentPage = 1; render(); });
});

// Items per page change
document.getElementById("itemsPerPage").addEventListener("change", e => {
  itemsPerPage = parseInt(e.target.value);
  currentPage = 1;
  render();
});

// View toggle buttons
document.getElementById("gridViewBtn").addEventListener("click", () => {
  currentView = 'grid';
  document.getElementById("gridViewBtn").classList.add("active");
  document.getElementById("listViewBtn").classList.remove("active");
  render();
});
document.getElementById("listViewBtn").addEventListener("click", () => {
  currentView = 'list';
  document.getElementById("listViewBtn").classList.add("active");
  document.getElementById("gridViewBtn").classList.remove("active");
  render();
});

// Initial render
render();
