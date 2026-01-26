'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af1135cf200e7baca55feedff7b8c619",
"assets/AssetManifest.bin.json": "20d6ba7e2180657aa6a3cddc59230f69",
"assets/AssetManifest.json": "1371fad32b861bebb4a1af35df9768cc",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/fonts/ChangaOne-Regular.ttf": "faa116f9e38888be5815613fda668fb0",
"assets/assets/fonts/LilitaOne-Regular.ttf": "ce83b4bfa37f53ea2a3fc97088af7181",
"assets/assets/fonts/Quicksand-VariableFont_wght.ttf": "aaaca85ea11863d1e4550d425f763bd1",
"assets/assets/icons/accenture.svg": "0feda9c3ad618d100d06c13232e20fc6",
"assets/assets/icons/aCloudGuru.svg": "8637d8ac1e64ffb275e7b3575d77ac6f",
"assets/assets/icons/aws.svg": "9ca4b333e81619777f3b9dd9dfb16321",
"assets/assets/icons/awsDarkWord.svg": "8ee2b1f3f0fae8608b2f73c3a23b2780",
"assets/assets/icons/css3.svg": "d2e3c3cabbc084314265aac5f0b2e764",
"assets/assets/icons/dart.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/icons/digital.aiDeploy.svg": "f3b535e3cd7d20c4eefe3034cf145d85",
"assets/assets/icons/dynatrace.svg": "397a793e40fcb9bbdc07982f273320be",
"assets/assets/icons/email.svg": "d94e23ee5e67448461fa586fd87dc3b7",
"assets/assets/icons/flutter.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/icons/git.svg": "f7287ff316e284af16ce082c870c478f",
"assets/assets/icons/github.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/icons/html5.svg": "9f2e1637c83e37e8f555044e12324734",
"assets/assets/icons/java.svg": "249fe040428adedb1d5b3bb6811ef492",
"assets/assets/icons/javaScript.svg": "9c8b14503c2fa7cb9f9188dcaf715416",
"assets/assets/icons/kafka.svg": "fde94328ebe387a584645aa2174d9486",
"assets/assets/icons/linkedin.svg": "97ce31c8546f65bd1e25afbbf86ec1de",
"assets/assets/icons/oracle.svg": "806b35e0628d77038e9c968f2eb7bdd2",
"assets/assets/icons/oracleSql.svg": "6dcddbfc3a8ca822a4f92adc8fb377a3",
"assets/assets/icons/postgresql.svg": "7c6cf29f431681cc68b7665bf63ca85e",
"assets/assets/icons/python.svg": "ffc01dcc015f573d0f1d831fb7b6cbca",
"assets/assets/icons/splunk.svg": "7ee5abfc94cb003145ef8b460fdf19c1",
"assets/assets/icons/springBoot.svg": "a3305be3e16c0a4cc8b7b4462c4ab648",
"assets/assets/icons/ssrs.svg": "8f4e2a645bfd8b871684903df9a8f36c",
"assets/assets/icons/terraform.svg": "650c74a7d3468e303eb56a224f8f74af",
"assets/assets/icons/uac.svg": "91d348b16f93f820b276d23778316a60",
"assets/assets/icons/udemy.svg": "11029121ef7e5e99b59c4c14a0d602b1",
"assets/assets/otherAssets/background.svg": "699f40f8f0836e449929cfacdef5a817",
"assets/assets/otherAssets/darkBackground.svg": "8202bfb76f952fd0eed7f9f27615cfdc",
"assets/assets/otherAssets/lightBackground.svg": "41d2d023762bf7d1d314b993c8f98211",
"assets/FontManifest.json": "e4be2fb9894f6252457947ff3cae71b9",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "533f4a33cebdd8b253470f54c333008f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "f1aa4dcf1dafb6715402ed921ad77560",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "70dd4314dbd1734202e91d67b4c25e5f",
"icons/Icon-192.png": "af2f65b542bd0ac7d9f2068b2530a993",
"icons/Icon-512.png": "7141b6d1d4fb8f400ad900112a415fd0",
"icons/Icon-maskable-192.png": "1df3615be8b4737bf464e34f1e504a19",
"icons/Icon-maskable-512.png": "bc27e7c4e2cf3b8524238f3f21f3c760",
"index.html": "a3fa4a475a276f46d09f10e9ae2624b8",
"/": "a3fa4a475a276f46d09f10e9ae2624b8",
"main.dart.js": "c401410a78f120ac58b2a3721ab2c048",
"main.dart.mjs": "37ee95632786a71ccc8d6294883a624a",
"main.dart.wasm": "f76eb865e2b0359a8a2d5187396bb058",
"manifest.json": "af2375e42da2bc363d33c5486f616741",
"thumbnail.png": "d9736f9a4da168c46a06d1d8cc39e6a3",
"version.json": "daaa29bf68187f7b943110b604f248d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
