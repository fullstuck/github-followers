console.log("Level 3");

let arr = [];

const getDetail = () => {
    fetch("https://api.github.com/users/alifraher/followers")
        .then(response => {
            return response.json();
        })
        .then(data => {
            showDetail(data);
        });
}

const showDetail = (data) => {
    for (i = 0; i < data.length; i++) {
        arr.push({
            avatar_url: data[i].avatar_url,
            login: data[i].login,
            url: data[i].url
        });

        $("#output").append(template(arr, i))
    };
};

const template = (follower, index) => {
    return `<div class="card">
                <img class="card-img-top" src="${follower[index].avatar_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${follower[index].login}</p>
                    <a href="${follower[index].url}" class="btn btn-primary btn-block">Go to profile</a>
                </div>
            </div>`
}

getDetail();