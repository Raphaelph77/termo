const palavras = ["casal", "nuvem", "bravo", "limpo", "troca", "piano", "cobra"];
    const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    let tentativas = 0;
    const maxTentativas = 6;

    function checkGuess() {
      const input = document.getElementById('guessInput');
      const guess = input.value.toLowerCase();
      if (guess.length !== 5) {
        alert("Digite uma palavra com 5 letras!");
        return;
      }

      tentativas++;
      const row = document.createElement('div');
      row.className = 'row';

      const letrasUsadas = palavraSecreta.split('');
      const resultado = [];

   
      for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = guess[i];

        if (guess[i] === palavraSecreta[i]) {
          span.classList.add('correct');
          letrasUsadas[i] = null; 
        }

        resultado.push(span);
      }

      
      for (let i = 0; i < 5; i++) {
        if (guess[i] !== palavraSecreta[i]) {
          if (letrasUsadas.includes(guess[i])) {
            resultado[i].classList.add('present');
            letrasUsadas[letrasUsadas.indexOf(guess[i])] = null;
          } else {
            resultado[i].classList.add('absent');
          }
        }
      }

      resultado.forEach(span => row.appendChild(span));
      document.getElementById('board').appendChild(row);
      input.value = '';
      input.focus();

      if (guess === palavraSecreta) {
        document.getElementById('message').textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
        input.disabled = true;
      } else if (tentativas >= maxTentativas) {
        document.getElementById('message').textContent = `😞 Fim de jogo! A palavra era "${palavraSecreta}".`;
        input.disabled = true;
      }
    }