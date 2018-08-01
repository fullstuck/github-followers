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
    const detail = data;
    detail.map((details, index) => {
        $("#output").append(template(detail, index))
    });
};

const template = (follower, index) => {
    return `<div class="card" style="width: 20rem;">
                <img class="card-img-top" src="${follower[index].avatar_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${follower[index].login}</p>
                    <a href="${follower[index].url}" class="btn btn-primary btn-block">Go to profile</a>
                </div>
            </div>`
}

getDetail();