/* ==========================================================================
   PLAXEMA FRONTEND INTERACTIVE LOGIC (DYNAMICAL INTEGRATION)
   ========================================================================== */

const productDatabase = {
    "ADHESIVES": {
        "Liquid Adhesives": [
            {
                "name": "WBA Water Based",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "PVA Polyvinyl Acetate",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Acrylic Dispersions",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid Latex",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Dextrin and Strach",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "SBA Solvend-Based",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Contact",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Liquid, 5 min Initial Tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Liquid, 5 min Initial Tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Rubber",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Nitrocellulose",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Reactive",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Instant",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid Epoxy",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Epoxy"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Metals, Plastics, Ceramics"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid Polyurethane",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Polyurethane"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Anaerobic",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid Sealants and Pastes",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Silicone Adhesives - Sealants",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid MS-polymers",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Liquid Hybrid",
                "desc": "High-performance private label formulation for liquid adhesives applications.",
                "spec": "Chemical Base: Hybrid Polymer | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Hybrid Polymer"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ],
        "Paste Adhesives": [
            {
                "name": "Paste Liquid Nails",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Acrylic",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Polyurethane",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Polyurethane"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Synthetic Rubber",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Reactive",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Epoxy",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Epoxy"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Metals, Plastics, Ceramics"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Methylmethacrylate",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Elastic",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Specialized Industrial",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paste Craft",
                "desc": "High-performance private label formulation for paste adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ],
        "Powder Adhesives": [
            {
                "name": "Cement-Based",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Standard Tiles Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Flex Elastic Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Terracotta Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Gypsum-Based",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Plasterboard Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Gypsum Block Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Powdered Carpentary",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Reactive Resigns",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Urea-formaldehyde Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Melamine-formaldehyde Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Resorcinol Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Natural and Organic",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Strach and Dextrin Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Methylcellulose Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Casein and Bone Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Speciality Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "DTF/Screen Printing Powder",
                "desc": "High-performance private label formulation for powder adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ],
        "Mastic Adhesives": [
            {
                "name": "Construction",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Acrylic Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Ceramic Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Waterproofing Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Bitumen and asphalt",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Roofing Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Protecting Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Specialized",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Industrial Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "HVAC Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "MS-Polymer Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Hybrid Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Hybrid Polymer | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Hybrid Polymer"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Polyurethane Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Polyurethane"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Modern Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "High-tech Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Traditional and Natural",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Resign Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Olfactory Mastics",
                "desc": "High-performance private label formulation for mastic adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "Thixotropic Paste, 15 min open time"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ],
        "Film and Tape Adhesives": [
            {
                "name": "Film Adhesives",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Hot-Melt Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Epoxy Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Epoxy"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Metals, Plastics, Ceramics"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Thermal Transfer Films",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Adhesive Transfer Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Single-Coated Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Paper Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Packaging Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Reinforced Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Duct Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Aluminum and Metal Tape",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Metals, Plastics, Ceramics"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Double-Sided Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Backing Material coated Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Acrylic Tumble Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Thin Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Foam Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            },
            {
                "name": "Special Tapes",
                "desc": "High-performance private label formulation for film and tape adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ],
        "Other Adhesives": [
            {
                "name": "Other Adhesives",
                "desc": "High-performance private label formulation for other adhesives applications.",
                "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
                "pack": "290ml Cartridges & 600ml Foils",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Dispersion"
                    },
                    {
                        "label": "Viscosity & Open Time",
                        "value": "High Green Strength, 10 min tack"
                    },
                    {
                        "label": "Substrate Compatibility",
                        "value": "Universal Bonding, multi-substrate"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "290ml Cartridges & 600ml Foils"
                    }
                ]
            }
        ]
    },
    "SEALANTS": {
        "High Performance Sealants": [
            {
                "name": "Silicones",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b125% Joint Movement, High Elasticity",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b125% Joint Movement, High Elasticity"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Polyurethane",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: 1K Polyurethane | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "1K Polyurethane"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "MS-Polymers",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: MS Polymer | Movement Capability: \u00b125% Joint Movement, High Elasticity",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "MS Polymer"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b125% Joint Movement, High Elasticity"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Hybrids",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: MS Polymer | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "MS Polymer"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "SMP",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "STP",
                "desc": "High-performance private label formulation for high performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            }
        ],
        "Medium Performance Sealants": [
            {
                "name": "Polysulfides",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "High-performance Acrylics",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Polyisobutylene sealants",
                "desc": "High-performance private label formulation for medium performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            }
        ],
        "Low Performance Sealants": [
            {
                "name": "Acrylics",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Butyl Rubber",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Oil",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Caulk",
                "desc": "High-performance private label formulation for low performance sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            }
        ],
        "Other Sealants": [
            {
                "name": "Bituminous",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Refractory and silicate",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Anaerobic Thread",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Acoustic",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            },
            {
                "name": "Other Sealants",
                "desc": "High-performance private label formulation for other sealants applications.",
                "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
                "pack": "300ml Cartridges, 600ml Sausages",
                "fields": [
                    {
                        "label": "Chemical Base",
                        "value": "Acrylic Sealant"
                    },
                    {
                        "label": "Movement Capability",
                        "value": "\u00b112.5% Joint Movement, Low Shrinkage"
                    },
                    {
                        "label": "Environmental Shield",
                        "value": "Weatherproofing, Facade Rated, UV-Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "300ml Cartridges, 600ml Sausages"
                    }
                ]
            }
        ]
    },
    "PU FOAMS": {
        "Hand Grade PU Foams": [
            {
                "name": "Straw Summer",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Straw Winter",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Straw All Season",
                "desc": "High-performance private label formulation for hand grade pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Gun Grade PU Foams": [
            {
                "name": "Gun Foam Summer",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Gun Foam Winter",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Gun Foam All Seasons",
                "desc": "High-performance private label formulation for gun grade pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Special PU Foams": [
            {
                "name": "Elastic",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Acoustic",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Low-expansion",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Well / Sewer",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "2K PU Foam",
                "desc": "High-performance private label formulation for special pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Fire-Rated PU Foams": [
            {
                "name": "Hand-Grade Fire-Rated",
                "desc": "High-performance private label formulation for fire-rated pu foams applications.",
                "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Hand Adapter"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B1 Fire-Rated, Acoustic 58dB"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Gun-Grade Fire-Rated",
                "desc": "High-performance private label formulation for fire-rated pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B1 Fire-Rated, Acoustic 58dB"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Adhesive PU Foams": [
            {
                "name": "Hand-Grade Adhesive",
                "desc": "High-performance private label formulation for adhesive pu foams applications.",
                "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Hand Adapter"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Gun-Grade Adhesive",
                "desc": "High-performance private label formulation for adhesive pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Thermo PU Foams": [
            {
                "name": "Hand-Grade Thermo",
                "desc": "High-performance private label formulation for thermo pu foams applications.",
                "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Hand Adapter"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            },
            {
                "name": "Gun-Grade Thermo",
                "desc": "High-performance private label formulation for thermo pu foams applications.",
                "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade (Profi)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ],
        "Other PU Foams": [
            {
                "name": "Other PU Foams",
                "desc": "High-performance private label formulation for other pu foams applications.",
                "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
                "pack": "750ml Aerosol Cans",
                "fields": [
                    {
                        "label": "Application Type",
                        "value": "Gun Grade / Hand Adapter (Dual)"
                    },
                    {
                        "label": "Yield & Expansion",
                        "value": "Standard 45L Yield, Medium Expansion"
                    },
                    {
                        "label": "Technical Rating",
                        "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "750ml Aerosol Cans"
                    }
                ]
            }
        ]
    },
    "AEROSOLS": {
        "Technical Aerosols": [
            {
                "name": "Multipurpose Penetrating Oil",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Silicone Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Silicone Oils"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "White Lithium Grease (Without PTFE)",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "PTFE Lubricant"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "High-Pressure Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -50\u00b0C to +250\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "White Lithium Grease (With PTFE)",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "PTFE Lubricant"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "High-Pressure Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -50\u00b0C to +250\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "PTFE (Teflon) Dry Lube Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "PTFE Lubricant"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "High-Pressure Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -50\u00b0C to +250\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Copper Anti-Seize Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Ceramic Anti-Seize Spray",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Braking systems",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Hedge Trimmer & Chain Saw Lubricant",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: High-Pressure Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "High-Pressure Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Open Gear & Wire Rope Lubricant",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: High-Pressure Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "High-Pressure Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Moisture Displacer & Corrosion Inhibitor",
                "desc": "High-performance private label formulation for technical aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Industrial Aerosols": [
            {
                "name": "Brake & Parts Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Engine Degreaser (Foaming)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Engine Degreaser (Liquid)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Carburetor & Choke Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Adhesive & Label Remover (Citrus-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Adhesive & Label Remover (Solvent)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Electrical Contact Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Industrial Foam Cleaner",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Stainless Steel Cleaner & Polish",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Welding Anti-Spatter (Water-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Welding Anti-Spatter Spray (Solvent-based)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Mould Release Spray (Silicone variant)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Silicone Oils"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Mould Release Spray (Non-silicone)",
                "desc": "High-performance private label formulation for industrial aerosols applications.",
                "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Silicone Oils"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Protection & Anti-Corrosion Aerosols": [
            {
                "name": "Zinc Galvanizing Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Zinc-Flake Compound"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Anti-Corrosion Shield & Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Zinc Galvanizing Spray (Pure)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Zinc-Flake Compound"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Anti-Corrosion Shield & Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Zinc-Alu Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Zinc-Flake Compound"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Anti-Corrosion Shield & Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Stainless Steel Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Underbody Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Bitumen Underbody Protection",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Cavity Wax Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Rust Converter Spray",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Anti-Corrosion Shield & Lubrication",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Anti-Corrosion Shield & Lubrication"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Anti-Corrosion Primer (Red Oxide)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Anti-Corrosion Primer (Grey)",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Welding Primer",
                "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Automotive Aerosols": [
            {
                "name": "Cockpit Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Dashboard Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Tyre Shine",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Foam Care",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Air Conditioning Sanitizer",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Starting Fluid",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Air Sensor (MAF) Cleaner",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "DPF (Diesel Particulate Filter) Cleaner",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Leak Detection Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Belt Dressing Spray",
                "desc": "High-performance private label formulation for automotive aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Technical Paints & Coatings": [
            {
                "name": "360\u00b0 Construction Marking Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Line Marking Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "High-Heat Resistant Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Plastic Adhesion Promoter",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Plastic Adhesion Primer",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "RAL Color Touch-Up Paints",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Acrylic Clear Coat",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "2K Clear Coat",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Radiator Paint",
                "desc": "High-performance private label formulation for technical paints & coatings applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Spray Adhesives": [
            {
                "name": "Multipurpose Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Multipurpose Spray Adhesive (Light)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Contact Adhesive (High tack)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Contact Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Repositionable Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Polystyrene-Safe Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Superglue Activator",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Accelerator Spray (For CA glues)",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Temporary Spray Adhesive",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -50\u00b0C to +250\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "PU Foam Cleaner",
                "desc": "High-performance private label formulation for spray adhesives applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Household & Craft Aerosols": [
            {
                "name": "Compressed Air Duster",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Textile",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Leather Waterproofing",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Chewing Gum Remover",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Graffiti Remover Spray",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Barbecue & Oven Cleaner",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Barbecue & Oven Cleaner (Foaming)",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Freeze Spray",
                "desc": "High-performance private label formulation for household & craft aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Eco-Line Aerosols": [
            {
                "name": "Bio-based Penetrating Oil (Soy base)",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Bio-based Penetrating Oil (Rapeseed base)",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Compressed Nitrogen",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "VOC-Free / Water-Based Degreaser",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Biodegradable Mould Release Agent",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            },
            {
                "name": "Propelled Cleaners",
                "desc": "High-performance private label formulation for eco-line aerosols applications.",
                "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Isopropyl Solvent"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Rapid Evaporation, Zero Residue"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ],
        "Other Aerosols": [
            {
                "name": "Other Aerosols",
                "desc": "High-performance private label formulation for other aerosols applications.",
                "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
                "pack": "400ml Spray Cans with Cobra Nozzle",
                "fields": [
                    {
                        "label": "Active Substance",
                        "value": "Hydrocarbon Lubricants"
                    },
                    {
                        "label": "Functional Benefit",
                        "value": "Water Repellent, Multi-purpose Protection"
                    },
                    {
                        "label": "Temperature Range",
                        "value": "Operational from -30\u00b0C to +150\u00b0C"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "400ml Spray Cans with Cobra Nozzle"
                    }
                ]
            }
        ]
    },
    "AUTOMOTIVE": {
        "Underbody": [
            {
                "name": "Bitumen-Based Underbody Coating",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Synthetic Rubber/Resin Anti-Gravel Coating",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Wax-Based Cavity Protection",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Brushable Underbody Sealer",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "Product Class: Underbody Bitumen Protection | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Underbody Bitumen Protection"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Anti-Chipping Elastic Protection"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Sprayable Underbody Guard",
                "desc": "High-performance private label formulation for underbody applications.",
                "spec": "Product Class: Underbody Bitumen Protection | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Underbody Bitumen Protection"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Anti-Chipping Elastic Protection"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ],
        "Fillers": [
            {
                "name": "Universal Polyester Body Filler",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Easy Sanding, Pin-hole Free"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Lightweight Polyester Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Glass Fibre Reinforced Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Aluminum-Polyester Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Fine/Finishing Putty",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Plastic Body Filler",
                "desc": "High-performance private label formulation for fillers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Easy Sanding, Pin-hole Free"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ],
        "Primers": [
            {
                "name": "1K Acrylic Filler Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Easy Sanding, Pin-hole Free"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "2K Epoxy Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "2K High-Build Polyurethane Surfacer/Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Plastic Adhesion Promoter",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Wash Primer / Etch Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "UV-Curing Primer",
                "desc": "High-performance private label formulation for primers applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ],
        "Hardeners": [
            {
                "name": "Polyester Putty Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Polyester Body Filler"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "2K Primer Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "2K Clear Coat Activator",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Universal Isocyanate Hardener",
                "desc": "High-performance private label formulation for hardeners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ],
        "Clear Coats": [
            {
                "name": "2K MS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "2K HS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "2K UHS Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Scratch-Resistant Refinish Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Matte / Satin Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Express / Air-Dry Clear Coat",
                "desc": "High-performance private label formulation for clear coats applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            }
        ],
        "Thinners": [
            {
                "name": "Acrylic Thinner - Fast",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Acrylic Thinner - Standard",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Acrylic Thinner - Slow",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Epoxy System Thinner",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Basecoat Thinner",
                "desc": "High-performance private label formulation for thinners applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            }
        ],
        "Additives": [
            {
                "name": "Elastic / Flex Additive",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Anti-Silicone Fluid",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Fade-Out / Blending Solvent",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Drying Accelerator",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Matting Agent Liquid",
                "desc": "High-performance private label formulation for additives applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            }
        ],
        "Polishing": [
            {
                "name": "Heavy-Cut Compound",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Medium-Cut Polishing Compound",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Fine Anti-Hologram Finish",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Protective Liquid Wax / Polymer Sealant",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Clay Bar / Paint Surface Decontamination Gel",
                "desc": "High-performance private label formulation for polishing applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ],
        "Other Automotive": [
            {
                "name": "Silicone Remover / Degreaser",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Guide Coat Spray / Powder",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
                "pack": "1L Tins, 5L Canisters",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "2K Acrylic Clear Coat"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Fast Drying (15 min at 60\u00b0C), High Build"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "Extreme Gloss Retention, Scratch Resistant"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1L Tins, 5L Canisters"
                    }
                ]
            },
            {
                "name": "Windshield Polyurethane Adhesive",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            },
            {
                "name": "Other Automotive",
                "desc": "High-performance private label formulation for other automotive applications.",
                "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
                "pack": "1kg Cartridges, 1.8kg Pails",
                "fields": [
                    {
                        "label": "Product Class",
                        "value": "Premium Refinishing Auxiliaries"
                    },
                    {
                        "label": "Processing Attributes",
                        "value": "Quick Drying, Sag Resistant"
                    },
                    {
                        "label": "Mechanical Performance",
                        "value": "High Adhesion Strength, Flexible"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "1kg Cartridges, 1.8kg Pails"
                    }
                ]
            }
        ]
    },
    "CLEANING": {
        "Industrial Cleaning": [
            {
                "name": "Heavy-Duty Alkaline Degreaser",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Alkaline Degreaser | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Alkaline Degreaser"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Non-Corrosive to Aluminum & Steel"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Solvent-Based Parts Washer Fluid",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Industrial Safety Solvent Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Concentrated Workshop Floor Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Ultrasonic Cleaning Fluid Concentrate",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Tar and Bitumen Remover",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Scale and Rust Remover Acidic Cleaner",
                "desc": "High-performance private label formulation for industrial cleaning applications.",
                "spec": "Formulation Type: Acidic Scale Remover | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Acidic Scale Remover"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "House Cleaning": [
            {
                "name": "Multipurpose Surface Cleaner Concentrate",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Oven and Grill Cleaner",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Premium Glass and Mirror Streak-Free Cleaner",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Bathroom and Scale Remover Gel",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Kitchen Grease Degreaser Spray",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Alkaline Degreaser | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Alkaline Degreaser"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Non-Corrosive to Aluminum & Steel"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Carpet and Upholstery Foaming Shampoo",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Drain Opener Power Gel",
                "desc": "High-performance private label formulation for house cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "Disinfection Cleaning": [
            {
                "name": "Surface Disinfectant Spray",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Industrial Biocidal Cleaner Concentrate",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Food-Grade Surface Sanitizer",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Medical-Grade Hand and Surface Disinfectant",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Anti-Mold and Mildew Fungicidal Spray",
                "desc": "High-performance private label formulation for disinfection cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "Extraction Cleaning": [
            {
                "name": "Low-Foam Carpet Extraction Detergent",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Industrial Vacuum Extraction Cleaner",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Textile Stain Extraction Booster",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Odour Neutralizer Extraction Additive",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Safe on Plastics, Glass & Metals"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Rinse and Neutralizer Conditioning Agent",
                "desc": "High-performance private label formulation for extraction cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Safe on Plastics, Glass & Metals"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "Hygiene Cleaning": [
            {
                "name": "Liquid Hand Soap Concentrate",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Antibacterial Foam Hand Soap",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Mechanics Hand Paste with Natural Abrasives",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Protective Barrier Hand Cream",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Sanitary Ware Deep Cleaner",
                "desc": "High-performance private label formulation for hygiene cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "Manual Cleaning": [
            {
                "name": "Manual Dishwashing Liquid Concentrate",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "1:10 Industrial Concentrate"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Neutral All-Purpose Manual Wash Detergent",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Safe on Plastics, Glass & Metals"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Vehicle Manual Wash and Wax Shampoo",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Scouring Cream Cleanser",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Manual Leather Cleaner and Conditioner",
                "desc": "High-performance private label formulation for manual cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ],
        "Other Cleaning": [
            {
                "name": "Graffiti Remover Liquid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Chewing Gum Freezing Spray and Liquid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Air Conditioning System Flushing Fluid",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            },
            {
                "name": "Other Cleaning",
                "desc": "High-performance private label formulation for other cleaning applications.",
                "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
                "pack": "500ml Trigger Spray, 10L Canisters",
                "fields": [
                    {
                        "label": "Formulation Type",
                        "value": "Neutral Surface Cleaner"
                    },
                    {
                        "label": "Concentration Level",
                        "value": "Ready-to-Use (RTU)"
                    },
                    {
                        "label": "Surface Safety",
                        "value": "Heavy Duty Industrial Power Cleaning"
                    },
                    {
                        "label": "Standard Packaging",
                        "value": "500ml Trigger Spray, 10L Canisters"
                    }
                ]
            }
        ]
    },
    "APPLICATION SYSTEMS": {
        "Manual Dispensing": [
            {
                "name": "Professional Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Standard Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Foil Pack Sausage Dispenses",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 18:1 High-Thrust (for High Viscosity)",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "18:1 High-Thrust (for High Viscosity)"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Standard Foil Pack Sausage Dispenses",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Professional Dual-Component Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Side-by-Side Dual Cartridge"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Dual-Component Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Side-by-Side Dual Cartridge"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Joint Smoothing and Finishing Profiles",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Other Cartridge Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Other Foil Pack Sausage Dispensers",
                "desc": "High-performance private label formulation for manual dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            }
        ],
        "Pneumatic Dispensing": [
            {
                "name": "Pneumatic Cartridge System",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "Pneumatic (Air Assisted)"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Pneumatic Foil Pack Sausage System",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "Pneumatic (Air Assisted)"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Industrial Multi-Component",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Pneumatic Coaxial",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "Pneumatic (Air Assisted)"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Pneumatic Side-by-side",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "Pneumatic (Air Assisted)"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Pneumatic High-Capacity",
                "desc": "High-performance private label formulation for pneumatic dispensing applications.",
                "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "Pneumatic (Air Assisted)"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            }
        ],
        "Battery-Powered": [
            {
                "name": "Cordless Li-Ion Professional Cartridge",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cordless Li-Ion Standard Cartridge",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cordless Li-Ion Professional Foil Pack Sausage",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cordless Li-Ion Standard Foil Pack Sausage",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cordless Li-Ion Coaxial Applicators",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cordless Li-Ion Side-by-side  Applicators",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "High-Capacity Battery Systems",
                "desc": "High-performance private label formulation for battery-powered applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            }
        ],
        "PU Foam Applicators": [
            {
                "name": "PTFE - Premium PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "PTFE - Professional PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "Max 4.5 kN Thrust"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Standard Metal PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "PTFE-Coated Easy-Clean PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Ergonomic Lightweight PU Foam Applicators",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Long-Nozzle Extension PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Standard PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Other PU Foam Guns",
                "desc": "High-performance private label formulation for pu foam applicators applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            }
        ],
        "Accessories": [
            {
                "name": "Specialty Mixing Nozzles for Anchoring Resins",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Heavy-Duty Barrel Cleaners and Brushes",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 18:1 High-Thrust (for High Viscosity)",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "18:1 High-Thrust (for High Viscosity)"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Custom Geometry Extrusions and Applicator Tips",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "PU Foam application adaptors",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "PU Foam application nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Cartridge nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
            },
            {
                "name": "Foil Pack Sausage nozzles",
                "desc": "High-performance private label formulation for accessories applications.",
                "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
                "pack": "Professional 600ml Foil Guns",
                "fields": [
                    {
                        "label": "Power Source",
                        "value": "18V Battery Powered"
                    },
                    {
                        "label": "Thrust Force Ratio",
                        "value": "12:1 Thrust Force Ratio"
                    },
                    {
                        "label": "Component Format",
                        "value": "Coaxial 2K"
                    },
                    {
                        "label": "Supported Pack Sizes",
                        "value": "Professional 600ml Foil Guns"
                    }
                ]
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
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "PVA Polyvinyl Acetate",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Acrylic Dispersions",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Latex",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Dextrin and Strach",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "SBA Solvend-Based",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Contact",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Liquid, 5 min Initial Tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Liquid, 5 min Initial Tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Rubber",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Nitrocellulose",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Reactive",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Instant",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Epoxy",
        "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Epoxy"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Metals, Plastics, Ceramics"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Polyurethane",
        "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Polyurethane"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Anaerobic",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Sealants and Pastes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Silicone Adhesives - Sealants",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid MS-polymers",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Liquid Adhesives",
        "name": "Liquid Hybrid",
        "spec": "Chemical Base: Hybrid Polymer | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for liquid adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Hybrid Polymer"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Liquid Nails",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Acrylic",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Polyurethane",
        "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Polyurethane"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Synthetic Rubber",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Reactive",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Epoxy",
        "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Epoxy"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Metals, Plastics, Ceramics"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Methylmethacrylate",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Elastic",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Specialized Industrial",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Paste Adhesives",
        "name": "Paste Craft",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for paste adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Cement-Based",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Standard Tiles Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Flex Elastic Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Terracotta Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Gypsum-Based",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Plasterboard Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Gypsum Block Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Powdered Carpentary",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Reactive Resigns",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Urea-formaldehyde Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Melamine-formaldehyde Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Resorcinol Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Natural and Organic",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Strach and Dextrin Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Methylcellulose Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Casein and Bone Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "Speciality Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Powder Adhesives",
        "name": "DTF/Screen Printing Powder",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for powder adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Construction",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Acrylic Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Ceramic Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Waterproofing Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Bitumen and asphalt",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Roofing Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Protecting Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Specialized",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Industrial Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "HVAC Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "MS-Polymer Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Hybrid Mastics",
        "spec": "Chemical Base: Hybrid Polymer | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Hybrid Polymer"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Polyurethane Mastics",
        "spec": "Chemical Base: Polyurethane | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Polyurethane"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Modern Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "High-tech Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Traditional and Natural",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Resign Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Mastic Adhesives",
        "name": "Olfactory Mastics",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: Thixotropic Paste, 15 min open time",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for mastic adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "Thixotropic Paste, 15 min open time"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Film Adhesives",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Hot-Melt Films",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Epoxy Films",
        "spec": "Chemical Base: Epoxy | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Epoxy"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Metals, Plastics, Ceramics"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Thermal Transfer Films",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Adhesive Transfer Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Single-Coated Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Paper Tape",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Packaging Tape",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Reinforced Tape",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Duct Tape",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Aluminum and Metal Tape",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Metals, Plastics, Ceramics"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Double-Sided Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Backing Material coated Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Acrylic Tumble Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Thin Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Foam Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Film and Tape Adhesives",
        "name": "Special Tapes",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for film and tape adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "ADHESIVES",
        "subcategory": "Other Adhesives",
        "name": "Other Adhesives",
        "spec": "Chemical Base: Acrylic Dispersion | Viscosity & Open Time: High Green Strength, 10 min tack",
        "pack": "290ml Cartridges & 600ml Foils",
        "desc": "High-performance private label formulation for other adhesives applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Dispersion"
            },
            {
                "label": "Viscosity & Open Time",
                "value": "High Green Strength, 10 min tack"
            },
            {
                "label": "Substrate Compatibility",
                "value": "Universal Bonding, multi-substrate"
            },
            {
                "label": "Standard Packaging",
                "value": "290ml Cartridges & 600ml Foils"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Silicones",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b125% Joint Movement, High Elasticity",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b125% Joint Movement, High Elasticity"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Polyurethane",
        "spec": "Chemical Base: 1K Polyurethane | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "1K Polyurethane"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "MS-Polymers",
        "spec": "Chemical Base: MS Polymer | Movement Capability: \u00b125% Joint Movement, High Elasticity",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "MS Polymer"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b125% Joint Movement, High Elasticity"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "Hybrids",
        "spec": "Chemical Base: MS Polymer | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "MS Polymer"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "SMP",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "High Performance Sealants",
        "name": "STP",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for high performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "Polysulfides",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for medium performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "High-performance Acrylics",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for medium performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Medium Performance Sealants",
        "name": "Polyisobutylene sealants",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for medium performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Acrylics",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for low performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Butyl Rubber",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for low performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Oil",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for low performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Low Performance Sealants",
        "name": "Caulk",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for low performance sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Bituminous",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for other sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Refractory and silicate",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for other sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Anaerobic Thread",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for other sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Acoustic",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for other sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "SEALANTS",
        "subcategory": "Other Sealants",
        "name": "Other Sealants",
        "spec": "Chemical Base: Acrylic Sealant | Movement Capability: \u00b112.5% Joint Movement, Low Shrinkage",
        "pack": "300ml Cartridges, 600ml Sausages",
        "desc": "High-performance private label formulation for other sealants applications.",
        "fields": [
            {
                "label": "Chemical Base",
                "value": "Acrylic Sealant"
            },
            {
                "label": "Movement Capability",
                "value": "\u00b112.5% Joint Movement, Low Shrinkage"
            },
            {
                "label": "Environmental Shield",
                "value": "Weatherproofing, Facade Rated, UV-Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "300ml Cartridges, 600ml Sausages"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw Summer",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for hand grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw Winter",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for hand grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Hand Grade PU Foams",
        "name": "Straw All Season",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for hand grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam Summer",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for gun grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam Winter",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for gun grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Gun Grade PU Foams",
        "name": "Gun Foam All Seasons",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for gun grade pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Elastic",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for special pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Acoustic",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for special pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Low-expansion",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for special pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "Well / Sewer",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for special pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Special PU Foams",
        "name": "2K PU Foam",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for special pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Fire-Rated PU Foams",
        "name": "Hand-Grade Fire-Rated",
        "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for fire-rated pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Hand Adapter"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B1 Fire-Rated, Acoustic 58dB"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Fire-Rated PU Foams",
        "name": "Gun-Grade Fire-Rated",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for fire-rated pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B1 Fire-Rated, Acoustic 58dB"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Adhesive PU Foams",
        "name": "Hand-Grade Adhesive",
        "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for adhesive pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Hand Adapter"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Adhesive PU Foams",
        "name": "Gun-Grade Adhesive",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for adhesive pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Thermo PU Foams",
        "name": "Hand-Grade Thermo",
        "spec": "Application Type: Hand Adapter | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for thermo pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Hand Adapter"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Thermo PU Foams",
        "name": "Gun-Grade Thermo",
        "spec": "Application Type: Gun Grade (Profi) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for thermo pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade (Profi)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "PU FOAMS",
        "subcategory": "Other PU Foams",
        "name": "Other PU Foams",
        "spec": "Application Type: Gun Grade / Hand Adapter (Dual) | Yield & Expansion: Standard 45L Yield, Medium Expansion",
        "pack": "750ml Aerosol Cans",
        "desc": "High-performance private label formulation for other pu foams applications.",
        "fields": [
            {
                "label": "Application Type",
                "value": "Gun Grade / Hand Adapter (Dual)"
            },
            {
                "label": "Yield & Expansion",
                "value": "Standard 45L Yield, Medium Expansion"
            },
            {
                "label": "Technical Rating",
                "value": "B2 Class, Thermal Conductivity 0.036 W/mK"
            },
            {
                "label": "Standard Packaging",
                "value": "750ml Aerosol Cans"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Multipurpose Penetrating Oil",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Silicone Spray",
        "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Silicone Oils"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "White Lithium Grease (Without PTFE)",
        "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "PTFE Lubricant"
            },
            {
                "label": "Functional Benefit",
                "value": "High-Pressure Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -50\u00b0C to +250\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "White Lithium Grease (With PTFE)",
        "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "PTFE Lubricant"
            },
            {
                "label": "Functional Benefit",
                "value": "High-Pressure Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -50\u00b0C to +250\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "PTFE (Teflon) Dry Lube Spray",
        "spec": "Active Substance: PTFE Lubricant | Functional Benefit: High-Pressure Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "PTFE Lubricant"
            },
            {
                "label": "Functional Benefit",
                "value": "High-Pressure Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -50\u00b0C to +250\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Copper Anti-Seize Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Ceramic Anti-Seize Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Braking systems",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Hedge Trimmer & Chain Saw Lubricant",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: High-Pressure Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "High-Pressure Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Open Gear & Wire Rope Lubricant",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: High-Pressure Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "High-Pressure Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Aerosols",
        "name": "Moisture Displacer & Corrosion Inhibitor",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Brake & Parts Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Heavy-Duty Engine Degreaser (Foaming)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Heavy-Duty Engine Degreaser (Liquid)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Carburetor & Choke Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Adhesive & Label Remover (Citrus-based)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Adhesive & Label Remover (Solvent)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Electrical Contact Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Industrial Foam Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Stainless Steel Cleaner & Polish",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Welding Anti-Spatter (Water-based)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Welding Anti-Spatter Spray (Solvent-based)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Mould Release Spray (Silicone variant)",
        "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Silicone Oils"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Industrial Aerosols",
        "name": "Mould Release Spray (Non-silicone)",
        "spec": "Active Substance: Silicone Oils | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for industrial aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Silicone Oils"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc Galvanizing Spray",
        "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Zinc-Flake Compound"
            },
            {
                "label": "Functional Benefit",
                "value": "Anti-Corrosion Shield & Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc Galvanizing Spray (Pure)",
        "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Zinc-Flake Compound"
            },
            {
                "label": "Functional Benefit",
                "value": "Anti-Corrosion Shield & Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Zinc-Alu Spray",
        "spec": "Active Substance: Zinc-Flake Compound | Functional Benefit: Anti-Corrosion Shield & Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Zinc-Flake Compound"
            },
            {
                "label": "Functional Benefit",
                "value": "Anti-Corrosion Shield & Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Stainless Steel Protection",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Underbody Protection",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Bitumen Underbody Protection",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Cavity Wax Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Rust Converter Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Anti-Corrosion Shield & Lubrication",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Anti-Corrosion Shield & Lubrication"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Anti-Corrosion Primer (Red Oxide)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Anti-Corrosion Primer (Grey)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Protection & Anti-Corrosion Aerosols",
        "name": "Welding Primer",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for protection & anti-corrosion aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Cockpit Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Dashboard Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Tyre Shine",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Foam Care",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Air Conditioning Sanitizer",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Starting Fluid",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Air Sensor (MAF) Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "DPF (Diesel Particulate Filter) Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Leak Detection Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Automotive Aerosols",
        "name": "Belt Dressing Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for automotive aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "360\u00b0 Construction Marking Paint",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Line Marking Paint",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "High-Heat Resistant Paint",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Plastic Adhesion Promoter",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Plastic Adhesion Primer",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "RAL Color Touch-Up Paints",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Acrylic Clear Coat",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "2K Clear Coat",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Technical Paints & Coatings",
        "name": "Radiator Paint",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for technical paints & coatings applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Multipurpose Spray Adhesive",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Multipurpose Spray Adhesive (Light)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Heavy-Duty Contact Adhesive (High tack)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Contact Adhesive",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Repositionable Spray Adhesive",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Polystyrene-Safe Spray Adhesive",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Superglue Activator",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Accelerator Spray (For CA glues)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "Temporary Spray Adhesive",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -50\u00b0C to +250\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Spray Adhesives",
        "name": "PU Foam Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for spray adhesives applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Compressed Air Duster",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Textile",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Leather Waterproofing",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Chewing Gum Remover",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Graffiti Remover Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Barbecue & Oven Cleaner",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Barbecue & Oven Cleaner (Foaming)",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Household & Craft Aerosols",
        "name": "Freeze Spray",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for household & craft aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Bio-based Penetrating Oil (Soy base)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Bio-based Penetrating Oil (Rapeseed base)",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Compressed Nitrogen",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "VOC-Free / Water-Based Degreaser",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Biodegradable Mould Release Agent",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Eco-Line Aerosols",
        "name": "Propelled Cleaners",
        "spec": "Active Substance: Isopropyl Solvent | Functional Benefit: Rapid Evaporation, Zero Residue",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for eco-line aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Isopropyl Solvent"
            },
            {
                "label": "Functional Benefit",
                "value": "Rapid Evaporation, Zero Residue"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AEROSOLS",
        "subcategory": "Other Aerosols",
        "name": "Other Aerosols",
        "spec": "Active Substance: Hydrocarbon Lubricants | Functional Benefit: Water Repellent, Multi-purpose Protection",
        "pack": "400ml Spray Cans with Cobra Nozzle",
        "desc": "High-performance private label formulation for other aerosols applications.",
        "fields": [
            {
                "label": "Active Substance",
                "value": "Hydrocarbon Lubricants"
            },
            {
                "label": "Functional Benefit",
                "value": "Water Repellent, Multi-purpose Protection"
            },
            {
                "label": "Temperature Range",
                "value": "Operational from -30\u00b0C to +150\u00b0C"
            },
            {
                "label": "Standard Packaging",
                "value": "400ml Spray Cans with Cobra Nozzle"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Bitumen-Based Underbody Coating",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for underbody applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Synthetic Rubber/Resin Anti-Gravel Coating",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for underbody applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Wax-Based Cavity Protection",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for underbody applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Brushable Underbody Sealer",
        "spec": "Product Class: Underbody Bitumen Protection | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for underbody applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Underbody Bitumen Protection"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "Anti-Chipping Elastic Protection"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Underbody",
        "name": "Sprayable Underbody Guard",
        "spec": "Product Class: Underbody Bitumen Protection | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for underbody applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Underbody Bitumen Protection"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "Anti-Chipping Elastic Protection"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Universal Polyester Body Filler",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Easy Sanding, Pin-hole Free"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Lightweight Polyester Putty",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Glass Fibre Reinforced Putty",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Aluminum-Polyester Putty",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Fine/Finishing Putty",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Fillers",
        "name": "Plastic Body Filler",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for fillers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Easy Sanding, Pin-hole Free"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "1K Acrylic Filler Primer",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Easy Sanding, Pin-hole Free",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Easy Sanding, Pin-hole Free"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "2K Epoxy Primer",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "2K High-Build Polyurethane Surfacer/Primer",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "Plastic Adhesion Promoter",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "Wash Primer / Etch Primer",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Primers",
        "name": "UV-Curing Primer",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for primers applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "Polyester Putty Hardener",
        "spec": "Product Class: Polyester Body Filler | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for hardeners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Polyester Body Filler"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "2K Primer Hardener",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for hardeners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "2K Clear Coat Activator",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for hardeners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Hardeners",
        "name": "Universal Isocyanate Hardener",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for hardeners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K MS Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K HS Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "2K UHS Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Scratch-Resistant Refinish Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Matte / Satin Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Clear Coats",
        "name": "Express / Air-Dry Clear Coat",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for clear coats applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Fast",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for thinners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Standard",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for thinners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Acrylic Thinner - Slow",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for thinners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Epoxy System Thinner",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for thinners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Thinners",
        "name": "Basecoat Thinner",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for thinners applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Elastic / Flex Additive",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for additives applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Anti-Silicone Fluid",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for additives applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Fade-Out / Blending Solvent",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for additives applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Drying Accelerator",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for additives applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Additives",
        "name": "Matting Agent Liquid",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for additives applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Heavy-Cut Compound",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for polishing applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Medium-Cut Polishing Compound",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for polishing applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Fine Anti-Hologram Finish",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for polishing applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Protective Liquid Wax / Polymer Sealant",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for polishing applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Polishing",
        "name": "Clay Bar / Paint Surface Decontamination Gel",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for polishing applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Silicone Remover / Degreaser",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for other automotive applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Guide Coat Spray / Powder",
        "spec": "Product Class: 2K Acrylic Clear Coat | Processing Attributes: Fast Drying (15 min at 60\u00b0C), High Build",
        "pack": "1L Tins, 5L Canisters",
        "desc": "High-performance private label formulation for other automotive applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "2K Acrylic Clear Coat"
            },
            {
                "label": "Processing Attributes",
                "value": "Fast Drying (15 min at 60\u00b0C), High Build"
            },
            {
                "label": "Mechanical Performance",
                "value": "Extreme Gloss Retention, Scratch Resistant"
            },
            {
                "label": "Standard Packaging",
                "value": "1L Tins, 5L Canisters"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Windshield Polyurethane Adhesive",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for other automotive applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "AUTOMOTIVE",
        "subcategory": "Other Automotive",
        "name": "Other Automotive",
        "spec": "Product Class: Premium Refinishing Auxiliaries | Processing Attributes: Quick Drying, Sag Resistant",
        "pack": "1kg Cartridges, 1.8kg Pails",
        "desc": "High-performance private label formulation for other automotive applications.",
        "fields": [
            {
                "label": "Product Class",
                "value": "Premium Refinishing Auxiliaries"
            },
            {
                "label": "Processing Attributes",
                "value": "Quick Drying, Sag Resistant"
            },
            {
                "label": "Mechanical Performance",
                "value": "High Adhesion Strength, Flexible"
            },
            {
                "label": "Standard Packaging",
                "value": "1kg Cartridges, 1.8kg Pails"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Heavy-Duty Alkaline Degreaser",
        "spec": "Formulation Type: Alkaline Degreaser | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Alkaline Degreaser"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Non-Corrosive to Aluminum & Steel"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Solvent-Based Parts Washer Fluid",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Industrial Safety Solvent Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Concentrated Workshop Floor Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Ultrasonic Cleaning Fluid Concentrate",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Tar and Bitumen Remover",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Industrial Cleaning",
        "name": "Scale and Rust Remover Acidic Cleaner",
        "spec": "Formulation Type: Acidic Scale Remover | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for industrial cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Acidic Scale Remover"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Multipurpose Surface Cleaner Concentrate",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Heavy-Duty Oven and Grill Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Premium Glass and Mirror Streak-Free Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Bathroom and Scale Remover Gel",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Kitchen Grease Degreaser Spray",
        "spec": "Formulation Type: Alkaline Degreaser | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Alkaline Degreaser"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Non-Corrosive to Aluminum & Steel"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Carpet and Upholstery Foaming Shampoo",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "House Cleaning",
        "name": "Drain Opener Power Gel",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for house cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Surface Disinfectant Spray",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for disinfection cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Industrial Biocidal Cleaner Concentrate",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for disinfection cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Food-Grade Surface Sanitizer",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for disinfection cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Medical-Grade Hand and Surface Disinfectant",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for disinfection cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Disinfection Cleaning",
        "name": "Anti-Mold and Mildew Fungicidal Spray",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for disinfection cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Low-Foam Carpet Extraction Detergent",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for extraction cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Industrial Vacuum Extraction Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for extraction cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Textile Stain Extraction Booster",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for extraction cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Odour Neutralizer Extraction Additive",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for extraction cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Safe on Plastics, Glass & Metals"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Extraction Cleaning",
        "name": "Rinse and Neutralizer Conditioning Agent",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for extraction cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Safe on Plastics, Glass & Metals"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Liquid Hand Soap Concentrate",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for hygiene cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Antibacterial Foam Hand Soap",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for hygiene cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Heavy-Duty Mechanics Hand Paste with Natural Abrasives",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for hygiene cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Protective Barrier Hand Cream",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for hygiene cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Hygiene Cleaning",
        "name": "Sanitary Ware Deep Cleaner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for hygiene cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Manual Dishwashing Liquid Concentrate",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: 1:10 Industrial Concentrate",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for manual cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "1:10 Industrial Concentrate"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Neutral All-Purpose Manual Wash Detergent",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for manual cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Safe on Plastics, Glass & Metals"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Vehicle Manual Wash and Wax Shampoo",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for manual cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Scouring Cream Cleanser",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for manual cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Manual Cleaning",
        "name": "Manual Leather Cleaner and Conditioner",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for manual cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Graffiti Remover Liquid",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for other cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Chewing Gum Freezing Spray and Liquid",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for other cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Air Conditioning System Flushing Fluid",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for other cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "CLEANING",
        "subcategory": "Other Cleaning",
        "name": "Other Cleaning",
        "spec": "Formulation Type: Neutral Surface Cleaner | Concentration Level: Ready-to-Use (RTU)",
        "pack": "500ml Trigger Spray, 10L Canisters",
        "desc": "High-performance private label formulation for other cleaning applications.",
        "fields": [
            {
                "label": "Formulation Type",
                "value": "Neutral Surface Cleaner"
            },
            {
                "label": "Concentration Level",
                "value": "Ready-to-Use (RTU)"
            },
            {
                "label": "Surface Safety",
                "value": "Heavy Duty Industrial Power Cleaning"
            },
            {
                "label": "Standard Packaging",
                "value": "500ml Trigger Spray, 10L Canisters"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Professional Cartridge Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Standard Cartridge Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Heavy-Duty Foil Pack Sausage Dispenses",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 18:1 High-Thrust (for High Viscosity)",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "18:1 High-Thrust (for High Viscosity)"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Standard Foil Pack Sausage Dispenses",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Professional Dual-Component Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Side-by-Side Dual Cartridge"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Dual-Component Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Side-by-Side Dual Cartridge"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Joint Smoothing and Finishing Profiles",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Other Cartridge Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Manual Dispensing",
        "name": "Other Foil Pack Sausage Dispensers",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for manual dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Cartridge System",
        "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "Pneumatic (Air Assisted)"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Foil Pack Sausage System",
        "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "Pneumatic (Air Assisted)"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Industrial Multi-Component",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Coaxial",
        "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "Pneumatic (Air Assisted)"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic Side-by-side",
        "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "Pneumatic (Air Assisted)"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Pneumatic Dispensing",
        "name": "Pneumatic High-Capacity",
        "spec": "Power Source: Pneumatic (Air Assisted) | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pneumatic dispensing applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "Pneumatic (Air Assisted)"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Professional Cartridge",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Standard Cartridge",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Professional Foil Pack Sausage",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Standard Foil Pack Sausage",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Coaxial Applicators",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "Cordless Li-Ion Side-by-side  Applicators",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Battery-Powered",
        "name": "High-Capacity Battery Systems",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for battery-powered applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE - Premium PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE - Professional PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: Max 4.5 kN Thrust",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "Max 4.5 kN Thrust"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Standard Metal PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "PTFE-Coated Easy-Clean PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Ergonomic Lightweight PU Foam Applicators",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Long-Nozzle Extension PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Standard PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "PU Foam Applicators",
        "name": "Other PU Foam Guns",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for pu foam applicators applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Specialty Mixing Nozzles for Anchoring Resins",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Heavy-Duty Barrel Cleaners and Brushes",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 18:1 High-Thrust (for High Viscosity)",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "18:1 High-Thrust (for High Viscosity)"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Custom Geometry Extrusions and Applicator Tips",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "PU Foam application adaptors",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "PU Foam application nozzles",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Cartridge nozzles",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
    },
    {
        "category": "APPLICATION SYSTEMS",
        "subcategory": "Accessories",
        "name": "Foil Pack Sausage nozzles",
        "spec": "Power Source: 18V Battery Powered | Thrust Force Ratio: 12:1 Thrust Force Ratio",
        "pack": "Professional 600ml Foil Guns",
        "desc": "High-performance private label formulation for accessories applications.",
        "fields": [
            {
                "label": "Power Source",
                "value": "18V Battery Powered"
            },
            {
                "label": "Thrust Force Ratio",
                "value": "12:1 Thrust Force Ratio"
            },
            {
                "label": "Component Format",
                "value": "Coaxial 2K"
            },
            {
                "label": "Supported Pack Sizes",
                "value": "Professional 600ml Foil Guns"
            }
        ]
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
    const slideDelay = 7500;
    
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
            
            let specsHtml = "";
            if (item.fields && item.fields.length > 0) {
                specsHtml = `<div class="card-specs-list">` + 
                    item.fields.map(f => `
                        <div class="card-spec-row">
                            <span class="card-spec-label">${f.label}:</span>
                            <span class="card-spec-value" title="${f.value}">${f.value}</span>
                        </div>
                    `).join("") + 
                `</div>`;
            }
            
            card.innerHTML = `
                <div class="product-card-top" style="cursor: pointer;">
                    <span class="prod-badge">${activeCategory} / ${activeSubCategory}</span>
                    <h3 class="prod-title">${item.name}</h3>
                    <p class="prod-desc">${item.desc}</p>
                    ${specsHtml}
                </div>
                <div class="prod-actions">
                    <button class="btn-add-quote">
                        Add to Quote ⚡
                    </button>
                    <button class="btn-req-tds">
                        Request TDS 📩
                    </button>
                </div>
            `;
            
            card.querySelector(".product-card-top").addEventListener("click", () => {
                window.location.hash = `#/product/${getProductSlug(item.name)}`;
            });

            card.querySelector(".btn-add-quote").addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
                configCategory.value = activeCategory;
                configCategory.dispatchEvent(new Event("change"));
                configSubCategory.value = activeSubCategory;
                
                openModal(quoteModal);
                goToWizardStep(2);
            });

            card.querySelector(".btn-req-tds").addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
                document.getElementById("tdsProductTitle").textContent = item.name;
                openModal(document.getElementById("tdsRequestModal"));
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

    function triggerMegaMenuClose() {
        megaMenu.classList.add("hide-temporary");
        setTimeout(() => {
            megaMenu.classList.remove("hide-temporary");
        }, 500);
    }

    // Main header "Our Offer" dropdown button routing click trigger
    const ourOfferDropdownBtn = document.getElementById("ourOfferDropdownBtn");
    if (ourOfferDropdownBtn) {
        ourOfferDropdownBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.hash = "#/our-offer";
            triggerMegaMenuClose();
        });
    }

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

            btn.addEventListener("click", () => {
                activeCategory = cat;
                activeSubCategory = "";
                
                // Sync compass selectors
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
                
                // Navigate and Close
                window.location.hash = "#/our-offer";
                triggerMegaMenuClose();
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

                btn.addEventListener("click", () => {
                    activeCategory = megaActiveCat;
                    activeSubCategory = sub;
                    
                    // Sync compass selectors
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
                    
                    // Sync subcategory selection button in compass
                    setTimeout(() => {
                        subCategorySelectors.querySelectorAll(".sub-btn").forEach(b => {
                            if (b.textContent === activeSubCategory) {
                                b.click();
                            }
                        });
                    }, 50);
                    
                    // Navigate and Close
                    window.location.hash = "#/our-offer";
                    triggerMegaMenuClose();
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
            a.href = `#/product/${getProductSlug(item.name)}`;
            a.textContent = item.name;
            
            a.addEventListener("click", (e) => {
                e.preventDefault();
                // Navigate to product detail page directly
                window.location.hash = `#/product/${getProductSlug(item.name)}`;
                triggerMegaMenuClose();
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
    document.querySelectorAll(".open-quote-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(quoteModal);
        });
    });
    openQuoteBtn.addEventListener("click", () => openModal(quoteModal));
    closeQuoteModalBtn.addEventListener("click", () => closeModal(quoteModal));
    
    // Close overlay click handlers
    window.addEventListener("click", (e) => {
        if (e.target === quoteModal) closeModal(quoteModal);
        if (e.target === contactMatrixModal) closeModal(contactMatrixModal);
        if (e.target === productModal) closeModal(productModal);
        if (e.target === infoModal) closeModal(infoModal);
        if (e.target === document.getElementById("tdsRequestModal")) closeModal(document.getElementById("tdsRequestModal"));
    });

    // Contact Matrix Trigger Listeners
    document.querySelectorAll(".open-connect-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(contactMatrixModal);
        });
    });
    contactMatrixBtn.addEventListener("click", () => openModal(contactMatrixModal));
    closeContactMatrixBtn.addEventListener("click", () => closeModal(contactMatrixModal));

    // Detail Product Modal Close Listener
    closeProductModalBtn.addEventListener("click", () => closeModal(productModal));

    // Info Modal Close Listener
    closeInfoModalBtn.addEventListener("click", () => closeModal(infoModal));

    // TDS Request Modal Close & Submit Listener
    const tdsRequestModal = document.getElementById("tdsRequestModal");
    const closeTdsModalBtn = document.getElementById("closeTdsModalBtn");
    if (closeTdsModalBtn) {
        closeTdsModalBtn.addEventListener("click", () => closeModal(tdsRequestModal));
    }

    const tdsRequestForm = document.getElementById("tdsRequestForm");
    if (tdsRequestForm) {
        tdsRequestForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("tdsFullName").value;
            const email = document.getElementById("tdsCorporateEmail").value;
            const company = document.getElementById("tdsCompanyName").value;
            const market = document.getElementById("tdsTargetMarket").value;
            const prod = document.getElementById("tdsProductTitle").textContent;
            
            alert(`📩 TDS REQUEST RECEIVED!\n\nProduct: ${prod}\nRecipient: ${name} (${email})\nCompany: ${company}\nMarket: ${market}\n\nOur CEE compliance team is verifying your corporate credentials and will dispatch the encrypted PDF to your domain within 1 hour.`);
            
            tdsRequestForm.reset();
            closeModal(tdsRequestModal);
        });
    }


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

        let fieldsListHtml = "";
        if (item.fields && item.fields.length > 0) {
            fieldsListHtml = item.fields.map(f => `<li><strong>${f.label}:</strong> ${f.value}</li>`).join("");
        } else {
            fieldsListHtml = `<li><strong>Base Compound Profile:</strong> ${item.spec}</li>`;
        }

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
                                ${fieldsListHtml}
                                <li>Custom formula adjustments available at our Krakow R&D laboratory.</li>
                                <li>Guaranteed geographical exclusivity to avoid local market cannibalization.</li>
                                <li>REACH compliant and poison center notified formulation.</li>
                            </ul>
                        </div>

                        <div class="product-page-actions" style="display: flex; gap: 16px;">
                            <button class="product-page-rfq-btn btn-add-quote" id="productPageRfqBtn" style="flex: 1; border: none; background: var(--color-blue-accent); color: var(--color-text-white); font-weight: 700; padding: 12px; border-radius: var(--radius-sm); cursor: pointer; text-transform: uppercase;">
                                Add to Quote ⚡
                            </button>
                            <button class="product-page-rfq-btn btn-req-tds" id="productPageTdsBtn" style="flex: 1; background: rgba(255, 255, 255, 0.05); color: var(--color-text-light); border: 1px solid var(--color-border-glass); font-weight: 700; padding: 12px; border-radius: var(--radius-sm); cursor: pointer; text-transform: uppercase;">
                                Request TDS 📩
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

        document.getElementById("productPageTdsBtn").addEventListener("click", () => {
            document.getElementById("tdsProductTitle").textContent = item.name;
            openModal(document.getElementById("tdsRequestModal"));
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
