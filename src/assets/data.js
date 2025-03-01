const dramas = [
    {
        "title": "Twinkling Watermelon",
        "year": "2023",
        "rating": "9.2",
        "image": "https://i.mydramalist.com/2w44jE_4s.jpg?v=1"
    },
    {
        "title": "Move to Heaven",
        "year": "2021",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/Rle36_4s.jpg?v=1"
    },
    {
        "title": "The Trauma Code: Heroes on Call",
        "year": "2025",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/735qBe_4s.jpg?v=1"
    },
    {
        "title": "Hospital Playlist Season 2",
        "year": "2021",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/dKY0d_4s.jpg?v=1"
    },
    {
        "title": "Weak Hero Class 1",
        "year": "2022",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/pq2lr_4s.jpg?v=1"
    },
    {
        "title": "Nirvana in Fire",
        "year": "2015",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/kV54ds.jpg?v=1"
    },
    {
        "title": "Alchemy of Souls",
        "year": "2022",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/Beg4z_4s.jpg?v=1"
    },
    {
        "title": "Flower of Evil",
        "year": "2020",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/WAEAp_4s.jpg?v=1"
    },
    {
        "title": "Moving",
        "year": "2023",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/x4kN8X_4s.jpg?v=1"
    },
    {
        "title": "Reply 1988",
        "year": "2015",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/EVe0p_4s.jpg?v=1"
    },
    {
        "title": "Hospital Playlist",
        "year": "2020",
        "rating": "9.1",
        "image": "https://i.mydramalist.com/RXXL6_4s.jpg?v=1"
    },
    {
        "title": "Reset",
        "year": "2022",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/qZyPz_4s.jpg?v=1"
    },
    {
        "title": "Joy of Life",
        "year": "2019",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/qwkz8s.jpg?v=1"
    },
    {
        "title": "Mysterious Lotus Casebook",
        "year": "2023",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/kAozjj_4s.jpg?v=1"
    },
    {
        "title": "Lovely Runner",
        "year": "2024",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/x4K4VE_4s.jpg?v=1"
    },
    {
        "title": "1 Litre no Namida",
        "year": "2005",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/wXjEb_4s.jpg?v=1"
    },
    {
        "title": "My Mister",
        "year": "2018",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/2lb8k_4s.jpg?v=1"
    },
    {
        "title": "When I Fly Towards You",
        "year": "2023",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/1wOO83_4s.jpg?v=1"
    },
    {
        "title": "Hidden Love",
        "year": "2023",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/x4vJO3_4s.jpg?v=1"
    },
    {
        "title": "Joy of Life Season 2",
        "year": "2024",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/60LX6d_4s.jpg?v=1"
    },
    {
        "title": "The Untamed",
        "year": "2019",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/qOrz5s.jpg?v=1"
    },
    {
        "title": "Under the Queen's Umbrella",
        "year": "2022",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/xZNgy_4s.jpg?v=1"
    },
    {
        "title": "Crash Landing on You",
        "year": "2019",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/JBbg8l_4s.jpg?v=1"
    },
    {
        "title": "Love Like the Galaxy: Part 2",
        "year": "2022",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/XYxmO_4s.jpg?v=1"
    },
    {
        "title": "Study Group",
        "year": "2025",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/ABRNyg_4s.jpg?v=1"
    },
    {
        "title": "The Glory Part 2",
        "year": "2023",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/vXjLPq_4s.jpg?v=1"
    },
    {
        "title": "Oh No! Here Comes Trouble",
        "year": "2023",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/4eeWod_4s.jpg?v=1"
    },
    {
        "title": "Mr. Queen",
        "year": "2020",
        "rating": "9.0",
        "image": "https://i.mydramalist.com/qPA42_4s.jpg?v=1"
    },
    {
        "title": "Love Like the Galaxy: Part 1",
        "year": "2022",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/q4PlK_4s.jpg?v=1"
    },
    {
        "title": "Prison Playbook",
        "year": "2017",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/xXK7ys.jpg?v=1"
    },
    {
        "title": "Mother",
        "year": "2018",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/dRPqds.jpg?v=1"
    },
    {
        "title": "Someday or One Day",
        "year": "2019",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/1L7lys.jpg?v=1"
    },
    {
        "title": "Dr. Romantic Season 3",
        "year": "2023",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/d02LlA_4s.jpg?v=1"
    },
    {
        "title": "My Dearest",
        "year": "2023",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/0wxDAr_4s.jpg?v=1"
    },
    {
        "title": "The Spirealm",
        "year": "2024",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/2wgBdE_4s.jpg?v=1"
    },
    {
        "title": "High School Frenemy",
        "year": "2024",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/zBrmeJ_4s.jpg?v=1"
    },
    {
        "title": "My Dearest Part 2",
        "year": "2023",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/kAkAZr_4s.jpg?v=1"
    },
    {
        "title": "Go Ahead",
        "year": "2020",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/exXvQ_4s.jpg?v=1"
    },
    {
        "title": "Miseinen: Mijukuna Oretachi wa Bukiyo ni Shinkochu",
        "year": "2024",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/JBzQvd_4s.jpg?v=1"
    },
    {
        "title": "Alchemy of Souls Season 2: Light and Shadow",
        "year": "2022",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/X06Rd_4s.jpg?v=1"
    },
    {
        "title": "It's Okay to Not Be Okay",
        "year": "2020",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/xw3xX_4s.jpg?v=1"
    },
    {
        "title": "The Glory",
        "year": "2022",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/4v6zJ_4s.jpg?v=1"
    },
    {
        "title": "Navillera",
        "year": "2021",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/wE3AA_4s.jpg?v=1"
    },
    {
        "title": "Extraordinary Attorney Woo",
        "year": "2022",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/dgJJz_4s.jpg?v=1"
    },
    {
        "title": "Signal",
        "year": "2016",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/6wYZO_4s.jpg?v=1"
    },
    {
        "title": "Taxi Driver Season 2",
        "year": "2023",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/2wr8zR_4s.jpg?v=1"
    },
    {
        "title": "The Good Bad Mother",
        "year": "2023",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/E5x540_4s.jpg?v=1"
    },
    {
        "title": "Vincenzo",
        "year": "2021",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/vAnBe_4s.jpg?v=1"
    },
    {
        "title": "The Blood of Youth",
        "year": "2022",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/qBl40_4s.jpg?v=1"
    },
    {
        "title": "Kingdom Season 2",
        "year": "2020",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/mOnjAk_4s.jpg?v=1"
    },
    {
        "title": "Death's Game Part 2",
        "year": "2024",
        "rating": "8.9",
        "image": "https://i.mydramalist.com/XdwWLn_4s.jpg?v=1"
    },
    {
        "title": "Mr. Sunshine",
        "year": "2018",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/vKrdW_4s.jpg?v=1"
    },
    {
        "title": "The Double",
        "year": "2024",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/eYxQB8_4s.jpg?v=1"
    },
    {
        "title": "Imawa no Kuni no Alice Season 2",
        "year": "2022",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/X0qeJ_4s.jpg?v=1"
    },
    {
        "title": "Hikaru no Go",
        "year": "2020",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/6NVRg_4s.jpg?v=1"
    },
    {
        "title": "Mouse",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/XNeKO_4s.jpg?v=1"
    },
    {
        "title": "I Feel You Linger in the Air: Uncut Version",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/d0RdLK_4s.jpg?v=1"
    },
    {
        "title": "Happiness",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/BWXjV_4s.jpg?v=1"
    },
    {
        "title": "Death's Game",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/QJKVK7_4s.jpg?v=1"
    },
    {
        "title": "Blossom",
        "year": "2024",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/mOX152_4s.jpg?v=1"
    },
    {
        "title": "Imawa no Kuni no Alice",
        "year": "2020",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/qP5R0_4s.jpg?v=1"
    },
    {
        "title": "Tomorrow",
        "year": "2022",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/qjBQ2_4s.jpg?v=1"
    },
    {
        "title": "More than Blue: The Series",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/Rl8WV_4s.jpg?v=1"
    },
    {
        "title": "Meet Yourself",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/dPk5e_4s.jpg?v=1"
    },
    {
        "title": "The Story of Ming Lan",
        "year": "2018",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/ZobVJs.jpg?v=1"
    },
    {
        "title": "Healer",
        "year": "2014",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/lBOo4s.jpg?v=1"
    },
    {
        "title": "Taxi Driver",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/2Bkww_4s.jpg?v=1"
    },
    {
        "title": "Love Between Fairy and Devil",
        "year": "2022",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/xJDEr_4s.jpg?v=1"
    },
    {
        "title": "Jack & Joker: U Steal My Heart!",
        "year": "2024",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/1w81bR_4s.jpg?v=1"
    },
    {
        "title": "Goblin",
        "year": "2016",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/JkD8Xs.jpg?v=1"
    },
    {
        "title": "Tale of the Nine-Tailed 1938",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/WPndVP_4s.jpg?v=1"
    },
    {
        "title": "Twenty-Five Twenty-One",
        "year": "2022",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/ROOPo_4s.jpg?v=1"
    },
    {
        "title": "One Piece",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/rNk3AZ_4s.jpg?v=1"
    },
    {
        "title": "The Uncanny Counter",
        "year": "2020",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/v3032_4s.jpg?v=1"
    },
    {
        "title": "Missing: The Other Side Season 2",
        "year": "2022",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/4vzxw_4s.jpg?v=1"
    },
    {
        "title": "Story of Yanxi Palace",
        "year": "2018",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/QBPRg_4s.jpg?v=1"
    },
    {
        "title": "D.P.",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/XkYln_4s.jpg?v=1"
    },
    {
        "title": "Stranger",
        "year": "2017",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/1o3zzs.jpg?v=1"
    },
    {
        "title": "Kingdom",
        "year": "2019",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/d4d1Ws.jpg?v=1"
    },
    {
        "title": "Eternal Love",
        "year": "2017",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/2ZlLE_4s.jpg?v=1"
    },
    {
        "title": "The Red Sleeve",
        "year": "2021",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/2WpKk_4s.jpg?v=1"
    },
    {
        "title": "Queen of Tears",
        "year": "2024",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/pd4DkE_4s.jpg?v=1"
    },
    {
        "title": "Jack & Joker: U Steal My Heart! (Uncut Ver.)",
        "year": "2024",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/pdrn7r_4s.jpg?v=1"
    },
    {
        "title": "Weightlifting Fairy Kim Bok Joo",
        "year": "2016",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/D2X7Ds.jpg?v=1"
    },
    {
        "title": "Daily Dose of Sunshine",
        "year": "2023",
        "rating": "8.8",
        "image": "https://i.mydramalist.com/QJKJP7_4s.jpg?v=1"
    },
    {
        "title": "Guardians of the Dafeng",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/73BkyN_4s.jpg?v=1"
    },
    {
        "title": "Sword Snow Stride",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/4zNWk_4s.jpg?v=1"
    },
    {
        "title": "A Shop for Killers",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/QJNjwg_4s.jpg?v=1"
    },
    {
        "title": "Under the Skin",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/0LODK_4s.jpg?v=1"
    },
    {
        "title": "SKY Castle",
        "year": "2018",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/2wndKO_4s.jpg?v=1"
    },
    {
        "title": "Dr. Romantic Season 2",
        "year": "2020",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/Rr7DEs.jpg?v=1"
    },
    {
        "title": "Love for Love's Sake",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/kAE4pk_4s.jpg?v=1"
    },
    {
        "title": "Youth of May",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/dNO1d_4s.jpg?v=1"
    },
    {
        "title": "Begins Youth",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jQ4Pzz_4s.jpg?v=1"
    },
    {
        "title": "Partners for Justice Season 2",
        "year": "2019",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/enw3es.jpg?v=1"
    },
    {
        "title": "To the Wonder",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/qYwpp8_4s.jpg?v=1"
    },
    {
        "title": "I Am Nobody",
        "year": "2023",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/eYyyEe_4s.jpg?v=1"
    },
    {
        "title": "Story of Kunning Palace",
        "year": "2023",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/Z8gvy7_4s.jpg?v=1"
    },
    {
        "title": "Beyond Evil",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/0l4wY_4s.jpg?v=1"
    },
    {
        "title": "You Are My Glory",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jJVmO_4s.jpg?v=1"
    },
    {
        "title": "Through the Darkness",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/2K8BR_4s.jpg?v=1"
    },
    {
        "title": "Blossoms in Adversity",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/WP3lAR_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Shen Li",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/4ebep1_4s.jpg?v=1"
    },
    {
        "title": "The Devil Judge",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/XJL7Z_4s.jpg?v=1"
    },
    {
        "title": "Moon Lovers: Scarlet Heart Ryeo",
        "year": "2016",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jWJxbs.jpg?v=1"
    },
    {
        "title": "Arthdal Chronicles Part 3: The Prelude to All Legends",
        "year": "2019",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/23m6ws.jpg?v=1"
    },
    {
        "title": "Racket Boys",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/QARr2_4s.jpg?v=1"
    },
    {
        "title": "Life on Mars",
        "year": "2018",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/DX4Yzs.jpg?v=1"
    },
    {
        "title": "First Love: Hatsukoi",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/EmzYp_4s.jpg?v=1"
    },
    {
        "title": "A Journey to Love",
        "year": "2023",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/2wOmn7_4s.jpg?v=1"
    },
    {
        "title": "Arthdal Chronicles Part 2: The Sky Turning Inside Out, Rising Land",
        "year": "2019",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/6o4N2s.jpg?v=1"
    },
    {
        "title": "Dear My Friends",
        "year": "2016",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/2zWk2_4s.jpg?v=1"
    },
    {
        "title": "Six Flying Dragons",
        "year": "2015",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/bBvWjs.jpg?v=1"
    },
    {
        "title": "Love and Redemption",
        "year": "2020",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/wJzKoJ_4s.jpg?v=1"
    },
    {
        "title": "Hometown Cha-Cha-Cha",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/ZeKv1_4s.jpg?v=1"
    },
    {
        "title": "Mystery to Iunakare",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/2KpQR_4s.jpg?v=1"
    },
    {
        "title": "Sweet Home",
        "year": "2020",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/xy8oq_4s.jpg?v=1"
    },
    {
        "title": "The Guest",
        "year": "2018",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/Wb2pWs.jpg?v=1"
    },
    {
        "title": "D.P. Season 2",
        "year": "2023",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/QJ08d6_4s.jpg?v=1"
    },
    {
        "title": "Family by Choice",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/1wKdRb_4s.jpg?v=1"
    },
    {
        "title": "Thai Cave Rescue",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/wvjy1_4s.jpg?v=1"
    },
    {
        "title": "Angels Fall Sometimes",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/WPvDXR_4s.jpg?v=1"
    },
    {
        "title": "Strong Woman Do Bong Soon",
        "year": "2017",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/XZqYJs.jpg?v=1"
    },
    {
        "title": "While You Were Sleeping",
        "year": "2017",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jQV45J_4s.jpg?v=1"
    },
    {
        "title": "The First Responders",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/XnW5J_4s.jpg?v=1"
    },
    {
        "title": "The Penthouse: War in Life",
        "year": "2020",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/QyBA2_4s.jpg?v=1"
    },
    {
        "title": "The Penthouse Season 2: War in Life",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/670YW_4s.jpg?v=1"
    },
    {
        "title": "Ultimate Note",
        "year": "2020",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/prEne_4s.jpg?v=1"
    },
    {
        "title": "Dr. Romantic",
        "year": "2016",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/KxgYRs.jpg?v=1"
    },
    {
        "title": "Peaceful Property",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/1wk4rd_4s.jpg?v=1"
    },
    {
        "title": "Defendant",
        "year": "2017",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/4JDbd_4s.jpg?v=1"
    },
    {
        "title": "See Your Love",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/81JOWA_4s.jpg?v=1"
    },
    {
        "title": "Kill Me, Heal Me",
        "year": "2015",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/p2j0ns.jpg?v=1"
    },
    {
        "title": "My Name",
        "year": "2021",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jD3br_4s.jpg?v=1"
    },
    {
        "title": "Nirvana in Fire Season 2: The Wind Blows in Chang Lin",
        "year": "2017",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/7qA8es.jpg?v=1"
    },
    {
        "title": "Flex X Cop",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/qYbz7B_4s.jpg?v=1"
    },
    {
        "title": "The Judge from Hell",
        "year": "2024",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jQ37oy_4s.jpg?v=1"
    },
    {
        "title": "Jewel in the Palace",
        "year": "2003",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/wJVdns.jpg?v=1"
    },
    {
        "title": "Unnatural",
        "year": "2018",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jYgxb_4s.jpg?v=1"
    },
    {
        "title": "New Life Begins",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/jR0xz_4s.jpg?v=1"
    },
    {
        "title": "Business Proposal",
        "year": "2022",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/v24Pg_4s.jpg?v=1"
    },
    {
        "title": "Revenant",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/2wm4rd_4s.jpg?v=1"
    },
    {
        "title": "Who Rules the World",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jdmAz_4s.jpg?v=1"
    },
    {
        "title": "Bloodhounds",
        "year": "2023",
        "rating": "8.7",
        "image": "https://i.mydramalist.com/vXNd2g_4s.jpg?v=1"
    },
    {
        "title": "Misaeng: Incomplete Life",
        "year": "2014",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jqA1ws.jpg?v=1"
    },
    {
        "title": "The King of Pigs",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/2bO4w_4s.jpg?v=1"
    },
    {
        "title": "Strangers from Hell",
        "year": "2019",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/4p2vds.jpg?v=1"
    },
    {
        "title": "The Long Ballad",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/6klmO_4s.jpg?v=1"
    },
    {
        "title": "Fangs of Fortune",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Bd5Z16_4s.jpg?v=1"
    },
    {
        "title": "Our Beloved Summer",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/4QLgQ_4s.jpg?v=1"
    },
    {
        "title": "Missing: The Other Side",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/wzXQN_4s.jpg?v=1"
    },
    {
        "title": "Mr. Plankton",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/l0QRLe_4s.jpg?v=1"
    },
    {
        "title": "The Worst of Evil",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/BdpXkz_4s.jpg?v=1"
    },
    {
        "title": "18 Again",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/xnNnq_4s.jpg?v=1"
    },
    {
        "title": "The Kidnapping Day",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/0wymE7_4s.jpg?v=1"
    },
    {
        "title": "Chicago Typewriter",
        "year": "2017",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Jkd1js.jpg?v=1"
    },
    {
        "title": "One and Only",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/BLrkR_4s.jpg?v=1"
    },
    {
        "title": "Our Blues",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/48LYQ_4s.jpg?v=1"
    },
    {
        "title": "Hot Stove League",
        "year": "2019",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/ZrX3Os.jpg?v=1"
    },
    {
        "title": "Lighter & Princess",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/ABZpX4_4s.jpg?v=1"
    },
    {
        "title": "The Fiery Priest",
        "year": "2019",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/evbZqs.jpg?v=1"
    },
    {
        "title": "Love Scout",
        "year": "2025",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/nOJQw6_4s.jpg?v=1"
    },
    {
        "title": "Love of the Divine Tree",
        "year": "2025",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/RBJ3Wo_4s.jpg?v=1"
    },
    {
        "title": "Descendants of the Sun",
        "year": "2016",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/vN26Zs.jpg?v=1"
    },
    {
        "title": "My Perfect Stranger",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Z8Rw71_4s.jpg?v=1"
    },
    {
        "title": "3 Nen A Gumi: Ima kara Mina-san wa, Hitojichi Desu",
        "year": "2019",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/ByD15_4s.jpg?v=1"
    },
    {
        "title": "Winter Begonia",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/RLRKY_4s.jpg?v=1"
    },
    {
        "title": "Hanzawa Naoki",
        "year": "2013",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/E50zms.jpg?v=1"
    },
    {
        "title": "Tunnel",
        "year": "2017",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/JkryYs.jpg?v=1"
    },
    {
        "title": "The Bad Kids",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/WADx5_4s.jpg?v=1"
    },
    {
        "title": "Glory of Special Forces",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/1yz6y_4s.jpg?v=1"
    },
    {
        "title": "Mother",
        "year": "2010",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/v8gnD_4s.jpg?v=1"
    },
    {
        "title": "Till the End of the Moon",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Xd23Pd_4s.jpg?v=1"
    },
    {
        "title": "Lost You Forever",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/1wOLbK_4s.jpg?v=1"
    },
    {
        "title": "Battle of Changsha",
        "year": "2014",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/PnWY0s.jpg?v=1"
    },
    {
        "title": "Falling into Your Smile",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/6BgW0_4s.jpg?v=1"
    },
    {
        "title": "Seoul Busters",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jQvQgB_4s.jpg?v=1"
    },
    {
        "title": "Family Matters",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/O8ye8Q_4s.jpg?v=1"
    },
    {
        "title": "Hotel del Luna",
        "year": "2019",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/RApq6s.jpg?v=1"
    },
    {
        "title": "You Are My Hero",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/61RBK_4s.jpg?v=1"
    },
    {
        "title": "Live",
        "year": "2018",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/5o0ges.jpg?v=1"
    },
    {
        "title": "It's Okay, That's Love",
        "year": "2014",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/XB5ex_4s.jpg?v=1"
    },
    {
        "title": "Project S: Skate Our Souls",
        "year": "2017",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/ReywVs.jpg?v=1"
    },
    {
        "title": "Kazoku Game",
        "year": "2013",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jYg4b_4s.jpg?v=1"
    },
    {
        "title": "Law School",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Xk2Dg_4s.jpg?v=1"
    },
    {
        "title": "Light Shop",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/oQYpKY_4s.jpg?v=1"
    },
    {
        "title": "Shogun",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/WPNXoR_4s.jpg?v=1"
    },
    {
        "title": "Children of Nobody",
        "year": "2018",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/2OW0ds.jpg?v=1"
    },
    {
        "title": "Once Again",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/kWPprs.jpg?v=1"
    },
    {
        "title": "Jeongnyeon: The Star Is Born",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jQ3eeO_4s.jpg?v=1"
    },
    {
        "title": "Brush Up Life",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/xroQq_4s.jpg?v=1"
    },
    {
        "title": "Welcome to Samdal-ri",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/wJwdQ1_4s.jpg?v=1"
    },
    {
        "title": "Love Destiny",
        "year": "2018",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/w2bVgs.jpg?v=1"
    },
    {
        "title": "Lovely Us",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/xw8J3_4s.jpg?v=1"
    },
    {
        "title": "My Journey to You",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/RBeOER_4s.jpg?v=1"
    },
    {
        "title": "Ghost Doctor",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/peyDr_4s.jpg?v=1"
    },
    {
        "title": "Cross Fire",
        "year": "2020",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/v6qPe_4s.jpg?v=1"
    },
    {
        "title": "My Liberation Notes",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/jd5jw_4s.jpg?v=1"
    },
    {
        "title": "Eulachacha Waikiki",
        "year": "2018",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/RPjLrs.jpg?v=1"
    },
    {
        "title": "Empress Ki",
        "year": "2013",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/JBpEls.jpg?v=1"
    },
    {
        "title": "Word of Honor",
        "year": "2021",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/BL0bV_4s.jpg?v=1"
    },
    {
        "title": "Juvenile Justice",
        "year": "2022",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/Xq58d_4s.jpg?v=1"
    },
    {
        "title": "Moonlight Mystique",
        "year": "2025",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/zBbLAz_4s.jpg?v=1"
    },
    {
        "title": "Eternal Love of Dream",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/eVR3ns.jpg?v=1"
    },
    {
        "title": "Ossan's Love Returns",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/0w061Y_4s.jpg?v=1"
    },
    {
        "title": "Go Back Couple",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/w0RAYs.jpg?v=1"
    },
    {
        "title": "High School Return of a Gangster",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Z8Bmj1_4s.jpg?v=1"
    },
    {
        "title": "Pyramid Game",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/QJ7qQv_4s.jpg?v=1"
    },
    {
        "title": "Ashes of Love",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/6L3Dps.jpg?v=1"
    },
    {
        "title": "The Gifted",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Q53rWs.jpg?v=1"
    },
    {
        "title": "The First Responders Season 2",
        "year": "2023",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/BdrXdl_4s.jpg?v=1"
    },
    {
        "title": "Silent",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Bk6Y6_4s.jpg?v=1"
    },
    {
        "title": "Good Manager",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/6oKxjs.jpg?v=1"
    },
    {
        "title": "Boku no Ita Jikan",
        "year": "2014",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/BgOOz_4s.jpg?v=1"
    },
    {
        "title": "Lion no Kakurega",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/b3kgAV_4s.jpg?v=1"
    },
    {
        "title": "The Romance of Tiger and Rose",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/dZVWg_4s.jpg?v=1"
    },
    {
        "title": "Flourished Peony",
        "year": "2025",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/ABw80L_4s.jpg?v=1"
    },
    {
        "title": "Empresses in the Palace",
        "year": "2012",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/bvb2Es.jpg?v=1"
    },
    {
        "title": "Amidst a Snowstorm of Love",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/pd8W6E_4s.jpg?v=1"
    },
    {
        "title": "MIU 404",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/xn8z3_4s.jpg?v=1"
    },
    {
        "title": "Big Mouth",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Ee5EO_4s.jpg?v=1"
    },
    {
        "title": "All of Us Are Dead",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/WRQmX_4s.jpg?v=1"
    },
    {
        "title": "Stranger Season 2",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/E5vbjl_4s.jpg?v=1"
    },
    {
        "title": "Duty after School: Part 1",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/QJJ4PW_4s.jpg?v=1"
    },
    {
        "title": "Cruel City",
        "year": "2013",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/RLd8R_4s.jpg?v=1"
    },
    {
        "title": "My Father Is Strange",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/j0p0ds.jpg?v=1"
    },
    {
        "title": "The Bridal Mask",
        "year": "2012",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/r5kLy_4s.jpg?v=1"
    },
    {
        "title": "Tenno no Ryoriban",
        "year": "2015",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/yELd4s.jpg?v=1"
    },
    {
        "title": "Blind",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/x3qE0_4s.jpg?v=1"
    },
    {
        "title": "Money Heist: Korea - Joint Economic Area - Part 2",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/X08VZ_4s.jpg?v=1"
    },
    {
        "title": "The Starry Love",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/4eyn71_4s.jpg?v=1"
    },
    {
        "title": "Love Game in Eastern Fantasy",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/VXOLzy_4s.jpg?v=1"
    },
    {
        "title": "The Longest Day in Chang'an",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/j4WK8s.jpg?v=1"
    },
    {
        "title": "Not Me",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/0kjbY_4s.jpg?v=1"
    },
    {
        "title": "Designated Survivor: 60 Days",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Wmq1Rs.jpg?v=1"
    },
    {
        "title": "Beautiful World",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/ErXmQs.jpg?v=1"
    },
    {
        "title": "Queen Seon Deok",
        "year": "2009",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Z8kn7s.jpg?v=1"
    },
    {
        "title": "Age of Youth",
        "year": "2016",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/bZk8Vs.jpg?v=1"
    },
    {
        "title": "Vigilante",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Z803xO_4s.jpg?v=1"
    },
    {
        "title": "Unmet: Aru Nogekai no Nikki",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/PxyYlX_4s.jpg?v=1"
    },
    {
        "title": "Marry My Husband",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Bd2Dz7_4s.jpg?v=1"
    },
    {
        "title": "Shining for One Thing",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/rD5Y2_4s.jpg?v=1"
    },
    {
        "title": "Bad and Crazy",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/RVbJz_4s.jpg?v=1"
    },
    {
        "title": "Ancient Love Poetry",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/x1v0X_4s.jpg?v=1"
    },
    {
        "title": "Reunion: The Sound of the Providence Season 2",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/0d5O6_4s.jpg?v=1"
    },
    {
        "title": "Arthdal Chronicles Part 1: The Children of Prophecy",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/x2Pyws.jpg?v=1"
    },
    {
        "title": "Enigma",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/kA0688_4s.jpg?v=1"
    },
    {
        "title": "Forever Love",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/rXk5E_4s.jpg?v=1"
    },
    {
        "title": "Black Out",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/2wkJqw_4s.jpg?v=1"
    },
    {
        "title": "Reborn Rich",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Rqp66_4s.jpg?v=1"
    },
    {
        "title": "Bad Guys",
        "year": "2014",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/nOegEs.jpg?v=1"
    },
    {
        "title": "Rebel: Thief Who Stole the People",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Red2Vs.jpg?v=1"
    },
    {
        "title": "Vagabond",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/qboZPs.jpg?v=1"
    },
    {
        "title": "The Bond",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/REv1V_4s.jpg?v=1"
    },
    {
        "title": "Voice",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/BjEp1s.jpg?v=1"
    },
    {
        "title": "Avengers Social Club",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/EDwzbs.jpg?v=1"
    },
    {
        "title": "Tsukuritai Onna to Tabetai Onna Season 2",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/qY37Wz_4s.jpg?v=1"
    },
    {
        "title": "In Family We Trust",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/24LYPs.jpg?v=1"
    },
    {
        "title": "Hi Bye, Mama!",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/43y1Js.jpg?v=1"
    },
    {
        "title": "My Love from the Star",
        "year": "2013",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/d0dQAs.jpg?v=1"
    },
    {
        "title": "Are You the One",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/qY3p8P_4s.jpg?v=1"
    },
    {
        "title": "A Tale of Thousand Stars",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jYl8b_4s.jpg?v=1"
    },
    {
        "title": "The Tale of Lady Ok",
        "year": "2024",
        "rating": "8.6",
        "image": "https://i.mydramalist.com/YYqkOd_4s.jpg?v=1"
    },
    {
        "title": "Just Between Lovers",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/rkKPms.jpg?v=1"
    },
    {
        "title": "365: Repeat the Year",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/kY6Wgs.jpg?v=1"
    },
    {
        "title": "The Long Night",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jgmbB_4s.jpg?v=1"
    },
    {
        "title": "What's Wrong with Secretary Kim",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jr3Dzs.jpg?v=1"
    },
    {
        "title": "Love in the Big City",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/XdzxYp_4s.jpg?v=1"
    },
    {
        "title": "Remembrance of Things Past",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/RE7XP_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider W",
        "year": "2009",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/XJrWp_4s.jpg?v=1"
    },
    {
        "title": "The Master's Sun",
        "year": "2013",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/rNRyms.jpg?v=1"
    },
    {
        "title": "Save Me",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/YYnvyQ_4s.jpg?v=1"
    },
    {
        "title": "Perfect Marriage Revenge",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/d0wgj0_4s.jpg?v=1"
    },
    {
        "title": "One Dollar Lawyer",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/42DRQ_4s.jpg?v=1"
    },
    {
        "title": "Mystic Pop-Up Bar",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/eEkpps.jpg?v=1"
    },
    {
        "title": "The Sleuth of Ming Dynasty",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/vWX22s.jpg?v=1"
    },
    {
        "title": "Doctor John",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jXmvbs.jpg?v=1"
    },
    {
        "title": "Dong Yi",
        "year": "2010",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/WPlBXs.jpg?v=1"
    },
    {
        "title": "The King\u2019s Avatar",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/2O0xEs.jpg?v=1"
    },
    {
        "title": "Good Partner",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/rNgkZj_4s.jpg?v=1"
    },
    {
        "title": "Nobody Knows",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/B3yVzs.jpg?v=1"
    },
    {
        "title": "Revenge of Others",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/BX7AA_4s.jpg?v=1"
    },
    {
        "title": "Girl from Nowhere",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/BwpQ1s.jpg?v=1"
    },
    {
        "title": "Our Secret",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/2lbz2_4s.jpg?v=1"
    },
    {
        "title": "W",
        "year": "2016",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/6wjE0_4s.jpg?v=1"
    },
    {
        "title": "Ouroboros",
        "year": "2015",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Zgg0Os.jpg?v=1"
    },
    {
        "title": "My Little Happiness",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/pRJND_4s.jpg?v=1"
    },
    {
        "title": "Back from the Brink",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/wJjmNk_4s.jpg?v=1"
    },
    {
        "title": "Kairos",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/EN4Wz_4s.jpg?v=1"
    },
    {
        "title": "Guardian",
        "year": "2018",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/QpyE6s.jpg?v=1"
    },
    {
        "title": "Falling Into You",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/QDZL2_4s.jpg?v=1"
    },
    {
        "title": "Fight for My Way",
        "year": "2017",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/nv0kQs.jpg?v=1"
    },
    {
        "title": "Perfect Match",
        "year": "2025",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/NdN6XY_4s.jpg?v=1"
    },
    {
        "title": "To the Moon and Back",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/60Q7V2_4s.jpg?v=1"
    },
    {
        "title": "Hanzawa Naoki Season 2",
        "year": "2020",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/kd2ZO_4s.jpg?v=1"
    },
    {
        "title": "Little Women",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/R6Nkr_4s.jpg?v=1"
    },
    {
        "title": "Boyhood",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jQXjAb_4s.jpg?v=1"
    },
    {
        "title": "Soredemo, Ikite Yuku",
        "year": "2011",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/E0QgW_4s.jpg?v=1"
    },
    {
        "title": "I Hear Your Voice",
        "year": "2013",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/MK62Xs.jpg?v=1"
    },
    {
        "title": "The Day of Becoming You",
        "year": "2021",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/2Pjkd_4s.jpg?v=1"
    },
    {
        "title": "Tonbi",
        "year": "2013",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/nOyZWs.jpg?v=1"
    },
    {
        "title": "Love to Hate You",
        "year": "2023",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/qYyqd5_4s.jpg?v=1"
    },
    {
        "title": "Strange Tales of Tang Dynasty II To the West",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Xd8rNd_4s.jpg?v=1"
    },
    {
        "title": "A Dream of Splendor",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/Ee4Jz_4s.jpg?v=1"
    },
    {
        "title": "Arsenal Military Academy",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jX7xzs.jpg?v=1"
    },
    {
        "title": "One Ordinary Day",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jP5Vd_4s.jpg?v=1"
    },
    {
        "title": "Kyo Kara Ore wa!!",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/x5n1w_4s.jpg?v=1"
    },
    {
        "title": "The Blue Whisper: Part 2",
        "year": "2022",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/jd3xb_4s.jpg?v=1"
    },
    {
        "title": "Goodbye My Princess: Director's Cut",
        "year": "2019",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/XzXYX_4s.jpg?v=1"
    },
    {
        "title": "Umi no Hajimari",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/d0xAve_4s.jpg?v=1"
    },
    {
        "title": "Recipe for Farewell",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/BXmn7_4s.jpg?v=1"
    },
    {
        "title": "Code Blue Season 3",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/gWByos.jpg?v=1"
    },
    {
        "title": "Wonderland of Love",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RBWm7V_4s.jpg?v=1"
    },
    {
        "title": "Bad Genius",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vzX42_4s.jpg?v=1"
    },
    {
        "title": "Chief Detective 1958",
        "year": "2024",
        "rating": "8.5",
        "image": "https://i.mydramalist.com/eYVe1Q_4s.jpg?v=1"
    },
    {
        "title": "Immortal Samsara: Part 2",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/pyeQn_4s.jpg?v=1"
    },
    {
        "title": "Reply 1997",
        "year": "2012",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/2DNbws.jpg?v=1"
    },
    {
        "title": "Love Is Sweet",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/eWDpE_4s.jpg?v=1"
    },
    {
        "title": "Juhan Shuttai!",
        "year": "2016",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/KDR3Ds.jpg?v=1"
    },
    {
        "title": "Voice Season 2",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/xEp0ys.jpg?v=1"
    },
    {
        "title": "Two Weeks",
        "year": "2013",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/MBRLVs.jpg?v=1"
    },
    {
        "title": "Autumn's Concerto",
        "year": "2009",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/04vers.jpg?v=1"
    },
    {
        "title": "Century of Love",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RBXw3z_4s.jpg?v=1"
    },
    {
        "title": "The Prince of Tennis",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/XwDeps.jpg?v=1"
    },
    {
        "title": "Last Twilight",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/qYq3LP_4s.jpg?v=1"
    },
    {
        "title": "The Imperial Coroner",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/R530z_4s.jpg?v=1"
    },
    {
        "title": "Stay with Me",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/E5vgQm_4s.jpg?v=1"
    },
    {
        "title": "Le Coup de Foudre",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/g2WKns.jpg?v=1"
    },
    {
        "title": "Love Me, Love My Voice",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Bd0edb_4s.jpg?v=1"
    },
    {
        "title": "Thirty but Seventeen",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/0vVX7s.jpg?v=1"
    },
    {
        "title": "Pluto",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/73X4eD_4s.jpg?v=1"
    },
    {
        "title": "Destined",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/4e107Q_4s.jpg?v=1"
    },
    {
        "title": "Itaewon Class",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/kOpKms.jpg?v=1"
    },
    {
        "title": "Mad for Each Other",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/xJ7pr_4s.jpg?v=1"
    },
    {
        "title": "Forever and Ever",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/BLPL7_4s.jpg?v=1"
    },
    {
        "title": "A Murderous Affair in Horizon Tower",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jxkKr_4s.jpg?v=1"
    },
    {
        "title": "Doom at Your Service",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vlNOX_4s.jpg?v=1"
    },
    {
        "title": "Squid Game",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/X6vkX_4s.jpg?v=1"
    },
    {
        "title": "To Fly with You",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/e4248_4s.jpg?v=1"
    },
    {
        "title": "Pachinko Season 2",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jQ32OJ_4s.jpg?v=1"
    },
    {
        "title": "Legally Romance",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vbY2g_4s.jpg?v=1"
    },
    {
        "title": "The Princess's Man",
        "year": "2011",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/MX2zns.jpg?v=1"
    },
    {
        "title": "The Love You Give Me",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/2woeg2_4s.jpg?v=1"
    },
    {
        "title": "Go Go Squid!",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RAVoos.jpg?v=1"
    },
    {
        "title": "Liar Game 2",
        "year": "2009",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jzjEB_4s.jpg?v=1"
    },
    {
        "title": "Unknown",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/1wQ3K7_4s.jpg?v=1"
    },
    {
        "title": "Tell Me That You Love Me",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Xde5md_4s.jpg?v=1"
    },
    {
        "title": "Killer and Healer",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Bo4PV_4s.jpg?v=1"
    },
    {
        "title": "The World Between Us",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/AvLRgs.jpg?v=1"
    },
    {
        "title": "Partners for Justice",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/8pBZDs.jpg?v=1"
    },
    {
        "title": "The Rebel Princess",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/ByBg1_4s.jpg?v=1"
    },
    {
        "title": "F4 Thailand: Boys Over Flowers",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/BYKWb_4s.jpg?v=1"
    },
    {
        "title": "Time and Him Are Just Right",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vwqdq_4s.jpg?v=1"
    },
    {
        "title": "War of Faith",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/WP37WX_4s.jpg?v=1"
    },
    {
        "title": "The Heart Killers: Uncut",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Nd4NdY_4s.jpg?v=1"
    },
    {
        "title": "My School President",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/0Z8Ve_4s.jpg?v=1"
    },
    {
        "title": "Knight Flower",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/60pKAO_4s.jpg?v=1"
    },
    {
        "title": "My Stand-In",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vXqebq_4s.jpg?v=1"
    },
    {
        "title": "Kleun Cheewit",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/qwJo0s.jpg?v=1"
    },
    {
        "title": "Ruyi's Royal Love in the Palace",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/4wBQrs.jpg?v=1"
    },
    {
        "title": "The Blossoming Love",
        "year": "2025",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/zBb8dz_4s.jpg?v=1"
    },
    {
        "title": "Connection",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/0wvlXe_4s.jpg?v=1"
    },
    {
        "title": "Lost Romance",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/pORmVs.jpg?v=1"
    },
    {
        "title": "Immortal Samsara: Part 1",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/QZ3X4_4s.jpg?v=1"
    },
    {
        "title": "Because This Is My First Life",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/PdBoys.jpg?v=1"
    },
    {
        "title": "Castaway Diva",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/2wDxoR_4s.jpg?v=1"
    },
    {
        "title": "Love All Play",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/k8eW8_4s.jpg?v=1"
    },
    {
        "title": "Happy Birthday",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Vbnw0s.jpg?v=1"
    },
    {
        "title": "Pachinko",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Ro3Ao_4s.jpg?v=1"
    },
    {
        "title": "The Sign",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RBWgjP_4s.jpg?v=1"
    },
    {
        "title": "Will Love in Spring",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RBJAlV_4s.jpg?v=1"
    },
    {
        "title": "Dali and the Cocky Prince",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Z6oP7_4s.jpg?v=1"
    },
    {
        "title": "Seasons of Blossom",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/QDnoY_4s.jpg?v=1"
    },
    {
        "title": "The Atypical Family",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/kAWyDd_4s.jpg?v=1"
    },
    {
        "title": "Love You Seven Times",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/rN2L6Z_4s.jpg?v=1"
    },
    {
        "title": "Moon Embracing the Sun",
        "year": "2012",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/dY3kAs.jpg?v=1"
    },
    {
        "title": "The Confidence Man JP",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Wwyk3_4s.jpg?v=1"
    },
    {
        "title": "It's Okay, That's Friendship",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/rl6Vp_4s.jpg?v=1"
    },
    {
        "title": "Lost",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vKrp8_4s.jpg?v=1"
    },
    {
        "title": "Fake It Till You Make It",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/rNk3dj_4s.jpg?v=1"
    },
    {
        "title": "The Rise of Phoenixes",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Xbz5xs.jpg?v=1"
    },
    {
        "title": "Boku Dake ga Inai Machi",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/oV0bks.jpg?v=1"
    },
    {
        "title": "Hidamari ga Kikoeru",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/d0Jp5g_4s.jpg?v=1"
    },
    {
        "title": "Angel's Last Mission: Love",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/10Y8ys.jpg?v=1"
    },
    {
        "title": "Dashing Youth",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Z8W0l8_4s.jpg?v=1"
    },
    {
        "title": "The Rise of Ning",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/YYmZZQ_4s.jpg?v=1"
    },
    {
        "title": "Skate Into Love",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/j2QeOs.jpg?v=1"
    },
    {
        "title": "Circle",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/rkVXDs.jpg?v=1"
    },
    {
        "title": "Tsukuritai Onna to Tabetai Onna",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/x4m0ly_4s.jpg?v=1"
    },
    {
        "title": "Unforgettable Love",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/w6yWJ_4s.jpg?v=1"
    },
    {
        "title": "If You Wish Upon Me",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/q4pyP_4s.jpg?v=1"
    },
    {
        "title": "Queen In Hyun's Man",
        "year": "2012",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/9oVZEs.jpg?v=1"
    },
    {
        "title": "Trillion Game",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/qYVRoz_4s.jpg?v=1"
    },
    {
        "title": "4Minutes (Sultrier Version)",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/yWVw2R_4s.jpg?v=1"
    },
    {
        "title": "Project S: Side by Side",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/pllDb_4s.jpg?v=1"
    },
    {
        "title": "Kaizoku Sentai Gokaiger",
        "year": "2011",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/l0PqOe_4s.jpg?v=1"
    },
    {
        "title": "Gyeongseong Creature",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/E5lok0_4s.jpg?v=1"
    },
    {
        "title": "When the Camellia Blooms",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jAYOrs.jpg?v=1"
    },
    {
        "title": "Summer Strike",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/eOwPK_4s.jpg?v=1"
    },
    {
        "title": "Fall in Love",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/dmqvD_4s.jpg?v=1"
    },
    {
        "title": "Work Later, Drink Now",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RNw0z_4s.jpg?v=1"
    },
    {
        "title": "Sweet Teeth",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/j6Q8w_4s.jpg?v=1"
    },
    {
        "title": "Kono Sekai no Katasumi ni",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/VQ4xLs.jpg?v=1"
    },
    {
        "title": "Medical Examiner Dr. Qin",
        "year": "2016",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/REgPx_4s.jpg?v=1"
    },
    {
        "title": "Snowdrop",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RKBWE_4s.jpg?v=1"
    },
    {
        "title": "Crush",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/B4R0z_4s.jpg?v=1"
    },
    {
        "title": "Only Boo!",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jQ2jNr_4s.jpg?v=1"
    },
    {
        "title": "The Crowned Clown",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/4JZkk_4s.jpg?v=1"
    },
    {
        "title": "Put Your Head on My Shoulder",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/RBk4BR_4s.jpg?v=1"
    },
    {
        "title": "Scarlet Heart",
        "year": "2011",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/jQ3k6J_4s.jpg?v=1"
    },
    {
        "title": "dele",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/VbdOys.jpg?v=1"
    },
    {
        "title": "Love Scenery",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/e52RW_4s.jpg?v=1"
    },
    {
        "title": "Under the Power",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/ZrKWJs.jpg?v=1"
    },
    {
        "title": "Duel",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/82x4Qs.jpg?v=1"
    },
    {
        "title": "Under the Skin Season 2",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/4ejYdQ_4s.jpg?v=1"
    },
    {
        "title": "Parasyte: The Grey",
        "year": "2024",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Xdgwjp_4s.jpg?v=1"
    },
    {
        "title": "Yumi's Cells",
        "year": "2021",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/4JzlJ_4s.jpg?v=1"
    },
    {
        "title": "Strange Tales of Tang Dynasty",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/j75dv_4s.jpg?v=1"
    },
    {
        "title": "See You in My 19th Life",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/0wBjD4_4s.jpg?v=1"
    },
    {
        "title": "Player",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/q2pD8s.jpg?v=1"
    },
    {
        "title": "Melo Movie",
        "year": "2025",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/YYlemA_4s.jpg?v=1"
    },
    {
        "title": "Hello Monster",
        "year": "2015",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/dRYAes.jpg?v=1"
    },
    {
        "title": "My Unfamiliar Family",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/woN2J_4s.jpg?v=1"
    },
    {
        "title": "Koi wa Tsuzuku yo Doko Made mo",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/r7EV2_4s.jpg?v=1"
    },
    {
        "title": "A Time Called You",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/BdpgYz_4s.jpg?v=1"
    },
    {
        "title": "Ever Night",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/mje63s.jpg?v=1"
    },
    {
        "title": "Pit Babe: Uncut",
        "year": "2023",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Z8rz8j_4s.jpg?v=1"
    },
    {
        "title": "When We Were Young",
        "year": "2018",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/Krq7js.jpg?v=1"
    },
    {
        "title": "My Country: The New Age",
        "year": "2019",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/WNgPRs.jpg?v=1"
    },
    {
        "title": "Reunion: The Sound of the Providence",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/kj8qw_4s.jpg?v=1"
    },
    {
        "title": "Train",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/kdEBO_4s.jpg?v=1"
    },
    {
        "title": "JIN Season 2",
        "year": "2011",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/MgOvPs.jpg?v=1"
    },
    {
        "title": "Memorist",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/eEw3ds.jpg?v=1"
    },
    {
        "title": "Tale of the Nine-Tailed",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/2kjdk_4s.jpg?v=1"
    },
    {
        "title": "Nanba MG5",
        "year": "2022",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/vrOgX_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Build",
        "year": "2017",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/YYgzgP_4s.jpg?v=1"
    },
    {
        "title": "Crash Course in Romance",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wJxjlY_4s.jpg?v=1"
    },
    {
        "title": "Princess Pearl",
        "year": "1998",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/WPe7Ps.jpg?v=1"
    },
    {
        "title": "Jumong",
        "year": "2006",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/0wv3Ns.jpg?v=1"
    },
    {
        "title": "The Blue Whisper: Part 1",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/dqjKb_4s.jpg?v=1"
    },
    {
        "title": "Daughters",
        "year": "2020",
        "rating": "8.4",
        "image": "https://i.mydramalist.com/deqe0_4s.jpg?v=1"
    },
    {
        "title": "The World of the Married",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/W3gKXs.jpg?v=1"
    },
    {
        "title": "From Now On, Showtime!",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/k8W4r_4s.jpg?v=1"
    },
    {
        "title": "Military Prosecutor Doberman",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wYL3A_4s.jpg?v=1"
    },
    {
        "title": "Bad Buddy",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kZdb8_4s.jpg?v=1"
    },
    {
        "title": "Like in the Movies",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XO6Ew_4s.jpg?v=1"
    },
    {
        "title": "Love and Destiny",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0vy2ks.jpg?v=1"
    },
    {
        "title": "My Sweet Mobster",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/60zJ2O_4s.jpg?v=1"
    },
    {
        "title": "The Veil",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Xkn8n_4s.jpg?v=1"
    },
    {
        "title": "Mad Dog",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/pklKDs.jpg?v=1"
    },
    {
        "title": "Love Me If You Dare",
        "year": "2015",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/nABAWs.jpg?v=1"
    },
    {
        "title": "Voice Season 3: City of Accomplices",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/z708es.jpg?v=1"
    },
    {
        "title": "Secret",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/o7D8ks.jpg?v=1"
    },
    {
        "title": "The Youth Memories",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kAv4ek_4s.jpg?v=1"
    },
    {
        "title": "I'm Not a Robot",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/X4LAds.jpg?v=1"
    },
    {
        "title": "Good Doctor",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wg4g1_4s.jpg?v=1"
    },
    {
        "title": "The Good Detective",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RRz2E_4s.jpg?v=1"
    },
    {
        "title": "Grand Maison Tokyo",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/v8gBZ_4s.jpg?v=1"
    },
    {
        "title": "Pinocchio",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1zDn5_4s.jpg?v=1"
    },
    {
        "title": "99.9: Keiji Senmon Bengoshi Season 2",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EYmo7s.jpg?v=1"
    },
    {
        "title": "Extraordinary You",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/E24zps.jpg?v=1"
    },
    {
        "title": "Hi Venus",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/QzvQW_4s.jpg?v=1"
    },
    {
        "title": "Be Reborn",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kBygj_4s.jpg?v=1"
    },
    {
        "title": "Lie After Lie",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kxDvw_4s.jpg?v=1"
    },
    {
        "title": "The Legend of the Blue Sea",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/BjZj6s.jpg?v=1"
    },
    {
        "title": "The Princess Wei Young",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/n0qz6s.jpg?v=1"
    },
    {
        "title": "Sell Your Haunted House",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/v6LQB_4s.jpg?v=1"
    },
    {
        "title": "Konto ga Hajimaru",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/dNd70_4s.jpg?v=1"
    },
    {
        "title": "My Roommate Is a Detective",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/274EEs.jpg?v=1"
    },
    {
        "title": "Legend of Fu Yao",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/6y7YOs.jpg?v=1"
    },
    {
        "title": "Be Melodramatic",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wnqens.jpg?v=1"
    },
    {
        "title": "Amanza",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ZWd6O_4s.jpg?v=1"
    },
    {
        "title": "The Secret of Us",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/rNzXKZ_4s.jpg?v=1"
    },
    {
        "title": "Extracurricular",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/27Ry2s.jpg?v=1"
    },
    {
        "title": "Full House",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/81g0As.jpg?v=1"
    },
    {
        "title": "The Forbidden Flower",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/x46p4E_4s.jpg?v=1"
    },
    {
        "title": "A Familiar Stranger",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/JBADzm_4s.jpg?v=1"
    },
    {
        "title": "Asa ga Kita",
        "year": "2015",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/7q3wbs.jpg?v=1"
    },
    {
        "title": "Good Doctor",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Mg3k1s.jpg?v=1"
    },
    {
        "title": "Douluo Continent",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XzL1q_4s.jpg?v=1"
    },
    {
        "title": "Maiden Holmes",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/eWVRW_4s.jpg?v=1"
    },
    {
        "title": "Nine: Nine Times Time Travel",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/KpPWJs.jpg?v=1"
    },
    {
        "title": "Doctor Prisoner",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RWnmos.jpg?v=1"
    },
    {
        "title": "Kounodori",
        "year": "2015",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ByD4A_4s.jpg?v=1"
    },
    {
        "title": "Exclusive Fairytale",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kA73vr_4s.jpg?v=1"
    },
    {
        "title": "Soundtrack #1",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wd6xb_4s.jpg?v=1"
    },
    {
        "title": "JIN",
        "year": "2009",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Rk5vgs.jpg?v=1"
    },
    {
        "title": "Koi Desu: Yankee-kun to Hakujou Garu",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Xx04p_4s.jpg?v=1"
    },
    {
        "title": "The Mysterious Class",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RlEAY_4s.jpg?v=1"
    },
    {
        "title": "The Uncanny Counter Season 2: Counter Punch",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jQ05Vz_4s.jpg?v=1"
    },
    {
        "title": "Team Bulldog: Off-duty Investigation",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qAvY2s.jpg?v=1"
    },
    {
        "title": "I Feel You Linger in the Air",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1w4PO6_4s.jpg?v=1"
    },
    {
        "title": "Birthcare Center",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XOYRZ_4s.jpg?v=1"
    },
    {
        "title": "Bitter Blood",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/6yZYgs.jpg?v=1"
    },
    {
        "title": "P.S. I Hate You",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/B8JrA_4s.jpg?v=1"
    },
    {
        "title": "Age of Youth Season 2",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/gWz4Ws.jpg?v=1"
    },
    {
        "title": "Moonlight",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1Pv03_4s.jpg?v=1"
    },
    {
        "title": "My Calorie Boy",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XWLNw_4s.jpg?v=1"
    },
    {
        "title": "N no Tame ni",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/E0Qb0_4s.jpg?v=1"
    },
    {
        "title": "Her Private Life",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/AvL7vs.jpg?v=1"
    },
    {
        "title": "Side Story of Fox Volant",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/eB0Xd_4s.jpg?v=1"
    },
    {
        "title": "Come and Hug Me",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/X8Bwqs.jpg?v=1"
    },
    {
        "title": "A League of Nobleman",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/eYY30d_4s.jpg?v=1"
    },
    {
        "title": "Doctor X Season 5",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/NvDjvs.jpg?v=1"
    },
    {
        "title": "The Time of Fever",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0weBq4_4s.jpg?v=1"
    },
    {
        "title": "Bokura wa Kiseki de Dekite Iru",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XXOkn_4s.jpg?v=1"
    },
    {
        "title": "Pride",
        "year": "2004",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0XArr_4s.jpg?v=1"
    },
    {
        "title": "A River Runs Through It",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/BdDPKR_4s.jpg?v=1"
    },
    {
        "title": "Ugly Alert",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/akwJds.jpg?v=1"
    },
    {
        "title": "Nijiiro Karute",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jYYkJ_4s.jpg?v=1"
    },
    {
        "title": "Sh**ting Stars",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/BAwvb_4s.jpg?v=1"
    },
    {
        "title": "Love Next Door",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/x4ngkw_4s.jpg?v=1"
    },
    {
        "title": "Confession",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wwN6As.jpg?v=1"
    },
    {
        "title": "Voice Season 4: Judgment Hour",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Qoj34_4s.jpg?v=1"
    },
    {
        "title": "One Day Off",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/pdBK8n_4s.jpg?v=1"
    },
    {
        "title": "Cold Case: Shinjitsu no Tobira",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/55Noes.jpg?v=1"
    },
    {
        "title": "High&Low: The Story of S.W.O.R.D.",
        "year": "2015",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/oVRgks.jpg?v=1"
    },
    {
        "title": "The Forbidden Marriage",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1DPrK_4s.jpg?v=1"
    },
    {
        "title": "Scent of Time",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RBPoJx_4s.jpg?v=1"
    },
    {
        "title": "Vampire Prosecutor Season 2",
        "year": "2012",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/AB71Ls.jpg?v=1"
    },
    {
        "title": "My Roommate Is a Gumiho",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/xJdOy_4s.jpg?v=1"
    },
    {
        "title": "Psychopath Diary",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2g4yWs.jpg?v=1"
    },
    {
        "title": "I Don't Want to Be Friends with You",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/k36VO_4s.jpg?v=1"
    },
    {
        "title": "Your Sky",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/nO2VO6_4s.jpg?v=1"
    },
    {
        "title": "100 Days My Prince",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/p0yXrs.jpg?v=1"
    },
    {
        "title": "Yumi's Cells Season 2",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qe1J2_4s.jpg?v=1"
    },
    {
        "title": "The Hope",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/x42noq_4s.jpg?v=1"
    },
    {
        "title": "The Lost Tomb 2",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wnnJ1s.jpg?v=1"
    },
    {
        "title": "City Hunter",
        "year": "2011",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/a81mls.jpg?v=1"
    },
    {
        "title": "God's Gift: 14 Days",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/mOxLqs.jpg?v=1"
    },
    {
        "title": "Live Surgery Room",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/BdmYbV_4s.jpg?v=1"
    },
    {
        "title": "The On1y One",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/KpzV8D_4s.jpg?v=1"
    },
    {
        "title": "Gaus Electronics",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ZlY8J_4s.jpg?v=1"
    },
    {
        "title": "Nobunaga Concerto",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/E0QbO_4s.jpg?v=1"
    },
    {
        "title": "True Beauty",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qP2kK_4s.jpg?v=1"
    },
    {
        "title": "Wonderful World",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wJlbEY_4s.jpg?v=1"
    },
    {
        "title": "Three Kingdoms",
        "year": "2010",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/vdQX2s.jpg?v=1"
    },
    {
        "title": "Bloody Monday",
        "year": "2008",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/X6Yox_4s.jpg?v=1"
    },
    {
        "title": "A Bloody Lucky Day",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kAXnyd_4s.jpg?v=1"
    },
    {
        "title": "Blank Season 2",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0wv2AO_4s.jpg?v=1"
    },
    {
        "title": "My Fated Boy",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/dnLeA_4s.jpg?v=1"
    },
    {
        "title": "They Kiss Again",
        "year": "2007",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kARmks.jpg?v=1"
    },
    {
        "title": "At a Distance, Spring Is Green",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2Pxe2_4s.jpg?v=1"
    },
    {
        "title": "Search: WWW",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/6peeWs.jpg?v=1"
    },
    {
        "title": "The Nokdu Flower",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/kXL5bs.jpg?v=1"
    },
    {
        "title": "One Spring Night",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0lAZO_4s.jpg?v=1"
    },
    {
        "title": "Gu Family Book",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/doREzs.jpg?v=1"
    },
    {
        "title": "The Tale of Nokdu",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/23k3Os.jpg?v=1"
    },
    {
        "title": "Five Enough",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/WdX5ms.jpg?v=1"
    },
    {
        "title": "Fourever You (Uncut Ver.)",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/LwzPK7_4s.jpg?v=1"
    },
    {
        "title": "He Is Psychometric",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qqPxds.jpg?v=1"
    },
    {
        "title": "Maou",
        "year": "2008",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ABer3s.jpg?v=1"
    },
    {
        "title": "The Hymn of Death",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/g2Jxrs.jpg?v=1"
    },
    {
        "title": "Don't Disturb My Study",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1Xrb6_4s.jpg?v=1"
    },
    {
        "title": "God's Quiz: Reboot",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qqYj0s.jpg?v=1"
    },
    {
        "title": "The Beauty Inside",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Xeyjds.jpg?v=1"
    },
    {
        "title": "Saka no Tochu no Ie",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jQEO1r_4s.jpg?v=1"
    },
    {
        "title": "Ping Pong Life",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/w81wJs.jpg?v=1"
    },
    {
        "title": "Money Heist: Korea - Joint Economic Area - Part 1",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EzEB5_4s.jpg?v=1"
    },
    {
        "title": "The Oath of Love",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/k2Ql8_4s.jpg?v=1"
    },
    {
        "title": "Tengoku to Jigoku: Psychona Futari",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2EZ3E_4s.jpg?v=1"
    },
    {
        "title": "Class of Lies",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1qvQys.jpg?v=1"
    },
    {
        "title": "Kotaro wa Hitorigurashi",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Wql6W_4s.jpg?v=1"
    },
    {
        "title": "She Makes My Heart Flutter",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1YXkd_4s.jpg?v=1"
    },
    {
        "title": "The Warp Effect",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/rB13E_4s.jpg?v=1"
    },
    {
        "title": "Tokyo MER: Hashiru Kinkyuukyuumeishitsu",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Rd6yo_4s.jpg?v=1"
    },
    {
        "title": "Couple of Mirrors",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/pbL1r_4s.jpg?v=1"
    },
    {
        "title": "Kieta Hatsukoi",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/eqKyp_4s.jpg?v=1"
    },
    {
        "title": "Liar Game",
        "year": "2007",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EzD4l_4s.jpg?v=1"
    },
    {
        "title": "The Sound of Your Heart",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EmBz0_4s.jpg?v=1"
    },
    {
        "title": "No Gain, No Love",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/pd3WYr_4s.jpg?v=1"
    },
    {
        "title": "Perfect and Casual",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jgAAw_4s.jpg?v=1"
    },
    {
        "title": "Hua Jai Sila",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/rq3XZs.jpg?v=1"
    },
    {
        "title": "Gannibal",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/6xVkX_4s.jpg?v=1"
    },
    {
        "title": "Code Blue Season 2",
        "year": "2010",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/JZmlJs.jpg?v=1"
    },
    {
        "title": "99.9: Keiji Senmon Bengoshi",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/exeee_4s.jpg?v=1"
    },
    {
        "title": "We Best Love: No. 1 For You",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/dBdO5_4s.jpg?v=1"
    },
    {
        "title": "My Girlfriend Is an Alien",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jVPQvs.jpg?v=1"
    },
    {
        "title": "The King's Affection",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XVVjx_4s.jpg?v=1"
    },
    {
        "title": "Triage",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EBnZm_4s.jpg?v=1"
    },
    {
        "title": "Shinya Shokudo",
        "year": "2009",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2wVPks.jpg?v=1"
    },
    {
        "title": "Delicious Romance",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XV37p_4s.jpg?v=1"
    },
    {
        "title": "Iljimae",
        "year": "2008",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ak8r9s.jpg?v=1"
    },
    {
        "title": "SPEC: Birth",
        "year": "2010",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wQxy8_4s.jpg?v=1"
    },
    {
        "title": "Doctor X Season 3",
        "year": "2014",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ZNE5q_4s.jpg?v=1"
    },
    {
        "title": "Bloody Monday Season 2",
        "year": "2010",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Xd1WXs.jpg?v=1"
    },
    {
        "title": "Young Blood",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/QjymYs.jpg?v=1"
    },
    {
        "title": "A Love So Beautiful",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ly7wJs.jpg?v=1"
    },
    {
        "title": "Call It Love",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1wm5R5_4s.jpg?v=1"
    },
    {
        "title": "Smells Like Green Spirit",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/eYmzZY_4s.jpg?v=1"
    },
    {
        "title": "The Gifted Graduation",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/BDBgq_4s.jpg?v=1"
    },
    {
        "title": "Shinya Shokudo 2",
        "year": "2011",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/rxkyjs.jpg?v=1"
    },
    {
        "title": "S.C.I",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qwk4Ds.jpg?v=1"
    },
    {
        "title": "The Sword and the Brocade",
        "year": "2021",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/vA588_4s.jpg?v=1"
    },
    {
        "title": "Ore no Hanashi wa Nagai",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/E0Q4O_4s.jpg?v=1"
    },
    {
        "title": "Here We Meet Again",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RBYLxx_4s.jpg?v=1"
    },
    {
        "title": "Legal High 2",
        "year": "2013",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/O8L5Ps.jpg?v=1"
    },
    {
        "title": "An Ancient Love Song",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wJW2PN_4s.jpg?v=1"
    },
    {
        "title": "Ancient Detective",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/1E1ARs.jpg?v=1"
    },
    {
        "title": "Bokura no Shokutaku",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0wzn84_4s.jpg?v=1"
    },
    {
        "title": "The Loyal Pin",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/4ej3oQ_4s.jpg?v=1"
    },
    {
        "title": "Three-Body",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/dPP3D_4s.jpg?v=1"
    },
    {
        "title": "Tomb of the Sea",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/NrwPns.jpg?v=1"
    },
    {
        "title": "Oh My Ghost",
        "year": "2015",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/bvp1Vs.jpg?v=1"
    },
    {
        "title": "Tree With Deep Roots",
        "year": "2011",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0wgvYs.jpg?v=1"
    },
    {
        "title": "Every You, Every me (Director's Cut.)",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/g0mrjr_4s.jpg?v=1"
    },
    {
        "title": "Rookie Cops",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/vLV6B_4s.jpg?v=1"
    },
    {
        "title": "My Secret Bride",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/EDLEOs.jpg?v=1"
    },
    {
        "title": "Terius Behind Me",
        "year": "2018",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/egd3Es.jpg?v=1"
    },
    {
        "title": "Hit the Spot",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/0Z3WK_4s.jpg?v=1"
    },
    {
        "title": "Moonlight Chicken",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2wrxWW_4s.jpg?v=1"
    },
    {
        "title": "Chef Hua",
        "year": "2020",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/6888Ks.jpg?v=1"
    },
    {
        "title": "A Little Reunion",
        "year": "2019",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XwYbxs.jpg?v=1"
    },
    {
        "title": "Special Affairs Team TEN",
        "year": "2011",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/ElWBps.jpg?v=1"
    },
    {
        "title": "Samurai Sentai Shinkenger",
        "year": "2009",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/j6zoz_4s.jpg?v=1"
    },
    {
        "title": "My Cherie Amour",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jQ3LJy_4s.jpg?v=1"
    },
    {
        "title": "Kounodori Season 2",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Wrbj5s.jpg?v=1"
    },
    {
        "title": "Spare Me Your Mercy",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/YYqojz_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider OOO",
        "year": "2010",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/jo8Kr_4s.jpg?v=1"
    },
    {
        "title": "To Sir, with Love",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/QDyP4_4s.jpg?v=1"
    },
    {
        "title": "Journey to the West",
        "year": "1996",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/WyvOW_4s.jpg?v=1"
    },
    {
        "title": "Coffee Prince",
        "year": "2007",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/LwBY3s.jpg?v=1"
    },
    {
        "title": "Love O2O",
        "year": "2016",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/b2rxLs.jpg?v=1"
    },
    {
        "title": "Suspicious Partner",
        "year": "2017",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/vQvO2s.jpg?v=1"
    },
    {
        "title": "Celebrity",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pdK07b_4s.jpg?v=1"
    },
    {
        "title": "Again My Life",
        "year": "2022",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/XDKww_4s.jpg?v=1"
    },
    {
        "title": "Divorce Attorney Shin",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/2wrWE2_4s.jpg?v=1"
    },
    {
        "title": "Graceful Family",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XwLgws.jpg?v=1"
    },
    {
        "title": "Maiko-san Chi no Makanai-san",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/dpqE0_4s.jpg?v=1"
    },
    {
        "title": "Super Junior: The Last Man Standing",
        "year": "2023",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/qBY3Q_4s.jpg?v=1"
    },
    {
        "title": "Novoland: Pearl Eclipse",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/QRwg7_4s.jpg?v=1"
    },
    {
        "title": "Ode to Joy",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/VJJ4ms.jpg?v=1"
    },
    {
        "title": "Memory",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RRXWR_4s.jpg?v=1"
    },
    {
        "title": "Who Are You",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pj6vEs.jpg?v=1"
    },
    {
        "title": "49 Days",
        "year": "2011",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/96Y2as.jpg?v=1"
    },
    {
        "title": "Ashita, Mama ga Inai",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/eY3xes.jpg?v=1"
    },
    {
        "title": "My Love, Enlighten Me",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/6L3Z2s.jpg?v=1"
    },
    {
        "title": "Leverage",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/doR8zs.jpg?v=1"
    },
    {
        "title": "Good Bye, My Princess",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XeN1Zs.jpg?v=1"
    },
    {
        "title": "God's Quiz",
        "year": "2010",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/NdAzWs.jpg?v=1"
    },
    {
        "title": "Lawless Lawyer",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/KA1w8s.jpg?v=1"
    },
    {
        "title": "Nodame Cantabile",
        "year": "2006",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/D8n0rs.jpg?v=1"
    },
    {
        "title": "Awaken",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0ex5E_4s.jpg?v=1"
    },
    {
        "title": "The Guardians",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/yNNdds.jpg?v=1"
    },
    {
        "title": "The Smile Has Left Your Eyes",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/rYPrys.jpg?v=1"
    },
    {
        "title": "Influence",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/ByRZ5_4s.jpg?v=1"
    },
    {
        "title": "Hana Yori Dango Season 2",
        "year": "2007",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4YevK_4s.jpg?v=1"
    },
    {
        "title": "Nothing but You",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Bddk1V_4s.jpg?v=1"
    },
    {
        "title": "The Auditors",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jQxqQz_4s.jpg?v=1"
    },
    {
        "title": "King the Land",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/wJAkqn_4s.jpg?v=1"
    },
    {
        "title": "Missing Noir M",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kyDN8s.jpg?v=1"
    },
    {
        "title": "D-Day",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/B77yzs.jpg?v=1"
    },
    {
        "title": "Arthdal Chronicles: The Sword of Aramun",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4e5YE6_4s.jpg?v=1"
    },
    {
        "title": "Kikazaru Koi ni wa Riyuu ga Atte",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vllN8_4s.jpg?v=1"
    },
    {
        "title": "The Eclipse",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/26Nnk_4s.jpg?v=1"
    },
    {
        "title": "My Unicorn Girl",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XOZvg_4s.jpg?v=1"
    },
    {
        "title": "Detective L",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z0bVOs.jpg?v=1"
    },
    {
        "title": "Oh My Venus",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/B1rl6_4s.jpg?v=1"
    },
    {
        "title": "My Demon",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0w0mZ6_4s.jpg?v=1"
    },
    {
        "title": "Touch Your Heart",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pWVlns.jpg?v=1"
    },
    {
        "title": "Fourever You",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/wJrlr1_4s.jpg?v=1"
    },
    {
        "title": "Doctor X Season 2",
        "year": "2013",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Xd5qqs.jpg?v=1"
    },
    {
        "title": "Manner of Death",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0eAy7_4s.jpg?v=1"
    },
    {
        "title": "Yugure ni, Te wo Tsunagu",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/ZAv0J_4s.jpg?v=1"
    },
    {
        "title": "The Story of Park's Marriage Contract",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RBPwLg_4s.jpg?v=1"
    },
    {
        "title": "Home School",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kAvLNv_4s.jpg?v=1"
    },
    {
        "title": "The Story of Pearl Girl",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/zBdAZW_4s.jpg?v=1"
    },
    {
        "title": "Angry Mom",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/KnJ74s.jpg?v=1"
    },
    {
        "title": "Love of Nirvana",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qYPkDD_4s.jpg?v=1"
    },
    {
        "title": "Nothing but Thirty",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/xxq00_4s.jpg?v=1"
    },
    {
        "title": "Bulgasal: Immortal Souls",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/W4krO_4s.jpg?v=1"
    },
    {
        "title": "Doctor Slump",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/d0YzR5_4s.jpg?v=1"
    },
    {
        "title": "Nagi no Oitoma",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/dWmzD_4s.jpg?v=1"
    },
    {
        "title": "Orange Days",
        "year": "2004",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/YA0NKs.jpg?v=1"
    },
    {
        "title": "The Legends",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/g2N3os.jpg?v=1"
    },
    {
        "title": "You Are My Lover Friend",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pdrO4V_4s.jpg?v=1"
    },
    {
        "title": "Love in the Moonlight",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kojx8s.jpg?v=1"
    },
    {
        "title": "Watcher",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jXbgrs.jpg?v=1"
    },
    {
        "title": "Love Playlist Season 4",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/1pp55s.jpg?v=1"
    },
    {
        "title": "Okitegami Kyoko no Biboroku",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/1oxXys.jpg?v=1"
    },
    {
        "title": "Ore no Sukato, Doko Itta?",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/z7klWs.jpg?v=1"
    },
    {
        "title": "I Belonged to Your World",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/wJJ7Dn_4s.jpg?v=1"
    },
    {
        "title": "Alliance",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E5vPq7_4s.jpg?v=1"
    },
    {
        "title": "Live Up to Your Name",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qkgD5s.jpg?v=1"
    },
    {
        "title": "My Stand-In: Uncut",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z8omdk_4s.jpg?v=1"
    },
    {
        "title": "Road Home",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/WPPooO_4s.jpg?v=1"
    },
    {
        "title": "My Girlfriend Is an Alien Season 2",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/R1QKz_4s.jpg?v=1"
    },
    {
        "title": "A Gentleman's Dignity",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qY5jDs.jpg?v=1"
    },
    {
        "title": "The Land of Warriors",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/RBWx0r_4s.jpg?v=1"
    },
    {
        "title": "Begin Again",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Eyl7W_4s.jpg?v=1"
    },
    {
        "title": "Futtara Doshaburi",
        "year": "2025",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/zBbR4A_4s.jpg?v=1"
    },
    {
        "title": "Gibo to Musume no Blues",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2EklP_4s.jpg?v=1"
    },
    {
        "title": "Hokago Karte",
        "year": "2024",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/JBvqmp_4s.jpg?v=1"
    },
    {
        "title": "Oh My Geum Bi",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XZ1Ens.jpg?v=1"
    },
    {
        "title": "Ghost",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/9rO0ms.jpg?v=1"
    },
    {
        "title": "God's Quiz Season 3",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/M5nEBs.jpg?v=1"
    },
    {
        "title": "Saiai",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/rJRwp_4s.jpg?v=1"
    },
    {
        "title": "Hana Yori Dango",
        "year": "2005",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/9vX6Bs.jpg?v=1"
    },
    {
        "title": "GTO",
        "year": "1998",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E4rmm_4s.jpg?v=1"
    },
    {
        "title": "Are You Human Too?",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/ZeVdY_4s.jpg?v=1"
    },
    {
        "title": "Parallel World",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/x4k0Wz_4s.jpg?v=1"
    },
    {
        "title": "Princess Agents",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/NvjeJs.jpg?v=1"
    },
    {
        "title": "Lost You Forever Season 2",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2wXEJ2_4s.jpg?v=1"
    },
    {
        "title": "Welcome 2 Life",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0pkwNs.jpg?v=1"
    },
    {
        "title": "Misty",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/q2WrDs.jpg?v=1"
    },
    {
        "title": "Ohsama Sentai King-Ohger",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kAk23d_4s.jpg?v=1"
    },
    {
        "title": "The Last Immortal",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/d0dQ7b_4s.jpg?v=1"
    },
    {
        "title": "Hanazakari no Kimitachi e",
        "year": "2007",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/JBXWJs.jpg?v=1"
    },
    {
        "title": "Mine",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/xlJmX_4s.jpg?v=1"
    },
    {
        "title": "What Happens to My Family?",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/5v2O4s.jpg?v=1"
    },
    {
        "title": "You Are My Secret",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jQgpDv_4s.jpg?v=1"
    },
    {
        "title": "The Princess Royal",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pdzZRr_4s.jpg?v=1"
    },
    {
        "title": "Ordinary Greatness",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/d0xyYK_4s.jpg?v=1"
    },
    {
        "title": "Tell Me What You Saw",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vRDYXs.jpg?v=1"
    },
    {
        "title": "High&Low: The Story of S.W.O.R.D. Season 2",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/6j6Ld_4s.jpg?v=1"
    },
    {
        "title": "Liar Game",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/nOQyNs.jpg?v=1"
    },
    {
        "title": "Todome no Kiss",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/6o50Os.jpg?v=1"
    },
    {
        "title": "19th Floor",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4e4O41_4s.jpg?v=1"
    },
    {
        "title": "Back to Seventeen",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qYkD78_4s.jpg?v=1"
    },
    {
        "title": "God's Quiz Season 2",
        "year": "2011",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z8QV8s.jpg?v=1"
    },
    {
        "title": "Summer Again",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XQnYx_4s.jpg?v=1"
    },
    {
        "title": "Queenmaker",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pddEzn_4s.jpg?v=1"
    },
    {
        "title": "Safe Skies, Archer",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vXOvOq_4s.jpg?v=1"
    },
    {
        "title": "Princess Pearl Season 2",
        "year": "1999",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/NdA2Rs.jpg?v=1"
    },
    {
        "title": "The Legend of the Condor Heroes",
        "year": "1983",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/M7mPRs.jpg?v=1"
    },
    {
        "title": "Thirty-Nine",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/v2bEX_4s.jpg?v=1"
    },
    {
        "title": "A Date with the Future",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/QJ2wLv_4s.jpg?v=1"
    },
    {
        "title": "May I Help You",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/6RqNX_4s.jpg?v=1"
    },
    {
        "title": "4Minutes",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/d0JLwb_4s.jpg?v=1"
    },
    {
        "title": "Shinya Shokudo - Tokyo Stories",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/l7V2Ls.jpg?v=1"
    },
    {
        "title": "Queen for Seven Days",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kok2ks.jpg?v=1"
    },
    {
        "title": "The Tale of Rose",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0wRw07_4s.jpg?v=1"
    },
    {
        "title": "My Forever Sunshine",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/w7JDp_4s.jpg?v=1"
    },
    {
        "title": "King2Hearts",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/b3nWEs.jpg?v=1"
    },
    {
        "title": "Wait, My Youth",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/40J46s.jpg?v=1"
    },
    {
        "title": "Song of the Bandits",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E5YnR7_4s.jpg?v=1"
    },
    {
        "title": "White Cat Legend",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0wN6z4_4s.jpg?v=1"
    },
    {
        "title": "Rookie Historian Goo Hae Ryung",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/dd1Ezs.jpg?v=1"
    },
    {
        "title": "Fights Break Sphere",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/DX58os.jpg?v=1"
    },
    {
        "title": "Bed Friend: Uncut",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qYOz6B_4s.jpg?v=1"
    },
    {
        "title": "The Eternal Love Season 2",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/AYl2Es.jpg?v=1"
    },
    {
        "title": "Qing Qing Zi Jin",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RQKpx_4s.jpg?v=1"
    },
    {
        "title": "The Sound of Magic",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/djDkW_4s.jpg?v=1"
    },
    {
        "title": "Fireworks of My Heart",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E5ZYrQ_4s.jpg?v=1"
    },
    {
        "title": "Remember: War of the Son",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/JERJls.jpg?v=1"
    },
    {
        "title": "Black Pean",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/X8rOOs.jpg?v=1"
    },
    {
        "title": "Crazy Love",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4848k_4s.jpg?v=1"
    },
    {
        "title": "Giant",
        "year": "2010",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/zNbw7s.jpg?v=1"
    },
    {
        "title": "Oshin",
        "year": "1983",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RPj8Vs.jpg?v=1"
    },
    {
        "title": "Salon De Nabi",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/x46blz_4s.jpg?v=1"
    },
    {
        "title": "Love Mechanics: Director's Cut",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vPkoD_4s.jpg?v=1"
    },
    {
        "title": "My Uncanny Destiny",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/1be1z_4s.jpg?v=1"
    },
    {
        "title": "School 2013",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/x48Rys.jpg?v=1"
    },
    {
        "title": "We Best Love: Fighting Mr. 2nd",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/ByAD6_4s.jpg?v=1"
    },
    {
        "title": "Barakamon",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z8zB6q_4s.jpg?v=1"
    },
    {
        "title": "Intense Love",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/rE4Kms.jpg?v=1"
    },
    {
        "title": "Marahuyo Project",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E5gQ7z_4s.jpg?v=1"
    },
    {
        "title": "Gank Your Heart",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/wK4jJs.jpg?v=1"
    },
    {
        "title": "A Korean Odyssey",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/OrP1ds.jpg?v=1"
    },
    {
        "title": "Secret Garden",
        "year": "2010",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/15Ygy_4s.jpg?v=1"
    },
    {
        "title": "Why Women Love",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0D5jE_4s.jpg?v=1"
    },
    {
        "title": "My Heroic Husband",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qRo5Q_4s.jpg?v=1"
    },
    {
        "title": "Line Walker",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RjJxEs.jpg?v=1"
    },
    {
        "title": "Gokusen",
        "year": "2002",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/3okA4s.jpg?v=1"
    },
    {
        "title": "Who Are You: School 2015",
        "year": "2015",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jqPyJs.jpg?v=1"
    },
    {
        "title": "Bad Prosecutor",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Xnvxn_4s.jpg?v=1"
    },
    {
        "title": "Miss S",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Eg4v7_4s.jpg?v=1"
    },
    {
        "title": "Tsuma, Shogakusei ni Naru",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0Dz04_4s.jpg?v=1"
    },
    {
        "title": "Doctor X Season 4",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/WwjdR_4s.jpg?v=1"
    },
    {
        "title": "Ray of Light",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/wJWEDb_4s.jpg?v=1"
    },
    {
        "title": "Adventure behind the Bronze Door",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/QJBAdg_4s.jpg?v=1"
    },
    {
        "title": "Agency",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pEK1y_4s.jpg?v=1"
    },
    {
        "title": "Tsuiraku JK to Haijin Kyoshi",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jQQ1dz_4s.jpg?v=1"
    },
    {
        "title": "XX",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/wVWzns.jpg?v=1"
    },
    {
        "title": "Happy of the End",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/1wkj46_4s.jpg?v=1"
    },
    {
        "title": "The Rebel",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vXQyde_4s.jpg?v=1"
    },
    {
        "title": "Long Vacation",
        "year": "1996",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Qojjv_4s.jpg?v=1"
    },
    {
        "title": "Nankyoku Tairiku",
        "year": "2011",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Kr2Dns.jpg?v=1"
    },
    {
        "title": "May It Please the Court",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jkwdw_4s.jpg?v=1"
    },
    {
        "title": "Jun Jiu Ling",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/X65NZ_4s.jpg?v=1"
    },
    {
        "title": "General's Lady",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/q3bx8_4s.jpg?v=1"
    },
    {
        "title": "Always Home",
        "year": "2025",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/mON6bk_4s.jpg?v=1"
    },
    {
        "title": "Junkyouju Takatsuki Akira no Suisatsu",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/6BjLp_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Zhuohua",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qYn7X0_4s.jpg?v=1"
    },
    {
        "title": "Hoshi Furu Yoru ni",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kAzvn8_4s.jpg?v=1"
    },
    {
        "title": "Semantic Error",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/d5KBz_4s.jpg?v=1"
    },
    {
        "title": "Find Me in Your Memory",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qo4Qzs.jpg?v=1"
    },
    {
        "title": "Cold Case: Shinjitsu no Tobira Season 2",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/JKzWls.jpg?v=1"
    },
    {
        "title": "When the Weather Is Fine",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2ebvW_4s.jpg?v=1"
    },
    {
        "title": "Ode to Joy Season 2",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/A7Koqs.jpg?v=1"
    },
    {
        "title": "Luoyang",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/eJE2Y_4s.jpg?v=1"
    },
    {
        "title": "Gyeongseong Creature Season 2",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/rNrOeZ_4s.jpg?v=1"
    },
    {
        "title": "The Advisors Alliance",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/j4rjys.jpg?v=1"
    },
    {
        "title": "History of the Salaryman",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/ArmK3s.jpg?v=1"
    },
    {
        "title": "Blue Birthday",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/x1JYw_4s.jpg?v=1"
    },
    {
        "title": "The Knockout",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/kAzzKw_4s.jpg?v=1"
    },
    {
        "title": "Diary of a Prosecutor",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/dvv3Ks.jpg?v=1"
    },
    {
        "title": "Dear Sister",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/BRX37_4s.jpg?v=1"
    },
    {
        "title": "Quartet",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/PbOj5s.jpg?v=1"
    },
    {
        "title": "Amachan",
        "year": "2013",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Mj7jds.jpg?v=1"
    },
    {
        "title": "Be Yourself",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z6BJL_4s.jpg?v=1"
    },
    {
        "title": "Like Flowers in Sand",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qYOOKQ_4s.jpg?v=1"
    },
    {
        "title": "Unstoppable High Kick",
        "year": "2006",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E50pms.jpg?v=1"
    },
    {
        "title": "Something about 1 Percent",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/JZ03Js.jpg?v=1"
    },
    {
        "title": "Tokusatsu Gagaga",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/xmKlEs.jpg?v=1"
    },
    {
        "title": "Run On",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/B5OKq_4s.jpg?v=1"
    },
    {
        "title": "Pegasus Market",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qbkg0s.jpg?v=1"
    },
    {
        "title": "Chief of Staff Season 2",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4D56rs.jpg?v=1"
    },
    {
        "title": "The Good Detective Season 2",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pmpxV_4s.jpg?v=1"
    },
    {
        "title": "A Beautiful Mind",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/b2D5ws.jpg?v=1"
    },
    {
        "title": "The First Shot",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/vXxWYB_4s.jpg?v=1"
    },
    {
        "title": "The K2",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2DNVws.jpg?v=1"
    },
    {
        "title": "Love in Time",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/edxzn_4s.jpg?v=1"
    },
    {
        "title": "The Rational Life",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/r1Nbm_4s.jpg?v=1"
    },
    {
        "title": "Fanletter, Please",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4veBZ_4s.jpg?v=1"
    },
    {
        "title": "Under the Microscope",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/VXowEJ_4s.jpg?v=1"
    },
    {
        "title": "Shards of Her",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Rm8Rg_4s.jpg?v=1"
    },
    {
        "title": "Butterflied Lover",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/60gv8P_4s.jpg?v=1"
    },
    {
        "title": "Sungkyunkwan Scandal",
        "year": "2010",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/xqVw3_4s.jpg?v=1"
    },
    {
        "title": "The Player 2: Master of Swindlers",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/1wg1JR_4s.jpg?v=1"
    },
    {
        "title": "Gokushufudo",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/j3gdB_4s.jpg?v=1"
    },
    {
        "title": "Bloody Heart",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jdOOb_4s.jpg?v=1"
    },
    {
        "title": "Lovers of the Red Sky",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/BzeWl_4s.jpg?v=1"
    },
    {
        "title": "Woman",
        "year": "2013",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/64RW0s.jpg?v=1"
    },
    {
        "title": "The Brightest Star in the Sky",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/8YLOds.jpg?v=1"
    },
    {
        "title": "Meet Me @ 1006",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/nd5YQs.jpg?v=1"
    },
    {
        "title": "What Comes after Love",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/QJg1kv_4s.jpg?v=1"
    },
    {
        "title": "Hyena",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/rOQA2s.jpg?v=1"
    },
    {
        "title": "The Sign: Uncut",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/0w8AeK_4s.jpg?v=1"
    },
    {
        "title": "Regeneration",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jQ4ZPw_4s.jpg?v=1"
    },
    {
        "title": "Queen of Mystery",
        "year": "2017",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Y8PRPs.jpg?v=1"
    },
    {
        "title": "Omameda Towako to Sannin no Motootto",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/QRb4Q_4s.jpg?v=1"
    },
    {
        "title": "Rainless Love in a Godless Land",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2WdoR_4s.jpg?v=1"
    },
    {
        "title": "Mars",
        "year": "2004",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/WP7DPs.jpg?v=1"
    },
    {
        "title": "The Wind Blows from Longxi",
        "year": "2022",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XDL5d_4s.jpg?v=1"
    },
    {
        "title": "Jazz for Two",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RB311x_4s.jpg?v=1"
    },
    {
        "title": "Heavenly Sword and Dragon Slaying Sabre",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/D8J8os.jpg?v=1"
    },
    {
        "title": "Let Free the Curse of Taekwondo",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4ejylw_4s.jpg?v=1"
    },
    {
        "title": "Doku Koi: Doku mo Sugireba Koi to Naru",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJ36AJ_4s.jpg?v=1"
    },
    {
        "title": "Bright Time",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/Z8rxm8_4s.jpg?v=1"
    },
    {
        "title": "Once We Get Married",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/XxXNq_4s.jpg?v=1"
    },
    {
        "title": "Kill It",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RWnjxs.jpg?v=1"
    },
    {
        "title": "Memory Lost Season 2",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qnEj5s.jpg?v=1"
    },
    {
        "title": "Shinya Shokudo - Tokyo Stories Season 2",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/p8ddQs.jpg?v=1"
    },
    {
        "title": "The Heart",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/E5JNlb_4s.jpg?v=1"
    },
    {
        "title": "Another Miss Oh",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/jyRRzs.jpg?v=1"
    },
    {
        "title": "Karakai Jozu no Takagi-san",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RBRRyE_4s.jpg?v=1"
    },
    {
        "title": "Secret of Three Kingdoms",
        "year": "2018",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/RP3oxs.jpg?v=1"
    },
    {
        "title": "You're All Surrounded",
        "year": "2014",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/mO3qQs.jpg?v=1"
    },
    {
        "title": "Cold Case: Shinjitsu no Tobira Season 3",
        "year": "2020",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/qRe85_4s.jpg?v=1"
    },
    {
        "title": "My Lovely Liar",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/0wxDpN_4s.jpg?v=1"
    },
    {
        "title": "Gen Z",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4e1yOd_4s.jpg?v=1"
    },
    {
        "title": "When a Snail Falls in Love",
        "year": "2016",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2DNL2s.jpg?v=1"
    },
    {
        "title": "Danger Zone: The Dark Night",
        "year": "2021",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/pby4y_4s.jpg?v=1"
    },
    {
        "title": "The King's Daughter, Soo Baek Hyang",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ABgO8s.jpg?v=1"
    },
    {
        "title": "Kiss Me",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ZRlJ7s.jpg?v=1"
    },
    {
        "title": "To My Star Season 2: Our Untold Stories",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/epvZQ_4s.jpg?v=1"
    },
    {
        "title": "The Disguiser",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wVPYks.jpg?v=1"
    },
    {
        "title": "Radiation House",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Y3Vwos.jpg?v=1"
    },
    {
        "title": "Ripe Town",
        "year": "2023",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/2w4RR2_4s.jpg?v=1"
    },
    {
        "title": "Kazoku no Katachi",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jyeows.jpg?v=1"
    },
    {
        "title": "Solomon's Perjury",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/n0nrQs.jpg?v=1"
    },
    {
        "title": "Doctor X",
        "year": "2012",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/BLOqq_4s.jpg?v=1"
    },
    {
        "title": "Flight to You",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RxRLP_4s.jpg?v=1"
    },
    {
        "title": "Hakozume: Tatakau! Koban Joshi",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6BYg2_4s.jpg?v=1"
    },
    {
        "title": "Dhevaprom: Dujupsorn",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/eYxm7e_4s.jpg?v=1"
    },
    {
        "title": "Jirisan",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EwpK7_4s.jpg?v=1"
    },
    {
        "title": "A Little Thing Called First Love",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qbzwds.jpg?v=1"
    },
    {
        "title": "Until We Meet Again",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/WBDBPs.jpg?v=1"
    },
    {
        "title": "Light on Me",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XJWdX_4s.jpg?v=1"
    },
    {
        "title": "Watashitachi wa Douka Shiteiru",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/W724X_4s.jpg?v=1"
    },
    {
        "title": "The King: Eternal Monarch",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eoD8Ws.jpg?v=1"
    },
    {
        "title": "Time Between Dog and Wolf",
        "year": "2007",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/anzWas.jpg?v=1"
    },
    {
        "title": "Midnight Museum",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rNNNpZ_4s.jpg?v=1"
    },
    {
        "title": "Sound of the Desert",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/73AQNs.jpg?v=1"
    },
    {
        "title": "Black Dog",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bb1RRs.jpg?v=1"
    },
    {
        "title": "Tokyo Vice Season 2",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rN0ANp_4s.jpg?v=1"
    },
    {
        "title": "Natsuzora",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/lJAkJs.jpg?v=1"
    },
    {
        "title": "Cool Doji Danshi",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vXXnJD_4s.jpg?v=1"
    },
    {
        "title": "Love Endures",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BdbXA6_4s.jpg?v=1"
    },
    {
        "title": "Black Knight",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/d021dW_4s.jpg?v=1"
    },
    {
        "title": "Miss Crow with Mr. Lizard",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/47dbw_4s.jpg?v=1"
    },
    {
        "title": "I Told Sunset about You",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/dQdEW_4s.jpg?v=1"
    },
    {
        "title": "Moonlight Resonance",
        "year": "2008",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/koD4vs.jpg?v=1"
    },
    {
        "title": "He's Coming to Me",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kYJOds.jpg?v=1"
    },
    {
        "title": "This Love Doesn't Have Long Beans",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rNx5jp_4s.jpg?v=1"
    },
    {
        "title": "Somehow 18",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1oA1Ks.jpg?v=1"
    },
    {
        "title": "Inspector Koo",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4zolZ_4s.jpg?v=1"
    },
    {
        "title": "HIStory3",
        "year": "2019",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/4epowJ_4s.jpg?v=1"
    },
    {
        "title": "Miss Night and Day",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vX57e8_4s.jpg?v=1"
    },
    {
        "title": "Miraculous Brothers",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/d0O44b_4s.jpg?v=1"
    },
    {
        "title": "Uncle",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EX1Pp_4s.jpg?v=1"
    },
    {
        "title": "I'm Tee, Me Too",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6KlR2_4s.jpg?v=1"
    },
    {
        "title": "Soratobu Kouhoushitsu",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/PxoN3R_4s.jpg?v=1"
    },
    {
        "title": "Suparburoot Jorm Jon: Maturot Lohgan",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EyW4m_4s.jpg?v=1"
    },
    {
        "title": "Search",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BDKkV_4s.jpg?v=1"
    },
    {
        "title": "Mondai no Aru Restaurant",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1vYLds.jpg?v=1"
    },
    {
        "title": "Handsome Siblings",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/E5ZYAm_4s.jpg?v=1"
    },
    {
        "title": "Surgeons",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/R06v6s.jpg?v=1"
    },
    {
        "title": "Avataro Sentai Donbrothers",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/W4rqO_4s.jpg?v=1"
    },
    {
        "title": "The Eternal Love",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/V47qQs.jpg?v=1"
    },
    {
        "title": "The Light in Your Eyes",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/mjgmPs.jpg?v=1"
    },
    {
        "title": "Ore no Ie no Hanashi",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/WlgN3_4s.jpg?v=1"
    },
    {
        "title": "Fated to Love You",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJNVns.jpg?v=1"
    },
    {
        "title": "Thank You",
        "year": "2007",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/JBxPws.jpg?v=1"
    },
    {
        "title": "The First Half of My Life",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qkAm8s.jpg?v=1"
    },
    {
        "title": "Sweet Tai Chi",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vRbkps.jpg?v=1"
    },
    {
        "title": "The Ingenious One",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/60vBQp_4s.jpg?v=1"
    },
    {
        "title": "Kinou Nani Tabeta? Season 2",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/E5Q42Q_4s.jpg?v=1"
    },
    {
        "title": "The Heart Killers",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/l0QNk4_4s.jpg?v=1"
    },
    {
        "title": "School 2017",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qkwj0s.jpg?v=1"
    },
    {
        "title": "Legal High",
        "year": "2012",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wwWm1s.jpg?v=1"
    },
    {
        "title": "17.3 About a Sex",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qJWvz_4s.jpg?v=1"
    },
    {
        "title": "Work Later, Drink Now Season 2",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/X01EX_4s.jpg?v=1"
    },
    {
        "title": "Bring It On, Ghost",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EYm4ms.jpg?v=1"
    },
    {
        "title": "Crash",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2w7L8R_4s.jpg?v=1"
    },
    {
        "title": "Destined with You",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eY8Q0Y_4s.jpg?v=1"
    },
    {
        "title": "Kaitou Yamaneko",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RY3Vxs.jpg?v=1"
    },
    {
        "title": "My Boss, My Hero",
        "year": "2006",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/nOQN2s.jpg?v=1"
    },
    {
        "title": "Miman Keisatsu: Midnight Runner",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bo3Yb_4s.jpg?v=1"
    },
    {
        "title": "30-sai made Dotei Da to Mahotsukai ni Nareru rashii",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/QBYo7_4s.jpg?v=1"
    },
    {
        "title": "Game Sanaeha",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/JxoOls.jpg?v=1"
    },
    {
        "title": "Please Be My Family",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qYQDlK_4s.jpg?v=1"
    },
    {
        "title": "The Days",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Z85rRY_4s.jpg?v=1"
    },
    {
        "title": "BORDER",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XdmrOs.jpg?v=1"
    },
    {
        "title": "My Holo Love",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qoq5Ks.jpg?v=1"
    },
    {
        "title": "Tokyo Vice",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/65RZp_4s.jpg?v=1"
    },
    {
        "title": "The Secret Romantic Guesthouse",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/E55le0_4s.jpg?v=1"
    },
    {
        "title": "It Started with a Kiss",
        "year": "2005",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/yoqLks.jpg?v=1"
    },
    {
        "title": "Rooftop Prince",
        "year": "2012",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kbQdr_4s.jpg?v=1"
    },
    {
        "title": "Go Ho's Starry Night",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/X4L4gs.jpg?v=1"
    },
    {
        "title": "Vampire Prosecutor",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/9mOD3s.jpg?v=1"
    },
    {
        "title": "Flourish in Time",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2PQ7E_4s.jpg?v=1"
    },
    {
        "title": "In a Class of Her Own",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/12VQK_4s.jpg?v=1"
    },
    {
        "title": "Faithful",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Xd8jzO_4s.jpg?v=1"
    },
    {
        "title": "Once upon a Time in Lingjian Mountain",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6L3Yds.jpg?v=1"
    },
    {
        "title": "Maria Clara and Ibarra",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/v0kzX_4s.jpg?v=1"
    },
    {
        "title": "Nigeru wa Haji da ga Yaku ni Tatsu",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/WR0QW_4s.jpg?v=1"
    },
    {
        "title": "The Victims' Game",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eo06ns.jpg?v=1"
    },
    {
        "title": "Mama",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/l0q8xs.jpg?v=1"
    },
    {
        "title": "The Queen's Classroom",
        "year": "2005",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vN35gs.jpg?v=1"
    },
    {
        "title": "Love Destiny Uncut",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/v2J6D_4s.jpg?v=1"
    },
    {
        "title": "The Killer Is Also Romantic",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XDzyp_4s.jpg?v=1"
    },
    {
        "title": "Zombie Detective",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wz4R1_4s.jpg?v=1"
    },
    {
        "title": "Rookie Agent Rouge",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Qm7g6s.jpg?v=1"
    },
    {
        "title": "The Crown Princess",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/NrQNRs.jpg?v=1"
    },
    {
        "title": "Sword and Fairy 4",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQAkrw_4s.jpg?v=1"
    },
    {
        "title": "Life",
        "year": "2007",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jq2Pzs.jpg?v=1"
    },
    {
        "title": "Psych-Hunter",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/krmnd_4s.jpg?v=1"
    },
    {
        "title": "Behind Your Touch",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Xdbe3g_4s.jpg?v=1"
    },
    {
        "title": "Woman of Dignity",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qkqgQs.jpg?v=1"
    },
    {
        "title": "As Beautiful as You",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQxY2z_4s.jpg?v=1"
    },
    {
        "title": "All-Boys High",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jXQAvs.jpg?v=1"
    },
    {
        "title": "Dragon Zakura Season 2",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rAJmp_4s.jpg?v=1"
    },
    {
        "title": "Prince of Lan Ling",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1wwWys.jpg?v=1"
    },
    {
        "title": "Shopping King Louie",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/KDL5Xs.jpg?v=1"
    },
    {
        "title": "A Piece of Your Mind",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/p4PDes.jpg?v=1"
    },
    {
        "title": "The Penthouse Season 3: War in Life",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/W6yo5_4s.jpg?v=1"
    },
    {
        "title": "Romance Is a Bonus Book",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2xzkRs.jpg?v=1"
    },
    {
        "title": "Mr. Brain",
        "year": "2009",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/dNRW5_4s.jpg?v=1"
    },
    {
        "title": "Punch",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ez5nQs.jpg?v=1"
    },
    {
        "title": "Special Labor Inspector Jo",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/10153s.jpg?v=1"
    },
    {
        "title": "Koisenu Futari",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/pP258_4s.jpg?v=1"
    },
    {
        "title": "Into the Ring",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EgNWW_4s.jpg?v=1"
    },
    {
        "title": "Copycat Killer",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJxBlA_4s.jpg?v=1"
    },
    {
        "title": "Why Her?",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1rynK_4s.jpg?v=1"
    },
    {
        "title": "Caf\u00e9 Minamdang",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ZnjVY_4s.jpg?v=1"
    },
    {
        "title": "Eien no Kino",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2RDnd_4s.jpg?v=1"
    },
    {
        "title": "Neechan no Koibito",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eqKOK_4s.jpg?v=1"
    },
    {
        "title": "Doctor X Season 6",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kEjVrs.jpg?v=1"
    },
    {
        "title": "Melody of Golden Age",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/d0Q62d_4s.jpg?v=1"
    },
    {
        "title": "The Silent Sea",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wLdVN_4s.jpg?v=1"
    },
    {
        "title": "Make a Wish",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ZQelL_4s.jpg?v=1"
    },
    {
        "title": "Uncontrollably Fond",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1oRBds.jpg?v=1"
    },
    {
        "title": "Girls' Generation 1979",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/V4zWEs.jpg?v=1"
    },
    {
        "title": "A Girl Like Me",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2EOvP_4s.jpg?v=1"
    },
    {
        "title": "Love in Translation: Uncut",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eYnOzn_4s.jpg?v=1"
    },
    {
        "title": "The Most Beautiful Goodbye",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/yN176s.jpg?v=1"
    },
    {
        "title": "My Huckleberry Friends",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/nvoABs.jpg?v=1"
    },
    {
        "title": "Definitely Not Today",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2W7dE_4s.jpg?v=1"
    },
    {
        "title": "Because of Meeting You",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/PbzqLs.jpg?v=1"
    },
    {
        "title": "One the Woman",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/knvmv_4s.jpg?v=1"
    },
    {
        "title": "Can You Hear My Heart",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Dk4pNs.jpg?v=1"
    },
    {
        "title": "Special Affairs Team TEN Season 2",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJjv8s.jpg?v=1"
    },
    {
        "title": "Eulachacha Waikiki Season 2",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/10jnQs.jpg?v=1"
    },
    {
        "title": "The Blooms at Ruyi Pavilion",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Eg5Zz_4s.jpg?v=1"
    },
    {
        "title": "The Journey of Flower",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/m0dPqs.jpg?v=1"
    },
    {
        "title": "The Legend of the Condor Heroes",
        "year": "2008",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/O8Azds.jpg?v=1"
    },
    {
        "title": "Our Blooming Youth",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kgQJb_4s.jpg?v=1"
    },
    {
        "title": "A Breeze of Love",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJw3ZY_4s.jpg?v=1"
    },
    {
        "title": "Falling for Innocence",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BwpVRs.jpg?v=1"
    },
    {
        "title": "Mada Mada Koi wa Tsuzuku yo Doko Made mo",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ByDW7_4s.jpg?v=1"
    },
    {
        "title": "The Legend of the Condor Heroes",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQy0Py_4s.jpg?v=1"
    },
    {
        "title": "Sunshine of My Life",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Qrv02_4s.jpg?v=1"
    },
    {
        "title": "Romance on the Farm",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vXQ6QD_4s.jpg?v=1"
    },
    {
        "title": "Warrior Baek Dong Soo",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/anO5Bs.jpg?v=1"
    },
    {
        "title": "On the Wings of Love",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ndvyLs.jpg?v=1"
    },
    {
        "title": "Chimera",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RNoko_4s.jpg?v=1"
    },
    {
        "title": "Start-Up",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RQLeY_4s.jpg?v=1"
    },
    {
        "title": "Lucky's First Love",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BbBLzs.jpg?v=1"
    },
    {
        "title": "Sassy Go Go",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/3r1Res.jpg?v=1"
    },
    {
        "title": "Vivant",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/603exX_4s.jpg?v=1"
    },
    {
        "title": "The White Olive Tree",
        "year": "2025",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/73562D_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Den-O",
        "year": "2007",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vlQ88_4s.jpg?v=1"
    },
    {
        "title": "Love Mechanics",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Wpgxp_4s.jpg?v=1"
    },
    {
        "title": "Oh! My Sweet Liar!",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/46WZw_4s.jpg?v=1"
    },
    {
        "title": "Yu Yu Hakusho",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/E58Oxl_4s.jpg?v=1"
    },
    {
        "title": "Let's Fight Ghost",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XXxzZ_4s.jpg?v=1"
    },
    {
        "title": "Okaeri Mone",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/0PbXk_4s.jpg?v=1"
    },
    {
        "title": "Gameboys",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rxlBms.jpg?v=1"
    },
    {
        "title": "The Moon Brightens for You",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BNxv6_4s.jpg?v=1"
    },
    {
        "title": "The Heart of Genius",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XLDYp_4s.jpg?v=1"
    },
    {
        "title": "Live On",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/xW1vX_4s.jpg?v=1"
    },
    {
        "title": "Rich Man, Poor Woman",
        "year": "2012",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/AB8g4s.jpg?v=1"
    },
    {
        "title": "The Hippocratic Crush",
        "year": "2012",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Jpmyws.jpg?v=1"
    },
    {
        "title": "Eagles and Youngster",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/AY5pLs.jpg?v=1"
    },
    {
        "title": "All Is Well",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rqn8Ns.jpg?v=1"
    },
    {
        "title": "Back to 1989",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6QDqWs.jpg?v=1"
    },
    {
        "title": "Legend of Yun Xi",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/W7gRl_4s.jpg?v=1"
    },
    {
        "title": "A Virtuous Business",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/x4yvAN_4s.jpg?v=1"
    },
    {
        "title": "0.5 no Otoko",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/wJK2y1_4s.jpg?v=1"
    },
    {
        "title": "Idol: The Coup",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kngDb_4s.jpg?v=1"
    },
    {
        "title": "Boy Hood",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/EYPmps.jpg?v=1"
    },
    {
        "title": "Evilive",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/x4EmK0_4s.jpg?v=1"
    },
    {
        "title": "38 Task Force",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/55VAes.jpg?v=1"
    },
    {
        "title": "Iryu Team Medical Dragon",
        "year": "2006",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/xlnXq_4s.jpg?v=1"
    },
    {
        "title": "The Best of You in My Mind",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/dA3Rds.jpg?v=1"
    },
    {
        "title": "In Time with You",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/NdReJs.jpg?v=1"
    },
    {
        "title": "Light the Night Season 2",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4eeWLK_4s.jpg?v=1"
    },
    {
        "title": "Familiar Wife",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/5oB1ys.jpg?v=1"
    },
    {
        "title": "Night Has Come",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RBWq7P_4s.jpg?v=1"
    },
    {
        "title": "Jimi ni Sugoi! Koetsu Garu Kono Etsuko",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bp8Qls.jpg?v=1"
    },
    {
        "title": "Memory of Encaustic Tile",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BOwQ5_4s.jpg?v=1"
    },
    {
        "title": "Memory Lost",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/l7wOxs.jpg?v=1"
    },
    {
        "title": "Gekokujo Kyuji",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bdqqm7_4s.jpg?v=1"
    },
    {
        "title": "The Comments",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XmxvO_4s.jpg?v=1"
    },
    {
        "title": "Perfect Propose",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Z81n1k_4s.jpg?v=1"
    },
    {
        "title": "The Way Home",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/l0P8y4_4s.jpg?v=1"
    },
    {
        "title": "Crisis: Kouan Kidou Sousatai Tokusou-han",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/xJPVr_4s.jpg?v=1"
    },
    {
        "title": "See You Tomorrow",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/dpz0z_4s.jpg?v=1"
    },
    {
        "title": "Please Classmate",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6bgjj_4s.jpg?v=1"
    },
    {
        "title": "Never Twice",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6oYpXs.jpg?v=1"
    },
    {
        "title": "Itazura na Kiss: Love in Tokyo Season 2",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XdqjXs.jpg?v=1"
    },
    {
        "title": "I Promised You the Moon",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/xJjnE_4s.jpg?v=1"
    },
    {
        "title": "Gameboys Level-Up Edition",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Xy8QO_4s.jpg?v=1"
    },
    {
        "title": "Sweet Home Season 3",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/WP7ZXp_4s.jpg?v=1"
    },
    {
        "title": "Minning Town",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kKjY8_4s.jpg?v=1"
    },
    {
        "title": "Ototo no Otto",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/odVAOs.jpg?v=1"
    },
    {
        "title": "Stealth Walker",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qdBgD_4s.jpg?v=1"
    },
    {
        "title": "The Journey Across the Night",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RQDyE_4s.jpg?v=1"
    },
    {
        "title": "Kekkon Dekinai Otoko",
        "year": "2006",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/rxlJps.jpg?v=1"
    },
    {
        "title": "Kindaichi Shonen no Jikenbo N",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2wjJws.jpg?v=1"
    },
    {
        "title": "Memory Lost Season 3",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/0BEB4s.jpg?v=1"
    },
    {
        "title": "Chocolate",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/p84Jes.jpg?v=1"
    },
    {
        "title": "Ao Haru Ride",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qYkxkQ_4s.jpg?v=1"
    },
    {
        "title": "The Mystic Nine",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XZl5xs.jpg?v=1"
    },
    {
        "title": "Warm on a Cold Night",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1wmYZ7_4s.jpg?v=1"
    },
    {
        "title": "Royal Nirvana",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eVnpYs.jpg?v=1"
    },
    {
        "title": "God's Quiz Season 4",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2wZoOs.jpg?v=1"
    },
    {
        "title": "To Love",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6lzBg_4s.jpg?v=1"
    },
    {
        "title": "Suits",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/zE4eys.jpg?v=1"
    },
    {
        "title": "Doubt",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RBgjnE_4s.jpg?v=1"
    },
    {
        "title": "Ressha Sentai ToQger",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/JBoWxJ_4s.jpg?v=1"
    },
    {
        "title": "Maestra: Strings of Truth",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/QJKyzA_4s.jpg?v=1"
    },
    {
        "title": "Love in the Air",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/keNeb_4s.jpg?v=1"
    },
    {
        "title": "Ikebukuro West Gate Park",
        "year": "2000",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bddz5b_4s.jpg?v=1"
    },
    {
        "title": "Haechi",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/JKzZls.jpg?v=1"
    },
    {
        "title": "The Greatest Love",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/960ops.jpg?v=1"
    },
    {
        "title": "Jitenshaya-san no Takahashi-kun",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Z8WOl8_4s.jpg?v=1"
    },
    {
        "title": "Song of Youth",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XkgAp_4s.jpg?v=1"
    },
    {
        "title": "Jealousy Incarnate",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/lO65Js.jpg?v=1"
    },
    {
        "title": "Mahoro Ekimae Bangaichi",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bl4jl_4s.jpg?v=1"
    },
    {
        "title": "Mama Gogo",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/1npz6_4s.jpg?v=1"
    },
    {
        "title": "Reply 1994",
        "year": "2013",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bd7mAs.jpg?v=1"
    },
    {
        "title": "Love Your Enemy",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/73ZR3B_4s.jpg?v=1"
    },
    {
        "title": "Money Flower",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/nvlr8s.jpg?v=1"
    },
    {
        "title": "LoveSick 2024",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/RBblnY_4s.jpg?v=1"
    },
    {
        "title": "Mask",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/vNoVps.jpg?v=1"
    },
    {
        "title": "The Love Equations",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/pjY7Qs.jpg?v=1"
    },
    {
        "title": "The Rain in Espana",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XddL2g_4s.jpg?v=1"
    },
    {
        "title": "True to Love",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/0wmeZk_4s.jpg?v=1"
    },
    {
        "title": "Love Playlist Season 2",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/33Zwms.jpg?v=1"
    },
    {
        "title": "Okusama wa, Tori Atsukai Chui",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4BqVr_4s.jpg?v=1"
    },
    {
        "title": "Koi wo Suru nara Nidome ga Joto",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/pd4VRV_4s.jpg?v=1"
    },
    {
        "title": "Marriage, Not Dating",
        "year": "2014",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Px8zZs.jpg?v=1"
    },
    {
        "title": "Meeting You",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/erjQn_4s.jpg?v=1"
    },
    {
        "title": "Different Princess",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/E52Vwb_4s.jpg?v=1"
    },
    {
        "title": "The Long Season",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/RBj4go_4s.jpg?v=1"
    },
    {
        "title": "Nothing Gold Can Stay",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/AzAZPs.jpg?v=1"
    },
    {
        "title": "High Kick! The Revenge of the Short Legged",
        "year": "2011",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQY2zs.jpg?v=1"
    },
    {
        "title": "Cherry Magic",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQXrew_4s.jpg?v=1"
    },
    {
        "title": "To My Star",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/pA3w8_4s.jpg?v=1"
    },
    {
        "title": "Girl from Nowhere Season 2",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Bn7Zq_4s.jpg?v=1"
    },
    {
        "title": "Bread, Love and Dreams",
        "year": "2010",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/6024gs.jpg?v=1"
    },
    {
        "title": "On the Verge of Insanity",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XJVEO_4s.jpg?v=1"
    },
    {
        "title": "Falling before Fireworks",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/2worgR_4s.jpg?v=1"
    },
    {
        "title": "Algernon ni Hanataba wo",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jxmmw_4s.jpg?v=1"
    },
    {
        "title": "Narco-Saints",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/v0J5e_4s.jpg?v=1"
    },
    {
        "title": "We Are",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/jQ21Rw_4s.jpg?v=1"
    },
    {
        "title": "Doctor Cha",
        "year": "2023",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eYzmNE_4s.jpg?v=1"
    },
    {
        "title": "Mare",
        "year": "2015",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/gJPKvs.jpg?v=1"
    },
    {
        "title": "Encounter",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/Wlm4O_4s.jpg?v=1"
    },
    {
        "title": "I've Fallen for You",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/kVmWks.jpg?v=1"
    },
    {
        "title": "Dance of the Sky Empire",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BgvBl_4s.jpg?v=1"
    },
    {
        "title": "Signal: Choki Mikaiketsu Jiken Sosahan",
        "year": "2018",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/ByDV1_4s.jpg?v=1"
    },
    {
        "title": "The Whirlwind",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1wlvv5_4s.jpg?v=1"
    },
    {
        "title": "Rinsho Hanzai Gakusha Himura Hideo no Suiri",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/24Z7Es.jpg?v=1"
    },
    {
        "title": "Rokuhodo Yotsuiro Biyori",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eLWyq_4s.jpg?v=1"
    },
    {
        "title": "Catch the Ghost",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/0brEKs.jpg?v=1"
    },
    {
        "title": "Remarriage and Desires",
        "year": "2022",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/keWV8_4s.jpg?v=1"
    },
    {
        "title": "Reset Life",
        "year": "2019",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/dWnxd_4s.jpg?v=1"
    },
    {
        "title": "Hiyokko",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/r24AEs.jpg?v=1"
    },
    {
        "title": "Kiseki: Dear to Me",
        "year": "2023",
        "rating": "8.1",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Kagi no Kakatta Heya",
        "year": "2012",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/QW232_4s.jpg?v=1"
    },
    {
        "title": "Rikuoh",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/QdeLWs.jpg?v=1"
    },
    {
        "title": "Affair",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/XdOP4w_4s.jpg?v=1"
    },
    {
        "title": "Legend of Mi Yue",
        "year": "2015",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/eYrKzn_4s.jpg?v=1"
    },
    {
        "title": "In Blossom",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/qYAYE0_4s.jpg?v=1"
    },
    {
        "title": "Code Blue",
        "year": "2008",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4EVAw_4s.jpg?v=1"
    },
    {
        "title": "Tientsin Mystic",
        "year": "2017",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/BwpeAs.jpg?v=1"
    },
    {
        "title": "Boku no Yabai Tsuma",
        "year": "2016",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/82PbWs.jpg?v=1"
    },
    {
        "title": "Serendipity's Embrace",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QJlO12_4s.jpg?v=1"
    },
    {
        "title": "Growing Season",
        "year": "2020",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/B5zdR_4s.jpg?v=1"
    },
    {
        "title": "The Fiery Priest Season 2",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/JBDzBj_4s.jpg?v=1"
    },
    {
        "title": "Not Others",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Xd3qEg_4s.jpg?v=1"
    },
    {
        "title": "Link: Eat, Love, Kill",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1rPKz_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Kuuga",
        "year": "2000",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/WXrx3_4s.jpg?v=1"
    },
    {
        "title": "Squid Game Season 2",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/3o7eqj_4s.jpg?v=1"
    },
    {
        "title": "I Am Nobody: The Showdown Between Yin & Yang",
        "year": "2025",
        "rating": "8.3",
        "image": "https://i.mydramalist.com/Kpv8Rj_4s.jpg?v=1"
    },
    {
        "title": "Shinya Shokudo 3",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/AEdXZs.jpg?v=1"
    },
    {
        "title": "Blue Canvas of Youthful Days",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kA3zxv_4s.jpg?v=1"
    },
    {
        "title": "Legend of Lu Zhen",
        "year": "2013",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pBB0ys.jpg?v=1"
    },
    {
        "title": "Dating in the Kitchen",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Rbgmr_4s.jpg?v=1"
    },
    {
        "title": "Love Revolution",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rz4LD_4s.jpg?v=1"
    },
    {
        "title": "Island",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kl5N8_4s.jpg?v=1"
    },
    {
        "title": "The Ideal City",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2lK0R_4s.jpg?v=1"
    },
    {
        "title": "Marvelous Women",
        "year": "2021",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/4lVRk_4s.jpg?v=1"
    },
    {
        "title": "Ishiko to Haneo: Sonna Koto de Uttaemasu?",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/B8QX6_4s.jpg?v=1"
    },
    {
        "title": "My Girlfriend Is a Gumiho",
        "year": "2010",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XEoKn_4s.jpg?v=1"
    },
    {
        "title": "Life: Senjou no Bokura",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vnX8Ds.jpg?v=1"
    },
    {
        "title": "Hard to Find",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQ2Jlz_4s.jpg?v=1"
    },
    {
        "title": "Thousands of Years of Love",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1wqD05_4s.jpg?v=1"
    },
    {
        "title": "Insect Detective",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4NXEZ_4s.jpg?v=1"
    },
    {
        "title": "Mr. Bad",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0W70N_4s.jpg?v=1"
    },
    {
        "title": "When the Phone Rings",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/LwqnQg_4s.jpg?v=1"
    },
    {
        "title": "My Mr. Mermaid",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/j8PEys.jpg?v=1"
    },
    {
        "title": "Ossan no Pants ga Nandatte Ii Janai ka!",
        "year": "2024",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/eYnOO8_4s.jpg?v=1"
    },
    {
        "title": "The Legendary Life of Queen Lau",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QZ5w4_4s.jpg?v=1"
    },
    {
        "title": "Ojakgyo Brothers",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kKnkj_4s.jpg?v=1"
    },
    {
        "title": "Be My Dream Family",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XRdJp_4s.jpg?v=1"
    },
    {
        "title": "Faith",
        "year": "2012",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/O8vyxs.jpg?v=1"
    },
    {
        "title": "Witch's Court",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/nvY4Ls.jpg?v=1"
    },
    {
        "title": "Takara no Vidro",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Bd1r4b_4s.jpg?v=1"
    },
    {
        "title": "Yi San",
        "year": "2007",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Jpexms.jpg?v=1"
    },
    {
        "title": "Meet You at the Blossom",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pdz6NQ_4s.jpg?v=1"
    },
    {
        "title": "My Only 12%",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/122nd_4s.jpg?v=1"
    },
    {
        "title": "My Strange Hero",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/RWW6Rs.jpg?v=1"
    },
    {
        "title": "Padiwaradda",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2lpod_4s.jpg?v=1"
    },
    {
        "title": "Forensic Heroes",
        "year": "2006",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2N3mds.jpg?v=1"
    },
    {
        "title": "The Witch's Diner",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/w6wqn_4s.jpg?v=1"
    },
    {
        "title": "The Eighth Sense",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vXX13Z_4s.jpg?v=1"
    },
    {
        "title": "Korea-Khitan War",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1w3KP3_4s.jpg?v=1"
    },
    {
        "title": "Professional Single",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/25P7k_4s.jpg?v=1"
    },
    {
        "title": "The Quiz Show Season 2",
        "year": "2009",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/81vNbs.jpg?v=1"
    },
    {
        "title": "Shanai Marriage Honey",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Wo0vm_4s.jpg?v=1"
    },
    {
        "title": "Journey to the West",
        "year": "1986",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/GJBEms.jpg?v=1"
    },
    {
        "title": "Hwarang",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/o7DVPs.jpg?v=1"
    },
    {
        "title": "Wakamono Tachi",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/eKW6n_4s.jpg?v=1"
    },
    {
        "title": "Perfect World",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4BqZw_4s.jpg?v=1"
    },
    {
        "title": "Legend of Fei",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jeWLy_4s.jpg?v=1"
    },
    {
        "title": "Hokuto",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/lOP1Js.jpg?v=1"
    },
    {
        "title": "Royal Nirvana Special",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wgZD8_4s.jpg?v=1"
    },
    {
        "title": "The Package",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/lOdN6s.jpg?v=1"
    },
    {
        "title": "Black",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/X4QEZs.jpg?v=1"
    },
    {
        "title": "Tiger & Dragon",
        "year": "2005",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/9Y2PGs.jpg?v=1"
    },
    {
        "title": "Love Shuffle",
        "year": "2009",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6072Xs.jpg?v=1"
    },
    {
        "title": "Light the Night",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vXXB1W_4s.jpg?v=1"
    },
    {
        "title": "Secret Royal Inspector",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/X1nRX_4s.jpg?v=1"
    },
    {
        "title": "The Law Cafe",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/x33By_4s.jpg?v=1"
    },
    {
        "title": "Khun Mae Suam Roy",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kko1Os.jpg?v=1"
    },
    {
        "title": "Noble Aspirations",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rm15gs.jpg?v=1"
    },
    {
        "title": "Master of My Own",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kBJ5k_4s.jpg?v=1"
    },
    {
        "title": "Mistress",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Q5pwYs.jpg?v=1"
    },
    {
        "title": "Poisoned Love",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wgZX8_4s.jpg?v=1"
    },
    {
        "title": "Do You Like Brahms?",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/dWyEW_4s.jpg?v=1"
    },
    {
        "title": "The Ordinary Glory",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/X8nvgs.jpg?v=1"
    },
    {
        "title": "Project S: SPIKE",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1o3R5s.jpg?v=1"
    },
    {
        "title": "Kanojo wa Kirei datta",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/r8eOj_4s.jpg?v=1"
    },
    {
        "title": "Rising with the Wind",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QDkEv_4s.jpg?v=1"
    },
    {
        "title": "Dark Night and Dawn",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQvAzJ_4s.jpg?v=1"
    },
    {
        "title": "Galileo",
        "year": "2007",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/WDrED_4s.jpg?v=1"
    },
    {
        "title": "Scent of a Woman",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/MX8dws.jpg?v=1"
    },
    {
        "title": "Only Friends",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qYnDzQ_4s.jpg?v=1"
    },
    {
        "title": "Love Playlist Season 3",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/WbxgPs.jpg?v=1"
    },
    {
        "title": "Royal Rumours",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/d00nA5_4s.jpg?v=1"
    },
    {
        "title": "Match Play",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/738QRe_4s.jpg?v=1"
    },
    {
        "title": "Fermat no Ryori",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/RBP2lx_4s.jpg?v=1"
    },
    {
        "title": "Nishiogikubo Mitsuboshi Youshudou",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/1eNOR_4s.jpg?v=1"
    },
    {
        "title": "Insider",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kB1nm_4s.jpg?v=1"
    },
    {
        "title": "Go Go Squid 2: Dt. Appledog's Time",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0jPn7_4s.jpg?v=1"
    },
    {
        "title": "The Killer's Shopping List",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/k8X1g_4s.jpg?v=1"
    },
    {
        "title": "Operation: Special Warfare",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4OmYr_4s.jpg?v=1"
    },
    {
        "title": "Kahogo no Kahoko",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/mk3gPs.jpg?v=1"
    },
    {
        "title": "The Innocent Man",
        "year": "2012",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/9Ozmgs.jpg?v=1"
    },
    {
        "title": "Would You Like a Cup of Coffee?",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/EWwp0_4s.jpg?v=1"
    },
    {
        "title": "Burning Flames",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Xdr68g_4s.jpg?v=1"
    },
    {
        "title": "Blueming",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XDBgO_4s.jpg?v=1"
    },
    {
        "title": "My Sassy Princess",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rwKeE_4s.jpg?v=1"
    },
    {
        "title": "The Eternal Love Season 3",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pZb1D_4s.jpg?v=1"
    },
    {
        "title": "Stand by Me",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2w44zd_4s.jpg?v=1"
    },
    {
        "title": "Hanako to Anne",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2YyEd_4s.jpg?v=1"
    },
    {
        "title": "A-Teen",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Y0z4gs.jpg?v=1"
    },
    {
        "title": "Your Honor",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/O5jzQs.jpg?v=1"
    },
    {
        "title": "The Good Wife",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Ldnd5s.jpg?v=1"
    },
    {
        "title": "A Romance of the Little Forest",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xZ7ky_4s.jpg?v=1"
    },
    {
        "title": "Hilarious Family",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/60y4pp_4s.jpg?v=1"
    },
    {
        "title": "Kishibe Rohan wa Ugokanai",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kK6Bg_4s.jpg?v=1"
    },
    {
        "title": "Anna: Extended Version",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wvXJp_4s.jpg?v=1"
    },
    {
        "title": "Hit the Top",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/elgEes.jpg?v=1"
    },
    {
        "title": "A Gift to the People You Hate",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2WYgw_4s.jpg?v=1"
    },
    {
        "title": "Save Me Season 2",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/y7yYKs.jpg?v=1"
    },
    {
        "title": "Kamen Rider Fourze",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xlWmz_4s.jpg?v=1"
    },
    {
        "title": "Twenty Again",
        "year": "2015",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/850XQs.jpg?v=1"
    },
    {
        "title": "Blood Free",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQ2v7z_4s.jpg?v=1"
    },
    {
        "title": "Anata no Ban Desu",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QxPRQ_4s.jpg?v=1"
    },
    {
        "title": "Mysterious Love",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xJ6vr_4s.jpg?v=1"
    },
    {
        "title": "Wandee Goodday",
        "year": "2024",
        "rating": "8.0",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Kinou Nani Tabeta?",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4nLAw_4s.jpg?v=1"
    },
    {
        "title": "Uchi no Musume wa, Kareshi ga Dekinai!!",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0jRWY_4s.jpg?v=1"
    },
    {
        "title": "Chugakusei Nikki",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ev0qEs.jpg?v=1"
    },
    {
        "title": "Junkyouju Takatsuki Akira no Suisatsu Season 2",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6WPXd_4s.jpg?v=1"
    },
    {
        "title": "KinnPorsche",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rwYeN_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Drive",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/zB5Bes.jpg?v=1"
    },
    {
        "title": "My Lethal Man",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Xdjjxq_4s.jpg?v=1"
    },
    {
        "title": "Chef Fang",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xkvkNs.jpg?v=1"
    },
    {
        "title": "Nagatan to Aoto: Ichika no Ryourijou",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQEpWy_4s.jpg?v=1"
    },
    {
        "title": "The Wolf",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QgP1Q_4s.jpg?v=1"
    },
    {
        "title": "You Are My Spring",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6WVrd_4s.jpg?v=1"
    },
    {
        "title": "Closer to You",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2qNERs.jpg?v=1"
    },
    {
        "title": "You're Beautiful",
        "year": "2009",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/736zns.jpg?v=1"
    },
    {
        "title": "The Legend",
        "year": "2007",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/3oqLRs.jpg?v=1"
    },
    {
        "title": "Riverside Code at Qingming Festival",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/l0lKex_4s.jpg?v=1"
    },
    {
        "title": "Kill My Sins",
        "year": "2025",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/mODRDq_4s.jpg?v=1"
    },
    {
        "title": "Sherlock: The Untold Stories",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XRPvp_4s.jpg?v=1"
    },
    {
        "title": "Likit Haeng Jan",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ZoLoOs.jpg?v=1"
    },
    {
        "title": "Remember You",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2lOkd_4s.jpg?v=1"
    },
    {
        "title": "The Slave Hunters",
        "year": "2010",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0Nd3es.jpg?v=1"
    },
    {
        "title": "Kamen Rider Ex-Aid",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2v5Od_4s.jpg?v=1"
    },
    {
        "title": "Ryusei no Kizuna",
        "year": "2008",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/PxrAgZ_4s.jpg?v=1"
    },
    {
        "title": "Since I Met U",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/W0P8R_4s.jpg?v=1"
    },
    {
        "title": "Brain Works",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jOqjd_4s.jpg?v=1"
    },
    {
        "title": "Before We Get Married",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wKnXJs.jpg?v=1"
    },
    {
        "title": "Eien No Kinou: Complete Edition",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rNNKbm_4s.jpg?v=1"
    },
    {
        "title": "Night of Love With You",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/eBjrp_4s.jpg?v=1"
    },
    {
        "title": "Persona: Sulli",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wJ0qjp_4s.jpg?v=1"
    },
    {
        "title": "Miss Hammurabi",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/dwxJ5s.jpg?v=1"
    },
    {
        "title": "She Was Pretty",
        "year": "2015",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XAd0gs.jpg?v=1"
    },
    {
        "title": "Brewing Love",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/nO2KqN_4s.jpg?v=1"
    },
    {
        "title": "The Love Proposal",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wdb0J_4s.jpg?v=1"
    },
    {
        "title": "Shizuka-chan to Papa",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Xd8LKg_4s.jpg?v=1"
    },
    {
        "title": "The Vigilantes in Masks",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/MXeBgs.jpg?v=1"
    },
    {
        "title": "Stand by Me",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6AA2W_4s.jpg?v=1"
    },
    {
        "title": "Forensic Heroes Season 2",
        "year": "2008",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/nvbBBs.jpg?v=1"
    },
    {
        "title": "ST Aka to Shiro no Sousa File",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rxko2s.jpg?v=1"
    },
    {
        "title": "Be with You",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/EZgW7_4s.jpg?v=1"
    },
    {
        "title": "Life",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/O5dxQs.jpg?v=1"
    },
    {
        "title": "Love Crossed",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/eN2NW_4s.jpg?v=1"
    },
    {
        "title": "Boss & Me",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QpOvWs.jpg?v=1"
    },
    {
        "title": "No Boundary Season 2",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pNQ7E_4s.jpg?v=1"
    },
    {
        "title": "The Midnight Studio",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/E5PpJW_4s.jpg?v=1"
    },
    {
        "title": "The Centimeter of Love",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pr76e_4s.jpg?v=1"
    },
    {
        "title": "Marriage Contract",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/dynK5s.jpg?v=1"
    },
    {
        "title": "Rattan",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2JbNO_4s.jpg?v=1"
    },
    {
        "title": "The Autumn Ballad",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ROyxP_4s.jpg?v=1"
    },
    {
        "title": "The Killing Vote",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/d0zgYK_4s.jpg?v=1"
    },
    {
        "title": "The Queen Who Crowns",
        "year": "2025",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/JBoRJX_4s.jpg?v=1"
    },
    {
        "title": "Karei naru Ichizoku",
        "year": "2007",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XxA0g_4s.jpg?v=1"
    },
    {
        "title": "Leh Nangfah",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/81AxNs.jpg?v=1"
    },
    {
        "title": "Mirai Sentai Timeranger",
        "year": "2000",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wbBm1_4s.jpg?v=1"
    },
    {
        "title": "Bad Romeo",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wZ8XA_4s.jpg?v=1"
    },
    {
        "title": "Sutekina Sen Taxi",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/nd67Ws.jpg?v=1"
    },
    {
        "title": "Tonari no Kazoku wa Aoku Mieru",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/LdLLxs.jpg?v=1"
    },
    {
        "title": "Suki na Hito ga Iru Koto",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/WklZD_4s.jpg?v=1"
    },
    {
        "title": "It's Okay to Be Sensitive",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pnJBys.jpg?v=1"
    },
    {
        "title": "Hero",
        "year": "2001",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/j6BoJ_4s.jpg?v=1"
    },
    {
        "title": "Miss Sherlock",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/DXK25s.jpg?v=1"
    },
    {
        "title": "Being a Hero",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jzDyO_4s.jpg?v=1"
    },
    {
        "title": "Kiss Sixth Sense",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xoWvq_4s.jpg?v=1"
    },
    {
        "title": "Growing Pain",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jXVXws.jpg?v=1"
    },
    {
        "title": "Hajimete Koi wo Shita Hi ni Yomu Hanashi",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2Ekv2_4s.jpg?v=1"
    },
    {
        "title": "Miracle That We Met",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vJqdps.jpg?v=1"
    },
    {
        "title": "RYOMADEN",
        "year": "2010",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/d0mYds.jpg?v=1"
    },
    {
        "title": "Qing Luo",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2ApDW_4s.jpg?v=1"
    },
    {
        "title": "Wedding Plan: Uncut",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Z81lVJ_4s.jpg?v=1"
    },
    {
        "title": "Always on the Move",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2wQxvV_4s.jpg?v=1"
    },
    {
        "title": "Black & White",
        "year": "2009",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/aVqEMs.jpg?v=1"
    },
    {
        "title": "Hero Season 2",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/RZNWrs.jpg?v=1"
    },
    {
        "title": "Tsuiraku JK to Haijin Kyoshi Lesson 2",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQ4NYd_4s.jpg?v=1"
    },
    {
        "title": "Yong An Dream",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Z8vkN8_4s.jpg?v=1"
    },
    {
        "title": "The Secret Life of My Secretary",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6nYyXs.jpg?v=1"
    },
    {
        "title": "Children of a Lesser God",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/yE6K3s.jpg?v=1"
    },
    {
        "title": "Aogeba Toutoshi",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qEgzd_4s.jpg?v=1"
    },
    {
        "title": "Rivalry",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qdJqD_4s.jpg?v=1"
    },
    {
        "title": "In Hand",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/72Ewbs.jpg?v=1"
    },
    {
        "title": "Lost Love in Times",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XZxPds.jpg?v=1"
    },
    {
        "title": "GTO: Remake",
        "year": "2012",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vopngs.jpg?v=1"
    },
    {
        "title": "Be My Favorite",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kAvOQO_4s.jpg?v=1"
    },
    {
        "title": "Danger Zone Season 2: The Silver Lining",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2Wy1E_4s.jpg?v=1"
    },
    {
        "title": "Unique Lady Season 3",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XyBVx_4s.jpg?v=1"
    },
    {
        "title": "I'm Sorry, I Love You",
        "year": "2004",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/b3JmNs.jpg?v=1"
    },
    {
        "title": "Dream High",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/5vpNAs.jpg?v=1"
    },
    {
        "title": "Princess Silver",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vOw2es.jpg?v=1"
    },
    {
        "title": "Lovely Writer",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ZPz0L_4s.jpg?v=1"
    },
    {
        "title": "Gomenne Seishun!",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4wxRQs.jpg?v=1"
    },
    {
        "title": "Let's Meet Now",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/B6Ljq_4s.jpg?v=1"
    },
    {
        "title": "Good Life - Arigatou, Papa. Sayonara",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ly6dLs.jpg?v=1"
    },
    {
        "title": "Love Better Than Immortality",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4px7Zs.jpg?v=1"
    },
    {
        "title": "Utsukushii Kare Season 2",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/x46vV0_4s.jpg?v=1"
    },
    {
        "title": "Born to Run",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2w4ggP_4s.jpg?v=1"
    },
    {
        "title": "Something in My Room: Uncut",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0wpr5O_4s.jpg?v=1"
    },
    {
        "title": "Tomorrow with You",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2dWREs.jpg?v=1"
    },
    {
        "title": "Kimi to Nara Koi wo Shite Mite mo",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Z8g5n1_4s.jpg?v=1"
    },
    {
        "title": "Sugar Dog Life",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jQ3xnJ_4s.jpg?v=1"
    },
    {
        "title": "Sleep with Me",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/eBlgY_4s.jpg?v=1"
    },
    {
        "title": "Shadow Detective Season 2",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2wmq1V_4s.jpg?v=1"
    },
    {
        "title": "Ho Goo's Love",
        "year": "2015",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/p2zoQs.jpg?v=1"
    },
    {
        "title": "About Youth",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vPPgZ_4s.jpg?v=1"
    },
    {
        "title": "Waru: Hataraku no ga Kakko Warui Nante Dare ga Itta?",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Q4O0Y_4s.jpg?v=1"
    },
    {
        "title": "Chief of Staff",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/RJP8gs.jpg?v=1"
    },
    {
        "title": "Sparrow",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/g4b61s.jpg?v=1"
    },
    {
        "title": "Beautiful Life",
        "year": "2000",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QLgR5_4s.jpg?v=1"
    },
    {
        "title": "The Sleepless Princess",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4j2XZ_4s.jpg?v=1"
    },
    {
        "title": "With You",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vxlJW_4s.jpg?v=1"
    },
    {
        "title": "100-manen no Onna-tachi",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/pQV5r_4s.jpg?v=1"
    },
    {
        "title": "Bossam: Steal the Fate",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/dkVP0_4s.jpg?v=1"
    },
    {
        "title": "Wok of Love",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wmz5ns.jpg?v=1"
    },
    {
        "title": "Unmasked",
        "year": "2025",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Pxoqm3_4s.jpg?v=1"
    },
    {
        "title": "High&Low: The Worst Episode.O",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/12Yy6_4s.jpg?v=1"
    },
    {
        "title": "Avalanche",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qZY3B_4s.jpg?v=1"
    },
    {
        "title": "Unlock My Boss",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xeQgy_4s.jpg?v=1"
    },
    {
        "title": "No Boundary",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/BnAj1_4s.jpg?v=1"
    },
    {
        "title": "Wind Direction",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/x4nmbj_4s.jpg?v=1"
    },
    {
        "title": "Shut Up: Flower Boy Band",
        "year": "2012",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/zBLwzs.jpg?v=1"
    },
    {
        "title": "Old Fashion Cupcake",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XYKNd_4s.jpg?v=1"
    },
    {
        "title": "Memories of the Alhambra",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/bwZ6ws.jpg?v=1"
    },
    {
        "title": "The Kingdom of the Winds",
        "year": "2008",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vP0re_4s.jpg?v=1"
    },
    {
        "title": "Moment at Eighteen",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XwBpqs.jpg?v=1"
    },
    {
        "title": "Boku Dake ga 17-sai no Sekai de",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/q8J7ds.jpg?v=1"
    },
    {
        "title": "Nueng Dao Fah Diew",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/24m1Os.jpg?v=1"
    },
    {
        "title": "Never Let Me Go",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/BXzN5_4s.jpg?v=1"
    },
    {
        "title": "Dear.M",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/67g2j_4s.jpg?v=1"
    },
    {
        "title": "The Trunk",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ABZ6wE_4s.jpg?v=1"
    },
    {
        "title": "A Female Student Arrives at the Imperial College",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Eb4XQ_4s.jpg?v=1"
    },
    {
        "title": "Good Luck!!",
        "year": "2003",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/kLvV8_4s.jpg?v=1"
    },
    {
        "title": "The Best Day of My Life",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vXggAB_4s.jpg?v=1"
    },
    {
        "title": "Return of the Condor Heroes",
        "year": "2006",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/abbjas.jpg?v=1"
    },
    {
        "title": "Something in the Rain",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/yE4jBs.jpg?v=1"
    },
    {
        "title": "Island Part 2",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/BddB47_4s.jpg?v=1"
    },
    {
        "title": "Double",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/dlLgd_4s.jpg?v=1"
    },
    {
        "title": "I Don\u2019t Want to Be Brothers with You",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rD5Py_4s.jpg?v=1"
    },
    {
        "title": "The Victims' Game Season 2",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QJYYL4_4s.jpg?v=1"
    },
    {
        "title": "Blacklist",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4OjqJ_4s.jpg?v=1"
    },
    {
        "title": "The Deliberations of Love",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rNYkYg_4s.jpg?v=1"
    },
    {
        "title": "Vice Versa",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/j5LLO_4s.jpg?v=1"
    },
    {
        "title": "The Golden Spoon",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XWvlw_4s.jpg?v=1"
    },
    {
        "title": "Byakuyako",
        "year": "2006",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/PxZ0Ls.jpg?v=1"
    },
    {
        "title": "Ie Uru Onna",
        "year": "2016",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/2EkbW_4s.jpg?v=1"
    },
    {
        "title": "Tiger and Crane",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qY2Red_4s.jpg?v=1"
    },
    {
        "title": "Please Feel at Ease Mr. Ling",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/jNOPw_4s.jpg?v=1"
    },
    {
        "title": "The Empress of China",
        "year": "2014",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/YAwAgs.jpg?v=1"
    },
    {
        "title": "You Are So Sweet",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Rbx6R_4s.jpg?v=1"
    },
    {
        "title": "First Romance",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/XOVAx_4s.jpg?v=1"
    },
    {
        "title": "Argon",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4571ds.jpg?v=1"
    },
    {
        "title": "Good Old Days",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/wvjpn_4s.jpg?v=1"
    },
    {
        "title": "Thong EK: The Herbal Master",
        "year": "2019",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/lJlxxs.jpg?v=1"
    },
    {
        "title": "Heroes",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rNxKdm_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Gaim",
        "year": "2013",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/b3eKEs.jpg?v=1"
    },
    {
        "title": "Shadow Beauty",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0nrbO_4s.jpg?v=1"
    },
    {
        "title": "Ichiban Sukina Hana",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Xd8Oqd_4s.jpg?v=1"
    },
    {
        "title": "Dinner Mate",
        "year": "2020",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Bwzxbs.jpg?v=1"
    },
    {
        "title": "Runaway - Aisuru Kimi no Tame ni",
        "year": "2011",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/xXEWXs.jpg?v=1"
    },
    {
        "title": "Beach Boys",
        "year": "1997",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/6PWwO_4s.jpg?v=1"
    },
    {
        "title": "She Would Never Know",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/81Z3jW_4s.jpg?v=1"
    },
    {
        "title": "The Count of Monte-Cristo: Great Revenge",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/lyRzLs.jpg?v=1"
    },
    {
        "title": "The Universe\u2019s Star",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/0YWVk_4s.jpg?v=1"
    },
    {
        "title": "Imitation",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WwbnX_4s.jpg?v=1"
    },
    {
        "title": "Poong, the Joseon Psychiatrist",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EenEO_4s.jpg?v=1"
    },
    {
        "title": "Day and Night",
        "year": "2017",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/b2dlEs.jpg?v=1"
    },
    {
        "title": "Age of Legends",
        "year": "2018",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/evKbns.jpg?v=1"
    },
    {
        "title": "Anata no Ban Desu - Counterattack",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/d303z_4s.jpg?v=1"
    },
    {
        "title": "Put Your Head on My Shoulder",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RNj3r_4s.jpg?v=1"
    },
    {
        "title": "25 Ji, Akasaka de",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WP3DnW_4s.jpg?v=1"
    },
    {
        "title": "Missing Crown Prince",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/4e3rLd_4s.jpg?v=1"
    },
    {
        "title": "Draw the Line",
        "year": "2022",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/qm14P_4s.jpg?v=1"
    },
    {
        "title": "TRICK Season 3",
        "year": "2003",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/GleLMs.jpg?v=1"
    },
    {
        "title": "City of Romance",
        "year": "2025",
        "rating": "8.1",
        "image": "https://i.mydramalist.com/YY4kVA_4s.jpg?v=1"
    },
    {
        "title": "My Treasure",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/xJ0wr_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Ryuki",
        "year": "2002",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/vZyYq_4s.jpg?v=1"
    },
    {
        "title": "Find Yourself",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/p4nWbs.jpg?v=1"
    },
    {
        "title": "City of Streamer",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BY8pA_4s.jpg?v=1"
    },
    {
        "title": "My Tooth Your Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jkwpd_4s.jpg?v=1"
    },
    {
        "title": "Dokgo Rewind",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Y0ZNAs.jpg?v=1"
    },
    {
        "title": "Boys Be Brave!",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qYAln5_4s.jpg?v=1"
    },
    {
        "title": "Tokuso Sentai Dekaranger",
        "year": "2004",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/l0PqyJ_4s.jpg?v=1"
    },
    {
        "title": "Chinese Paladin Season 3",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/akQOGs.jpg?v=1"
    },
    {
        "title": "Keiji Yugami",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WQPwWs.jpg?v=1"
    },
    {
        "title": "Sweet Home Season 2",
        "year": "2023",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/QJKkR7_4s.jpg?v=1"
    },
    {
        "title": "Just an Encore",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RWyPYs.jpg?v=1"
    },
    {
        "title": "Captivating the King",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/Bd2Vjl_4s.jpg?v=1"
    },
    {
        "title": "Kotaki Kyodai to Shikuhakku",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/q8p70s.jpg?v=1"
    },
    {
        "title": "Ayaka-chan wa Hiroko-senpai ni Koishiteru",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4eNDEk_4s.jpg?v=1"
    },
    {
        "title": "Kill Me Love Me",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/g0mk2P_4s.jpg?v=1"
    },
    {
        "title": "Original Sin",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/JKbLls.jpg?v=1"
    },
    {
        "title": "Ace Troops",
        "year": "2021",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/X0Vzg_4s.jpg?v=1"
    },
    {
        "title": "Make My Heart Smile",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Ey2kz_4s.jpg?v=1"
    },
    {
        "title": "Unchained Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BRwLq_4s.jpg?v=1"
    },
    {
        "title": "Across the Ocean to See You",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Nvwxes.jpg?v=1"
    },
    {
        "title": "U-Prince: The Crazy Artist",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/NP0XEs.jpg?v=1"
    },
    {
        "title": "Everlasting Longing",
        "year": "2025",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/eYwEWE_4s.jpg?v=1"
    },
    {
        "title": "Missing You",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6pLePs.jpg?v=1"
    },
    {
        "title": "Every You, Every Me",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4eYr2Q_4s.jpg?v=1"
    },
    {
        "title": "Ousama ni Sasagu Kusuriyubi",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6005pj_4s.jpg?v=1"
    },
    {
        "title": "Rookies",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6vXrps.jpg?v=1"
    },
    {
        "title": "I Don't Love You Yet",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RAr6os.jpg?v=1"
    },
    {
        "title": "Dakara Watashi wa Oshimashita",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qOKgDs.jpg?v=1"
    },
    {
        "title": "I May Love You",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdeVrJ_4s.jpg?v=1"
    },
    {
        "title": "Dog Knows Everything",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdzX7w_4s.jpg?v=1"
    },
    {
        "title": "Love Playlist",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EJyvbs.jpg?v=1"
    },
    {
        "title": "Iryu Team Medical Dragon 2",
        "year": "2007",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/YyWOWs.jpg?v=1"
    },
    {
        "title": "Gokusen Season 2",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/R5Y7E_4s.jpg?v=1"
    },
    {
        "title": "Shadow Detective",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BQgvA_4s.jpg?v=1"
    },
    {
        "title": "Death Note",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/46kJw_4s.jpg?v=1"
    },
    {
        "title": "Ra Raerng Fai",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/b2V8Ns.jpg?v=1"
    },
    {
        "title": "Tender Light",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/rNxwE7_4s.jpg?v=1"
    },
    {
        "title": "Poong, the Joseon Psychiatrist Season 2",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pqmpV_4s.jpg?v=1"
    },
    {
        "title": "Light the Night Season 3",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WkykW_4s.jpg?v=1"
    },
    {
        "title": "Anti-Hero",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vXqeJX_4s.jpg?v=1"
    },
    {
        "title": "Strawberry Night",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/40zdQs.jpg?v=1"
    },
    {
        "title": "Buzzer Beat",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Z5Vy1s.jpg?v=1"
    },
    {
        "title": "Symphony's Romance",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Eg7bW_4s.jpg?v=1"
    },
    {
        "title": "Tumbling",
        "year": "2010",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ErLY5s.jpg?v=1"
    },
    {
        "title": "The Chang'an Youth",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vzE2g_4s.jpg?v=1"
    },
    {
        "title": "Yakou Kanransha",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4elVJs.jpg?v=1"
    },
    {
        "title": "GO into Your Heart",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BWdE6_4s.jpg?v=1"
    },
    {
        "title": "Heart Surgeons",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/7glRys.jpg?v=1"
    },
    {
        "title": "Gangnam B-Side",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/O8y12y_4s.jpg?v=1"
    },
    {
        "title": "Ichikei no Karasu",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ZXxrY_4s.jpg?v=1"
    },
    {
        "title": "55:15 Never Too Late",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EV3jm_4s.jpg?v=1"
    },
    {
        "title": "Begin Again",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/ABw1r4_4s.jpg?v=1"
    },
    {
        "title": "V.I.P",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E21Jbs.jpg?v=1"
    },
    {
        "title": "Octogenarian and the 90s",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/47oZQ_4s.jpg?v=1"
    },
    {
        "title": "Sotus",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/PdLnLs.jpg?v=1"
    },
    {
        "title": "Spring Turns to Spring",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Oxnqks.jpg?v=1"
    },
    {
        "title": "My Family",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RoLdr_4s.jpg?v=1"
    },
    {
        "title": "Love Song in Winter",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/3oj4Lj_4s.jpg?v=1"
    },
    {
        "title": "Twenty Your Life On",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Zd831_4s.jpg?v=1"
    },
    {
        "title": "My Husband Got a Family",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/X4Q3qs.jpg?v=1"
    },
    {
        "title": "The Last Empress",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vOOjgs.jpg?v=1"
    },
    {
        "title": "He\u2019s into Her",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BnVvl_4s.jpg?v=1"
    },
    {
        "title": "Animals",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vpn0e_4s.jpg?v=1"
    },
    {
        "title": "Where the Lost Ones Go",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/KDeyJs.jpg?v=1"
    },
    {
        "title": "Smile, You",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/90rkMs.jpg?v=1"
    },
    {
        "title": "The Big Boss Season 2",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vQ7LDs.jpg?v=1"
    },
    {
        "title": "Double Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jRokr_4s.jpg?v=1"
    },
    {
        "title": "Higashino Keigo Samayou Yaiba",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Z6OBL_4s.jpg?v=1"
    },
    {
        "title": "Die Now",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jrrpJs.jpg?v=1"
    },
    {
        "title": "Flash Marriage",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jzQWB_4s.jpg?v=1"
    },
    {
        "title": "Noble Aspirations Season 2",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EpyOOs.jpg?v=1"
    },
    {
        "title": "Bromance",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/znoQ1s.jpg?v=1"
    },
    {
        "title": "Never Give Up",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RoEpr_4s.jpg?v=1"
    },
    {
        "title": "Doctor Lawyer",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BJ5d7_4s.jpg?v=1"
    },
    {
        "title": "Kisarazu Cat's Eye",
        "year": "2002",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kZ2Dd_4s.jpg?v=1"
    },
    {
        "title": "Seo Yeong, My Daughter",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/bvrgNs.jpg?v=1"
    },
    {
        "title": "That Winter, the Wind Blows",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Bdgzqs.jpg?v=1"
    },
    {
        "title": "Caged Again",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/b3ke3w_4s.jpg?v=1"
    },
    {
        "title": "Futekisetsu ni mo Hodo ga Aru!",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/x42VoN_4s.jpg?v=1"
    },
    {
        "title": "Twenty-Twenty",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1lAw5_4s.jpg?v=1"
    },
    {
        "title": "Someone Like You",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/7rozBs.jpg?v=1"
    },
    {
        "title": "Occupied Heart",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vJ5Ygs.jpg?v=1"
    },
    {
        "title": "My Bratty Princess",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2Qq2Vs.jpg?v=1"
    },
    {
        "title": "Imperfect Victim",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdZK0J_4s.jpg?v=1"
    },
    {
        "title": "Undercover",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4dd4d_4s.jpg?v=1"
    },
    {
        "title": "Sleepless Society: Insomnia",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xrjlqs.jpg?v=1"
    },
    {
        "title": "Here's My Plan",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BnjE1_4s.jpg?v=1"
    },
    {
        "title": "Cambrian Period",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BwpR1s.jpg?v=1"
    },
    {
        "title": "Osozaki no Himawari",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/gZ1mds.jpg?v=1"
    },
    {
        "title": "Please Come Back, Mister",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XAJBps.jpg?v=1"
    },
    {
        "title": "Only for Love",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4e0A1Q_4s.jpg?v=1"
    },
    {
        "title": "Joseon Attorney: A Morality",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wJJlwp_4s.jpg?v=1"
    },
    {
        "title": "General and I",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/R3K6Es.jpg?v=1"
    },
    {
        "title": "Strange Tales of Jiang Cheng",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BdN7R7_4s.jpg?v=1"
    },
    {
        "title": "Last Friends",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/60zDxj_4s.jpg?v=1"
    },
    {
        "title": "Yuusha Yoshihiko to Maou no Shiro",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2wDQPs.jpg?v=1"
    },
    {
        "title": "Dine with Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ZVBlJ_4s.jpg?v=1"
    },
    {
        "title": "Fake Princess",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ZoQzLs.jpg?v=1"
    },
    {
        "title": "Family's Honor",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/94eoks.jpg?v=1"
    },
    {
        "title": "Dominator of Martial Gods",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4egANY_4s.jpg?v=1"
    },
    {
        "title": "Les Belles",
        "year": "2025",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/JBAnwd_4s.jpg?v=1"
    },
    {
        "title": "A-Teen Season 2",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jlBjOs.jpg?v=1"
    },
    {
        "title": "Hello, Me!",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/v8g0D_4s.jpg?v=1"
    },
    {
        "title": "Follow Your Heart",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Z8dd07_4s.jpg?v=1"
    },
    {
        "title": "Queen of Mystery Season 2",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/AYJQPs.jpg?v=1"
    },
    {
        "title": "Descendants of the Sun",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6Eb1X_4s.jpg?v=1"
    },
    {
        "title": "Kimi no Hana ni Naru",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/k5Yjg_4s.jpg?v=1"
    },
    {
        "title": "The Boy Next Door",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XZlzqs.jpg?v=1"
    },
    {
        "title": "The Emperor: Owner of the Mask",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/lO75bs.jpg?v=1"
    },
    {
        "title": "Youkai Sharehouse",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/W7mX3_4s.jpg?v=1"
    },
    {
        "title": "Wu Xin: The Monster Killer",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jybOws.jpg?v=1"
    },
    {
        "title": "Hak Lai, My Lady",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BR6v6_4s.jpg?v=1"
    },
    {
        "title": "Imperfect Us",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/x4mNDX_4s.jpg?v=1"
    },
    {
        "title": "The Romance of Hua Rong",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qo63zs.jpg?v=1"
    },
    {
        "title": "Mashin Sentai Kiramager",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/nOJlX4_4s.jpg?v=1"
    },
    {
        "title": "Iris",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/816kQs.jpg?v=1"
    },
    {
        "title": "Kaseifu no Mita",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6dKw0_4s.jpg?v=1"
    },
    {
        "title": "Unsung Cinderella: Byoin Yakuzaishi no Shohosen",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Egmo0_4s.jpg?v=1"
    },
    {
        "title": "Priest",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/AvzQZs.jpg?v=1"
    },
    {
        "title": "Love Is Science?",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Boew1_4s.jpg?v=1"
    },
    {
        "title": "So I Married an Anti-Fan",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ABR884_4s.jpg?v=1"
    },
    {
        "title": "When the Devil Calls Your Name",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kJPlrs.jpg?v=1"
    },
    {
        "title": "Evil Minds",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/bvbnes.jpg?v=1"
    },
    {
        "title": "Thirteen Years of Dust",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1wv3qK_4s.jpg?v=1"
    },
    {
        "title": "Your Sky: Uncut",
        "year": "2024",
        "rating": "8.2",
        "image": "https://i.mydramalist.com/KpvW8J_4s.jpg?v=1"
    },
    {
        "title": "Everyone Loves Me",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xdv1QO_4s.jpg?v=1"
    },
    {
        "title": "Take 1",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/dENke_4s.jpg?v=1"
    },
    {
        "title": "Growling Tiger, Roaring Dragon",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/X4p6Js.jpg?v=1"
    },
    {
        "title": "The Great Shaman Ga Doo Shim",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xk4dX_4s.jpg?v=1"
    },
    {
        "title": "Comrades",
        "year": "2010",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/9O88bs.jpg?v=1"
    },
    {
        "title": "Hero Is Back",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/PxNKv0_4s.jpg?v=1"
    },
    {
        "title": "Koizora",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/MA03Gs.jpg?v=1"
    },
    {
        "title": "Pied Piper",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Q2Al4s.jpg?v=1"
    },
    {
        "title": "Link Click",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WP7JlD_4s.jpg?v=1"
    },
    {
        "title": "Fall in Love",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RWrDPs.jpg?v=1"
    },
    {
        "title": "Like a Flowing River",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/bwny6s.jpg?v=1"
    },
    {
        "title": "Dreaming Back to the Qing Dynasty",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/r0XXNs.jpg?v=1"
    },
    {
        "title": "The Love by Hypnotic",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pOkqEs.jpg?v=1"
    },
    {
        "title": "Last",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1g3dzs.jpg?v=1"
    },
    {
        "title": "Deep Lurk",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vXnyJ8_4s.jpg?v=1"
    },
    {
        "title": "Usotoki Rhetoric",
        "year": "2024",
        "rating": "8.0",
        "image": "https://i.mydramalist.com/60ln8O_4s.jpg?v=1"
    },
    {
        "title": "The Lies Within",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/j8EJzs.jpg?v=1"
    },
    {
        "title": "My Lovely Sam Soon",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/nOQjWs.jpg?v=1"
    },
    {
        "title": "Falsify",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pkz2Vs.jpg?v=1"
    },
    {
        "title": "The Queen's Classroom",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/abbQxs.jpg?v=1"
    },
    {
        "title": "My Dear Guardian",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BnOKV_4s.jpg?v=1"
    },
    {
        "title": "Real:Time:Love Season 2",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wV35gs.jpg?v=1"
    },
    {
        "title": "Mrs. Cop",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Rjw7Es.jpg?v=1"
    },
    {
        "title": "Fight Song",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pLw2D_4s.jpg?v=1"
    },
    {
        "title": "Seirei no Moribito Season 3",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/X8jzJs.jpg?v=1"
    },
    {
        "title": "Rental Nan mo Shinai Hito",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vqNvXs.jpg?v=1"
    },
    {
        "title": "Cosmetic Playlover",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0wRnzO_4s.jpg?v=1"
    },
    {
        "title": "Siren",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E0QXp_4s.jpg?v=1"
    },
    {
        "title": "Khaen Rak Salap Chata",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pZr8V_4s.jpg?v=1"
    },
    {
        "title": "Please Don\u2019t Spoil Me",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RKDxx_4s.jpg?v=1"
    },
    {
        "title": "Never Say Goodbye",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/e18qK_4s.jpg?v=1"
    },
    {
        "title": "Sunshine by My Side",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vXOZK8_4s.jpg?v=1"
    },
    {
        "title": "The Frog",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E5Ndl7_4s.jpg?v=1"
    },
    {
        "title": "Kamisama no Ekohiiki",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E1Vnz_4s.jpg?v=1"
    },
    {
        "title": "The Justice",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4Vz0k_4s.jpg?v=1"
    },
    {
        "title": "Laws of Attraction",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pd7x4y_4s.jpg?v=1"
    },
    {
        "title": "BOSS",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BVN6R_4s.jpg?v=1"
    },
    {
        "title": "The Return of the Condor Heroes",
        "year": "1983",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/aEQY0s.jpg?v=1"
    },
    {
        "title": "Secret Mother",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/VbWKvs.jpg?v=1"
    },
    {
        "title": "Smoking",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4eYwwr_4s.jpg?v=1"
    },
    {
        "title": "Eternal Brotherhood",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdvXrZ_4s.jpg?v=1"
    },
    {
        "title": "HIStory2",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Bd2jq1_4s.jpg?v=1"
    },
    {
        "title": "TRICK Season 2",
        "year": "2002",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/MR1VGs.jpg?v=1"
    },
    {
        "title": "House of Ninjas",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1wqNV7_4s.jpg?v=1"
    },
    {
        "title": "Gameboys Season 2",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0okY7_4s.jpg?v=1"
    },
    {
        "title": "Dong Jae, the Good or the Bastard",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/l0QLZQ_4s.jpg?v=1"
    },
    {
        "title": "anone",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/eKWXY_4s.jpg?v=1"
    },
    {
        "title": "Gochisosan",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/KAJb4s.jpg?v=1"
    },
    {
        "title": "Sing My Crush",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdZ8Dn_4s.jpg?v=1"
    },
    {
        "title": "Just Dance",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/lJOevs.jpg?v=1"
    },
    {
        "title": "Our Dating Sim",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WPjO4P_4s.jpg?v=1"
    },
    {
        "title": "Attention, Love!",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/elWPes.jpg?v=1"
    },
    {
        "title": "Kaitou Sentai Lupinranger VS Keisatsu Sentai Patranger",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0V6WN_4s.jpg?v=1"
    },
    {
        "title": "With You",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/eODJK_4s.jpg?v=1"
    },
    {
        "title": "Arang and the Magistrate",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/GPR38s.jpg?v=1"
    },
    {
        "title": "Sapai Import",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qKyzB_4s.jpg?v=1"
    },
    {
        "title": "Once Upon a Small Town",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/rPj2j_4s.jpg?v=1"
    },
    {
        "title": "Desire Catcher",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/60vbJX_4s.jpg?v=1"
    },
    {
        "title": "Our Times",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BWjLq_4s.jpg?v=1"
    },
    {
        "title": "Fortune Writer",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/d0AzN5_4s.jpg?v=1"
    },
    {
        "title": "Witch's Romance",
        "year": "2014",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/JBDjws.jpg?v=1"
    },
    {
        "title": "Doctor X Season 7",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2W1WE_4s.jpg?v=1"
    },
    {
        "title": "My Girl",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pVOZr_4s.jpg?v=1"
    },
    {
        "title": "One Fine Week",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qbXgPs.jpg?v=1"
    },
    {
        "title": "Dai Renai: Boku wo Wasureru Kimi to",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0O7lEs.jpg?v=1"
    },
    {
        "title": "Less Than Evil",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/00OLes.jpg?v=1"
    },
    {
        "title": "Love of Thousand Years",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/dAJ4Ds.jpg?v=1"
    },
    {
        "title": "Gakkou no Kaidan",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pk548s.jpg?v=1"
    },
    {
        "title": "37.5\u00b0C no Namida",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vJE4es.jpg?v=1"
    },
    {
        "title": "46 Days",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RdeO6_4s.jpg?v=1"
    },
    {
        "title": "The Little Nyonya",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1zelz_4s.jpg?v=1"
    },
    {
        "title": "Dream Garden",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/peQJD_4s.jpg?v=1"
    },
    {
        "title": "The Eight",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ejymEs.jpg?v=1"
    },
    {
        "title": "Seirei no Moribito Season 2",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/3mjrms.jpg?v=1"
    },
    {
        "title": "Youth",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ly1NNs.jpg?v=1"
    },
    {
        "title": "Because of Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xo0Zx_4s.jpg?v=1"
    },
    {
        "title": "Kurosagi",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jk1Rr_4s.jpg?v=1"
    },
    {
        "title": "Finding Soul",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/636qPs.jpg?v=1"
    },
    {
        "title": "G-Senjou no Anata to Watashi",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/v8gmg_4s.jpg?v=1"
    },
    {
        "title": "Lesson in Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ryBpy_4s.jpg?v=1"
    },
    {
        "title": "School 2021",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pLJ8E_4s.jpg?v=1"
    },
    {
        "title": "Kanojo wa Uso wo Aishisugiteru - Sidestory",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2wE0Os.jpg?v=1"
    },
    {
        "title": "The Legend of Dugu",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wex48s.jpg?v=1"
    },
    {
        "title": "Decoy: Part 1",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kgnZw_4s.jpg?v=1"
    },
    {
        "title": "The Destiny of White Snake",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/bK5y6s.jpg?v=1"
    },
    {
        "title": "It's Okay to Be Sensitive Season 2",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BbKo6s.jpg?v=1"
    },
    {
        "title": "Kokoro no Kizu wo Iyasu to Iu Koto",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Rr4PYs.jpg?v=1"
    },
    {
        "title": "The Three Musketeers",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z8b0ks.jpg?v=1"
    },
    {
        "title": "Kindaichi Shonen no Jikenbo 5",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6D7b2_4s.jpg?v=1"
    },
    {
        "title": "W.H.Y.",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/D8xjzs.jpg?v=1"
    },
    {
        "title": "Hello Stranger",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/B13o6_4s.jpg?v=1"
    },
    {
        "title": "Check in Hanyang",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VXOmlJ_4s.jpg?v=1"
    },
    {
        "title": "Monster Next Door",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WPWnDm_4s.jpg?v=1"
    },
    {
        "title": "Heroes",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/rKKwm_4s.jpg?v=1"
    },
    {
        "title": "SOTUS S",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kP1zb_4s.jpg?v=1"
    },
    {
        "title": "Dr. Brain",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EVJB5_4s.jpg?v=1"
    },
    {
        "title": "She and Her Perfect Husband",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/roWAp_4s.jpg?v=1"
    },
    {
        "title": "Marumo no Okite",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BpEozs.jpg?v=1"
    },
    {
        "title": "Piang Chai Khon Nee Mai Chai Poo Wised",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/QdgZ2s.jpg?v=1"
    },
    {
        "title": "Tracer",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2e6OR_4s.jpg?v=1"
    },
    {
        "title": "An Oriental Odyssey",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/rY7xms.jpg?v=1"
    },
    {
        "title": "Bara no nai Hanaya",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/60lR2s.jpg?v=1"
    },
    {
        "title": "Lovestruck in the City",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1wEBJK_4s.jpg?v=1"
    },
    {
        "title": "Let's Eat",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/NdjXYs.jpg?v=1"
    },
    {
        "title": "Hwang Jin Yi",
        "year": "2006",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/d0Q0gs.jpg?v=1"
    },
    {
        "title": "Kakegurui Season 2",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BnZLV_4s.jpg?v=1"
    },
    {
        "title": "Love Affairs in the Afternoon",
        "year": "2019",
        "rating": "7.9",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Hanbun, Aoi",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/8pnn2s.jpg?v=1"
    },
    {
        "title": "My Beautiful Bride",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vobL2s.jpg?v=1"
    },
    {
        "title": "Let's Eat Season 2",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vZPEB_4s.jpg?v=1"
    },
    {
        "title": "Police University",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/rj2DN_4s.jpg?v=1"
    },
    {
        "title": "My Love Mix-Up!",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wJe8dJ_4s.jpg?v=1"
    },
    {
        "title": "My Second Aoharu",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/60y0n2_4s.jpg?v=1"
    },
    {
        "title": "Meteor Garden",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/NrEDys.jpg?v=1"
    },
    {
        "title": "Yong Jiu Grocery Store",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0pW86s.jpg?v=1"
    },
    {
        "title": "The Princess and the Werewolf",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WP5mdm_4s.jpg?v=1"
    },
    {
        "title": "It's Beautiful Now",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/k2lrO_4s.jpg?v=1"
    },
    {
        "title": "Reborn",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Bmx8Vs.jpg?v=1"
    },
    {
        "title": "Stairway to Heaven",
        "year": "2003",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Lw8pBs.jpg?v=1"
    },
    {
        "title": "Marry Me Now?",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kAd2qb_4s.jpg?v=1"
    },
    {
        "title": "Where Your Eyes Linger",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/w8LAJs.jpg?v=1"
    },
    {
        "title": "You Are My Destiny",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/we65k_4s.jpg?v=1"
    },
    {
        "title": "Cheo Yong Season 2",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kyg6Os.jpg?v=1"
    },
    {
        "title": "Ohisama",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/mOzx0s.jpg?v=1"
    },
    {
        "title": "Sekai no Chuushin de, Ai wo Sakebu",
        "year": "2004",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WKJDR_4s.jpg?v=1"
    },
    {
        "title": "Bloody Romance",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/60EyzO_4s.jpg?v=1"
    },
    {
        "title": "3 Will Be Free",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vWKzXs.jpg?v=1"
    },
    {
        "title": "Goodbye to Goodbye",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/AYNW8s.jpg?v=1"
    },
    {
        "title": "My Man Is Cupid",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0w0rz7_4s.jpg?v=1"
    },
    {
        "title": "Khun Chai Pudhiphat",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0Yo1r_4s.jpg?v=1"
    },
    {
        "title": "Emergency Couple",
        "year": "2014",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/x4QXEs.jpg?v=1"
    },
    {
        "title": "Doctor Stranger",
        "year": "2014",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jQ3Nvs.jpg?v=1"
    },
    {
        "title": "35 sai no Koukousei",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/7n1Bjs.jpg?v=1"
    },
    {
        "title": "Dhevaprom: Kwanruetai",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/XdgJkx_4s.jpg?v=1"
    },
    {
        "title": "The Gentlemen of Wolgyesu Tailor Shop",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Yo6EAs.jpg?v=1"
    },
    {
        "title": "Ataru",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/8YAWDs.jpg?v=1"
    },
    {
        "title": "Saikou no Rikon",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/X4LeJs.jpg?v=1"
    },
    {
        "title": "Nihon Chinbotsu: Kibo no Hito",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4WRJk_4s.jpg?v=1"
    },
    {
        "title": "All about My Mom",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/lB2QJs.jpg?v=1"
    },
    {
        "title": "Candle in the Tomb: The Wrath of Time",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ElrKms.jpg?v=1"
    },
    {
        "title": "Romance in the Rain",
        "year": "2001",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Mjqzrs.jpg?v=1"
    },
    {
        "title": "Dark Blue Kiss",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1qAozs.jpg?v=1"
    },
    {
        "title": "Kiss Scene in Yeonnamdong",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1Qlxds.jpg?v=1"
    },
    {
        "title": "First Love Again",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1Rm5b_4s.jpg?v=1"
    },
    {
        "title": "Love the Way You Are",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E2BDzs.jpg?v=1"
    },
    {
        "title": "Lost in the Shadows",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xdbvgx_4s.jpg?v=1"
    },
    {
        "title": "Doctors",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ndJw6s.jpg?v=1"
    },
    {
        "title": "Oh My General",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/KAp0Xs.jpg?v=1"
    },
    {
        "title": "High Kick through the Roof!",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Kp5wRs.jpg?v=1"
    },
    {
        "title": "Fall for You",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2Rnwk_4s.jpg?v=1"
    },
    {
        "title": "Let Me Be Your Knight",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/15wRd_4s.jpg?v=1"
    },
    {
        "title": "Good Job",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6644W_4s.jpg?v=1"
    },
    {
        "title": "Mr Honesty",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4r8Vw_4s.jpg?v=1"
    },
    {
        "title": "Legal Mavericks",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/elVjKs.jpg?v=1"
    },
    {
        "title": "Gap Dong",
        "year": "2014",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/b3x0Vs.jpg?v=1"
    },
    {
        "title": "Just One Bite Season 2",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/N75Yos.jpg?v=1"
    },
    {
        "title": "Chinese Paladin",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/YEvpes.jpg?v=1"
    },
    {
        "title": "Kazoku Boshu Shimasu",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/1eN4R_4s.jpg?v=1"
    },
    {
        "title": "Fated to Love You",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E5bpms.jpg?v=1"
    },
    {
        "title": "Detective Chinatown",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/xXV3ys.jpg?v=1"
    },
    {
        "title": "The Wind Blows",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ElxBWs.jpg?v=1"
    },
    {
        "title": "Waiting for You in the Future",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/WQylDs.jpg?v=1"
    },
    {
        "title": "Devilish Joy",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/X8LAZs.jpg?v=1"
    },
    {
        "title": "Ultraman Mebius",
        "year": "2006",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/M31JRs.jpg?v=1"
    },
    {
        "title": "My Sunshine",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/q86eds.jpg?v=1"
    },
    {
        "title": "Kamen Rider Zero-One",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jXLq8s.jpg?v=1"
    },
    {
        "title": "Queen: Love and War",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/64zg0s.jpg?v=1"
    },
    {
        "title": "Hope or Dope 2",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wqdDA_4s.jpg?v=1"
    },
    {
        "title": "PICU: Shoni Shuchu Chiryo Shitsu",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/kQyOd_4s.jpg?v=1"
    },
    {
        "title": "Just You",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/b3NyVs.jpg?v=1"
    },
    {
        "title": "Unique Lady Season 2",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Z8ENd1_4s.jpg?v=1"
    },
    {
        "title": "Got to Believe",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/zEEBys.jpg?v=1"
    },
    {
        "title": "Marry Me!",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wgg0g_4s.jpg?v=1"
    },
    {
        "title": "Destined to Meet You",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RBkDLY_4s.jpg?v=1"
    },
    {
        "title": "Fairyland Lovers",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/01yO6s.jpg?v=1"
    },
    {
        "title": "Romance in the Alley",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E5DgLQ_4s.jpg?v=1"
    },
    {
        "title": "Beautiful Rain",
        "year": "2012",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RBg1gs.jpg?v=1"
    },
    {
        "title": "Rinko-san wa Shite Mitai",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pLwKQ_4s.jpg?v=1"
    },
    {
        "title": "TRICK",
        "year": "2000",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/9YNBGs.jpg?v=1"
    },
    {
        "title": "Nee Ruk Nai Krong Fai",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Ox4RPs.jpg?v=1"
    },
    {
        "title": "Love Sea",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qYw4mB_4s.jpg?v=1"
    },
    {
        "title": "Itsuka, Nemuri ni Tsuku Hi",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/g26wWs.jpg?v=1"
    },
    {
        "title": "Binary Love",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Be71A_4s.jpg?v=1"
    },
    {
        "title": "Toumei na Yurikago",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E11Jl_4s.jpg?v=1"
    },
    {
        "title": "The Dark Lord",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/eRj8Ws.jpg?v=1"
    },
    {
        "title": "Queen of the Ring",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/xAbwys.jpg?v=1"
    },
    {
        "title": "The Girl Who Sees Scents",
        "year": "2015",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/NRE0es.jpg?v=1"
    },
    {
        "title": "My Golden Life",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/LpQwbs.jpg?v=1"
    },
    {
        "title": "Love at Night",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qKnd5_4s.jpg?v=1"
    },
    {
        "title": "BOSS Season 2",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/anOBLs.jpg?v=1"
    },
    {
        "title": "Battle for Happiness",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/x4jKzq_4s.jpg?v=1"
    },
    {
        "title": "Saki ni Umareta Dake no Boku",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ZJ3Lj_4s.jpg?v=1"
    },
    {
        "title": "The Jungle",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/2wmpPk_4s.jpg?v=1"
    },
    {
        "title": "GARO",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/xQXQjs.jpg?v=1"
    },
    {
        "title": "Mada Kekkon Dekinai Otoko",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qRKb0_4s.jpg?v=1"
    },
    {
        "title": "A Journey to Meet Love",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E8Ozls.jpg?v=1"
    },
    {
        "title": "Family",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Ekvems.jpg?v=1"
    },
    {
        "title": "Joseon Exorcist",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/jZz4J_4s.jpg?v=1"
    },
    {
        "title": "The Journey",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/14eORs.jpg?v=1"
    },
    {
        "title": "Love in Between",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6L1x0s.jpg?v=1"
    },
    {
        "title": "Ashi Girl",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/EYbeOs.jpg?v=1"
    },
    {
        "title": "Light Chaser Rescue",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WxjKP_4s.jpg?v=1"
    },
    {
        "title": "Petrichor",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/738kon_4s.jpg?v=1"
    },
    {
        "title": "Fateful Love",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1wkeb7_4s.jpg?v=1"
    },
    {
        "title": "Kamisama Mou Sukoshi Dake",
        "year": "1998",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/vKzRe_4s.jpg?v=1"
    },
    {
        "title": "The Painter of the Wind",
        "year": "2008",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/9ozEas.jpg?v=1"
    },
    {
        "title": "Yae no Sakura",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/d5lwg_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Badly Politics",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/elymEs.jpg?v=1"
    },
    {
        "title": "Big Issue",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Z0q4Os.jpg?v=1"
    },
    {
        "title": "Shikaku Tantei Higurashi Tabito",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/m7DJ1s.jpg?v=1"
    },
    {
        "title": "The World of Fantasy",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/q3dRz_4s.jpg?v=1"
    },
    {
        "title": "You Are My Heartbeat",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/4OLDZ_4s.jpg?v=1"
    },
    {
        "title": "Horimiya",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qlwRz_4s.jpg?v=1"
    },
    {
        "title": "Sad Love Story",
        "year": "2005",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qwJlBs.jpg?v=1"
    },
    {
        "title": "Shining Inheritance",
        "year": "2009",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/xQpBzs.jpg?v=1"
    },
    {
        "title": "My Lovely Bodyguard",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/j74bv_4s.jpg?v=1"
    },
    {
        "title": "Be My Boyfriend",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vALxD_4s.jpg?v=1"
    },
    {
        "title": "Girl Next Room: Richy Rich",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ED2Nbs.jpg?v=1"
    },
    {
        "title": "Take My Brother Away",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/gZKEXs.jpg?v=1"
    },
    {
        "title": "Hitotsu Yane no Shita",
        "year": "1993",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/AY0m8s.jpg?v=1"
    },
    {
        "title": "Judge Dee's Mystery",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0wNnnO_4s.jpg?v=1"
    },
    {
        "title": "Love the Way You Are",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/RvDVP_4s.jpg?v=1"
    },
    {
        "title": "Carnation",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/E5Pod5_4s.jpg?v=1"
    },
    {
        "title": "Boku, Unmei no Hito desu",
        "year": "2017",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/0jdoN_4s.jpg?v=1"
    },
    {
        "title": "Oh! My Boss! Koi wa Bessatsu de",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/rlwey_4s.jpg?v=1"
    },
    {
        "title": "Candle in the Tomb: The Lost Caverns",
        "year": "2020",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/qAgKPs.jpg?v=1"
    },
    {
        "title": "Twenty Your Life On Season 2",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5ZJY5_4s.jpg?v=1"
    },
    {
        "title": "Kimi ni wa Todokanai.",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQWW5r_4s.jpg?v=1"
    },
    {
        "title": "Today's Webtoon",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/66Zr2_4s.jpg?v=1"
    },
    {
        "title": "Dr. Cutie",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/R3XOrs.jpg?v=1"
    },
    {
        "title": "Karamazov no Kyodai",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/A7EL3s.jpg?v=1"
    },
    {
        "title": "A Fist Within Four Walls",
        "year": "2016",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/7nRKes.jpg?v=1"
    },
    {
        "title": "Seven of Me",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/X4L8Js.jpg?v=1"
    },
    {
        "title": "Don Quixote",
        "year": "2011",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/zB231s.jpg?v=1"
    },
    {
        "title": "Royal Feast",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BPqV6_4s.jpg?v=1"
    },
    {
        "title": "Tunnel",
        "year": "2019",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/pOnd8s.jpg?v=1"
    },
    {
        "title": "Order of the Sommelier",
        "year": "2022",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/BRw0R_4s.jpg?v=1"
    },
    {
        "title": "Itazura na Kiss: Love in Tokyo",
        "year": "2013",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/n0rnWs.jpg?v=1"
    },
    {
        "title": "Wednesday 3:30 PM",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XK5dns.jpg?v=1"
    },
    {
        "title": "Where Stars Land",
        "year": "2018",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/ZgYg8s.jpg?v=1"
    },
    {
        "title": "Juuken Sentai Gekiranger",
        "year": "2007",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/6VYbp_4s.jpg?v=1"
    },
    {
        "title": "Sora Kara Furu Ichioku no Hoshi",
        "year": "2002",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/81kK3d_4s.jpg?v=1"
    },
    {
        "title": "Shitamachi Rocket",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2OgZ7s.jpg?v=1"
    },
    {
        "title": "City Hall",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/l0yv4s.jpg?v=1"
    },
    {
        "title": "Nagareboshi",
        "year": "2010",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/zEJDes.jpg?v=1"
    },
    {
        "title": "A Killer Paradox",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WPrA7W_4s.jpg?v=1"
    },
    {
        "title": "Kiss Goblin",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QlKB6_4s.jpg?v=1"
    },
    {
        "title": "Kuragehime",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RpzEE_4s.jpg?v=1"
    },
    {
        "title": "River Where the Moon Rises",
        "year": "2021",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/wEZ01_4s.jpg?v=1"
    },
    {
        "title": "Heart to Heart",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VBw6vs.jpg?v=1"
    },
    {
        "title": "Go East",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/QJBQm7_4s.jpg?v=1"
    },
    {
        "title": "Analog Squad",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQl3Dy_4s.jpg?v=1"
    },
    {
        "title": "Miss Independent Ji Eun Season 2",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jXBvOs.jpg?v=1"
    },
    {
        "title": "Promise Cinderella",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qdApD_4s.jpg?v=1"
    },
    {
        "title": "Sandglass",
        "year": "1995",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/B1m76_4s.jpg?v=1"
    },
    {
        "title": "Stand or Fall",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wJWBvp_4s.jpg?v=1"
    },
    {
        "title": "Trace: Kasouken no Otoko",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Krlejs.jpg?v=1"
    },
    {
        "title": "Scripting Your Destiny",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dkrdD_4s.jpg?v=1"
    },
    {
        "title": "Between Us",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/r4BRm_4s.jpg?v=1"
    },
    {
        "title": "When a Snail Falls in Love",
        "year": "2023",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/Xd3k0n_4s.jpg?v=1"
    },
    {
        "title": "Miss Independent Ji Eun",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/13LbKs.jpg?v=1"
    },
    {
        "title": "Cross",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lyB7Ns.jpg?v=1"
    },
    {
        "title": "Nice Witch",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RPPors.jpg?v=1"
    },
    {
        "title": "The Fox's Summer",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XZ0Eds.jpg?v=1"
    },
    {
        "title": "Mr. Fox and Miss Rose",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WAn3Rs.jpg?v=1"
    },
    {
        "title": "The Song of Glory",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vzjoX_4s.jpg?v=1"
    },
    {
        "title": "Tantei Gakuen Q",
        "year": "2007",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/MgjOGs.jpg?v=1"
    },
    {
        "title": "Moebius: The Veil",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wB2X1_4s.jpg?v=1"
    },
    {
        "title": "Truth or Dare",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kDnr8_4s.jpg?v=1"
    },
    {
        "title": "Nobuta wo Produce",
        "year": "2005",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VXKEQs.jpg?v=1"
    },
    {
        "title": "I Hear You",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Xe1pws.jpg?v=1"
    },
    {
        "title": "Novoland: Eagle Flag",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wnoyns.jpg?v=1"
    },
    {
        "title": "MOZU: Mozu no Sakebu Yoru",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zPVDPs.jpg?v=1"
    },
    {
        "title": "My Lawyer, Mr. Jo",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0xzyYs.jpg?v=1"
    },
    {
        "title": "Haha ni Naru",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E71Q7s.jpg?v=1"
    },
    {
        "title": "Secrets of the Shadow Sect",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQVkKy_4s.jpg?v=1"
    },
    {
        "title": "Iryu Team Medical Dragon 3",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lEKges.jpg?v=1"
    },
    {
        "title": "Cupid's Last Wish",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RO7ex_4s.jpg?v=1"
    },
    {
        "title": "Hello, My Youth",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xBVQ3_4s.jpg?v=1"
    },
    {
        "title": "Catch Up My Prince",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RxkXP_4s.jpg?v=1"
    },
    {
        "title": "Kishibe Rohan wa Ugokanai Season 2",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQ4lzB_4s.jpg?v=1"
    },
    {
        "title": "CHANGE",
        "year": "2008",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rDBDD_4s.jpg?v=1"
    },
    {
        "title": "GTO: Remake Season 2",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/p2pODs.jpg?v=1"
    },
    {
        "title": "Journey to the West Season 2",
        "year": "1998",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/92wnWs.jpg?v=1"
    },
    {
        "title": "Todome no Parallel",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LdYbgs.jpg?v=1"
    },
    {
        "title": "The Taoism Grandmaster",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Orpnbs.jpg?v=1"
    },
    {
        "title": "The Matchmakers",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wJw8zN_4s.jpg?v=1"
    },
    {
        "title": "Night Doctor",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wNgOk_4s.jpg?v=1"
    },
    {
        "title": "Ishi no Mayu",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZyKN7_4s.jpg?v=1"
    },
    {
        "title": "The Incarnation of Money",
        "year": "2013",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XdmVps.jpg?v=1"
    },
    {
        "title": "Decreed by Fate",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Q4YV7_4s.jpg?v=1"
    },
    {
        "title": "Drops of God",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBXLvE_4s.jpg?v=1"
    },
    {
        "title": "Papa & Daddy",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/erpjE_4s.jpg?v=1"
    },
    {
        "title": "Mental Coach Jegal",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2p7KO_4s.jpg?v=1"
    },
    {
        "title": "Muchuu-sa, Kimi ni",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Ejw5m_4s.jpg?v=1"
    },
    {
        "title": "Hospital Ship",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xkNgys.jpg?v=1"
    },
    {
        "title": "The Cursed",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WvvXOs.jpg?v=1"
    },
    {
        "title": "Ultraman Geed",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/JpRpys.jpg?v=1"
    },
    {
        "title": "Decoded",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/AEplPs.jpg?v=1"
    },
    {
        "title": "Bride of the Century",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/YYk3Ps.jpg?v=1"
    },
    {
        "title": "Burning Ice",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1qEBRs.jpg?v=1"
    },
    {
        "title": "Doki no Sakura",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QNR54s.jpg?v=1"
    },
    {
        "title": "One More Happy Ending",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wjz3Js.jpg?v=1"
    },
    {
        "title": "Colorful Love: Genderless Danshi ni Aisareteimasu",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jwP88_4s.jpg?v=1"
    },
    {
        "title": "Kakegurui Twin",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Bo45A_4s.jpg?v=1"
    },
    {
        "title": "My Amazing Boyfriend",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vy7XXs.jpg?v=1"
    },
    {
        "title": "Zyuden Sentai Kyoryuger",
        "year": "2013",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z846vO_4s.jpg?v=1"
    },
    {
        "title": "Dear Missy",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vxpvB_4s.jpg?v=1"
    },
    {
        "title": "Chef: Mitsuboshi no Kyushoku",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Pwxj5s.jpg?v=1"
    },
    {
        "title": "A Poem a Day",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BzwYV_4s.jpg?v=1"
    },
    {
        "title": "Please Don't Spoil Me Season 2",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZJooO_4s.jpg?v=1"
    },
    {
        "title": "The Promise",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lyyWQs.jpg?v=1"
    },
    {
        "title": "Girlfriend",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dowl0s.jpg?v=1"
    },
    {
        "title": "Our Glamorous Time",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2x3ZVs.jpg?v=1"
    },
    {
        "title": "Jao Sao Jum Yorm",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/odK8ks.jpg?v=1"
    },
    {
        "title": "Cain and Abel",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/d2ZV5s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Blade",
        "year": "2004",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E8LrOs.jpg?v=1"
    },
    {
        "title": "The Lost Tomb",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0mo8Ks.jpg?v=1"
    },
    {
        "title": "Lucifer",
        "year": "2007",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/9mw3Ms.jpg?v=1"
    },
    {
        "title": "Don't Come Home",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/yWVPWd_4s.jpg?v=1"
    },
    {
        "title": "Blank",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x4XONj_4s.jpg?v=1"
    },
    {
        "title": "180 Degree Longitude Passes Through Us",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wZRBJ_4s.jpg?v=1"
    },
    {
        "title": "Orthros no Inu",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/YYODBs.jpg?v=1"
    },
    {
        "title": "The Only Girl You Haven't Seen",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Qw0q6_4s.jpg?v=1"
    },
    {
        "title": "Chastity High",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pd3LND_4s.jpg?v=1"
    },
    {
        "title": "Legal V",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2481ds.jpg?v=1"
    },
    {
        "title": "Engine",
        "year": "2005",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pYK7b_4s.jpg?v=1"
    },
    {
        "title": "The One and Only",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BYP31_4s.jpg?v=1"
    },
    {
        "title": "Dr. Tang",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XpzZx_4s.jpg?v=1"
    },
    {
        "title": "Pegasus",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Xdv5gZ_4s.jpg?v=1"
    },
    {
        "title": "Maids",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/YA01Ps.jpg?v=1"
    },
    {
        "title": "The Disappearing Child",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/42gV1_4s.jpg?v=1"
    },
    {
        "title": "Priceless",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/PWLKys.jpg?v=1"
    },
    {
        "title": "Matrimonial Chaos",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Jx4LYs.jpg?v=1"
    },
    {
        "title": "Party A Who Lives Beside Me",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QJPZEW_4s.jpg?v=1"
    },
    {
        "title": "10 Years Ticket",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xed8X_4s.jpg?v=1"
    },
    {
        "title": "Out of the Dream",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4lBz6_4s.jpg?v=1"
    },
    {
        "title": "6 from High&Low the Worst",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1K84d_4s.jpg?v=1"
    },
    {
        "title": "Accidentally in Love",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/oVjyPs.jpg?v=1"
    },
    {
        "title": "Never Give Up",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rNW47m_4s.jpg?v=1"
    },
    {
        "title": "Mr. Nietzsche in the Convenience Store",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zngpAs.jpg?v=1"
    },
    {
        "title": "Secret Royal Inspector & Joy",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RNVVV_4s.jpg?v=1"
    },
    {
        "title": "The Invisibles",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rNNgp2_4s.jpg?v=1"
    },
    {
        "title": "Love Under the Full Moon",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4VpdZ_4s.jpg?v=1"
    },
    {
        "title": "The Trick of Life and Love",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2PdXd_4s.jpg?v=1"
    },
    {
        "title": "Dong Lan Xue",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBBepE_4s.jpg?v=1"
    },
    {
        "title": "Rosy Business Season 2: No Regrets",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BPjm7_4s.jpg?v=1"
    },
    {
        "title": "To Ship Someone",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYQXAB_4s.jpg?v=1"
    },
    {
        "title": "Love Tractor",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5kX4l_4s.jpg?v=1"
    },
    {
        "title": "I Started Following Romance",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z1zwLs.jpg?v=1"
    },
    {
        "title": "Ultraman Orb",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zPJyys.jpg?v=1"
    },
    {
        "title": "I Will Find You a Better Home",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/p4LREs.jpg?v=1"
    },
    {
        "title": "Numbers",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XdAWyp_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Geats",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/R6yNg_4s.jpg?v=1"
    },
    {
        "title": "Iribito",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wb3Vn_4s.jpg?v=1"
    },
    {
        "title": "Sanctuary: Seiiki",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1wvKby_4s.jpg?v=1"
    },
    {
        "title": "The Romance of the Condor Heroes",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rOAP7s.jpg?v=1"
    },
    {
        "title": "Ready, Set, Love",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0wb2eE_4s.jpg?v=1"
    },
    {
        "title": "The Fox's Summer Season 2",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/elynns.jpg?v=1"
    },
    {
        "title": "Hope or Dope",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/65Ak0_4s.jpg?v=1"
    },
    {
        "title": "Beautiful Time with You",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/EPZEbs.jpg?v=1"
    },
    {
        "title": "Present, Is Present",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQbArJ_4s.jpg?v=1"
    },
    {
        "title": "Oh! My Emperor Season 2",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xE7q0s.jpg?v=1"
    },
    {
        "title": "Out with a Bang",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vVEBe_4s.jpg?v=1"
    },
    {
        "title": "Cunning Single Lady",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/oQoNNs.jpg?v=1"
    },
    {
        "title": "Miss Gu Who Is Silent",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WW2JD_4s.jpg?v=1"
    },
    {
        "title": "Ultraman Blazar",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RB2Y1Y_4s.jpg?v=1"
    },
    {
        "title": "Hello, I'm at Your Service",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBP2Az_4s.jpg?v=1"
    },
    {
        "title": "Good Casting",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0Ak7Ys.jpg?v=1"
    },
    {
        "title": "Hormones Season 2",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQ1nds.jpg?v=1"
    },
    {
        "title": "Oshi no Ko",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/PxNAB3_4s.jpg?v=1"
    },
    {
        "title": "Should We Kiss First?",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/JxZRYs.jpg?v=1"
    },
    {
        "title": "Qin Dynasty Epic",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6lwJp_4s.jpg?v=1"
    },
    {
        "title": "Running Like a Shooting Star",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WP3LqO_4s.jpg?v=1"
    },
    {
        "title": "Two Weeks",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jYg3J_4s.jpg?v=1"
    },
    {
        "title": "Well Dominated Love",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vnD32s.jpg?v=1"
    },
    {
        "title": "Shinai naru Boku e Satsui wo Komete",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/k5wLg_4s.jpg?v=1"
    },
    {
        "title": "Gokusen Season 3",
        "year": "2008",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1wgdQs.jpg?v=1"
    },
    {
        "title": "Provoke",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QJJv0Y_4s.jpg?v=1"
    },
    {
        "title": "Different Dreams",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/40Rqrs.jpg?v=1"
    },
    {
        "title": "Followers",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/R3rgPs.jpg?v=1"
    },
    {
        "title": "Money Game",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1LOk5s.jpg?v=1"
    },
    {
        "title": "The Whirlwind Girl",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Jj6BYs.jpg?v=1"
    },
    {
        "title": "Delightfully Deceitful",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0w4pnr_4s.jpg?v=1"
    },
    {
        "title": "Payakorn Sorn Ruk",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/X7d8n_4s.jpg?v=1"
    },
    {
        "title": "Unrequited Love",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4pbmds.jpg?v=1"
    },
    {
        "title": "Snowy Night Timeless Love",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nOrpvx_4s.jpg?v=1"
    },
    {
        "title": "Life Is Beautiful",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/5vNles.jpg?v=1"
    },
    {
        "title": "Jark Sadtroo Soo Hua Jai",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1BqW6_4s.jpg?v=1"
    },
    {
        "title": "Garo: Makai Senki",
        "year": "2011",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4v21d_4s.jpg?v=1"
    },
    {
        "title": "Abyss",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QKRW2s.jpg?v=1"
    },
    {
        "title": "Eve",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eBdY8_4s.jpg?v=1"
    },
    {
        "title": "Wacko at Law",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jvB2w_4s.jpg?v=1"
    },
    {
        "title": "The Nipple Talk",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/81JKrD_4s.jpg?v=1"
    },
    {
        "title": "L.O.R.D. Critical World",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2OdlEs.jpg?v=1"
    },
    {
        "title": "Chojin Sentai Jetman",
        "year": "1991",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAxd2w_4s.jpg?v=1"
    },
    {
        "title": "Be My Cat",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wkPJg_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Zu Season 2",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WbjyPs.jpg?v=1"
    },
    {
        "title": "Black Pean Season 2",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WP7DlD_4s.jpg?v=1"
    },
    {
        "title": "Big White Duel",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x2g4js.jpg?v=1"
    },
    {
        "title": "Song of the Moon",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/EE5Np_4s.jpg?v=1"
    },
    {
        "title": "Trap",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Lx1NDs.jpg?v=1"
    },
    {
        "title": "Kakegurui",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ERyLW_4s.jpg?v=1"
    },
    {
        "title": "Koko wa Ima kara Rinri desu",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jeWYB_4s.jpg?v=1"
    },
    {
        "title": "Love Designer",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1gAAKs.jpg?v=1"
    },
    {
        "title": "I Need Romance Season 3",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zBjYys.jpg?v=1"
    },
    {
        "title": "The Miracle of Teddy Bear",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XDKPw_4s.jpg?v=1"
    },
    {
        "title": "Bureau of Transformer",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E8v2ms.jpg?v=1"
    },
    {
        "title": "Glorious Day",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/weAdb_4s.jpg?v=1"
    },
    {
        "title": "Run for Young",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vgLwe_4s.jpg?v=1"
    },
    {
        "title": "Roosevelt Game",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nOoNxs.jpg?v=1"
    },
    {
        "title": "My Boss",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYb3oK_4s.jpg?v=1"
    },
    {
        "title": "When My Love Blooms",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WBj3Rs.jpg?v=1"
    },
    {
        "title": "My Lovely Boxer",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E57DpQ_4s.jpg?v=1"
    },
    {
        "title": "Zenkamono",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WDZlW_4s.jpg?v=1"
    },
    {
        "title": "Heart of Loyalty",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eYry8Q_4s.jpg?v=1"
    },
    {
        "title": "Cheewit Puer Kah Huajai Puer Tur",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/o74ANs.jpg?v=1"
    },
    {
        "title": "The Duke of Mount Deer",
        "year": "2001",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/G1wAzs.jpg?v=1"
    },
    {
        "title": "Be My Princess",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/482LJ_4s.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kammathep Sorn Kol",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/NPKEos.jpg?v=1"
    },
    {
        "title": "Two Cops",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/63XdPs.jpg?v=1"
    },
    {
        "title": "Your Honor",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5QXJb_4s.jpg?v=1"
    },
    {
        "title": "Flower Grandpa Investigation Unit",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pd3v8s.jpg?v=1"
    },
    {
        "title": "Singing All Along",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LwJgDs.jpg?v=1"
    },
    {
        "title": "You're My Destiny",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1ojKRs.jpg?v=1"
    },
    {
        "title": "Guess Who I Am",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5p7RW_4s.jpg?v=1"
    },
    {
        "title": "Tracer Season 2",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0D5Ne_4s.jpg?v=1"
    },
    {
        "title": "Theory of Love",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WmPJ3s.jpg?v=1"
    },
    {
        "title": "The New Heaven Sword and the Dragon Sabre",
        "year": "1986",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/9OpLQs.jpg?v=1"
    },
    {
        "title": "Shiroi Haru",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/V4mEEs.jpg?v=1"
    },
    {
        "title": "Beyond the Realm of Conscience",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eYorpE_4s.jpg?v=1"
    },
    {
        "title": "Naked Fireman",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dzDLbs.jpg?v=1"
    },
    {
        "title": "Court Lady",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qDrPB_4s.jpg?v=1"
    },
    {
        "title": "Smile to Life",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1NNYR_4s.jpg?v=1"
    },
    {
        "title": "The Imperial Doctress",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2QKgws.jpg?v=1"
    },
    {
        "title": "Snowfall",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5gyvQ_4s.jpg?v=1"
    },
    {
        "title": "We Are Peaceful Brothers",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0yDKes.jpg?v=1"
    },
    {
        "title": "Sweet Revenge",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2q5zWs.jpg?v=1"
    },
    {
        "title": "Tokyo Joshi Zukan",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ROZKP_4s.jpg?v=1"
    },
    {
        "title": "Ni Chang",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xJv3j_4s.jpg?v=1"
    },
    {
        "title": "Horse Doctor",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/yW54Ns.jpg?v=1"
    },
    {
        "title": "Queen Woo",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rNrNzp_4s.jpg?v=1"
    },
    {
        "title": "Wulin Heroes",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wJxklb_4s.jpg?v=1"
    },
    {
        "title": "The Glory of Tang Dynasty",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/7q4PRs.jpg?v=1"
    },
    {
        "title": "My Deepest Dream",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1xmyb_4s.jpg?v=1"
    },
    {
        "title": "You Want Some?",
        "year": "2024",
        "rating": "7.9",
        "image": "https://i.mydramalist.com/nOJLOL_4s.jpg?v=1"
    },
    {
        "title": "Knock Knock, Boys!",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z8BEx1_4s.jpg?v=1"
    },
    {
        "title": "Can't Buy Me Love",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4gQWws.jpg?v=1"
    },
    {
        "title": "Never Say Never",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xQjENs.jpg?v=1"
    },
    {
        "title": "Anna",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Wp4LW_4s.jpg?v=1"
    },
    {
        "title": "You Are Desire",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eYEd2n_4s.jpg?v=1"
    },
    {
        "title": "Face Me",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/mOnN2k_4s.jpg?v=1"
    },
    {
        "title": "BG: Personal Bodyguard",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/mkJw0s.jpg?v=1"
    },
    {
        "title": "Ice World",
        "year": "1999",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/l0lLWE_4s.jpg?v=1"
    },
    {
        "title": "Renai Mangaka",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XRV1w_4s.jpg?v=1"
    },
    {
        "title": "Boys' Lockdown",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/18eL7_4s.jpg?v=1"
    },
    {
        "title": "The Naked Director",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jX228s.jpg?v=1"
    },
    {
        "title": "Day Breaker",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XP0pn_4s.jpg?v=1"
    },
    {
        "title": "Be Loved in House: I Do",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ERvXm_4s.jpg?v=1"
    },
    {
        "title": "Strongest Deliveryman",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jWvbys.jpg?v=1"
    },
    {
        "title": "Come! Jang Bo Ri",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1wlb7s.jpg?v=1"
    },
    {
        "title": "Lie to Love",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BVypV_4s.jpg?v=1"
    },
    {
        "title": "Wrong Carriage, Right Groom",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBe3eP_4s.jpg?v=1"
    },
    {
        "title": "Kore wa Keihi de Ochimasen!",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1pPdbs.jpg?v=1"
    },
    {
        "title": "Swords of Legends",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VXkovs.jpg?v=1"
    },
    {
        "title": "Kunlun Tomb",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZpNDj_4s.jpg?v=1"
    },
    {
        "title": "Atsu Hime",
        "year": "2008",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1g3mds.jpg?v=1"
    },
    {
        "title": "Ultraman Z",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dojXAs.jpg?v=1"
    },
    {
        "title": "All I Want for Love Is You",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vdrqes.jpg?v=1"
    },
    {
        "title": "Cuo Dian Yuan Yang",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Qpk45s.jpg?v=1"
    },
    {
        "title": "Age of Rebellion",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/8pq2ds.jpg?v=1"
    },
    {
        "title": "The Rebound",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1wzX5K_4s.jpg?v=1"
    },
    {
        "title": "Pope Rak",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qdeA2_4s.jpg?v=1"
    },
    {
        "title": "Great Men Academy",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E8NKWs.jpg?v=1"
    },
    {
        "title": "Seirei no Moribito",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VQJAxs.jpg?v=1"
    },
    {
        "title": "Decoy: Part 2",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vXXmNZ_4s.jpg?v=1"
    },
    {
        "title": "Love Script",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pR4Qe_4s.jpg?v=1"
    },
    {
        "title": "A Step Into the Past",
        "year": "2001",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/n0Rrxs.jpg?v=1"
    },
    {
        "title": "5-ji Kara 9-ji Made",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nA0WEs.jpg?v=1"
    },
    {
        "title": "Kodoku no Gourmet",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/mO8Eqs.jpg?v=1"
    },
    {
        "title": "Watashi wo Hanasanaide",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Q5yZ6s.jpg?v=1"
    },
    {
        "title": "Ja Myung Go",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/92wwEs.jpg?v=1"
    },
    {
        "title": "The Inextricable Destiny",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAkLkd_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider 555",
        "year": "2003",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ERnmm_4s.jpg?v=1"
    },
    {
        "title": "His - Koisuru Tsumori Nante Nakatta",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wVjBbs.jpg?v=1"
    },
    {
        "title": "Stay by My Side",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eY8BoW_4s.jpg?v=1"
    },
    {
        "title": "Enjiya",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Ebjjp_4s.jpg?v=1"
    },
    {
        "title": "Tawipob",
        "year": "2011",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nOmx6s.jpg?v=1"
    },
    {
        "title": "The Believers",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/d0V31W_4s.jpg?v=1"
    },
    {
        "title": "Small Town Stories",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pd82Oe_4s.jpg?v=1"
    },
    {
        "title": "Rahut Rissaya",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/B6481_4s.jpg?v=1"
    },
    {
        "title": "The Mermaid Prince: The Beginning",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/j3RBr_4s.jpg?v=1"
    },
    {
        "title": "Forest",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qoQK2s.jpg?v=1"
    },
    {
        "title": "Ultraman Tiga",
        "year": "1996",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wN88N_4s.jpg?v=1"
    },
    {
        "title": "Theseus no Fune",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2Kp4O_4s.jpg?v=1"
    },
    {
        "title": "FAKE MOTION: Takkyu no Osho",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Wvqd3s.jpg?v=1"
    },
    {
        "title": "The Day I Loved You",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BdBKw6_4s.jpg?v=1"
    },
    {
        "title": "Momikeshite Fuyu",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rqmVys.jpg?v=1"
    },
    {
        "title": "Cheat On Me, if You Can",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BNk5b_4s.jpg?v=1"
    },
    {
        "title": "Soul Mechanic",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0w8Jee_4s.jpg?v=1"
    },
    {
        "title": "Omotesando Koukou Gasshoubu",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/50vRAs.jpg?v=1"
    },
    {
        "title": "Your House Helper",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/odDLxs.jpg?v=1"
    },
    {
        "title": "The Game: Towards Zero",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jVyBbs.jpg?v=1"
    },
    {
        "title": "Iryu Team Medical Dragon 4",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/7QRNrs.jpg?v=1"
    },
    {
        "title": "Smile Code",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Bdg5AA_4s.jpg?v=1"
    },
    {
        "title": "Rosy Business",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/73B5ys.jpg?v=1"
    },
    {
        "title": "Waen Dok Mai",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2Nyjws.jpg?v=1"
    },
    {
        "title": "The Condor Heroes 95",
        "year": "1995",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/90kqKs.jpg?v=1"
    },
    {
        "title": "The Curse of Saree",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0DEDe_4s.jpg?v=1"
    },
    {
        "title": "The Science of Falling in Love",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAAjY8_4s.jpg?v=1"
    },
    {
        "title": "Goong",
        "year": "2006",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/b30NEs.jpg?v=1"
    },
    {
        "title": "Just One Bite",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/33d6ms.jpg?v=1"
    },
    {
        "title": "Watashi, Teiji de Kaerimasu",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/B0z3zs.jpg?v=1"
    },
    {
        "title": "Heart of Greed",
        "year": "2007",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nOn3Ls.jpg?v=1"
    },
    {
        "title": "Ao Haru Ride Season 2",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYOAOd_4s.jpg?v=1"
    },
    {
        "title": "The Listener",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/40vXZs.jpg?v=1"
    },
    {
        "title": "Don't Leave After School",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wNdV8_4s.jpg?v=1"
    },
    {
        "title": "Ga Doo Ri\u2019s Sushi Restaurant",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/EDgJzs.jpg?v=1"
    },
    {
        "title": "Delivery Man",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BdvWqq_4s.jpg?v=1"
    },
    {
        "title": "About Is Love",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Pwpk8s.jpg?v=1"
    },
    {
        "title": "Line Walker: The Prelude",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Lek43s.jpg?v=1"
    },
    {
        "title": "Never Grow Old",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZAQLO_4s.jpg?v=1"
    },
    {
        "title": "Sweet Trap",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vXROKp_4s.jpg?v=1"
    },
    {
        "title": "Saimdang, Light\u2019s Diary",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LeKNbs.jpg?v=1"
    },
    {
        "title": "The Romance of Hua Rong Season 2",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vmLpB_4s.jpg?v=1"
    },
    {
        "title": "Mirai e no 10 Count",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1yL26_4s.jpg?v=1"
    },
    {
        "title": "Fuujinshi",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qLA05_4s.jpg?v=1"
    },
    {
        "title": "Forensic Heroes Season 3",
        "year": "2011",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/48oq6_4s.jpg?v=1"
    },
    {
        "title": "My Lonely Planet",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RRmzo_4s.jpg?v=1"
    },
    {
        "title": "Behind Your Smile",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LeLPbs.jpg?v=1"
    },
    {
        "title": "Roommates of Poongduck 304",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/R17lx_4s.jpg?v=1"
    },
    {
        "title": "My Wife\u2019s Having an Affair This Week",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Lenybs.jpg?v=1"
    },
    {
        "title": "20th Century Boy and Girl",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/V42mys.jpg?v=1"
    },
    {
        "title": "Switch: Change the World",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6y4Zds.jpg?v=1"
    },
    {
        "title": "The Longest Promise",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQjBPJ_4s.jpg?v=1"
    },
    {
        "title": "Legend of the Phoenix",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XwZ6Js.jpg?v=1"
    },
    {
        "title": "Tribes and Empires: Storm of Prophecy",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LBkO5s.jpg?v=1"
    },
    {
        "title": "Chip In",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qxodD_4s.jpg?v=1"
    },
    {
        "title": "The Three GentleBros",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6Rqdg_4s.jpg?v=1"
    },
    {
        "title": "A Thousand Goodnights",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pWm3ns.jpg?v=1"
    },
    {
        "title": "The King's Woman",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/AzoLEs.jpg?v=1"
    },
    {
        "title": "I Wanna Be Sup'Tar",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2o122s.jpg?v=1"
    },
    {
        "title": "The Fallen Leaf",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x2mYys.jpg?v=1"
    },
    {
        "title": "Khun Chai Ronaphee",
        "year": "2013",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/REm3r_4s.jpg?v=1"
    },
    {
        "title": "To Be a Better Man",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/8xwXbs.jpg?v=1"
    },
    {
        "title": "49 Days with a Merman",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/rLJEj_4s.jpg?v=1"
    },
    {
        "title": "Road Number One",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/aboE9s.jpg?v=1"
    },
    {
        "title": "Cooking Crush: Uncut Version",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x42kWy_4s.jpg?v=1"
    },
    {
        "title": "My Girl",
        "year": "2005",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E5rp5s.jpg?v=1"
    },
    {
        "title": "Utsukushii Kare",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dXv4z_4s.jpg?v=1"
    },
    {
        "title": "My Husband in Law",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kY5l8s.jpg?v=1"
    },
    {
        "title": "Beautiful Gong Shim",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/X46pws.jpg?v=1"
    },
    {
        "title": "Novoland: The Castle in the Sky Season 2",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/017zKs.jpg?v=1"
    },
    {
        "title": "Shitteru Waifu",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4x07K_4s.jpg?v=1"
    },
    {
        "title": "Parole Examiner Lee",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/5vLEnL_4s.jpg?v=1"
    },
    {
        "title": "No Secrets",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kE2Rjs.jpg?v=1"
    },
    {
        "title": "Shotai",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/61eXK_4s.jpg?v=1"
    },
    {
        "title": "Gasohug",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jyZ2ds.jpg?v=1"
    },
    {
        "title": "Yong Pal",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qW78Ds.jpg?v=1"
    },
    {
        "title": "Fah Mee Tawan",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BDVR5_4s.jpg?v=1"
    },
    {
        "title": "The Temperature of Language: Our Nineteen",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QpB4Qs.jpg?v=1"
    },
    {
        "title": "Jang Ok Jung",
        "year": "2013",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/r5YL2_4s.jpg?v=1"
    },
    {
        "title": "Back for You",
        "year": "2025",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0wOvPO_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Black",
        "year": "1987",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Rnr6o_4s.jpg?v=1"
    },
    {
        "title": "Grand Prince",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/244yEs.jpg?v=1"
    },
    {
        "title": "Suishou no Kodou",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/m77w3s.jpg?v=1"
    },
    {
        "title": "Fujoshi, Ukkari Gei ni Kokuru",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nEkPBs.jpg?v=1"
    },
    {
        "title": "Satsui no Michinori",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ENlJl_4s.jpg?v=1"
    },
    {
        "title": "Hello, the Sharpshooter",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BOnnq_4s.jpg?v=1"
    },
    {
        "title": "Switched",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/DX4Wns.jpg?v=1"
    },
    {
        "title": "One Room Angel",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WPbDKm_4s.jpg?v=1"
    },
    {
        "title": "Healer of Children",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6lrJP_4s.jpg?v=1"
    },
    {
        "title": "Ms. Cupid in Love",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/48Rnw_4s.jpg?v=1"
    },
    {
        "title": "We Are All Alone",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xYVKXs.jpg?v=1"
    },
    {
        "title": "Tiger Cubs",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nOnrLs.jpg?v=1"
    },
    {
        "title": "Candle in the Tomb: The Worm Valley",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RbOyr_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Amazons",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0gNWK_4s.jpg?v=1"
    },
    {
        "title": "The Story of Xing Fu",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/q4V6P_4s.jpg?v=1"
    },
    {
        "title": "No Side Game",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/052zO_4s.jpg?v=1"
    },
    {
        "title": "Nobushi no Gourmet",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Bd77mz_4s.jpg?v=1"
    },
    {
        "title": "Derailment",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2wOAoR_4s.jpg?v=1"
    },
    {
        "title": "Dating Class",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vOkvgs.jpg?v=1"
    },
    {
        "title": "Criminal Minds",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/nvWK2s.jpg?v=1"
    },
    {
        "title": "Youth in the Flames of War",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z8Rw5Y_4s.jpg?v=1"
    },
    {
        "title": "Reverse",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Wlg6l_4s.jpg?v=1"
    },
    {
        "title": "Secretary Bai Wants to Resign Everyday",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BdDVRl_4s.jpg?v=1"
    },
    {
        "title": "Dorokei",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qqYNDs.jpg?v=1"
    },
    {
        "title": "#Remolove: Futsuu no Koi wa Jado",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vAmqg_4s.jpg?v=1"
    },
    {
        "title": "Devil Beside You",
        "year": "2005",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/AJPKvs.jpg?v=1"
    },
    {
        "title": "Candle in the Tomb",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Y8jrQs.jpg?v=1"
    },
    {
        "title": "Jejoongwon",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/92wwOs.jpg?v=1"
    },
    {
        "title": "Medical Examiner Dr. Qin: The Mind Reader",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BJJ4A_4s.jpg?v=1"
    },
    {
        "title": "Love a Lifetime",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2z38V_4s.jpg?v=1"
    },
    {
        "title": "The Fearless",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/E58gAQ_4s.jpg?v=1"
    },
    {
        "title": "Hiyama Kentaro no Ninshin",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jP0jB_4s.jpg?v=1"
    },
    {
        "title": "Later, I Laughed",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/O841vx_4s.jpg?v=1"
    },
    {
        "title": "Gudetama: An Eggcellent Adventure",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jKKYr_4s.jpg?v=1"
    },
    {
        "title": "Oh My Ghost",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kkWlrs.jpg?v=1"
    },
    {
        "title": "Miss Mystery",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Z8gKo7_4s.jpg?v=1"
    },
    {
        "title": "Exploration Method of Love",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0wxRdK_4s.jpg?v=1"
    },
    {
        "title": "Kindaichi Shonen no Jikenbo",
        "year": "1995",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQ4VPJ_4s.jpg?v=1"
    },
    {
        "title": "Hold On, My Lady",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pDKRb_4s.jpg?v=1"
    },
    {
        "title": "Yuusha Yoshihiko to Akuryo no Kagi",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/YYdEzs.jpg?v=1"
    },
    {
        "title": "Yuru Camp\u25b3",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QeD5A_4s.jpg?v=1"
    },
    {
        "title": "Wild Bloom",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4276J_4s.jpg?v=1"
    },
    {
        "title": "Aishiteru",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qkvKPs.jpg?v=1"
    },
    {
        "title": "Young Blood Season 2",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pd7rgQ_4s.jpg?v=1"
    },
    {
        "title": "Yokoso Wagaya e",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lB6jLs.jpg?v=1"
    },
    {
        "title": "Walk Into Your Memory",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QY8W6s.jpg?v=1"
    },
    {
        "title": "Tokyo DOGS",
        "year": "2009",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/AYRpqs.jpg?v=1"
    },
    {
        "title": "Ban Shu Legend",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lWyXes.jpg?v=1"
    },
    {
        "title": "The Leaked",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RpPDg_4s.jpg?v=1"
    },
    {
        "title": "Brocade Odyssey",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/5vbLAw_4s.jpg?v=1"
    },
    {
        "title": "Radiation House Season 2",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/12mV7_4s.jpg?v=1"
    },
    {
        "title": "Refresh Man",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6QbDjs.jpg?v=1"
    },
    {
        "title": "Oi Handsome!",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Qezy6_4s.jpg?v=1"
    },
    {
        "title": "My ID Is Gangnam Beauty",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/DXB6rs.jpg?v=1"
    },
    {
        "title": "The Flower in Prison",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dOrn5s.jpg?v=1"
    },
    {
        "title": "Flower Crew: Joseon Marriage Agency",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xQEdXs.jpg?v=1"
    },
    {
        "title": "Plus Nine Boys",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jQ60zs.jpg?v=1"
    },
    {
        "title": "The Life of the White Fox",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WB0NXs.jpg?v=1"
    },
    {
        "title": "First Love",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/klwor_4s.jpg?v=1"
    },
    {
        "title": "Gods of Honour",
        "year": "2001",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wdAPN_4s.jpg?v=1"
    },
    {
        "title": "The Heavenly Sword and Dragon Sabre",
        "year": "2002",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XAvpps.jpg?v=1"
    },
    {
        "title": "Cherry Blossoms after Winter",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jLkdJ_4s.jpg?v=1"
    },
    {
        "title": "Meteor Garden",
        "year": "2001",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QJoE6s.jpg?v=1"
    },
    {
        "title": "Kidnapping Game",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qwe8Ks.jpg?v=1"
    },
    {
        "title": "Galileo Season 2",
        "year": "2013",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0Pv6K_4s.jpg?v=1"
    },
    {
        "title": "Best Choice Ever",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYAvRK_4s.jpg?v=1"
    },
    {
        "title": "Midnight Motel",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Rx0AY_4s.jpg?v=1"
    },
    {
        "title": "My Romance From Far Away",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RvYOo_4s.jpg?v=1"
    },
    {
        "title": "Kkondae Intern",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xxJEy_4s.jpg?v=1"
    },
    {
        "title": "Daisuki!!",
        "year": "2008",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zEJ8Ps.jpg?v=1"
    },
    {
        "title": "I Know I Love You",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAo6Rj_4s.jpg?v=1"
    },
    {
        "title": "The Night of the Comet Season 2",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kxYgO_4s.jpg?v=1"
    },
    {
        "title": "Kindaichi Shonen no Jikenbo 2",
        "year": "1996",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/GQJlQs.jpg?v=1"
    },
    {
        "title": "To Be With You",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WmPLDs.jpg?v=1"
    },
    {
        "title": "Girlfriend Project Day 1",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYq4j8_4s.jpg?v=1"
    },
    {
        "title": "Dreaming of a Freaking Fairytale",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAdzVb_4s.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Sorn Ruk Kammathep",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/67bQj_4s.jpg?v=1"
    },
    {
        "title": "Advance Bravely",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/o7AL6s.jpg?v=1"
    },
    {
        "title": "Namib",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/mOXX22_4s.jpg?v=1"
    },
    {
        "title": "Blackout",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jeRZd_4s.jpg?v=1"
    },
    {
        "title": "The Wolf Princess",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZP8OW_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Agito",
        "year": "2001",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/X1xvJ_4s.jpg?v=1"
    },
    {
        "title": "Unique Lady",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qYyN5D_4s.jpg?v=1"
    },
    {
        "title": "Taikan Yoho",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2wdroR_4s.jpg?v=1"
    },
    {
        "title": "Love after School",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jrjB8s.jpg?v=1"
    },
    {
        "title": "I Saw You in My Dream",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kAxb6j_4s.jpg?v=1"
    },
    {
        "title": "Leh Ratree",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qWNqQs.jpg?v=1"
    },
    {
        "title": "The Revenge",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QeJXQ_4s.jpg?v=1"
    },
    {
        "title": "Nang Ai",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/NPemJs.jpg?v=1"
    },
    {
        "title": "Yutori Desu ga Nani ka",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/5yQzAs.jpg?v=1"
    },
    {
        "title": "The Glory of Tang Dynasty Season 2",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/xAr8ws.jpg?v=1"
    },
    {
        "title": "The Lady in Butcher's House",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/20kdk_4s.jpg?v=1"
    },
    {
        "title": "Timing",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RJ6wgs.jpg?v=1"
    },
    {
        "title": "Let\u2019s Talk about Chu",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBrdLY_4s.jpg?v=1"
    },
    {
        "title": "Ima Ai ni Yukimasu",
        "year": "2005",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Gl00Ns.jpg?v=1"
    },
    {
        "title": "The Scholar Who Walks the Night",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4Dwgws.jpg?v=1"
    },
    {
        "title": "The Journey 2",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/zoyzOs.jpg?v=1"
    },
    {
        "title": "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VKnXOs.jpg?v=1"
    },
    {
        "title": "My Love Eun Dong",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/B70Qbs.jpg?v=1"
    },
    {
        "title": "Man to Man",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dRrgKs.jpg?v=1"
    },
    {
        "title": "Dr. Chocolate",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4eexyd_4s.jpg?v=1"
    },
    {
        "title": "Me no Doku Sugiru Shokuba no Futari",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/q7YND_4s.jpg?v=1"
    },
    {
        "title": "Krong Kam",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/QKrP5s.jpg?v=1"
    },
    {
        "title": "Rebirth for You",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jDOo8_4s.jpg?v=1"
    },
    {
        "title": "The Giver",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/0rZge_4s.jpg?v=1"
    },
    {
        "title": "Bokura no Yuki",
        "year": "1997",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eQ1Oe_4s.jpg?v=1"
    },
    {
        "title": "The Confidence",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2OBNRs.jpg?v=1"
    },
    {
        "title": "3 Papas",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6gxVds.jpg?v=1"
    },
    {
        "title": "Mr. Fighting",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wn4Obs.jpg?v=1"
    },
    {
        "title": "Freeter, Ie o Kau.",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6y5lXs.jpg?v=1"
    },
    {
        "title": "The Flame's Daughter",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1300ds.jpg?v=1"
    },
    {
        "title": "Zen Ryoiki Ijo Kaiketsu Shitsu",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x4yX0E_4s.jpg?v=1"
    },
    {
        "title": "A Wife\u2019s Credentials",
        "year": "2012",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/96g3js.jpg?v=1"
    },
    {
        "title": "Ugly Duckling Series: Don't",
        "year": "2015",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RY06xs.jpg?v=1"
    },
    {
        "title": "Reverse 4 You",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x4WDdz_4s.jpg?v=1"
    },
    {
        "title": "The Stranded",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/e3wXns.jpg?v=1"
    },
    {
        "title": "Chihayafuru: Tsunagu",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/4DwmYs.jpg?v=1"
    },
    {
        "title": "Money Is Coming",
        "year": "2025",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Pxo40w_4s.jpg?v=1"
    },
    {
        "title": "Wake Up Ladies",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/vJqWZs.jpg?v=1"
    },
    {
        "title": "Late Night Restaurant",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/X2LwOs.jpg?v=1"
    },
    {
        "title": "My Super Hero",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2y1jO_4s.jpg?v=1"
    },
    {
        "title": "Thicha",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/mOX783_4s.jpg?v=1"
    },
    {
        "title": "Truth",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dD8nD_4s.jpg?v=1"
    },
    {
        "title": "Homemade Love Story",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/pgDDV_4s.jpg?v=1"
    },
    {
        "title": "Once Upon a Time... in My Heart",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/r21g7s.jpg?v=1"
    },
    {
        "title": "Adult Trainee",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/e48qd_4s.jpg?v=1"
    },
    {
        "title": "Schemes of a Beauty",
        "year": "2010",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/GwJEgs.jpg?v=1"
    },
    {
        "title": "Super Family",
        "year": "2017",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/6kYwd_4s.jpg?v=1"
    },
    {
        "title": "Youth",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/7gkBrs.jpg?v=1"
    },
    {
        "title": "Remembering Lichuan",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/LpoNrs.jpg?v=1"
    },
    {
        "title": "How to Buy a Friend",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/W3J1ps.jpg?v=1"
    },
    {
        "title": "The Great Show",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XKdzps.jpg?v=1"
    },
    {
        "title": "Lady of Law",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XPyOd_4s.jpg?v=1"
    },
    {
        "title": "Cinderella and the Four Knights",
        "year": "2016",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/dRnx5s.jpg?v=1"
    },
    {
        "title": "Kimi ga Kokoro wo Kuretakara",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJgAOb_4s.jpg?v=1"
    },
    {
        "title": "My Love from Another Star",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kW6gws.jpg?v=1"
    },
    {
        "title": "Red Swan",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eYjqDQ_4s.jpg?v=1"
    },
    {
        "title": "Return",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/bKKlVs.jpg?v=1"
    },
    {
        "title": "Tamio",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/X7qgJ_4s.jpg?v=1"
    },
    {
        "title": "To Get Her",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jVDdbs.jpg?v=1"
    },
    {
        "title": "Hirugao",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/l0KAJs.jpg?v=1"
    },
    {
        "title": "My Fantastic Mrs Right Season 2",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1w81Z6_4s.jpg?v=1"
    },
    {
        "title": "Pending Train: 8:23, Ashita Kimi to",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/kAWnL8_4s.jpg?v=1"
    },
    {
        "title": "Sisyphus: The Myth",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/eYr8ln_4s.jpg?v=1"
    },
    {
        "title": "Oshi ga Budokan Ittekuretara Shinu",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/v0zYW_4s.jpg?v=1"
    },
    {
        "title": "Nakark Kaew",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/wwjDbs.jpg?v=1"
    },
    {
        "title": "Embrace in the Dark Night",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/WPW2Xm_4s.jpg?v=1"
    },
    {
        "title": "Love Unexpected",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/ZjKr8_4s.jpg?v=1"
    },
    {
        "title": "The Sand Princess",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/qJk5K_4s.jpg?v=1"
    },
    {
        "title": "Paripi Komei",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1w3v73_4s.jpg?v=1"
    },
    {
        "title": "Romance of a Twin Flower",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qYYLr2_4s.jpg?v=1"
    },
    {
        "title": "Hur Jun, the Original Story",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bdpv16_4s.jpg?v=1"
    },
    {
        "title": "How to Hate You",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2xvrEs.jpg?v=1"
    },
    {
        "title": "Love Class Season 2",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wwjwW_4s.jpg?v=1"
    },
    {
        "title": "Sweet Revenge Season 2",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/13BYzs.jpg?v=1"
    },
    {
        "title": "DNA Says Love You",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/BOQ2b_4s.jpg?v=1"
    },
    {
        "title": "Lost Track of Time",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1N45R_4s.jpg?v=1"
    },
    {
        "title": "The Plough Department of Song Dynasty",
        "year": "2019",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/50jDws.jpg?v=1"
    },
    {
        "title": "Longing Heart",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/826d2s.jpg?v=1"
    },
    {
        "title": "The Deal",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/2wNLPV_4s.jpg?v=1"
    },
    {
        "title": "Meitantei Conan",
        "year": "2011",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/L2NY7s.jpg?v=1"
    },
    {
        "title": "The Origin of Eternity",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/XlOdp_4s.jpg?v=1"
    },
    {
        "title": "Demi Gods & Semi Devils",
        "year": "2003",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/9x4jXs.jpg?v=1"
    },
    {
        "title": "Oretachi wa Abunakunai ~ Cool ni Saboru Keijitachi",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/k6KEv_4s.jpg?v=1"
    },
    {
        "title": "Song Huajai Nee Puea Tur",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vQE2Xs.jpg?v=1"
    },
    {
        "title": "Autumn Cicada",
        "year": "2020",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1g3o6s.jpg?v=1"
    },
    {
        "title": "Together with Me",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jPPwz_4s.jpg?v=1"
    },
    {
        "title": "Cute Programmer",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2v63d_4s.jpg?v=1"
    },
    {
        "title": "The Four",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/L2Q5Ls.jpg?v=1"
    },
    {
        "title": "Manpuku",
        "year": "2018",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/jrRxys.jpg?v=1"
    },
    {
        "title": "Can You Deliver Time? 2002",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xx4pJ_4s.jpg?v=1"
    },
    {
        "title": "My Dangerous Wife",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1882z_4s.jpg?v=1"
    },
    {
        "title": "The Village: Achiara's Secret",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1d4z6s.jpg?v=1"
    },
    {
        "title": "Listening Snow Tower",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6njnjs.jpg?v=1"
    },
    {
        "title": "Omukae Desu",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qElJd_4s.jpg?v=1"
    },
    {
        "title": "Please Don't Spoil Me Season 3",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4eqQXd_4s.jpg?v=1"
    },
    {
        "title": "Lupin no Musume",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/El0vls.jpg?v=1"
    },
    {
        "title": "Cute Bodyguard",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RqkQV_4s.jpg?v=1"
    },
    {
        "title": "Shadow",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jQQ7yO_4s.jpg?v=1"
    },
    {
        "title": "ON Ijou Hanzai Sousakan Todo Hinako",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/AzeX8s.jpg?v=1"
    },
    {
        "title": "Kodoku no Gurume Season 2",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJoQYs.jpg?v=1"
    },
    {
        "title": "Kono Koi Atatamemasu ka",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6NZjg_4s.jpg?v=1"
    },
    {
        "title": "King Maker: The Change of Destiny",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6LQRjs.jpg?v=1"
    },
    {
        "title": "Akira to Akira",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/gWJDqs.jpg?v=1"
    },
    {
        "title": "The Perfect Match",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/8qOxAs.jpg?v=1"
    },
    {
        "title": "Hikonin Sentai Akibaranger",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/d00Dqg_4s.jpg?v=1"
    },
    {
        "title": "Phetra Naruemit",
        "year": "2023",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/RBB4VY_4s.jpg?v=1"
    },
    {
        "title": "Oyabaka Seishun Hakusho",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rzm7D_4s.jpg?v=1"
    },
    {
        "title": "My Deskmate",
        "year": "2021",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/x1RPy_4s.jpg?v=1"
    },
    {
        "title": "Love\u2019s Rebellion",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rN3V7j_4s.jpg?v=1"
    },
    {
        "title": "Sweet First Love",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/081m6_4s.jpg?v=1"
    },
    {
        "title": "Project 17: Side By Side",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z1ZLLs.jpg?v=1"
    },
    {
        "title": "Are You Safe",
        "year": "2022",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/1Nlly_4s.jpg?v=1"
    },
    {
        "title": "So Not Worth it",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/r1Roy_4s.jpg?v=1"
    },
    {
        "title": "Alice, the Final Weapon",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bednb_4s.jpg?v=1"
    },
    {
        "title": "Crossroad Bistro",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jJNbb_4s.jpg?v=1"
    },
    {
        "title": "Parallel Love",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/k6Qdj_4s.jpg?v=1"
    },
    {
        "title": "Gou - Himetachi no Sengoku",
        "year": "2011",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/lWJKbs.jpg?v=1"
    },
    {
        "title": "Forevermore",
        "year": "2014",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/Y00EBs.jpg?v=1"
    },
    {
        "title": "Pit Babe",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJwPqb_4s.jpg?v=1"
    },
    {
        "title": "Nanyobi ni Umareta no",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WP5JZp_4s.jpg?v=1"
    },
    {
        "title": "Be Your Knight",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WPz5bP_4s.jpg?v=1"
    },
    {
        "title": "Echo of Her Voice",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QJglk6_4s.jpg?v=1"
    },
    {
        "title": "Kinkyu Torishirabeshitsu 2",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/45yWKs.jpg?v=1"
    },
    {
        "title": "The Silence of the Monster",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XlgKx_4s.jpg?v=1"
    },
    {
        "title": "My Girlfriend's Boyfriend Season 2",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/lOrbLs.jpg?v=1"
    },
    {
        "title": "Introverted Boss",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xdbrwx_4s.jpg?v=1"
    },
    {
        "title": "The Royal Gambler",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Ekznbs.jpg?v=1"
    },
    {
        "title": "The Debut",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wEXkb_4s.jpg?v=1"
    },
    {
        "title": "Kiseki no Hito",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/JxXBms.jpg?v=1"
    },
    {
        "title": "Room No. 9",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/8pX2bs.jpg?v=1"
    },
    {
        "title": "Doona!",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qY2doQ_4s.jpg?v=1"
    },
    {
        "title": "I'm Home",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/PWy60s.jpg?v=1"
    },
    {
        "title": "Nice Flight!",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/B85eq_4s.jpg?v=1"
    },
    {
        "title": "IN-SEOUL Season 2",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4DxeJs.jpg?v=1"
    },
    {
        "title": "Homesick",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qBbQ0_4s.jpg?v=1"
    },
    {
        "title": "Higuma",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QWzb2_4s.jpg?v=1"
    },
    {
        "title": "Rakshasa Street",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/PxN8Q8_4s.jpg?v=1"
    },
    {
        "title": "Hi Producer",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4e1N5w_4s.jpg?v=1"
    },
    {
        "title": "Count Your Lucky Stars",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RQZPP_4s.jpg?v=1"
    },
    {
        "title": "The Promise of Growing Up Together",
        "year": "2024",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/l0lV2b_4s.jpg?v=1"
    },
    {
        "title": "Miss Truth",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dV6Kbs.jpg?v=1"
    },
    {
        "title": "The Legend of Hao Lan",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/72rPys.jpg?v=1"
    },
    {
        "title": "Rakujitsu",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXex2Z_4s.jpg?v=1"
    },
    {
        "title": "Duang Jai Akkanee",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/73Woes.jpg?v=1"
    },
    {
        "title": "Justice",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qvEV8_4s.jpg?v=1"
    },
    {
        "title": "Divorce Lawyers",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/l0dZEs.jpg?v=1"
    },
    {
        "title": "Tae Pang Korn",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/8qj2Ws.jpg?v=1"
    },
    {
        "title": "35-sai no Shojo",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0RyQk_4s.jpg?v=1"
    },
    {
        "title": "My Supernatural Power",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dogYds.jpg?v=1"
    },
    {
        "title": "Miss Ma, Nemesis",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/bKo8Ns.jpg?v=1"
    },
    {
        "title": "The Little Fairy",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/GNd4os.jpg?v=1"
    },
    {
        "title": "Yes, Her Majesty",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0wzlvE_4s.jpg?v=1"
    },
    {
        "title": "You Raise Me Up",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wbn6g_4s.jpg?v=1"
    },
    {
        "title": "Tatta Hitotsu no Koi",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WND5Rs.jpg?v=1"
    },
    {
        "title": "Sapai Jao",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/e65Zd_4s.jpg?v=1"
    },
    {
        "title": "Save the Last Dance for Me",
        "year": "2004",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9rNeEs.jpg?v=1"
    },
    {
        "title": "DOCTORS Saikyou no Meii",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1W4L5_4s.jpg?v=1"
    },
    {
        "title": "Marry Me, or Not?",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RYe2Ys.jpg?v=1"
    },
    {
        "title": "Love Is All",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/nOnK0E_4s.jpg?v=1"
    },
    {
        "title": "Innocence: Enzai Bengoshi",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/50gXVs.jpg?v=1"
    },
    {
        "title": "Time to Fall in Love",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BeWxq_4s.jpg?v=1"
    },
    {
        "title": "Hyakuman Kai Ieba Yokatta",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6mzRW_4s.jpg?v=1"
    },
    {
        "title": "Rak Diao",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/053OO_4s.jpg?v=1"
    },
    {
        "title": "Black Cinderella",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RzbeY_4s.jpg?v=1"
    },
    {
        "title": "Lost in 1949",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WbgyXs.jpg?v=1"
    },
    {
        "title": "Moonshine and Valentine",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/AYy13s.jpg?v=1"
    },
    {
        "title": "Kimi to Yukite Saku: Shinsengumi Seishunroku",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wDxwR_4s.jpg?v=1"
    },
    {
        "title": "Kikai Sentai Zenkaiger",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/67Aed_4s.jpg?v=1"
    },
    {
        "title": "Hong Gil Dong",
        "year": "2008",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/5vmwAs.jpg?v=1"
    },
    {
        "title": "When the Sky Falls",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6Yymg_4s.jpg?v=1"
    },
    {
        "title": "Hot Blooded Youth",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bxkl5s.jpg?v=1"
    },
    {
        "title": "Never Too Late",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EEoll_4s.jpg?v=1"
    },
    {
        "title": "Love Is Deep",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1pyjds.jpg?v=1"
    },
    {
        "title": "Seal of Love",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EK72W_4s.jpg?v=1"
    },
    {
        "title": "Love Behind the Melody",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QVDZv_4s.jpg?v=1"
    },
    {
        "title": "Tokumei Sentai Go-Busters",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QLBK7_4s.jpg?v=1"
    },
    {
        "title": "Ko One Re-Act",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/yWNR4s.jpg?v=1"
    },
    {
        "title": "Kakenai!?: Kyakuhonka Yoshimaru Keisuke no Sujigaki no Nai Seikatsu",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z2lR8_4s.jpg?v=1"
    },
    {
        "title": "Chasing Ball",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/00vbNs.jpg?v=1"
    },
    {
        "title": "Bread and Soup and Cat Weather",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/7gx8es.jpg?v=1"
    },
    {
        "title": "User Not Found",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Ewn2p_4s.jpg?v=1"
    },
    {
        "title": "Secret Love Affair",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WPBQOs.jpg?v=1"
    },
    {
        "title": "Nice to Meet You",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/40E0ws.jpg?v=1"
    },
    {
        "title": "Blue Flame Assault",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vrm3e_4s.jpg?v=1"
    },
    {
        "title": "Shinbun Kisha",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xo0dZ_4s.jpg?v=1"
    },
    {
        "title": "DOCTORS Saikyou no Meii Season 2",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/KDLgns.jpg?v=1"
    },
    {
        "title": "A Good Day to Be a Dog",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4ewNdd_4s.jpg?v=1"
    },
    {
        "title": "Tokyo Bandwagon",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/joEgy_4s.jpg?v=1"
    },
    {
        "title": "One Night Morning",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2LxQV_4s.jpg?v=1"
    },
    {
        "title": "Kimi wa Petto",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/gJqvds.jpg?v=1"
    },
    {
        "title": "Rule the World",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dRXQ0s.jpg?v=1"
    },
    {
        "title": "Kazama Kimichika: Kyojo Zero",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2woOl7_4s.jpg?v=1"
    },
    {
        "title": "Kangoku no Ohimesama",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/nvZoNs.jpg?v=1"
    },
    {
        "title": "Trace",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pVzBV_4s.jpg?v=1"
    },
    {
        "title": "Old Boy",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EJ8lbs.jpg?v=1"
    },
    {
        "title": "Hello Mr. Gu",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jw1EJ_4s.jpg?v=1"
    },
    {
        "title": "Uso no Senso",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/gJwwPs.jpg?v=1"
    },
    {
        "title": "The King of Dramas",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1vlzRs.jpg?v=1"
    },
    {
        "title": "A Lucid Dream",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wg76R_4s.jpg?v=1"
    },
    {
        "title": "Ending Again",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xv8vZs.jpg?v=1"
    },
    {
        "title": "Cat's Bar",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rbKEgs.jpg?v=1"
    },
    {
        "title": "Deep in My Heart",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QjllAs.jpg?v=1"
    },
    {
        "title": "Your Sensibility My Destiny",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eq5pQ_4s.jpg?v=1"
    },
    {
        "title": "Yuusha Yoshihiko to Michibikareshi Shichinin",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/JkB2ps.jpg?v=1"
    },
    {
        "title": "Gomen, Aishiteru",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kL5Wd_4s.jpg?v=1"
    },
    {
        "title": "Shooting Stars",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/60Lezp_4s.jpg?v=1"
    },
    {
        "title": "Alice no Toge",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Dk3n5s.jpg?v=1"
    },
    {
        "title": "Let's Shake It!",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E7jB0s.jpg?v=1"
    },
    {
        "title": "Tantei no Tantei",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/AYyNPs.jpg?v=1"
    },
    {
        "title": "Storm Eye",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2BrZV_4s.jpg?v=1"
    },
    {
        "title": "Last Cinderella",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/M3ORAs.jpg?v=1"
    },
    {
        "title": "Spice up Our Love",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/d0ZV8W_4s.jpg?v=1"
    },
    {
        "title": "Stars Falling from the Sky",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9x839s.jpg?v=1"
    },
    {
        "title": "Seigi no Mikata",
        "year": "2008",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/g2XBds.jpg?v=1"
    },
    {
        "title": "Winter Sonata",
        "year": "2002",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RJNZxs.jpg?v=1"
    },
    {
        "title": "One Fine Week Season 2",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ByEAq_4s.jpg?v=1"
    },
    {
        "title": "You Make Me Dance",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/6dbVP_4s.jpg?v=1"
    },
    {
        "title": "Ore no Kawaii wa Mousugu Shohikigen!?",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Q4xgW_4s.jpg?v=1"
    },
    {
        "title": "Suna no Tou - Shiri Sugita Rinjin",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Le363s.jpg?v=1"
    },
    {
        "title": "A Man's Story",
        "year": "2009",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/90o7as.jpg?v=1"
    },
    {
        "title": "Oh! My Emperor",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Q5YBvs.jpg?v=1"
    },
    {
        "title": "Romantic",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jQrEw8_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Lovely Geologist",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Q5lpAs.jpg?v=1"
    },
    {
        "title": "The Ghost Detective",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/q2e0Bs.jpg?v=1"
    },
    {
        "title": "Eye Love You",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E5Pnvz_4s.jpg?v=1"
    },
    {
        "title": "The World of My 17",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qAJkBs.jpg?v=1"
    },
    {
        "title": "I Have a Lover",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/K5bQXs.jpg?v=1"
    },
    {
        "title": "Mist of Love",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/R3KREs.jpg?v=1"
    },
    {
        "title": "Shinzanmono",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Rn0AE_4s.jpg?v=1"
    },
    {
        "title": "Serendipity",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/W8qqD_4s.jpg?v=1"
    },
    {
        "title": "I Am the Years You Are the Stars",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0wd3r6_4s.jpg?v=1"
    },
    {
        "title": "Legend of Yunze Season 2",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Rov7z_4s.jpg?v=1"
    },
    {
        "title": "Longing for You",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/x4vZ6E_4s.jpg?v=1"
    },
    {
        "title": "Payback: Money and Power",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QvNJ2_4s.jpg?v=1"
    },
    {
        "title": "Game of Outlaws",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wBrdk_4s.jpg?v=1"
    },
    {
        "title": "When You Love Yourself",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Y3wNes.jpg?v=1"
    },
    {
        "title": "Lom Son Rak",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/8qWZQs.jpg?v=1"
    },
    {
        "title": "Way Back into Love",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZWeok_4s.jpg?v=1"
    },
    {
        "title": "Hormones Season 3",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Wdnels.jpg?v=1"
    },
    {
        "title": "I Am Married... But!",
        "year": "2025",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/VX2w0z_4s.jpg?v=1"
    },
    {
        "title": "Hello Debate Opponent",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QKOJYs.jpg?v=1"
    },
    {
        "title": "My Dear Lady",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/j4gDBs.jpg?v=1"
    },
    {
        "title": "My Only Love Song",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Kxeb4s.jpg?v=1"
    },
    {
        "title": "The King in Love",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jW2Xzs.jpg?v=1"
    },
    {
        "title": "Trolley",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jRw6r_4s.jpg?v=1"
    },
    {
        "title": "Perfect Mismatch",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/x4686w_4s.jpg?v=1"
    },
    {
        "title": "Double Savage",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jQq0WO_4s.jpg?v=1"
    },
    {
        "title": "Drifting Away",
        "year": "2025",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXnypX_4s.jpg?v=1"
    },
    {
        "title": "Legend of Hua Mulan",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/d0ewds.jpg?v=1"
    },
    {
        "title": "Seventeen",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/PdJJ0s.jpg?v=1"
    },
    {
        "title": "Hotel Trainees",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XO0nZ_4s.jpg?v=1"
    },
    {
        "title": "Dear Doctor, I'm Coming for Soul",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QE0X7_4s.jpg?v=1"
    },
    {
        "title": "IS - Otoko Demo Onna Demo Nai Sei",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XdQ7ws.jpg?v=1"
    },
    {
        "title": "Diary of Tootsies",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xj7qzs.jpg?v=1"
    },
    {
        "title": "My Decoy Bride",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2ww21R_4s.jpg?v=1"
    },
    {
        "title": "Dragon Day, You're Dead Season 2",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/r7pvg_4s.jpg?v=1"
    },
    {
        "title": "Roy Fun Tawan Duerd",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0mX4rs.jpg?v=1"
    },
    {
        "title": "Your Highness",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2D4wks.jpg?v=1"
    },
    {
        "title": "Hammer Session!",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RzdA6_4s.jpg?v=1"
    },
    {
        "title": "Judge vs. Judge",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/oVkQNs.jpg?v=1"
    },
    {
        "title": "See Her Again",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/mOXqek_4s.jpg?v=1"
    },
    {
        "title": "My Dear Brothers",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/r6Pk2_4s.jpg?v=1"
    },
    {
        "title": "Stealer: The Treasure Keeper",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/d00j80_4s.jpg?v=1"
    },
    {
        "title": "Burn the House Down",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xd3b8Z_4s.jpg?v=1"
    },
    {
        "title": "Out of Breath",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BbZY7s.jpg?v=1"
    },
    {
        "title": "Awl",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z54vJs.jpg?v=1"
    },
    {
        "title": "Falling Into You",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZQkXO_4s.jpg?v=1"
    },
    {
        "title": "Pitsawat",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/elvLWs.jpg?v=1"
    },
    {
        "title": "Lucky Romance",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/VJQeQs.jpg?v=1"
    },
    {
        "title": "My Amazing Boyfriend Season 2",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1QXvRs.jpg?v=1"
    },
    {
        "title": "The Young Warriors",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/JB87ps.jpg?v=1"
    },
    {
        "title": "Mother Game",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kXJvbs.jpg?v=1"
    },
    {
        "title": "The Big Boss",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pkY5Bs.jpg?v=1"
    },
    {
        "title": "Angel Beside Me",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xXDm0s.jpg?v=1"
    },
    {
        "title": "Two Fathers",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/W1zz3s.jpg?v=1"
    },
    {
        "title": "The Sixth Sense",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rNjxZs.jpg?v=1"
    },
    {
        "title": "Serenade of Peaceful Joy",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RJbeYs.jpg?v=1"
    },
    {
        "title": "Love That Makes You Cry",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/N7lBWs.jpg?v=1"
    },
    {
        "title": "On the Way to the Airport",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/8xXANs.jpg?v=1"
    },
    {
        "title": "Moon in the Day",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QJ53r4_4s.jpg?v=1"
    },
    {
        "title": "Sparkle Love",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BNx8b_4s.jpg?v=1"
    },
    {
        "title": "Use for My Talent",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jNLYb_4s.jpg?v=1"
    },
    {
        "title": "Moonshine",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XVg6d_4s.jpg?v=1"
    },
    {
        "title": "My Divine Emissary",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXnvp2_4s.jpg?v=1"
    },
    {
        "title": "Autumn Tale",
        "year": "2000",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Ebmym_4s.jpg?v=1"
    },
    {
        "title": "Beautiful Love, Wonderful Life",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QN30As.jpg?v=1"
    },
    {
        "title": "Love Yourself",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xxryE_4s.jpg?v=1"
    },
    {
        "title": "Phupha | Nanfah",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/R1djP_4s.jpg?v=1"
    },
    {
        "title": "Manhattan Love Story",
        "year": "2003",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/YoPWAs.jpg?v=1"
    },
    {
        "title": "Insect Detective Season 2",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/x4wQmX_4s.jpg?v=1"
    },
    {
        "title": "Ming Dynasty",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Ww2YX_4s.jpg?v=1"
    },
    {
        "title": "Ruk Laek Pop",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xOq53_4s.jpg?v=1"
    },
    {
        "title": "Jiu Liu Overlord",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/v3ZN2_4s.jpg?v=1"
    },
    {
        "title": "Gentlemen of East 8th",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0W1gr_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Black Sun",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZOLk7_4s.jpg?v=1"
    },
    {
        "title": "Yamato Nadeshiko Shichi Henge",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qYwQDs.jpg?v=1"
    },
    {
        "title": "Jang Young Shil",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2D4wWs.jpg?v=1"
    },
    {
        "title": "Tokyo Tarareba Musume",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ve2ZZs.jpg?v=1"
    },
    {
        "title": "Perfume",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/enwzqs.jpg?v=1"
    },
    {
        "title": "The Legend of Anle",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1wObgy_4s.jpg?v=1"
    },
    {
        "title": "Game Rai Game Rak",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Or0XYs.jpg?v=1"
    },
    {
        "title": "Love Beyond Frontier",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QK3zQs.jpg?v=1"
    },
    {
        "title": "The Trainee",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4ej01w_4s.jpg?v=1"
    },
    {
        "title": "The Trust",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pd2BJV_4s.jpg?v=1"
    },
    {
        "title": "Uchi no Otto wa Shigoto ga Dekinai",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Jp3yms.jpg?v=1"
    },
    {
        "title": "Detective Samoyeds",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dzjZbs.jpg?v=1"
    },
    {
        "title": "Bad Guys",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/06dEY_4s.jpg?v=1"
    },
    {
        "title": "Jack o' Frost",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bdvoq1_4s.jpg?v=1"
    },
    {
        "title": "Legendary Witch",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ONrzys.jpg?v=1"
    },
    {
        "title": "From Me to You",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kAAVVr_4s.jpg?v=1"
    },
    {
        "title": "Jugglers",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rkoV7s.jpg?v=1"
    },
    {
        "title": "A Love So Beautiful",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vEzgB_4s.jpg?v=1"
    },
    {
        "title": "Colourful Bone",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/24re2s.jpg?v=1"
    },
    {
        "title": "Papa to Musume no Nanokakan",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1x2Rz_4s.jpg?v=1"
    },
    {
        "title": "Cinderella Formula",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4QA6k_4s.jpg?v=1"
    },
    {
        "title": "BG: Personal Bodyguard Season 2",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XEXyw_4s.jpg?v=1"
    },
    {
        "title": "Bright Eyes in the Dark",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xd83eg_4s.jpg?v=1"
    },
    {
        "title": "Short",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WbJyPs.jpg?v=1"
    },
    {
        "title": "The Escape of the Seven: Resurrection",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bd3KQb_4s.jpg?v=1"
    },
    {
        "title": "A Lonely Hero\u2019s Journey",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4eNejY_4s.jpg?v=1"
    },
    {
        "title": "Let's Eat Season 3",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2kQO7_4s.jpg?v=1"
    },
    {
        "title": "Are We Alright?",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pe1NE_4s.jpg?v=1"
    },
    {
        "title": "Kids' Lives Matter",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EjYeO_4s.jpg?v=1"
    },
    {
        "title": "Roppongi Class",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EzzN0_4s.jpg?v=1"
    },
    {
        "title": "Kurosagi",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/aE15as.jpg?v=1"
    },
    {
        "title": "Yellow Boots",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kWkAgs.jpg?v=1"
    },
    {
        "title": "Hello Again!",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/N7YQYs.jpg?v=1"
    },
    {
        "title": "If Voice Has Memory",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XVPen_4s.jpg?v=1"
    },
    {
        "title": "2gether",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2qkeds.jpg?v=1"
    },
    {
        "title": "Hakui no Senshi!",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vLDjq_4s.jpg?v=1"
    },
    {
        "title": "Delayed Justice",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/j3olB_4s.jpg?v=1"
    },
    {
        "title": "Faith Makes Great",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/47pow_4s.jpg?v=1"
    },
    {
        "title": "Emperor of the Sea",
        "year": "2004",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9oQvPs.jpg?v=1"
    },
    {
        "title": "The Palace: The Lock Heart Jade",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/aeOEGs.jpg?v=1"
    },
    {
        "title": "Kinkyu Torishirabeshitsu 3",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xmqwqs.jpg?v=1"
    },
    {
        "title": "Addicted",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Ekjgps.jpg?v=1"
    },
    {
        "title": "Dive",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E26QQs.jpg?v=1"
    },
    {
        "title": "Love at First Hate",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Q5ZyAs.jpg?v=1"
    },
    {
        "title": "9 Border",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RBkpJP_4s.jpg?v=1"
    },
    {
        "title": "Sketch",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/q23QPs.jpg?v=1"
    },
    {
        "title": "The Dreamlike Seal",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ByPp7_4s.jpg?v=1"
    },
    {
        "title": "Gifted",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XdZrKn_4s.jpg?v=1"
    },
    {
        "title": "Melancholia",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WDo4P_4s.jpg?v=1"
    },
    {
        "title": "Tra Barb See Chompoo",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/z7N1zs.jpg?v=1"
    },
    {
        "title": "Like",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eRpYYs.jpg?v=1"
    },
    {
        "title": "Soot Sanaeha",
        "year": "2009",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/63JLjs.jpg?v=1"
    },
    {
        "title": "Virtues of Harmony",
        "year": "2001",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/04oe7s.jpg?v=1"
    },
    {
        "title": "Elpis: Kibou, Aruiwa Wazawai",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EKVlb_4s.jpg?v=1"
    },
    {
        "title": "Novoland: The Castle in the Sky",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/W0vWR_4s.jpg?v=1"
    },
    {
        "title": "Mate",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/81ZlJK_4s.jpg?v=1"
    },
    {
        "title": "The In-laws",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BOPNb_4s.jpg?v=1"
    },
    {
        "title": "When You Be Me",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BPy27_4s.jpg?v=1"
    },
    {
        "title": "Aishiteiru to Ittekure",
        "year": "1995",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WpRyp_4s.jpg?v=1"
    },
    {
        "title": "Sign",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wmAks.jpg?v=1"
    },
    {
        "title": "Go Back Lover",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/yWVPPk_4s.jpg?v=1"
    },
    {
        "title": "Crash! Insignificant Roommates",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kELkds.jpg?v=1"
    },
    {
        "title": "Dragon Zakura",
        "year": "2005",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2PNkP_4s.jpg?v=1"
    },
    {
        "title": "Shark",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/GLodBs.jpg?v=1"
    },
    {
        "title": "Growing Pain Season 2",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jmbmB_4s.jpg?v=1"
    },
    {
        "title": "Sweet Combat",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/085Xe_4s.jpg?v=1"
    },
    {
        "title": "Love and Deception",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BJlPq_4s.jpg?v=1"
    },
    {
        "title": "The Good Wife",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2Wqmw_4s.jpg?v=1"
    },
    {
        "title": "Khu Khaen Saen Rak",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kPVVk_4s.jpg?v=1"
    },
    {
        "title": "Best Mistake",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vWVoBs.jpg?v=1"
    },
    {
        "title": "Mask Girl",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kAozJr_4s.jpg?v=1"
    },
    {
        "title": "Mother of Mine",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/72bALs.jpg?v=1"
    },
    {
        "title": "Ghost Writer",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1vQjQs.jpg?v=1"
    },
    {
        "title": "Suits",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/13Yods.jpg?v=1"
    },
    {
        "title": "Liars in Love",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jQ4dmw_4s.jpg?v=1"
    },
    {
        "title": "The Love Lasts Two Minds",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/p4JoBs.jpg?v=1"
    },
    {
        "title": "Kim Soo Ro",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/mO4J2s.jpg?v=1"
    },
    {
        "title": "No Way Out: The Roulette",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8dVqL_4s.jpg?v=1"
    },
    {
        "title": "Neung Nai Suang",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/joApv_4s.jpg?v=1"
    },
    {
        "title": "Discovery of Romance",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eB8vp_4s.jpg?v=1"
    },
    {
        "title": "Lookism",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/23ERws.jpg?v=1"
    },
    {
        "title": "Kidnap",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8QP41_4s.jpg?v=1"
    },
    {
        "title": "DOCTORS Saikyou no Meii Season 3",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/meQpqs.jpg?v=1"
    },
    {
        "title": "Oh My Baby",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4D5VKs.jpg?v=1"
    },
    {
        "title": "The Best Ending",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pWmJBs.jpg?v=1"
    },
    {
        "title": "A Love So Romantic",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rXvXp_4s.jpg?v=1"
    },
    {
        "title": "Martial Universe Season 2",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jrORws.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kammathep Jum Laeng",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/OBQ7ds.jpg?v=1"
    },
    {
        "title": "Kiwadoi Futari: K2: Ikebukurosho Keijika Kanzaki Kuroki",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dWmXb_4s.jpg?v=1"
    },
    {
        "title": "Suikyuu Yankees",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RBENRs.jpg?v=1"
    },
    {
        "title": "Wanida",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/l0rVes.jpg?v=1"
    },
    {
        "title": "Beloved Life",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0P7o4_4s.jpg?v=1"
    },
    {
        "title": "Knight of the Rose",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kg1Jd_4s.jpg?v=1"
    },
    {
        "title": "Meeting You Loving You",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZxD71_4s.jpg?v=1"
    },
    {
        "title": "Bakuryuu Sentai Abaranger",
        "year": "2003",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z84b87_4s.jpg?v=1"
    },
    {
        "title": "Guilty Akuma to Keiyakushita Onna",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/b3yYEs.jpg?v=1"
    },
    {
        "title": "A Robot in the Orange Orchard",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dl87A_4s.jpg?v=1"
    },
    {
        "title": "Lion Pride",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EYzp5s.jpg?v=1"
    },
    {
        "title": "The Outsider",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0wxjQ4_4s.jpg?v=1"
    },
    {
        "title": "Thumping Spike",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z5w0Js.jpg?v=1"
    },
    {
        "title": "Atashinchi no Danshi",
        "year": "2009",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qK4V0_4s.jpg?v=1"
    },
    {
        "title": "Band of Sisters",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/OrgxLs.jpg?v=1"
    },
    {
        "title": "Hotel King",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/nOgBWs.jpg?v=1"
    },
    {
        "title": "Subete ga F ni Naru",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jq3mJs.jpg?v=1"
    },
    {
        "title": "The Snow Queen",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wgzds.jpg?v=1"
    },
    {
        "title": "Aishite tatte, Himitsu wa Aru",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Y0nwPs.jpg?v=1"
    },
    {
        "title": "Papa & Daddy Season 2",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wZ88Y_4s.jpg?v=1"
    },
    {
        "title": "Always Have, Always Will",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jYyOO_4s.jpg?v=1"
    },
    {
        "title": "Dear Herbal Lord",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/W72ol_4s.jpg?v=1"
    },
    {
        "title": "A Boss and a Babe",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RBBJko_4s.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kammathep Hunsa",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/j0DNBs.jpg?v=1"
    },
    {
        "title": "Dr. Koto Shinryojo",
        "year": "2003",
        "rating": "7.8",
        "image": "https://i.mydramalist.com/X558O_4s.jpg?v=1"
    },
    {
        "title": "Personal Taste",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/mOy41s.jpg?v=1"
    },
    {
        "title": "Legend of Awakening",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dAe3bs.jpg?v=1"
    },
    {
        "title": "Ngao Asoke",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/PbWD8s.jpg?v=1"
    },
    {
        "title": "Flower Ever After",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/VbJnQs.jpg?v=1"
    },
    {
        "title": "W no Higeki",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rbb6ps.jpg?v=1"
    },
    {
        "title": "Iron Family",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0QL50_4s.jpg?v=1"
    },
    {
        "title": "Hatsukoi no Akuma",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/03NAN_4s.jpg?v=1"
    },
    {
        "title": "Please Don't Date Him",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/256YO_4s.jpg?v=1"
    },
    {
        "title": "Better Man",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dR7eWs.jpg?v=1"
    },
    {
        "title": "Sword Dynasty",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Er0kms.jpg?v=1"
    },
    {
        "title": "Jao Sao Jamloei",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4OPQZ_4s.jpg?v=1"
    },
    {
        "title": "Mi wo Tsukushi Ryouricho",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WQPVms.jpg?v=1"
    },
    {
        "title": "Romanced",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RnxbP_4s.jpg?v=1"
    },
    {
        "title": "What's Wrong with My Princess",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/WP1ljX_4s.jpg?v=1"
    },
    {
        "title": "My Sassy Girl",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qkYePs.jpg?v=1"
    },
    {
        "title": "King Gwanggaeto the Great",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kWogbs.jpg?v=1"
    },
    {
        "title": "When You Love Yourself Season 2",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/enNLes.jpg?v=1"
    },
    {
        "title": "The Golden Eyes",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qqDyBs.jpg?v=1"
    },
    {
        "title": "Love Beneath the Stars",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Zerej_4s.jpg?v=1"
    },
    {
        "title": "Sweet Dreams",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kVvL8s.jpg?v=1"
    },
    {
        "title": "Emergency Department Doctors",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/nvLwWs.jpg?v=1"
    },
    {
        "title": "Hayabusa Shobodan",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXv3bX_4s.jpg?v=1"
    },
    {
        "title": "Renascence",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1ZoWd_4s.jpg?v=1"
    },
    {
        "title": "Gintama 2: Yonimo Kimyo na Gintama-chan",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/lyZ66s.jpg?v=1"
    },
    {
        "title": "Otto no Katei wo Kowasu made",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXz1BZ_4s.jpg?v=1"
    },
    {
        "title": "Love Is More Than a Word",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/l7WOvs.jpg?v=1"
    },
    {
        "title": "Ever Night Season 2",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EPrN5s.jpg?v=1"
    },
    {
        "title": "The Goddess of Revenge",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/v3DLp_4s.jpg?v=1"
    },
    {
        "title": "Gone with the Rain",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vXNPjg_4s.jpg?v=1"
    },
    {
        "title": "Sayonara no Tsuzuki",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xdzowp_4s.jpg?v=1"
    },
    {
        "title": "Sanae Rak Nang Cin",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dwoNds.jpg?v=1"
    },
    {
        "title": "The Hippocratic Crush Season 2",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2oD82s.jpg?v=1"
    },
    {
        "title": "Ashura no Gotoku",
        "year": "2025",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Pxy6y3_4s.jpg?v=1"
    },
    {
        "title": "Lightning",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/JkQlYs.jpg?v=1"
    },
    {
        "title": "Thousand Years for You",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Zlx3Y_4s.jpg?v=1"
    },
    {
        "title": "Unintentional Love Story",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RBBJ46_4s.jpg?v=1"
    },
    {
        "title": "Bitter Sweet Hell",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kAWxqr_4s.jpg?v=1"
    },
    {
        "title": "Atom no Ko",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2RooR_4s.jpg?v=1"
    },
    {
        "title": "Scandal",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9v08qs.jpg?v=1"
    },
    {
        "title": "Krachao Seeda",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1j45z_4s.jpg?v=1"
    },
    {
        "title": "Shiko Funjatta!",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XnOyg_4s.jpg?v=1"
    },
    {
        "title": "The Silent Criminal",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wrpBg_4s.jpg?v=1"
    },
    {
        "title": "Legend of the Dragon Pearl: The Indistinguishable Road",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/l7VdEs.jpg?v=1"
    },
    {
        "title": "Dear My Name",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QNDrYs.jpg?v=1"
    },
    {
        "title": "Ojisan wa Kawaii Mono ga Osuki",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/dxN3g_4s.jpg?v=1"
    },
    {
        "title": "Full House",
        "year": "2004",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/b3blws.jpg?v=1"
    },
    {
        "title": "Zeni no Senso",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0ZNg4_4s.jpg?v=1"
    },
    {
        "title": "Tears in Heaven",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RdeoP_4s.jpg?v=1"
    },
    {
        "title": "Leh Lub Salub Rarng",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/mkW1Js.jpg?v=1"
    },
    {
        "title": "Dear Mom",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BBwXAs.jpg?v=1"
    },
    {
        "title": "Over Run Over",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qQeLKs.jpg?v=1"
    },
    {
        "title": "Prissana",
        "year": "2000",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/14DERs.jpg?v=1"
    },
    {
        "title": "Khun Chai Pawornruj",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E4qpQ_4s.jpg?v=1"
    },
    {
        "title": "Love in Contract",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wvZlp_4s.jpg?v=1"
    },
    {
        "title": "The Spirit of the Ruler",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Pd7ZRs.jpg?v=1"
    },
    {
        "title": "High-end Crush",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/mojX0s.jpg?v=1"
    },
    {
        "title": "My Sassy Psychic",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XqXzx_4s.jpg?v=1"
    },
    {
        "title": "Gosei Sentai Dairanger",
        "year": "1993",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8VqLs.jpg?v=1"
    },
    {
        "title": "Dr. Park\u2019s Clinic",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xLXvy_4s.jpg?v=1"
    },
    {
        "title": "Saiko no Kyoshi: Ichinengo, Watashi wa Seito ni Sareta",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/60rd2P_4s.jpg?v=1"
    },
    {
        "title": "Rikokatsu",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jwPQz_4s.jpg?v=1"
    },
    {
        "title": "Shiyakusho",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xLV6w_4s.jpg?v=1"
    },
    {
        "title": "I Will Never Let You Go",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kXWNjs.jpg?v=1"
    },
    {
        "title": "Under the Gun",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XdgOLq_4s.jpg?v=1"
    },
    {
        "title": "Dawn Is Breaking",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vX3W88_4s.jpg?v=1"
    },
    {
        "title": "Hard Nut!",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/l07bvs.jpg?v=1"
    },
    {
        "title": "Psychologist",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/rnlKD_4s.jpg?v=1"
    },
    {
        "title": "Padam Padam",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/3ox2Ds.jpg?v=1"
    },
    {
        "title": "The Masked Lover",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z7Y4ks.jpg?v=1"
    },
    {
        "title": "Dear Mayang Street",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4N7kw_4s.jpg?v=1"
    },
    {
        "title": "Zekkyou",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vO3zWs.jpg?v=1"
    },
    {
        "title": "Lies Hidden in My Garden",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/60Qkq0_4s.jpg?v=1"
    },
    {
        "title": "Tarm Ruk Keun Jai",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vYEp2_4s.jpg?v=1"
    },
    {
        "title": "Love with Flaws",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wl01ks.jpg?v=1"
    },
    {
        "title": "The Suspicious Housekeeper",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/851nAs.jpg?v=1"
    },
    {
        "title": "Golden House Hidden Love",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2w3xDd_4s.jpg?v=1"
    },
    {
        "title": "Till Death Tear Us Apart",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/zo13Os.jpg?v=1"
    },
    {
        "title": "Isekai Izakaya \"Nobu\"",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/do0Rgs.jpg?v=1"
    },
    {
        "title": "My Lucky Star",
        "year": "2007",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/3o1p4s.jpg?v=1"
    },
    {
        "title": "Supervisor Husband",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/60glkW_4s.jpg?v=1"
    },
    {
        "title": "Decline",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eYWL0d_4s.jpg?v=1"
    },
    {
        "title": "Totto TV",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/PWLLXs.jpg?v=1"
    },
    {
        "title": "Twenty Years Old",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jQJOys.jpg?v=1"
    },
    {
        "title": "Ninkyo Helper",
        "year": "2009",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9vrp9s.jpg?v=1"
    },
    {
        "title": "Once Again",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1657R_4s.jpg?v=1"
    },
    {
        "title": "Heaven's Garden",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9y6k6s.jpg?v=1"
    },
    {
        "title": "Kaew Klang Dong",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RJNJrs.jpg?v=1"
    },
    {
        "title": "Aozora no Tamago",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vJJyWs.jpg?v=1"
    },
    {
        "title": "The Mysteries of Love",
        "year": "2010",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/3oj2js.jpg?v=1"
    },
    {
        "title": "Date - Koi to wa Donna Mono Kashira",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZRrN1s.jpg?v=1"
    },
    {
        "title": "Times",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0jj4e_4s.jpg?v=1"
    },
    {
        "title": "Sixteen Shoukougun",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eEPE8s.jpg?v=1"
    },
    {
        "title": "Gunman in Joseon",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/b3dxjs.jpg?v=1"
    },
    {
        "title": "East of Eden",
        "year": "2008",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eYbL8s.jpg?v=1"
    },
    {
        "title": "Checkmate",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vV8Nq_4s.jpg?v=1"
    },
    {
        "title": "My Love in the Countryside",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1wQOdy_4s.jpg?v=1"
    },
    {
        "title": "Chou no Rikigaku",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1q8vys.jpg?v=1"
    },
    {
        "title": "Shinhannin Flag",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jPWnv_4s.jpg?v=1"
    },
    {
        "title": "Miss the Dragon",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2AL4O_4s.jpg?v=1"
    },
    {
        "title": "The Midnight Romance in Hagwon",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QJXek6_4s.jpg?v=1"
    },
    {
        "title": "Bed Friend",
        "year": "2023",
        "rating": "7.7",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "The Way We Were",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/O8Koys.jpg?v=1"
    },
    {
        "title": "Taiyou no Uta",
        "year": "2006",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/9vX5ps.jpg?v=1"
    },
    {
        "title": "Sahara Sensei to Toki-kun",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJnxmA_4s.jpg?v=1"
    },
    {
        "title": "Curtain Call",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/w13Xg_4s.jpg?v=1"
    },
    {
        "title": "Maho Sentai Magiranger",
        "year": "2005",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/VXoD4z_4s.jpg?v=1"
    },
    {
        "title": "Smile",
        "year": "2009",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EOVqb_4s.jpg?v=1"
    },
    {
        "title": "Divine Destiny",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2wmWl2_4s.jpg?v=1"
    },
    {
        "title": "Weaving a Tale of Love Season 2",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4e0AEY_4s.jpg?v=1"
    },
    {
        "title": "EXO Next Door",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/7rxqrs.jpg?v=1"
    },
    {
        "title": "Dr. DMAT",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJyKps.jpg?v=1"
    },
    {
        "title": "Kom Faek",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ndBjEs.jpg?v=1"
    },
    {
        "title": "Entertainer",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/XA0Qns.jpg?v=1"
    },
    {
        "title": "Mountains and Ocean",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/440pKs.jpg?v=1"
    },
    {
        "title": "High School King of Savvy",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/JBXzms.jpg?v=1"
    },
    {
        "title": "Boss & Me",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Zq36O_4s.jpg?v=1"
    },
    {
        "title": "The World of My 17 Season 2",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/BVoz1_4s.jpg?v=1"
    },
    {
        "title": "Panyachon Kon Krua",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kAZXgs.jpg?v=1"
    },
    {
        "title": "Pledge of Allegiance",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0wwLLk_4s.jpg?v=1"
    },
    {
        "title": "Kimi wa Petto",
        "year": "2003",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZerKk_4s.jpg?v=1"
    },
    {
        "title": "Dramatic Self-Help Strategy",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E5J4W0_4s.jpg?v=1"
    },
    {
        "title": "The Chaser",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qkoKBs.jpg?v=1"
    },
    {
        "title": "Pin Anong",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/zBrbJs.jpg?v=1"
    },
    {
        "title": "Mahou no Rinobe",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/B6dVl_4s.jpg?v=1"
    },
    {
        "title": "See You Again",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/lOJBNs.jpg?v=1"
    },
    {
        "title": "The Birth of The Drama King",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/B2zo1s.jpg?v=1"
    },
    {
        "title": "Odoru Daisosasen",
        "year": "1997",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/qK8EP_4s.jpg?v=1"
    },
    {
        "title": "Summer Snow",
        "year": "2000",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wmjrYs.jpg?v=1"
    },
    {
        "title": "Fish Upon the Sky",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2Bgzw_4s.jpg?v=1"
    },
    {
        "title": "The Legendary Four Aces",
        "year": "2000",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/MdRX5s.jpg?v=1"
    },
    {
        "title": "Between Friendship and Love Season 3",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/yEd5Ks.jpg?v=1"
    },
    {
        "title": "Not Alright, But It's Alright",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/4wxo6s.jpg?v=1"
    },
    {
        "title": "Glass Mask",
        "year": "1997",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/MRBBrs.jpg?v=1"
    },
    {
        "title": "Zhang Gong Zhu Zai Shang",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E1gRl_4s.jpg?v=1"
    },
    {
        "title": "Lah Ruk Sut Kob Fah",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Or2Lds.jpg?v=1"
    },
    {
        "title": "Sword and Fairy 1",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/1wE7Eb_4s.jpg?v=1"
    },
    {
        "title": "New Tales of Gisaeng",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/GLox9s.jpg?v=1"
    },
    {
        "title": "Tang Dynasty Tour",
        "year": "2018",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xBdoz_4s.jpg?v=1"
    },
    {
        "title": "In a Good Way",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/3rvPDs.jpg?v=1"
    },
    {
        "title": "Shine or Go Crazy",
        "year": "2015",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jqb8ys.jpg?v=1"
    },
    {
        "title": "Keshigomu wo Kureta Joshi wo Suki ni Natta",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/B8m8l_4s.jpg?v=1"
    },
    {
        "title": "Shichinin no Hisho",
        "year": "2020",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/25577_4s.jpg?v=1"
    },
    {
        "title": "Unlucky Girl!",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/eJnzY_4s.jpg?v=1"
    },
    {
        "title": "Connect",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/pqj7D_4s.jpg?v=1"
    },
    {
        "title": "Cinderella at 2 AM",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vX3o1W_4s.jpg?v=1"
    },
    {
        "title": "Dirty Laundry",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ZADDO_4s.jpg?v=1"
    },
    {
        "title": "Don't Mess With Ex-Girlfriend",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EK53m_4s.jpg?v=1"
    },
    {
        "title": "I Will Knock You",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/02EmN_4s.jpg?v=1"
    },
    {
        "title": "Love Like White Jade",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/kmPWr_4s.jpg?v=1"
    },
    {
        "title": "Single & Ready to Mingle",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6NopK_4s.jpg?v=1"
    },
    {
        "title": "Be Your Own Light",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/0wBB86_4s.jpg?v=1"
    },
    {
        "title": "Brain",
        "year": "2011",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/GJYYys.jpg?v=1"
    },
    {
        "title": "Dragon Day, You're Dead",
        "year": "2017",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/nvQWQs.jpg?v=1"
    },
    {
        "title": "The Furthest Distance",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rNqbPZ_4s.jpg?v=1"
    },
    {
        "title": "Apple My Love",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E5Z7bb_4s.jpg?v=1"
    },
    {
        "title": "My First First Love Season 2",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/2OEvws.jpg?v=1"
    },
    {
        "title": "Hormones",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Bdz4bs.jpg?v=1"
    },
    {
        "title": "Dark Hole",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/xJv2N_4s.jpg?v=1"
    },
    {
        "title": "My First First Love",
        "year": "2019",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Xe6Wws.jpg?v=1"
    },
    {
        "title": "Jade's Fateful Love",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bd70Ob_4s.jpg?v=1"
    },
    {
        "title": "Reibai Tantei Jozuka Hisui",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/EKEJz_4s.jpg?v=1"
    },
    {
        "title": "River\u2019s Edge Okawabata Tanteisha",
        "year": "2014",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ABWeEs.jpg?v=1"
    },
    {
        "title": "Mitsuya Sensei no Keikakutekina Ezuke.",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/QJP1w6_4s.jpg?v=1"
    },
    {
        "title": "Kishibe Rohan wa Ugokanai Season 3",
        "year": "2022",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/jRl8r_4s.jpg?v=1"
    },
    {
        "title": "Sweet Sweet",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wbj6Y_4s.jpg?v=1"
    },
    {
        "title": "Our Skyy 2",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wmABe_4s.jpg?v=1"
    },
    {
        "title": "Whisper",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XZnXxs.jpg?v=1"
    },
    {
        "title": "Hu Tong",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0W2jN_4s.jpg?v=1"
    },
    {
        "title": "Limit",
        "year": "2013",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/MR616s.jpg?v=1"
    },
    {
        "title": "Unexpected Falling",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XWo3Z_4s.jpg?v=1"
    },
    {
        "title": "Saigo Kara Nibanme no Koi",
        "year": "2012",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/ovw36s.jpg?v=1"
    },
    {
        "title": "Dear My Room",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Xedoqs.jpg?v=1"
    },
    {
        "title": "Modern Farmer",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ABK6Zs.jpg?v=1"
    },
    {
        "title": "Billion x School",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJzeV8_4s.jpg?v=1"
    },
    {
        "title": "Forever Love",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/wJ06Z8_4s.jpg?v=1"
    },
    {
        "title": "Time Flies and You Are Here",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xJebq_4s.jpg?v=1"
    },
    {
        "title": "Better a Lie Than a Truth",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EOldp_4s.jpg?v=1"
    },
    {
        "title": "New Heart",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X4NBZs.jpg?v=1"
    },
    {
        "title": "Xi Dian Yuan Yang",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5y1Ows.jpg?v=1"
    },
    {
        "title": "Mae Krua Kon Mai",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jvdkd_4s.jpg?v=1"
    },
    {
        "title": "The Great King, Sejong",
        "year": "2008",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/M737Ds.jpg?v=1"
    },
    {
        "title": "Green Mothers' Club",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4ZD46_4s.jpg?v=1"
    },
    {
        "title": "Joker Yurusarezaru Sousakan",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/GJ8Jas.jpg?v=1"
    },
    {
        "title": "Casting a Spell to You",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/peEX8_4s.jpg?v=1"
    },
    {
        "title": "The High School Heroes",
        "year": "2021",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/r1pR7_4s.jpg?v=1"
    },
    {
        "title": "Oasis",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQQAly_4s.jpg?v=1"
    },
    {
        "title": "Glass Mask Season 2",
        "year": "1998",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Gl004s.jpg?v=1"
    },
    {
        "title": "The Magical Women",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/RBj6vP_4s.jpg?v=1"
    },
    {
        "title": "Kasuka na Kanojo",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E2WlQs.jpg?v=1"
    },
    {
        "title": "Kageri Yuku Natsu",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/nEvmEs.jpg?v=1"
    },
    {
        "title": "Love in Translation",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rN27EZ_4s.jpg?v=1"
    },
    {
        "title": "Nancheng Banquet",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8B3zO_4s.jpg?v=1"
    },
    {
        "title": "The Flowers Are Blooming",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BY0mq_4s.jpg?v=1"
    },
    {
        "title": "Twisted Fate of Love",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1KXxz_4s.jpg?v=1"
    },
    {
        "title": "The Proud Twins",
        "year": "2005",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/GWnyWs.jpg?v=1"
    },
    {
        "title": "Undercover Affair",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8kWRY_4s.jpg?v=1"
    },
    {
        "title": "Kekkon Aite wa Chusen de",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Ld4qys.jpg?v=1"
    },
    {
        "title": "Dolce Amore",
        "year": "2016",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/vJQPXs.jpg?v=1"
    },
    {
        "title": "3 Days",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5vx8As.jpg?v=1"
    },
    {
        "title": "The Fearless",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pvWZys.jpg?v=1"
    },
    {
        "title": "Chasing the Undercurrent",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jzm8y_4s.jpg?v=1"
    },
    {
        "title": "Something Just Like This",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z28LO_4s.jpg?v=1"
    },
    {
        "title": "Murphy's Law of Love",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/m0Yd1s.jpg?v=1"
    },
    {
        "title": "Jimenshitachi",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z8W4JO_4s.jpg?v=1"
    },
    {
        "title": "Why R U?",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/j84Azs.jpg?v=1"
    },
    {
        "title": "Here Is My Exclusive Indulge Season 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/q0xWQ_4s.jpg?v=1"
    },
    {
        "title": "SP",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PxoVe8_4s.jpg?v=1"
    },
    {
        "title": "Romance in the House",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQg7JO_4s.jpg?v=1"
    },
    {
        "title": "Final Fantasy XIV: Hikari no Otousan",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/630v2s.jpg?v=1"
    },
    {
        "title": "Stock Struck",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vV3OX_4s.jpg?v=1"
    },
    {
        "title": "Cheer\u2606Dan",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jrYPOs.jpg?v=1"
    },
    {
        "title": "Secret Door",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5vlbLs.jpg?v=1"
    },
    {
        "title": "Wars of In-Laws",
        "year": "2005",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x4YW8y_4s.jpg?v=1"
    },
    {
        "title": "Kocchi Muite yo Mukai-kun",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bdrom7_4s.jpg?v=1"
    },
    {
        "title": "Love Sick Season 2",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X26Egs.jpg?v=1"
    },
    {
        "title": "Akumu-Chan",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kL5dj_4s.jpg?v=1"
    },
    {
        "title": "My Happy Ending",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wpD0r_4s.jpg?v=1"
    },
    {
        "title": "Rose In Da House",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xp5Nj_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Xiao Chuo",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qlNr0_4s.jpg?v=1"
    },
    {
        "title": "Plus & Minus",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X5pWd_4s.jpg?v=1"
    },
    {
        "title": "Goritekini Arienai: Tantei Kamizuru Ryoko no Kaimei",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQQelO_4s.jpg?v=1"
    },
    {
        "title": "The World Is Kind to Me",
        "year": "2023",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/Z8oglJ_4s.jpg?v=1"
    },
    {
        "title": "Mr. Heart",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rzp4D_4s.jpg?v=1"
    },
    {
        "title": "Takane no Hana",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JxbVws.jpg?v=1"
    },
    {
        "title": "Take Five - Oretachi wa Ai wo Nusumeru ka",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QJjBgs.jpg?v=1"
    },
    {
        "title": "Inference Notes",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/yNl3Ks.jpg?v=1"
    },
    {
        "title": "My Little Princess",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dRm8As.jpg?v=1"
    },
    {
        "title": "Cheo Yong",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RBkzEs.jpg?v=1"
    },
    {
        "title": "My Ride",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pel6D_4s.jpg?v=1"
    },
    {
        "title": "Crocodile and Plover Bird",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jVmdbs.jpg?v=1"
    },
    {
        "title": "Love Cuisine",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Q13EQs.jpg?v=1"
    },
    {
        "title": "Fly the Jumper",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WADql_4s.jpg?v=1"
    },
    {
        "title": "While You Were Sleeping",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x4XJrs.jpg?v=1"
    },
    {
        "title": "My Fantastic Mrs Right",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/j2oR8s.jpg?v=1"
    },
    {
        "title": "The Only Girl You Haven't Seen Season 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XdOV0Z_4s.jpg?v=1"
    },
    {
        "title": "Paen Rai Long Tai Wa Rak",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/b2JjNs.jpg?v=1"
    },
    {
        "title": "Neko Zamurai",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/B75WRs.jpg?v=1"
    },
    {
        "title": "K.O.3an Guo",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jqp2ds.jpg?v=1"
    },
    {
        "title": "Marry Me",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kqjYg_4s.jpg?v=1"
    },
    {
        "title": "The 8 Show",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z8ow0k_4s.jpg?v=1"
    },
    {
        "title": "Aoi Honoo",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/KxDwRs.jpg?v=1"
    },
    {
        "title": "My Bossy Wife Season 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WLK7p_4s.jpg?v=1"
    },
    {
        "title": "My Hero Series: Heart of the Motherland",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7gNlDs.jpg?v=1"
    },
    {
        "title": "The Thunder",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4pwm6s.jpg?v=1"
    },
    {
        "title": "Big Bet Season 2",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BdvnL5_4s.jpg?v=1"
    },
    {
        "title": "Hot Girl",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/00ynes.jpg?v=1"
    },
    {
        "title": "You from the Future",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x4Azdw_4s.jpg?v=1"
    },
    {
        "title": "Fukou-kun wa Kiss Suru Shikanai!",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Rmz3r_4s.jpg?v=1"
    },
    {
        "title": "Ready for Love?",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z85vLW_4s.jpg?v=1"
    },
    {
        "title": "Find Me if You Can",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/12XeQ_4s.jpg?v=1"
    },
    {
        "title": "Our Skyy",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/yEK73s.jpg?v=1"
    },
    {
        "title": "Hidden Identity",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6vXVps.jpg?v=1"
    },
    {
        "title": "Clean with Passion for Now",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QK5k6s.jpg?v=1"
    },
    {
        "title": "Feel Good to Die",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wwW01s.jpg?v=1"
    },
    {
        "title": "The Great Ruler",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XvgQxs.jpg?v=1"
    },
    {
        "title": "Perfect Partner",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xgl4ys.jpg?v=1"
    },
    {
        "title": "Blue Moment",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QJm75A_4s.jpg?v=1"
    },
    {
        "title": "Brilliant Class 8",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/61EmO_4s.jpg?v=1"
    },
    {
        "title": "Healing Food, Healing Love",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1Y66Q_4s.jpg?v=1"
    },
    {
        "title": "Time",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/DXmrrs.jpg?v=1"
    },
    {
        "title": "Shigatsu no Tokyo wa...",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XdARgd_4s.jpg?v=1"
    },
    {
        "title": "Fukuyado Honpo - Kyoto Love Story",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pP5Wr_4s.jpg?v=1"
    },
    {
        "title": "Massaya",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/V4RdLs.jpg?v=1"
    },
    {
        "title": "Wanted",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qOJzQs.jpg?v=1"
    },
    {
        "title": "Kare no Iru Seikatsu",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5PW0b_4s.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Loob Korn Kammathep",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PbzB3s.jpg?v=1"
    },
    {
        "title": "Bangkok Love Stories 2: Plead",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/lJ3oQs.jpg?v=1"
    },
    {
        "title": "Men in Love",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5DnpQ_4s.jpg?v=1"
    },
    {
        "title": "Backstreet Rookie",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QYZZg_4s.jpg?v=1"
    },
    {
        "title": "Zettai Reido Season 3",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/nE7DLs.jpg?v=1"
    },
    {
        "title": "Ugly Duckling Series: Perfect Match",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5dnmYs.jpg?v=1"
    },
    {
        "title": "Tenshoku no Mao-sama",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bdj3l6_4s.jpg?v=1"
    },
    {
        "title": "Hotaru no Hikari",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vLlrD_4s.jpg?v=1"
    },
    {
        "title": "My Heart",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1e4j3_4s.jpg?v=1"
    },
    {
        "title": "Baek Hee Has Returned",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7Qknrs.jpg?v=1"
    },
    {
        "title": "Samurai Sensei",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/bw4Ojs.jpg?v=1"
    },
    {
        "title": "Flavour It's Yours",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vdk2Bs.jpg?v=1"
    },
    {
        "title": "Everything and Nothing",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/enDv8s.jpg?v=1"
    },
    {
        "title": "Yorozu Uranaidokoro Onmyoya e Yokoso",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Or8nPs.jpg?v=1"
    },
    {
        "title": "Reversal Orchestra",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/28DvR_4s.jpg?v=1"
    },
    {
        "title": "My Girl",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JKJwjs.jpg?v=1"
    },
    {
        "title": "The Letter from the Cloud",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/q7mvP_4s.jpg?v=1"
    },
    {
        "title": "Damo",
        "year": "2003",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/akA7vs.jpg?v=1"
    },
    {
        "title": "Inborn Pair",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5mQZ0s.jpg?v=1"
    },
    {
        "title": "Best Mistake Season 2",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QpzY6s.jpg?v=1"
    },
    {
        "title": "Bad Guy",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9oX6Gs.jpg?v=1"
    },
    {
        "title": "Dear Diary",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wdqqY_4s.jpg?v=1"
    },
    {
        "title": "The Sweet Girl",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kVZmds.jpg?v=1"
    },
    {
        "title": "About Is Love Season 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dqQ50_4s.jpg?v=1"
    },
    {
        "title": "Flying Tiger",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/zEeqPs.jpg?v=1"
    },
    {
        "title": "Adamas",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ZlzzJ_4s.jpg?v=1"
    },
    {
        "title": "Talio Fukushu Daiko no Futari",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dWp5e_4s.jpg?v=1"
    },
    {
        "title": "Melting Me Softly",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QNqYgs.jpg?v=1"
    },
    {
        "title": "Pleasantly Surprised",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eYKPns.jpg?v=1"
    },
    {
        "title": "The Legend of the Condor Heroes",
        "year": "2003",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Md8bMs.jpg?v=1"
    },
    {
        "title": "Do Do Sol Sol La La Sol",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/del50_4s.jpg?v=1"
    },
    {
        "title": "Who Are You",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/abW1es.jpg?v=1"
    },
    {
        "title": "By Stealth Like You",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Wlqr5_4s.jpg?v=1"
    },
    {
        "title": "The Monkey King: Quest for the Sutra",
        "year": "2002",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9vkBGs.jpg?v=1"
    },
    {
        "title": "Bravo, My Life",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jdeBJ_4s.jpg?v=1"
    },
    {
        "title": "Detention",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pro3r_4s.jpg?v=1"
    },
    {
        "title": "Bad Guys: City of Evil",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/631jKs.jpg?v=1"
    },
    {
        "title": "Cruel Romance",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/mOqD0s.jpg?v=1"
    },
    {
        "title": "Okane no Kireme ga Koi no Hajimari",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kq4Yj_4s.jpg?v=1"
    },
    {
        "title": "Fighter of the Destiny",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/l7ZEJs.jpg?v=1"
    },
    {
        "title": "Old Rookie",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eBrOq_4s.jpg?v=1"
    },
    {
        "title": "Summer Night",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wdQ5e_4s.jpg?v=1"
    },
    {
        "title": "Unexpected",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0Ojr7s.jpg?v=1"
    },
    {
        "title": "Higanbana: Keishicho Sosa Nana ka",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xLZxj_4s.jpg?v=1"
    },
    {
        "title": "Mokomi: Kanojo Chotto Hendakedo",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eKnWQ_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Kabuto",
        "year": "2006",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/p63We_4s.jpg?v=1"
    },
    {
        "title": "Dead Friend Forever - DFF",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Xdey3x_4s.jpg?v=1"
    },
    {
        "title": "The Ghost Bride",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BbKN1s.jpg?v=1"
    },
    {
        "title": "Iari: Mienai Kao",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jRA8d_4s.jpg?v=1"
    },
    {
        "title": "Lives of Omission",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MjqOBs.jpg?v=1"
    },
    {
        "title": "Loving, Never Forgetting",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QJkD7s.jpg?v=1"
    },
    {
        "title": "High School Big Bang",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Rkx1Ys.jpg?v=1"
    },
    {
        "title": "Doctor Detective",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rmv27s.jpg?v=1"
    },
    {
        "title": "Love Destiny Season 2",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kAXD6d_4s.jpg?v=1"
    },
    {
        "title": "GAP",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kQ4Pd_4s.jpg?v=1"
    },
    {
        "title": "Poo Bao Indy Yayee Inter",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/e6qo8_4s.jpg?v=1"
    },
    {
        "title": "Pasta",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/60vxXs.jpg?v=1"
    },
    {
        "title": "Royal Doctor",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pojqD_4s.jpg?v=1"
    },
    {
        "title": "The Wonder Woman",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jVXQBs.jpg?v=1"
    },
    {
        "title": "The Unholy Alliance",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/YoEods.jpg?v=1"
    },
    {
        "title": "Legal Mavericks 2020",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/j3RPr_4s.jpg?v=1"
    },
    {
        "title": "Ten Brothers",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/GWbLXs.jpg?v=1"
    },
    {
        "title": "Cutie Pie",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XqXNw_4s.jpg?v=1"
    },
    {
        "title": "23.5",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kAVdqm_4s.jpg?v=1"
    },
    {
        "title": "Destined to Love You",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/3v17Vs.jpg?v=1"
    },
    {
        "title": "Dame na Watashi ni Koishite Kudasai",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/egbBps.jpg?v=1"
    },
    {
        "title": "So Funny Youth",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/v0K4p_4s.jpg?v=1"
    },
    {
        "title": "Pale Moon",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E55KAm_4s.jpg?v=1"
    },
    {
        "title": "Love Rain",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ae6vYs.jpg?v=1"
    },
    {
        "title": "Legal High",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ww3NJs.jpg?v=1"
    },
    {
        "title": "Real:Time:Love Season 4",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vxv2D_4s.jpg?v=1"
    },
    {
        "title": "Warden of the Sky",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z4q8qs.jpg?v=1"
    },
    {
        "title": "The Bionic Life",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0wPJe_4s.jpg?v=1"
    },
    {
        "title": "On Children",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Jx2bos.jpg?v=1"
    },
    {
        "title": "Dal Ja's Spring",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E2LWWs.jpg?v=1"
    },
    {
        "title": "Iron Ladies",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0pPl4s.jpg?v=1"
    },
    {
        "title": "Sunny Again Tomorrow",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/nd2q2s.jpg?v=1"
    },
    {
        "title": "Yamada Taro Monogatari",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/lyDyNs.jpg?v=1"
    },
    {
        "title": "Chaser Game W2: Utsukushiki Tennyotachi",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQ3bR8_4s.jpg?v=1"
    },
    {
        "title": "Love of Replica",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x4P1Aw_4s.jpg?v=1"
    },
    {
        "title": "Chef wa Meitantei",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dN57g_4s.jpg?v=1"
    },
    {
        "title": "High Class",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QAVe7_4s.jpg?v=1"
    },
    {
        "title": "Love Me Like I Do",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5djbW_4s.jpg?v=1"
    },
    {
        "title": "The Secret of Love",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XJq5X_4s.jpg?v=1"
    },
    {
        "title": "Mirror of the Witch",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Brdq5s.jpg?v=1"
    },
    {
        "title": "Yoo Na's Street",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/KpZADs.jpg?v=1"
    },
    {
        "title": "Shojiki Fudosan",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Q4rdQ_4s.jpg?v=1"
    },
    {
        "title": "Down With Love",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/607NKs.jpg?v=1"
    },
    {
        "title": "Master, Wait a Moment",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0VXdr_4s.jpg?v=1"
    },
    {
        "title": "Hello Debate Opponent Season 2",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/r7Rog_4s.jpg?v=1"
    },
    {
        "title": "Endless Love",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jDWgr_4s.jpg?v=1"
    },
    {
        "title": "Virgin Road",
        "year": "1997",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/81wBAs.jpg?v=1"
    },
    {
        "title": "The Best Story",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2jxD7_4s.jpg?v=1"
    },
    {
        "title": "Caught in the Heartbeat",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/w0KBps.jpg?v=1"
    },
    {
        "title": "Dr. Frost",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/73Lpns.jpg?v=1"
    },
    {
        "title": "Kinkyu Torishirabeshitsu",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z04YOs.jpg?v=1"
    },
    {
        "title": "Fuben na Benriya",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Av788s.jpg?v=1"
    },
    {
        "title": "Thara Himalai",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5WEOs.jpg?v=1"
    },
    {
        "title": "Who Is the Murderer",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4QJ5J_4s.jpg?v=1"
    },
    {
        "title": "Only Side by Side with You",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/oddyNs.jpg?v=1"
    },
    {
        "title": "Monthly Magazine Home",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QkVy4_4s.jpg?v=1"
    },
    {
        "title": "All That We Loved",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vXo3eX_4s.jpg?v=1"
    },
    {
        "title": "Here Is My Exclusive Indulge",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BKwXz_4s.jpg?v=1"
    },
    {
        "title": "The Heaven Sword and Dragon Saber",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MABREs.jpg?v=1"
    },
    {
        "title": "Hope - Kitai Zero no Shinnyu Shain",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jmAL8_4s.jpg?v=1"
    },
    {
        "title": "Girl2K",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wkBYN_4s.jpg?v=1"
    },
    {
        "title": "Legend of Yunze",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/r6WWg_4s.jpg?v=1"
    },
    {
        "title": "Heart Stain",
        "year": "2025",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JBbAkm_4s.jpg?v=1"
    },
    {
        "title": "Evasive Inquiry Agency",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/60Q2ds.jpg?v=1"
    },
    {
        "title": "The Best Friend",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/p6lyQ_4s.jpg?v=1"
    },
    {
        "title": "That Fool",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/M36eGs.jpg?v=1"
    },
    {
        "title": "Duang Jai Nai Montra",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Qg61W_4s.jpg?v=1"
    },
    {
        "title": "Protect the Boss",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RBk0gs.jpg?v=1"
    },
    {
        "title": "Still Loving You",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/p7AKes.jpg?v=1"
    },
    {
        "title": "Your Highness, the Class Monitor",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qOkzKs.jpg?v=1"
    },
    {
        "title": "D.I.E.",
        "year": "2008",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x8A3z_4s.jpg?v=1"
    },
    {
        "title": "My Annoying Roommate",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2wNYQV_4s.jpg?v=1"
    },
    {
        "title": "Bad Papa",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EJm55s.jpg?v=1"
    },
    {
        "title": "Fantastic Doctors",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2wxVXR_4s.jpg?v=1"
    },
    {
        "title": "Ie Uru Onna no Gyakushu",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kRq2g_4s.jpg?v=1"
    },
    {
        "title": "Fall in Love",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1eJ45_4s.jpg?v=1"
    },
    {
        "title": "Kazokugari",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1wJA5s.jpg?v=1"
    },
    {
        "title": "Secret Seven",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kXrrms.jpg?v=1"
    },
    {
        "title": "The Promise of Chang\u2019an",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eW2RK_4s.jpg?v=1"
    },
    {
        "title": "Pop Out Boy!",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2zNr7_4s.jpg?v=1"
    },
    {
        "title": "Shinigami-kun",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RYkqzs.jpg?v=1"
    },
    {
        "title": "Ru Hua Ru Tu",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ek4Ee_4s.jpg?v=1"
    },
    {
        "title": "Married",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/g0zEVo_4s.jpg?v=1"
    },
    {
        "title": "Resurrection",
        "year": "2005",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ObReks.jpg?v=1"
    },
    {
        "title": "Mysterious Incredible Terminator",
        "year": "2008",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rVWyEs.jpg?v=1"
    },
    {
        "title": "Boku no Itoshii Youkai Girlfriend",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2w7KWW_4s.jpg?v=1"
    },
    {
        "title": "Red Eyes: Kanshi Sousa-han",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wYy1b_4s.jpg?v=1"
    },
    {
        "title": "Mission Fan-Possible",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qYWnOQ_4s.jpg?v=1"
    },
    {
        "title": "Far Away Love",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jydPvs.jpg?v=1"
    },
    {
        "title": "Unstoppable Youth",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/e33wKs.jpg?v=1"
    },
    {
        "title": "A Shoulder to Cry On",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jkqQB_4s.jpg?v=1"
    },
    {
        "title": "Queen of Ambition",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MAmoXs.jpg?v=1"
    },
    {
        "title": "Confess Your Love",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2wmARw_4s.jpg?v=1"
    },
    {
        "title": "Dance of the Phoenix",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QleeY_4s.jpg?v=1"
    },
    {
        "title": "Go Princess, Go!",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pBjW8s.jpg?v=1"
    },
    {
        "title": "Aku no Hado",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jAQnds.jpg?v=1"
    },
    {
        "title": "Eight Hours",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0Z64O_4s.jpg?v=1"
    },
    {
        "title": "He\u2019s into Her Season 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/djrOb_4s.jpg?v=1"
    },
    {
        "title": "My Classmate from Far Far Away",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rm1qZs.jpg?v=1"
    },
    {
        "title": "I Need Romance",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jol5d_4s.jpg?v=1"
    },
    {
        "title": "Gintama: Mitsuba hen",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7gPxes.jpg?v=1"
    },
    {
        "title": "Ano Toki Kiss Shite Okeba",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/km4Jg_4s.jpg?v=1"
    },
    {
        "title": "The Fierce Wife",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1wXKKs.jpg?v=1"
    },
    {
        "title": "Xuan-Yuan Sword: Scar of Sky",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/GLm4ys.jpg?v=1"
    },
    {
        "title": "No Time for Love",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/egAdns.jpg?v=1"
    },
    {
        "title": "Delicacies Destiny",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wy7A1_4s.jpg?v=1"
    },
    {
        "title": "The Best Moment to Quit Your Job",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/AYxZ4s.jpg?v=1"
    },
    {
        "title": "Eternal Love Rain",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xydWj_4s.jpg?v=1"
    },
    {
        "title": "Scandal Senmon Bengoshi QUEEN",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/72D1Rs.jpg?v=1"
    },
    {
        "title": "Yasha",
        "year": "2000",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/94XY9s.jpg?v=1"
    },
    {
        "title": "The Dance of the Storm",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0JOW7_4s.jpg?v=1"
    },
    {
        "title": "Chase the Truth",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z80DE1_4s.jpg?v=1"
    },
    {
        "title": "Juuyou Sankounin Tantei",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/yN8wks.jpg?v=1"
    },
    {
        "title": "Evil Minds Season 2",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JkvOos.jpg?v=1"
    },
    {
        "title": "Love in Twilight",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/v78jX_4s.jpg?v=1"
    },
    {
        "title": "Drinking Solo",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/el6Rns.jpg?v=1"
    },
    {
        "title": "Have a Crush on You",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kAEZyO_4s.jpg?v=1"
    },
    {
        "title": "House of Lies",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/p5xRQ_4s.jpg?v=1"
    },
    {
        "title": "The Prince Who Turns into a Frog",
        "year": "2005",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1dvn7s.jpg?v=1"
    },
    {
        "title": "My Bargain Queen",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XdO5qZ_4s.jpg?v=1"
    },
    {
        "title": "Is Xian Zun Whitewashed Today?",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4Oy1Y_4s.jpg?v=1"
    },
    {
        "title": "Densetsu no Head Sho",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5QR4O_4s.jpg?v=1"
    },
    {
        "title": "Piece",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MKNQqs.jpg?v=1"
    },
    {
        "title": "Revive",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/41WPKs.jpg?v=1"
    },
    {
        "title": "My Dear Destiny",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6LlmOs.jpg?v=1"
    },
    {
        "title": "Kimi no Koto Dake Mite Itai",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kp508_4s.jpg?v=1"
    },
    {
        "title": "My Secret Romance",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XZngps.jpg?v=1"
    },
    {
        "title": "I Cannot Hug You Season 2",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0OB0Os.jpg?v=1"
    },
    {
        "title": "Sm:)e",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6yZ1Xs.jpg?v=1"
    },
    {
        "title": "Buang Banjathorn",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/nvl3Ns.jpg?v=1"
    },
    {
        "title": "In Youth",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z0xxjs.jpg?v=1"
    },
    {
        "title": "Suiyobi 22-ji dake no Kare",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wQp1g_4s.jpg?v=1"
    },
    {
        "title": "Love by Chance",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kkxobs.jpg?v=1"
    },
    {
        "title": "The House Arrest of Us",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/q3R62_4s.jpg?v=1"
    },
    {
        "title": "Granting You a Dreamlike Life",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RPoKos.jpg?v=1"
    },
    {
        "title": "Pumpkin Time",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/15RQz_4s.jpg?v=1"
    },
    {
        "title": "The Judgement",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Y0rOds.jpg?v=1"
    },
    {
        "title": "Rang Mai Hua Jai Derm",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bj5yzs.jpg?v=1"
    },
    {
        "title": "Love Is Panacea",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bd01yl_4s.jpg?v=1"
    },
    {
        "title": "Sweet Games",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pd7oQn_4s.jpg?v=1"
    },
    {
        "title": "Moorim School",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0Kwqrs.jpg?v=1"
    },
    {
        "title": "Consummation",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/w7VJn_4s.jpg?v=1"
    },
    {
        "title": "Invincible Stepmother",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z8032j_4s.jpg?v=1"
    },
    {
        "title": "War and Beauty",
        "year": "2004",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9pl8rs.jpg?v=1"
    },
    {
        "title": "Wedding Impossible",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJlQ5N_4s.jpg?v=1"
    },
    {
        "title": "Lady & Liar",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/p2DQBs.jpg?v=1"
    },
    {
        "title": "Wakatte Ite mo: The Shapes of Love",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PxreYy_4s.jpg?v=1"
    },
    {
        "title": "Umi no Ue no Shinryoujo",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dvE6Ws.jpg?v=1"
    },
    {
        "title": "Why You\u2026 Y Me?",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/edxBQ_4s.jpg?v=1"
    },
    {
        "title": "Uchuu Sentai Kyuranger",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/yWeZwB_4s.jpg?v=1"
    },
    {
        "title": "Triangle",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4eN86s.jpg?v=1"
    },
    {
        "title": "HIStory4: Close to You",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XN8Rp_4s.jpg?v=1"
    },
    {
        "title": "Men with Sword Season 2",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xkzyNs.jpg?v=1"
    },
    {
        "title": "Good and Evil",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/j68Qb_4s.jpg?v=1"
    },
    {
        "title": "See You Again",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/17mER_4s.jpg?v=1"
    },
    {
        "title": "Ugly Beauty",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1jBY5_4s.jpg?v=1"
    },
    {
        "title": "A Camellia Romance",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5Qe10_4s.jpg?v=1"
    },
    {
        "title": "Lady Revenger Returns from the Fire",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJ28db_4s.jpg?v=1"
    },
    {
        "title": "The Promise",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XAyeJs.jpg?v=1"
    },
    {
        "title": "Fermentation Family",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/abOnYs.jpg?v=1"
    },
    {
        "title": "Last One Standing",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qowoQs.jpg?v=1"
    },
    {
        "title": "I Give My First Love to You",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kmBqw_4s.jpg?v=1"
    },
    {
        "title": "Keizoku",
        "year": "1999",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/k1XvO_4s.jpg?v=1"
    },
    {
        "title": "Legend of Lin Ye",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E5dkkQ_4s.jpg?v=1"
    },
    {
        "title": "Lupin no Musume Season 2",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/08xKN_4s.jpg?v=1"
    },
    {
        "title": "Panthakan Rak",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vJ5q2s.jpg?v=1"
    },
    {
        "title": "Little Girl K",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/mOxobs.jpg?v=1"
    },
    {
        "title": "Ms. Temper & Nam Jung Gi",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xjdQrs.jpg?v=1"
    },
    {
        "title": "Mimicus",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WxdkO_4s.jpg?v=1"
    },
    {
        "title": "Love Is Written in the Stars",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pd28xD_4s.jpg?v=1"
    },
    {
        "title": "Please Love Me",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/68J0ps.jpg?v=1"
    },
    {
        "title": "Nothing But You",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/W4ZQp_4s.jpg?v=1"
    },
    {
        "title": "And the Winner Is Love",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ZoJvOs.jpg?v=1"
    },
    {
        "title": "Proposal Daisakusen",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/zBK5YW_4s.jpg?v=1"
    },
    {
        "title": "South Wind Knows",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/60yZzd_4s.jpg?v=1"
    },
    {
        "title": "Triumph in the Skies",
        "year": "2003",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rN5wR7_4s.jpg?v=1"
    },
    {
        "title": "Kemono ni Narenai Watashitachi",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WKllW_4s.jpg?v=1"
    },
    {
        "title": "Raeng Pradtanaha",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/oQW6Ns.jpg?v=1"
    },
    {
        "title": "Miss Chun Is a Litigator",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RBBNBo_4s.jpg?v=1"
    },
    {
        "title": "Let Me Introduce Her",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/DXrxzs.jpg?v=1"
    },
    {
        "title": "Ando Lloyd - A.I. Knows Love ?",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/W4N05_4s.jpg?v=1"
    },
    {
        "title": "Long Time No See",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RP8jEs.jpg?v=1"
    },
    {
        "title": "Assistant of Superstar",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qZmdB_4s.jpg?v=1"
    },
    {
        "title": "Voice",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/j8ydds.jpg?v=1"
    },
    {
        "title": "Kono Hatsukoi wa Fiction desu",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/W4L5R_4s.jpg?v=1"
    },
    {
        "title": "My Woofy Poofy Love",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PWLk0s.jpg?v=1"
    },
    {
        "title": "My Romantic Some Recipe",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6gZRjs.jpg?v=1"
    },
    {
        "title": "W Series: The Way You Shine",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0OrAd_4s.jpg?v=1"
    },
    {
        "title": "Cupid's Kitchen",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rLBmj_4s.jpg?v=1"
    },
    {
        "title": "Love, Now",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WPJm3s.jpg?v=1"
    },
    {
        "title": "The Spring Day of My Life",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/zB5DOs.jpg?v=1"
    },
    {
        "title": "Our Memories",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rNxzE2_4s.jpg?v=1"
    },
    {
        "title": "We Go Fast on Trust",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pdWgWn_4s.jpg?v=1"
    },
    {
        "title": "Roy Leh Marnya",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dLPkd_4s.jpg?v=1"
    },
    {
        "title": "Dear Mr. Heavenly Fox",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJWp8b_4s.jpg?v=1"
    },
    {
        "title": "Hitochigai kara Hajimaru Koi mo Aru",
        "year": "2024",
        "rating": "7.7",
        "image": "https://i.mydramalist.com/E5NEZ7_4s.jpg?v=1"
    },
    {
        "title": "Tokyo Dokushin Danshi",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BPwpV_4s.jpg?v=1"
    },
    {
        "title": "Rise from the Ashes",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pdOYL8_4s.jpg?v=1"
    },
    {
        "title": "My Ambulance",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rbNdNs.jpg?v=1"
    },
    {
        "title": "Love Generation",
        "year": "1997",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RKZvR_4s.jpg?v=1"
    },
    {
        "title": "In Between",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/3o27dd_4s.jpg?v=1"
    },
    {
        "title": "Dangerous Romance",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0zg4A_4s.jpg?v=1"
    },
    {
        "title": "Zettai Reido Season 2",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qqdDKs.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kamathep Ork Suek",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7qWdes.jpg?v=1"
    },
    {
        "title": "Informa",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rdR1y_4s.jpg?v=1"
    },
    {
        "title": "Golden Bowl",
        "year": "2002",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QQweA_4s.jpg?v=1"
    },
    {
        "title": "Saionji-san wa Kaji wo Shinai",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WP7vVP_4s.jpg?v=1"
    },
    {
        "title": "See You Again",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2eLWR_4s.jpg?v=1"
    },
    {
        "title": "Hanging On",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jxeZv_4s.jpg?v=1"
    },
    {
        "title": "V-Focus",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Kxq0Xs.jpg?v=1"
    },
    {
        "title": "Lost in the Kunlun Mountains",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E6pRl_4s.jpg?v=1"
    },
    {
        "title": "I Have Not Done My Best Yet",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2Vxqw_4s.jpg?v=1"
    },
    {
        "title": "KO One Re-Member",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7n6Zys.jpg?v=1"
    },
    {
        "title": "Diary of Tootsies Season 2",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BjKJ1s.jpg?v=1"
    },
    {
        "title": "Bossy Husband Who Loved Me",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jkKed_4s.jpg?v=1"
    },
    {
        "title": "Somewhere Only We Know",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XeAzXs.jpg?v=1"
    },
    {
        "title": "Father, I\u2019ll Take Care of You",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dzQ3es.jpg?v=1"
    },
    {
        "title": "Last Minute Romance",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/NvVXns.jpg?v=1"
    },
    {
        "title": "Minami-kun no Koibito - My Little Lover",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/yoEy6s.jpg?v=1"
    },
    {
        "title": "Love in Time",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/moW5Js.jpg?v=1"
    },
    {
        "title": "Okashi no Ie",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/48Nqr_4s.jpg?v=1"
    },
    {
        "title": "Torranee Ni Nee Krai Krong",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bjnl1s.jpg?v=1"
    },
    {
        "title": "You Touched My Heart",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WYBVP_4s.jpg?v=1"
    },
    {
        "title": "Martial Universe",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PWPo0s.jpg?v=1"
    },
    {
        "title": "Forget You Remember Love",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/27QJEs.jpg?v=1"
    },
    {
        "title": "Doubutsu Sentai Zyuohger",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/5vEWoL_4s.jpg?v=1"
    },
    {
        "title": "Twelve Legends",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dkVOW_4s.jpg?v=1"
    },
    {
        "title": "The Great Craftsman",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/E8e87s.jpg?v=1"
    },
    {
        "title": "Jia Jia's Lovely Journey",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/epZ7Q_4s.jpg?v=1"
    },
    {
        "title": "My Engineer",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ZvOWYs.jpg?v=1"
    },
    {
        "title": "Stand by Me",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eYlwnK_4s.jpg?v=1"
    },
    {
        "title": "Snow Eagle Lord",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eYwoeq_4s.jpg?v=1"
    },
    {
        "title": "Joshi Kousei no Mudazukai",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2gRLWs.jpg?v=1"
    },
    {
        "title": "Kimi to Sekai ga Owaru Hi ni",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XQyDZ_4s.jpg?v=1"
    },
    {
        "title": "Waking Love Up",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MBBV5s.jpg?v=1"
    },
    {
        "title": "My Lucky Star",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rNRzdp_4s.jpg?v=1"
    },
    {
        "title": "Luead Mungkorn: Suea",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/V4bXms.jpg?v=1"
    },
    {
        "title": "Biblia Koshodou no Jiken Techou",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQ3lws.jpg?v=1"
    },
    {
        "title": "Swordsman",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/odBVxs.jpg?v=1"
    },
    {
        "title": "Real:Time:Love Season 3",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1ljod_4s.jpg?v=1"
    },
    {
        "title": "Game Maya",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/lO7gxs.jpg?v=1"
    },
    {
        "title": "Hunting",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eENDEs.jpg?v=1"
    },
    {
        "title": "A Life",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2V3W2_4s.jpg?v=1"
    },
    {
        "title": "Top Star Yoo Baek",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RW2lrs.jpg?v=1"
    },
    {
        "title": "Wild Heroes",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Q0q7Ys.jpg?v=1"
    },
    {
        "title": "Heard It Through the Grapevine",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/14br7s.jpg?v=1"
    },
    {
        "title": "Obstetrics and Gynecology Doctors",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9yD4as.jpg?v=1"
    },
    {
        "title": "More than Words",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/06JZ6_4s.jpg?v=1"
    },
    {
        "title": "Young Sherlock",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJzxZn_4s.jpg?v=1"
    },
    {
        "title": "Zenkai Girl",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rb6Bjs.jpg?v=1"
    },
    {
        "title": "Mon Jun Tra",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/73A0Rs.jpg?v=1"
    },
    {
        "title": "Branding in Seongsu",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qYbdp2_4s.jpg?v=1"
    },
    {
        "title": "Prosecutor Princess",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9vbp9s.jpg?v=1"
    },
    {
        "title": "A Pledge to God",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Xee1ws.jpg?v=1"
    },
    {
        "title": "Holyland",
        "year": "2005",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6k8oX_4s.jpg?v=1"
    },
    {
        "title": "Switch Girl!! Season 2",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BdW76s.jpg?v=1"
    },
    {
        "title": "Soundtrack #2",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wpyqO_4s.jpg?v=1"
    },
    {
        "title": "Nang Rai Tee Rak",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2QZ7ws.jpg?v=1"
    },
    {
        "title": "Fantastic",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ovpmvs.jpg?v=1"
    },
    {
        "title": "Invisible",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jdNgO_4s.jpg?v=1"
    },
    {
        "title": "Shinhannin Flag 2",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jmEOB_4s.jpg?v=1"
    },
    {
        "title": "Obsessed with Heart",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/O5e4gs.jpg?v=1"
    },
    {
        "title": "Hidarime Tantei EYE",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ymxZds.jpg?v=1"
    },
    {
        "title": "Ghetto Justice",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQZ3Js.jpg?v=1"
    },
    {
        "title": "All About Eve",
        "year": "2000",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qYVY5s.jpg?v=1"
    },
    {
        "title": "Kanakana",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EqYyO_4s.jpg?v=1"
    },
    {
        "title": "Rebirth of Shopping Addict",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/64Y1ps.jpg?v=1"
    },
    {
        "title": "Unfair",
        "year": "2006",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7QRRBs.jpg?v=1"
    },
    {
        "title": "Takara-kun to Amagi-kun",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/B6wAA_4s.jpg?v=1"
    },
    {
        "title": "So Wayree",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dxgW5_4s.jpg?v=1"
    },
    {
        "title": "Heartstrings",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9YYwds.jpg?v=1"
    },
    {
        "title": "Summer's Desire",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2wVxEs.jpg?v=1"
    },
    {
        "title": "Kingyo Club",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eYyLWs.jpg?v=1"
    },
    {
        "title": "Oh! My Tsundere! Koi wa Bessatsu de",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2j2OV_4s.jpg?v=1"
    },
    {
        "title": "11 Nin mo Iru!",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/9ymzBs.jpg?v=1"
    },
    {
        "title": "Egg and Stone",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RBb4j6_4s.jpg?v=1"
    },
    {
        "title": "Love & \u03c0",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/8pgVWs.jpg?v=1"
    },
    {
        "title": "My Only One",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/O5Dk3s.jpg?v=1"
    },
    {
        "title": "Fifteen Years to Wait for Migratory Birds",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vN4K8s.jpg?v=1"
    },
    {
        "title": "Lying Heart",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/LpQV3s.jpg?v=1"
    },
    {
        "title": "The Heirs",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qWb15s.jpg?v=1"
    },
    {
        "title": "Saki",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/8xX52s.jpg?v=1"
    },
    {
        "title": "Deep in the White Clouds There Is My Dear",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BdgrJR_4s.jpg?v=1"
    },
    {
        "title": "To the Beautiful You",
        "year": "2012",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rkm5ps.jpg?v=1"
    },
    {
        "title": "Khun Chai Ratchanon",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QAwpA_4s.jpg?v=1"
    },
    {
        "title": "IN-SEOUL",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eoNQKs.jpg?v=1"
    },
    {
        "title": "Channel wa Sonomama!",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2xlRRs.jpg?v=1"
    },
    {
        "title": "Q Series: Love of Sandstorm",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2NLkPs.jpg?v=1"
    },
    {
        "title": "Pandora no Kajitsu: Kagaku Hanzai Sosa File",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Rm20R_4s.jpg?v=1"
    },
    {
        "title": "A Thousand Days' Promise",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/NvD1ns.jpg?v=1"
    },
    {
        "title": "Friend Zone 2: Dangerous Area",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xnzyr_4s.jpg?v=1"
    },
    {
        "title": "The Law Protector",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z4QpWs.jpg?v=1"
    },
    {
        "title": "Sisters-in-Law",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z40z7s.jpg?v=1"
    },
    {
        "title": "Kiken na Venus",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4NqZ1_4s.jpg?v=1"
    },
    {
        "title": "The Lion's Secret",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jL7Jd_4s.jpg?v=1"
    },
    {
        "title": "My Lady General",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WPJ723_4s.jpg?v=1"
    },
    {
        "title": "18/40: Futari Nara Yume mo Koi mo",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bdr1z6_4s.jpg?v=1"
    },
    {
        "title": "Dear Mr Hermitage",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/x4kJ6w_4s.jpg?v=1"
    },
    {
        "title": "Love in Time",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vgdKX_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Kiva",
        "year": "2008",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ERvrl_4s.jpg?v=1"
    },
    {
        "title": "Innocent Days",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wyZWp_4s.jpg?v=1"
    },
    {
        "title": "Hi! School - Love On",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/g0qEWs.jpg?v=1"
    },
    {
        "title": "Beyond the Clouds",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vXqAqs.jpg?v=1"
    },
    {
        "title": "Underwear",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dmgrz_4s.jpg?v=1"
    },
    {
        "title": "House of Spirits",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bp8y1s.jpg?v=1"
    },
    {
        "title": "The Virtuous Queen of Han",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/3ovQDs.jpg?v=1"
    },
    {
        "title": "My Fairy Doctor",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Q6nj2_4s.jpg?v=1"
    },
    {
        "title": "The Ingenuity of the House Husband",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EL0qQ_4s.jpg?v=1"
    },
    {
        "title": "Tientsin Mystic 2",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/xwL4N_4s.jpg?v=1"
    },
    {
        "title": "Love Song for Illusion",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/eYnJPQ_4s.jpg?v=1"
    },
    {
        "title": "Got a Crush on You",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJWVv1_4s.jpg?v=1"
    },
    {
        "title": "Interlaced Scenes",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kAWY0g_4s.jpg?v=1"
    },
    {
        "title": "Payu Sai",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XRxVw_4s.jpg?v=1"
    },
    {
        "title": "Everyone Wants To Meet You",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/R36Qxs.jpg?v=1"
    },
    {
        "title": "My Queen",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/pbnJD_4s.jpg?v=1"
    },
    {
        "title": "Office Girls",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/MKpvqs.jpg?v=1"
    },
    {
        "title": "Dear Prince",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/mkNbms.jpg?v=1"
    },
    {
        "title": "Fabulous Boys",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4egXws.jpg?v=1"
    },
    {
        "title": "S: Saigo no Keikan",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/81kYbs.jpg?v=1"
    },
    {
        "title": "Precise Shot",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/XNv6p_4s.jpg?v=1"
    },
    {
        "title": "Chiisana Kyojin",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Zx0EO_4s.jpg?v=1"
    },
    {
        "title": "Eccentric! Chef Moon",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dAwB5s.jpg?v=1"
    },
    {
        "title": "Till the World Ends: Uncut",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJ0bQY_4s.jpg?v=1"
    },
    {
        "title": "Mikaiketsu no Onna: Keishichou Bunsho Sousakan",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JxNEls.jpg?v=1"
    },
    {
        "title": "Promise in the Summer",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wJJ648_4s.jpg?v=1"
    },
    {
        "title": "Jizoku Kanona Koi Desuka: Chichi to Musume no Kekkon Koushinkyoku",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wyZVb_4s.jpg?v=1"
    },
    {
        "title": "Roy Ruk Hak Liam Tawan",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jqomBs.jpg?v=1"
    },
    {
        "title": "My Bossy Wife",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/k5jl8_4s.jpg?v=1"
    },
    {
        "title": "A Sleeping Forest",
        "year": "1998",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/kk2jds.jpg?v=1"
    },
    {
        "title": "My Neighbour Can't Sleep",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WN18ps.jpg?v=1"
    },
    {
        "title": "Oops! The King Is in Love",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6zEQK_4s.jpg?v=1"
    },
    {
        "title": "The Love in Your Eyes",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EKW0b_4s.jpg?v=1"
    },
    {
        "title": "My Name Is Busaba",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1lEgd_4s.jpg?v=1"
    },
    {
        "title": "Views of Love: Grey Rainbow",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/K58zXs.jpg?v=1"
    },
    {
        "title": "Hanasaki Mai ga Damattenai",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X77Lq_4s.jpg?v=1"
    },
    {
        "title": "Revenge from the Past",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0qPN7_4s.jpg?v=1"
    },
    {
        "title": "Minato Shouji Coin Laundry",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/22d1O_4s.jpg?v=1"
    },
    {
        "title": "Seishun Cinderella",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/4Xwg6_4s.jpg?v=1"
    },
    {
        "title": "Under the Moonlight",
        "year": "2025",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/zBDPBP_4s.jpg?v=1"
    },
    {
        "title": "Sassy Beauty",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rD2PN_4s.jpg?v=1"
    },
    {
        "title": "Ninpuu Sentai Hurricaneger",
        "year": "2002",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wynw4_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Zu",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qAynKs.jpg?v=1"
    },
    {
        "title": "Dawn Amidst Hidden Clouds",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/73ZnrN_4s.jpg?v=1"
    },
    {
        "title": "Palace Shadows: Between Two Princes",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RB3pex_4s.jpg?v=1"
    },
    {
        "title": "What's Up?",
        "year": "2011",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JBRbws.jpg?v=1"
    },
    {
        "title": "Debut",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EDJ5zs.jpg?v=1"
    },
    {
        "title": "Love Through a Millennium",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/K5Abqs.jpg?v=1"
    },
    {
        "title": "GoGo Sentai Boukenger",
        "year": "2006",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ABwWY3_4s.jpg?v=1"
    },
    {
        "title": "Deja Vu",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/1ejez_4s.jpg?v=1"
    },
    {
        "title": "Delete",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z85yeY_4s.jpg?v=1"
    },
    {
        "title": "Believe in Love",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Xp3ed_4s.jpg?v=1"
    },
    {
        "title": "Love In Han Yuan",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X8j3ns.jpg?v=1"
    },
    {
        "title": "The Crack of Dawn",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/QOYz2_4s.jpg?v=1"
    },
    {
        "title": "Bang Rak Soi 9/1",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vQVk8s.jpg?v=1"
    },
    {
        "title": "Temptation of Wife",
        "year": "2008",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X6m8J_4s.jpg?v=1"
    },
    {
        "title": "Unlucky Ploy",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jb6NJ_4s.jpg?v=1"
    },
    {
        "title": "Neko",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/qPYVz_4s.jpg?v=1"
    },
    {
        "title": "Big Bet",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/vk3NZ_4s.jpg?v=1"
    },
    {
        "title": "D.I.E. Again",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/akAWks.jpg?v=1"
    },
    {
        "title": "Midsummer Is Full of Love",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/EgNj7_4s.jpg?v=1"
    },
    {
        "title": "Shiro demo Kuro demonai Sekai de, Panda wa Warau",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/rXRwD_4s.jpg?v=1"
    },
    {
        "title": "Ab Ruk Online",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7n22ys.jpg?v=1"
    },
    {
        "title": "Nakee",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BNxeb_4s.jpg?v=1"
    },
    {
        "title": "Nightmare Teacher",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6QJ4Ps.jpg?v=1"
    },
    {
        "title": "Beni Sasu Life",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0wxqkO_4s.jpg?v=1"
    },
    {
        "title": "Love & Wish",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/v4Kep_4s.jpg?v=1"
    },
    {
        "title": "Miss Pilot",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/oQOdxs.jpg?v=1"
    },
    {
        "title": "Majo no Jouken",
        "year": "1999",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/6QAods.jpg?v=1"
    },
    {
        "title": "Here to Heart",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Q5Pe7s.jpg?v=1"
    },
    {
        "title": "Silence",
        "year": "2006",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/aVxEGs.jpg?v=1"
    },
    {
        "title": "All In",
        "year": "2003",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WPzLms.jpg?v=1"
    },
    {
        "title": "Diver: Tokushu Sennyuhan",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wgymN_4s.jpg?v=1"
    },
    {
        "title": "Keishicho Ikimono Gakari",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/mjkw2s.jpg?v=1"
    },
    {
        "title": "Morrasoom Sawat",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/55XVes.jpg?v=1"
    },
    {
        "title": "The Little Wife of the General",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/BkJA1_4s.jpg?v=1"
    },
    {
        "title": "My Poseidon",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/g2rw1s.jpg?v=1"
    },
    {
        "title": "Daughter-in-War",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/wDBpN_4s.jpg?v=1"
    },
    {
        "title": "Miss in Kiss",
        "year": "2016",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/PbN6ws.jpg?v=1"
    },
    {
        "title": "TharnType",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0bejEs.jpg?v=1"
    },
    {
        "title": "The Exorcist's Meter",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/YoXygs.jpg?v=1"
    },
    {
        "title": "U-Prince: The Single Lawyer",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/7qR4Ds.jpg?v=1"
    },
    {
        "title": "Splendid Politics",
        "year": "2015",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/JpW0ds.jpg?v=1"
    },
    {
        "title": "Capital Scandal",
        "year": "2007",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WPnyRs.jpg?v=1"
    },
    {
        "title": "Haken no Hinkaku",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XKg5ds.jpg?v=1"
    },
    {
        "title": "All the Way to the Sun",
        "year": "2023",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/RB0wmo_4s.jpg?v=1"
    },
    {
        "title": "The Queen of Attack",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jN4P8_4s.jpg?v=1"
    },
    {
        "title": "Rak Nakara",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/zNe21s.jpg?v=1"
    },
    {
        "title": "Unicorn ni Notte",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/dgLNb_4s.jpg?v=1"
    },
    {
        "title": "Seonam Girls High School Investigators",
        "year": "2014",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/lBOpbs.jpg?v=1"
    },
    {
        "title": "Love of Summer Night",
        "year": "2020",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WAnvls.jpg?v=1"
    },
    {
        "title": "Bad Thief, Good Thief",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/X4Z0Os.jpg?v=1"
    },
    {
        "title": "Secret Moon",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qEKmQ_4s.jpg?v=1"
    },
    {
        "title": "Barrack O'Karma",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/WNqYls.jpg?v=1"
    },
    {
        "title": "Flower Boy Next Door",
        "year": "2013",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Z82l1s.jpg?v=1"
    },
    {
        "title": "Seigi no Se",
        "year": "2018",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/bKqrLs.jpg?v=1"
    },
    {
        "title": "Something in My Room",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eelvK_4s.jpg?v=1"
    },
    {
        "title": "The Legend of White Snake",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Y05OWs.jpg?v=1"
    },
    {
        "title": "Stop! Miss Hua",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1RqXy_4s.jpg?v=1"
    },
    {
        "title": "Come to Me",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/jQxxyy_4s.jpg?v=1"
    },
    {
        "title": "Ukiwa: Tomodachi Ijo, Furin Miman",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/q6YAd_4s.jpg?v=1"
    },
    {
        "title": "Kurokawa no Techo",
        "year": "2017",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/2NDZ7s.jpg?v=1"
    },
    {
        "title": "Wolf",
        "year": "2019",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d4JmKs.jpg?v=1"
    },
    {
        "title": "Master of Study",
        "year": "2010",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Ex3rQs.jpg?v=1"
    },
    {
        "title": "The Demon Master",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2x4V7s.jpg?v=1"
    },
    {
        "title": "E.U. (Emergency Unit)",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/ZK7oj_4s.jpg?v=1"
    },
    {
        "title": "Pretty Li Hui Zhen",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/VKjVQs.jpg?v=1"
    },
    {
        "title": "Liver or Die",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/KrmrJs.jpg?v=1"
    },
    {
        "title": "U-Prince: The Badass Baker",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pVAN8_4s.jpg?v=1"
    },
    {
        "title": "Discovery of Romance",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ej8ZQ_4s.jpg?v=1"
    },
    {
        "title": "Raise de wa Chanto Shimasu Season 2",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xREv0_4s.jpg?v=1"
    },
    {
        "title": "Zeni Geba",
        "year": "2009",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Y3Y1Ps.jpg?v=1"
    },
    {
        "title": "The Lost Tomb 2: Explore With the Note",
        "year": "2021",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/Bzdyz_4s.jpg?v=1"
    },
    {
        "title": "Bad Family",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAq4Os.jpg?v=1"
    },
    {
        "title": "Well-Intended Love Season 2",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EPPBWs.jpg?v=1"
    },
    {
        "title": "Our Shiny Days",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xr1eqs.jpg?v=1"
    },
    {
        "title": "Amensalism",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1gBRbs.jpg?v=1"
    },
    {
        "title": "Winter Night",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/v0QRg_4s.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kamathep Online",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E7WROs.jpg?v=1"
    },
    {
        "title": "Palace of Devotion",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pDB5V_4s.jpg?v=1"
    },
    {
        "title": "Delightful Girl, Choon Hyang",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/94ZJMs.jpg?v=1"
    },
    {
        "title": "Invert: Jozuka Hisui Toujoshu",
        "year": "2022",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/0ZpqE_4s.jpg?v=1"
    },
    {
        "title": "22 Flower Road",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j8NyBs.jpg?v=1"
    },
    {
        "title": "Good Morning Call: Our Campus Days",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/45LLYs.jpg?v=1"
    },
    {
        "title": "After Dark",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZQ10Y_4s.jpg?v=1"
    },
    {
        "title": "Ossan's Love",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/3LogWs.jpg?v=1"
    },
    {
        "title": "Thank You, Doctor",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4XR1r_4s.jpg?v=1"
    },
    {
        "title": "Somewhere Our Love Begins",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xqPrX_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Ambitious Boss",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0y0x4s.jpg?v=1"
    },
    {
        "title": "Lucky Seven",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/m02m0s.jpg?v=1"
    },
    {
        "title": "Love Song",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Y8E4os.jpg?v=1"
    },
    {
        "title": "Crime Puzzle",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v7jBp_4s.jpg?v=1"
    },
    {
        "title": "Suzuki Sensei",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ROo1r_4s.jpg?v=1"
    },
    {
        "title": "Kou Kou Kyoushi",
        "year": "1993",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9oQoOs.jpg?v=1"
    },
    {
        "title": "King Is Not Easy",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/OroQbs.jpg?v=1"
    },
    {
        "title": "Show Window: The Queen's House",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QJ7eg7_4s.jpg?v=1"
    },
    {
        "title": "Perfect Couple",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/g0KZPs.jpg?v=1"
    },
    {
        "title": "Super Daddy Yeol",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ez5pps.jpg?v=1"
    },
    {
        "title": "The Age Difference in Love Season 2",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/60ry7O_4s.jpg?v=1"
    },
    {
        "title": "Tempted",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EJJBWs.jpg?v=1"
    },
    {
        "title": "Because It's the First Time",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/7vQRLs.jpg?v=1"
    },
    {
        "title": "My Dear Loser: Monster Romance",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X4JKZs.jpg?v=1"
    },
    {
        "title": "Ex-Girlfriend Club",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/8QgjNs.jpg?v=1"
    },
    {
        "title": "Happy 300 Days",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/73BNjs.jpg?v=1"
    },
    {
        "title": "Islands",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0wN286_4s.jpg?v=1"
    },
    {
        "title": "The Queen of Attack Season 2",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qd44z_4s.jpg?v=1"
    },
    {
        "title": "Hello Harinezumi",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/yNqmRs.jpg?v=1"
    },
    {
        "title": "Zettai Reido",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WQ8qXs.jpg?v=1"
    },
    {
        "title": "In Love with Your Dimples",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2JP2P_4s.jpg?v=1"
    },
    {
        "title": "Viva Femina",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdvDrz_4s.jpg?v=1"
    },
    {
        "title": "The Tyrant",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WPWygl_4s.jpg?v=1"
    },
    {
        "title": "Young Babylon",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vXn32e_4s.jpg?v=1"
    },
    {
        "title": "Reunited Worlds",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PdR0Rs.jpg?v=1"
    },
    {
        "title": "My Wife's Double Life",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0J1PD_4s.jpg?v=1"
    },
    {
        "title": "The Fabulous",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eOqwE_4s.jpg?v=1"
    },
    {
        "title": "Ossan's Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Enrkm_4s.jpg?v=1"
    },
    {
        "title": "Live Your Life",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2WYlR_4s.jpg?v=1"
    },
    {
        "title": "Crime Family",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdB0Db_4s.jpg?v=1"
    },
    {
        "title": "Love in Sadness",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XeNmxs.jpg?v=1"
    },
    {
        "title": "Guardian of the Sea",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xk500s.jpg?v=1"
    },
    {
        "title": "Love in Flames of War",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vz5V2_4s.jpg?v=1"
    },
    {
        "title": "Sekai Ichi Muzukashii Koi",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/72prDs.jpg?v=1"
    },
    {
        "title": "The Best Partner",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j85bOs.jpg?v=1"
    },
    {
        "title": "Saved by His Tender Love",
        "year": "2024",
        "rating": "7.6",
        "image": "https://i.mydramalist.com/d0QNAA_4s.jpg?v=1"
    },
    {
        "title": "Star and Sky: Star in My Mind",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XD8Yn_4s.jpg?v=1"
    },
    {
        "title": "Breaking Dawn",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/p88bes.jpg?v=1"
    },
    {
        "title": "Hana Nochi Hare: HanaDan Next Season",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X8KQgs.jpg?v=1"
    },
    {
        "title": "My Husband Oh Jak Doo",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X8e6ns.jpg?v=1"
    },
    {
        "title": "Dare to Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/p13qB_4s.jpg?v=1"
    },
    {
        "title": "Tree of Heaven",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jQr6qb_4s.jpg?v=1"
    },
    {
        "title": "I\u2019m a Pet at Dali Temple",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/egXAps.jpg?v=1"
    },
    {
        "title": "Bishoku Tantei Akechi Goro",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RK1Pr_4s.jpg?v=1"
    },
    {
        "title": "Flowers for My Life",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/mOK50s.jpg?v=1"
    },
    {
        "title": "Gay OK Bangkok Season 2",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BpWPbs.jpg?v=1"
    },
    {
        "title": "Joshi-teki Seikatsu",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/D2wAns.jpg?v=1"
    },
    {
        "title": "Senior Secret Love: Bake Me Love",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dymDzs.jpg?v=1"
    },
    {
        "title": "Kurokouchi",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qrrkQ_4s.jpg?v=1"
    },
    {
        "title": "Hi My Sweetheart",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rVxrDs.jpg?v=1"
    },
    {
        "title": "Second Husband",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XkoZw_4s.jpg?v=1"
    },
    {
        "title": "Raak Boon",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYq0es.jpg?v=1"
    },
    {
        "title": "Yamikin Ushijima-kun",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pDv3Q_4s.jpg?v=1"
    },
    {
        "title": "Pin to Kona",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xew2Xs.jpg?v=1"
    },
    {
        "title": "So Long",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GWDxls.jpg?v=1"
    },
    {
        "title": "Follow My Dear General",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vwExW_4s.jpg?v=1"
    },
    {
        "title": "Praomook",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2AR2P_4s.jpg?v=1"
    },
    {
        "title": "Konin Todoke ni Han wo Oshita dake desu ga",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jPE6O_4s.jpg?v=1"
    },
    {
        "title": "The Blessed Girl",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ex28Q_4s.jpg?v=1"
    },
    {
        "title": "The Immortal Promise",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EEoYW_4s.jpg?v=1"
    },
    {
        "title": "Gye Baek",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9pdADs.jpg?v=1"
    },
    {
        "title": "Bunlang Dok Mai",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2dVZws.jpg?v=1"
    },
    {
        "title": "Meow, the Secret Boy",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wVqObs.jpg?v=1"
    },
    {
        "title": "Ultraman X",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Dyejzs.jpg?v=1"
    },
    {
        "title": "Koi wa Deep ni",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XRW5J_4s.jpg?v=1"
    },
    {
        "title": "Two Souls in One",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4eeo1Q_4s.jpg?v=1"
    },
    {
        "title": "Sachiiro no One Room",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ndYN2s.jpg?v=1"
    },
    {
        "title": "Rang Tawan",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W6V3O_4s.jpg?v=1"
    },
    {
        "title": "Final Cut",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PdQvws.jpg?v=1"
    },
    {
        "title": "Mint to Be",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/yEXV1s.jpg?v=1"
    },
    {
        "title": "Medical Examiner Dr. Qin: The Survivor",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dwqwgs.jpg?v=1"
    },
    {
        "title": "Time Teaches Me to Love",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6zDbW_4s.jpg?v=1"
    },
    {
        "title": "Marn Bang Jai",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j6DVJ_4s.jpg?v=1"
    },
    {
        "title": "Kularb Tud Petch",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j0BEbs.jpg?v=1"
    },
    {
        "title": "Mr. & Mrs. Chen",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rNk6v2_4s.jpg?v=1"
    },
    {
        "title": "Dakara Korosenakatta",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X7bnX_4s.jpg?v=1"
    },
    {
        "title": "To Be a Brave One",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Znmw1_4s.jpg?v=1"
    },
    {
        "title": "Ooku: The Inner Chamber",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v5mdp_4s.jpg?v=1"
    },
    {
        "title": "Red Balloon",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1o4lbs.jpg?v=1"
    },
    {
        "title": "Plot Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rvjbm_4s.jpg?v=1"
    },
    {
        "title": "Komi-san wa, Komyushou Desu",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xLJ0r_4s.jpg?v=1"
    },
    {
        "title": "The Seventh Day",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x47yNs.jpg?v=1"
    },
    {
        "title": "VIP Only",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RBWlgg_4s.jpg?v=1"
    },
    {
        "title": "Onzoshi Boys",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xmzoEs.jpg?v=1"
    },
    {
        "title": "Code Blue: Another Everyday",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/NrnVvs.jpg?v=1"
    },
    {
        "title": "Wonderful Life",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/yWQE4s.jpg?v=1"
    },
    {
        "title": "First Note of Love",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jQxB6r_4s.jpg?v=1"
    },
    {
        "title": "All About My Romance",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/8Q5BKs.jpg?v=1"
    },
    {
        "title": "To.Two",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QedgQ_4s.jpg?v=1"
    },
    {
        "title": "Forecasting Love and Weather",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/11XPQ_4s.jpg?v=1"
    },
    {
        "title": "Skip Beat!",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/zBno7s.jpg?v=1"
    },
    {
        "title": "Weaving a Tale of Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/deqpe_4s.jpg?v=1"
    },
    {
        "title": "The Four",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/7qEQjs.jpg?v=1"
    },
    {
        "title": "Ballad of Seo Dong",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/O8EyLs.jpg?v=1"
    },
    {
        "title": "Top Management",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Y3YXPs.jpg?v=1"
    },
    {
        "title": "Dung Duang Haruetai",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/B3Dm5s.jpg?v=1"
    },
    {
        "title": "Motokare no Yuigonjou",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RoLnx_4s.jpg?v=1"
    },
    {
        "title": "Risou no Musuko",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wwJrks.jpg?v=1"
    },
    {
        "title": "Pride and Prejudice",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Kp8y4s.jpg?v=1"
    },
    {
        "title": "Ultraman",
        "year": "1966",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rZ0yZ_4s.jpg?v=1"
    },
    {
        "title": "Hello There",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wrP3O_4s.jpg?v=1"
    },
    {
        "title": "You Are My Universe",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QJ2oW5_4s.jpg?v=1"
    },
    {
        "title": "Kake kara Hajimaru Sayonara no Koi",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5vgpQ_4s.jpg?v=1"
    },
    {
        "title": "My Fellow Citizens!",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XeQDds.jpg?v=1"
    },
    {
        "title": "Utahime",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xQdLrs.jpg?v=1"
    },
    {
        "title": "Akagi",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Jj0lws.jpg?v=1"
    },
    {
        "title": "I See Dead People",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RLnRo_4s.jpg?v=1"
    },
    {
        "title": "Siege in Fog",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jWL4ds.jpg?v=1"
    },
    {
        "title": "The Undateables",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/od3oOs.jpg?v=1"
    },
    {
        "title": "KO One Return",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JjrNYs.jpg?v=1"
    },
    {
        "title": "Flat",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/p0WOys.jpg?v=1"
    },
    {
        "title": "Tonari no Nurse Aide",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wOYr7_4s.jpg?v=1"
    },
    {
        "title": "Want More 19",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/nEAWBs.jpg?v=1"
    },
    {
        "title": "Mortal Housewife",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZyD6k_4s.jpg?v=1"
    },
    {
        "title": "TharnType Season 2: 7 Years of Love",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v31lB_4s.jpg?v=1"
    },
    {
        "title": "Swallow the Sun",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wQKws.jpg?v=1"
    },
    {
        "title": "Sword of Legends Season 2",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/bK5RZs.jpg?v=1"
    },
    {
        "title": "Otonari ni Ginga",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Bddkr7_4s.jpg?v=1"
    },
    {
        "title": "Warm Meet You",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EA3vl_4s.jpg?v=1"
    },
    {
        "title": "Thumping Spike 2",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/01meNs.jpg?v=1"
    },
    {
        "title": "False Face and True Feelings",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qYAm8K_4s.jpg?v=1"
    },
    {
        "title": "Actor:eal",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4e3EOQ_4s.jpg?v=1"
    },
    {
        "title": "The Love Duel",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0o48g_4s.jpg?v=1"
    },
    {
        "title": "Papa to Musume no Nanokakan",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jlA4ys.jpg?v=1"
    },
    {
        "title": "Yuttakarn Prab Nang Marn",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/LxDdDs.jpg?v=1"
    },
    {
        "title": "Can I Step In?",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/42jwd_4s.jpg?v=1"
    },
    {
        "title": "Destiny Seeker",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wrem7_4s.jpg?v=1"
    },
    {
        "title": "Ruk Tong Oom",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Q1XnYs.jpg?v=1"
    },
    {
        "title": "The King of Tears, Lee Bang Won",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kbjq8_4s.jpg?v=1"
    },
    {
        "title": "Surgeon Bong Dal Hee",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/YYy4Qs.jpg?v=1"
    },
    {
        "title": "Don't Disturb Me Farming",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Bd3YDq_4s.jpg?v=1"
    },
    {
        "title": "Leh Ruk Bussaba",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BYPwz_4s.jpg?v=1"
    },
    {
        "title": "Debu to Love to Ayamachi to!",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kQPod_4s.jpg?v=1"
    },
    {
        "title": "Sword and Fairy",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jQAzYB_4s.jpg?v=1"
    },
    {
        "title": "Eizouken ni wa Te o Dasu na!",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xvk5Os.jpg?v=1"
    },
    {
        "title": "Densha Otoko",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/314xWs.jpg?v=1"
    },
    {
        "title": "Noble, My Love",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XA3Lps.jpg?v=1"
    },
    {
        "title": "My Dear Boy",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/oV4Bxs.jpg?v=1"
    },
    {
        "title": "What's Your Blood Type?",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d46Azs.jpg?v=1"
    },
    {
        "title": "The Weasel Grave",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/w0zXbs.jpg?v=1"
    },
    {
        "title": "Hellbound",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6weyW_4s.jpg?v=1"
    },
    {
        "title": "Nazotoki wa Dinner no Ato de",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QpjdQs.jpg?v=1"
    },
    {
        "title": "Minato Shouji Coin Laundry Season 2",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jQjxvr_4s.jpg?v=1"
    },
    {
        "title": "God of War",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2D4QWs.jpg?v=1"
    },
    {
        "title": "Brilliant Girls",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Rpg5Y_4s.jpg?v=1"
    },
    {
        "title": "Hello My Girl",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6Db8P_4s.jpg?v=1"
    },
    {
        "title": "Star and Sky: Sky in Your Heart",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xp6Oz_4s.jpg?v=1"
    },
    {
        "title": "Assassin Academy",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rJ50Z_4s.jpg?v=1"
    },
    {
        "title": "Love Sick",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pdn2nr_4s.jpg?v=1"
    },
    {
        "title": "Eternal Happiness",
        "year": "2002",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/MKpmjs.jpg?v=1"
    },
    {
        "title": "No, Thank You",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jvWEz_4s.jpg?v=1"
    },
    {
        "title": "Love in the Desert",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/g0mz1n_4s.jpg?v=1"
    },
    {
        "title": "Koi ni Mudaguchi",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wyXkp_4s.jpg?v=1"
    },
    {
        "title": "Deep Night Side Story: The Two of Us",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJe8Bk_4s.jpg?v=1"
    },
    {
        "title": "Wedding Plan",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1wO8Ld_4s.jpg?v=1"
    },
    {
        "title": "Monstrous",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Rop8R_4s.jpg?v=1"
    },
    {
        "title": "Kizoku Tantei",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/n0jvBs.jpg?v=1"
    },
    {
        "title": "So It's You",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZAW7L_4s.jpg?v=1"
    },
    {
        "title": "Boys over Flowers",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/peoVE_4s.jpg?v=1"
    },
    {
        "title": "Samee",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/LwWDxs.jpg?v=1"
    },
    {
        "title": "Sennyuu Tantei Tokage",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pJg0e_4s.jpg?v=1"
    },
    {
        "title": "Person Who Gives Happiness",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4oxe6s.jpg?v=1"
    },
    {
        "title": "Maison de Police",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rAgkp_4s.jpg?v=1"
    },
    {
        "title": "Minshu no Teki",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/b2L4Zs.jpg?v=1"
    },
    {
        "title": "Angel Eyes",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJz48s.jpg?v=1"
    },
    {
        "title": "Al Cappuccino",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1qQg7s.jpg?v=1"
    },
    {
        "title": "Koshonin",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dKQvK_4s.jpg?v=1"
    },
    {
        "title": "Prince of Wolf",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/NBxpRs.jpg?v=1"
    },
    {
        "title": "Watashi ga Renai Dekinai Riyuu",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4ov86s.jpg?v=1"
    },
    {
        "title": "Be Yourself",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j544z_4s.jpg?v=1"
    },
    {
        "title": "My Girlfriend",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dY6Nds.jpg?v=1"
    },
    {
        "title": "Youth Unprescribed",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/q54n0_4s.jpg?v=1"
    },
    {
        "title": "Turn Left Turn Right",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EPvb5s.jpg?v=1"
    },
    {
        "title": "Love for a Thousand More",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RWmyxs.jpg?v=1"
    },
    {
        "title": "Memory in the Letter",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5py45_4s.jpg?v=1"
    },
    {
        "title": "Bad Guy",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAq778_4s.jpg?v=1"
    },
    {
        "title": "Goukon ni Ittara Onna ga Inakatta Hanashi",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/DkYWAD_4s.jpg?v=1"
    },
    {
        "title": "The Night of the Comet",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/8YJzWs.jpg?v=1"
    },
    {
        "title": "Too Late to Say I Love You",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/azwwds.jpg?v=1"
    },
    {
        "title": "Lovely Swords Girl",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1qbgRs.jpg?v=1"
    },
    {
        "title": "Fighting Youth",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2ExQd_4s.jpg?v=1"
    },
    {
        "title": "Unubore Deka",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/YAR5Ps.jpg?v=1"
    },
    {
        "title": "New My Fair Princess",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wVzWAs.jpg?v=1"
    },
    {
        "title": "Cheer Up",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xVg8E_4s.jpg?v=1"
    },
    {
        "title": "Blue Complex",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PxNmQL_4s.jpg?v=1"
    },
    {
        "title": "Dear Little Mermaid",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/16L4d_4s.jpg?v=1"
    },
    {
        "title": "Hi Flower",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/KDrNns.jpg?v=1"
    },
    {
        "title": "Wrong Carriage, Right Groom",
        "year": "2001",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kvWlOs.jpg?v=1"
    },
    {
        "title": "Long Love Letter",
        "year": "2002",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdyVqs.jpg?v=1"
    },
    {
        "title": "The Murder in Kairoutei",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wp6Xk_4s.jpg?v=1"
    },
    {
        "title": "Ryu no Michi: Futatsu no Kao no Fukushusha",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W7zzW_4s.jpg?v=1"
    },
    {
        "title": "Danger of Her",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/68OqXs.jpg?v=1"
    },
    {
        "title": "Mia 2018",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/bKRBEs.jpg?v=1"
    },
    {
        "title": "Song of the Dynasty",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E57DOb_4s.jpg?v=1"
    },
    {
        "title": "Lipgloss Spy",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jKqyy_4s.jpg?v=1"
    },
    {
        "title": "Till I Met You",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/24NVVs.jpg?v=1"
    },
    {
        "title": "Love Forever After",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jmZPw_4s.jpg?v=1"
    },
    {
        "title": "Radio Romance",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6y0nps.jpg?v=1"
    },
    {
        "title": "To Love, to Heal",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/7gQ3es.jpg?v=1"
    },
    {
        "title": "Queen Insoo",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GNRJYs.jpg?v=1"
    },
    {
        "title": "Kor Kerd Mai Klai Klai Ter",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1Wok5_4s.jpg?v=1"
    },
    {
        "title": "The Underclass",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1zRpd_4s.jpg?v=1"
    },
    {
        "title": "Career",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/y7mx1s.jpg?v=1"
    },
    {
        "title": "At Home Dad",
        "year": "2004",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/MXAKds.jpg?v=1"
    },
    {
        "title": "The X-Family",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Mgeq9s.jpg?v=1"
    },
    {
        "title": "Wakako Zake",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/5d45es.jpg?v=1"
    },
    {
        "title": "Dr. White",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BOVWA_4s.jpg?v=1"
    },
    {
        "title": "The Bride of Naga",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x4AZON_4s.jpg?v=1"
    },
    {
        "title": "Crushes Reverse",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RW3Nrs.jpg?v=1"
    },
    {
        "title": "Master Devil Do Not Kiss Me Season 2",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/R0Dbzs.jpg?v=1"
    },
    {
        "title": "The Fragments of Kylin",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1wOZx3_4s.jpg?v=1"
    },
    {
        "title": "Ao no SP: Gakko nai Keisatsu Shimada Ryuhei",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RgldE_4s.jpg?v=1"
    },
    {
        "title": "Drunken to Love You",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/41DYQs.jpg?v=1"
    },
    {
        "title": "Woman of 9.9 Billion",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/q88bds.jpg?v=1"
    },
    {
        "title": "Hide",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJVDkn_4s.jpg?v=1"
    },
    {
        "title": "Coffee Ikaga Deshou",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6kNE0_4s.jpg?v=1"
    },
    {
        "title": "Meet Me Outside",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/prXVy_4s.jpg?v=1"
    },
    {
        "title": "Otona Joshi",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rYXPNs.jpg?v=1"
    },
    {
        "title": "Ugly Duckling Series: Boy's Paradise",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/o7Jvvs.jpg?v=1"
    },
    {
        "title": "Alone in Love",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1wJE6s.jpg?v=1"
    },
    {
        "title": "The Heaven Sword & the Dragon Sabre",
        "year": "2001",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GQR34s.jpg?v=1"
    },
    {
        "title": "Bokura no Micro na Shuumatsu",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RxYKg_4s.jpg?v=1"
    },
    {
        "title": "Sagideka",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xw0ZZs.jpg?v=1"
    },
    {
        "title": "Memory Love",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/mk1KPs.jpg?v=1"
    },
    {
        "title": "Aoshima-kun wa Ijiwaru",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RBXgXg_4s.jpg?v=1"
    },
    {
        "title": "Star in My Heart",
        "year": "1997",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GJB3ds.jpg?v=1"
    },
    {
        "title": "Angel 'N' Devil",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Bpvr5s.jpg?v=1"
    },
    {
        "title": "Watashi no Kaseifu Nagisa-san",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XBqqX_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Foxy Pilot",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/A7WPgs.jpg?v=1"
    },
    {
        "title": "Heartbeat Deviation",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x4WJmX_4s.jpg?v=1"
    },
    {
        "title": "Convenience Store Fling",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v8dB2_4s.jpg?v=1"
    },
    {
        "title": "Bitch X Rich",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QJ1Vw6_4s.jpg?v=1"
    },
    {
        "title": "You Complete Me",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eme7W_4s.jpg?v=1"
    },
    {
        "title": "Yowakutemo Katemasu",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/LwvXDs.jpg?v=1"
    },
    {
        "title": "Unusual Idol Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dkJkD_4s.jpg?v=1"
    },
    {
        "title": "Kamen Teacher",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/23WOEs.jpg?v=1"
    },
    {
        "title": "Suddenly This Summer",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RPJARs.jpg?v=1"
    },
    {
        "title": "Ima kara Anata wo Kyouhaku Shimasu",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xOz4y_4s.jpg?v=1"
    },
    {
        "title": "The Legend of Qin",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/lW5ENs.jpg?v=1"
    },
    {
        "title": "Love for Two Lives",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAqbgj_4s.jpg?v=1"
    },
    {
        "title": "Color Rush",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v8xwp_4s.jpg?v=1"
    },
    {
        "title": "At the Moment",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdqWAV_4s.jpg?v=1"
    },
    {
        "title": "The Revenge of Begonia",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vXngdW_4s.jpg?v=1"
    },
    {
        "title": "Q Series: Life Plan A and B",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/A7Y8Zs.jpg?v=1"
    },
    {
        "title": "The West Wind Is Strong",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0yB20_4s.jpg?v=1"
    },
    {
        "title": "The Banker",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WQX0Xs.jpg?v=1"
    },
    {
        "title": "Emperor or Boss",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QrpeW_4s.jpg?v=1"
    },
    {
        "title": "Chinese Paladin Season 5",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/DEXWns.jpg?v=1"
    },
    {
        "title": "My Secret Love",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X5p6x_4s.jpg?v=1"
    },
    {
        "title": "Soshite, Ikiru",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2Ovr2s.jpg?v=1"
    },
    {
        "title": "Stairway to Stardom",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/D211rs.jpg?v=1"
    },
    {
        "title": "21 Days Theory",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QZ6eY_4s.jpg?v=1"
    },
    {
        "title": "I Hate You, I Love You",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Yy2Vds.jpg?v=1"
    },
    {
        "title": "Unrequited Love",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Zj1wY_4s.jpg?v=1"
    },
    {
        "title": "Fake Buddies",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E53g1b_4s.jpg?v=1"
    },
    {
        "title": "Shining Just for You",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eO60Q_4s.jpg?v=1"
    },
    {
        "title": "Yuube wa Otanoshimi Deshita ne",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2xq5ds.jpg?v=1"
    },
    {
        "title": "My True Friend",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Qj6P7s.jpg?v=1"
    },
    {
        "title": "Six Love Story",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RP12xs.jpg?v=1"
    },
    {
        "title": "To Me, It's Simply You",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2A6kE_4s.jpg?v=1"
    },
    {
        "title": "Radiant Office",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/oEn06s.jpg?v=1"
    },
    {
        "title": "Lucky with You",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xor8d_4s.jpg?v=1"
    },
    {
        "title": "Uncle Samsik",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E53720_4s.jpg?v=1"
    },
    {
        "title": "The Last Cop",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/m0rd1s.jpg?v=1"
    },
    {
        "title": "The Charming Step Mom",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/REV7r_4s.jpg?v=1"
    },
    {
        "title": "Dinner",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/D8kmDs.jpg?v=1"
    },
    {
        "title": "Soulmate",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Lw3l7s.jpg?v=1"
    },
    {
        "title": "The Rules of Love Season 2",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qq6ozs.jpg?v=1"
    },
    {
        "title": "The Gravity of a Rainbow",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/44lL1s.jpg?v=1"
    },
    {
        "title": "Fragile",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2xdpVs.jpg?v=1"
    },
    {
        "title": "Family: The Unbreakable Bond",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wwb6P_4s.jpg?v=1"
    },
    {
        "title": "Luead Mungkorn: Krating",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/3m3ods.jpg?v=1"
    },
    {
        "title": "Sugarless",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/MjYlOs.jpg?v=1"
    },
    {
        "title": "A Fistful of Stances",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZK7A8_4s.jpg?v=1"
    },
    {
        "title": "Rugal",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYEPPE_4s.jpg?v=1"
    },
    {
        "title": "The Heavenly Idol",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wrOkE_4s.jpg?v=1"
    },
    {
        "title": "Kiss x Kiss x Kiss: Love ii Shower",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAXJLd_4s.jpg?v=1"
    },
    {
        "title": "Our Relationship Ended Before It Began",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/w15LJ_4s.jpg?v=1"
    },
    {
        "title": "My Precious",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1w3Jpz_4s.jpg?v=1"
    },
    {
        "title": "Yokai Ningen Bem",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rbjqDs.jpg?v=1"
    },
    {
        "title": "Cleaning Up",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0Lj0N_4s.jpg?v=1"
    },
    {
        "title": "Record of Youth",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BgnKz_4s.jpg?v=1"
    },
    {
        "title": "New Smiling Proud Wanderer",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JxpRps.jpg?v=1"
    },
    {
        "title": "The King's Face",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/zEEzds.jpg?v=1"
    },
    {
        "title": "Hotaru no Hikari 2",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/mOZbJs.jpg?v=1"
    },
    {
        "title": "Love Around",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5oNms.jpg?v=1"
    },
    {
        "title": "Let's Go Crazy on LIVE",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RZrORs.jpg?v=1"
    },
    {
        "title": "14-sai no Haha",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pdrw8s.jpg?v=1"
    },
    {
        "title": "My Marvellous Fable",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kA0NKw_4s.jpg?v=1"
    },
    {
        "title": "Oh My Lord",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WRZop_4s.jpg?v=1"
    },
    {
        "title": "The Return of Iljimae",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/G1YRGs.jpg?v=1"
    },
    {
        "title": "Temperature of Love",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2NjmWs.jpg?v=1"
    },
    {
        "title": "Celestial Authority Academy",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BoD3l_4s.jpg?v=1"
    },
    {
        "title": "Cry Me a River of Stars",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2vkvd_4s.jpg?v=1"
    },
    {
        "title": "My Queen",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/o7xl6s.jpg?v=1"
    },
    {
        "title": "Rak Kan Panlawan",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Azbj8s.jpg?v=1"
    },
    {
        "title": "Desperate Love",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/a8vDls.jpg?v=1"
    },
    {
        "title": "Futari Monologue",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/X41ngs.jpg?v=1"
    },
    {
        "title": "You Are Mine",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E58Vdp_4s.jpg?v=1"
    },
    {
        "title": "Boy for Rent",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6nO0Xs.jpg?v=1"
    },
    {
        "title": "H2: Kimi to Ita Hibi",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJK3k8_4s.jpg?v=1"
    },
    {
        "title": "Love, Timeless",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2dpbVs.jpg?v=1"
    },
    {
        "title": "Haikei, Chichiue-sama",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/7gxmRs.jpg?v=1"
    },
    {
        "title": "The Quiz Show",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/KpXAvs.jpg?v=1"
    },
    {
        "title": "The Producers",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qVY4Bs.jpg?v=1"
    },
    {
        "title": "Hotelier",
        "year": "2001",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dyKb0s.jpg?v=1"
    },
    {
        "title": "Rewriting Destiny",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W0kxW_4s.jpg?v=1"
    },
    {
        "title": "Aikurushii",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/nveoEs.jpg?v=1"
    },
    {
        "title": "Scent of Love",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/q0wpz_4s.jpg?v=1"
    },
    {
        "title": "My Princess",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QJXj4s.jpg?v=1"
    },
    {
        "title": "Nice to Meet You",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xJjv0_4s.jpg?v=1"
    },
    {
        "title": "Ten Years Late",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eREpQs.jpg?v=1"
    },
    {
        "title": "Kaguya-sama: Love Is War - Mini",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Zq0L1_4s.jpg?v=1"
    },
    {
        "title": "King Geun Cho Go",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/MKwJMs.jpg?v=1"
    },
    {
        "title": "Nemesis",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/e5eQd_4s.jpg?v=1"
    },
    {
        "title": "Triumph in the Skies Season 2",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jq4OOs.jpg?v=1"
    },
    {
        "title": "Dae Jang Geum Is Watching",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jrkDys.jpg?v=1"
    },
    {
        "title": "Witch's Love",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/mVYm3s.jpg?v=1"
    },
    {
        "title": "Humans",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Boxjz_4s.jpg?v=1"
    },
    {
        "title": "Beautiful Days",
        "year": "2001",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/60bnjs.jpg?v=1"
    },
    {
        "title": "Forward Forever",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/64pPXs.jpg?v=1"
    },
    {
        "title": "Yasuko to Kenji",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BkVmq_4s.jpg?v=1"
    },
    {
        "title": "Hello My Shining Love",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4NOVZ_4s.jpg?v=1"
    },
    {
        "title": "Love Story of Court Enemies",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W7jd5_4s.jpg?v=1"
    },
    {
        "title": "Yangotonaki Ichizoku",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2011w_4s.jpg?v=1"
    },
    {
        "title": "Potato Star 2013QR3",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XdeOxs.jpg?v=1"
    },
    {
        "title": "Behind Every Star",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/EmQoW_4s.jpg?v=1"
    },
    {
        "title": "Rarng Ruk Prang Jai",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WVdPX_4s.jpg?v=1"
    },
    {
        "title": "Soul Plate",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/44npYs.jpg?v=1"
    },
    {
        "title": "Destiny's Love",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JKXmws.jpg?v=1"
    },
    {
        "title": "One Sunny Day",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Q1NO6s.jpg?v=1"
    },
    {
        "title": "Tell No One",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z8ovDY_4s.jpg?v=1"
    },
    {
        "title": "Highs and Lows",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYyDes.jpg?v=1"
    },
    {
        "title": "Me too, Flower!",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JjKqjs.jpg?v=1"
    },
    {
        "title": "She Is the One",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ERk5W_4s.jpg?v=1"
    },
    {
        "title": "Assembly",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wOPngs.jpg?v=1"
    },
    {
        "title": "Square Pegs",
        "year": "2002",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/MdmbDs.jpg?v=1"
    },
    {
        "title": "Tomodachi Game",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/o7AyLs.jpg?v=1"
    },
    {
        "title": "Zettai Kareshi",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/l0RLLs.jpg?v=1"
    },
    {
        "title": "Miss Unwieldy",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E53xA0_4s.jpg?v=1"
    },
    {
        "title": "Breath of Destiny",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZX1qW_4s.jpg?v=1"
    },
    {
        "title": "After School: Lucky or Not",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XdAlXs.jpg?v=1"
    },
    {
        "title": "My Best Friend's Story",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dQn70_4s.jpg?v=1"
    },
    {
        "title": "Raise de wa Chanto Shimasu",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d5rpg_4s.jpg?v=1"
    },
    {
        "title": "I Need Romance Season 2",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/927qds.jpg?v=1"
    },
    {
        "title": "Twin of Brothers",
        "year": "2004",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Mjjors.jpg?v=1"
    },
    {
        "title": "Uzukawamura Jiken",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xpm0x_4s.jpg?v=1"
    },
    {
        "title": "Boukyaku no Sachiko",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xon2n_4s.jpg?v=1"
    },
    {
        "title": "Heartbeat Love",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/VX7Nvs.jpg?v=1"
    },
    {
        "title": "Q10",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/gZ8dWs.jpg?v=1"
    },
    {
        "title": "From Survivor to Healer",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/nd3ZEs.jpg?v=1"
    },
    {
        "title": "Mirror: A Tale of Twin Cities",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d50nW_4s.jpg?v=1"
    },
    {
        "title": "366 Nichi",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAYddj_4s.jpg?v=1"
    },
    {
        "title": "Dr. Rintaro",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JxXPXs.jpg?v=1"
    },
    {
        "title": "Saikou no Jinsei no Owarikata - Ending Planner",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0OQ64s.jpg?v=1"
    },
    {
        "title": "Paragit Likhit Huajai",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Qj5wAs.jpg?v=1"
    },
    {
        "title": "Make a Woman Cry",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2ov1Es.jpg?v=1"
    },
    {
        "title": "The Queen of SOP",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/aeKwqs.jpg?v=1"
    },
    {
        "title": "MOZU Season 2: Maboroshi no Tsubasa",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/DE5Yps.jpg?v=1"
    },
    {
        "title": "2 Moons 2",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dd0wAs.jpg?v=1"
    },
    {
        "title": "Sono Bisque Doll wa Koi wo Suru",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJrlvg_4s.jpg?v=1"
    },
    {
        "title": "Along with Me",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0rO6b_4s.jpg?v=1"
    },
    {
        "title": "A Year Without a Job",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WZK7P_4s.jpg?v=1"
    },
    {
        "title": "Chaser Game W: Power Harassment Joshi wa Watashi no Moto Kano",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z8WOWq_4s.jpg?v=1"
    },
    {
        "title": "The Age Difference in Love",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jQQQkv_4s.jpg?v=1"
    },
    {
        "title": "May Queen",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/O81Abs.jpg?v=1"
    },
    {
        "title": "Return the World to You",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pnKjQs.jpg?v=1"
    },
    {
        "title": "Small & Mighty",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ep5KY_4s.jpg?v=1"
    },
    {
        "title": "Re-Feel",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/1wvzp5_4s.jpg?v=1"
    },
    {
        "title": "Unhating You",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RBYD2r_4s.jpg?v=1"
    },
    {
        "title": "Maid Escort",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xOjy0_4s.jpg?v=1"
    },
    {
        "title": "Step by Step: Uncut Version",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/81JlXl_4s.jpg?v=1"
    },
    {
        "title": "Ton Ruk Rim Rua",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ABW7Es.jpg?v=1"
    },
    {
        "title": "Golden Pouch",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/OBYYPs.jpg?v=1"
    },
    {
        "title": "Risky Romance",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PWLw8s.jpg?v=1"
    },
    {
        "title": "Really Meet Love That Day",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/r7qVy_4s.jpg?v=1"
    },
    {
        "title": "Failing in Love",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RZ16Ps.jpg?v=1"
    },
    {
        "title": "Henshin",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/zo42Ws.jpg?v=1"
    },
    {
        "title": "Missing Persons",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/qwrWQs.jpg?v=1"
    },
    {
        "title": "Miss Lucky Go!",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdqvJV_4s.jpg?v=1"
    },
    {
        "title": "Simmer Down",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BARRV_4s.jpg?v=1"
    },
    {
        "title": "Ashita, Watashi wa Dareka no Kanojo",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2138O_4s.jpg?v=1"
    },
    {
        "title": "Chuamong Tong Mon",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/24m1Es.jpg?v=1"
    },
    {
        "title": "Wang's Family",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5l4ps.jpg?v=1"
    },
    {
        "title": "Woman with a Suitcase",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vQ2dXs.jpg?v=1"
    },
    {
        "title": "My Special Girl",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z8r2yq_4s.jpg?v=1"
    },
    {
        "title": "Asuko March!",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z88OQq_4s.jpg?v=1"
    },
    {
        "title": "Samee Chua Kuen",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RK7YY_4s.jpg?v=1"
    },
    {
        "title": "New Love Playlist",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/klARj_4s.jpg?v=1"
    },
    {
        "title": "Oh My Drama Lover",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/vEOB2_4s.jpg?v=1"
    },
    {
        "title": "Yasashii Jikan",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/5oVVws.jpg?v=1"
    },
    {
        "title": "Mop Girl",
        "year": "2007",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/l0YRNs.jpg?v=1"
    },
    {
        "title": "Blue Boys Part 2",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJeW6k_4s.jpg?v=1"
    },
    {
        "title": "Boss-dol Mart",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x4k80w_4s.jpg?v=1"
    },
    {
        "title": "Art in Love",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W1O6Xs.jpg?v=1"
    },
    {
        "title": "Almost Famous",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d7Ojg_4s.jpg?v=1"
    },
    {
        "title": "Lie to Me",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/NdRKes.jpg?v=1"
    },
    {
        "title": "A Clear Midsummer Night",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GPDVys.jpg?v=1"
    },
    {
        "title": "The Snow Moon",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJm7rN_4s.jpg?v=1"
    },
    {
        "title": "Bon Appetit",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2wNygO_4s.jpg?v=1"
    },
    {
        "title": "Our House",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/047bks.jpg?v=1"
    },
    {
        "title": "Plerng Naree",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E7AYps.jpg?v=1"
    },
    {
        "title": "I Cannot Hug You",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/AzXP4s.jpg?v=1"
    },
    {
        "title": "Socho Shihatsu no Sappukei",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XYAxq_4s.jpg?v=1"
    },
    {
        "title": "Brother Beat",
        "year": "2005",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/wJjdYs.jpg?v=1"
    },
    {
        "title": "Voice",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/v7VPp_4s.jpg?v=1"
    },
    {
        "title": "Naeil's Cantabile",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/7360ys.jpg?v=1"
    },
    {
        "title": "The Escape of the Seven: War for Survival",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYlLlY_4s.jpg?v=1"
    },
    {
        "title": "Ku Kaen San Ruk",
        "year": "2011",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QJyAAs.jpg?v=1"
    },
    {
        "title": "Dhevaprom: Laorchan",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4eDE3Q_4s.jpg?v=1"
    },
    {
        "title": "Oshii Keiji",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6pKL0s.jpg?v=1"
    },
    {
        "title": "Friend, Our Legend",
        "year": "2009",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jBKb8_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Zi-O",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PWAbZs.jpg?v=1"
    },
    {
        "title": "Kei\u00d7Yaku: Abunai Aibou",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dXO4A_4s.jpg?v=1"
    },
    {
        "title": "One Boat, One World",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XRPmX_4s.jpg?v=1"
    },
    {
        "title": "Madam Cutie on Duty",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BBmXzs.jpg?v=1"
    },
    {
        "title": "Nakuna, Hara-chan",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6mKj2_4s.jpg?v=1"
    },
    {
        "title": "Faceless Love",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pdWVbE_4s.jpg?v=1"
    },
    {
        "title": "Oh, Mando!",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/j3mJv_4s.jpg?v=1"
    },
    {
        "title": "Voice in the Rain",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/je8bb_4s.jpg?v=1"
    },
    {
        "title": "Romantic Blue",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/dQPEg_4s.jpg?v=1"
    },
    {
        "title": "Project S: Shoot! I Love You",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Yo1Rgs.jpg?v=1"
    },
    {
        "title": "Together with Me: The Next Chapter",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4wn36s.jpg?v=1"
    },
    {
        "title": "Mengfei Comes Across",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/bKEXws.jpg?v=1"
    },
    {
        "title": "Love Me in Three Days",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rB7J7_4s.jpg?v=1"
    },
    {
        "title": "Breakup Probation, A Week",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ByXXV_4s.jpg?v=1"
    },
    {
        "title": "Soshite, Dare mo Inaku Natta",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Q0gbYs.jpg?v=1"
    },
    {
        "title": "Love O'Clock",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0g6Ze_4s.jpg?v=1"
    },
    {
        "title": "Ghost Mama Sousasen",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/nd6k6s.jpg?v=1"
    },
    {
        "title": "Maid's Revenge",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xdb08g_4s.jpg?v=1"
    },
    {
        "title": "Buried City to Shut All Lights",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/24LQws.jpg?v=1"
    },
    {
        "title": "Rock 'n' Road",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/KpgD4s.jpg?v=1"
    },
    {
        "title": "Enemies from the Past",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pkpADs.jpg?v=1"
    },
    {
        "title": "Return of the Heiress",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAElms.jpg?v=1"
    },
    {
        "title": "About Time",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/DX3K5s.jpg?v=1"
    },
    {
        "title": "Grid",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d5J35_4s.jpg?v=1"
    },
    {
        "title": "Fighting for Love",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5Jro7_4s.jpg?v=1"
    },
    {
        "title": "Remember, Hari 2",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Ox4Eys.jpg?v=1"
    },
    {
        "title": "The Fire Series: Fai Ruk Game Rorn",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/AEY3vs.jpg?v=1"
    },
    {
        "title": "The Man Who Kills Troubles",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jAw0vs.jpg?v=1"
    },
    {
        "title": "Kekkon Yoteibi",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pd7Y1e_4s.jpg?v=1"
    },
    {
        "title": "Chronicle of Life",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kvKwjs.jpg?v=1"
    },
    {
        "title": "Men with Sword",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E8r07s.jpg?v=1"
    },
    {
        "title": "Secret Investigation Record",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GJBPws.jpg?v=1"
    },
    {
        "title": "Lovers",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/mOggPs.jpg?v=1"
    },
    {
        "title": "Kamen Rider Revice",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XkbZd_4s.jpg?v=1"
    },
    {
        "title": "Yameru Toki mo, Sukoyaka Naru Toki mo",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Xrl0xs.jpg?v=1"
    },
    {
        "title": "Five Missions",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Avn33s.jpg?v=1"
    },
    {
        "title": "Don't Say No",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W8WxD_4s.jpg?v=1"
    },
    {
        "title": "Youths in the Breeze",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/w7Jnn_4s.jpg?v=1"
    },
    {
        "title": "TOKYO AIRPORT - Tokyo Kuukou Kansei Hoanbu",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9O4Wxs.jpg?v=1"
    },
    {
        "title": "The 3rd Ward",
        "year": "2012",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GLz37s.jpg?v=1"
    },
    {
        "title": "Moon Love",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x4Ygpj_4s.jpg?v=1"
    },
    {
        "title": "Shuttle Love Millennium",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/W5z2Ws.jpg?v=1"
    },
    {
        "title": "Toki wo Kakeru Shoujo",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kqbgm_4s.jpg?v=1"
    },
    {
        "title": "Love Is an Accident",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYgmWY_4s.jpg?v=1"
    },
    {
        "title": "The Sound of Your Heart: Reboot Season 2",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/z7goes.jpg?v=1"
    },
    {
        "title": "Marry You",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60lLB0_4s.jpg?v=1"
    },
    {
        "title": "Battle of the Writers",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdDz25_4s.jpg?v=1"
    },
    {
        "title": "Shiranakute Ii Koto",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/pLwWB_4s.jpg?v=1"
    },
    {
        "title": "Kikazaranai Koi ni wa Riyuu ga Atte",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6kVDK_4s.jpg?v=1"
    },
    {
        "title": "Tiger Cubs Season 2",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/b3oPVs.jpg?v=1"
    },
    {
        "title": "Demi-Gods and Semi-Devils",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/x4n8qN_4s.jpg?v=1"
    },
    {
        "title": "Ghost VRos",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Wr68Ws.jpg?v=1"
    },
    {
        "title": "We Fall In Love",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0w4zN6_4s.jpg?v=1"
    },
    {
        "title": "Uri wo Waru: Issen wo Koeta, Sono Saki ni wa",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z83q67_4s.jpg?v=1"
    },
    {
        "title": "Couple or Trouble",
        "year": "2006",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Bd7Rzs.jpg?v=1"
    },
    {
        "title": "Blowing in the Wind",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XwQJds.jpg?v=1"
    },
    {
        "title": "My Bubble Tea",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RJbKRs.jpg?v=1"
    },
    {
        "title": "Cinderella Chef",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/RR6lg_4s.jpg?v=1"
    },
    {
        "title": "She Is Beautiful",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/DX1rys.jpg?v=1"
    },
    {
        "title": "Unicorn",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/66pVp_4s.jpg?v=1"
    },
    {
        "title": "Kogure Shashinkan",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9yld3s.jpg?v=1"
    },
    {
        "title": "Hunted",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/46kkk_4s.jpg?v=1"
    },
    {
        "title": "The Rules of Love",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/g26V1s.jpg?v=1"
    },
    {
        "title": "A Tale of Love and Loyalty",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rN06e7_4s.jpg?v=1"
    },
    {
        "title": "Su Ji & U Ri",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAV2Qj_4s.jpg?v=1"
    },
    {
        "title": "Dhevaprom: Jaipisut",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WPbWv3_4s.jpg?v=1"
    },
    {
        "title": "K9 Cop",
        "year": "2016",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jyezvs.jpg?v=1"
    },
    {
        "title": "The Naked Director Season 2",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eN318_4s.jpg?v=1"
    },
    {
        "title": "Yeah, That's How It Is",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/04jLrs.jpg?v=1"
    },
    {
        "title": "Sweet and Cold",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/eYylzn_4s.jpg?v=1"
    },
    {
        "title": "Hey Pro My Mountain Girl",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Y3gAWs.jpg?v=1"
    },
    {
        "title": "Revenge of Reborn Princess",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ABZLNZ_4s.jpg?v=1"
    },
    {
        "title": "Warm and Cozy",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/3vQwWs.jpg?v=1"
    },
    {
        "title": "Glass Slippers",
        "year": "2002",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/l0KJvs.jpg?v=1"
    },
    {
        "title": "Green Door",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RWJj6s.jpg?v=1"
    },
    {
        "title": "Yankee-kun to Megane-chan",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/0bVZks.jpg?v=1"
    },
    {
        "title": "Nang Rai Sai Lab",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/PxmKRs.jpg?v=1"
    },
    {
        "title": "Love in a Loop",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/4P3Jd_4s.jpg?v=1"
    },
    {
        "title": "Let Me Off the Earth",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xOwqq_4s.jpg?v=1"
    },
    {
        "title": "Every Move You Make",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/aeYnqs.jpg?v=1"
    },
    {
        "title": "Taste of Cat",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/B0dO6s.jpg?v=1"
    },
    {
        "title": "Hush",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jvwnB_4s.jpg?v=1"
    },
    {
        "title": "Shijukara",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/2Vwod_4s.jpg?v=1"
    },
    {
        "title": "Sa Kao Duen",
        "year": "2018",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Q57KAs.jpg?v=1"
    },
    {
        "title": "Youtuber Class",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rXxwN_4s.jpg?v=1"
    },
    {
        "title": "I Wanna Hear Your Song",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/6pDbOs.jpg?v=1"
    },
    {
        "title": "Heaven's Order",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GLl5Ls.jpg?v=1"
    },
    {
        "title": "Love Is for Suckers",
        "year": "2022",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/XWxNq_4s.jpg?v=1"
    },
    {
        "title": "Mukodono!",
        "year": "2001",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/nd2zEs.jpg?v=1"
    },
    {
        "title": "Step by Step Love",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0ALNW_4s.jpg?v=1"
    },
    {
        "title": "Love Kome no Okite: Kojirase Joshi to Toshishita Danshi",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/jLk0y_4s.jpg?v=1"
    },
    {
        "title": "Drunk to Love You",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d0VEPe_4s.jpg?v=1"
    },
    {
        "title": "Ameiro Paradox",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jRXdy_4s.jpg?v=1"
    },
    {
        "title": "Gumiho: Tale of the Fox's Child",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/GlbJas.jpg?v=1"
    },
    {
        "title": "Hi Flower Season 2",
        "year": "2017",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/QdvOYs.jpg?v=1"
    },
    {
        "title": "Ye Cheng Fu",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/xrl0y_4s.jpg?v=1"
    },
    {
        "title": "Medical Examiner Dr. Qin: Silent Evidence",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BzB05_4s.jpg?v=1"
    },
    {
        "title": "Bicheonmu",
        "year": "2008",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Mg0gOs.jpg?v=1"
    },
    {
        "title": "Engine Sentai Go-Onger",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQWbQw_4s.jpg?v=1"
    },
    {
        "title": "Wish You: Your Melody From My Heart",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0eOlN_4s.jpg?v=1"
    },
    {
        "title": "Meet You",
        "year": "2021",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z88QoL_4s.jpg?v=1"
    },
    {
        "title": "Rules of Zoovenia",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dV5jes.jpg?v=1"
    },
    {
        "title": "Fabulous 30",
        "year": "2014",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/rRol7s.jpg?v=1"
    },
    {
        "title": "Miss Buyer",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wpKEb_4s.jpg?v=1"
    },
    {
        "title": "Garo: Gold Storm Sho",
        "year": "2015",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/KnLP4s.jpg?v=1"
    },
    {
        "title": "Graceful Friends",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6zoDX_4s.jpg?v=1"
    },
    {
        "title": "Bokutachi ga Yarimashita",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5DWop_4s.jpg?v=1"
    },
    {
        "title": "Samurai High School",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z03kqs.jpg?v=1"
    },
    {
        "title": "Scams",
        "year": "2019",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ElgR0s.jpg?v=1"
    },
    {
        "title": "Shall We Fall in Love",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6nzY0s.jpg?v=1"
    },
    {
        "title": "Wish Woosh Season 2",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ZrqbLs.jpg?v=1"
    },
    {
        "title": "Namonaki Doku",
        "year": "2013",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9yDK1s.jpg?v=1"
    },
    {
        "title": "Tourist",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/zEVA7s.jpg?v=1"
    },
    {
        "title": "When I See You Again",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wOd0ns.jpg?v=1"
    },
    {
        "title": "Flowers in Fog",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdNzJs.jpg?v=1"
    },
    {
        "title": "The Spies Who Loved Me",
        "year": "2020",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/ZQ8KL_4s.jpg?v=1"
    },
    {
        "title": "Untouchable Lovers",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dwrods.jpg?v=1"
    },
    {
        "title": "Love Is Beautiful",
        "year": "2002",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/anOr6s.jpg?v=1"
    },
    {
        "title": "Never Gone",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lyLPes.jpg?v=1"
    },
    {
        "title": "Aquarium Girl",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lyZ2Ns.jpg?v=1"
    },
    {
        "title": "Proud of Love Season 2",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/m72Vms.jpg?v=1"
    },
    {
        "title": "Well-Intended Love",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lJxrJs.jpg?v=1"
    },
    {
        "title": "Crazy for You",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJO1As.jpg?v=1"
    },
    {
        "title": "Black President",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/5QeWAs.jpg?v=1"
    },
    {
        "title": "Smile, Dong Hae",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9x4k0s.jpg?v=1"
    },
    {
        "title": "The Resilient Dr. Ling",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/BdDRwl_4s.jpg?v=1"
    },
    {
        "title": "Hello Procurator",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RLvjg_4s.jpg?v=1"
    },
    {
        "title": "Garasu no Ashi",
        "year": "2015",
        "rating": "7.4",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Kesenai \"Watashi\": Fukushu no Rensa",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5lWpW_4s.jpg?v=1"
    },
    {
        "title": "A Model Family",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/R6YzP_4s.jpg?v=1"
    },
    {
        "title": "The Myth",
        "year": "2010",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/9rbbZs.jpg?v=1"
    },
    {
        "title": "The Unexpected Marriage",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0WBAb_4s.jpg?v=1"
    },
    {
        "title": "Osen",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/3onVms.jpg?v=1"
    },
    {
        "title": "Totsuzen Desu ga, Ashita Kekkon Shimasu",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/zEdV1s.jpg?v=1"
    },
    {
        "title": "Wake Up Ladies Season 2: Very Complicated",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WzAm5_4s.jpg?v=1"
    },
    {
        "title": "See You in Time",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/elkkps.jpg?v=1"
    },
    {
        "title": "49",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/eNlWp_4s.jpg?v=1"
    },
    {
        "title": "Led Astray by Love",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pdgeyb_4s.jpg?v=1"
    },
    {
        "title": "Just One Bite: Pilot",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jg5Dw_4s.jpg?v=1"
    },
    {
        "title": "My Story for You",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/yEbAKs.jpg?v=1"
    },
    {
        "title": "Not a Robot",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1q1ORs.jpg?v=1"
    },
    {
        "title": "My Home Hero",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z84kjO_4s.jpg?v=1"
    },
    {
        "title": "Birth of a Beauty",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Nd0zWs.jpg?v=1"
    },
    {
        "title": "Anti Reset",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/Z8B38k_4s.jpg?v=1"
    },
    {
        "title": "Hippocrates no Chikai",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Jkjyms.jpg?v=1"
    },
    {
        "title": "To Be Continued",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/850xAs.jpg?v=1"
    },
    {
        "title": "Senryokugai Sousakan",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/g05V1s.jpg?v=1"
    },
    {
        "title": "Itoshi Kimi e",
        "year": "2004",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/abp6Gs.jpg?v=1"
    },
    {
        "title": "Fai Lang Fai",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BjX36s.jpg?v=1"
    },
    {
        "title": "The Guilty Secret",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BxqWRs.jpg?v=1"
    },
    {
        "title": "Me Always You",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pbRgB_4s.jpg?v=1"
    },
    {
        "title": "Moon River",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/LEDZ7s.jpg?v=1"
    },
    {
        "title": "9 End 2 Outs",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/O8mxbs.jpg?v=1"
    },
    {
        "title": "My Healing Love",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/LxD05s.jpg?v=1"
    },
    {
        "title": "Girl Next Room: Midnight Fantasy",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0Ad2es.jpg?v=1"
    },
    {
        "title": "Ploy's Yearbook",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/602EvO_4s.jpg?v=1"
    },
    {
        "title": "My Girl",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Y0lVKs.jpg?v=1"
    },
    {
        "title": "Ninja Sentai Kakuranger",
        "year": "1994",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/WP7vYW_4s.jpg?v=1"
    },
    {
        "title": "The Player",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xq8Y0_4s.jpg?v=1"
    },
    {
        "title": "Queen of Divorce",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z8voOO_4s.jpg?v=1"
    },
    {
        "title": "Juui Dolittle",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BxW05s.jpg?v=1"
    },
    {
        "title": "Remember, Hari",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/7geBNs.jpg?v=1"
    },
    {
        "title": "Legend of Fragrance",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nAdXBs.jpg?v=1"
    },
    {
        "title": "Prosecution Elite",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1wdVVb_4s.jpg?v=1"
    },
    {
        "title": "The Academy",
        "year": "2005",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GN5PJs.jpg?v=1"
    },
    {
        "title": "The Classic of Mountains and Seas",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wjO4As.jpg?v=1"
    },
    {
        "title": "Moshimo, Ikemen Dake no Koukou ga Attara",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pL8mb_4s.jpg?v=1"
    },
    {
        "title": "Lost You, Found You",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/E5QD5b_4s.jpg?v=1"
    },
    {
        "title": "Unmei ni, Nita Koi",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JKkyos.jpg?v=1"
    },
    {
        "title": "I Know Your Secret",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XEL7d_4s.jpg?v=1"
    },
    {
        "title": "Ruler of Your Own World",
        "year": "2002",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xA0w3s.jpg?v=1"
    },
    {
        "title": "Extremely Perilous Love",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdbJwJ_4s.jpg?v=1"
    },
    {
        "title": "Happy Ending",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJKZA1_4s.jpg?v=1"
    },
    {
        "title": "You're My Sky",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BVD1A_4s.jpg?v=1"
    },
    {
        "title": "Alibi Kuzushi Uketamawarimasu",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Rrw2os.jpg?v=1"
    },
    {
        "title": "Sumika Sumire",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/B7g4zs.jpg?v=1"
    },
    {
        "title": "Lovesickness",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/kAW2zr_4s.jpg?v=1"
    },
    {
        "title": "Fry Me to the Moon",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qr0KK_4s.jpg?v=1"
    },
    {
        "title": "Paternity Tester",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jdXQO_4s.jpg?v=1"
    },
    {
        "title": "Wu Xin: The Monster Killer Season 2",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lEXXJs.jpg?v=1"
    },
    {
        "title": "4 Reasons Why I Hate Christmas",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/64KE0s.jpg?v=1"
    },
    {
        "title": "Gakeppuchi Hotel",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BewVA_4s.jpg?v=1"
    },
    {
        "title": "Sweet 18",
        "year": "2004",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/x4gbrs.jpg?v=1"
    },
    {
        "title": "The Time We Were Not in Love",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/YAWkWs.jpg?v=1"
    },
    {
        "title": "Face Off",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Q53j2s.jpg?v=1"
    },
    {
        "title": "Maybe, Maybe Not",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wwpb1s.jpg?v=1"
    },
    {
        "title": "The Whirlwind Girl Season 2",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/odyPPs.jpg?v=1"
    },
    {
        "title": "Majurat See Nam Pueng",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/oQ4xEs.jpg?v=1"
    },
    {
        "title": "Dok Ruk Rim Tang",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/AB82Xs.jpg?v=1"
    },
    {
        "title": "Secret Love",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/g0q2os.jpg?v=1"
    },
    {
        "title": "The Liar and His Lover",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XZWAgs.jpg?v=1"
    },
    {
        "title": "The Flaming Heart",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/x1lm0_4s.jpg?v=1"
    },
    {
        "title": "Xuan-Yuan Sword: Han Cloud",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/v70vD_4s.jpg?v=1"
    },
    {
        "title": "Astrophile",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qe4e8_4s.jpg?v=1"
    },
    {
        "title": "Don't Lie, Rahee",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dLbRD_4s.jpg?v=1"
    },
    {
        "title": "Mia Archeep",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dex80_4s.jpg?v=1"
    },
    {
        "title": "Ikemen Desu Ne",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2vlXk_4s.jpg?v=1"
    },
    {
        "title": "Must You Go?",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QrXPg_4s.jpg?v=1"
    },
    {
        "title": "Lovers in Bloom",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Qd5Y2s.jpg?v=1"
    },
    {
        "title": "The Evolution of Our Love",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RPe8xs.jpg?v=1"
    },
    {
        "title": "My Best Ex-Boyfriend",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ONZogs.jpg?v=1"
    },
    {
        "title": "Suparburoot Jorm Jon: Duang Jai Kabot",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0VbLk_4s.jpg?v=1"
    },
    {
        "title": "The Starry Night, the Starry Sea Season 2",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/b26yZs.jpg?v=1"
    },
    {
        "title": "For Married Doctress",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XBZVZ_4s.jpg?v=1"
    },
    {
        "title": "Koi Nante, Honki de Yatte Do Suru no?",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rw2Z2_4s.jpg?v=1"
    },
    {
        "title": "Voice: 110 Emergency Control Room",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/052we_4s.jpg?v=1"
    },
    {
        "title": "The King of Blaze",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WbvdDs.jpg?v=1"
    },
    {
        "title": "Wanru's Journey",
        "year": "2023",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/d0yN8D_4s.jpg?v=1"
    },
    {
        "title": "Have a Crush on You",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQEmzr_4s.jpg?v=1"
    },
    {
        "title": "Futmalls.com",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4YlbY_4s.jpg?v=1"
    },
    {
        "title": "Going My Home",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/LE3Pbs.jpg?v=1"
    },
    {
        "title": "Barb Ayuttitham",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rjkLm_4s.jpg?v=1"
    },
    {
        "title": "Queen Dugu",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Qdl6Qs.jpg?v=1"
    },
    {
        "title": "Kindaichi Shonen no Jikenbo 3",
        "year": "2001",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2kNLW_4s.jpg?v=1"
    },
    {
        "title": "Hide and Seek",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/DXAEps.jpg?v=1"
    },
    {
        "title": "Perfect Wedding",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WdJdms.jpg?v=1"
    },
    {
        "title": "Happy Noodle",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2QDRRs.jpg?v=1"
    },
    {
        "title": "Code: Negai no Daisho",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Bdr0XV_4s.jpg?v=1"
    },
    {
        "title": "Aono-kun ni Sawaritai kara Shinitai",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4O5rY_4s.jpg?v=1"
    },
    {
        "title": "Muchaburi!: Watashi ga Shachou ni Naru nante",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1eYz3_4s.jpg?v=1"
    },
    {
        "title": "You Are the Best!",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JBEZms.jpg?v=1"
    },
    {
        "title": "Wonderful Days",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/VNQpms.jpg?v=1"
    },
    {
        "title": "Ghost Host, Ghost House",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0WEWE_4s.jpg?v=1"
    },
    {
        "title": "Seoul Blues: Spin-off",
        "year": "2024",
        "rating": "7.5",
        "image": "https://i.mydramalist.com/JBvx1Y_4s.jpg?v=1"
    },
    {
        "title": "Demi Gods & Semi Devils",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/04rn6s.jpg?v=1"
    },
    {
        "title": "The Starry Night, the Starry Sea",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Lep1rs.jpg?v=1"
    },
    {
        "title": "Battle through the Heaven",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60vlgK_4s.jpg?v=1"
    },
    {
        "title": "Ice Fantasy",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/7n16Rs.jpg?v=1"
    },
    {
        "title": "Tokyo Love Story",
        "year": "1991",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nKNrLs.jpg?v=1"
    },
    {
        "title": "Zero: Ikkaku Senkin Game",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/AYQJEs.jpg?v=1"
    },
    {
        "title": "RESCUE",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/94R6Ms.jpg?v=1"
    },
    {
        "title": "My Fairy Ghost",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Zpm0J_4s.jpg?v=1"
    },
    {
        "title": "My Dear Gangster Oppa",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5JAkb_4s.jpg?v=1"
    },
    {
        "title": "The Fugitive: Plan B",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/VJvyzs.jpg?v=1"
    },
    {
        "title": "Perish in the Name of Love",
        "year": "2003",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/92dgPs.jpg?v=1"
    },
    {
        "title": "Love Songs Love Stories Special: Close To My Heartbeats",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Lpoqrs.jpg?v=1"
    },
    {
        "title": "Vampire Detective",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rVvDps.jpg?v=1"
    },
    {
        "title": "The Master of Revenge",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0476Ns.jpg?v=1"
    },
    {
        "title": "Hua Jai Rua Puang",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Lwq53s.jpg?v=1"
    },
    {
        "title": "Remember My Boy",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jZ4vv_4s.jpg?v=1"
    },
    {
        "title": "Suddenly Seventeen",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Qd8l7s.jpg?v=1"
    },
    {
        "title": "Intern in My Heart",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2w3O3w_4s.jpg?v=1"
    },
    {
        "title": "Life Made Simple",
        "year": "2005",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/MBdoqs.jpg?v=1"
    },
    {
        "title": "Legend of Nine Tails Fox",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2gDAds.jpg?v=1"
    },
    {
        "title": "Love Is in the Air",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Y0YRos.jpg?v=1"
    },
    {
        "title": "Last Hope",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kyLDws.jpg?v=1"
    },
    {
        "title": "Royal Tramp",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Pbd5Ls.jpg?v=1"
    },
    {
        "title": "The Lover",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/X2QrOs.jpg?v=1"
    },
    {
        "title": "Reinoryokusha Odagiri Kyoko no Uso",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z8rZpO_4s.jpg?v=1"
    },
    {
        "title": "The Heiress",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RXD8o_4s.jpg?v=1"
    },
    {
        "title": "Stay with Me",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/OB4pgs.jpg?v=1"
    },
    {
        "title": "Leh Game Rak",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RJ5XYs.jpg?v=1"
    },
    {
        "title": "Hello Dear Ancestors",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/27wVOs.jpg?v=1"
    },
    {
        "title": "My Girlfriend's Boyfriend",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/7ngbys.jpg?v=1"
    },
    {
        "title": "The Tuxedo: Re-Edit Version",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Zn2zY_4s.jpg?v=1"
    },
    {
        "title": "My Lucky Princess",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJgoPk_4s.jpg?v=1"
    },
    {
        "title": "Love & the Emperor",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/43O7rs.jpg?v=1"
    },
    {
        "title": "School Tales the Series",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kee4v_4s.jpg?v=1"
    },
    {
        "title": "Ouran High School Host Club",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nOLQBs.jpg?v=1"
    },
    {
        "title": "Fall in Love with a Scientist",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/42KRQ_4s.jpg?v=1"
    },
    {
        "title": "Ngao Jai",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xPByXs.jpg?v=1"
    },
    {
        "title": "Sud Sai Pan",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ABkj3s.jpg?v=1"
    },
    {
        "title": "Ano Ko no Kodomo",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJzjwk_4s.jpg?v=1"
    },
    {
        "title": "Hyde, Jekyll, Me",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BVQ11_4s.jpg?v=1"
    },
    {
        "title": "Tensou Sentai Goseiger",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vXQ5jp_4s.jpg?v=1"
    },
    {
        "title": "Love @ Seventeen",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JkKVos.jpg?v=1"
    },
    {
        "title": "Ru Hua Ru Tu Season 2",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XY0RZ_4s.jpg?v=1"
    },
    {
        "title": "Koe Girl",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2KRQd_4s.jpg?v=1"
    },
    {
        "title": "Deep Night",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1wLPeK_4s.jpg?v=1"
    },
    {
        "title": "Gold Panning",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RK15g_4s.jpg?v=1"
    },
    {
        "title": "Pure",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6pX3Os.jpg?v=1"
    },
    {
        "title": "Good-bye, Mr. Black",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/7nE7js.jpg?v=1"
    },
    {
        "title": "Love Relationship",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JxDmXs.jpg?v=1"
    },
    {
        "title": "Road to Rebirth",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Rpwez_4s.jpg?v=1"
    },
    {
        "title": "Psychic Princess Season 2",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/W7VB5_4s.jpg?v=1"
    },
    {
        "title": "Wild Romance",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/M7vwNs.jpg?v=1"
    },
    {
        "title": "Resident - 5-nin no Kenshui",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jA1Zrs.jpg?v=1"
    },
    {
        "title": "Wow! Your Little Temper",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BdB041_4s.jpg?v=1"
    },
    {
        "title": "Poisonous Passion",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WZPVO_4s.jpg?v=1"
    },
    {
        "title": "Kabe Sa Doujin Sakka no Neko Yashiki-kun wa Shouninyokkyuu wo Kojiraseteiru",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EK8Ol_4s.jpg?v=1"
    },
    {
        "title": "The Substitute Princess's Love",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQr8lv_4s.jpg?v=1"
    },
    {
        "title": "Fairyland Romance",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4eynVJ_4s.jpg?v=1"
    },
    {
        "title": "Mrs. Cop Season 2",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/04Vj7s.jpg?v=1"
    },
    {
        "title": "The Bequeathed",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQAvWw_4s.jpg?v=1"
    },
    {
        "title": "Kenja no Ai",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/A7P74s.jpg?v=1"
    },
    {
        "title": "Our Interpreter",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qYbXYd_4s.jpg?v=1"
    },
    {
        "title": "Blue Birthday",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60eqEO_4s.jpg?v=1"
    },
    {
        "title": "Addicted Heroin (Uncut Ver.)",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BdNqr5_4s.jpg?v=1"
    },
    {
        "title": "Love in the Tea Garden",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wzPx2_4s.jpg?v=1"
    },
    {
        "title": "9 Seconds: Eternal Time",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/YEx2Ws.jpg?v=1"
    },
    {
        "title": "Delicious Destiny",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nvZ2Bs.jpg?v=1"
    },
    {
        "title": "Bijo to Danshi",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ez6RYs.jpg?v=1"
    },
    {
        "title": "Princess of Lanling King",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/yAYQ4s.jpg?v=1"
    },
    {
        "title": "H.I.T",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nOAxEs.jpg?v=1"
    },
    {
        "title": "I\"s",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BYQ77_4s.jpg?v=1"
    },
    {
        "title": "Girl Next Room: Security Love",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E32dO_4s.jpg?v=1"
    },
    {
        "title": "Meet in Gourmet Food",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RZBrxs.jpg?v=1"
    },
    {
        "title": "Re: Na mo Naki Sekai no End Roll: Half a Year Later",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pR0Rr_4s.jpg?v=1"
    },
    {
        "title": "Hey Pro My Mountain Girl Second Season",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rb05js.jpg?v=1"
    },
    {
        "title": "Spring Waltz",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdbAxs.jpg?v=1"
    },
    {
        "title": "Daisy Luck",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/DX4Xos.jpg?v=1"
    },
    {
        "title": "My Precious",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qYojbP_4s.jpg?v=1"
    },
    {
        "title": "Tokyo Seimenjo",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wLP0b_4s.jpg?v=1"
    },
    {
        "title": "Mute",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6L6x2s.jpg?v=1"
    },
    {
        "title": "I Picked Up a Star on the Road",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/O5ZXxs.jpg?v=1"
    },
    {
        "title": "Yang Di Wei Huan",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/q0zLB_4s.jpg?v=1"
    },
    {
        "title": "Absolute Zero",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Xd4A4X_4s.jpg?v=1"
    },
    {
        "title": "Cupid of Zhou Dynasty",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ww65ns.jpg?v=1"
    },
    {
        "title": "Haken Uranaishi Ataru",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/50x8Vs.jpg?v=1"
    },
    {
        "title": "Ultraman R/B",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nd5bLs.jpg?v=1"
    },
    {
        "title": "Ashita no Yakusoku",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RPvVPs.jpg?v=1"
    },
    {
        "title": "100% Era",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EyqL5_4s.jpg?v=1"
    },
    {
        "title": "Bangkok Bachelors",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z7qAWs.jpg?v=1"
    },
    {
        "title": "Romance, Talking",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kY1jgs.jpg?v=1"
    },
    {
        "title": "Bump Off Lover",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WdBgPs.jpg?v=1"
    },
    {
        "title": "Otenki Onee-san",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBXkRs.jpg?v=1"
    },
    {
        "title": "I Am Sorry, I Love You",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xj4J0s.jpg?v=1"
    },
    {
        "title": "Zero no Shinjitsu",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/knAKk_4s.jpg?v=1"
    },
    {
        "title": "Love at First Night",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5JQvz_4s.jpg?v=1"
    },
    {
        "title": "All About Secrets",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XbyZqs.jpg?v=1"
    },
    {
        "title": "Hellbound Season 2",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/PxNq13_4s.jpg?v=1"
    },
    {
        "title": "Eye in the Sky",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wOXOJs.jpg?v=1"
    },
    {
        "title": "The Most Beautiful You in the World",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6Zxqj_4s.jpg?v=1"
    },
    {
        "title": "Yellow",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/q2ln5s.jpg?v=1"
    },
    {
        "title": "Itsuka Hi no Ataru Basho de",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ae1NQs.jpg?v=1"
    },
    {
        "title": "Summer Guys",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0jERk_4s.jpg?v=1"
    },
    {
        "title": "The Dangerous Lover",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kAY3PO_4s.jpg?v=1"
    },
    {
        "title": "Stay",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BByn5s.jpg?v=1"
    },
    {
        "title": "Doubtful Victory",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/OrD4ds.jpg?v=1"
    },
    {
        "title": "\"Watashi wo Moratte\": Tsuioku Hen",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4erz0w_4s.jpg?v=1"
    },
    {
        "title": "The Rainbow in Our Memory",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/R6glr_4s.jpg?v=1"
    },
    {
        "title": "On the First Beat",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GLwmLs.jpg?v=1"
    },
    {
        "title": "Xiang Long",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wwJ3ks.jpg?v=1"
    },
    {
        "title": "Bangkok Breaking",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6VK7p_4s.jpg?v=1"
    },
    {
        "title": "Master Devil Do Not Kiss Me",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/B3g4zs.jpg?v=1"
    },
    {
        "title": "Sealed with a Kiss",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Ek2kls.jpg?v=1"
    },
    {
        "title": "Prom Pissawat",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p6lZn_4s.jpg?v=1"
    },
    {
        "title": "Atami no Sousakan",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9ry7as.jpg?v=1"
    },
    {
        "title": "Love Playlist Pilot",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EyJOb_4s.jpg?v=1"
    },
    {
        "title": "Yanxi Palace: Princess Adventures",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1wOvy5_4s.jpg?v=1"
    },
    {
        "title": "Enslaved by Love",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdEZ8Z_4s.jpg?v=1"
    },
    {
        "title": "Love Mate",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BdBgXb_4s.jpg?v=1"
    },
    {
        "title": "Mood Indigo",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d4K45s.jpg?v=1"
    },
    {
        "title": "Tenchuu-Yami no Shiokinin",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/g05p1s.jpg?v=1"
    },
    {
        "title": "Talay Luang",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6dlJK_4s.jpg?v=1"
    },
    {
        "title": "Friendly Fire",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2bdER_4s.jpg?v=1"
    },
    {
        "title": "A Step into the Past",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/bKvvws.jpg?v=1"
    },
    {
        "title": "Tatoe Anata wo Wasurete mo",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BdqWDl_4s.jpg?v=1"
    },
    {
        "title": "Khun Chai Tharathorn",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XkPgg_4s.jpg?v=1"
    },
    {
        "title": "Govengers",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/25KgR_4s.jpg?v=1"
    },
    {
        "title": "Second to Last Love",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Jp5lms.jpg?v=1"
    },
    {
        "title": "Fah Fak Ruk",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EXokm_4s.jpg?v=1"
    },
    {
        "title": "Golden Rainbow",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5YVOs.jpg?v=1"
    },
    {
        "title": "Stay Still",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1wOYL6_4s.jpg?v=1"
    },
    {
        "title": "Love Scene Number",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6dKxK_4s.jpg?v=1"
    },
    {
        "title": "My Lovely Wife",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBQOXV_4s.jpg?v=1"
    },
    {
        "title": "My Love from the Ocean",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Bqy3zs.jpg?v=1"
    },
    {
        "title": "A Little Love Song",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0pvA6s.jpg?v=1"
    },
    {
        "title": "Jao Sao Chapor Kit",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Q20ZYs.jpg?v=1"
    },
    {
        "title": "You Complete Me",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2w4zew_4s.jpg?v=1"
    },
    {
        "title": "The Devil Punisher",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6Ngnj_4s.jpg?v=1"
    },
    {
        "title": "Blossom in Heart",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/mV3qqs.jpg?v=1"
    },
    {
        "title": "Life after Life",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBRrqo_4s.jpg?v=1"
    },
    {
        "title": "Fake Phoenixes",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/w0AWAs.jpg?v=1"
    },
    {
        "title": "Fate",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4YW8Q_4s.jpg?v=1"
    },
    {
        "title": "Dai Byoin Senkyo",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/212nd_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Playful Comm-Arts",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JkW3ws.jpg?v=1"
    },
    {
        "title": "O-Negative",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jrY1rs.jpg?v=1"
    },
    {
        "title": "Jikou Keisatsu",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/94egKs.jpg?v=1"
    },
    {
        "title": "Nowhere Man",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RZpPPs.jpg?v=1"
    },
    {
        "title": "The Way We Were",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/AYpX4s.jpg?v=1"
    },
    {
        "title": "The Night Is Still Young",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/738eBr_4s.jpg?v=1"
    },
    {
        "title": "A Pillow Case of Mystery",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GqXZ8s.jpg?v=1"
    },
    {
        "title": "Young Blood Agency",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/72wZDs.jpg?v=1"
    },
    {
        "title": "The Legend of Jin Yan",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jb43z_4s.jpg?v=1"
    },
    {
        "title": "Lover or Stranger",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p1ezQ_4s.jpg?v=1"
    },
    {
        "title": "Utsukushii Rinjin",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nORRQs.jpg?v=1"
    },
    {
        "title": "Jojo's World",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/elrrWs.jpg?v=1"
    },
    {
        "title": "When We Meet",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/eOzRK_4s.jpg?v=1"
    },
    {
        "title": "What's Wrong with Secretary Kim",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJpqbA_4s.jpg?v=1"
    },
    {
        "title": "Unkind Women",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JjroXs.jpg?v=1"
    },
    {
        "title": "Sorry Not Sorry",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/NdN8nJ_4s.jpg?v=1"
    },
    {
        "title": "Watashi no Oyome-kun",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBBwzx_4s.jpg?v=1"
    },
    {
        "title": "Pretty Man Season 2",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QNlb2s.jpg?v=1"
    },
    {
        "title": "Ru: Taiwan Express",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/j4QWBs.jpg?v=1"
    },
    {
        "title": "Hot Mom",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Rpo86_4s.jpg?v=1"
    },
    {
        "title": "Heartbeat Love",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BV7dR_4s.jpg?v=1"
    },
    {
        "title": "Summer Fever",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/94bmds.jpg?v=1"
    },
    {
        "title": "Last Scandal",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9r4mMs.jpg?v=1"
    },
    {
        "title": "A Daughter Just Like You",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/YAXles.jpg?v=1"
    },
    {
        "title": "4-punkan no Marigold",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rbrQps.jpg?v=1"
    },
    {
        "title": "Switch Girl!!",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5Wkzs.jpg?v=1"
    },
    {
        "title": "Your Imagination Becomes Reality",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4kZ6ds.jpg?v=1"
    },
    {
        "title": "Death Note NEW GENERATION",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nvpVNs.jpg?v=1"
    },
    {
        "title": "The IDOLM@STER.KR",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Qd5o5s.jpg?v=1"
    },
    {
        "title": "Dicey Business",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60z14j_4s.jpg?v=1"
    },
    {
        "title": "Survival Wedding",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1eYv7_4s.jpg?v=1"
    },
    {
        "title": "Mermaid Legend",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p2Ezrs.jpg?v=1"
    },
    {
        "title": "The Endless Love",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z4KxOs.jpg?v=1"
    },
    {
        "title": "Mutsu: Mieru Me",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/31w8ds.jpg?v=1"
    },
    {
        "title": "Beginners!",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/B0d5bs.jpg?v=1"
    },
    {
        "title": "Three Dads One Mom",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJLbns.jpg?v=1"
    },
    {
        "title": "Kon La Kop Fah",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nEgzLs.jpg?v=1"
    },
    {
        "title": "Five Fingers",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9YqKos.jpg?v=1"
    },
    {
        "title": "I See You",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Jp4zXs.jpg?v=1"
    },
    {
        "title": "What Happened in Bali",
        "year": "2004",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wLAdJ_4s.jpg?v=1"
    },
    {
        "title": "Yamada-kun to 7-nin no Majo",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4eqjds.jpg?v=1"
    },
    {
        "title": "Rich Family's Son",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JxRjYs.jpg?v=1"
    },
    {
        "title": "Fall in Love with a Fox",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wnDQk_4s.jpg?v=1"
    },
    {
        "title": "Real:Time:Love",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rOnj7s.jpg?v=1"
    },
    {
        "title": "Given",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Xk2Rn_4s.jpg?v=1"
    },
    {
        "title": "Kishiryu Sentai Ryusoulger",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4egKz1_4s.jpg?v=1"
    },
    {
        "title": "En of Love: Love Mechanics",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RkQxPs.jpg?v=1"
    },
    {
        "title": "U-Prince: The Extroverted Humanist",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/o70dEs.jpg?v=1"
    },
    {
        "title": "Mr. Insomnia Waiting for Love",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdAV4X_4s.jpg?v=1"
    },
    {
        "title": "Fatal Allure",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/3o2PdR_4s.jpg?v=1"
    },
    {
        "title": "Kaette Kitara Ippai Shite.",
        "year": "2023",
        "rating": "7.4",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Oshi ga Joshi ni Narimashite",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vXQrXB_4s.jpg?v=1"
    },
    {
        "title": "Notification",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Wb38ps.jpg?v=1"
    },
    {
        "title": "Dao Kiang Duen",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ZRozqs.jpg?v=1"
    },
    {
        "title": "Perfect Family",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wn5n7_4s.jpg?v=1"
    },
    {
        "title": "Fah Jarod Sai",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wE57s.jpg?v=1"
    },
    {
        "title": "Frankly Speaking",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJXBqQ_4s.jpg?v=1"
    },
    {
        "title": "Sawan Biang",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ZgRmJs.jpg?v=1"
    },
    {
        "title": "Romance with Blind Master",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WY4yX_4s.jpg?v=1"
    },
    {
        "title": "Sisyphus",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4qbvd_4s.jpg?v=1"
    },
    {
        "title": "The Virus",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQlgBs.jpg?v=1"
    },
    {
        "title": "Society Obsessed with Love",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E8dDls.jpg?v=1"
    },
    {
        "title": "If I Can Love You So",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2glrds.jpg?v=1"
    },
    {
        "title": "Majo Saiban",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Mgdoas.jpg?v=1"
    },
    {
        "title": "Cold Blooded Intern",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdZbjx_4s.jpg?v=1"
    },
    {
        "title": "Crime Squad",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9pm8Gs.jpg?v=1"
    },
    {
        "title": "Line Walker: Bull Fight",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1k8ZR_4s.jpg?v=1"
    },
    {
        "title": "The Pursuit of Happiness",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nO052s.jpg?v=1"
    },
    {
        "title": "Double Life",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5ge6W_4s.jpg?v=1"
    },
    {
        "title": "Be Strong Geum Soon",
        "year": "2005",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/x4v2Xs.jpg?v=1"
    },
    {
        "title": "Secret Playlist",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60nK0K_4s.jpg?v=1"
    },
    {
        "title": "Umareru.",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BgrZV_4s.jpg?v=1"
    },
    {
        "title": "Revolutionary Love",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/w0Q8gs.jpg?v=1"
    },
    {
        "title": "A Business Proposal",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rNmeBZ_4s.jpg?v=1"
    },
    {
        "title": "What Is Love",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/mOo7bs.jpg?v=1"
    },
    {
        "title": "My Husky Boyfriend",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJPO2g_4s.jpg?v=1"
    },
    {
        "title": "Bite Sisters",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BW8Jb_4s.jpg?v=1"
    },
    {
        "title": "Nevertheless,",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/w6jkA_4s.jpg?v=1"
    },
    {
        "title": "One More Time",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4qvkK_4s.jpg?v=1"
    },
    {
        "title": "Miracle",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rKRyZ_4s.jpg?v=1"
    },
    {
        "title": "Raise de wa Chanto Shimasu Season 3",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dPNwD_4s.jpg?v=1"
    },
    {
        "title": "Cubic",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d0DrDs.jpg?v=1"
    },
    {
        "title": "Incomparable Beauty",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1woKvd_4s.jpg?v=1"
    },
    {
        "title": "Father's House",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9rN2Es.jpg?v=1"
    },
    {
        "title": "Fairy from the Painting",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vkyKB_4s.jpg?v=1"
    },
    {
        "title": "Playing House",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQ2bnJ_4s.jpg?v=1"
    },
    {
        "title": "A Different Mr. Xiao",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5YJ7z_4s.jpg?v=1"
    },
    {
        "title": "Which Star Are You From?",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/nBVyWs.jpg?v=1"
    },
    {
        "title": "Luead Mungkorn: Singh",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/W6gpp_4s.jpg?v=1"
    },
    {
        "title": "The Woman Who Still Wants to Marry",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wXrWs.jpg?v=1"
    },
    {
        "title": "Long For You 2",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z0Qy8s.jpg?v=1"
    },
    {
        "title": "Secret Garden",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6nAmgs.jpg?v=1"
    },
    {
        "title": "Princess Jieyou",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/04YrOs.jpg?v=1"
    },
    {
        "title": "Never Give Up, Dodo",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Gq7xds.jpg?v=1"
    },
    {
        "title": "Doubles - Futari no Keiji",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/VXVL0s.jpg?v=1"
    },
    {
        "title": "Gourmet",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/akAzms.jpg?v=1"
    },
    {
        "title": "Golden Bride",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9pdKbs.jpg?v=1"
    },
    {
        "title": "Mr. Swimmer",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/egBrEs.jpg?v=1"
    },
    {
        "title": "Kono yo no Hate",
        "year": "1994",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Mjw3Bs.jpg?v=1"
    },
    {
        "title": "Swimming Battle",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lOKg6s.jpg?v=1"
    },
    {
        "title": "Princess at Large Season 2",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p4E3Qs.jpg?v=1"
    },
    {
        "title": "To My Beautiful Woo Ri",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vXNYxD_4s.jpg?v=1"
    },
    {
        "title": "Heartbeat Broadcasting Accident",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/r6vLp_4s.jpg?v=1"
    },
    {
        "title": "Fun Fueng",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kyW0Os.jpg?v=1"
    },
    {
        "title": "Bad Boys J",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60Ezds.jpg?v=1"
    },
    {
        "title": "Saboriman Kantarou",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xk2Lrs.jpg?v=1"
    },
    {
        "title": "Material Queen",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9vXxes.jpg?v=1"
    },
    {
        "title": "Beauty of Resilience",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qYQpVK_4s.jpg?v=1"
    },
    {
        "title": "Yonder",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QDO55_4s.jpg?v=1"
    },
    {
        "title": "Q Series: Close Your Eyes Before It's Dark",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/A7mkgs.jpg?v=1"
    },
    {
        "title": "Hana Kimi",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GQ62Ms.jpg?v=1"
    },
    {
        "title": "The Coolest World",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p6zOy_4s.jpg?v=1"
    },
    {
        "title": "U-Prince: The Gentle Vet",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dzDVes.jpg?v=1"
    },
    {
        "title": "Oniichan, Gacha",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rRXLjs.jpg?v=1"
    },
    {
        "title": "Replay: The Moment When It Starts Again",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BZ8KR_4s.jpg?v=1"
    },
    {
        "title": "Five",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/oVJAvs.jpg?v=1"
    },
    {
        "title": "Affairs of a Drama Queen",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d87dW_4s.jpg?v=1"
    },
    {
        "title": "Like Love",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/X2Wmns.jpg?v=1"
    },
    {
        "title": "Khing Kor Rar Khar Kor Rang",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qwJ52s.jpg?v=1"
    },
    {
        "title": "Oh! My Lady",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RB2Bgs.jpg?v=1"
    },
    {
        "title": "Dao Kiao Duen",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JBzLps.jpg?v=1"
    },
    {
        "title": "Sunny Happiness",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9rNWDs.jpg?v=1"
    },
    {
        "title": "Ngao Asoke",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/lJDXvs.jpg?v=1"
    },
    {
        "title": "The Other Half of Me and You",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBQVmz_4s.jpg?v=1"
    },
    {
        "title": "Love at Second Sight",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0wBbYO_4s.jpg?v=1"
    },
    {
        "title": "Blue Veins",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XAnkqs.jpg?v=1"
    },
    {
        "title": "Please Be Married",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XmerO_4s.jpg?v=1"
    },
    {
        "title": "3 Noom Nuer Tong",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/3olyes.jpg?v=1"
    },
    {
        "title": "Dok Go Bin Is Updating",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2XRgR_4s.jpg?v=1"
    },
    {
        "title": "Ossan's Love: In the Sky",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Bx81Vs.jpg?v=1"
    },
    {
        "title": "When We Were Young",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Y8mBgs.jpg?v=1"
    },
    {
        "title": "Tong: Memories",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2dVP2s.jpg?v=1"
    },
    {
        "title": "Sweet Stranger and Me",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/5d4O4s.jpg?v=1"
    },
    {
        "title": "Plerng Phrang Thian",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2xR5ds.jpg?v=1"
    },
    {
        "title": "It's Okay to Be Sensitive Season 3",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kr6zO_4s.jpg?v=1"
    },
    {
        "title": "Private Lives",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6K5dp_4s.jpg?v=1"
    },
    {
        "title": "Legend of Two Sisters in the Chaos",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dWbqA_4s.jpg?v=1"
    },
    {
        "title": "Prince Coffee Lab",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/8pj0ls.jpg?v=1"
    },
    {
        "title": "Under the Canopy of Love",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/aE5Nbs.jpg?v=1"
    },
    {
        "title": "The Equator Man",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GNvlEs.jpg?v=1"
    },
    {
        "title": "Andante",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Nvw7Es.jpg?v=1"
    },
    {
        "title": "IQ246: Kareinaru Jikenbo",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/12j2R_4s.jpg?v=1"
    },
    {
        "title": "Go! My Hero!",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0qVeY_4s.jpg?v=1"
    },
    {
        "title": "Airport Strikers",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2qnOws.jpg?v=1"
    },
    {
        "title": "Neung Nai Suang",
        "year": "2005",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p2Rdns.jpg?v=1"
    },
    {
        "title": "Miss Devil: HR's Devil Mako Tsubaki",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/yEA04s.jpg?v=1"
    },
    {
        "title": "Secret Love",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/3oZQQV_4s.jpg?v=1"
    },
    {
        "title": "Dragon Day, You're Dead Season 3",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Wx4bD_4s.jpg?v=1"
    },
    {
        "title": "Quarantine Stories",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rxXD7s.jpg?v=1"
    },
    {
        "title": "Transit Girls",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/oEQWNs.jpg?v=1"
    },
    {
        "title": "To The X Who Hated Me: E Jae X Woo Ri",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wz73P_4s.jpg?v=1"
    },
    {
        "title": "A Flower on the Continent",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kAqmjr_4s.jpg?v=1"
    },
    {
        "title": "Song Naree",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wQdrp_4s.jpg?v=1"
    },
    {
        "title": "Once Upon a Time in Saengchori",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/MA2Eas.jpg?v=1"
    },
    {
        "title": "Host Sozoku Shichaimashita",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJ1QEW_4s.jpg?v=1"
    },
    {
        "title": "What If",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E5vPzQ_4s.jpg?v=1"
    },
    {
        "title": "Ms. Perfect",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/14yyQs.jpg?v=1"
    },
    {
        "title": "Wednesday Club",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vXOJNZ_4s.jpg?v=1"
    },
    {
        "title": "Usokon",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60rNOp_4s.jpg?v=1"
    },
    {
        "title": "Sunao ni Narenakute",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jy4vys.jpg?v=1"
    },
    {
        "title": "Akai Ito",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vX1YZs.jpg?v=1"
    },
    {
        "title": "Ruse of Engagement",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0wRO4s.jpg?v=1"
    },
    {
        "title": "Alive",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RrB4gs.jpg?v=1"
    },
    {
        "title": "Ghetto Justice Season 2",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pdV5wb_4s.jpg?v=1"
    },
    {
        "title": "My Little Baby",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pBXgys.jpg?v=1"
    },
    {
        "title": "Governor's Secret Love",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBZ2jo_4s.jpg?v=1"
    },
    {
        "title": "Buang Hong",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/R0vdPs.jpg?v=1"
    },
    {
        "title": "Love Keeps Going",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/GPx7Xs.jpg?v=1"
    },
    {
        "title": "Taiyo to Umi no Kyoshitsu",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/92RR9s.jpg?v=1"
    },
    {
        "title": "Bargain",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XWgdq_4s.jpg?v=1"
    },
    {
        "title": "Kaibutsu kun",
        "year": "2010",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EOqJ0_4s.jpg?v=1"
    },
    {
        "title": "Famous Princesses",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Kp3Lqs.jpg?v=1"
    },
    {
        "title": "YOUniverse",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/odooOs.jpg?v=1"
    },
    {
        "title": "Two Worlds",
        "year": "2024",
        "rating": "7.4",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Princess Hours",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XZ0vqs.jpg?v=1"
    },
    {
        "title": "In Between",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JBolms.jpg?v=1"
    },
    {
        "title": "Why Why Love",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9610as.jpg?v=1"
    },
    {
        "title": "Mars: Zero no Kakumei",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rNbxY7_4s.jpg?v=1"
    },
    {
        "title": "My Damn Business",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pd3QJr_4s.jpg?v=1"
    },
    {
        "title": "The Fox Fairy",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/REDmE_4s.jpg?v=1"
    },
    {
        "title": "GARO: Versus Road",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/eVBwns.jpg?v=1"
    },
    {
        "title": "City of Stars",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wJK1LJ_4s.jpg?v=1"
    },
    {
        "title": "Legend of Yun Qian",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dBZeK_4s.jpg?v=1"
    },
    {
        "title": "House of Bluebird",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xwA8r_4s.jpg?v=1"
    },
    {
        "title": "Toshi no Sakon",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/R4QQz_4s.jpg?v=1"
    },
    {
        "title": "Kokoro ga Pokitto ne",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/VbOVJs.jpg?v=1"
    },
    {
        "title": "Fall in Love With Me",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/B7w55s.jpg?v=1"
    },
    {
        "title": "Renai no Susume",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4e0Y16_4s.jpg?v=1"
    },
    {
        "title": "Timeless Love",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xzJVr_4s.jpg?v=1"
    },
    {
        "title": "Suki Suki Wan Wan!",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/28xpW_4s.jpg?v=1"
    },
    {
        "title": "Ase to Sekken",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2yPZR_4s.jpg?v=1"
    },
    {
        "title": "Cain and Abel",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/DxxJNs.jpg?v=1"
    },
    {
        "title": "Feast of the Gods",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/l0E0Qs.jpg?v=1"
    },
    {
        "title": "Busu no Hitomi ni Koishiteru",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/vdYnqs.jpg?v=1"
    },
    {
        "title": "GARO: The One Who Shines in the Darkness",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/MBYz1s.jpg?v=1"
    },
    {
        "title": "I Have a Smart Doctor Wife",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBQO2Y_4s.jpg?v=1"
    },
    {
        "title": "Three Brothers",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kAzEdg_4s.jpg?v=1"
    },
    {
        "title": "Amazing Girls",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wOOLR_4s.jpg?v=1"
    },
    {
        "title": "Garo: Makai no Hana",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Z8d5Os.jpg?v=1"
    },
    {
        "title": "Pandora: Beneath the Paradise",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2wr6v7_4s.jpg?v=1"
    },
    {
        "title": "Master of the House",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1wlgk6_4s.jpg?v=1"
    },
    {
        "title": "Tonari no Seki-Kun to Rumi-Chan no Jishou",
        "year": "2015",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/L2rPxs.jpg?v=1"
    },
    {
        "title": "The Expect Love",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBkyEP_4s.jpg?v=1"
    },
    {
        "title": "Joosama ni Sasagu Kusuriyubi",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0w4oye_4s.jpg?v=1"
    },
    {
        "title": "Magic Star",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/m71b1s.jpg?v=1"
    },
    {
        "title": "Modern Love Tokyo",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Q3W6v_4s.jpg?v=1"
    },
    {
        "title": "Immortal Destiny",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4erOgZ_4s.jpg?v=1"
    },
    {
        "title": "Anonymous: Keishicho \u201dYubisatsujin\u201d Taisakushitsu",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/dezwz_4s.jpg?v=1"
    },
    {
        "title": "Golden Time",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/JBw0ws.jpg?v=1"
    },
    {
        "title": "Watashitachi ga Koisuru Riyu",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/DkKLnD_4s.jpg?v=1"
    },
    {
        "title": "Teppachi!",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XLXAJ_4s.jpg?v=1"
    },
    {
        "title": "Samee Tee Tra",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4e8ZYs.jpg?v=1"
    },
    {
        "title": "The Prince of Tennis Season 2",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/aEm7as.jpg?v=1"
    },
    {
        "title": "Kirawareru Yuuki",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xEneqs.jpg?v=1"
    },
    {
        "title": "Tazza",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qW6BPs.jpg?v=1"
    },
    {
        "title": "Special Lady",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Xmp6g_4s.jpg?v=1"
    },
    {
        "title": "First Love Story Season 2",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RWVrVs.jpg?v=1"
    },
    {
        "title": "Hoshi Kara Kita Anata",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pP7eD_4s.jpg?v=1"
    },
    {
        "title": "Beauty from Heart",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/qEABP_4s.jpg?v=1"
    },
    {
        "title": "Please Be Married Season 2",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4Q63Q_4s.jpg?v=1"
    },
    {
        "title": "Rakuen",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/m7WD0s.jpg?v=1"
    },
    {
        "title": "Biscuit Teacher and Star Candy",
        "year": "2005",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/922k9s.jpg?v=1"
    },
    {
        "title": "Nippon Noir: Detective Y's Rebellion",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rb6AZs.jpg?v=1"
    },
    {
        "title": "My Too Perfect Sons",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/9mOVPs.jpg?v=1"
    },
    {
        "title": "Kao ni Doro wo Nuru",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/XdBV2Z_4s.jpg?v=1"
    },
    {
        "title": "Love in the Apocalypse",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WP7VbW_4s.jpg?v=1"
    },
    {
        "title": "IRIS 2",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/az26ys.jpg?v=1"
    },
    {
        "title": "Alice",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RXo6E_4s.jpg?v=1"
    },
    {
        "title": "Captain Han",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d0R61z_4s.jpg?v=1"
    },
    {
        "title": "Answer - Keishichou Kenshou Sousakan",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/mkdXJs.jpg?v=1"
    },
    {
        "title": "Hungry!",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJpE5s.jpg?v=1"
    },
    {
        "title": "Beauty and Mr. Romantic",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/602ewO_4s.jpg?v=1"
    },
    {
        "title": "GG Precinct",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/60KP5d_4s.jpg?v=1"
    },
    {
        "title": "Love (ft. Marriage and Divorce) Season 2",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pNEYn_4s.jpg?v=1"
    },
    {
        "title": "Hometown",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/r6Y42_4s.jpg?v=1"
    },
    {
        "title": "Wars of In-Laws Season 2",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/a85pWs.jpg?v=1"
    },
    {
        "title": "Drag, I Love You",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0DZN4_4s.jpg?v=1"
    },
    {
        "title": "See You After Quarantine?",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/W6Dz5_4s.jpg?v=1"
    },
    {
        "title": "The Bride of Habaek",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Or17ds.jpg?v=1"
    },
    {
        "title": "La Pluie",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Bddn86_4s.jpg?v=1"
    },
    {
        "title": "Higashino Keigo Mysteries",
        "year": "2012",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/MRJpgs.jpg?v=1"
    },
    {
        "title": "Love Family",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBn7zs.jpg?v=1"
    },
    {
        "title": "Smiling Pasta",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/oQ2WPs.jpg?v=1"
    },
    {
        "title": "Practice Daughter",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RBRPWx_4s.jpg?v=1"
    },
    {
        "title": "Glitch",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QDEYg_4s.jpg?v=1"
    },
    {
        "title": "The Prince of Tennis",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/MAKE9s.jpg?v=1"
    },
    {
        "title": "On Air",
        "year": "2008",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Rr16rs.jpg?v=1"
    },
    {
        "title": "Jao Sao Chang Yon",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/mVqd1s.jpg?v=1"
    },
    {
        "title": "Motel California",
        "year": "2025",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ABo2bL_4s.jpg?v=1"
    },
    {
        "title": "Never Too Late",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/Bdq8K6_4s.jpg?v=1"
    },
    {
        "title": "The Sweetest Secret",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EXxob_4s.jpg?v=1"
    },
    {
        "title": "This Young Hero Is a Little Cold",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rPKrg_4s.jpg?v=1"
    },
    {
        "title": "Cooking Crush",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/eYvAyY_4s.jpg?v=1"
    },
    {
        "title": "Switch of Fate",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/V4NQvs.jpg?v=1"
    },
    {
        "title": "The King of Romance",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/KxmdXs.jpg?v=1"
    },
    {
        "title": "Hello, My Noisy MP3",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ZYrpL_4s.jpg?v=1"
    },
    {
        "title": "Love's Lies",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0OvXrs.jpg?v=1"
    },
    {
        "title": "Edo Moiselle: Reiwa de Koi, Itashinsu",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/r73NE_4s.jpg?v=1"
    },
    {
        "title": "Peacock in Wonderland",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4eDoyr_4s.jpg?v=1"
    },
    {
        "title": "Amazing Sisters",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/RNP5Y_4s.jpg?v=1"
    },
    {
        "title": "Love Trap",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/mOPV0Q_4s.jpg?v=1"
    },
    {
        "title": "Negotiator",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BqrOzs.jpg?v=1"
    },
    {
        "title": "My Eternal Star",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/d0rezb_4s.jpg?v=1"
    },
    {
        "title": "Gift",
        "year": "1997",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/QJx14s.jpg?v=1"
    },
    {
        "title": "Maya Tawan",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/l0z0vs.jpg?v=1"
    },
    {
        "title": "Game Rak Ao Keun",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/2gN2Vs.jpg?v=1"
    },
    {
        "title": "Cheese in the Trap",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/YEKpos.jpg?v=1"
    },
    {
        "title": "Border Town Prodigal",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/menlQs.jpg?v=1"
    },
    {
        "title": "Trial Marriage",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/W823p_4s.jpg?v=1"
    },
    {
        "title": "Buang Ruk Gamathep",
        "year": "2009",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ABKBEs.jpg?v=1"
    },
    {
        "title": "Jao Sao Salatan",
        "year": "2014",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/yWvg4s.jpg?v=1"
    },
    {
        "title": "Blooming",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jQlj88_4s.jpg?v=1"
    },
    {
        "title": "Stick to the Script!",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJPWw6_4s.jpg?v=1"
    },
    {
        "title": "God of Lost Fantasy",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4qmK1_4s.jpg?v=1"
    },
    {
        "title": "My Name Is Zhao Wu Di",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/E52V17_4s.jpg?v=1"
    },
    {
        "title": "Secret Boutique",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/kEJRjs.jpg?v=1"
    },
    {
        "title": "Yubikoi: Kimi ni Okuru Message",
        "year": "2013",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ExANbs.jpg?v=1"
    },
    {
        "title": "Control - Hanzai Shinri Sousa",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/BpEo6s.jpg?v=1"
    },
    {
        "title": "I Want to Become a Hard Persimmon",
        "year": "2007",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/mo0pms.jpg?v=1"
    },
    {
        "title": "Unasked Family",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kElPws.jpg?v=1"
    },
    {
        "title": "My Robot Boyfriend",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/WN0jPs.jpg?v=1"
    },
    {
        "title": "The Everlasting Love",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/x4jVpz_4s.jpg?v=1"
    },
    {
        "title": "Good Morning Call",
        "year": "2016",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/X4Dlps.jpg?v=1"
    },
    {
        "title": "Woof & Meow \u2013 Do you Love Me?",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pPmZE_4s.jpg?v=1"
    },
    {
        "title": "The Vineyard Man",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/0w1l7s.jpg?v=1"
    },
    {
        "title": "My Idol",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/DXPOys.jpg?v=1"
    },
    {
        "title": "My Dear Loser: Happy Ever After",
        "year": "2017",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/1o62ds.jpg?v=1"
    },
    {
        "title": "You Complete Me",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/4eYwxK_4s.jpg?v=1"
    },
    {
        "title": "Reflection of You",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/p6pwy_4s.jpg?v=1"
    },
    {
        "title": "Guardians of the Ancient Oath",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/xgbxrs.jpg?v=1"
    },
    {
        "title": "Bright as the Moon",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6WWeg_4s.jpg?v=1"
    },
    {
        "title": "Jungle Fish 2",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GqYO8s.jpg?v=1"
    },
    {
        "title": "Hamaru Otoko ni Keritai Onna",
        "year": "2023",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/jOevz_4s.jpg?v=1"
    },
    {
        "title": "Love Distance",
        "year": "2020",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/pz44Q_4s.jpg?v=1"
    },
    {
        "title": "LADY - Saigo no Hanzai Profile",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/6pbzgs.jpg?v=1"
    },
    {
        "title": "The Great Merchant",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/M73qLs.jpg?v=1"
    },
    {
        "title": "Fates & Furies",
        "year": "2018",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/wwnkJs.jpg?v=1"
    },
    {
        "title": "A Journey Called Life",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rN5w0Z_4s.jpg?v=1"
    },
    {
        "title": "Creating Destiny",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GQw4as.jpg?v=1"
    },
    {
        "title": "Follow Saretara Owari",
        "year": "2019",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/EA2rz_4s.jpg?v=1"
    },
    {
        "title": "The Vampires",
        "year": "2022",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/rK5oD_4s.jpg?v=1"
    },
    {
        "title": "Ishitachi no Renai Jijo",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pWkwQs.jpg?v=1"
    },
    {
        "title": "Hearts of Nineteen",
        "year": "2006",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/ABpW4s.jpg?v=1"
    },
    {
        "title": "Love Returns",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/55Dv0s.jpg?v=1"
    },
    {
        "title": "Deka Wanko",
        "year": "2011",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/X6okd_4s.jpg?v=1"
    },
    {
        "title": "Honey, Don't Run Away Season 2",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jJNvJ_4s.jpg?v=1"
    },
    {
        "title": "The Divine Healer",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eYR7AY_4s.jpg?v=1"
    },
    {
        "title": "The Defected",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/xQ0KEs.jpg?v=1"
    },
    {
        "title": "Otousan to Yobasete",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/OBldgs.jpg?v=1"
    },
    {
        "title": "Devil-in-Law",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/07kr4_4s.jpg?v=1"
    },
    {
        "title": "Meloholic",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/oV54xs.jpg?v=1"
    },
    {
        "title": "Because of You",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Xr0pxs.jpg?v=1"
    },
    {
        "title": "Please Teach Me",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJmY6g_4s.jpg?v=1"
    },
    {
        "title": "Switch On",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RlVYz_4s.jpg?v=1"
    },
    {
        "title": "Back to the 2008",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RyDJE_4s.jpg?v=1"
    },
    {
        "title": "Hard Noble Lady",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x4WglE_4s.jpg?v=1"
    },
    {
        "title": "The Sound of Your Heart: Reboot",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/404ors.jpg?v=1"
    },
    {
        "title": "Kha Khong Khon",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/PxrRLs.jpg?v=1"
    },
    {
        "title": "Office Watch Season 3",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JKvjYs.jpg?v=1"
    },
    {
        "title": "Wong Wien Hua Jai",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4BbvK_4s.jpg?v=1"
    },
    {
        "title": "Fragrance of the First Flower",
        "year": "2021",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/w4LVb_4s.jpg?v=1"
    },
    {
        "title": "Princess at Large Season 3",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WvYeRs.jpg?v=1"
    },
    {
        "title": "A Talented Girl Grows Up",
        "year": "2024",
        "rating": "7.4",
        "image": "https://i.mydramalist.com/60lLbO_4s.jpg?v=1"
    },
    {
        "title": "Bride's Revenge",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQENPJ_4s.jpg?v=1"
    },
    {
        "title": "Legend of the Demigods",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wdAEg_4s.jpg?v=1"
    },
    {
        "title": "Vacation of Love",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/r73ep_4s.jpg?v=1"
    },
    {
        "title": "Yoiko no Mikata",
        "year": "2003",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/l0DNB4_4s.jpg?v=1"
    },
    {
        "title": "Across the Sky",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5YY1m_4s.jpg?v=1"
    },
    {
        "title": "The Queen of Office",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GJODXs.jpg?v=1"
    },
    {
        "title": "Fragile",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x4WKnX_4s.jpg?v=1"
    },
    {
        "title": "Warning Ahead",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RwdzE_4s.jpg?v=1"
    },
    {
        "title": "Summer Nude",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/elX0Ws.jpg?v=1"
    },
    {
        "title": "Imaginary Cat",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/04pE6s.jpg?v=1"
    },
    {
        "title": "Uta no Onii-san",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E82D7s.jpg?v=1"
    },
    {
        "title": "Mr. Right",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RPYlVs.jpg?v=1"
    },
    {
        "title": "Unspeakable Longing",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5NVYl_4s.jpg?v=1"
    },
    {
        "title": "Banana Actually",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XbqAws.jpg?v=1"
    },
    {
        "title": "First Love Story",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2NzEVs.jpg?v=1"
    },
    {
        "title": "Little Doctor",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pgqEn_4s.jpg?v=1"
    },
    {
        "title": "My Pig Lady",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/zBXg7s.jpg?v=1"
    },
    {
        "title": "Demon Girl",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QKqlvs.jpg?v=1"
    },
    {
        "title": "Devil Inspector Season 2",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/gZnwns.jpg?v=1"
    },
    {
        "title": "Desperate Mr. X",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/26eWV_4s.jpg?v=1"
    },
    {
        "title": "Sengyou Shufu Tantei ~Watashi wa Shadow",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E2e17s.jpg?v=1"
    },
    {
        "title": "Nee Sensei, Shiranai no?",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dvJeKs.jpg?v=1"
    },
    {
        "title": "Happy Sisters",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Pd6bXs.jpg?v=1"
    },
    {
        "title": "Boku no Satsui ga Koi wo Shita",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XQDWd_4s.jpg?v=1"
    },
    {
        "title": "Muean Khon La Fark Fah",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/yN65ks.jpg?v=1"
    },
    {
        "title": "Hikonin Sentai Akibaranger Season Tsuu",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eYYqZd_4s.jpg?v=1"
    },
    {
        "title": "All of Her",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pd0YJV_4s.jpg?v=1"
    },
    {
        "title": "My Mowgli Boy",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z30nLs.jpg?v=1"
    },
    {
        "title": "Porn Prom Onlaweng",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ZeDvO_4s.jpg?v=1"
    },
    {
        "title": "The Secret Message",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jy0Aws.jpg?v=1"
    },
    {
        "title": "The Wedding Contract",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XdZbxw_4s.jpg?v=1"
    },
    {
        "title": "High Cookie",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BdqYxl_4s.jpg?v=1"
    },
    {
        "title": "River Flows to You",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2OZA7s.jpg?v=1"
    },
    {
        "title": "Gloria",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/mkPxbs.jpg?v=1"
    },
    {
        "title": "Strawberry Night Saga",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rg2Ym_4s.jpg?v=1"
    },
    {
        "title": "You Are My Whole World",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0wANJk_4s.jpg?v=1"
    },
    {
        "title": "doS Deka",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jq68ds.jpg?v=1"
    },
    {
        "title": "My Amazing Bride",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JB7Vps.jpg?v=1"
    },
    {
        "title": "Lavender",
        "year": "2001",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Kp0d8s.jpg?v=1"
    },
    {
        "title": "The Girl in Blue",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/xg21js.jpg?v=1"
    },
    {
        "title": "Kimcheed Radish Cubes",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jVKKvs.jpg?v=1"
    },
    {
        "title": "Jamloei Rak",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/KpPbns.jpg?v=1"
    },
    {
        "title": "Hiru",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d548g_4s.jpg?v=1"
    },
    {
        "title": "The Bright Moon Worships Your Heart",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x4w5p3_4s.jpg?v=1"
    },
    {
        "title": "Summer's Desire",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bqw2bs.jpg?v=1"
    },
    {
        "title": "Flower Boy Ramen Shop",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/O8nQks.jpg?v=1"
    },
    {
        "title": "The Cupids Series: Kamathep Prab Marn",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/A7W4qs.jpg?v=1"
    },
    {
        "title": "Hiru Season 2",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ROEYR_4s.jpg?v=1"
    },
    {
        "title": "Kiina",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MAdXGs.jpg?v=1"
    },
    {
        "title": "LTNS",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/60olQO_4s.jpg?v=1"
    },
    {
        "title": "Ruk Sutrit",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qYPvPs.jpg?v=1"
    },
    {
        "title": "To Be Continued",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kAORJg_4s.jpg?v=1"
    },
    {
        "title": "101st Marriage Proposal",
        "year": "1991",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qq1vzs.jpg?v=1"
    },
    {
        "title": "Peach of Time",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j1DWb_4s.jpg?v=1"
    },
    {
        "title": "Operation Love",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/820E2s.jpg?v=1"
    },
    {
        "title": "Water Boys 2",
        "year": "2004",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/koBmvs.jpg?v=1"
    },
    {
        "title": "Princess at Large",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vONnps.jpg?v=1"
    },
    {
        "title": "Why R U?",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJ0brv_4s.jpg?v=1"
    },
    {
        "title": "Honou no Tenkousei REBORN",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wQgPN_4s.jpg?v=1"
    },
    {
        "title": "The Four Daughters of Luoyang",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vmZEB_4s.jpg?v=1"
    },
    {
        "title": "Two Foxes",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/nOnA06_4s.jpg?v=1"
    },
    {
        "title": "Lovers in Paris",
        "year": "2004",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/O8R1ds.jpg?v=1"
    },
    {
        "title": "Miss Ye in Wonderland",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XLVOp_4s.jpg?v=1"
    },
    {
        "title": "Cruel Palace - War of Flowers",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kAvKgs.jpg?v=1"
    },
    {
        "title": "ThirTEEN Terrors",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/73LDLs.jpg?v=1"
    },
    {
        "title": "Mioka",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E2W8Qs.jpg?v=1"
    },
    {
        "title": "Golden Garden",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kJKvks.jpg?v=1"
    },
    {
        "title": "Kamen Rider",
        "year": "1971",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/NvlrRs.jpg?v=1"
    },
    {
        "title": "Heartbeat",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1wd2zb_4s.jpg?v=1"
    },
    {
        "title": "Witness Insecurity",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/O8ozLs.jpg?v=1"
    },
    {
        "title": "The Iron Empress",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Yog7es.jpg?v=1"
    },
    {
        "title": "Su Yu",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XBeQx_4s.jpg?v=1"
    },
    {
        "title": "Wonderful Fate",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wXnmg_4s.jpg?v=1"
    },
    {
        "title": "Kinkyori Renai: Season Zero",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ArBxvs.jpg?v=1"
    },
    {
        "title": "Tsumi to Batsu: A Falsified Romance",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Krx44s.jpg?v=1"
    },
    {
        "title": "Beauty Strategy",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/60ErdO_4s.jpg?v=1"
    },
    {
        "title": "Luead Rak Torranong",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vQJ7Xs.jpg?v=1"
    },
    {
        "title": "Hook",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ZBmok_4s.jpg?v=1"
    },
    {
        "title": "Choco Milk Shake",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qrqEK_4s.jpg?v=1"
    },
    {
        "title": "Shujin-ko",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BxLwAs.jpg?v=1"
    },
    {
        "title": "The Colors of Our Time",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BgLz1_4s.jpg?v=1"
    },
    {
        "title": "1 Pound no Fukuin",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/LwNk3s.jpg?v=1"
    },
    {
        "title": "Part-Time Mello",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qXzXB_4s.jpg?v=1"
    },
    {
        "title": "My Piggy Boss",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJ7k22_4s.jpg?v=1"
    },
    {
        "title": "Jinx",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RN2qP_4s.jpg?v=1"
    },
    {
        "title": "Mei-chan no Shitsuji",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RYJbxs.jpg?v=1"
    },
    {
        "title": "My Handsome Roommate",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QxX64_4s.jpg?v=1"
    },
    {
        "title": "It's Not That I Can't Marry, But I Don't Want To",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/DXZQ5s.jpg?v=1"
    },
    {
        "title": "It's Okay, Daddy's Girl",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MBJzMs.jpg?v=1"
    },
    {
        "title": "I Am GHOST",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x4mp0s.jpg?v=1"
    },
    {
        "title": "At Dolphin Bay",
        "year": "2003",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/yWB36s.jpg?v=1"
    },
    {
        "title": "Kekkon Shinai",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Y0zYes.jpg?v=1"
    },
    {
        "title": "Gourmet in Tang Dynasty",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j1B3y_4s.jpg?v=1"
    },
    {
        "title": "Kaew Tah Pee",
        "year": "2006",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BdyE1s.jpg?v=1"
    },
    {
        "title": "Brilliant Heritage",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BmoDls.jpg?v=1"
    },
    {
        "title": "Love Hurts",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WPPm7D_4s.jpg?v=1"
    },
    {
        "title": "Golden Empire",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aDw2Ds.jpg?v=1"
    },
    {
        "title": "Hibana: Spark",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1dYE5s.jpg?v=1"
    },
    {
        "title": "Plerng Boon",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qkE3zs.jpg?v=1"
    },
    {
        "title": "Youkai Sharehouse: Kaettekita n Kai",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dq7xD_4s.jpg?v=1"
    },
    {
        "title": "Best Get Going",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/43Rmws.jpg?v=1"
    },
    {
        "title": "Jun & Jun",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d0O3r5_4s.jpg?v=1"
    },
    {
        "title": "Sapai TKO",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QNVrQs.jpg?v=1"
    },
    {
        "title": "Touching You",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/mk62qs.jpg?v=1"
    },
    {
        "title": "Thinking of You, Lu Xiang Bei",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qrZb5_4s.jpg?v=1"
    },
    {
        "title": "The Soulmate",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WPrwW5_4s.jpg?v=1"
    },
    {
        "title": "Prodigy Healer",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/engpQs.jpg?v=1"
    },
    {
        "title": "Kill You Love You",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4e5mDw_4s.jpg?v=1"
    },
    {
        "title": "Just Dance",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d0wr3z_4s.jpg?v=1"
    },
    {
        "title": "Please Don't Spoil Me Season 5",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rNgQyZ_4s.jpg?v=1"
    },
    {
        "title": "Love & Bid Farewell",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WPeBPX_4s.jpg?v=1"
    },
    {
        "title": "Murai no Koi",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jd66J_4s.jpg?v=1"
    },
    {
        "title": "Twilight",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdKb3E_4s.jpg?v=1"
    },
    {
        "title": "Koo Za Rot Zab",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rkYRZs.jpg?v=1"
    },
    {
        "title": "Finland Papa",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2won0w_4s.jpg?v=1"
    },
    {
        "title": "Holy Pearl",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5v1JO_4s.jpg?v=1"
    },
    {
        "title": "Unattackable Women",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BPXo5_4s.jpg?v=1"
    },
    {
        "title": "Majisuka Gakuen",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aEqpas.jpg?v=1"
    },
    {
        "title": "Hayako Sensei",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/od1Qxs.jpg?v=1"
    },
    {
        "title": "Shibatora",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9rPmMs.jpg?v=1"
    },
    {
        "title": "Rondo",
        "year": "2006",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9YA7ds.jpg?v=1"
    },
    {
        "title": "Let's Only Walk The Flower Road",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jWXOBs.jpg?v=1"
    },
    {
        "title": "Kimi ga Kokoro ni Sumitsuita",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2N11Ps.jpg?v=1"
    },
    {
        "title": "One Night Steal",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wl0eks.jpg?v=1"
    },
    {
        "title": "Innocent",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0VDL4_4s.jpg?v=1"
    },
    {
        "title": "Big Thing",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJ7j8g_4s.jpg?v=1"
    },
    {
        "title": "The Way We Love",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QjroYs.jpg?v=1"
    },
    {
        "title": "True Colours",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pO50bs.jpg?v=1"
    },
    {
        "title": "First Class",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/nO3EBs.jpg?v=1"
    },
    {
        "title": "Huang Shu Da Ren Jie Yuan Ba",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0wNr4K_4s.jpg?v=1"
    },
    {
        "title": "Frankenstein no Koi",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pLw8b_4s.jpg?v=1"
    },
    {
        "title": "Kyou wa Kaisha Yasumimasu",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E2WlWs.jpg?v=1"
    },
    {
        "title": "You Are the Miracle",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j8vj8s.jpg?v=1"
    },
    {
        "title": "The King of Blaze Season 2",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/10kwQs.jpg?v=1"
    },
    {
        "title": "Eternal Lovesickness",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eYxj1p_4s.jpg?v=1"
    },
    {
        "title": "KO One",
        "year": "2005",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9xZyMs.jpg?v=1"
    },
    {
        "title": "Wayupak Montra",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/b3DoYs.jpg?v=1"
    },
    {
        "title": "Vivid Romance",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/VKAjEs.jpg?v=1"
    },
    {
        "title": "Part-Time Idol",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/gWeros.jpg?v=1"
    },
    {
        "title": "Debit Queen",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vX3BVW_4s.jpg?v=1"
    },
    {
        "title": "A Taiwanese Tale of Two Cities",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0wA8NO_4s.jpg?v=1"
    },
    {
        "title": "Birth Secret",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GJ58ps.jpg?v=1"
    },
    {
        "title": "Banana Actually 2",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/p73Bys.jpg?v=1"
    },
    {
        "title": "Blood",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BwpKRs.jpg?v=1"
    },
    {
        "title": "My Everlasting Bride",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQWZx8_4s.jpg?v=1"
    },
    {
        "title": "Koe Koi",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/X4PpXs.jpg?v=1"
    },
    {
        "title": "I Have a Smart Doctor Wife Season 2",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bd7mWq_4s.jpg?v=1"
    },
    {
        "title": "Hyakujuu Sentai Gaoranger",
        "year": "2001",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1wo2w3_4s.jpg?v=1"
    },
    {
        "title": "Anniversary Anyway",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4pyprs.jpg?v=1"
    },
    {
        "title": "4 Kinds of House",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/AYNE8s.jpg?v=1"
    },
    {
        "title": "140 Ji no Koi",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Rpkzg_4s.jpg?v=1"
    },
    {
        "title": "The Moment the Heart Shines",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4VW4Q_4s.jpg?v=1"
    },
    {
        "title": "Mirai Nikki",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dYDd5s.jpg?v=1"
    },
    {
        "title": "Romance by Romance",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4e1X3r_4s.jpg?v=1"
    },
    {
        "title": "MONSTERS",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wPoVg_4s.jpg?v=1"
    },
    {
        "title": "Was It Love?",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kWPbjs.jpg?v=1"
    },
    {
        "title": "Please Remember Me",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4eYwl1_4s.jpg?v=1"
    },
    {
        "title": "Lovely, Still",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/16rx5_4s.jpg?v=1"
    },
    {
        "title": "Between Friendship and Love",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6VdxW_4s.jpg?v=1"
    },
    {
        "title": "L.U.C.A.: The Beginning",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4xzKK_4s.jpg?v=1"
    },
    {
        "title": "Holy Land",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GQdRAs.jpg?v=1"
    },
    {
        "title": "Last Christmas",
        "year": "2004",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eyQd8s.jpg?v=1"
    },
    {
        "title": "The Mutations",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pd005B_4s.jpg?v=1"
    },
    {
        "title": "Female CEO Love Me",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qzn80_4s.jpg?v=1"
    },
    {
        "title": "My Dear Donovan",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XYwVn_4s.jpg?v=1"
    },
    {
        "title": "HIStory",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdvKqy_4s.jpg?v=1"
    },
    {
        "title": "Otto no Kanojo",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vd182s.jpg?v=1"
    },
    {
        "title": "Bravo My Life",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/5oLr4s.jpg?v=1"
    },
    {
        "title": "Fate of Beauty",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qY3rpK_4s.jpg?v=1"
    },
    {
        "title": "Pretty Guardian Sailor Moon",
        "year": "2003",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aEwJ0s.jpg?v=1"
    },
    {
        "title": "Childe Xie's Wine",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BPymz_4s.jpg?v=1"
    },
    {
        "title": "Kiss x Kiss x Kiss: Dekiai Cinderella",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pmmZD_4s.jpg?v=1"
    },
    {
        "title": "Born to Be Together",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qmRj0_4s.jpg?v=1"
    },
    {
        "title": "The Rebel Empress",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2wzdL2_4s.jpg?v=1"
    },
    {
        "title": "Devil Lover",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/YE8xBs.jpg?v=1"
    },
    {
        "title": "Chasing Love",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5P7pm_4s.jpg?v=1"
    },
    {
        "title": "Mokkoji Kitchen",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/r6vl7_4s.jpg?v=1"
    },
    {
        "title": "Ikinokotta 6-nin ni Yoru to",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ek0pE_4s.jpg?v=1"
    },
    {
        "title": "UMG",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kAA7Kr_4s.jpg?v=1"
    },
    {
        "title": "Angel Heart",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/VNKjxs.jpg?v=1"
    },
    {
        "title": "Revolutionary Sisters",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x78Ar_4s.jpg?v=1"
    },
    {
        "title": "No Regrets in Life",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bex4R_4s.jpg?v=1"
    },
    {
        "title": "Boku wa Doko kara",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4O13r_4s.jpg?v=1"
    },
    {
        "title": "Taste of Love",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2wwg5E_4s.jpg?v=1"
    },
    {
        "title": "My Dear Loser: Edge of 17",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z4jeqs.jpg?v=1"
    },
    {
        "title": "Erai Tokoro ni Totsuide Shimatta!",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GwJwYs.jpg?v=1"
    },
    {
        "title": "Love Is Drop by Drop",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j0eRvs.jpg?v=1"
    },
    {
        "title": "Aristocratic Birth: Prince of Legend",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Q7d5Ys.jpg?v=1"
    },
    {
        "title": "Trot Lovers",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z8q0Os.jpg?v=1"
    },
    {
        "title": "Ninja ni Kekkon wa Muzukashii",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1wmq73_4s.jpg?v=1"
    },
    {
        "title": "Forensic Heroes Season 4",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EPZ8ls.jpg?v=1"
    },
    {
        "title": "Chinese Hero Zhao Zi Long",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kvYRds.jpg?v=1"
    },
    {
        "title": "You're Hired",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MBdw7s.jpg?v=1"
    },
    {
        "title": "Babysitter",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EYv7Ws.jpg?v=1"
    },
    {
        "title": "Country Boy 2",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4ep1JY_4s.jpg?v=1"
    },
    {
        "title": "Star April",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jg2Rr_4s.jpg?v=1"
    },
    {
        "title": "Missing 9",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/R0NlPs.jpg?v=1"
    },
    {
        "title": "The King and I",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MBd17s.jpg?v=1"
    },
    {
        "title": "Teenage Mom",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RepJos.jpg?v=1"
    },
    {
        "title": "Cheat My Boss",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/B2rrAs.jpg?v=1"
    },
    {
        "title": "Himitsu Chouhouin Erika",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/k8K4v_4s.jpg?v=1"
    },
    {
        "title": "Remote",
        "year": "2002",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aE5POs.jpg?v=1"
    },
    {
        "title": "A Love to Kill",
        "year": "2005",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/3ozLvs.jpg?v=1"
    },
    {
        "title": "Divorce Lawyer in Love",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JjWDws.jpg?v=1"
    },
    {
        "title": "Boarding House #24",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/5d6Qys.jpg?v=1"
    },
    {
        "title": "DCU",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2KpQW_4s.jpg?v=1"
    },
    {
        "title": "Luv Pub",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/v3Pv8_4s.jpg?v=1"
    },
    {
        "title": "Watashitachi no Kyokasho",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MKpj8s.jpg?v=1"
    },
    {
        "title": "Gay OK Bangkok",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z5yrYs.jpg?v=1"
    },
    {
        "title": "Nobunaga no Chef Season 2",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/N7dXes.jpg?v=1"
    },
    {
        "title": "The New Employee",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/21eBV_4s.jpg?v=1"
    },
    {
        "title": "Mob Psycho 100",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/PdzZ3s.jpg?v=1"
    },
    {
        "title": "Our Love",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/GqjQKs.jpg?v=1"
    },
    {
        "title": "Rush to the Dead Summer",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/n0jQEs.jpg?v=1"
    },
    {
        "title": "Klin Kasalong",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RA2xrs.jpg?v=1"
    },
    {
        "title": "Be With You",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d27WDs.jpg?v=1"
    },
    {
        "title": "Twelve Nights",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bq6Z6s.jpg?v=1"
    },
    {
        "title": "More Than Friends",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0dD7e_4s.jpg?v=1"
    },
    {
        "title": "You and My Stars",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJNpJ5_4s.jpg?v=1"
    },
    {
        "title": "I Do, I Do",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJAO7s.jpg?v=1"
    },
    {
        "title": "Buchou to Shachiku no Koi Modokashii",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kL5yg_4s.jpg?v=1"
    },
    {
        "title": "Zannen na Otto",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/8pLLAs.jpg?v=1"
    },
    {
        "title": "Positive Physique",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/8qzDls.jpg?v=1"
    },
    {
        "title": "Mr. Lipstick",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/675Rp_4s.jpg?v=1"
    },
    {
        "title": "Prime Minister and I",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kvA5Os.jpg?v=1"
    },
    {
        "title": "The Missing Half",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pvqV8s.jpg?v=1"
    },
    {
        "title": "BACK STREET GIRLS - Gokudoruzu",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RWLARs.jpg?v=1"
    },
    {
        "title": "The Tasty Florida",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BLp2A_4s.jpg?v=1"
    },
    {
        "title": "My Wife",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bd7noV_4s.jpg?v=1"
    },
    {
        "title": "Denei Shojo: Video Girl AI 2018",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6ydyOs.jpg?v=1"
    },
    {
        "title": "Princess, Make Way",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qYVXB0_4s.jpg?v=1"
    },
    {
        "title": "Jai Rao",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/oQlyks.jpg?v=1"
    },
    {
        "title": "I Really Really Like You",
        "year": "2006",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/nBbmxs.jpg?v=1"
    },
    {
        "title": "Eclipse of the Heart",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RBBdPz_4s.jpg?v=1"
    },
    {
        "title": "Untouchable",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/lOL8Ls.jpg?v=1"
    },
    {
        "title": "Zenryoku de, Aishite Ii Kana?",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdxVLy_4s.jpg?v=1"
    },
    {
        "title": "Fall in Love With Him",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dDqEg_4s.jpg?v=1"
    },
    {
        "title": "Make It Right 2",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ENO3z_4s.jpg?v=1"
    },
    {
        "title": "Queen of Reversals",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/nO8jWs.jpg?v=1"
    },
    {
        "title": "The Shipper",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QX0k5s.jpg?v=1"
    },
    {
        "title": "TROUBLEMAN",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MRDV9s.jpg?v=1"
    },
    {
        "title": "Unknown",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vXoyjp_4s.jpg?v=1"
    },
    {
        "title": "Tokyo Tower",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bdm1o7_4s.jpg?v=1"
    },
    {
        "title": "Paint with Love",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2YrrP_4s.jpg?v=1"
    },
    {
        "title": "Touch",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ZrwAjs.jpg?v=1"
    },
    {
        "title": "Accidentally Meow on You",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vwNkW_4s.jpg?v=1"
    },
    {
        "title": "Natsu no Koi wa Nijiiro ni Kagayaku",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WPBdWs.jpg?v=1"
    },
    {
        "title": "Nobunaga no Chef",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pWdbEs.jpg?v=1"
    },
    {
        "title": "The Last Princess",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bd3Qk1_4s.jpg?v=1"
    },
    {
        "title": "Demon Girl Season 2",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6gVvPs.jpg?v=1"
    },
    {
        "title": "The Princess",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vX3AWp_4s.jpg?v=1"
    },
    {
        "title": "Koi wa Ameagari no You ni: Pocket no Naka no Negaigoto",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RWWOos.jpg?v=1"
    },
    {
        "title": "Magerarenai Onna",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/44Jvws.jpg?v=1"
    },
    {
        "title": "Majisuka Gakuen Season 2",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/7qqVDs.jpg?v=1"
    },
    {
        "title": "Oxygen",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RJRezs.jpg?v=1"
    },
    {
        "title": "Friends",
        "year": "2002",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vN3Vgs.jpg?v=1"
    },
    {
        "title": "La Dolce Vita",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/PxRLzs.jpg?v=1"
    },
    {
        "title": "Three Bold Siblings",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6Rynd_4s.jpg?v=1"
    },
    {
        "title": "Love Everlasting",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EOWBm_4s.jpg?v=1"
    },
    {
        "title": "Star of Ocean",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wB33A_4s.jpg?v=1"
    },
    {
        "title": "You Are My Sisters",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Q1ZoAs.jpg?v=1"
    },
    {
        "title": "Fake Couple",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JKk8ws.jpg?v=1"
    },
    {
        "title": "A Change of Heart",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9mQxQs.jpg?v=1"
    },
    {
        "title": "Untouchable",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/M3Ym9s.jpg?v=1"
    },
    {
        "title": "Sometoon 2020",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eYyVAd_4s.jpg?v=1"
    },
    {
        "title": "Mon Garn Bandan Ruk",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j6DXb_4s.jpg?v=1"
    },
    {
        "title": "Royal Sister Returns",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/yNmLRs.jpg?v=1"
    },
    {
        "title": "After the Show Ends",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BpKqqs.jpg?v=1"
    },
    {
        "title": "Ore-sama Yakuza to Hetare Shachiku: Kuni wo Koeta Jingi Naki Dekiai",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/g08R3O_4s.jpg?v=1"
    },
    {
        "title": "Dating Agency: Cyrano",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/l0zq4s.jpg?v=1"
    },
    {
        "title": "What's Up, Fox?",
        "year": "2006",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kE6lrs.jpg?v=1"
    },
    {
        "title": "U-Prince: The Absolute Economist",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E7WPQs.jpg?v=1"
    },
    {
        "title": "Queen of Masks",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJ1l3g_4s.jpg?v=1"
    },
    {
        "title": "When It's at Night",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/y6ZZ6s.jpg?v=1"
    },
    {
        "title": "Wenderella's Diary",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qYyZj2_4s.jpg?v=1"
    },
    {
        "title": "Nabi, My Stepdarling",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kRQ0g_4s.jpg?v=1"
    },
    {
        "title": "Proong Nee Gor Ruk Ter",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5Zr5s.jpg?v=1"
    },
    {
        "title": "The World That They Live In",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/peoOE_4s.jpg?v=1"
    },
    {
        "title": "My Bug, My Castellan",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJ1LdA_4s.jpg?v=1"
    },
    {
        "title": "Heirs",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/w0JOps.jpg?v=1"
    },
    {
        "title": "Loving You a Thousand Times",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9m4kas.jpg?v=1"
    },
    {
        "title": "Tawan Arb Dao",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XbmlOs.jpg?v=1"
    },
    {
        "title": "A Pillow Case of Mystery Season 2",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/l0PDEs.jpg?v=1"
    },
    {
        "title": "Hidarikiki no Eren",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bx44As.jpg?v=1"
    },
    {
        "title": "Dhevaprom: Poncheewan",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qY2goP_4s.jpg?v=1"
    },
    {
        "title": "Guyuan Imperial College",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/078xr_4s.jpg?v=1"
    },
    {
        "title": "A Different Kind of Pretty Man",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WP6Qps.jpg?v=1"
    },
    {
        "title": "Tokyo Zenryoku Shoujo",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/evZ0Ks.jpg?v=1"
    },
    {
        "title": "Hannari Girori no Yoriko-san",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/gZkNPs.jpg?v=1"
    },
    {
        "title": "Ma Boy",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aeWXKs.jpg?v=1"
    },
    {
        "title": "Walk with You",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bdw30R_4s.jpg?v=1"
    },
    {
        "title": "Summer in Love",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jOKxb_4s.jpg?v=1"
    },
    {
        "title": "Seishun Tantei Haruya: Otona no Aku wo Yurusanai!",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kXJ7gs.jpg?v=1"
    },
    {
        "title": "Honey Sir",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QPB8v_4s.jpg?v=1"
    },
    {
        "title": "Mirror Twins",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6nWyKs.jpg?v=1"
    },
    {
        "title": "Kill Heel",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XqzEg_4s.jpg?v=1"
    },
    {
        "title": "Twins",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2wdQ22_4s.jpg?v=1"
    },
    {
        "title": "Misaki Number One!!",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/475qK_4s.jpg?v=1"
    },
    {
        "title": "Love Cheque Charge",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/VB3oLs.jpg?v=1"
    },
    {
        "title": "Dream Knight",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/xPgQ3s.jpg?v=1"
    },
    {
        "title": "SHARK",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rN0Egs.jpg?v=1"
    },
    {
        "title": "Catch Me Baby",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/R1OVo_4s.jpg?v=1"
    },
    {
        "title": "Dusk Love",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/60838X_4s.jpg?v=1"
    },
    {
        "title": "Can We Love?",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z8kz8s.jpg?v=1"
    },
    {
        "title": "Stuck on You",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kDWKb_4s.jpg?v=1"
    },
    {
        "title": "Duty after School: Part 2",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z8RkV8_4s.jpg?v=1"
    },
    {
        "title": "One and a Half Summer",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kAOdrs.jpg?v=1"
    },
    {
        "title": "Lucky Club",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BO77R_4s.jpg?v=1"
    },
    {
        "title": "Platonic",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wJkq1s.jpg?v=1"
    },
    {
        "title": "Love You My Arrogance",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/emBpQ_4s.jpg?v=1"
    },
    {
        "title": "The Running Mates: Human Rights",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kEA2gs.jpg?v=1"
    },
    {
        "title": "Dear Liar",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5504W_4s.jpg?v=1"
    },
    {
        "title": "Triple Fling",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bx3NAs.jpg?v=1"
    },
    {
        "title": "Red Balloon",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/X0EKn_4s.jpg?v=1"
    },
    {
        "title": "Fallen Angel",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/MXoAXs.jpg?v=1"
    },
    {
        "title": "Hapimari: Happy Marriage!?",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4Okek_4s.jpg?v=1"
    },
    {
        "title": "The Director Who Buys Me Dinner",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rB1dE_4s.jpg?v=1"
    },
    {
        "title": "Blade's Dance with You",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d0xv4K_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Decade",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RLboP_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Wizard",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1Vk07_4s.jpg?v=1"
    },
    {
        "title": "Introduction of the Princess",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/a8q0Ks.jpg?v=1"
    },
    {
        "title": "Uncle Cool",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdgJbB_4s.jpg?v=1"
    },
    {
        "title": "2 Moons",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JpZzos.jpg?v=1"
    },
    {
        "title": "My Secret Hotel",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/oQlKxs.jpg?v=1"
    },
    {
        "title": "Foolish Mom",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rN8Vps.jpg?v=1"
    },
    {
        "title": "Liar",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WRKkR_4s.jpg?v=1"
    },
    {
        "title": "Honey, Don't Run Away",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/j2rZzs.jpg?v=1"
    },
    {
        "title": "Emperors and Me",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/VQ7xxs.jpg?v=1"
    },
    {
        "title": "Dandelion Family",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dwkmes.jpg?v=1"
    },
    {
        "title": "The Real Has Come!",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pddbzb_4s.jpg?v=1"
    },
    {
        "title": "Fated to Love You",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQqZlO_4s.jpg?v=1"
    },
    {
        "title": "Aim High",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/PxvDzs.jpg?v=1"
    },
    {
        "title": "Palms on Love",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XdvEVn_4s.jpg?v=1"
    },
    {
        "title": "Shoot for the Stars",
        "year": "2002",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0y5P6s.jpg?v=1"
    },
    {
        "title": "Meishi Game",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/YojBgs.jpg?v=1"
    },
    {
        "title": "The Outsiders",
        "year": "2004",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ab3Pws.jpg?v=1"
    },
    {
        "title": "My Assassin Girlfriend",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ZgVBjs.jpg?v=1"
    },
    {
        "title": "Little Mom Scandal Season 2",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/a82qbs.jpg?v=1"
    },
    {
        "title": "You Light Up My Life Again",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6XL62_4s.jpg?v=1"
    },
    {
        "title": "Hot Blooded Detective",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qYg4BQ_4s.jpg?v=1"
    },
    {
        "title": "Ti Amo Chocolate",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ABA0Ls.jpg?v=1"
    },
    {
        "title": "Prom Mai Dai Likit",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/10mvzs.jpg?v=1"
    },
    {
        "title": "Ashita mo Kitto Kimi ni Koi wo Suru.",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BEQdA_4s.jpg?v=1"
    },
    {
        "title": "Araburu Kisetsu no Otomedomo yo",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BDRZR_4s.jpg?v=1"
    },
    {
        "title": "Fool in Love with You",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JkEdls.jpg?v=1"
    },
    {
        "title": "Lunch Queen",
        "year": "2002",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dwqnAs.jpg?v=1"
    },
    {
        "title": "Ordinary but Special",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4DoqYs.jpg?v=1"
    },
    {
        "title": "Jotei",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/R6eAY_4s.jpg?v=1"
    },
    {
        "title": "Sao Chai Hi-Tech",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wJk6ps.jpg?v=1"
    },
    {
        "title": "The Palace Season 2: The Lock Pearl Screen",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/92QKWs.jpg?v=1"
    },
    {
        "title": "When We Meet Again",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1wLlR3_4s.jpg?v=1"
    },
    {
        "title": "Fly, Again",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/v7xgZ_4s.jpg?v=1"
    },
    {
        "title": "Seigi no Tenbin",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1eNo6_4s.jpg?v=1"
    },
    {
        "title": "Gracious Revenge",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qb7yzs.jpg?v=1"
    },
    {
        "title": "Kyouso no Musume",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jp0ky_4s.jpg?v=1"
    },
    {
        "title": "My Splendid Life",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/lWvebs.jpg?v=1"
    },
    {
        "title": "Mou Ichido Kimi ni, Propose",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/azRjes.jpg?v=1"
    },
    {
        "title": "Psychic Princess",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQgBdJ_4s.jpg?v=1"
    },
    {
        "title": "Tofu Personified",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/q2zW2s.jpg?v=1"
    },
    {
        "title": "Please Fall in Love",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/wJwZgp_4s.jpg?v=1"
    },
    {
        "title": "Strong Underdog",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1wdLXR_4s.jpg?v=1"
    },
    {
        "title": "Cheat",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z6KR1_4s.jpg?v=1"
    },
    {
        "title": "Ogon no Buta",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Dxx1ps.jpg?v=1"
    },
    {
        "title": "Bangkok Love Stories: Charming Person",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/632oWs.jpg?v=1"
    },
    {
        "title": "Omukae Shibuya-kun",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0wAyYr_4s.jpg?v=1"
    },
    {
        "title": "Kamen Rider Amazons Season 2",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/4Lk2k_4s.jpg?v=1"
    },
    {
        "title": "Bull Doctor",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/mVZRJs.jpg?v=1"
    },
    {
        "title": "Almost Lover",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jKPnB_4s.jpg?v=1"
    },
    {
        "title": "Love under the Moon",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1qq6zs.jpg?v=1"
    },
    {
        "title": "Raeng Ngao",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JBW3ms.jpg?v=1"
    },
    {
        "title": "All Out of Love",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ndQnBs.jpg?v=1"
    },
    {
        "title": "The Promise",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x46Jo0_4s.jpg?v=1"
    },
    {
        "title": "Majisuka Gakuen Season 4",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/n0d0Es.jpg?v=1"
    },
    {
        "title": "101 Marriages",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/x4W2E3_4s.jpg?v=1"
    },
    {
        "title": "Summer Scent",
        "year": "2003",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4eD5rs.jpg?v=1"
    },
    {
        "title": "Broke Rookie Star",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/48rqd_4s.jpg?v=1"
    },
    {
        "title": "Saishu Resha de Hajimaru Koi",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Xlw1q_4s.jpg?v=1"
    },
    {
        "title": "Hero",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/M5Zwas.jpg?v=1"
    },
    {
        "title": "The Crossing Hero",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/5Q70ys.jpg?v=1"
    },
    {
        "title": "Pearl Next Door",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6wrOj_4s.jpg?v=1"
    },
    {
        "title": "Rak Rai",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jWmpBs.jpg?v=1"
    },
    {
        "title": "Hayami-san to Yobareru Hi",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/bK6Lws.jpg?v=1"
    },
    {
        "title": "Bounty Lady",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Pxo70s.jpg?v=1"
    },
    {
        "title": "Madame Antoine",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eyxwEs.jpg?v=1"
    },
    {
        "title": "Miss Korea",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ONxOks.jpg?v=1"
    },
    {
        "title": "Business Kon: Suki ni Nattara Rikonshimasu",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RBRYxo_4s.jpg?v=1"
    },
    {
        "title": "My Absolute Boyfriend",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/enyles.jpg?v=1"
    },
    {
        "title": "Kol Ruk Luang Jai",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Nd1kos.jpg?v=1"
    },
    {
        "title": "Koi ga Heta demo Ikitemasu",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BOxK7_4s.jpg?v=1"
    },
    {
        "title": "Will Be Okay, Never Die",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qOEE2s.jpg?v=1"
    },
    {
        "title": "The Twin Flower Legend",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/eoVeYs.jpg?v=1"
    },
    {
        "title": "Hidden Agenda",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RB2Q5Y_4s.jpg?v=1"
    },
    {
        "title": "Falling in Love",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJPEq6_4s.jpg?v=1"
    },
    {
        "title": "Tsubasa no Oreta Tenshitachi 2",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/anOb4s.jpg?v=1"
    },
    {
        "title": "Rak Mai Mi Wan Tai",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/73Xkrs.jpg?v=1"
    },
    {
        "title": "Born Again",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EpOqOs.jpg?v=1"
    },
    {
        "title": "Lhong Ngao Jun",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/W6XKO_4s.jpg?v=1"
    },
    {
        "title": "The Ultimate Addiction",
        "year": "2014",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/607bps.jpg?v=1"
    },
    {
        "title": "Tokyo Love Story",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Epk85s.jpg?v=1"
    },
    {
        "title": "GOLD",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/aDky2s.jpg?v=1"
    },
    {
        "title": "My Sassy Deskmate Season 2",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pOd1bs.jpg?v=1"
    },
    {
        "title": "Sai Lub Rak Puan",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/kood8s.jpg?v=1"
    },
    {
        "title": "A Man Called God",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/xPNZNs.jpg?v=1"
    },
    {
        "title": "Conspiracy in the Court",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/NdpWAs.jpg?v=1"
    },
    {
        "title": "I Don't Want to Fall in Love With Humans",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/R67vg_4s.jpg?v=1"
    },
    {
        "title": "1122 Ii Fuufu",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WP3OYX_4s.jpg?v=1"
    },
    {
        "title": "Five Kings of Thieves",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQ2AbO_4s.jpg?v=1"
    },
    {
        "title": "Item",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/evrxps.jpg?v=1"
    },
    {
        "title": "Are You Ready? Hey You Girl!",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/RPDzzs.jpg?v=1"
    },
    {
        "title": "Himitsu no Ai-chan",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XNdPp_4s.jpg?v=1"
    },
    {
        "title": "Ani ni Aisaresugite Komattemasu",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z7nD8s.jpg?v=1"
    },
    {
        "title": "A Tale of Ylang Ylang",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d18Jd_4s.jpg?v=1"
    },
    {
        "title": "Room Alone Season 2",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/VNKExs.jpg?v=1"
    },
    {
        "title": "Because of Love",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d0rJBb_4s.jpg?v=1"
    },
    {
        "title": "Becoming Witch",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4R1lQ_4s.jpg?v=1"
    },
    {
        "title": "Hot Shot",
        "year": "2008",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/YYgQes.jpg?v=1"
    },
    {
        "title": "Perfect Her",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdOW8y_4s.jpg?v=1"
    },
    {
        "title": "Fabulous 30",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2NbQRs.jpg?v=1"
    },
    {
        "title": "Hito wa Mita Me ga 100%",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/45pwQs.jpg?v=1"
    },
    {
        "title": "Cheng Xi's Song",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Bdv277_4s.jpg?v=1"
    },
    {
        "title": "Lub Luang Jai",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1g2w5s.jpg?v=1"
    },
    {
        "title": "Que Sera Sera",
        "year": "2007",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/LwkQrs.jpg?v=1"
    },
    {
        "title": "300 Year-Old Class of 2020",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Ry5yz_4s.jpg?v=1"
    },
    {
        "title": "Mia Jum Pen",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Eyqb0_4s.jpg?v=1"
    },
    {
        "title": "Mutual Redemption Love",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/vXOoLB_4s.jpg?v=1"
    },
    {
        "title": "Proud of Love",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/8qmdKs.jpg?v=1"
    },
    {
        "title": "Taddao Bussaya",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E5ZoQs.jpg?v=1"
    },
    {
        "title": "Between Friendship and Love Season 2",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/AvBQ3s.jpg?v=1"
    },
    {
        "title": "Sangmin Dinneaw: Uncut",
        "year": "2024",
        "rating": "7.0",
        "image": "/assets/nsfw.jpg"
    },
    {
        "title": "Love Is Phantom",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EXK77_4s.jpg?v=1"
    },
    {
        "title": "Warm Time With You",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/EKRep_4s.jpg?v=1"
    },
    {
        "title": "Over Time",
        "year": "1999",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Z5P0Js.jpg?v=1"
    },
    {
        "title": "Phaen Rai Phai Rak",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/3m7eAs.jpg?v=1"
    },
    {
        "title": "Skip a Beat",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4e1KkK_4s.jpg?v=1"
    },
    {
        "title": "Her Bucket List",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rQ82j_4s.jpg?v=1"
    },
    {
        "title": "Love on a Shoestring",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJXdJW_4s.jpg?v=1"
    },
    {
        "title": "High Society",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/5QDVes.jpg?v=1"
    },
    {
        "title": "Goddess of Fire",
        "year": "2013",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/M3n5vs.jpg?v=1"
    },
    {
        "title": "Knock on the Happiness Door",
        "year": "2020",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Q7jr2s.jpg?v=1"
    },
    {
        "title": "My Dearest",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/E577bp_4s.jpg?v=1"
    },
    {
        "title": "-50kg no Cinderella",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/03k64_4s.jpg?v=1"
    },
    {
        "title": "Home for Summer",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/6nX8ps.jpg?v=1"
    },
    {
        "title": "My MVP Valentine",
        "year": "2002",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/9YY7os.jpg?v=1"
    },
    {
        "title": "Campus Ace",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BP8Qz_4s.jpg?v=1"
    },
    {
        "title": "My Kung Fu Girlfriend Season 2",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XYynZ_4s.jpg?v=1"
    },
    {
        "title": "The Hidden Moon (Uncut Ver.)",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/jQ3Owz_4s.jpg?v=1"
    },
    {
        "title": "Stand Up!!",
        "year": "2003",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JBomZl_4s.jpg?v=1"
    },
    {
        "title": "With Love",
        "year": "1998",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/q2jP0s.jpg?v=1"
    },
    {
        "title": "Godhand Teru",
        "year": "2009",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/WQN3Rs.jpg?v=1"
    },
    {
        "title": "Bake Me Please",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/d04J6W_4s.jpg?v=1"
    },
    {
        "title": "Wise Woman",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/2w4Znd_4s.jpg?v=1"
    },
    {
        "title": "Fox in the Screen",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/egOmQs.jpg?v=1"
    },
    {
        "title": "Can Love Become Money",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/GwlBAs.jpg?v=1"
    },
    {
        "title": "Mom, Don't Do That!",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0LKB4_4s.jpg?v=1"
    },
    {
        "title": "Loneliness Society",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/kAvBok_4s.jpg?v=1"
    },
    {
        "title": "The Ten Deadly Sins",
        "year": "2016",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/82KWls.jpg?v=1"
    },
    {
        "title": "Between",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/0OAQrs.jpg?v=1"
    },
    {
        "title": "Duang Jai Nai Fai Nhao",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/gZ4nWs.jpg?v=1"
    },
    {
        "title": "The Witch Store",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0bNY4s.jpg?v=1"
    },
    {
        "title": "Sweet Sweet Bodyguard",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/4ejOks.jpg?v=1"
    },
    {
        "title": "Please Don't Spoil Me Season 4",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/rdJqZ_4s.jpg?v=1"
    },
    {
        "title": "Rich Man",
        "year": "2018",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/dwJ7As.jpg?v=1"
    },
    {
        "title": "13",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/Bggj1_4s.jpg?v=1"
    },
    {
        "title": "Kyoufu Shinbun",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/QPKwg_4s.jpg?v=1"
    },
    {
        "title": "Lost and Found",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/3oZpeV_4s.jpg?v=1"
    },
    {
        "title": "Love Books Love Series: Dark Fairy Tale",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/YoZzAs.jpg?v=1"
    },
    {
        "title": "Takane to Hana",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/AvwN8s.jpg?v=1"
    },
    {
        "title": "We Broke Up",
        "year": "2015",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/4kBWks.jpg?v=1"
    },
    {
        "title": "My Kung Fu Girlfriend",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/BeQW6_4s.jpg?v=1"
    },
    {
        "title": "My Chinese Chic Boutique",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/QJn17W_4s.jpg?v=1"
    },
    {
        "title": "Level Up",
        "year": "2019",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/XwOzqs.jpg?v=1"
    },
    {
        "title": "Tower of Babel",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/B0gEqs.jpg?v=1"
    },
    {
        "title": "Song of Phoenix",
        "year": "2017",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/63QR2s.jpg?v=1"
    },
    {
        "title": "Kekkon Surutte, Hontou Desu ka?",
        "year": "2022",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/W2rk3_4s.jpg?v=1"
    },
    {
        "title": "Playful Kiss",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/M3OAMs.jpg?v=1"
    },
    {
        "title": "Tokyo Alice",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/ryRdg_4s.jpg?v=1"
    },
    {
        "title": "Attention Please",
        "year": "2006",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0ydZOs.jpg?v=1"
    },
    {
        "title": "Yume wo Ataeru",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0mDkOs.jpg?v=1"
    },
    {
        "title": "No Matter What",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/RbAnr_4s.jpg?v=1"
    },
    {
        "title": "Childless Comfort",
        "year": "2012",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Ldnmgs.jpg?v=1"
    },
    {
        "title": "SIGN",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/MB3p1s.jpg?v=1"
    },
    {
        "title": "Boku to Star no 99 Nichi",
        "year": "2011",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/JBz4os.jpg?v=1"
    },
    {
        "title": "Go, Back Diary",
        "year": "2018",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/6yY62s.jpg?v=1"
    },
    {
        "title": "Jinxed at First",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/ppQV8_4s.jpg?v=1"
    },
    {
        "title": "Inu wo Kau to Iu Koto",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/B7rj6s.jpg?v=1"
    },
    {
        "title": "Ring Ring Bell",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/mOPvbs.jpg?v=1"
    },
    {
        "title": "Pretty Guardian of the City",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/klDBv_4s.jpg?v=1"
    },
    {
        "title": "Be Together",
        "year": "2021",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/1Jp63_4s.jpg?v=1"
    },
    {
        "title": "Gen Y",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/xWLNj_4s.jpg?v=1"
    },
    {
        "title": "Love Story in Harvard",
        "year": "2004",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/ABJ24s.jpg?v=1"
    },
    {
        "title": "A Place in the Sun",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/1pdJ7s.jpg?v=1"
    },
    {
        "title": "Diamond Lover",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/DyLmns.jpg?v=1"
    },
    {
        "title": "My Dearest Boss",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/jmBX8_4s.jpg?v=1"
    },
    {
        "title": "Shiritsu Bakaleya Koukou",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/akXPvs.jpg?v=1"
    },
    {
        "title": "Mommy's Counterattack",
        "year": "2023",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/rNNkvg_4s.jpg?v=1"
    },
    {
        "title": "Prince of Legend",
        "year": "2018",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/Wb2J3s.jpg?v=1"
    },
    {
        "title": "Operation Proposal",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/qYVNQs.jpg?v=1"
    },
    {
        "title": "Sexy Voice and Robo",
        "year": "2007",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/MgbqGs.jpg?v=1"
    },
    {
        "title": "Puer Tur",
        "year": "2016",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/XAbgXs.jpg?v=1"
    },
    {
        "title": "Kimi to Sekai ga Owaru Hi ni Season 2",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/QQQpW_4s.jpg?v=1"
    },
    {
        "title": "Captain of Destiny",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/moobPs.jpg?v=1"
    },
    {
        "title": "I Hate You, Juliet!",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/3Lbods.jpg?v=1"
    },
    {
        "title": "Heaven?",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/eLdzn_4s.jpg?v=1"
    },
    {
        "title": "Beauties in the Closet",
        "year": "2018",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/n0JkBs.jpg?v=1"
    },
    {
        "title": "The Eccentric Daughter-in-Law",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/3v5Ems.jpg?v=1"
    },
    {
        "title": "Easy Fortune Happy Life",
        "year": "2009",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/nOn32s.jpg?v=1"
    },
    {
        "title": "New Horizon",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/24D37s.jpg?v=1"
    },
    {
        "title": "Kuro no Onna Kyoushi",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/EONj0_4s.jpg?v=1"
    },
    {
        "title": "Toshi Densetsu no Onna 2",
        "year": "2013",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/PwLPys.jpg?v=1"
    },
    {
        "title": "Live Your Own Life",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/WPble5_4s.jpg?v=1"
    },
    {
        "title": "Funouhan",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/ReoYPs.jpg?v=1"
    },
    {
        "title": "Gangnam Scandal",
        "year": "2018",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/KrrEns.jpg?v=1"
    },
    {
        "title": "Painting Heart Expert",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/7nnKLs.jpg?v=1"
    },
    {
        "title": "Master's Delicacies",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/qe1D5_4s.jpg?v=1"
    },
    {
        "title": "Senior Secret Love: My Lil Boy",
        "year": "2016",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/B7KzAs.jpg?v=1"
    },
    {
        "title": "Water Boys",
        "year": "2003",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/9oAYMs.jpg?v=1"
    },
    {
        "title": "SHARK Season 2",
        "year": "2014",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/WPepls.jpg?v=1"
    },
    {
        "title": "Customize Happiness",
        "year": "2016",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/LeXPDs.jpg?v=1"
    },
    {
        "title": "Manatsu no Cinderella",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/1w4d45_4s.jpg?v=1"
    },
    {
        "title": "Kahogona Wakadanna-sama no Amayakashi Kon",
        "year": "2024",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/pdOyxn_4s.jpg?v=1"
    },
    {
        "title": "Tokuyama Daigoro wo Dare ga Koroshita ka?",
        "year": "2016",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/Re6yRs.jpg?v=1"
    },
    {
        "title": "Lucky My Love",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/qYqNDB_4s.jpg?v=1"
    },
    {
        "title": "Love of Secret",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/4Xr7J_4s.jpg?v=1"
    },
    {
        "title": "From Repair to Pair",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/6x6Qd_4s.jpg?v=1"
    },
    {
        "title": "Himitsu no Kankei - Sensei wa Doukyonin",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/xkJ6Xs.jpg?v=1"
    },
    {
        "title": "Designated Love",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/1BO4Q_4s.jpg?v=1"
    },
    {
        "title": "Cosmetology High",
        "year": "2014",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/g06Qns.jpg?v=1"
    },
    {
        "title": "I Need Romance",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/MBNqRs.jpg?v=1"
    },
    {
        "title": "Tempest",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/VX1pJs.jpg?v=1"
    },
    {
        "title": "Seinaru Kaibutsutachi",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/GL2O3s.jpg?v=1"
    },
    {
        "title": "All My Love",
        "year": "2010",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/lOPwbs.jpg?v=1"
    },
    {
        "title": "Roses & Guns",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/WPr2R5_4s.jpg?v=1"
    },
    {
        "title": "Love Actually",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/2NJLEs.jpg?v=1"
    },
    {
        "title": "First Love Story Season 3",
        "year": "2018",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/pnK5Ds.jpg?v=1"
    },
    {
        "title": "The Witch Store Reopens",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/RqL2g_4s.jpg?v=1"
    },
    {
        "title": "Dr. Gang",
        "year": "2006",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/zBv3Ps.jpg?v=1"
    },
    {
        "title": "Beautiful Secret",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/mojOQs.jpg?v=1"
    },
    {
        "title": "Love Books Love Series: Secret & Summer",
        "year": "2017",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/JpLnds.jpg?v=1"
    },
    {
        "title": "Nemureru Mori no Jukujo",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/M7X5Ds.jpg?v=1"
    },
    {
        "title": "Harvest Villa",
        "year": "2010",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/qY1EBs.jpg?v=1"
    },
    {
        "title": "We All Lie",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/2w5lOP_4s.jpg?v=1"
    },
    {
        "title": "21st Century Family",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/9O5lgs.jpg?v=1"
    },
    {
        "title": "Call It What You Want Season 2",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/En22b_4s.jpg?v=1"
    },
    {
        "title": "The Yearbook",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/xOBQy_4s.jpg?v=1"
    },
    {
        "title": "Deep Love Love Again",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0wve5O_4s.jpg?v=1"
    },
    {
        "title": "Wonderful Mama",
        "year": "2013",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/92KxRs.jpg?v=1"
    },
    {
        "title": "Second Chance",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/BoJ55_4s.jpg?v=1"
    },
    {
        "title": "Buff in Love",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/w11pg_4s.jpg?v=1"
    },
    {
        "title": "Liar: Surechigau Koi",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/eZ27q_4s.jpg?v=1"
    },
    {
        "title": "Rahut Rissaya",
        "year": "2007",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/lOyWEs.jpg?v=1"
    },
    {
        "title": "Second Love",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/d2xk0s.jpg?v=1"
    },
    {
        "title": "Ubaat Rai Ubaat Ruk",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/ZXeAJ_4s.jpg?v=1"
    },
    {
        "title": "Iine! Hikaru Genji-kun",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/qAxjDs.jpg?v=1"
    },
    {
        "title": "Roy Leh Sanae Rai",
        "year": "2002",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/ABZrgs.jpg?v=1"
    },
    {
        "title": "Borisut Bumbut Kaen",
        "year": "2009",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/2wK8ks.jpg?v=1"
    },
    {
        "title": "Blue Boys",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/Z8kppY_4s.jpg?v=1"
    },
    {
        "title": "Happy & Love Forever",
        "year": "2010",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/9O8Xxs.jpg?v=1"
    },
    {
        "title": "Reset",
        "year": "2014",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/O8J7Ps.jpg?v=1"
    },
    {
        "title": "Love's Relativity",
        "year": "2014",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/WdDdms.jpg?v=1"
    },
    {
        "title": "Hidden Marriage",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/RBZ8WR_4s.jpg?v=1"
    },
    {
        "title": "Naree Rissaya",
        "year": "2016",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/jWrqrs.jpg?v=1"
    },
    {
        "title": "The New World",
        "year": "2015",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/xj4BXs.jpg?v=1"
    },
    {
        "title": "I'll Give You the Stars and the Moon",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/9vRBes.jpg?v=1"
    },
    {
        "title": "Kamen Rider Amazon",
        "year": "1974",
        "rating": "7.3",
        "image": "https://i.mydramalist.com/Qo7D5_4s.jpg?v=1"
    },
    {
        "title": "The Man's Voice",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/xLNNE_4s.jpg?v=1"
    },
    {
        "title": "Bangkok Buddies",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/Z34VJs.jpg?v=1"
    },
    {
        "title": "Love as You Taste",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/d4Z5zs.jpg?v=1"
    },
    {
        "title": "Taking Love as a Contract",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/0wbJyO_4s.jpg?v=1"
    },
    {
        "title": "Sorn Ngao Ruk",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/rxjW2s.jpg?v=1"
    },
    {
        "title": "First Marriage",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/RBQb6R_4s.jpg?v=1"
    },
    {
        "title": "Possessed",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/vOzQ8s.jpg?v=1"
    },
    {
        "title": "Bangkok Love Stories: Objects of Affection",
        "year": "2019",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/nEr04s.jpg?v=1"
    },
    {
        "title": "Watashi ga Kemono ni Natta Yoru Season 2",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/QWQw2_4s.jpg?v=1"
    },
    {
        "title": "Itoshii Uso: Yasashii Yami",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/qjvNK_4s.jpg?v=1"
    },
    {
        "title": "Terror Tuesday: Extreme",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/jQgvQO_4s.jpg?v=1"
    },
    {
        "title": "Athena: Goddess of War",
        "year": "2010",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/MBJ1Ms.jpg?v=1"
    },
    {
        "title": "Love Me or Leave Me",
        "year": "2012",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/1dvbzs.jpg?v=1"
    },
    {
        "title": "Lonely Enough to Love",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/pzymr_4s.jpg?v=1"
    },
    {
        "title": "Dr. Champ",
        "year": "2010",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/GJmY9s.jpg?v=1"
    },
    {
        "title": "Irresistible",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/vBWxp_4s.jpg?v=1"
    },
    {
        "title": "Chijo no Kiss",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/j1dky_4s.jpg?v=1"
    },
    {
        "title": "When I See Your Face",
        "year": "2023",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/d0rBVA_4s.jpg?v=1"
    },
    {
        "title": "No Going Back Romance",
        "year": "2020",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/vxDZe_4s.jpg?v=1"
    },
    {
        "title": "Win the Future",
        "year": "2021",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/WE4JR_4s.jpg?v=1"
    },
    {
        "title": "Assorted Gems",
        "year": "2009",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/637zWs.jpg?v=1"
    },
    {
        "title": "Okura: Meikyu Iri Jiken Sosa",
        "year": "2024",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/x4yQLy_4s.jpg?v=1"
    },
    {
        "title": "Ghost Writer",
        "year": "2010",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/9x4w3s.jpg?v=1"
    },
    {
        "title": "Monstar",
        "year": "2013",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/2wmwks.jpg?v=1"
    },
    {
        "title": "Kimi to Sekai ga Owaru Hi ni Season 3",
        "year": "2022",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/1BEld_4s.jpg?v=1"
    },
    {
        "title": "Taisetsu na Koto wa Subete Kimi ga Oshiete Kureta",
        "year": "2011",
        "rating": "7.2",
        "image": "https://i.mydramalist.com/7qyobs.jpg?v=1"
    }
];

export default dramas;
