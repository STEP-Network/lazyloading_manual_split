//Lazy loading split: control
function() {
    var lazyLoadMapping = {
        "viikkotarjoukset.fi": {
            "fetch": 200,
            "render": 150
        },
        "tilbudsuken.no": {
            "fetch": 200,
            "render": 150
        },
        "tilbudsugen.dk": {
            "fetch": 200,
            "render": 150
        },
        "plbold.dk": {
            "fetch": 120,
            "render": 70
        },
        "mandesager.dk": {
            "fetch": 200,
            "render": 60
        },
        "madridista.dk": {
            "fetch": 150,
            "render": 110
        },
        "localeyes.dk": {
            "fetch": 200,
            "render": 125
        },
        "lav-det-selv.dk": {
            "fetch": 200,
            "render": 150
        },
        "indidansk.dk": {
            "fetch": 200,
            "render": 150
        },
        "hurtigmums.dk": {
            "fetch": 200,
            "render": 50
        },
        "hardwareonline.dk": {
            "fetch": 200,
            "render": 125
        },
        "biltesteren.dk": {
            "fetch": 220,
            "render": 170
        },

        // Mxnkeys Agency
        "fjordavisen.nu": {
            "fetch": 150,
            "render": 100
        },
        "randersidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "viborgidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "aalborgidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "rebildidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "horsensidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "byggelandet.dk": {
            "fetch": 200,
            "render": 175    
        },
        "djurslandidag.dk": {
            "fetch": 200,
            "render": 175
        },
        "okonomista.dk": {
            "fetch": 200,
            "render": 175
        },
        "sport.dk": {
            "fetch": 300,
            "render": 250
        },
        "bifsupporters.dk": {
            "fetch": 200,
            "render": 175
        },
        "barcafans.dk": {
            "fetch": 200,
            "render": 175
        },

    };
    return lazyLoadMapping['{{ mappedDomain }}'] || lazyLoadMapping[Object.keys(lazyLoadMapping)[0]];
}