function followersPorgram(params) {
    let followersObj = {};
    let command = params.shift();
    while (command != 'Log out') {
        command = command.split(': ');
        if (command[0] == 'New follower') {
            let user = command[1];
            if (followersObj.hasOwnProperty(user)) {
            } else {
                followersObj[user] = {
                    likes: 0,
                    comment: 0,
                    total: 0
                }
            }
        } else if (command[0] == 'Like') {
            let user = command[1];
            let count = Number(command[2]);
            if (followersObj.hasOwnProperty(user)) {
                followersObj[user].likes += count;
                followersObj[user].total += count;
            } else {
                followersObj[user] = {
                    likes: count,
                    comment: 0,
                    total: count
                }
            }
        } else if (command[0] == 'Comment') {
            let user = command[1];
            if (followersObj.hasOwnProperty(user)) {
                followersObj[user].comment += 1;
                followersObj[user].total += 1;
            } else {
                followersObj[user] = {
                    likes: 0,
                    comment: 1,
                    total: 1
                }
            }
        } else if (command[0] == 'Blocked') {
            let user = command[1];
            if (followersObj.hasOwnProperty(user)) {
                delete followersObj[user]
            } else {
                console.log(`${user} doesn't exist.`);
            }
        }
        command = params.shift();
    }
    let workArr = Object.entries(followersObj);
    let sorted = workArr.sort((a, b) => b[1].likes -a[1].likes || a[0].localeCompare(b[0]));
    console.log(`${sorted.length} followers`);
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].total}`);   
    }
}
followersPorgram([    'New follower: gosho',    'Like: gosho: 5',    'Comment: gosho',   
 'New follower: gosho',    'New follower: tosho',    'Comment: gosho',  
   'Comment: tosho',    'Comment: tosho',    'Comment: pesho',    'Log out'])