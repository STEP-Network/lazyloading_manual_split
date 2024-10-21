ayManagerEnv.settings.experiments = {
    cmpStub: true,
};

//long term split test v0.5
(function() {
    window.YM_SPLIT_TESTS = {
        randomTest: {
            variants: {
                setup1: 20,
                setup2: 20,
                setup3: 20,
                setup4: 20,
                setup5: 20
            },
            dimension: "custom_12"
        }
    };

    function getRandomVariant(variants) {
        let variantsMap = [];
        Object.keys(variants).forEach(function(variant) {
            variantsMap.push({
                name: variant,
                percentage: variants[variant]
            });
        });

        // Sort variants by percentage
        variantsMap.sort(function(a, b) {
            return a.percentage - b.percentage;
        });

        let start = 0;
        let random = Math.floor(Math.random() * 100);
        for (let variant of variantsMap) {
            let end = start + variant.percentage;
            if (random >= start && random < end) {
                return variant.name;
            }
            start = end;
        }
    }

    window.assertiveQueue = window.assertiveQueue || [];
    Object.keys(YM_SPLIT_TESTS).forEach(function(testName) {
        let test = YM_SPLIT_TESTS[testName];
        let value = getRandomVariant(test.variants);  // Assign random variant

        // Store the selected variant globally for access in other files
        window.YM_SPLIT_TESTS.selectedVariant = value;

        // Track the assigned value via the analytics dimension
        window.assertiveQueue.push(function () {
            assertive.setConfig('analytics.custom.' + test.dimension, value + '-' + testName);
        });
    });
})();

window.Quickwrap = window.Quickwrap || {};
window.Quickwrap.cmd = window.Quickwrap.cmd || [];

window.ayManagerEnv = window.ayManagerEnv || { cmd : []};
window.ayManagerEnv.cmd.push(function() {
    window.Quickwrap.display = function(code) {
        if (code === 'div-gpt-ad-anchor') return;
        var legacyTopscroll = 'div-gpt-ad-topscroll';
        if (code === legacyTopscroll) {
            var div = document.getElementById(legacyTopscroll);
            if (div) {
                div.id = legacyTopscroll +'_desktop';
                code = div.id;
            }
        }
        window.ayManagerEnv.display(code);
    };
    window.Quickwrap.infinity = function(code, id) {
        var div = document.getElementById(id);
        if  (div) {
            div.setAttribute('data-ay-manager-id', code);
            window.ayManagerEnv.display(code);
        }
    };
    window.Quickwrap.destroy = function(code) {
        window.ayManagerEnv.destroy([code]);
    };

    for (var at = 0; at < window.Quickwrap.cmd.length; at++) { try { window.Quickwrap.cmd[at]() } catch (e) { console.error(e) } };
    window.Quickwrap.cmd.push = function(t) { t() };
});


window.StepPubProvidedId = function () {
    if (window.utag && window.utag.data && window.utag.data.tealium_visitor_id) {
        return {
            source: "stepnetwork.dk",
            uids: [{
                id: window.utag.data.tealium_visitor_id,
                atype: 1,
                ext: {
                    stype: "ppuid"
                }
            }]
        };
    }
    return null;
};