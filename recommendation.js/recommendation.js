// Function to recommend a book based on user preferences
function recommendBook(genre) {
  const bookGenres = {
    fiction: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
    fantasy: ["Harry Potter", "The Lord of the Rings", "A Song of Ice and Fire"],
    romance: ["The Notebook", "P.S. I Love You", "Outlander"],
    mystery: ["Gone Girl", "The Girl with the Dragon Tattoo", "Sherlock Holmes"],
  };

  const books = bookGenres[genre];
  if (books) {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
  } else {
    return "Sorry, we don't have recommendations for that genre.";
  }
}

// Function to provide music playlist links based on genre
function getPlaylistLink(genre) {
  const playlistLinks = {
    pop: "https://www.spotify.com/pop-playlist",
    rock: "https://www.spotify.com/rock-playlist",
    jazz: "https://www.spotify.com/jazz-playlist",
    hipHop: "https://www.spotify.com/hiphop-playlist",
  };

  const link = playlistLinks[genre];
  if (link) {
    return link;
  } else {
    return "Sorry, we don't have playlist links for that genre.";
  }
}

// Usage of the functions
const recommendedBook = recommendBook("fantasy");
console.log("Recommended Book:", recommendedBook);

const playlistLink = getPlaylistLink("rock");
console.log("Playlist Link:", playlistLink);
