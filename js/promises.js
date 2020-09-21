"use strict";

const userGithub = (username) => fetch("https://api.github.com/users/" + username + "/events", {headers: {'Authorization': gitToken}});

let latestCommit = (input) => {
    let user = input;
    userGithub(user).then(response => response.json())
        .then((data) => {
            let latestPush = [];
            data.forEach((item) => {
                if(item.type === "PushEvent"){
                    latestPush.push(item);
                }
            });
            console.log(latestPush[0].created_at)
        })
        .catch(error => console.log(error));
};

latestCommit('saschenbeck');
