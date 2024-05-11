'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b488b1942f8ecd8d545313eccec67cf9",
"assets/AssetManifest.bin.json": "8861677e3df0a789d0f94d3dc5dfe756",
"assets/AssetManifest.json": "4314c2d9f6063e646f2dee9bc47f67a5",
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
"assets/assets/icons/python.svg": "ffc01dcc015f573d0f1d831fb7b6cbca",
"assets/assets/icons/splunk.svg": "7ee5abfc94cb003145ef8b460fdf19c1",
"assets/assets/icons/springBoot.svg": "a3305be3e16c0a4cc8b7b4462c4ab648",
"assets/assets/icons/sql.svg": "6dcddbfc3a8ca822a4f92adc8fb377a3",
"assets/assets/icons/ssrs.svg": "8f4e2a645bfd8b871684903df9a8f36c",
"assets/assets/icons/uac.svg": "91d348b16f93f820b276d23778316a60",
"assets/assets/icons/udemy.svg": "11029121ef7e5e99b59c4c14a0d602b1",
"assets/assets/otherAssets/background.svg": "699f40f8f0836e449929cfacdef5a817",
"assets/FontManifest.json": "e4be2fb9894f6252457947ff3cae71b9",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "dab926b7024282f7a909aa8636a8ddb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f1aa4dcf1dafb6715402ed921ad77560",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "af2f65b542bd0ac7d9f2068b2530a993",
"icons/Icon-512.png": "7141b6d1d4fb8f400ad900112a415fd0",
"icons/Icon-maskable-192.png": "1df3615be8b4737bf464e34f1e504a19",
"icons/Icon-maskable-512.png": "bc27e7c4e2cf3b8524238f3f21f3c760",
"index.html": "80d14908d7cfb67a6cea182a907726d5",
"/": "80d14908d7cfb67a6cea182a907726d5",
"main.dart.js": "2cdf7e0c7c573fa72631142fc7f49fbd",
"manifest.json": "af2375e42da2bc363d33c5486f616741",
"thumbnail.png": "6a72ac8a88c91bc52052d443852ec0c4",
"version.json": "daaa29bf68187f7b943110b604f248d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
