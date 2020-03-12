app.controller('mainController', function($scope, mainServ) {
    $scope.Prating = 0;
    mainServ.getDocuments(function(response) {
        return $scope.filmes = response;
    });
    $scope.filmes2 = $scope.filmes.filmes;
    for (i = 0; i < $scope.filmes2.length; i++) {
        $scope.filmes2[i].rating = 0
    }
    $scope.f1 = function(x) {
        x.rating = Math.round(x.rating)
        console.log
        x.rankimg = [];
        for (i = 0; i < x.rating; i++) {
            x.rankimg.push("./img/star1.png")
        }
    }
    $scope.apagar = function(x) {
        $scope.filmes2 = x.filter(function(y) {
            if (!y.selec) {
                return y
            }
        })
    }
    $scope.selecionadoTrue = function(x) {
        return x.some(function(filmesSec) {
            return filmesSec.selec
        })

    }
});