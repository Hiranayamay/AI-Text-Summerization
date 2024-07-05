document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById("text_to_summarize");
  const submitButton = document.getElementById("submit-button");
  const summarizedTextArea = document.getElementById("summary");
  const copyButton = document.getElementById("copy-button");
  const downloadLink = document.getElementById("download-link");
  const scrollUpButton = document.getElementById('scroll-up');
  const scrollDownButton = document.getElementById('scroll-down');

  submitButton.disabled = true;

  textArea.addEventListener("input", verifyTextLength);
  submitButton.addEventListener("click", submitData);

  function verifyTextLength(e) {
    const textarea = e.target;

    if (textarea.value.length > 200 && textarea.value.length < 100000) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
      const interactiveBackground = document.getElementById('interactive-background');
      let clickCount = 0;

      document.addEventListener('click', function(event) {
          clickCount++;
          for (let i = 0; i < clickCount; i++) {
              createCharacter(event.clientX, event.clientY);
          }
      });

      function createCharacter(x, y) {
          const character = document.createElement('div');
          character.className = 'character';
          character.style.left = `${x}px`;
          character.style.top = `${y}px`;
          character.textContent = Math.random() > 0.5 ? '0' : '1';
          interactiveBackground.appendChild(character);

          setTimeout(() => {
              interactiveBackground.removeChild(character);
          }, 2000); // Remove character after animation
      }
  });
  // Hide Scrollbars When Not Scrolling
  document.body.style.overflow = 'hidden';

  // Show Scrollbars When Scrolling
  document.body.style.overflow = 'auto';


  function submitData(e) {
    e.preventDefault();
    submitButton.classList.add("submit-button--loading");

    const text_to_summarize = textArea.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "text_to_summarize": text_to_summarize
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('/summarize', requestOptions)
      .then(response => response.text())
      .then(summary => {
        summarizedTextArea.textContent = summary;
        copyButton.disabled = false;
        downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(summary);
        downloadLink.style.display = 'inline-block';
        submitButton.classList.remove("submit-button--loading");
      })
      .catch(error => {
        console.log(error.message);
        submitButton.classList.remove("submit-button--loading");
      });
  }

  copyButton.addEventListener('click', function() {
    summarizedTextArea.select();
    document.execCommand('copy');
    alert('Summary copied to clipboard!');
  });

  // Scroll Up Button
  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Scroll Down Button
  scrollDownButton.addEventListener('click', function() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    window.scrollTo({
      top: scrollTop + clientHeight,
      behavior: 'smooth'
    });
  });

  // Show/Hide Scroll Buttons based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      scrollUpButton.style.display = 'block';
      scrollDownButton.style.display = 'block';
    } else {
      scrollUpButton.style.display = 'none';
      scrollDownButton.style.display = 'none';
    }
  });
});
