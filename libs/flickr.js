var lastPhotoPageRequested = 0
var photosInfo = []
let maxPhotoPages = 0
const photoRequestPageSize = 25

var gettingPhotos = false

// set by page when photos load
let owner_handleMorePhotos = null

const myUserId = '97403545@N00'

// ---------------------------------------------------------------------------
function photosStart(ownerCallback)
{
   lastPhotoPageRequested = 1

   owner_handleMorePhotos = ownerCallback

   getPhotosPage(lastPhotoPageRequested, photoRequestPageSize, getPhotosPageCallback)
}

// ----------------------------------------------------------------------------
function getMorePhotos()
{
   lastPhotoPageRequested += 1

   getPhotosPage(lastPhotoPageRequested, photoRequestPageSize, getPhotosPageCallback)
}

// ---------------------------------------------------------------------------
function getPhotosPage(pageNum, pageSize, callback)
{
   // todo : do this better
   if (gettingPhotos)
   {
      return
   }

   var flickrUserId = myUserId

   console.log(`getting photo page ${pageNum}`)

   // const requestUrl = 'http://localhost:3000'
   const requestUrl = 'http://brucecooner.herokuapp.com'

   let requestString = requestUrl
   requestString += '/photos/' + flickrUserId
   requestString += '/pageSize/' + pageSize
   requestString += '/page/' + pageNum

   var getPhotosXHR = new XMLHttpRequest();

   getPhotosXHR.open("GET", requestString, true);

   getPhotosXHR.onload = function (e)
   {
     if (getPhotosXHR.readyState === 4)
     {
       if (getPhotosXHR.status === 200)
       {
         // someCode = getCodeXHR.responseText;
         // handlePhotosResponse(getPhotosXHR.responseText)
         callback(getPhotosXHR.responseText)
       }
       else
       {
         console.error(getPhotosXHR.statusText);
       }
     }
   };
   getPhotosXHR.onerror = function (e)
   {
     console.error(getPhotosXHR.statusText);
   };

   gettingPhotos = true
   getPhotosXHR.send(null);
}

// -------------------------------------------------------------------
function getPhotosPageCallback(response)
{
   // alert('got photos info')

   responseObject = JSON.parse(response)

   if (responseObject['photos'])
   {
      photosObject = responseObject['photos']

      // init max pages?
      if (0 == maxPhotoPages)
      {
         maxPhotoPages = photosObject['pages']
      }

      // extract the photo info
      if (photosObject['photo'])
      {
         photosArray = photosObject['photo']

         photosArray.forEach( function(currentElement)
         {
            photosInfo.push(currentElement)
         })
      }
   }

   // got some photos now?
   // todo: how to tell which ones are NEW?
   if (owner_handleMorePhotos)
   {
      owner_handleMorePhotos(photosObject['photo'])
   }
   gettingPhotos = false
}

// -----------------------------------------------------------------------
// photo info -> img location
function flickrPhotoInfoToUrl(photo)
{
   /*
   s	small square 75x75
   q	large square 150x150
   t	thumbnail, 100 on longest side
   m	small, 240 on longest side
   n	small, 320 on longest side
   -	medium, 500 on longest side
   z	medium 640, 640 on longest side
   c	medium 800, 800 on longest side†
   b	large, 1024 on longest side*
   h	large 1600, 1600 on longest side†
   k	large 2048, 2048 on longest side†
   o	original image, either a jpg, gif or png, depending on source format     */
   const sizeChar = 'm' //'t'

   //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
   urlString = 'https://farm' + photo['farm']
   urlString += '.staticflickr.com/' + photo['server'] + '/'
   urlString += photo['id'] + '_' + photo['secret'] + '_' + sizeChar + '.jpg'

   return urlString
}

// -----------------------------------------------------------------------
// photo info -> flickr photo page
function flickrPhotoInfoToPhotoPage(photo)
{
   flickrUserId = myUserId

   var urlString = 'https://www.flickr.com/photos/'
   urlString += flickrUserId + '/' + photo['id']

   return urlString
}
