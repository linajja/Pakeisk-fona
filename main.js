
let laikai = document.getElementById("metuLaikai");
let body = document.querySelector("body");

laikai.addEventListener("change", function (e) {
    let value = laikai.value;
    if (value === "Ruduo") {
        body.style.backgroundImage = 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autumn-in-the-white-mountains-of-new-hampshire-royalty-free-image-841380450-1531931081.jpg?crop=1.00xw:0.755xh;0,0.202xh&resize=1200:*")';
    } else if (value === "Vasara") {
        body.style.backgroundImage = 'url("https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg")';
    } else if (value === "Žiema") {
        body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1552901464-1449e53709c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80")';
    } else {
        body.style.backgroundImage = 'url("https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210316134609-01-wisdom-project-spring.jpg")';
    }
});

// laikai.addEventListener("change", function (e) {
//     let value = laikai.value;
//     body.style.backgroundImage = 'url("./img/' + value + '.jpg")';
//  });
