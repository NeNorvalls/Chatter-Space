let counter = 0;

// Add a new post
function addPost() {
  const input = document.getElementById("inputPost").value;

  if (input.trim() !== "") {
    counter++;
    document.getElementById("count").innerText = counter;

    // Create a new post container
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    // Add the post content
    const p = document.createElement("p");
    p.innerText = input;
    postDiv.appendChild(p);

    // Add Like button
    const likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeButton.onclick = () => likePost(likeButton);
    postDiv.appendChild(likeButton);

    // Add Comment button
    const commentButton = document.createElement("button");
    commentButton.innerText = "Comment";
    commentButton.onclick = () => commentPost(postDiv);
    postDiv.appendChild(commentButton);

    // Add Edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = () => editPost(p);
    postDiv.appendChild(editButton);

    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deletePost(postDiv);
    postDiv.appendChild(deleteButton);

    // Append the post to the post-list section
    document.querySelector(".post-list").appendChild(postDiv);

    // Clear input field
    document.getElementById("inputPost").value = "";
  }
}

// Like a post
function likePost(button) {
  button.innerText = button.innerText === "Like" ? "Unlike" : "Like";
  showNotification("You liked a post!");
}

// Add a comment to a post
function commentPost(postDiv) {
  const comment = prompt("Add your comment:");
  if (comment && comment.trim() !== "") {
    const commentParagraph = document.createElement("p");
    commentParagraph.className = "comment";
    commentParagraph.innerText = `Comment: ${comment}`;
    postDiv.appendChild(commentParagraph);
    showNotification("You added a comment!");
  }
}

// Edit an existing post
function editPost(postParagraph) {
  const newContent = prompt("Edit your post:", postParagraph.innerText);
  if (newContent !== null && newContent.trim() !== "") {
    postParagraph.innerText = newContent;
    showNotification("Your post has been updated!");
  }
}

// Delete an existing post
function deletePost(postDiv) {
  postDiv.remove();
  counter--;
  document.getElementById("count").innerText = counter;
  showNotification("A post has been deleted!");
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (notification) {
    notification.style.display = "block";
    notification.querySelector("p").innerText = message;
  }
}

// Hide notification
function remove() {
  const notification = document.getElementById("notification");
  if (notification) {
    notification.style.display = "none";
  }
}
