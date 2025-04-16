// Movie data: Replace with your actual list of 1000 movies
const movies = [
    
    { title: "DEVA A BY ROCKY", link: "https://cybervynx.com/csz1xety5xyh", image: "https://akumachi.com/csz1xety5xyh_t.jpg" },
    { title: "DEVA B BY ROCKY", link: "https://cybervynx.com/fmn595siziif", image: "https://akumachi.com/fmn595siziif_t.jpg" },
    { title: "RUSTOM A BY ROCKY", link: "https://cybervynx.com/rsrkyhlq6u6v", image: "https://akumachi.com/rsrkyhlq6u6v_t.jpg" },
    { title: "RUSTOM B BY ROCKY", link: "https://cybervynx.com/mjqtf7m8i10o", image: "https://akumachi.com/mjqtf7m8i10o_t.jpg" },
    { title: "RUSTOM C BY ROCKY", link: "https://cybervynx.com/yy7jkaa6r0zo", image: "https://akumachi.com/yy7jkaa6r0zo_t.jpg" },
    { title: "ASHOK EP1 BY YAKUZA", link: "https://cybervynx.com/eu1puvx2dgs0", image: "https://akumachi.com/eu1puvx2dgs0_t.jpg" },
    { title: "ASHOK EP2 BY YAKUZA", link: "https://cybervynx.com/m9vee1w6g8hi", image: "https://akumachi.com/m9vee1w6g8hi_t.jpg" },
    { title: "ASHOK EP3 BY YAKUZA", link: "https://cybervynx.com/shahhqxv7frj", image: "https://akumachi.com/shahhqxv7frj_t.jpg" },
    { title: "ASHOK EP4 BY YAKUZA", link: "https://cybervynx.com/zwvv232xq7fw", image: "https://akumachi.com/zwvv232xq7fw_t.jpg" },
    { title: "ASHOK EP5 BY YAKUZA", link: "https://cybervynx.com/5myly5mcrvhm", image: "https://akumachi.com/5myly5mcrvhm_t.jpg" },
    { title: "ASHOK EP6 BY YAKUZA", link: "https://cybervynx.com/9ut5g1jea4zr", image: "https://akumachi.com/9ut5g1jea4zr_t.jpg" },
    { title: "ASHOK EP7 BY YAKUZA", link: "https://cybervynx.com/xmlv0x32j0ab", image: "https://akumachi.com/xmlv0x32j0ab_t.jpg" },
    { title: "ASHOK EP8 BY YAKUZA", link: "https://cybervynx.com/buz82zto6zz8", image: "https://akumachi.com/buz82zto6zz8_t.jpg" },
    { title: "ASHOK EP9 BY YAKUZA", link: "https://cybervynx.com/i5au0aqye1fk", image: "https://akumachi.com/i5au0aqye1fk_t.jpg" },
    { title: "ASHOK EP10 BY YAKUZA", link: "https://cybervynx.com/4livmhh9s90r", image: "https://akumachi.com/4livmhh9s90r_t.jpg" },
    { title: "ASHOK EP11 BY YAKUZA", link: "https://cybervynx.com/6hlfyl9gno4o", image: "https://akumachi.com/6hlfyl9gno4o_t.jpg" },
    { title: "ASHOK EP12 BY YAKUZA", link: "https://cybervynx.com/2o56xu2pe0eb", image: "https://akumachi.com/2o56xu2pe0eb_t.jpg" },
    { title: "ASHOK EP13 BY YAKUZA", link: "https://cybervynx.com/14qhqo0pm7mx", image: "https://akumachi.com/14qhqo0pm7mx_t.jpg" },
    { title: "ASHOOK EP14 BY YAKUZA", link: "https://cybervynx.com/n4lfvit5qjzz", image: "https://akumachi.com/n4lfvit5qjzz_t.jpg" },
    { title: "KAABIL BY ROCKY", link: "https://cybervynx.com/t5vch9cknblw", image: "https://akumachi.com/t5vch9cknblw_t.jpg" },
    { title: "NADAANIYAN A BY ROCKY", link: "https://cybervynx.com/ckju3yz6sr8o", image: "https://akumachi.com/ckju3yz6sr8o_t.jpg" },
    { title: "NADAANIYAN B BY ROCKY", link: "https://cybervynx.com/mnhngquhlzse", image: "https://akumachi.com/mnhngquhlzse_t.jpg" },
    { title: "SANAKBY ROCKY", link: "https://cybervynx.com/ozjj79b7d1ow", image: "https://akumachi.com/ozjj79b7d1ow_t.jpg" },
    { title: "LOVE PER SQUAREBY BY SAVIMBI", link: "https://cybervynx.com/d23uft291olc", image: "https://akumachi.com/d23uft291olc_t.jpg" },
    { title: "SPECIAL 26 BY SAVIMBI", link: "https://cybervynx.com/isqa8peen5qw", image: "https://akumachi.com/isqa8peen5qw_t.jpg" },
    { title: "BICHGADU A", link: "https://cybervynx.com/qve9ndlfil6p", image: "https://akumachi.com/qve9ndlfil6p_t.jpg" },
    { title: "BABY JOHN A BY ROCKY", link: "https://cybervynx.com/sczceyhlz894", image: "https://akumachi.com/sczceyhlz894_t.jpg" },
    { title: "BABY JOHN B BY ROCKY", link: "https://cybervynx.com/6m5066qhafe8", image: "https://akumachi.com/6m5066qhafe8_t.jpg" },
    { title: "MIMI BY ROCKY", link: "https://cybervynx.com/30t1ti1ajn91", image: "https://akumachi.com/30t1ti1ajn91_t.jpg" },

    { title: "DEEWAARBY ROCKY  ", link: "https://cybervynx.com/mf8t5tx0aqu9", image: "https://akumachi.com/9dyqtfsar61m_t.jpg" },
    { title: "KABHI ALVIDA NAA KEHNA BY GAHEZA ", link: "https://cybervynx.com/9dyqtfsar61m", image: "https://akumachi.com/9dyqtfsar61m_t.jpg" },
    { title: "KABHI ALVIDA NAA KHENA BY GAHEZA ", link: "https://cybervynx.com/eydk6apu68qq", image: "https://akumachi.com/eydk6apu68qq_t.jpg" },
    { title: "3 IDIOTS A BY ROCKY", link: "https://cybervynx.com/mngedb0mqjet", image: "https://akumachi.com/mngedb0mqjet_t.jpg" },
    { title: "3 IDIOTS B BY ROCKY ", link: "https://cybervynx.com/d5pdy27tnb6m", image: "https://akumachi.com/d5pdy27tnb6m_t.jpg" },
    { title: "SOORYAVANANSHI A BY ROCKY", link: "https://cybervynx.com/ipjg97sjjhjl", image: "https://akumachi.com/ipjg97sjjhjl_t.jpg" },
    { title: "SOORYAVANANSHI B BY ROCKY", link: "https://cybervynx.com/6vp28vvu3hhx", image: "https://akumachi.com/6vp28vvu3hhx_t.jpg" },
    { title: "RRR A BY ROCKY", link: "https://cybervynx.com/ee9em0bg32t0", image: "https://akumachi.com/dwftxielm1uz_t.jpg" },
    { title: "RRR B BY ROCKY", link: "https://cybervynx.com/fjwm98jqojyg", image: "https://akumachi.com/dwftxielm1uz_t.jpg" },
    { title: "SAAHO A BY ROCKY", link: "https://cybervynx.com/dwftxielm1uz", image: "https://akumachi.com/dwftxielm1uz_t.jpg" },
    { title: "SAAHO B BY ROCKY", link: "https://cybervynx.com/iml2s14vzb35", image: "https://akumachi.com/iml2s14vzb35_t.jpg" },
    { title: "RISHTEY A BY FEY", link: "https://cybervynx.com/5zewvzjsoaxe", image: "https://akumachi.com/5zewvzjsoaxe_t.jpg" },
    { title: "RISHTEY B BY FEY", link: "https://cybervynx.com/7p9mz7dec83d", image: "https://akumachi.com/7p9mz7dec83d_t.jpg" },
    { title: "RISHTEY C BY FEY", link: "https://cybervynx.com/uh1c3vzfetzw", image: "https://akumachi.com/uh1c3vzfetzw_t.jpg" },
    { title: "RISHTEY D BY FEY", link: "https://cybervynx.com/33wzj6l1eie7", image: "https://akumachi.com/33wzj6l1eie7_t.jpg" },
    { title: "SINGHAM AGAINBY BY ROCKY", link: "https://cybervynx.com/6c0l707mpbro", image: "https://akumachi.com/6c0l707mpbro_t.jpg" },
    { title: "VEDA BY GAHEZA", link: "https://cybervynx.com/eghgn7bsbt51", image: "https://akumachi.com/eghgn7bsbt51_t.jpg" },
    { title: "MARTIN A BY FEY", link: "https://cybervynx.com/l7iwinczc9ja", image: "https://akumachi.com/l7iwinczc9ja_t.jpg" },
    { title: "MARTIN B BY FEY", link: "https://cybervynx.com/9nz5pyg0wcz3", image: "https://akumachi.com/9nz5pyg0wcz3_t.jpg" },
    { title: "MARTIN C BY FEY", link: "https://cybervynx.com/2uy9oe9knib1", image: "https://akumachi.com/2uy9oe9knib1_t.jpg" },
    { title: "MARTIN D BY FEY", link: "https://cybervynx.com/vn7tp2zr2c2r", image: "https://akumachi.com/vn7tp2zr2c2r_t.jpg" },
 
    { title: "NIGHT CRAWLER BY ROCKY", link: "https://cybervynx.com/mq06q0nu6lgy", image: "https://akumachi.com/mq06q0nu6lgy_t.jpg" },
    { title: "ROCKY NA JUNIOR GITI NA YANGA BAKOZE AGASOBANUYE", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },
    { title: "Movie 2", link: "https://example.com/movie2", image: "https://example.com/image2.jpg" },

    // Add 1000 more movies here...
];

const movieList = document.getElementById("movie-list");
const searchBar = document.getElementById("search-bar");

// Function to display movies
function displayMovies(filteredMovies) {
    movieList.innerHTML = "";
    filteredMovies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
            <a href="${movie.link}" target="_blank">
                <img src="${movie.image}" alt="${movie.title}" />
                <p>${movie.title}</p>
            </a>
        `;
        movieList.appendChild(movieItem);
    });
}

// Display all on load
displayMovies(movies);

// Filter as you type
searchBar.addEventListener("input", () => {
    const keyword = searchBar.value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(keyword));
    displayMovies(filtered);
});
