/* ==========================================================================
   PLAXEMA FRONTEND INTERACTIVE LOGIC (DYNAMICAL INTEGRATION)
   ========================================================================== */

const productDatabase = {
    "ADHESIVES": {
        "Liquid Adhesives": [
            {
                "name": "WBA Water Based",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "PVA Polyvinyl Acetate",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acrylic Dispersions",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid Latex",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Dextrin and Strach",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "SBA Solvend-Based",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Contact",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Rubber",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Nitrocellulose",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Reactive",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Instant",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid Epoxy",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid Polyurethane",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Anaerobic",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid Sealants and Pastes",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Silicone Adhesives - Sealants",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid MS-polymers",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Liquid Hybrid",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Paste Adhesives": [
            {
                "name": "Paste Liquid Nails",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Acrylic",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Polyurethane",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Synthetic Rubber",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Reactive",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Epoxy",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Methylmethacrylate",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Elastic",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Specialized Industrial",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paste Craft",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Powder Adhesives": [
            {
                "name": "Cement-Based",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Standard Tiles Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Flex Elastic Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Terracotta Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Gypsum-Based",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Plasterboard Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Gypsum Block Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Powdered Carpentary",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Reactive Resigns",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Urea-formaldehyde Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Melamine-formaldehyde Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Resorcinol Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Natural and Organic",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Strach and Dextrin Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Methylcellulose Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Casein and Bone Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Speciality Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "DTF/Screen Printing Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Mastic Adhesives": [
            {
                "name": "Construction",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acrylic Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Ceramic Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Waterproofing Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Bitumen and asphalt",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Roofing Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Protecting Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Specialized",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Industrial Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "HVAC Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "MS-Polymer Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Hybrid Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Polyurethane Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Modern Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "High-tech Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Traditional and Natural",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Resign Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Olfactory Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Film and Tape Adhesives": [
            {
                "name": "Film Adhesives",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Hot-Melt Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Epoxy Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Thermal Transfer Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Adhesive Transfer Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Single-Coated Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Paper Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Packaging Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Reinforced Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Duct Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Aluminum and Metal Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Double-Sided Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Backing Material coated Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acrylic Tumble Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Thin Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Foam Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Special Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Other Adhesives": [
            {
                "name": "Other Adhesives",
                "desc": "High-performance private label formulation for other adhesives applications.",
                "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ]
    },
    "SEALANTS": {
        "High Performance Sealants": [
            {
                "name": "Silicones",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Polyurethane",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "MS-Polymers",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Hybrids",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "SMP",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "STP",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Medium Performance Sealants": [
            {
                "name": "Polysulfides",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "High-performance Acrylics",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Polyisobutylene sealants",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Low Performance Sealants": [
            {
                "name": "Acrylics",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Butyl Rubber",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Oil",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Caulk",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Other Sealants": [
            {
                "name": "Bituminous",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Refractory and silicate",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Anaerobic Thread",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acoustic",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other Sealants",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Elongation at Break: >500% | Shore A: 25-35",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ]
    },
    "PU FOAMS": {
        "Hand Grade PU Foams": [
            {
                "name": "Straw Summer",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Straw Winter",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Straw All Season",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Gun Grade PU Foams": [
            {
                "name": "Gun Foam Summer",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Gun Foam Winter",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Gun Foam All Seasons",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Special PU Foams": [
            {
                "name": "Elastic",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Acoustic",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Low-expansion",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Well / Sewer",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "2K PU Foam",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Fire-Rated PU Foams": [
            {
                "name": "Hand-Grade Fire-Rated",
                "desc": "High-performance private label formulation for fire-rated pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Gun-Grade Fire-Rated",
                "desc": "High-performance private label formulation for fire-rated pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Adhesive PU Foams": [
            {
                "name": "Hand-Grade Adhesive",
                "desc": "High-performance private label formulation for adhesive pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Gun-Grade Adhesive",
                "desc": "High-performance private label formulation for adhesive pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Thermo PU Foams": [
            {
                "name": "Hand-Grade Thermo",
                "desc": "High-performance private label formulation for thermo pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            },
            {
                "name": "Gun-Grade Thermo",
                "desc": "High-performance private label formulation for thermo pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ],
        "Other PU Foams": [
            {
                "name": "Other PU Foams",
                "desc": "High-performance private label formulation for other pu foams applications.",
                "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
                "pack": "750ml Aerosol Can"
            }
        ]
    },
    "AEROSOLS": {
        "Technical Aerosols": [
            {
                "name": "Multipurpose Penetrating Oil",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Silicone Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "White Lithium Grease (Without PTFE)",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "White Lithium Grease (With PTFE)",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "PTFE (Teflon) Dry Lube Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Copper Anti-Seize Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Ceramic Anti-Seize Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Braking systems",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Hedge Trimmer & Chain Saw Lubricant",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Open Gear & Wire Rope Lubricant",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Moisture Displacer & Corrosion Inhibitor",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Industrial Aerosols": [
            {
                "name": "Brake & Parts Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Heavy-Duty Engine Degreaser (Foaming)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Heavy-Duty Engine Degreaser (Liquid)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Carburetor & Choke Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Adhesive & Label Remover (Citrus-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Adhesive & Label Remover (Solvent)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Electrical Contact Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Industrial Foam Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Stainless Steel Cleaner & Polish",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Welding Anti-Spatter (Water-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Welding Anti-Spatter Spray (Solvent-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Mould Release Spray (Silicone variant)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Mould Release Spray (Non-silicone)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Protection & Anti-Corrosion Aerosols": [
            {
                "name": "Zinc Galvanizing Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Zinc Galvanizing Spray (Pure)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Zinc-Alu Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Stainless Steel Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Underbody Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Bitumen Underbody Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Cavity Wax Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Rust Converter Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Anti-Corrosion Primer (Red Oxide)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Anti-Corrosion Primer (Grey)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Welding Primer",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Automotive Aerosols": [
            {
                "name": "Cockpit Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Dashboard Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Tyre Shine",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Foam Care",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Air Conditioning Sanitizer",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Starting Fluid",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Air Sensor (MAF) Cleaner",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "DPF (Diesel Particulate Filter) Cleaner",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Leak Detection Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Belt Dressing Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Technical Paints & Coatings": [
            {
                "name": "360\u00b0 Construction Marking Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Line Marking Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "High-Heat Resistant Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Plastic Adhesion Promoter",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Plastic Adhesion Primer",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "RAL Color Touch-Up Paints",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Acrylic Clear Coat",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "2K Clear Coat",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Radiator Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Spray Adhesives": [
            {
                "name": "Multipurpose Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Multipurpose Spray Adhesive (Light)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Heavy-Duty Contact Adhesive (High tack)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Contact Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Repositionable Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Polystyrene-Safe Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Superglue Activator",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Accelerator Spray (For CA glues)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Temporary Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "PU Foam Cleaner",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Household & Craft Aerosols": [
            {
                "name": "Compressed Air Duster",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Textile",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Leather Waterproofing",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Chewing Gum Remover",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Graffiti Remover Spray",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Barbecue & Oven Cleaner",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Barbecue & Oven Cleaner (Foaming)",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Freeze Spray",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Eco-Line Aerosols": [
            {
                "name": "Bio-based Penetrating Oil (Soy base)",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Bio-based Penetrating Oil (Rapeseed base)",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Compressed Nitrogen",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "VOC-Free / Water-Based Degreaser",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Biodegradable Mould Release Agent",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            },
            {
                "name": "Propelled Cleaners",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ],
        "Other Aerosols": [
            {
                "name": "Other Aerosols",
                "desc": "High-performance private label formulation for other aerosols applications.",
                "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
                "pack": "400ml or 500ml Spray Can"
            }
        ]
    },
    "AUTOMOTIVE": {
        "Underbody": [
            {
                "name": "Bitumen-Based Underbody Coating",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Synthetic Rubber/Resin Anti-Gravel Coating",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Wax-Based Cavity Protection",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Brushable Underbody Sealer",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Sprayable Underbody Guard",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Fillers": [
            {
                "name": "Universal Polyester Body Filler",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Lightweight Polyester Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Glass Fibre Reinforced Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Aluminum-Polyester Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Fine/Finishing Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Plastic Body Filler",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Primers": [
            {
                "name": "1K Acrylic Filler Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K Epoxy Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K High-Build Polyurethane Surfacer/Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Plastic Adhesion Promoter",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Wash Primer / Etch Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "UV-Curing Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Hardeners": [
            {
                "name": "Polyester Putty Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K Primer Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K Clear Coat Activator",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Universal Isocyanate Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Clear Coats": [
            {
                "name": "2K MS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K HS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "2K UHS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Scratch-Resistant Refinish Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Matte / Satin Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Express / Air-Dry Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Thinners": [
            {
                "name": "Acrylic Thinner - Fast",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acrylic Thinner - Standard",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Acrylic Thinner - Slow",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Epoxy System Thinner",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Basecoat Thinner",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Additives": [
            {
                "name": "Elastic / Flex Additive",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Anti-Silicone Fluid",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Fade-Out / Blending Solvent",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Drying Accelerator",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Matting Agent Liquid",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Polishing": [
            {
                "name": "Heavy-Cut Compound",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Medium-Cut Polishing Compound",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Fine Anti-Hologram Finish",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Protective Liquid Wax / Polymer Sealant",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Clay Bar / Paint Surface Decontamination Gel",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Other Automotive": [
            {
                "name": "Silicone Remover / Degreaser",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Guide Coat Spray / Powder",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Windshield Polyurethane Adhesive",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other Automotive",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ]
    },
    "CLEANING": {
        "Industrial Cleaning": [
            {
                "name": "Heavy-Duty Alkaline Degreaser",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Solvent-Based Parts Washer Fluid",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Industrial Safety Solvent Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Concentrated Workshop Floor Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Ultrasonic Cleaning Fluid Concentrate",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Tar and Bitumen Remover",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Scale and Rust Remover Acidic Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "House Cleaning": [
            {
                "name": "Multipurpose Surface Cleaner Concentrate",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Heavy-Duty Oven and Grill Cleaner",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Premium Glass and Mirror Streak-Free Cleaner",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Bathroom and Scale Remover Gel",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Kitchen Grease Degreaser Spray",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Carpet and Upholstery Foaming Shampoo",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Drain Opener Power Gel",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Disinfection Cleaning": [
            {
                "name": "Surface Disinfectant Spray",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Industrial Biocidal Cleaner Concentrate",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Food-Grade Surface Sanitizer",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Medical-Grade Hand and Surface Disinfectant",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Anti-Mold and Mildew Fungicidal Spray",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Extraction Cleaning": [
            {
                "name": "Low-Foam Carpet Extraction Detergent",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Industrial Vacuum Extraction Cleaner",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Textile Stain Extraction Booster",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Odour Neutralizer Extraction Additive",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Rinse and Neutralizer Conditioning Agent",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Hygiene Cleaning": [
            {
                "name": "Liquid Hand Soap Concentrate",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Antibacterial Foam Hand Soap",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Heavy-Duty Mechanics Hand Paste with Natural Abrasives",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Protective Barrier Hand Cream",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Sanitary Ware Deep Cleaner",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Manual Cleaning": [
            {
                "name": "Manual Dishwashing Liquid Concentrate",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Neutral All-Purpose Manual Wash Detergent",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Vehicle Manual Wash and Wax Shampoo",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Scouring Cream Cleanser",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Manual Leather Cleaner and Conditioner",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Other Cleaning": [
            {
                "name": "Graffiti Remover Liquid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Chewing Gum Freezing Spray and Liquid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Air Conditioning System Flushing Fluid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other Cleaning",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ]
    },
    "APPLICATION SYSTEMS": {
        "Manual Dispensing": [
            {
                "name": "Professional Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Standard Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Heavy-Duty Foil Pack Sausage Dispenses",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Standard Foil Pack Sausage Dispenses",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Professional Dual-Component Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Dual-Component Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Joint Smoothing and Finishing Profiles",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other Foil Pack Sausage Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Pneumatic Dispensing": [
            {
                "name": "Pneumatic Cartridge System",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Pneumatic Foil Pack Sausage System",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Industrial Multi-Component",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Pneumatic Coaxial",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Pneumatic Side-by-side",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Pneumatic High-Capacity",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Battery-Powered": [
            {
                "name": "Cordless Li-Ion Professional Cartridge",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cordless Li-Ion Standard Cartridge",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cordless Li-Ion Professional Foil Pack Sausage",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cordless Li-Ion Standard Foil Pack Sausage",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cordless Li-Ion Coaxial Applicators",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cordless Li-Ion Side-by-side  Applicators",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "High-Capacity Battery Systems",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "PU Foam Applicators": [
            {
                "name": "PTFE - Premium PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "PTFE - Professional PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Standard Metal PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "PTFE-Coated Easy-Clean PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Ergonomic Lightweight PU Foam Applicators",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Long-Nozzle Extension PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Standard PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Other PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Accessories": [
            {
                "name": "Specialty Mixing Nozzles for Anchoring Resins",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Heavy-Duty Barrel Cleaners and Brushes",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Custom Geometry Extrusions and Applicator Tips",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "PU Foam application adaptors",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "PU Foam application nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Cartridge nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            },
            {
                "name": "Foil Pack Sausage nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "EU Status: 100% Compliant | Formulation: Custom",
                "pack": "310ml Cartridge, 600ml Sausage, or Bulk"
            }
        ],
        "Other Application": []
    }
};
const flatProducts = [
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "WBA Water Based",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "PVA Polyvinyl Acetate",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Acrylic Dispersions",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Latex",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Dextrin and Strach",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "SBA Solvend-Based",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Contact",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Rubber",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Nitrocellulose",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Reactive",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Instant",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Epoxy",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Polyurethane",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Anaerobic",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Sealants and Pastes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Silicone Adhesives - Sealants",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid MS-polymers",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Hybrid",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for liquid adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Liquid Nails",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Acrylic",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Polyurethane",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Synthetic Rubber",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Reactive",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Epoxy",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Methylmethacrylate",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Elastic",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Specialized Industrial",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Craft",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for paste adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Cement-Based",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Standard Tiles Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Flex Elastic Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Terracotta Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Gypsum-Based",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Plasterboard Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Gypsum Block Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Powdered Carpentary",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Reactive Resigns",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Urea-formaldehyde Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Melamine-formaldehyde Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Resorcinol Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Natural and Organic",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Strach and Dextrin Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Methylcellulose Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Casein and Bone Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Speciality Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "DTF/Screen Printing Powder",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for powder adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Construction",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Acrylic Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Ceramic Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Waterproofing Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Bitumen and asphalt",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Roofing Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Protecting Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Specialized",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Industrial Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "HVAC Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "MS-Polymer Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Hybrid Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Polyurethane Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Modern Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "High-tech Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Traditional and Natural",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Resign Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Olfactory Mastics",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for mastic adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Film Adhesives",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Hot-Melt Films",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Epoxy Films",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Thermal Transfer Films",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Adhesive Transfer Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Single-Coated Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Paper Tape",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Packaging Tape",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Reinforced Tape",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Duct Tape",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Aluminum and Metal Tape",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Double-Sided Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Backing Material coated Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Acrylic Tumble Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Thin Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Foam Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Special Tapes",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for film and tape adhesives applications."
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Other Adhesives",
        "name": "Other Adhesives",
        "spec": "Tensile Strength: 5.5 MPa | Curing Time: 24h",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other adhesives applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Silicones",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Polyurethane",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "MS-Polymers",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Hybrids",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "SMP",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "STP",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for high performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "Polysulfides",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for medium performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "High-performance Acrylics",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for medium performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "Polyisobutylene sealants",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for medium performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Acrylics",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for low performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Butyl Rubber",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for low performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Oil",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for low performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Caulk",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for low performance sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Bituminous",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Refractory and silicate",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Anaerobic Thread",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Acoustic",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other sealants applications."
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Other Sealants",
        "spec": "Elongation at Break: >500% | Shore A: 25-35",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other sealants applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw Summer",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for hand grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw Winter",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for hand grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw All Season",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for hand grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam Summer",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for gun grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam Winter",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for gun grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam All Seasons",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for gun grade pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Elastic",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for special pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Acoustic",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for special pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Low-expansion",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for special pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Well / Sewer",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for special pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "2K PU Foam",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for special pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Fire-Rated PU Foams",
        "name": "Hand-Grade Fire-Rated",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for fire-rated pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Fire-Rated PU Foams",
        "name": "Gun-Grade Fire-Rated",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for fire-rated pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Adhesive PU Foams",
        "name": "Hand-Grade Adhesive",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for adhesive pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Adhesive PU Foams",
        "name": "Gun-Grade Adhesive",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for adhesive pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Thermo PU Foams",
        "name": "Hand-Grade Thermo",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for thermo pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Thermo PU Foams",
        "name": "Gun-Grade Thermo",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for thermo pu foams applications."
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Other PU Foams",
        "name": "Other PU Foams",
        "spec": "Foam Yield: Up to 45L | Post-expansion: Low",
        "pack": "750ml Aerosol Can",
        "desc": "High-performance private label formulation for other pu foams applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Multipurpose Penetrating Oil",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Silicone Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "White Lithium Grease (Without PTFE)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "White Lithium Grease (With PTFE)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "PTFE (Teflon) Dry Lube Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Copper Anti-Seize Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Ceramic Anti-Seize Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Braking systems",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Hedge Trimmer & Chain Saw Lubricant",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Open Gear & Wire Rope Lubricant",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Moisture Displacer & Corrosion Inhibitor",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Brake & Parts Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Heavy-Duty Engine Degreaser (Foaming)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Heavy-Duty Engine Degreaser (Liquid)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Carburetor & Choke Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Adhesive & Label Remover (Citrus-based)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Adhesive & Label Remover (Solvent)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Electrical Contact Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Industrial Foam Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Stainless Steel Cleaner & Polish",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Welding Anti-Spatter (Water-based)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Welding Anti-Spatter Spray (Solvent-based)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Mould Release Spray (Silicone variant)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Mould Release Spray (Non-silicone)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for industrial aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc Galvanizing Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc Galvanizing Spray (Pure)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc-Alu Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Stainless Steel Protection",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Underbody Protection",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Bitumen Underbody Protection",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Cavity Wax Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Rust Converter Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Anti-Corrosion Primer (Red Oxide)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Anti-Corrosion Primer (Grey)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Welding Primer",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Cockpit Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Dashboard Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Tyre Shine",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Foam Care",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Air Conditioning Sanitizer",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Starting Fluid",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Air Sensor (MAF) Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "DPF (Diesel Particulate Filter) Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Leak Detection Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Belt Dressing Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for automotive aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "360\u00b0 Construction Marking Paint",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Line Marking Paint",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "High-Heat Resistant Paint",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Plastic Adhesion Promoter",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Plastic Adhesion Primer",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "RAL Color Touch-Up Paints",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Acrylic Clear Coat",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "2K Clear Coat",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Radiator Paint",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for technical paints & coatings applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Multipurpose Spray Adhesive",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Multipurpose Spray Adhesive (Light)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Heavy-Duty Contact Adhesive (High tack)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Contact Adhesive",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Repositionable Spray Adhesive",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Polystyrene-Safe Spray Adhesive",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Superglue Activator",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Accelerator Spray (For CA glues)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Temporary Spray Adhesive",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "PU Foam Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for spray adhesives applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Compressed Air Duster",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Textile",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Leather Waterproofing",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Chewing Gum Remover",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Graffiti Remover Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Barbecue & Oven Cleaner",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Barbecue & Oven Cleaner (Foaming)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Freeze Spray",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for household & craft aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Bio-based Penetrating Oil (Soy base)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Bio-based Penetrating Oil (Rapeseed base)",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Compressed Nitrogen",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "VOC-Free / Water-Based Degreaser",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Biodegradable Mould Release Agent",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Propelled Cleaners",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for eco-line aerosols applications."
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Other Aerosols",
        "name": "Other Aerosols",
        "spec": "Solvent base: Hydrocarbon | Propellant: Propane-Butane",
        "pack": "400ml or 500ml Spray Can",
        "desc": "High-performance private label formulation for other aerosols applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Bitumen-Based Underbody Coating",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for underbody applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Synthetic Rubber/Resin Anti-Gravel Coating",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for underbody applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Wax-Based Cavity Protection",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for underbody applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Brushable Underbody Sealer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for underbody applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Sprayable Underbody Guard",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for underbody applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Universal Polyester Body Filler",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Lightweight Polyester Putty",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Glass Fibre Reinforced Putty",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Aluminum-Polyester Putty",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Fine/Finishing Putty",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Plastic Body Filler",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for fillers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "1K Acrylic Filler Primer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "2K Epoxy Primer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "2K High-Build Polyurethane Surfacer/Primer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "Plastic Adhesion Promoter",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "Wash Primer / Etch Primer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "UV-Curing Primer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for primers applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "Polyester Putty Hardener",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hardeners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "2K Primer Hardener",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hardeners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "2K Clear Coat Activator",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hardeners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "Universal Isocyanate Hardener",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hardeners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K MS Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K HS Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K UHS Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Scratch-Resistant Refinish Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Matte / Satin Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Express / Air-Dry Clear Coat",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for clear coats applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Fast",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for thinners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Standard",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for thinners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Slow",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for thinners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Epoxy System Thinner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for thinners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Basecoat Thinner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for thinners applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Elastic / Flex Additive",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for additives applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Anti-Silicone Fluid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for additives applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Fade-Out / Blending Solvent",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for additives applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Drying Accelerator",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for additives applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Matting Agent Liquid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for additives applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Heavy-Cut Compound",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for polishing applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Medium-Cut Polishing Compound",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for polishing applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Fine Anti-Hologram Finish",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for polishing applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Protective Liquid Wax / Polymer Sealant",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for polishing applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Clay Bar / Paint Surface Decontamination Gel",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for polishing applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Silicone Remover / Degreaser",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other automotive applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Guide Coat Spray / Powder",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other automotive applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Windshield Polyurethane Adhesive",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other automotive applications."
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Other Automotive",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other automotive applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Heavy-Duty Alkaline Degreaser",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Solvent-Based Parts Washer Fluid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Industrial Safety Solvent Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Concentrated Workshop Floor Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Ultrasonic Cleaning Fluid Concentrate",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Tar and Bitumen Remover",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Scale and Rust Remover Acidic Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for industrial cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Multipurpose Surface Cleaner Concentrate",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Heavy-Duty Oven and Grill Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Premium Glass and Mirror Streak-Free Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Bathroom and Scale Remover Gel",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Kitchen Grease Degreaser Spray",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Carpet and Upholstery Foaming Shampoo",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Drain Opener Power Gel",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for house cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Surface Disinfectant Spray",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for disinfection cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Industrial Biocidal Cleaner Concentrate",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for disinfection cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Food-Grade Surface Sanitizer",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for disinfection cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Medical-Grade Hand and Surface Disinfectant",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for disinfection cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Anti-Mold and Mildew Fungicidal Spray",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for disinfection cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Low-Foam Carpet Extraction Detergent",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for extraction cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Industrial Vacuum Extraction Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for extraction cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Textile Stain Extraction Booster",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for extraction cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Odour Neutralizer Extraction Additive",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for extraction cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Rinse and Neutralizer Conditioning Agent",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for extraction cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Liquid Hand Soap Concentrate",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hygiene cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Antibacterial Foam Hand Soap",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hygiene cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Heavy-Duty Mechanics Hand Paste with Natural Abrasives",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hygiene cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Protective Barrier Hand Cream",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hygiene cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Sanitary Ware Deep Cleaner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for hygiene cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Manual Dishwashing Liquid Concentrate",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Neutral All-Purpose Manual Wash Detergent",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Vehicle Manual Wash and Wax Shampoo",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Scouring Cream Cleanser",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Manual Leather Cleaner and Conditioner",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Graffiti Remover Liquid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Chewing Gum Freezing Spray and Liquid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Air Conditioning System Flushing Fluid",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other cleaning applications."
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Other Cleaning",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for other cleaning applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Professional Cartridge Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Standard Cartridge Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Heavy-Duty Foil Pack Sausage Dispenses",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Standard Foil Pack Sausage Dispenses",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Professional Dual-Component Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Dual-Component Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Joint Smoothing and Finishing Profiles",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Other Cartridge Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Other Foil Pack Sausage Dispensers",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for manual dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Cartridge System",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Foil Pack Sausage System",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Industrial Multi-Component",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Coaxial",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Side-by-side",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic High-Capacity",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pneumatic dispensing applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Professional Cartridge",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Standard Cartridge",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Professional Foil Pack Sausage",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Standard Foil Pack Sausage",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Coaxial Applicators",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Side-by-side  Applicators",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "High-Capacity Battery Systems",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for battery-powered applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE - Premium PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE - Professional PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Standard Metal PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE-Coated Easy-Clean PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Ergonomic Lightweight PU Foam Applicators",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Long-Nozzle Extension PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Standard PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Other PU Foam Guns",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for pu foam applicators applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Specialty Mixing Nozzles for Anchoring Resins",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Heavy-Duty Barrel Cleaners and Brushes",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Custom Geometry Extrusions and Applicator Tips",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "PU Foam application adaptors",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "PU Foam application nozzles",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Cartridge nozzles",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Foil Pack Sausage nozzles",
        "spec": "EU Status: 100% Compliant | Formulation: Custom",
        "pack": "310ml Cartridge, 600ml Sausage, or Bulk",
        "desc": "High-performance private label formulation for accessories applications."
    }
];
const industriesServedList = [
    {
        "name": "Paper and Board",
        "icon": "\ud83d\udce6"
    },
    {
        "name": "Transportation",
        "icon": "\ud83d\ude9b"
    },
    {
        "name": "Automotive",
        "icon": "\ud83d\ude97"
    },
    {
        "name": "Footware",
        "icon": "\ud83d\udc5f"
    },
    {
        "name": "Leather",
        "icon": "\ud83d\udc5c"
    },
    {
        "name": "Building",
        "icon": "\ud83c\udfd7\ufe0f"
    },
    {
        "name": "Construction",
        "icon": "\ud83c\udfd7\ufe0f"
    },
    {
        "name": "Wood",
        "icon": "\ud83e\udeb5"
    },
    {
        "name": "Assembly",
        "icon": "\u2699\ufe0f"
    },
    {
        "name": "Consumer",
        "icon": "\ud83d\udecd\ufe0f"
    },
    {
        "name": "DIY",
        "icon": "\ud83d\udee0\ufe0f"
    },
    {
        "name": "Craftsmen",
        "icon": "\ud83d\udc77"
    },
    {
        "name": "Civil Engineering",
        "icon": "\ud83d\udee3\ufe0f"
    },
    {
        "name": "Other",
        "icon": "\ud83d\udd17"
    }
];

const infoModalData = {
    about: {
        title: "Corporate Profile",
        desc: "PLAXEMA is a premium private label chemical toll-blending and precision manufacturing agency. We design and deliver custom-formulated solutions for global brands and CEE industrial networks.",
        items: [
            "CEE regional focus: Poland, Czech Republic, Slovakia, and Hungary.",
            "Toll blending capacity: Bulk liquids, high-viscosity mastic pastes, and aerosol propellant filling.",
            "Custom packaging: Tubes, cartridges, foil pack sausages, and metal cans.",
            "Dedicated R&D laboratory for bespoke chemical modifications."
        ]
    },
    blog: {
        title: "Our Blog & Market Trends",
        desc: "Access real-time insights on Central European industrial chemical trends, regulatory shifts, and raw materials index changes.",
        items: [
            "Chemical raw materials price index shifts (MDI, Polyols, and Silicone Polymers).",
            "Impact of state-level packaging EPR reporting guidelines in CEE.",
            "The rise of bio-based technical aerosols in DIY consumer retail.",
            "Optimizing batch production schedules for winter-grade PU foams."
        ]
    },
    kb: {
        title: "Knowledge Base",
        desc: "Technical manuals, application guidelines, and chemical compound research for Plaxema products.",
        items: [
            "Understanding expansion coefficients in Gun Grade vs Hand Grade PU Foams.",
            "Adhesion metrics of hybrid MS-polymers on non-porous masonry surfaces.",
            "Refractory sealant application profiles for residential exhaust chimneys.",
            "Automotive anti-gravel underbody drying times under low humidity."
        ]
    },
    qa: {
        title: "Q&A (Friction Remover)",
        desc: "Quick answers regarding partnerships, shipping routes, MOQ (Minimum Order Quantity), and compliance authoring.",
        items: [
            "What is the typical MOQ for custom aerosol filling? (Standard: 5,000 units per formulation).",
            "How is geographical protection managed? (Exclusivity is legally locked per target state).",
            "Do you provide SDS in local languages? (Yes, we cover 100% of EU/CEE translations).",
            "What is the standard lead time? (4 to 6 weeks depending on forecasting schedules)."
        ]
    },
    sds: {
        title: "SDS & Compliance Portal",
        desc: "Complete chemical legislative security. We handle 100% of regulatory paperwork for CEE chemical distribution.",
        items: [
            "Safety Data Sheets (SDS) authored in accordance with REACH Annex II.",
            "ECHA Poison Center Notifications (PCN) and unique formula identifiers (UFI).",
            "Packaging label safety reviews for chemical hazard warning declarations.",
            "Local language packaging legal validation across CEE member states."
        ]
    },
    lead: {
        title: "Supply Chain & Lead-Time Updates",
        desc: "Direct updates on factory lines, warehouse availability, and transport schedules across Central Europe.",
        items: [
            "Current cartridge line occupancy status: Standard 4-week window.",
            "Foil pack sausage toll-blending schedule: Open slots available for next month.",
            "CEE logistics transit times: 48-hour delivery from central hub to Warsaw/Prague/Budapest.",
            "Rolling forecast benefits: Pre-order slots lock factory queue bypass."
        ]
    },
    touch: {
        title: "Get In Touch",
        desc: "Connect with Plaxema chemical engineers and private label project managers today.",
        items: [
            "Poland & CEE Sales Office: Krakow, Poland (office@plaxema.com)",
            "Direct phone line: +48 12 345 67 89",
            "WhatsApp business support: Instant catalog request chat",
            "Request a Quote button [⚡]: Configure custom chemical specifications"
        ]
    },
    notice: {
        title: "Legal Notice (Impressum)",
        desc: "Corporate ownership data and publisher registers.",
        items: [
            "PLAXEMA Sp. z o.o. | Registry: KRS District Court Krakow",
            "VAT ID: PL123456789 | REGON: 987654321",
            "HQ Address: ul. Przemyslowa 12, 30-001 Krakow, Poland",
            "Managing Board Representators: Kiril Belchev, Director of Sales"
        ]
    },
    privacy: {
        title: "Privacy Policy",
        desc: "We protect your personal and corporate details in compliance with EU General Data Protection Regulations (GDPR).",
        items: [
            "Data collection limits: We only collect email, name, and company info for RFQ quotes.",
            "Exclusivity confidentiality: Design artwork and proprietary chemical formulas remain 100% private.",
            "No third-party trackers: Zero pixel advertising networks used on Plaxema index tables.",
            "You hold full rights to deletion and details audit logs."
        ]
    },
    terms: {
        title: "Terms & Conditions",
        desc: "General business sales and carriage contract policies.",
        items: [
            "All toll-blending quotes are subject to final formula lab verification.",
            "Geographical exclusivity clauses require active quarterly rolling forecast compliance.",
            "CEE logistics carriage is performed under Incoterms 2020 guidelines.",
            "Default payment terms: 30% advance on order, 70% post-delivery receipt validation."
        ]
    },
    cookie: {
        title: "Cookie Settings",
        desc: "This site uses cookies solely to improve interface performance (e.g. keeping track of your search results).",
        items: [
            "Session storage: Used to retain category selection in the Product Compass.",
            "Technical cookies: Essential for navigation and modal overlays transitions.",
            "No advertising cookies are placed on your terminal device.",
            "You can block cookies via your browser preferences without losing page utility."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // Elements Cache
    const sliderWrapper = document.getElementById("sliderWrapper");
    const sliderPagination = document.getElementById("sliderPagination");
    const sliderPlayPauseBtn = document.getElementById("sliderPlayPauseBtn");
    
    const accordion = document.getElementById("accordion");
    
    const categorySelectors = document.getElementById("categorySelectors");
    const subCategorySelectors = document.getElementById("subCategorySelectors");
    const productsGrid = document.getElementById("productsGrid");
    const industriesGrid = document.getElementById("industriesGrid");
    const subCategoryWrapper = document.getElementById("subCategoryWrapper");
    const productsDisplayZone = document.getElementById("productsDisplayZone");
    const landingPageView = document.getElementById("landingPageView");
    const ourOfferPageView = document.getElementById("ourOfferPageView");
    const productPageView = document.getElementById("productPageView");
    
    const megaMenu = document.getElementById("megaMenu");
    const megaCatList = document.getElementById("megaCatList");
    const megaSubCatList = document.getElementById("megaSubCatList");
    const megaItemList = document.getElementById("megaItemList");
    
    const indexSearchInput = document.getElementById("indexSearchInput");
    const indexTableBody = document.getElementById("indexTableBody");
    const searchCount = document.getElementById("searchCount");
    const indexPaginationContainer = document.getElementById("indexPaginationContainer");
    const indexShowMoreBtn = document.getElementById("indexShowMoreBtn");

    // Modals
    const quoteModal = document.getElementById("quoteModal");
    const openQuoteBtn = document.getElementById("openQuoteBtn");
    const closeQuoteModalBtn = document.getElementById("closeQuoteModalBtn");
    
    const contactMatrixModal = document.getElementById("contactMatrixModal");
    const contactMatrixBtn = document.getElementById("contactMatrixBtn");
    const closeContactMatrixBtn = document.getElementById("closeContactMatrixBtn");
    
    const productModal = document.getElementById("productModal");
    const closeProductModalBtn = document.getElementById("closeProductModalBtn");
    const productDetailLayout = document.getElementById("productDetailLayout");

    const infoModal = document.getElementById("infoModal");
    const closeInfoModalBtn = document.getElementById("closeInfoModalBtn");
    const infoModalContent = document.getElementById("infoModalContent");

    // State Variables
    let currentSlide = 0;
    let isSliderPlaying = true;
    let sliderInterval;
    const slideDelay = 5000;
    
    let activeCategory = "";
    let activeSubCategory = "";

    /* ==========================================================================
       HERO SLIDER LOGIC
       ========================================================================== */
    const slides = Array.from(sliderWrapper.querySelectorAll(".slide"));
    
    // Initialize Pagination Bullets
    slides.forEach((_, idx) => {
        const bullet = document.createElement("div");
        bullet.classList.add("slider-bullet");
        if (idx === 0) bullet.classList.add("active");
        bullet.addEventListener("click", () => goToSlide(idx));
        sliderPagination.appendChild(bullet);
    });
    
    const bullets = Array.from(sliderPagination.querySelectorAll(".slider-bullet"));

    function updateSliderUI() {
        slides.forEach((slide, idx) => {
            if (idx === currentSlide) {
                slide.classList.add("active");
                bullets[idx].classList.add("active");
            } else {
                slide.classList.remove("active");
                bullets[idx].classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSliderUI();
    }

    function goToSlide(idx) {
        currentSlide = idx;
        updateSliderUI();
        resetSliderTimer();
    }

    function startSliderTimer() {
        sliderInterval = setInterval(nextSlide, slideDelay);
    }

    function stopSliderTimer() {
        clearInterval(sliderInterval);
    }

    function resetSliderTimer() {
        if (isSliderPlaying) {
            stopSliderTimer();
            startSliderTimer();
        }
    }

    // Play/Pause button controller
    sliderPlayPauseBtn.addEventListener("click", () => {
        isSliderPlaying = !isSliderPlaying;
        const playIcon = sliderPlayPauseBtn.querySelector(".play-icon");
        const pauseIcon = sliderPlayPauseBtn.querySelector(".pause-icon");
        
        if (isSliderPlaying) {
            startSliderTimer();
            playIcon.classList.add("hidden");
            pauseIcon.classList.remove("hidden");
            sliderPlayPauseBtn.setAttribute("aria-label", "Pause Slideshow");
        } else {
            stopSliderTimer();
            playIcon.classList.remove("hidden");
            pauseIcon.classList.add("hidden");
            sliderPlayPauseBtn.setAttribute("aria-label", "Play Slideshow");
        }
    });

    // Start Slider
    startSliderTimer();


    /* ==========================================================================
       AUDIENCE ACCORDION LOGIC
       ========================================================================== */
    const panels = Array.from(accordion.querySelectorAll(".accordion-panel"));
    
    panels.forEach(panel => {
        panel.addEventListener("click", () => {
            panels.forEach(p => p.classList.remove("active"));
            panel.classList.add("active");
        });
    });


    /* ==========================================================================
       PRODUCT COMPASS LOGIC (MAPURA STYLE FILTERING)
       ========================================================================== */
    function renderProductCompass() {
        if (!activeCategory) {
            subCategoryWrapper.style.display = "none";
            productsDisplayZone.style.display = "none";
            return;
        }
        
        subCategoryWrapper.style.display = "block";
        const categoryData = productDatabase[activeCategory];
        const subCategories = Object.keys(categoryData);
        
        // Render Sub-Category Buttons
        subCategorySelectors.innerHTML = "";
        subCategories.forEach((subCat) => {
            const btn = document.createElement("button");
            btn.classList.add("sub-btn");
            btn.textContent = subCat;
            if (subCat === activeSubCategory) {
                btn.classList.add("active");
            }
            btn.addEventListener("click", () => {
                subCategorySelectors.querySelectorAll(".sub-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                activeSubCategory = subCat;
                renderProductCompass();
            });
            subCategorySelectors.appendChild(btn);
        });

        if (!activeSubCategory) {
            productsDisplayZone.style.display = "none";
        } else {
            productsDisplayZone.style.display = "block";
            renderProductItems();
        }
    }

    function renderProductItems() {
        const items = productDatabase[activeCategory][activeSubCategory] || [];
        productsGrid.innerHTML = "";
        
        if (items.length === 0) {
            productsGrid.innerHTML = `<div class="no-products text-gray">No product configurations listed. Customize your specifications below.</div>`;
            return;
        }

        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            
            card.innerHTML = `
                <div class="product-card-top">
                    <span class="prod-badge">${activeCategory} / ${activeSubCategory}</span>
                    <h3 class="prod-title">${item.name}</h3>
                    <p class="prod-desc">${item.desc}</p>
                </div>
                <div class="prod-actions">
                    <button class="prod-learn-more">
                        Specifications Matrix
                        <span class="arrow-icon">→</span>
                    </button>
                </div>
            `;
            
            // Detail Trigger
            card.addEventListener("click", () => {
                window.location.hash = `#/product/${getProductSlug(item.name)}`;
            });

            productsGrid.appendChild(card);
        });
    }

    // Category Level 1 Click Handler
    categorySelectors.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            categorySelectors.querySelectorAll(".cat-btn").forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
            activeCategory = btn.dataset.category;
            activeSubCategory = ""; // reset subcategory on category change
            renderProductCompass();
        });
    });

    // Initialize compass
    renderProductCompass();


    /* ==========================================================================
       INTERACTIVE MEGA MENU (3-STEP FALLING MENU MATRIX)
       ========================================================================== */
    let megaActiveCat = "ADHESIVES";
    let megaActiveSub = "";

    function populateMegaMenu() {
        // Step 1: Categories
        megaCatList.innerHTML = "";
        Object.keys(productDatabase).forEach(cat => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.textContent = cat;
            if (cat === megaActiveCat) li.classList.add("active");
            
            btn.addEventListener("mouseenter", () => {
                megaCatList.querySelectorAll("li").forEach(l => l.classList.remove("active"));
                li.classList.add("active");
                megaActiveCat = cat;
                populateMegaSub();
            });
            
            li.appendChild(btn);
            megaCatList.appendChild(li);
        });
        
        populateMegaSub();
    }

    function populateMegaSub() {
        megaSubCatList.innerHTML = "";
        const subCats = Object.keys(productDatabase[megaActiveCat]);
        
        if (subCats.length > 0) {
            megaActiveSub = subCats[0];
            subCats.forEach(sub => {
                const li = document.createElement("li");
                const btn = document.createElement("button");
                btn.textContent = sub;
                if (sub === megaActiveSub) li.classList.add("active");
                
                btn.addEventListener("mouseenter", () => {
                    megaSubCatList.querySelectorAll("li").forEach(l => l.classList.remove("active"));
                    li.classList.add("active");
                    megaActiveSub = sub;
                    populateMegaItems();
                });
                
                li.appendChild(btn);
                megaSubCatList.appendChild(li);
            });
        }
        populateMegaItems();
    }

    function populateMegaItems() {
        megaItemList.innerHTML = "";
        const items = productDatabase[megaActiveCat][megaActiveSub] || [];
        
        items.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#/our-offer";
            a.textContent = item.name;
            
            a.addEventListener("click", () => {
                // Force Compass Category & Subcategory Update
                activeCategory = megaActiveCat;
                activeSubCategory = megaActiveSub;
                
                // Sync Compass selectors
                categorySelectors.querySelectorAll(".cat-btn").forEach(b => {
                    if (b.dataset.category === activeCategory) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });
                
                renderProductCompass();
                
                // Select specific subcategory button inside compass
                setTimeout(() => {
                    subCategorySelectors.querySelectorAll(".sub-btn").forEach(b => {
                        if (b.textContent === activeSubCategory) {
                            b.click();
                        }
                    });
                }, 50);
                
                // Update URL hash to transition to our offer page
                window.location.hash = "#/our-offer";

                // Close Mega Menu
                megaMenu.style.opacity = "0";
                megaMenu.style.visibility = "hidden";
                setTimeout(() => {
                    megaMenu.style.opacity = "";
                    megaMenu.style.visibility = "";
                }, 300);
            });
            
            li.appendChild(a);
            megaItemList.appendChild(li);
        });
    }

    populateMegaMenu();


    /* ==========================================================================
       SEARCHABLE TECHNICAL INDEX (LEVEL 3 INDEX)
       ========================================================================== */
    let indexVisibleLimit = 25;

    function renderTechnicalIndex(searchQuery = "", isAppend = false) {
        if (!isAppend) {
            indexTableBody.innerHTML = "";
        }
        let filtered = flatProducts;
        
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            filtered = flatProducts.filter(p => 
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.subcategory.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q)
            );
        }
        
        searchCount.textContent = `Showing ${Math.min(indexVisibleLimit, filtered.length)} of ${filtered.length} formulations`;
        
        const startIndex = isAppend ? indexTableBody.children.length : 0;
        const chunk = filtered.slice(startIndex, indexVisibleLimit);
        
        chunk.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td data-label="Product Name"><strong>${p.name}</strong></td>
                <td data-label="Category">${p.category}</td>
                <td data-label="Sub-Category">${p.subcategory}</td>
                <td data-label="Exclusivity" style="color: var(--color-green-accent); font-weight: 600;">CEE Protected</td>
                <td data-label="Action"><button class="index-action-btn">Configure ⚡</button></td>
            `;
            
            tr.addEventListener("click", () => {
                window.location.hash = `#/product/${getProductSlug(p.name)}`;
            });
            
            indexTableBody.appendChild(tr);
        });

        // Show/hide pagination button
        if (filtered.length > indexVisibleLimit) {
            indexPaginationContainer.style.display = "flex";
            indexShowMoreBtn.textContent = `Show More (+${Math.min(50, filtered.length - indexVisibleLimit)})`;
        } else {
            indexPaginationContainer.style.display = "none";
        }
    }

    indexSearchInput.addEventListener("input", (e) => {
        indexVisibleLimit = 25;
        renderTechnicalIndex(e.target.value);
    });

    if (indexShowMoreBtn) {
        indexShowMoreBtn.addEventListener("click", () => {
            indexVisibleLimit += 50;
            renderTechnicalIndex(indexSearchInput.value, true);
        });
    }

    renderTechnicalIndex();


    /* ==========================================================================
       INDUSTRIES WE SERVE RENDER
       ========================================================================== */
    industriesServedList.forEach(ind => {
        const card = document.createElement("div");
        card.classList.add("industry-card");
        card.innerHTML = `
            <div class="ind-badge">${ind.icon}</div>
            <div class="ind-name">${ind.name}</div>
        `;
        industriesGrid.appendChild(card);
    });


    /* ==========================================================================
       MODAL TRIGGERS & WIZARD ENGINE
       ========================================================================== */
    
    // Common Modal Open / Close Helpers
    function openModal(modalEl) {
        modalEl.classList.add("active");
        modalEl.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Lock scroll
    }

    function closeModal(modalEl) {
        modalEl.classList.remove("active");
        modalEl.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Unlock scroll
    }

    // Quote Modal Trigger Listeners
    openQuoteBtn.addEventListener("click", () => openModal(quoteModal));
    closeQuoteModalBtn.addEventListener("click", () => closeModal(quoteModal));
    
    // Close overlay click handlers
    window.addEventListener("click", (e) => {
        if (e.target === quoteModal) closeModal(quoteModal);
        if (e.target === contactMatrixModal) closeModal(contactMatrixModal);
        if (e.target === productModal) closeModal(productModal);
        if (e.target === infoModal) closeModal(infoModal);
    });

    // Contact Matrix Trigger Listeners
    contactMatrixBtn.addEventListener("click", () => openModal(contactMatrixModal));
    closeContactMatrixBtn.addEventListener("click", () => closeModal(contactMatrixModal));

    // Detail Product Modal Close Listener
    closeProductModalBtn.addEventListener("click", () => closeModal(productModal));

    // Info Modal Close Listener
    closeInfoModalBtn.addEventListener("click", () => closeModal(infoModal));


    // --- INFO MODAL DYNAMIC LOADER ---
    document.querySelectorAll(".info-modal-trigger").forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const type = trigger.dataset.type;
            const data = infoModalData[type];
            
            if (data) {
                infoModalContent.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.desc}</p>
                    <ul>
                        ${data.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                openModal(infoModal);
            }
        });
    });


    // --- MULTI-STEP QUOTE WIZARD (Blue Logistics Style) ---
    const steps = Array.from(document.querySelectorAll(".form-step-pane"));
    const indicatorTabs = Array.from(document.querySelectorAll(".step-indicator"));
    const configCategory = document.getElementById("configCategory");
    const configSubCategory = document.getElementById("configSubCategory");

    function goToWizardStep(stepNum) {
        steps.forEach((pane, idx) => {
            if (idx + 1 === stepNum) {
                pane.classList.add("active");
                indicatorTabs[idx].classList.add("active");
            } else {
                pane.classList.remove("active");
                indicatorTabs[idx].classList.remove("active");
            }
        });
    }

    // Navigation buttons binding
    document.getElementById("toStep2Btn").addEventListener("click", () => {
        const companyName = document.getElementById("companyName").value.trim();
        const contactEmail = document.getElementById("contactEmail").value.trim();
        
        if (!companyName || !contactEmail) {
            alert("Please fill in your company profile details.");
            return;
        }
        goToWizardStep(2);
    });

    document.getElementById("backToStep1Btn").addEventListener("click", () => goToWizardStep(1));

    document.getElementById("toStep3Btn").addEventListener("click", () => {
        if (!configCategory.value || !configSubCategory.value) {
            alert("Please select a technical product category.");
            return;
        }
        goToWizardStep(3);
    });

    document.getElementById("backToStep2Btn").addEventListener("click", () => goToWizardStep(2));

    // Dynamic Option population for Selection 2 based on selection 1 in Quote Form
    configCategory.addEventListener("change", () => {
        const cat = configCategory.value;
        configSubCategory.disabled = false;
        configSubCategory.innerHTML = `<option value="" disabled selected>Select sub-category...</option>`;
        
        if (productDatabase[cat]) {
            const subCats = Object.keys(productDatabase[cat]);
            subCats.forEach(sc => {
                const opt = document.createElement("option");
                opt.value = sc;
                opt.textContent = sc;
                configSubCategory.appendChild(opt);
            });
        }
    });

    // Form submission simulation
    const quoteForm = document.getElementById("quoteConfiguratorForm");
    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const company = document.getElementById("companyName").value;
        const email = document.getElementById("contactEmail").value;
        const cat = configCategory.value;
        const sub = configSubCategory.value;
        const volume = document.getElementById("annualVolume").value;
        const format = document.getElementById("packFormat").value;

        // Visual simulation of success state
        alert(`⚡ QUOTE SUBMITTED SUCCESSFULLY! \n\nWe have logged an RFQ for ${company} (${email}).\nProduct: ${cat} / ${sub}\nExpected volume: ${volume}\nFormat: ${format}\n\nOur account managers in Poland/Czech Republic will call you within 2 hours.`);
        
        // Reset and close
        quoteForm.reset();
        goToWizardStep(1);
        configSubCategory.disabled = true;
        closeModal(quoteModal);
    });


    /* ==========================================================================
       PRODUCT DEDICATED PAGE & HASH ROUTER
       ========================================================================== */
    function getProductSlug(name) {
        return name.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
    }

    function showProductPage(item) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Hide landing page, show product details page
        landingPageView.classList.add("hidden");
        productPageView.classList.remove("hidden");

        let cat = item.category || activeCategory || "ADHESIVES";
        let sub = item.subcategory || activeSubCategory || "Water-based Adhesives";

        productPageView.innerHTML = `
            <div class="product-page-container">
                <!-- Breadcrumbs and Navigation -->
                <div class="product-page-nav">
                    <button class="back-to-catalog-btn" id="backToCatalogBtn">
                        ← Back to Catalog
                    </button>
                    <div class="breadcrumbs">
                        <a href="#">Home</a> / 
                        <a href="#productCompass" id="breadcrumbCatLink">${cat}</a> / 
                        <a href="#productCompass" id="breadcrumbSubLink">${sub}</a> / 
                        <span>${item.name}</span>
                    </div>
                </div>

                <div class="product-page-layout">
                    <!-- Left Technical Specifications Card -->
                    <div class="product-page-left">
                        <div class="product-page-graphic">🧪</div>
                        
                        <div class="specs-block">
                            <h3>Formulation Metrics</h3>
                            <div class="specs-details">
                                <div class="spec-detail-row">
                                    <span class="spec-label">Exclusivity Status</span>
                                    <span class="spec-value text-green">100% CEE Protected</span>
                                </div>
                                <div class="spec-detail-row">
                                    <span class="spec-label">Regulatory Shield</span>
                                    <span class="spec-value text-blue">EU Safety Verified</span>
                                </div>
                                <div class="spec-detail-row">
                                    <span class="spec-label">Safety Datasheet</span>
                                    <span class="spec-value">REACH SDS Available</span>
                                </div>
                            </div>
                        </div>

                        <div class="packaging-block">
                            <h3>Standard Packaging</h3>
                            <p>${item.pack || '310ml Cartridge, 600ml Sausage, or Bulk'}</p>
                        </div>
                    </div>

                    <!-- Right Description and RFQ Panel -->
                    <div class="product-page-right">
                        <span class="product-tag-cat">${cat} / ${sub}</span>
                        <h1 class="product-page-title">${item.name}</h1>
                        <p class="product-page-desc">${item.desc}</p>

                        <div class="product-features-panel">
                            <h2>Technical Formulation Details</h2>
                            <ul>
                                <li><strong>Base Compound Profile:</strong> ${item.spec}</li>
                                <li>Custom formula adjustments available at our Krakow R&D laboratory.</li>
                                <li>Guaranteed geographical exclusivity to avoid local market cannibalization.</li>
                                <li>REACH compliant and poison center notified formulation.</li>
                            </ul>
                        </div>

                        <div class="product-page-actions">
                            <button class="product-page-rfq-btn" id="productPageRfqBtn">
                                Request a Quote for this Formulation ⚡
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Bind Breadcrumb links to pre-select items in catalog
        const goToCompassLocation = () => {
            activeCategory = cat;
            activeSubCategory = sub;

            // Sync Category selectors in Compass
            categorySelectors.querySelectorAll(".cat-btn").forEach(b => {
                if (b.dataset.category === activeCategory) {
                    b.classList.add("active");
                    b.setAttribute("aria-selected", "true");
                } else {
                    b.classList.remove("active");
                    b.setAttribute("aria-selected", "false");
                }
            });

            renderProductCompass();

            // Select subcategory button in Compass
            setTimeout(() => {
                subCategorySelectors.querySelectorAll(".sub-btn").forEach(b => {
                    if (b.textContent === activeSubCategory) {
                        b.click();
                    }
                });
            }, 50);

            // Change hash to show catalog page!
            window.location.hash = "#/our-offer";
        };

        document.getElementById("breadcrumbCatLink").addEventListener("click", goToCompassLocation);
        document.getElementById("breadcrumbSubLink").addEventListener("click", goToCompassLocation);

        document.getElementById("backToCatalogBtn").addEventListener("click", () => {
            window.location.hash = "#/our-offer";
        });

        document.getElementById("productPageRfqBtn").addEventListener("click", () => {
            configCategory.value = cat;
            configCategory.dispatchEvent(new Event("change"));
            configSubCategory.value = sub;

            openModal(quoteModal);
            goToWizardStep(2);
        });
    }

    function handleRouting() {
        const hash = window.location.hash;
        if (hash.startsWith("#/product/")) {
            const slug = hash.replace("#/product/", "");
            const product = flatProducts.find(p => getProductSlug(p.name) === slug);
            if (product) {
                // Hide other views, show product view
                landingPageView.classList.add("hidden");
                ourOfferPageView.classList.add("hidden");
                productPageView.classList.remove("hidden");
                showProductPage(product);
            } else {
                window.location.hash = "";
            }
        } else if (hash === "#/our-offer") {
            // Hide other views, show our offer catalog view
            window.scrollTo({ top: 0, behavior: 'instant' });
            landingPageView.classList.add("hidden");
            ourOfferPageView.classList.remove("hidden");
            productPageView.classList.add("hidden");
            renderProductCompass();
        } else {
            // Show homepage landing view, hide details/catalogue views
            landingPageView.classList.remove("hidden");
            ourOfferPageView.classList.add("hidden");
            productPageView.classList.add("hidden");
        }
    }

    window.addEventListener("hashchange", handleRouting);
    window.addEventListener("load", handleRouting);
});
