        var inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(function(input) {
            input.addEventListener('focus', function() {
                this.setAttribute('type', 'number');
            });
            input.addEventListener('blur', function() {
                this.setAttribute('type', 'text');
            });
        });
