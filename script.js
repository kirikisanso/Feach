
    const createPost = (el, photos) => {
        let item = `
            <div class="card" style="width: 18rem;">
                <img src="${photos.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">ID: ${el.id}</p>
                    <a href="${photos.url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        `;
        return item;
    }

    let items = [];
    let count = 2;

    const Loader = (page) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((arr) => {
            fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
            .then(response2 => response2.json())
            .then((arr2) => {
                arr2.map((photos, id) => {
                    let el = createPost(arr[id], photos);
                    items.push(el);
                });
            })
            .then(() => {
                document.getElementById("posts").innerHTML = items.join('');
                count++;
            });
        });
    }

    Loader(count);

