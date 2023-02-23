const staticCacheName = 's-app-v1'
const dynamicCacheName = 'd-app-v1'

const assetUrls = [
    'index.html',
    // '/js/app.js',
    // '/css/styles.css',
    'offline.html'
]


const self=this

self.addEventListener('install',  event => {
    console.log('install')
    event.waitUntil(
        caches.open(staticCacheName)
            .then((cache)=>{
                console.log('opened caches')
                return cache.addAll(assetUrls)
            })
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', async event => {
    //удаляем из кэша все старые неактуальные кэши
    console.log('activate')
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames
            .filter(name => name !== staticCacheName)
            .filter(name => name !== dynamicCacheName)
            .map(name => caches.delete(name))
    )
})

//перехватываем запрос который уходит с приложения
// и контролируем какими данными мы будем отвечать
self.addEventListener('fetch', event => {
    console.log('fetch')

    const {request} = event

    const url = new URL(request.url)

    console.log(url.origin)
    // eslint-disable-next-line no-restricted-globals
    console.log(location.origin)
    //проверяем откуда мы забираем данные
    //(находятся ли они у нас на сервере локалхост)
    //скорее всего это наши статические данные index.html картинки и тд

    // eslint-disable-next-line no-restricted-globals
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
        // eslint-disable-next-line no-restricted-globals
        console.log(location.origin)
    } else {
        //другие запросы(например наш запрос на апи,
        //то есть динамич данные, которые могут меняться)
        event.respondWith(networkFirst(request))
    }

    // event.respondWith(
    //     caches.match(event.request)
    //         .then(() => {
    //             return fetch(event.request)
    //                 .catch(() => caches.match('offline.html'))
    //         })
    // )

})


async function cacheFirst(request) {
    //ПРИНЦИП: ПОЛУЧИТЬ ДАННЫЕ СНАЧАЛА ИЗ КЭША

    //проверяем есть ли в кэше данные которые мы запрашиваем
    const cache = await caches.open(staticCacheName)
    const cached= await cache.match(request)

    //если нашли в кэше данные возвращаем их
    //если не нашли то делаем запрос на сервер

    return cached ?? await fetch(request)

    //то есть мы загрузим статические данные из кэша staticCacheName
    //если их не будет то сделаем запрос на сервер за ними
}

async function networkFirst(request) {
    //ПРИНЦИП: ПОЛУЧИТЬ ДАННЫЕ СНАЧАЛА ПО СЕТИ
    //(ЕСЛИ ВОЗНИКЛИ ОШИБКИ ТО ИЗ КЭША)

    const cache = await caches.open(dynamicCacheName)
    try {

        //записываем данные пришедшие с сервера в кэш dynamicCacheName
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (e) {
        //если произошла ошибка то есть сети нет
        //то тогда мы берем данные из кэша
        const cached = await cache.match(request)
        console.log(request, 'взят из кэша')
        //если данных в кэше нет то тогда показать страницу offline.html
        return cached ?? await caches.match('offline.html')
    }
}