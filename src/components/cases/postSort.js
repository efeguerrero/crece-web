// Sort Function to sort articles by showing the newest one first
const postSort = (postsData, show) => {
  const dateSort = (a, b) =>
    b.data.dateCreated.getTime() - a.data.dateCreated.getTime();

  //show prop to specify if I want to display ALL posts (0) or a certain number (1, 2, 3, etc.)
  const posts =
    show == 0
      ? postsData.sort(dateSort)
      : postsData.slice(0, show).sort(dateSort);

  return posts;
};

export default postSort;
