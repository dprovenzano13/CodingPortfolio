const dbs = [
    {
        id: "goku",
        name: "Goku",
        race: "Saiyan",
        gender: "Male",
        bio: "Goku, born Kakarot, is a male Saiyan and the main protagonist of the Dragon Ball series. Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy its people. However, an accident alters his memory, allowing him to grow up to become Earth's greatest defender and the informal leader of the Dragon Team. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
        health: "500,000",
        attack: "50,000",
        defense: "50,000",
        kiRestoreSpeed: "50,000",
        abilities: [
            "Super Saiyan Transformations",
            "Super Kamehameha",
            "Super Dragon Fist"
        ],
        img: "assets/goku.png"
    },
    {
        id: "vegeta",
        name: "Vegeta",
        race: "Saiyan",
        gender: "Male",
        bio: "Vegeta is the Prince of an extraterrestrial race of warriors known as the Saiyans just like the series' protagonist, Goku. Vegeta is extremely vain and proud, constantly referring to his heritage throughout the series. He believes he should be regarded as the strongest fighter in the Universe and becomes obsessed with surpassing Goku after fighting him. After his loss to Goku and the Z fighters, Vegeta later reluctantly unites with the heroes to thwart greater threats to the universe. Throughout the series, Vegeta's role changes from villain to antihero and later as one of the heroes, while remaining a rival to Goku. Vegeta's character, particularly his personality, has been well received. He is one of the Dragon Ball franchise's most popular characters.",
        health: "490,000",
        attack: "49,000",
        defense: "49,000",
        kiRestoreSpeed: "49,000",
        abilities: [
            "Super Saiyan Transformations",
            "Final Flash",
            "Big Bang Attack"
        ],
        img: "assets/vegeta.png"
    },
    {
        id: "gohan",
        name: "Gohan",
        race: "Human/Saiyan",
        gender: "Male",
        bio: "Gohan is a fictional character in the Dragon Ball manga series, created by Akira Toriyama. Gohan is introduced as the first son of the protagonist Goku, and his wife Chi-Chi, in chapter #196 Kakarrot, first published in Weekly Shōnen Jump magazine on October 8, 1988. Chi-Chi is a strict and protective mother to Gohan, forcing him to focus on his studies and forbidding him from practicing martial arts. However, due to the various threats to the Earth, she reluctantly allows him to fight, with him ultimately becoming one of the strongest characters in the series. Gohan has been well received by both fans and critics, the latter usually citing the character's growth from his initial appearance to his defeat of Cell.",
        health: "440,000",
        attack: "38,000",
        defense: "38,000",
        kiRestoreSpeed: "39,000",
        abilities: [
            "Super Saiyan Transformations",
            "Super Kamehameha",
            "Masenko"
        ],
        img: "assets/gohan.png"
    },
    {
        id: "trunks",
        name: "Trunks",
        race: "Human/Saiyan",
        gender: "Male",
        bio: "Trunks has his grandfather's lavender hair color (blue in the manga) and his mother's blue eyes. He has his father's eye shape, facial features and tanned skin and his hair turns blond and eyes turn (pupil-less) green when he becomes a Super Saiyan. Several characters, such as Goku, Krillin and Bulma, remark how much Trunks resembles Vegeta. For the majority of the Buu Saga, Present Trunks wears a dark green gi, an orange belt, orange wristbands and the same golden boots that Future Trunks wears, he also wears this in the movie, Bio-Broly. In the events of Broly - Second Coming, Trunks wears a light green long sleeve hoodie with a black short sleeve undershirt with a red collar, indigo blue denim shorts and his golden boots from his primary outfit. He later wears Maloja's necklace. In Dragon Ball Z: Battle of Gods, Trunks wears overalls and a blue undershirt with maroon wristbands. At the end of Dragon Ball Z, Trunks now wears a black long-sleeved shirt, a golden vest, dark gray pants and the same golden boots that he wore as a child. Later he wears a black sleeveless muscle shirt with a CAPSULE logo at the center of his shirt, gray pants and his boots from his childhood.",
        health: "470,000",
        attack: "44,000",
        defense: "43,000",
        kiRestoreSpeed: "40,000",
        abilities: [
            "Super Saiyan Transformations",
            "Galic Gun",
            "Finish Buster"
        ],
        "img": "assets/trunks.png"
    },
    {
        id: "frieza",
        name: "Frieza",
        race: "Unknown",
        gender: "Male",
        bio: "Frieza, romanized as Freeza in Japanese merchandise, Funimation's English subtitles and Viz Media's release of the manga, is a fictional character in the Dragon Ball manga series created by Akira Toriyama. Frieza makes his debut in Chapter #247: Dark Clouds Swirl Over Planet Namek, first published in Weekly Shōnen Jump magazine on October 6, 1989, as a galactic tyrant feared as the most powerful being in the universe. Despite not appearing until the manga's second half, Frieza is considered to be the most iconic antagonist from the Dragon Ball franchise due to effectively serving as the catalyst of many of the events depicted in the story, such as Goku's arrival on Earth, the Saiyans landing on Earth, and subsequently the main characters going to planet Namek. In his appearances in the manga itself, he is also directly responsible for the murder of Goku's father Bardock, the genocide of the Saiyan race, the death of Vegeta, and the second death of Goku's best friend Krillin, arguably making him Goku's most personal and significant enemy, and the final confrontation between Goku and Frieza has been hailed as one of the most memorable manga and anime battles ever.",
        health: "475,000",
        attack: "47,000",
        defense: "47,000",
        kiRestoreSpeed: "44,000",
        abilities: [
            "Eye Laser",
            "Death Beam",
            "Death Ball"
        ],
        img: "assets/frieza.png"
    },
    {
        id: "cell",
        name: "Cell",
        race: "Android",
        gender: "Male",
        bio: "Cell is the ultimate creation of Dr. Gero, who came from a future timeline, designed to possess all the abilities of the greatest fighters to have ever inhabited or visited Earth; the result was a perfect warrior, possessing numerous favorable genetic traits and special abilities. He was one of the few Red Ribbon Androids not directly completed by Dr. Gero; he was completed by Dr. Gero's Supercomputer. He is the main antagonist of the Imperfect Cell, Perfect Cell, and Cell Games Sagas.",
        health: "200,000",
        attack: "20,000",
        defense: "20,000",
        kiRestoreSpeed: "20,000",
        abilities: [
            "Energy Shield",
            "Super Kamehameha",
            "Destructo Disk"
        ],
        img: "assets/cell.png"
    },
    {
        id: "buu",
        name: "Buu",
        race: "Majin",
        gender: "Male",
        bio: "Majin Buu, generally spelled Majin Boo in subtitles of the Japanese anime, and rendered as Djinn-Boo in the Viz Media manga, is a fictional character and the final antagonist in the Dragon Ball manga series created by Akira Toriyama. He is introduced in chapter #460 Majin Boo Appears?! Majin Bū Shutsugen ka!?) first published in Weekly Shōnen Jump magazine on March 1, 1994. Majin Buu is a genie-like magical life form created by the evil warlock Bibidi that terrorized galaxies by destroying entire planets, millions of years before the events of Dragon Ball take place. He was temporarily sealed away and brought to Earth; however, Bibbidi was killed and Buu remained hidden. During the events of Dragon Ball, he is revived by Bibidi's son Babidi in order to carry on his father's plan to conquer the entire universe.",
        health: "350,000",
        attack: "29,000",
        defense: "29,000",
        kiRestoreSpeed: "28,000",
        abilities: [
            "Absorption",
            "Healing",
            "Chocolate Beam"
        ],
        img: "assets/buu.png"
    },
    {
        id: "beerus",
        name: "Beerus",
        race: "God",
        gender: "Male",
        bio: "Beerus, the God of Destruction is a character in the Dragon Ball franchise created by Akira Toriyama. Beerus made his first appearance in the 2013 feature film Dragon Ball Z: Battle of Gods as the main antagonist and returned as a supporting character in Dragon Ball Z: Resurrection 'F', as well as one of the main characters in Dragon Ball Super. He is a purple sphynx cat-like god seen wearing traditional Egyptian clothing and ornaments, whose occupation is to maintain balance by destroying planets, in contrast to the Kaiō-shin who create and preserve them. It had been stated that Beerus is a star buster by Whis. Often seen destroying planets at a whim, Beerus' two sole desires are, being quite a gourmet, enjoying the Universe's finest cooking and fighting opponents whom he considers to be worthy. The latter ultimately leads him to look for the Super Saiyan God who turns out to be one of the Saiyans now living on Earth. Eventually, Son Goku, with the help of other Saiyans, transforms into the Super Saiyan God and fights Beerus, just to be defeated by the God of Destruction. Having enjoyed the match, Beerus spares both Goku and the Earth, saying that Goku was the second strongest opponent he ever faced; first being his caretaker and martial arts teacher, Whis.",
        health: "600,000",
        attack: "60,000",
        defense: "60,000",
        kiRestoreSpeed: "50,000",
        abilities: [
            "Destruction Sphere",
            "Destruction Gods, Fierce Attack",
            "Hakai"
        ],
        img: "assets/beerus.png"
    },
    {
        id: "piccolo",
        name: "Piccolo",
        race: "Namekian",
        gender: "Male",
        bio: "Piccolo Jr., usually just called Piccolo also known as Ma Junior, is a Namekian and also the final child and reincarnation of the Demon King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls. A wise and cunning warrior who was originally a ruthless enemy of Goku, Piccolo later becomes a permanent member of the Dragon Team, largely due to forming a mutual respect to Goku and even more from forming a close bond with Goku's first-born son Gohan.",
        health: "230,000",
        attack: "25,000",
        defense: "25,000",
        kiRestoreSpeed: "25,000",
        abilities: [
            "Special Beam Cannon",
            "Tri-Form",
            "Light Grenade"
        ],
        img: "assets/piccolo.png"
    },
    {
        id: "gotenks",
        name: "Gotenks",
        race: "Human/Saiyan",
        gender: "Male",
        bio: "Gotenks, previously known as Trunkten, is the immensely powerful result of Trunks and Goten successfully using the Fusion Dance, and the first successful fusion dance character to be seen in the Dragon Ball series. He likes to call himself, The Hero of Justice or Grim Reaper of Justice.",
        health: "320,000",
        attack: "35,000",
        defense: "35,000",
        kiRestoreSpeed: "35,000",
        abilities: [
            "Super Saiyan Transformations",
            "Galactic Donut",
            "Super Ghost Kamikaze Attack"
        ],
        img: "assets/gotenks.png"
    },
    {
        id: "hit",
        name: "Hit",
        race: "Unknown",
        gender: "Male",
        bio: "Hit, renowned as Never-Miss Hit  and as the Legendary Hitman is the legendary assassin of Universe 6. In addition he also later on becomes the leader for Team Universe 6. Hit shows little emotion, likes to challenge himself, and is honorable.",
        health: "460,000",
        attack: "46,000",
        defense: "46,000",
        kiRestoreSpeed: "46,000",
        abilities: [
            "Time Skip",
            "Death Blow",
            "Vital Point Attack"
        ],
        img: "assets/hit.png"
    },
    {
        id: "krillin",
        name: "Krillin",
        race: "Human",
        gender: "Male",
        bio: "Krillin, is a supporting protagonist in the Dragon Ball manga, and the anime series Dragon Ball, Dragon Ball Z, Dragon Ball GT and Dragon Ball Super. Krillin had a brief rivalry with Goku when they first met and trained under Master Roshi, but they quickly became lifelong best friends. One of the most powerful and talented martial artists on Earth, Krillin is courageous, a faithful ally and good-natured. He is a prominent Z Fighter, despite usually being overpowered by the major enemies. His short stature and baldness (with the exception of when he grows out his hair in the Majin Buu Saga onwards) aid him in his ability to provide comic relief during tense moments. During the latter half of Dragon Ball Z, he largely retires from fighting, opting to settle down with his family instead, becoming the husband of Android 18 and the father of Marron. However, he returns to his lifestyle as a warrior later on in Dragon Ball Super.",
        health: "180,000",
        attack: "20,000",
        defense: "20,000",
        kiRestoreSpeed: "20,000",
        abilities: [
            " Kamehameha Wave",
            " Destrcuto Disk",
            " Solar Flare"
        ],
        img: "assets/krillin.png"
    },
    {
        id: "jiren",
        name: "Jiren",
        race: "Unknown",
        gender: "Male",
        bio: "Jiren, also referred to as Jiren The Gray, is a member of the Pride Troopers who participated in the Tournament of Power with the purpose of obtaining a wish from the Super Dragon Balls. Jiren is a quiet and honorable fighter, who believes in strength and justice.",
        health: "740,000",
        attack: "74,000",
        defense: "74,000",
        kiRestoreSpeed: "74,000",
        abilities: [
            "Invisisble Eye Blast",
            "Energy Barrier",
            "Overheat Magnetron"
        ],
        img: "assets/jiren.png"
    },
    {
        id: "tien",
        name: "Tien",
        race: "Human",
        gender: "Male",
        bio: "Tien Shinhan is a disciplined, reclusive and heavily devoted martial artist, and one of the strongest Earthlings within the Dragon Ball universe. He also possesses a few non-human traits due to being descended from the Three-Eyed People. He was originally a student of the Crane School who desired revenge against Goku for defeating his mentor, Mercenary Tao, but realized he was on the wrong side with the help of Master Roshi. He battles alongside the other Z Fighters when major threats to the Earth surface, often courageously engaging enemies far more powerful than himself. However, he spends most of his time training with his lifelong best friend, Chiaotzu.",
        health: "170,000",
        attack: "18,000",
        defense: "18,000",
        kiRestoreSpeed: "19,000",
        abilities: [
            "Tri Beam",
            "Solar Flare",
            "Tri-Form"
        ],
        img: "assets/tien.png"
    },
    {
        id: "android 17",
        name: "Android 17",
        race: "Android",
        gender: "Male",
        bio: "Android 17, Lapis when he was an ordinary human, is the twin brother of Android 18 and Dr. Gero's seventeenth android creation, designed to serve Gero's vendetta against Goku. Despite his interests not initially deviating from this expectation, Android 17 takes it upon himself to kill Dr. Gero, who is uncooperative with Android 18's curiosity in activating Android 16 and deemed inferior by 17. Android 17 makes a return a decade later in Dragon Ball Super, working as a national park ranger preserving wildlife from poachers. He is married and has a child, with two more children being adopted. He is asked by Goku to join Team Universe 7 in the Tournament of Power and due to Goku and Frieza's sacrifice to take out Jiren, he is left as the sole fighter remaining by the end of the tournament and the one who makes the wish on the Super Dragon Balls.",
        health: "440,000",
        attack: "43,000",
        defense: "42,000",
        kiRestoreSpeed: "42,000",
        abilities: [
            "Super Saiyan Transformations",
            "Super Kamehameha",
            "Super Dragon Fist"
        ],
        img: "assets/android17.png"
    },
    {
        id: "android 18",
        name: "Android 18",
        race: "Android",
        gender: "Female",
        bio: "Android 18, Artificial Human No. 18, Razuri when she was an ordinary human, is the twin sister of Android 17 and Dr. Gero's eighteenth android creation, designed to serve Gero's vendetta against Goku. While her interests do not initially deviate from this expectation, her curiosity to activate Android 16, in spite of Gero's orders not to do so, leads Android 17 to take it upon himself to murder Gero. Eventually, Android 18 becomes a member of the Z Fighters, as well as the wife of Krillin and the mother of their daughter Marron.",
        health: "420,000",
        attack: "40,000",
        defense: "40,000",
        kiRestoreSpeed: "40,000",
        abilities: [
            "Android Barrier",
            "Full Power Energy Ball",
            "Power Blitz"
        ],
        img: "assets/android18.png"
    },
    {
        id: "broly",
        name: "Broly",
        race: "Saiyan",
        gender: "Male",
        bio: "Broly is the main antagonist in the Broly Triple Threat trilogy. He appears to be the latest of the Legendary Super Saiyans who appears every thousand years. His father is Paragus. Broly is a light-skinned Saiyan with dark eyes and black spiky hair reaching his mid-back with short bangs framing his forehead. When he was a kid, he wore a black one-strap tunic with gray pants and brown boots, alongside a rope belt and bracelets. As an adult, Broly is very tall with a lean but well-built frame. His facial expression, even before wearing the crown, had a melancholic demeanor to it. He is shirtless while wearing white pants with a red sash draped around his waist and secured by a yellow belt with a blue gem-center. He also wears similar yellow boots with a blue gem at the top the front. It is implied that the outfit was made of a similar material to the Battle Armor, regardless of what size-increasing transformation he used, his clothing always remained intact and grew in size with him. To better control Broly and his power as his mental-instability continued to grow, Paragus placed a crown on Broly's forehead, along with wristbands and a necklace with a flat plate over the chest, each which are golden with a blue gem. Broly also wore golden bands over his biceps. After breaking free from Paragas' control, Broly's crown and armbands were destroyed. After Broly's defeat against Goku, he obtained scorch marks across his chest.",
        health: "800,000",
        attack: "80,000",
        defense: "80,000",
        kiRestoreSpeed: "80,000",
        abilities: [
            "Super Saiyan Transformations",
            "Eraser Cannon",
            "Gigantic Slam"
        ],
        img: "assets/broly.png"
    },
    {
        id: "vegito",
        name: "Vegito",
        race: "Saiyan",
        gender: "Male",
        bio: "Vegito, called Vegerot in the Viz English manga, is the immensely powerful result of the fusion between Goku and Vegeta by the use of the Potara Earrings. Vegito is the most powerful character in the Dragon Ball manga. His Fusion Dance counterpart is Gogeta. Vegito is a mixture of both Goku and Vegeta's characteristics, with a few deviations. He has the same body type as Goku, while his hair color is dark brown to reddish brown. He has Goku's softer jawline and Vegeta's sharper eyes. Vegito's upper hair style stands firmly upwards like Vegeta, while having Goku's hairline and has two bangs sticking out like a downward V shape. When he transforms into a Super Saiyan or Super Saiyan Blue, his hair shape stays the same. Vegito wears two yellow Potara earrings as result of the Potara fusion, and wears Goku's style of clothing with the colors reversed, reflecting Vegeta's outfit; he wears a blue gi and sash with an orange undershirt. Also from Vegeta, he wears white gloves and boots. In Super Dragon Ball Heroes, Vegito wears a black gi with an orange shirt on his inside and a blue obi tied over it at his waist. He also wears Vegeta's white gloves and boots from Dragon Ball Z: Resurrection F.",
        health: "780,000",
        attack: "70,000",
        defense: "60,000",
        kiRestoreSpeed: "60,000",
        abilities: [
            "Super Saiyan Transformations",
            "Final Kamehameha",
            "Beam Sword Slash"
        ],
        img: "assets/vegito.png"
    },
    {
        id: "gogeta",
        name: "Gogeta",
        race: "Saiyan",
        gender: "Male",
        bio: "Gogeta is the resulting fusion of two highly powerful Saiyans, Goku and Vegeta, when they perform the Fusion Dance properly. His voice is a dual voice that contains both Goku's and Vegeta's voices. Gogeta is famous for his amazing power and speed, and is regarded as one of the most powerful characters in the Dragon Ball Z and Dragon Ball GT series. His Potara Fusion counterpart is Vegito.  Gogeta wears the same clothes that all creations of the Fusion Dance wear. However, Gogeta's vest has a different color scheme than Gotenks': the padding around the neck and shoulders of the vest are reddish orange rather than yellow, and the vest is black rather than the dark blue vest that Gotenks wears. His hair is very similar to Vegito's, with the only differences being that Gogeta only has one free hanging lock of hair instead of two and Gogeta having Vegeta's widow's peak. Gogeta also acquires Goku's peach like skin rather than adopt Vegeta's more mild tan. Gogeta possesses Goku's body structure as he is tall and slender, but he seems to mostly possess Vegeta's facial features.",
        health: "700,000",
        attack: "60,000",
        defense: "55,000",
        kiRestoreSpeed: "55,000",
        abilities: [
            "Super Saiyan Transformations",
            "Big Bang Kamehameha",
            "Stardust Breaker"
        ],
        img: "assets/gogeta.png"
    },
    {
        id: "goku black",
        name: "Goku Black",
        race: "Saiyan",
        gender: "Male",
        bio: "Goku Black, usually referred to as Black, is the main antagonist of the Future Trunks Saga of Dragon Ball Super. His true identity is the original present Zamasu, a former North Kai and Supreme Kai apprentice serving the Supreme Kai of Universe 10, Gowasu, from the unaltered main timeline, in which he stole the body of the original present Goku and sought to destroy all mortals alongside Future Zamasu. He was given the name Goku Black by Future Bulma when he initially referred to himself as Son Goku. His original appearance is the same as his future timeline counterpart, being an above-average height Kai of slim built and green skin, and with a white Mohawk. However, after killing the original present Gowasu, he wore his former master's matching set of gold and green Potara earrings. After stealing the original present Goku's body, it underwent physical changes. While still essentially identical, he has a slightly darker skin tone and more defined eyes, along with a somewhat skinnier physique. His hair is also a noticeably dark shade of black with only four front spikes and three back ones. While initially wearing his Supreme Kai attire, he soon after taking Goku's body began wearing a sleeveless dark grey tunic, a long-sleeved black undershirt with a turtleneck, a red sash, black pants and white boots. He also gave the right Potara earring to his future counterpart while still wearing the other earring on his left ear. In the anime, he also wears a Time Ring on his right index finger, while in the manga, his counterpart is trusted with wearing it. Also, in the manga, he has dark outlines around his eyes.",
        health: "480,000",
        attack: "480,000",
        defense: "48,000",
        kiRestoreSpeed: "48,000",
        abilities: [
            "Super Saiyan Transformations",
            "Black Kamehameha",
            "God Slicer"
        ],
        img: "assets/gokublack.png"
    }
]