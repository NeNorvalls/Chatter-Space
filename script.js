let counter = 0; // Start with 0 posts. This variable will track how many posts we've made.

// Add a new post
function addPost() {
  const input = document.getElementById("inputPost").value; // Get the user's input from the textarea

  if (input.trim() !== "") {
    // Check if the input is not just empty spaces
    counter++; // Increment the post counter by 1
    document.getElementById("count").innerText = counter; // Update the displayed post count

    // Create a new post container
    const postDiv = document.createElement("div"); // Create a new div element for the post
    postDiv.className = "post"; // Assign the post class for styling

    // Add the post content
    const p = document.createElement("p"); // Create a paragraph element for the post content
    p.innerText = input; // Set the text content of the paragraph to the user's input
    postDiv.appendChild(p); // Append the paragraph to the post container

    // Add Like button
    const likeButton = document.createElement("button"); // Create a button element for liking the post
    likeButton.innerText = "Like"; // Set the button text to "Like"
    likeButton.onclick = () => likePost(likeButton); // Set the function to call when clicked
    postDiv.appendChild(likeButton); // Add the Like button to the post container

    // Add Comment button
    const commentButton = document.createElement("button"); // Create a button element for commenting
    commentButton.innerText = "Comment"; // Set the button text to "Comment"
    commentButton.onclick = () => commentPost(postDiv); // Set the function to call when clicked
    postDiv.appendChild(commentButton); // Add the Comment button to the post container

    // Add Edit button
    const editButton = document.createElement("button"); // Create a button element for editing the post
    editButton.innerText = "Edit"; // Set the button text to "Edit"
    editButton.onclick = () => editPost(p); // Set the function to call when clicked
    postDiv.appendChild(editButton); // Add the Edit button to the post container

    // Add Delete button
    const deleteButton = document.createElement("button"); // Create a button element for deleting the post
    deleteButton.innerText = "Delete"; // Set the button text to "Delete"
    deleteButton.onclick = () => deletePost(postDiv); // Set the function to call when clicked
    postDiv.appendChild(deleteButton); // Add the Delete button to the post container

    // Append the post to the post-list section
    document.querySelector(".post-list").appendChild(postDiv); // Add the new post to the page's list of posts

    // Clear input field
    document.getElementById("inputPost").value = ""; // Clear the textarea for the next post
  }
}

// Like a post
function likePost(button) {
  button.innerText = button.innerText === "Like" ? "Unlike" : "Like"; // Toggle between "Like" and "Unlike" on button click
  showNotification("You liked a post!"); // Show a notification when a post is liked
}

// Add a comment to a post
function commentPost(postDiv) {
  const comment = prompt("Add your comment:"); // Prompt the user to add a comment
  if (comment && comment.trim() !== "") {
    // Check if the comment is not empty
    const commentParagraph = document.createElement("p"); // Create a paragraph element for the comment
    commentParagraph.className = "comment"; // Assign a class for styling
    commentParagraph.innerText = `Comment: ${comment}`; // Set the comment text
    postDiv.appendChild(commentParagraph); // Append the comment to the post
    showNotification("You added a comment!"); // Show a notification when a comment is added
  }
}

// Edit an existing post
function editPost(postParagraph) {
  const newContent = prompt("Edit your post:", postParagraph.innerText); // Prompt the user to edit their post
  if (newContent !== null && newContent.trim() !== "") {
    // Check if the new content is not empty
    postParagraph.innerText = newContent; // Update the post content
    showNotification("Your post has been updated!"); // Show a notification when the post is updated
  }
}

// Delete an existing post
function deletePost(postDiv) {
  postDiv.remove(); // Remove the post from the page
  counter--; // Decrease the post count by 1
  document.getElementById("count").innerText = counter; // Update the displayed post count
  showNotification("A post has been deleted!"); // Show a notification when a post is deleted
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (notification) {
    notification.style.display = "block"; // Make the notification visible
    notification.querySelector("p").innerText = message; // Set the message in the notification
  }
}

// Hide notification
function remove() {
  const notification = document.getElementById("notification");
  if (notification) {
    notification.style.display = "none"; // Hide the notification
  }
}
