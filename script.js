const backToTop = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function addComment() {
    const nameInput = document.getElementById("userName");
    const commentInput = document.getElementById("userComment");

    if (nameInput.value === "" || commentInput.value === "") {
        alert("المرجو ملء الإسم والتعليق");
        return;
    }

    const commentsList = document.getElementById("commentsList");
    const newComment = document.createElement("div");
    newComment.classList.add("comment-item");

    // هنا كنزيدو التاريخ "الآن" غير للتعليق الجديد
    newComment.innerHTML = `
        <strong>${nameInput.value}</strong>
        <p>${commentInput.value}</p>
        <span class="comment-date">الآن</span>
    `;

    commentsList.prepend(newComment);

    nameInput.value = "";
    commentInput.value = "";
}