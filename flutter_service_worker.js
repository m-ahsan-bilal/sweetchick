'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "60eb3a0059b32a0d81a2865b097e43b5",
"version.json": "5e4b270212c7e28ab608925c1a25b00b",
"favicon.ico": "f95048e597480170b4bfb2861937ec19",
"index.html": "7ca792ba8d4d8fb0612e596333e67da3",
"/": "7ca792ba8d4d8fb0612e596333e67da3",
"favicon_io%20(3)/favicon-16x16.png": "31459618234bdd96d14d6a671a949c51",
"favicon_io%20(3)/favicon.ico": "f95048e597480170b4bfb2861937ec19",
"favicon_io%20(3)/android-chrome-192x192.png": "fd2372ccbe1b90df46d7f241b0a5326b",
"favicon_io%20(3)/apple-touch-icon.png": "b7a47fd786f2ec839827d4148ac6c5b4",
"favicon_io%20(3)/android-chrome-512x512.png": "4ea0e67e8b45db9964a3d4459b2afa5a",
"favicon_io%20(3)/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io%20(3)/favicon-32x32.png": "be99229f31f6ce641e022fc09fd66d35",
"main.dart.js": "e7e4cc8c0dd9789469ffce214670836d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "fd2372ccbe1b90df46d7f241b0a5326b",
"icons/Icon-maskable-192.png": "be99229f31f6ce641e022fc09fd66d35",
"icons/Icon-maskable-512.png": "be99229f31f6ce641e022fc09fd66d35",
"icons/Icon-512.png": "4ea0e67e8b45db9964a3d4459b2afa5a",
"manifest.json": "7267bfe26cc72081dc4c4db2cfe25430",
".git/config": "22c77de1fface2211eb8227b53c4ccb5",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/59/15b4b9f90debd1a0720505c65dbdbecf3eec88": "bd900116ea57bc5a501f02825a49717c",
".git/objects/0c/a1fd931aa58fb4f071dea0de1308c246388ef0": "4f15b4a315b42330d9f811e5e2bb4d4a",
".git/objects/50/f276fadbf5cc3239b64b86e2e8a2b80c0d5f13": "97a75c62b1cb525cda064378b9f9cd99",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/5e6324891a53d35767ff695b5c0a86d38dc4fa": "6ed62dc6c91233cd1891c9f903990fce",
".git/objects/69/0ad8b32747252e1e4baec83618e50a7150415d": "610a2e22922876194219c606686caeb4",
".git/objects/3c/caa6328551c0cff518f390edf0d77eb675df32": "5c7a83a2df65a81697b8d771a24f2fc8",
".git/objects/0b/1fdc003cd55e438a8332a39b00bab9061cdea3": "1aec0020f9ab8189e05ca242f435d47d",
".git/objects/0e/f750b71d2fc9595e9e78000c0636f51fdbdd9b": "dd14dd1552e2a3bb787c366023b79dda",
".git/objects/0e/30095916dd5a62f97c9c69bc78dfd7702277f3": "f8a5d777244f56e6de47fe2bc1169344",
".git/objects/60/4f6aa62fbe54be036e68b07641a82821ea1bd3": "8f2c93e8b218aecae5b10d4f6801b4ec",
".git/objects/34/3a6cb30a63ff3686277d255981f6fc33654681": "124e99bdfb5354b842425101d50ca5a1",
".git/objects/05/b426146391e18fac5086a106124fb25bbe2ebe": "d577955b05fb62dab8c720ac01ecc74c",
".git/objects/9c/8a06383e14e162a27b4523264fce26b71e4a7b": "a1c9339a2992d36e37cd14bfd5356761",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d0/677cc521ec00024bd335b4632345ba4ed64652": "915e8295d611c776104039b7ffb25db3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/13b1abb6c8418a9d805a0e3408579be541f257": "155f69623a31e47ed8f1c1ceb1a01b15",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/96dc357779d7fc3d71023470b29cb5cee488af": "4ed96ba95f9c781c0b963f2c89c8dfd8",
".git/objects/4b/b92f7130c4723a46fef45e47e5f8fad762b173": "02940e52bbd8252b404681d4a17286f8",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/099edd364fdd90e1475359f251d402486f69ad": "cc5f32d5465d4c3f2d7f35df3666cadb",
".git/objects/7d/560c7d3d216e9faef859c612ef54d825e54752": "c5c2a2e7f0c40eb622c3a04c1869468f",
".git/objects/45/61b86a1e8f2aef17fffaa1763121bc45f9a231": "244861d6e31c9c16c0ffc6e580893aea",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/7a11dd260b5a86d243fbec458439a2aeec1270": "282cd3324a6ca9af2280a44f732ff8b3",
".git/objects/80/5134f32d5123482087ccb56cfc81d30eec8288": "2d3f5d7bc48b921a317756f9ad8a70d6",
".git/objects/7e/298cb0c0047e01c6bf31f9ed087cfd51b368c3": "f2148c8dd025763c074e9c1cb23efa6f",
".git/objects/10/f9e2471f90a5fa6cd405f5e63485300770f022": "9006b031127d694e2d67bca1868ebfcb",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/48f33346e302ef5b17b5c27ba9808aaa2e9cf5": "2b9f8e039a0d340292cca30ec3e22195",
".git/objects/43/0b579f76cfa32865451427316b87a1b1aeb8be": "c8334218293d607e3f984184edd76115",
".git/objects/88/3c66b5c5f8445866ea6e33b940c1accee891c6": "9ba64c57b9940335675c9bedb48053e4",
".git/objects/9f/8062a713c4af5045e82ba34633d7f66d453c73": "e10ac3156a3c3788518175c752fcc806",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/5d/7a920539aa456f4401ebad5adf164f7aaabc36": "8b3fad484db344f140403f9f007beb4d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/04e3fa0a5930293237c8deb5fe60d3e6d74fb5": "03052c7279b4b0257ac1bc65dad0a322",
".git/objects/08/f388cdb647b90cd0124b71761daa18534aa3d5": "adf1f6c87626c53425b3f750090cec5d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/5cebc7ec2d457dba12345d915a96f8647f5c1e": "a51d17a94be546c90985852eb47d8d9a",
".git/objects/99/28792a1d61cf919c0a913e3cf160b58a58aaa6": "e78c27dd05bba8f6e2bbd058a6482a62",
".git/objects/99/9a89180478519b22af700a5f568be8123eb9c3": "17991429a9a9505275f551ba15703cb9",
".git/objects/97/1f3824b317a6ca899a69341eda156e0e126514": "3d4c28fc2258b4b4e46e504506b5f140",
".git/objects/63/cc800f196b438e3a8c8068056441a4725b4484": "7ec6eca593b6b2e1aff2c7ccdec73709",
".git/objects/64/0003cad86a3da8c825a16a810d338238a56391": "384d27ae576f6364175fade55f3d7d60",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/3889499f91305606f0e8837781dfbf002e8466": "fc02b91346dfe709b4aa9f201ee0772d",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/db/2d9b134b1934c6ad913cf9885ed5c1a9bb34e0": "386d1aa8ac29030ae03e24ceb9a75f53",
".git/objects/de/0bd8873f722e0e91eb4e9c2d214d9f33de64e4": "37c6605f6012fdd1a5e9f8a2dd727d53",
".git/objects/c4/d8a19c44b4fbd3b72698dc629433aac8908e17": "67eafdf1859c0ef9dfe3d12a04ccbcf4",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/cd/d3815c4864b126ffbe47413adcb9c346adf702": "816c4f2a8e3de0cb3516ece43a28c4f9",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/55905ffe185d5cbf5246e0953388f3199e8eb7": "a24e687cfd1cbbc7998841a67eda5252",
".git/objects/f7/12d69b1a892a0769cd5cdc5baddf3f77885b19": "b98e2b649db982b4b7e5fa1e5fe9e341",
".git/objects/ff/b300529e42257e12a26b85e67cf8857cd30f1f": "f21912ce8ff5f249683d5d60154bd994",
".git/objects/e9/29a52759843acb8b539a87f9a22689118284ac": "a2fd15e1362dedda1779996c1d172f27",
".git/objects/e0/2a2f47f0e3bffb205906393ad105f348acae52": "6284ee616fbb1210f8a9c47398d61a4c",
".git/objects/46/00c30ca313df1ee7f5ded90c367e2870e7519c": "f57bf923bc2e9d4afb586db71f99169e",
".git/objects/2c/7a8e6db786c06d474b232bec5135534b96bd58": "a7cc2278c12e92cb9c76e5210ae11849",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/19ddc7a237fdc97960e5f3f286957d802db484": "1f855925015be17d1c803afb5c6deccb",
".git/objects/1e/53151a6c7b684a0bb24a89c295200fcb274b39": "4c5aa6a847e0f84e6b5a50c065222719",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/49/4c39950c0b95a32c3b9ee9e4121b1120866f49": "7011ad6294b8b84122cf5a6df8012897",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/13/fb4fe0194e3622dc1dc1c20b0c6c69ea10d2dc": "9c1dd7a50b3c99e12cb405d5c9862a7b",
".git/objects/7f/9d48717f4015858da89ca5488cfa4af00fecae": "487bdfccc0d9c51305d9f046f0d63d99",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c65387e54d717d49d9768a37f558942b",
".git/logs/refs/heads/main": "aedf80cbd2fc487ca4f1e3fe416553b9",
".git/logs/refs/remotes/origin/main": "b233bbf5b23bdffa93c5560f1ebb7d49",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cfc3f0c1db7604ef5bc294cd5a6a2475",
".git/refs/remotes/origin/main": "cfc3f0c1db7604ef5bc294cd5a6a2475",
".git/index": "919cc309c3a19cded0df017ac2bf8ffb",
".git/COMMIT_EDITMSG": "6be9b47e5a575f29ef343deb7edaa99a",
"assets/AssetManifest.json": "a6456ad780d5b8b8b4d19b36440da65a",
"assets/NOTICES": "33d85df34eb051a48b4ae4b4524598c6",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/AssetManifest.bin.json": "9e19fcbe805fbea62a80b1fd60eddffc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9df4a53eb02437933993bd368e1cd2b4",
"assets/fonts/MaterialIcons-Regular.otf": "2adf95a0964738ac02c209a847f4be4a",
"assets/assets/images/logo_transparent.png": "9124bf3ba3aeb4e910a8f35b45988497",
"assets/assets/images/logo_with_name.jpg": "49f2561abce670bcaa7be5cdf4d28e9a",
"assets/assets/images/banner.jpg": "e8d9bd35447a7aa1c40fda2897787490",
"assets/assets/images/logo.jpg": "1e648544c245047c036ff51832222078",
"assets/assets/images/logo_2.webp": "786853853ffc33605ee500e57e9c983d",
"assets/assets/images/banner2.webp": "9f95a634e2c9c7de8239c3c4d0e9d9d6",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
