import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
      _id: uuid(),
      id: 1,
      Name: "Aquanox Deep Descent",
      Price: "1139",
      Category: "ACTION",
      ratings: "4.2",
      info:
        "Aquanox Deep Descent is a first person underwater vehicle shooter, in which players control in the dystopian deep sea world of Aqua.",
      img:
        "https://cdn1.epicgames.com/116b93c8b15c4304b7629f0861523322/offer/EGS_AquanoxDeepDescent_DigitalArrow_S2-1200x1600-712542c3f4513431f9c66c560e287d22.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 2,
      Name: "Cyberpunk 2077",
      Price: "2999",
      Category: "ACTION",
      ratings: "4.8",
      info:
        "Cyberpunk 2077 is an open-world, action-adventURE RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
      img:
        "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EN_CDPROJEKTRED_Cyberpunk2077NG_S2_1200x1600_1200x1600-df23d2b309d54f2dd12b4f498d51f395?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 3,
      Name: "God of War",
      Price: "3299",
      Category: "ACTION",
      ratings: "4.9",
      info:
        "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.",
      img:
        "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 4,
      Name: "Dead by Daylight",
      Price: "749",
      Category: "ACTION",
      ratings: "4.2",
      info:
        "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
      img:
        "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S4_1200x1600-f2a7ae8676457d052c1344ce717dfb7a?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 5,
      Name: "Rise of the Tomb Raider: 20 Year Celebration",
      Price: "999",
      Category: "ACTION",
      ratings: "4.7",
      info:
        "Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 6,
      Name: "Far Cry 6",
      Price: "2999",
      Category: "ACTION",
      ratings: "4.2",
      info:
        "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by  following in his bloody footsteps.",
      img:
        "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 7,
      Name: "Ghostrunner",
      Price: "2124",
      Category: "ACTION",
      ratings: "3.2",
      info:
        "Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes.",
      img:
        "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 8,
      Name: "Lifeless Planet: Premier Edition",
      Price: "484",
      Category: "ACTION",
      ratings: "3.7",
      info:
        "PREMIER EDITION - While seeking life on a distant planet, an astronaut discovers an abandoned Russian town. He suspects his mission is a hoax until a mysterious young woman saves him from a strange and deadly phenomenon...",
      img:
        "https://cdn1.epicgames.com/9ce4c6f216cf43e7ba5eff1045b6e08d/offer/EGS_LifelessPlanetPremierEdition_Stage2Studios_S2-1200x1600-5f4d14bd88796e69a924d7a53d786f8a.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 9,
      Name: "Brothers - A Tale of Two Sons",
      Price: "829",
      Category: "ADVENTURE",
      ratings: "3.8",
      info:
        "Guide two brothers on an epic fairy tale journey from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios. This is one journey you will never forget.",
      img:
        "https://cdn1.epicgames.com/offer/615659ff36244d258ef6c6a827e32c5d/Brothers_Port_1200x1600_1200x1600-ee43c7558877b4470f607a0c140ee3d5?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 10,
      Name: "Tomb Raider GOTY",
      Price: "899",
      Category: "ADVENTURE",
      ratings: "4.8",
      info:
        "Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S2_1200x1600-a700eac197c57b46cfc99a08b1d62589?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 11,
      Name: "Starsand",
      Price: "469",
      Category: "ADVENTURE",
      ratings: "2.2",
      info:
        "Starsand is a mystic survival game set among the dunes of an arcane desert. An open-world full of danger, vast environments and mysterious happenings awaits you! Explore, hunt, craft, build – and SURVIVE",
      img:
        "https://cdn1.epicgames.com/offer/c7b771d17305491a9962d0c3de75fe8b/EGS_Starsand_TunnelVisionStudio_S2_1200x1600-91ced8d0de3c173e4ef0922e81957506?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 12,
      Name: "Gamedec",
      Price: "1499",
      Category: "ADVENTURE",
      ratings: "2.7",
      info:
        "Gamedec is a single-player cyberpunk isometric RPG. You are a game detective, who solves crimes inside virtual worlds.",
      img:
        "https://cdn1.epicgames.com/b8abdf9f9bc64ed6b4128a71fd47607f/offer/EGS_Gamedec_AnsharStudios_S2-1200x1600-763684808efe485a0b04677628847926.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 13,
      Name: "Claire de Lune",
      Price: "939",
      Category: "ADVENTURE",
      ratings: "2.8",
      info:
        "Claire de Lune is a story-driven puzzle adventURE game set in a science fiction universe. You play as John, who must use his ingenuity, agility, and his trusty Nanogun",
      img:
        "https://cdn1.epicgames.com/470e78f71f7a4b8eb05f1ec1422553e6/offer/EGS_ClairedeLune_TacticStudios_S2-1200x1600-118440d5869fe22589e683581d9579a4.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 14,
      Name: "DEATH STRANDING",
      Price: "4173",
      Category: "ADVENTURE",
      ratings: "3.2",
      info:
        "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding.",
      img:
        "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_Tall-1280x1440-5a96ed93665756b28f6d70e65266e64c.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 15,
      Name: "Amnesia: Rebirth",
      Price: "707",
      Category: "ADVENTURE",
      ratings: "4.2",
      info:
        "Amnesia: Rebirth, a new descent into darkness from the creators of the iconic Amnesia series. A harrowing journey through desolation and despair, exploring the limits of human resilience.",
      img:
        "https://cdn1.epicgames.com/b2df9b20c72446d690718965da41c7ad/offer/EGS_AmnesiaRebirth_FrictionalGames_S2-1200x1600-06261861317a4d878f0391cbcf127a5a.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 16,
      Name: "Sheltered",
      Price: "459",
      Category: "STRATEGY",
      ratings: "4.1",
      info:
        "Sheltered is a deep and emotional survival management game. You take on the role of protecting four family members who, after a global apocalypse, have found their way to a deserted shelter.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Sheltered_Unicube_S4_1200x1600-58640350f28283adb5f1340114ad9aaa?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 17,
      Name: "Tom Clancy’s Rainbow Six Extraction",
      Price: "1999",
      Category: "STRATEGY",
      ratings: "4.8",
      info:
        "Team Rainbow now faces the greatest terror ever: a lethal, mutating alien invasion.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_R6E_STD_EPIC_Store Portrait_1200x1600_UK_1200x1600-9859512196094e740761af80c09a41d6?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 18,
      Name: "Surviving Mars",
      Price: "699",
      Category: "STRATEGY",
      ratings: "3.2",
      info:
        "The time has come to stake your claim on the Red Planet and build the first functioning human colonies on Mars! There will be challenges to overcome.",
      img:
        "https://cdn1.epicgames.com/epic/offer/EGS_PDX_SurvivingMars_S2_Store Primary Promo (Portrait)-1280x1440-0eaf5ed168d8aadd7f63c808765e9021.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 19,
      Name: "HUMANKIND™",
      Price: "2399",
      Category: "STRATEGY",
      ratings: "2.6",
      info:
        "HUMANKIND™ is a historical strategy game, where you’ll be re-writing the entire narrative of human history and combining cultures to create a civilization that’s as unique as you are.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HUMANKIND_AMPLITUDEStudios_S2_1200x1600-41d8535c87839b2c2d0aeb3e43d00d57?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 20,
      Name: "War Mongrels",
      Price: "959",
      Category: "STRATEGY",
      ratings: "3.0",
      info:
        "Isometric real-time tactics game that takes place on the Eastern front of WWII. Its story-driven campaign takes inspiration in the grim events that actually took place and the real stories around them.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-ffb2a21fcca3df119bf52e91b885ca86?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 21,
      Name: "Farming Simulator 22",
      Price: "2499",
      Category: "STRATEGY",
      ratings: "4.0",
      info:
        "Take on the role of a modern farmer and creatively build your farm in three diverse American and European environments. Farming Simulator 22, animal husbandry and forestry - now with the exciting addition of seasonal cycles!",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/725818d8-9768-4a6a-a723-3039aaee1e23_1200x1600-3b6116d3fc1b566b71251d04bce27938?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 22,
      Name: "Lumberjack's Dynasty",
      Price: "589",
      Category: "SIMULATION",
      ratings: "2.0",
      info:
        "A unique first-person life simulation where you are a lumberjack building up a business and founding a lasting dynasty for generations to come.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LumberjacksDynasty_UMEOStudios_S2_1200x1600-a96578a3d1218ae217351630acd5d3dd?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 23,
      Name: "Bridge Constructor: The Walking Dead",
      Price: "349",
      Category: "SIMULATION",
      ratings: "3.2",
      info:
        "Prepare for the ultimate mashup experience! Bridge Constructor: The Walking Dead combines the legendary and with the post-apocalyptic zombie universe of AMC’s The Walking Dead.",
      img:
        "https://cdn1.epicgames.com/39697c68e46b48d2b75e17bdc417d859/offer/EGS_BridgeConstructorTheWalkingDead_ClockStoneSoftware_S2-1200x1600-a6fe394eb2f1d31fe4646b1539487ac3.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 24,
      Name: "Mind Scanners",
      Price: "165",
      Category: "SIMULATION",
      ratings: "2.2",
      info:
        "Mind Scanners is a retro-futuristic psychiatry simulation in which you diagnose the citizens of a dystopian metropolis. Locate a host of other-worldly characters and use arcade-style treatment devices to help them.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 25,
      Name: "Medieval Dynasty",
      Price: "1490",
      Category: "SIMULATION",
      ratings: "4.2",
      info:
        "Hunt, survive, build and lead in the harsh Middle Ages: Create your own Medieval Dynasty and ensure its long-lasting prosperity or die trying!",
      img:
        "https://cdn1.epicgames.com/c556d22537ed4a14a454813c9faedd3a/offer/EGS_MedievalDynasty_RenderCube_S2-1200x1600-edff6f6628146894307c4879c91b6e22.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 26,
      Name: "NBA 2K21",
      Price: "3299",
      Category: "SPORTS",
      ratings: "4.8",
      info:
        "NBA 2K21 is the latest release in the world-renowned, best-selling NBA 2K series. With exciting improvements upon its best-in-class gameplay, competitive and community online features",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 27,
      Name: "WE ARE FOOTBALL",
      Price: "1580",
      Category: "SPORTS",
      ratings: "3.2",
      info:
        "Lead your football club through national championships and to international stardom. Take over an established men’s or women’s team of your choice as its manager or bring a small team into the big league.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WEAREFOOTBALL_WinningStreakGames_S2_1200x1600-576c372b276c5f8925026cc61f84d14d?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 28,
      Name: "OVERPASS™",
      Price: "1117",
      Category: "SPORTS",
      ratings: "2.2",
      info:
        "Take control of big-name buggies and quads to negotiate scree slopes, steep inclines and various obstacles on extreme off-road and technically challenging tracks.",
      img:
        "https://cdn1.epicgames.com/undefined/offer/EGS_ZordixRacing_OVERPASS_S2-860x1148-3295107fd8e79a29354a174113ea787f.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 29,
      Name: "Steep: Standard Edition",
      Price: "350",
      Category: "SPORTS",
      ratings: "3.7",
      info:
        "Steep Defy and master the mountain alone or with friends on skis, wingsuits, snowboards and paragliders. Record and share your best stunts.",
      img:
        "https://cdn1.epicgames.com/undefined/offer/KEY_ART_LOGO_640x854-640x854-d7402c9d56f9fc6d90d5e8550420e30b.jpg?h=854&resize=1&w=6406"
    },
    {
      _id: uuid(),
      id: 30,
      Name: "Dying Light 2 Stay Human",
      Price: "2999",
      Category: "OPEN_WORLD",
      ratings: "4.2",
      info:
        "The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 31,
      Name: "EVE Online",
      Price: "2999",
      Category: "OPEN_WORLD",
      ratings: "3.5",
      info:
        "EVE Online is a free-to-play community driven space MMO where players can choose their own path from countless options.",
      img:
        "https://cdn1.epicgames.com/offer/de554cff12704db4a900032bbd194d7e/EGS_EVEOnline_CCPGames_S2_03_1200x1600-1a2f25ae90ddcb9f9ba2cdc65a2befaa?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 32,
      Name: "The Witcher 3: Wild Hunt - Game of the Year Edition",
      Price: "1413",
      Category: "OPEN_WORLD",
      ratings: "2.9",
      info:
        "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — a living weapon that can alter the shape of the world.",
      img:
        "https://cdn1.epicgames.com/14ee004dadc142faaaece5a6270fb628/offer/EGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_S2-1200x1600-d887e1b749d11e8876996227e4de5c89.jpg?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 33,
      Name: "Grand Theft Auto V",
      Price: "4899",
      Category: "OPEN_WORLD",
      ratings: "5.0",
      info:
        "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content.the fastest way to jumpstart your criminal empire in GTA Online.",
      img:
        "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640"
    },

    {
      _id: uuid(),
      id: 34,
      Name: "War Mongrels",
      Price: "959",
      Category: "FIRST_PERSON",
      ratings: "4.2",
      info:
        "Isometric real-time tactics game that takes place on the Eastern front of WWII. Its story-driven campaign takes inspiration in the grim events that actually",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-ffb2a21fcca3df119bf52e91b885ca86?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 35,
      Name: "Mind Scanners",
      Price: "199",
      Category: "FIRST_PERSON",
      ratings: "3.2",
      info:
        "Mind Scanners is a retro-futuristic psychiatry simulation in which you diagnose the citizens of a dystopian metropolis.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MindScanners_TheOuterZone_S2_1200x1600-5e01b50f89bfb5323ab42a2bdc6c1ba9?h=854&resize=1&w=640"
    },
    {
      _id: uuid(),
      id: 36,
      Name: "Rise of the Tomb Raider: 20 Year Celebration",
      Price: "999",
      Category: "FIRST_PERSON",
      ratings: "2.2",
      info:
        "Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content.",
      img:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RiseoftheTombRaider20YearCelebration_CrystalDynamics_S2_1200x1600-a73f93bb560142e08d56db4c2bfdb03c?h=854&resize=1&w=640"
    },
  ];