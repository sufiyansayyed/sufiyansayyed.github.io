'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4b132b35c558e60ec403d244c0747f05",
"assets/AssetManifest.bin.json": "0641c129815ea49cefd7bd177a57c5a4",
"assets/AssetManifest.json": "ec3164c2d14382a7d72a1b0509e96238",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/fonts/ChangaOne-Regular.ttf": "faa116f9e38888be5815613fda668fb0",
"assets/assets/fonts/LilitaOne-Regular.ttf": "ce83b4bfa37f53ea2a3fc97088af7181",
"assets/assets/fonts/Quicksand-VariableFont_wght.ttf": "aaaca85ea11863d1e4550d425f763bd1",
"assets/assets/icons/accenture.svg": "0feda9c3ad618d100d06c13232e20fc6",
"assets/assets/icons/aws.svg": "9ca4b333e81619777f3b9dd9dfb16321",
"assets/assets/icons/aws_dark_word.svg": "8ee2b1f3f0fae8608b2f73c3a23b2780",
"assets/assets/icons/a_cloud_guru.svg": "8637d8ac1e64ffb275e7b3575d77ac6f",
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
"assets/assets/icons/linkedin.svg": "97ce31c8546f65bd1e25afbbf86ec1de",
"assets/assets/icons/oracle.svg": "806b35e0628d77038e9c968f2eb7bdd2",
"assets/assets/icons/oracleSql.svg": "6dcddbfc3a8ca822a4f92adc8fb377a3",
"assets/assets/icons/postgresql.svg": "7c6cf29f431681cc68b7665bf63ca85e",
"assets/assets/icons/python.svg": "ffc01dcc015f573d0f1d831fb7b6cbca",
"assets/assets/icons/splunk.svg": "7ee5abfc94cb003145ef8b460fdf19c1",
"assets/assets/icons/springBoot.svg": "a3305be3e16c0a4cc8b7b4462c4ab648",
"assets/assets/icons/ssrs.svg": "8f4e2a645bfd8b871684903df9a8f36c",
"assets/assets/icons/uac.svg": "91d348b16f93f820b276d23778316a60",
"assets/assets/icons/udemy.svg": "11029121ef7e5e99b59c4c14a0d602b1",
"assets/assets/otherAssets/background.svg": "699f40f8f0836e449929cfacdef5a817",
"assets/FontManifest.json": "e4be2fb9894f6252457947ff3cae71b9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "6a4915fef84b6d489c2cd4ff57475b2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f1aa4dcf1dafb6715402ed921ad77560",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9ab8dc46dcfab16f669b0f4fd5adcbcc",
"icons/Icon-192.png": "af2f65b542bd0ac7d9f2068b2530a993",
"icons/Icon-512.png": "7141b6d1d4fb8f400ad900112a415fd0",
"icons/Icon-maskable-192.png": "1df3615be8b4737bf464e34f1e504a19",
"icons/Icon-maskable-512.png": "bc27e7c4e2cf3b8524238f3f21f3c760",
"index.html": "f9d69e0bf95557bb126ec4a6fe82fa64",
"/": "f9d69e0bf95557bb126ec4a6fe82fa64",
"main.dart.js": "eb7b471032ebb82924f2ff59d7e4d309",
"manifest.json": "af2375e42da2bc363d33c5486f616741",
"thumbnail.png": "6a72ac8a88c91bc52052d443852ec0c4",
"version.json": "daaa29bf68187f7b943110b604f248d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
