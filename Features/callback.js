    // Scenario: 
    // 1. fetchUserData(): Fetches user data from a server.
    // 2. fetchPosts(userId): Fetches posts based on the user ID.
    // 3. fetchComments(postId): Fetches comments based on the post ID.

    // 1. fetchUserData():
    function fetchUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = false; // Simulate an error
                if (error) {
                    reject("Failed to fetch user data");
                } else {
                    console.log("Fetched user data");
                    resolve({ userId: 1 });
                }
            }, 1000);
        });
    }

    // 2. fetchPosts(userId):
    function fetchPosts(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!userId) {
                    reject("Invalid user ID");
                } else {
                    console.log(`Fetched posts for user ${userId}`);
                    resolve([{ postId: 1 }]);
                }
            }, 1000);
        });
    }

    // 3. fetchComments(postId):
    function fetchComments(postId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!postId) {
                    reject("Invalid post ID");
                } else {
                    console.log(`Fetched comments for post ${postId}`);
                    resolve([{ commentId: 1 }]);
                }
            }, 1000);
        });
    }

    // Using async/await with Error Handling
    async function fetchData() {
        try {
            const user = await fetchUserData();
            const posts = await fetchPosts(user.userId);
            const comments = await fetchComments(posts[0].postId);
            console.log("Comments:", comments);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    fetchData();