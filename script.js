const url       = "https://api.github.com/users/";

const main      = document.getElementById('main');
const search    = document.getElementById('search');
const form      = document.getElementById('form');

async function getUser(user) {
    const response = await fetch(url + user);
    const responseData = await response.json();

    usersCard(responseData);
}

function usersCard(user) {
    const cardHTML = `
                <div class="card">
                    <div class="img-container"> 
                        <img class="avatar" src="${user.avatar_url}" />
                    </div>
                    <div class="user_info">
                        <h3>${user.name}</h3>
                        <p>${user.bio}</p>

                        <ul class="info">
                            <li>Followers : ${user.followers}</li>
                            <li>Following : ${user.following}</li>
                            <li>Repository : ${user.public_repos}</li>
                        </ul>
                    </div>
                </div>
                `;
    
    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault;

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = "";
    }
});