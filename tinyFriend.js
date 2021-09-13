var allFriends = ["Faruk", "Pavel", "Hasan", "Somser", "Chisty", "Mim"];

var tinyFriend = [];
for (let i = 0; i < allFriends.length; i++) {
    const friend = allFriends[i];
    
    if (friend.length < tinyFriend.length) {
        return friend = tinyFriend;
    }
}

console.log(tinyFriend);
