/**
 * Created by Master on 23.11.2016.
 */
document.getElementById("arreyGeneration").addEventListener("click", function () {
    arreyGeneration()
});
document.getElementById("transportationProblem").addEventListener("click", function () {
    transportationProblem()
});


function arreyGeneration() {
    var arrMega = [];
    
    var startDateGenerate = new Date() * 1000;
    for (var i = 0; i < 1000000; i++){
        arrMega.push (Math.floor(Math.random() * (1000 - 0 + 1)) + 0);
        }
    var endDateGenerate = new Date () * 1000;
    var totalDateGenerate = endDateGenerate - startDateGenerate;
    
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    function reversNumeric(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
    }
    
    var arrCompare = arrMega.slice();
    var startDateCompare = new Date() * 1000;
    arrCompare.sort(compareNumeric);
    var endDateCompare = new Date () * 1000;
    var totalDateCompare = endDateCompare - startDateCompare;
    
    var arrRevers = arrMega.slice();
    var startDateRevers = new Date() * 1000;
    arrRevers.sort(reversNumeric);
    var endDateRevers = new Date () * 1000;
    var totalDateRevers = endDateRevers - startDateRevers;
    
    var startDateSum = new Date () * 1000;
    var sumArrMega = arrMega.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    var endDateSum = new Date () * 1000;
    var totalDateSum = endDateSum - startDateSum;
    
    
    
    console.log({
        "Массив случайных чисел: ": arrMega,
        "Время генерации массива: ": totalDateGenerate,
        "Массив упорядоченный по возростанию: ": arrCompare,
        "Время сортировки по возрастанию: ": totalDateCompare,
        "Массив упорядоченный по убыванию: ": arrRevers,
        "Время сортировки по убыванию: ": totalDateRevers,
        "Сумма элементов массива: ": sumArrMega,
        "Время сложения элементов: ": totalDateSum,
        }
    );
};

function transportationProblem() {
    var matrixA = [60, 80, 100];
    var matrixB = [40, 60, 80, 60];
    var matrixC = [ [1, 3, 4, 2],
                    [4, 5, 8, 3],
                    [2, 3, 6, 7] ];
    
    for (i=0; i<matrixA.length; i++){
        matrixC.push( [] );
        for (j=0; j<matrixB.length; j++) {
            if (matrixA [i] >= matrixB [j]) {
                matrixC [i] [j] = matrixB [j];
                matrixA [i] = matrixA [i] - matrixB [j];
                matrixB [j] = 0;
            }
            else if (matrixA [i] < matrixB [j]) {
                matrixC [i] [j] = matrixA [i];
                matrixA [i] = matrixB [j] - matrixA [i];
                matrixA [i] = 0;
            }
            else {
                matrixC [i] [j] = 0;
            }
        }
        console.log( matrixC[i] );
    
    }
};
