console.log("Level 3");

const getDetail = () => {
    const url = "https://api.github.com/users/alifraher/followers"
    fetch(url)
        .then(response => response.json())
        .then(showDetail);
}

const showDetail = (data) => {
    data.forEach(item => {
        $("#output").append(template(item));
    })
};

const template = (follower) => {
    return `<div class="card">
                <img class="card-img-top" src="${follower.avatar_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${follower.login}</h5>
                    <a href="${follower.url}" class="btn btn-primary btn-block">Go to profile</a>
                </div>
            </div>`
}

getDetail();