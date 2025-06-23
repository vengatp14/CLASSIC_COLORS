
const products = [
  { id: 1, title: "Berger Bison", category: "Tiling Soloutions", price: 15000, discountPrice: 12000, image: "assets/img/iteams/item 1.jpg" },
  { id: 2, title: "Bison Glow", category: "Clothing", price: 800, discountPrice: 500, image: "assets/img/iteams/item 2.jpg" },
  { id: 3, title: "Berger Rangoli", category: "Books", price: 500, discountPrice: 400, image: "assets/img/iteams/item 3.jpg" },
  { id: 4, title: "Berger Easy Clean", category: "Electronics", price: 50000, discountPrice: 45000, image: "assets/img/iteams/item 4.jpg" },
  { id: 5, title: "Berger Silk Glamor", category: "Clothing", price: 1500, discountPrice: 1000, image: "assets/img/iteams/item 5.jpg" },
  { id: 6, title: "Berger Silk Glam Art", category: "Electronics", price: 8000, discountPrice: 7000, image: "assets/img/iteams/item 6.jpg" },
  { id: 7, title: "Silk Glam Art Non Metallic", category: "Electronics", price: 15000, discountPrice: 12000, image: "assets/img/iteams/item 7.jpg" },
  { id: 8, title: "Easy Clean Silky Touch And Fresh", category: "Clothing", price: 800, discountPrice: 500, image: "assets/img/iteams/item 8.jpg" },
  { id: 9, title: "Berger Walmasta Glow", category: "Books", price: 500, discountPrice: 400, image: "assets/img/iteams/item 9.jpg" },
  { id: 10, title: "Berger Walmasta Lite", category: "Electronics", price: 50000, discountPrice: 45000, image: "assets/img/iteams/item 10.jpg" },

  { id: 11, title: "longlife pu tile can", category: "Roof & Floor Coating", price: 1500, discountPrice: 1000, image: "assets/img/Roof & Floor Coating/longlife pu tile can.jpg" },
  { id: 12, title: "Weathercoatfloorprotector", category: "Roof & Floor Coating", price: 1500, discountPrice: 1000, image: "assets/img/Roof & Floor Coating/Weathercoatfloorprotector.jpg" },

  { id: 13, title: "epoxy_tile_grout_2p", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/epoxy_tile_grout_2p.jpg" },
  { id: 14, title: "epoxy_tile_grout_3p", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/epoxy_tile_grout_3p.jpg" },
  { id: 15, title: "home_shield_tile_grout", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/home_shield_tile_grout.jpg" },
  { id: 16, title: "tile_adhesive", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/tile_adhesive.jpg" },
  { id: 17, title: "tile_adhesive_plus", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/tile_adhesive_plus.jpg" },
  { id: 18, title: "tile_bond_anti_slip", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/tile_bond_anti_slip.jpg" },
  { id: 19, title: "tilebondhi-flex", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/tilebondhi-flex.jpg" },
  { id: 20, title: "tile-cleaner-back-min", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/tile-cleaner-back-min.jpg" },
  { id: 21, title: "wonder_flex", category: "Tiling Soloutions", price: 1500, discountPrice: 1000, image: "assets/img/Tiling Soloutions/wonder_flex.jpg" },

  { id: 22, title: "diyProduct3", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/diyProduct3.jpg" },
  { id: 23, title: "ipaint enamel paint", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint enamel paint.jpg" },
  { id: 24, title: "ipaint enamel self paint kit", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint enamel self paint kit.jpg" },
  { id: 25, title: "ipaint enamel spray paint", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint enamel spray paint.jpg" },
  { id: 26, title: "ipaint glow in dark kit", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint glow in dark kit.jpg" },
  { id: 27, title: "ipaint wall stencil kit_0", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint wall stencil kit_0.jpg" },
  { id: 28, title: "wonder_flex", category: "Do It Your Self", price: 1500, discountPrice: 1000, image: "assets/img/DO IT YOUR SELF/ipaint wall sticker kit (1).jpg" },

  { id: 29, title: "luxol_pu_enamel_canshot", category: "Enamels", price: 1500, discountPrice: 1000, image: "assets/img/ENAMELS/luxol_pu_enamel_canshot.jpg" },
  { id: 30, title: "luxol_satin_enamel_canshot", category: "Enamels", price: 1500, discountPrice: 1000, image: "assets/img/ENAMELS/luxol_satin_enamel_canshot.jpg" },
  { id: 31, title: "product_luxol_hi_gloss_enamel", category: "Enamels", price: 1500, discountPrice: 1000, image: "assets/img/ENAMELS/product_luxol_hi_gloss_enamel.jpg" },

  { id: 32, title: "imperia_breathe_easy-2272x1280", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/imperia_breathe_easy-2272x1280.jpg" },
  { id: 33, title: "imperiadurakoat-min", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/imperiadurakoat-min.jpg" },
  { id: 34, title: "imperia-polyester-2272x1280", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/imperia-polyester-2272x1280.jpg" },
  { id: 35, title: "melamine_24_carat-min", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/melamine_24_carat-min.jpg" },
  { id: 36, title: "product_woodkeeper_fill_o_dent", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/product_woodkeeper_fill_o_dent.jpg" },
  { id: 37, title: "rainbow", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/rainbow.jpg" },
  { id: 38, title: "thumbnail_imperiatrendz", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/thumbnail_imperiatrendz.jpg" },
  { id: 39, title: "wood_protektor_canshot", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/wood_protektor_canshot.jpg" },
  { id: 40, title: "woodkeeper_1k_pu-min", category: "Wood Finish", price: 1500, discountPrice: 1000, image: "assets/img/WOOD FINISHES/woodkeeper_1k_pu-min.jpg" },

  { id: 41, title: "alplast-super", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/alplast-super.jpg" },
  { id: 42, title: "bituseal_dpc", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/bituseal_dpc.jpg" },
  { id: 43, title: "block_bond", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/block_bond.jpg" },
  { id: 44, title: "dampstop_advanced-2272x1280_1", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/dampstop_advanced-2272x1280_1.jpg" },
  { id: 45, title: "dampstop_duo-7yr_0", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/dampstop_duo-7yr_0.jpg" },
  { id: 46, title: "dampstop_elasto", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/dampstop_elasto.jpg" },
  { id: 47, title: "home_shield_crack_fill_paste-2272x1280-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/home_shield_crack_fill_paste-2272x1280-min.jpg" },
  { id: 48, title: "home_shield_pu_elastoseal_non_uv_1_k", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/home_shield_pu_elastoseal_non_uv_1_k.jpg" },
  { id: 49, title: "home_shield_ultraseal_ba-2272x1280", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/home_shield_ultraseal_ba-2272x1280.jpg" },
  { id: 50, title: "home_shield_wall_shield_2k-2272x1280_0", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/home_shield_wall_shield_2k-2272x1280_0.jpg" },
  { id: 51, title: "home_shield_waterproof_putty_canshot", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/home_shield_waterproof_putty_canshot.jpg" },
  { id: 52, title: "latex-shield-2k-2272x1280-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/latex-shield-2k-2272x1280-min.jpg" },
  { id: 53, title: "leakstop", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/leakstop.jpg" },
  { id: 54, title: "product_homhield_power_plasticizer", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/product_homeshield_power_plasticizer.jpg" },
  { id: 55, title: "proshield-hdpe", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/proshield-hdpe.jpg" },
  { id: 56, title: "pu-elastoseal-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/pu-elastoseal-min.jpg" },
  { id: 57, title: "repario-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/repario-min.jpg" },
  { id: 58, title: "roofguard-11yr", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/roofguard-11yr.jpg" },
  { id: 59, title: "rustoff_0", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/rustoff_0.jpg" },
  { id: 60, title: "seal_o_prime-5yr", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/seal_o_prime-5yr.jpg" },
  { id: 61, title: "sealocrete", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/sealocrete.jpg" },
  { id: 62, title: "shalicrystal100-min-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/shalicrystal100-min-min.jpg" },
  { id: 63, title: "SUPER advanced_latex_plus-2272x1280_0", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/SUPER advanced_latex_plus-2272x1280_0.jpg" },
  { id: 64, title: "tank-kool-min", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/tank-kool-min.jpg" },
  { id: 65, title: "thumbnail_mikroconkrete", category: "water proofing", price: 1500, discountPrice: 1000, image: "assets/img/water proofing/thumbnail_mikroconkrete.jpg" },

  { id: 66, title: "roof_kool_and_seal_-10yr", category: "Roof Coats", price: 1500, discountPrice: 1000, image: "assets/img/Roof Coats/roof_kool_and_seal_-10yr.jpg" },
  { id: 67, title: "super_grout", category: "Roof Coats", price: 1500, discountPrice: 1000, image: "assets/img/Roof Coats/super_grout.jpg" },
  { id: 68, title: "thumbnail_puroofcoat12_1", category: "Roof Coats", price: 1500, discountPrice: 1000, image: "assets/img/Roof Coats/thumbnail_puroofcoat12_1.jpg" },

  { id: 69, title: "butterflysyntheticenamel-2272x1280_1", category: "Synthetic Enamel", price: 1500, discountPrice: 1000, image: "assets/img/Synthetic Enamel/butterflysyntheticenamel-2272x1280_1.jpg" },

  { id: 70, title: "product_parrot_wood_primer", category: "Wood Primer", price: 1500, discountPrice: 1000, image: "assets/img/WOOD PRIMER/product_parrot_wood_primer.jpg" },

  { id: 71, title: "product_bp_cement_primer", category: "Interior Primer", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRIMER/product_bp_cement_primer.jpg" },

  { id: 72, title: "bp_white_primer-2272x1280_0", category: "Primers", price: 1500, discountPrice: 1000, image: "assets/img/PRIMERS/bp_white_primer-2272x1280_0.jpg" },
  { id: 73, title: "product_bp_exterior_cement_primer", category: "Primers", price: 1500, discountPrice: 1000, image: "assets/img/PRIMERS/product_bp_exterior_cement_primer.jpg" },
  { id: 74, title: "walmasta-exteriorinterior-primer-2272x1280_0", category: "Primers", price: 1500, discountPrice: 1000, image: "assets/img/PRIMERS/walmasta-exteriorinterior-primer-2272x1280_0.jpg" },

  { id: 75, title: "bp_white_primer_st_canshot", category: "Solvent Primers", price: 1500, discountPrice: 1000, image: "assets/img/SOLVENT PRIMERS/bp_white_primer_st_canshot.jpg" },
  { id: 76, title: "bp_cement_primer-2272x1280-min", category: "Solvent Primers", price: 1500, discountPrice: 1000, image: "assets/img/SOLVENT PRIMERS/bp_cement_primer-2272x1280-min.jpg" },

  { id: 77, title: "luxolqd1kepoxyprimer-2272x1280_0", category: "Primers For Metals", price: 1500, discountPrice: 1000, image: "assets/img/PRIMERS FOR METALS/luxolqd1kepoxyprimer-2272x1280_0.jpg" },
  { id: 78, title: "product_butterfly", category: "Primers For Metals", price: 1500, discountPrice: 1000, image: "assets/img/PRIMERS FOR METALS/product_butterfly.jpg" },

  { id: 79, title: "silkacrylicputty", category: "Acrylic Putty", price: 1500, discountPrice: 1000, image: "assets/img/ACRYLIC PUTTY/silkacrylicputty.jpg" },

  { id: 80, title: "bison_wall_putty", category: "Cement Putty", price: 1500, discountPrice: 1000, image: "assets/img/CEMENT PUTTY/bison_wall_putty.jpg" },
  { id: 81, title: "product_bison_levelling_putty", category: "Cement Putty", price: 1500, discountPrice: 1000, image: "assets/img/CEMENT PUTTY/product_bison_levelling_putty.jpg" },

  { id: 82, title: "durocem_extra_1_1", category: "Cem", price: 1500, discountPrice: 1000, image: "assets/img/CEM/durocem_extra_1_1.jpg" },
  { id: 83, title: "Durocem Neo 279 x 270", category: "Cem", price: 1500, discountPrice: 1000, image: "assets/img/CEM/Durocem Neo 279 x 270.jpg" },

  { id: 84, title: "Floranita Sandstone paint can-02", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/Floranita Sandstone paint can-02.jpg" },
  { id: 85, title: "Florantina Glitteratti paint can-02_0", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/Florantina Glitteratti paint can-02_0.jpg" },
  { id: 86, title: "Florantina Glitteratti paint can-02_0", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/Florantina Glitteratti paint can-02_0.jpg" },
  { id: 87, title: "ruff_n_tuff paint can-02", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/ruff_n_tuff paint can-02.jpg" },
  { id: 88, title: "ruff_n_tuff paint can-02_0", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/ruff_n_tuff paint can-02_0.jpg" },
  { id: 89, title: "Solitaire granite paint can-02", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/Solitaire granite paint can-02.jpg" },
  { id: 90, title: "Solitaire stone paint can-02", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/Solitaire stone paint can-02.jpg" },
  { id: 91, title: "ruff_n_tuff paint can-02_5", category: "Textures", price: 1500, discountPrice: 1000, image: "assets/img/TEXTURES/ruff_n_tuff paint can-02_5.jpg" },

  { id: 92, title: "FLEXO", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/FLEXO.jpg" },
  { id: 93, title: "LONG LIFE 10", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/LONG LIFE 10.jpg" },
  { id: 94, title: "LONG LIFE 15", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/LONG LIFE 15.jpg" },
  { id: 95, title: "Walmasta Antifungal Emulsion", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/Walmasta Antifungal Emulsion.jpg" },
  { id: 96, title: "Walmasta Glow", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/Walmasta Glow.jpg" },
  { id: 97, title: "WALMASTA LITE", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/WALMASTA LITE.jpg" },
  { id: 98, title: "Weathercoat Anti Dustt", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/Weathercoat Anti Dustt.jpg" },
  { id: 99, title: "Weathercoat Glow", category: "Exterior Products", price: 1500, discountPrice: 1000, image: "assets/img/EXTERIOR PRODUCTS/Weathercoat Glow.jpg" },

  { id: 100, title: "Bison Glow", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Bison Glow.jpg" },
  { id: 101, title: "Bison Lite", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Bison Lite.jpg" },
  { id: 102, title: "Bison", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Bison.jpg" },
  { id: 103, title: "Ceiling White", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Ceiling White.jpg" },
  { id: 104, title: "Easy Clean Fresh", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Easy Clean Fresh.jpg" },
  { id: 105, title: "Easy Clean Silky Touch", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Easy Clean Silky Touch.jpg" },
  { id: 106, title: "Easy Clean", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Easy Clean.jpg" },
  { id: 107, title: "Glamor Dazzle", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Glamor Dazzle.jpg" },
  { id: 108, title: "Rangoli Rich Matt", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Rangoli Rich Matt.jpg" },
  { id: 109, title: "Rangoli", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Rangoli.jpg" },
  { id: 110, title: "Silk Glam Art Metallica 2", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Metallica 2.jpg" },
  { id: 111, title: "Silk Glam Art Metallica", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Metallica.jpg" },
  { id: 112, title: "Silk Glam Art Non Metallica.", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Non Metallica..jpg" },
  { id: 113, title: "Silk Glam Art Stones & Tones", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Stones & Tones.jpg" },
  { id: 114, title: "Silk Glam Art Stucco", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Stucco.jpg" },
  { id: 115, title: "Silk Glam Art Vintage", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glam Art Vintage.jpg" },
  { id: 116, title: "Silk Glamor 1", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glamor 1.jpg" },
  { id: 117, title: "Silk Glamor 2", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glamor 2.jpg" },
  { id: 118, title: "Silk Glamor", category: "Interior Products", price: 1500, discountPrice: 1000, image: "assets/img/INTERIOR PRODUCTS/Silk Glamor.jpg" },
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
    (category === "" || p.category === category) &&
    p.discountPrice >= min &&
    p.discountPrice <= max
  );

  if (sort === "low") result.sort((a, b) => a.discountPrice - b.discountPrice);
  if (sort === "high") result.sort((a, b) => b.discountPrice - a.discountPrice);

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
      <div class="card product-card">
        <img src="${p.image}" class="card-img-top" alt="${p.title}">
        <div class="card-body">
          <h6>${p.title}</h6>
          <p class="small text-muted"> <s>${p.discountPrice}</s> ${p.price}</p>
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
  let total = 0;
  cart.forEach(item => {
    total += item.discountPrice * item.quantity;
    const div = document.createElement("div");
    // Added align-items-center for better vertical alignment of buttons
    div.className = "d-flex justify-content-between align-items-center mb-2";
    div.innerHTML = `
      <div>
        <strong>${item.title}</strong><br>
        ₹${item.discountPrice}
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-secondary me-1" onclick="decreaseQuantity(${item.id})">-</button>
        <span class="mx-1">${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary ms-1" onclick="increaseQuantity(${item.id})">+</button>
        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${item.id})">&times;</button>
      </div>`;
    cartContainer.appendChild(div);
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.reduce((a, c) => a + c.quantity, 0);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

document.getElementById("checkoutBtn").onclick = () => {
  if (cart.length === 0) return alert("Cart is empty!");
  let msg = "🛒 *Order Summary*:\n";
  let total = 0;
  cart.forEach(item => {
    msg += `• ${item.title} - ₹${item.discountPrice} x ${item.quantity}\n`;
    total += item.discountPrice * item.quantity;
  });
  msg += `\n*Total: ₹${total}*`;
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
