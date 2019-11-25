(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/",
    "verprefix": "",
    "workerjs": "/worker.js",
    "monacoworkerjs": "/monacoworker.js",
    "gifworkerjs": "/gifjs/gif.worker.js",
    "pxtVersion": "5.28.24",
    "pxtRelId": "",
    "pxtCdnUrl": "/",
    "commitCdnUrl": "/",
    "blobCdnUrl": "/",
    "cdnUrl": "/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "calliopemini",
    "simUrl": "/simulator.html",
    "partsUrl": "/siminstructions.html",
    "runUrl": "/run.html",
    "docsUrl": "/docs.html",
    "isStatic": true
};

    var scripts = [
        "/highlight.js/highlight.pack.js",
        "/bluebird.min.js",
        "/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/target.js");
    scripts.push("/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
