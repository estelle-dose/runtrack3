$(document).ready(function() {
    var rainbowContainer = $('#rainbow-container');
    var imageContainers = $('.image-container');
    var shuffleButton = $('#shuffle-button');
    var checkButton = $('#check-button');
    var message = $('#message');

    var rainbowOrder = [1, 2, 3, 4, 5, 6];

    shuffleButton.click(function() {
        shuffleImages();
    });

    checkButton.click(function() {
        checkRainbowOrder();
    });

    imageContainers.click(function() {
        var container = $(this);
        var currentIndex = container.index() + 1;
        var originalIndex = rainbowOrder[currentIndex - 1];

        container.css('order', originalIndex);

    });

    function shuffleImages() {
        imageContainers.each(function() {
            var randomOrder = Math.floor(Math.random() * 6) + 1;
            $(this).css('order', randomOrder);
        });

        message.text('');
    }

    function checkRainbowOrder() {
        var currentOrder = [];
    
        imageContainers.each(function() {
            var currentIndex = parseInt($(this).css('order'));
            currentOrder.push(currentIndex);
        });
    
        var isCorrect = true;
        for (var i = 0; i < currentOrder.length; i++) {
            if (currentOrder[i] !== i + 1) {
                isCorrect = false;
                break;
            }
        }
    
        if (isCorrect) {
            message.text('Vous avez gagné').css('color', 'green');
        } else {
            message.text('Vous avez perdu').css('color', 'red');
        }
    }
    
    

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
});

  
  