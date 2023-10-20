window.onload = (event) => {
  var generateButton = document.querySelector('#generate');
  var generatedEmbedCode = ''
  var embedTextArea = document.querySelector('#generated_embed');
  var renderArea = document.querySelector('#render-area');

  generateButton.addEventListener('click', (event)=> {
    var youtubeLink = document.querySelector('#link').value;
    var title = document.getElementById('title').value;
    var ytVideoId = document.querySelector('#yt_id').value;

    generatedEmbedCode = `<iframe
      loading="lazy"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/${ytVideoId}&autoplay=1"
      srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${ytVideoId}?autoplay=1><img src=https://img.youtube.com/vi/${ytVideoId}/hqdefault.jpg alt='${title}'><span>▶</span></a>"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="${title}"
      ></iframe>
    `;

    embedTextArea.value = generatedEmbedCode;
    renderArea.innerHTML = generatedEmbedCode;
  });
}