angularRoutingApp.factory("commentFactory", function($http){
  var url = 'https://localhost:8443/meneamePI/rest/comment/';

  var interfaz = {
    leerComentariobyNews: function(id){
      url = 'https://localhost:8443/meneamePI/rest/comments/news/'+id;
      return $http.get(url)
        .then(function(response){
          return response.data;
        });
    },
    leerComentariobyLogedUser: function(){
      url = 'https://localhost:8443/meneamePI/rest/comments/user/';
      return $http.get(url)
        .then(function(response){
          return response.data;
        });
    },
    insertarComentariobyLogedUser: function(comment, id){
      url = 'https://localhost:8443/meneamePI/rest/comments/user/';
      comment.news= id;
      return $http.post(url, comment)
        .then(function(response){
          return response.status;
        });
    },
    leerComentariobyId: function(id){
      url = 'https://localhost:8443/meneamePI/rest/comments/'+id;
      return $http.get(url)
        .then(function(response){
          return response.data;
        });
    },
    saveComentario: function(comment, id){
      url = 'https://localhost:8443/meneamePI/rest/comments/'+id;
      return $http.put(url, comment)
        .then(function(response){
          return response.status;
        });
    },
    deleteComentario:	function(id){
      url = 'https://localhost:8443/meneamePI/rest/comments/';
      return $http.delete(url+id)
        .then(function(response){
          return response.status;
        });
    }
  };
  return interfaz;
});
/**
 * Created by carlos on 3/08/16.
 */
