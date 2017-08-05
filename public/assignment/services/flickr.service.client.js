/**
 * Created by harsh on 8/5/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .service("FlickrService", FlickrService);
    function FlickrService($http) {

        this.searchPhotos = searchPhotos;

        var key = "70bd7f90b340b14fc9bc5f77573ad90f";
        var secret = "461b070482a7d778";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

        function searchPhotos(searchTerm) {
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            return $http.get(url)
                .then(function (response) {
                    return response;
                })
        }
    }
})();