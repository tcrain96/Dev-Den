async function upvoteClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch('/api/comments/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            comment_id: id
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
  
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);

var loggedInCheck = function () {
    let upvoteBtns = document.querySelectorAll('#upvote-btn');
    console.log('running');
    if (sessionStorage.getItem('status') != null) {
        console.log('logged in');
        console.log(upvoteBtns);
        upvoteBtns.forEach(btn => btn.removeAttribute('hidden'));
        // upvoteBtns.removeAttribute('hidden');
    }
    else if (sessionStorage.getItem('status') = null) {
        console.log('logged out')
    }
}

loggedInCheck();