function addPost(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const notes = document.querySelector("#notes").value.trim();

    if (title && notes) {
        fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                notes
            }),
        headers: { 'Content-Type': 'application/json'}
        }).then((response) => {console.log(response)});
    }
};

document.querySelector('.add-post-form').addEventListener('submit', addPost);