for (var inputs = document.querySelectorAll("input[type='text'], input[type = 'email'], input[type = 'password']
            "),textarea=document.querySelector("
            textarea "),i=0;i<inputs.length;i++)inputs[i].addEventListener("
            keyup ",function(a){a.target.value?a.target.classList.add("
            label - hide "):a.target.classList.remove("
            label - hide ")});textarea.addEventListener("
            keyup ",function(a){a.target.value?a.target.classList.add("
            label - hide "):a.target.classList.contain("
            label - hide ")&&a.target.classList.remove("
            label - hide ")});