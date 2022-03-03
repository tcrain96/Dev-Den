async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-body"]').value.trim();
    console.log(title);
    console.log(post_text);
    if (post_text) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({
            title,
            post_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.post-form').addEventListener('submit', postFormHandler);