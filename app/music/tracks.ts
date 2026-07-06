export type Track = {
    id: string;
    title: string;
    artist?: string;
    year?: string;
    coverSrc: string; // /public 配下のパス
    audioSrc: string; // /public 配下のパス
    lyrics?: string;  // ダイアログだけで表示
  };
  
  export const tracks: Track[] = [
    {
      id: "yachtclub",
      title: "Yacht Club",
      artist: "Shawn T. Art",
      year: "2025",
      coverSrc: "/music/covers/Hiphop.png",
      audioSrc: "/music/tracks/Yacht Club.mp3",
      lyrics: `[Verse]
Yo the ape’s got shades
Gold chains that swing
Banana peel kicks
Yeah they do their thing
Mutants in the mist
Got the yacht on lock
With a neon glow that’ll stop your clock

We’re cruising slow
But the bassline’s loud
Funky vibes rising
Pulling in the crowd
No tux no suits
Just ripped-up tees
A mutant ape anthem
We’re breaking the seas

[Chorus]
Mutant Ape Yacht Club
We run this dock
Rock the mic hard while the bassline knocks
Neon dreams
Yeah we’re never gonna stop
Mutant Ape Yacht Club
On top

[Verse 2]
Graffiti on the deck
Spray cans explode
Breakdance battles on the yacht’s main road
Eight-bit beats with a scratch in the mix
Throwback vibes but we’re future slick

Gold teeth grin while the moonlight hits
Mutant crew wild
No counterfeit fits
I’m Shawn T. Art, three-two-five-eight
Ape Yacht forever
It’s our time to create

[Chorus]
Mutant Ape Yacht Club
We run this dock
Rock the mic hard while the bassline knocks
Neon dreams
Yeah we’re never gonna stop
Mutant Ape Yacht Club
On top

[Prechorus]
The vinyl spins
The groove kicks in
A mutant wave
Let the party begin`,
    },

    {
        id: "basedapegang",
        title: "Based Ape Gang",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/basedapegang.png",
        audioSrc: "/music/tracks/Based Ape Gang.mp3",
        lyrics: `[Verse]
Out the jungle where the beats go raw
Based Ape Gang swingin' through the floor
Banana peels drop as we stomp the scene
We’re fresh like a fade with a glossy sheen

Got Raido in the lab cookin’ beats so slick
1980s flavor with a modern twist
Vinyl spins
Hear the crackle pop
We’re the kings of the block and we never stop

[Chorus]
Based Ape Gang
Yeah we swing so wild
Funky like a monkey with a golden smile
Climbin’ up the charts like a vine so high
Based Ape Gang
No we’ll never die

[Verse 2]
Boom box blastin’ on my shoulder tall
Graffiti on the wall says we run it all
We’re neon dreams in a pixel haze
Old school steez in the new school phase

Gold chains janglin’  
Yeah we got that shine  
Eighty-eight swagger with a twist of rhyme  
I’m Shawn T. Art, B A G 279  
We’re the Based Ape Gang and we never flop

[Chorus]
Based Ape Gang
Yeah we swing so wild
Funky like a monkey with a golden smile
Climbin’ up the charts like a vine so high
Based Ape Gang
No we’ll never die`,
      },

      {
        id: "sora",
        title: "SORA",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/SORA.png",
        audioSrc: "/music/tracks/SORA.mp3",
        lyrics: `[Verse 1]
Step into SORA, no lines, no map,
Just pixel skies and a freedom wrap.
Avatars float where the hearts align,
In every color, we redefine.

Wabi-Sabi, master of glass and pixel,
Art so clean, it's metaphysical.
Keiko leads with a digital flame,
Building metaverse like a household name.

[Chorus]
SORA, SORA, flyin’ so free
SORA, SORA, where we all can be
No walls, no rules, just unity
In SORA, SORA, we find our peace 

[Verse 2]
Dahchan folds with a graceful hand,
Origami dreams in a paper land.
Cute, soft, but sharp with soul,
Every fold tells a story whole.

Runné paints like a jellyfish dance,
Neon waves in a pixel trance.
UndeadBear stares with glitchy grace,
While Shawn T. Art is moving in space.

[Chorus]
SORA, SORA, flyin’ so free
SORA, SORA, where we all can be
No walls, no rules, just unity
In SORA, SORA, we find our peace 

[Outro – Spoken]
No judgment.
No gatekeepers.
Just light, just soul,
Just… SORA.`,
      },

      {
        id: "meebitsjapan",
        title: "Meebits Japan",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/MeebitsJapan.png",
        audioSrc: "/music/tracks/Meebits Japan.mp3",
        lyrics: `【Verse 1 – Fujii 10627】
Shinjuku lane, speed flash like chrome
Metaverseの街で make it my home
LarvaLabs roots, sparkin’ my flame
From voxel dreams to a global name

ゼロヨン勝負で chainを切る
On-chain drift — watch how I steer
Fujii 10627,  you’ll know
Tokyo heat in a neon glow

【Hook / Chorus – 全員】
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)

【Verse 2 – KuroShiba 4487】
Backstreet twist, smoke in the light
Gear up quick — vanish from sight
Crypto blood with a voxel soul
Run this track, I’m in control

KuroShiba 4487 — steady aim
In the drift game, we ain’t the same
Code and culture, fuse as one
From Tokyo night till the rising sun

【Hook / Chorus – 全員】
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)

【Verse 3 – Shawn T. Art 4274】
I'm Shawn T. Art 4274,
Tokyo base, kicking down the door
光の中を voxel step,
Steelの頭、chainで rep

Bullet train speed — beatに sync
街を突き抜ける digital link
追いつけないぜ、この frame rate,
History made in a voxel state

【Hook / Chorus – 全員】
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)
Who runs it? — Meebits Japan!  
Who owns it? — Meebits Japan! (ハイ!)  
Meebits Japan (Go! Go! Go!)  
Meebits Japan (Go! Go! Go!)`,
  },

  {
    id: "yugalabs",
    title: "Yuga Labs",
    artist: "Shawn T. Art",
    year: "2025",
    coverSrc: "/music/covers/Hiphop.png",
    audioSrc: "/music/tracks/YugaLabs.mp3",
    lyrics: `[Hook / Chorus]
Guess who built the scene? — YugaLabs!
Guess who runs the dream? — YugaLabs!
You tried to doubt the chain, but look what collapsed,
Now the world moves on — with YugaLabs.

[Verse 1]
Now this looks like a job for Apes,
So everybody just fill that space.
We need a little bit of Yuga flame,
‘Cause without Labs, it ain’t the same.

Mutants roar with a toxic bite,
Yacht Club kings take the stage tonight.
Otherside open, the portal wide,
Step through the code, take a digital ride.

[Hook / Chorus]
Guess who built the scene? — YugaLabs!
Guess who runs the dream? — YugaLabs!
You tried to doubt the chain, but look what collapsed,
Now the world moves on — with YugaLabs.

[Verse 2]
Kids so fed up with the old-school rules,
Laugh at the critics, they look like fools.
We don’t fade, we don’t disguise,
Culture eternal, it multiplies.

This is payback, code in veins,
Apes on top, still run the game.
Mutants evolve, future survives,
YugaLabs proving the culture thrives.

[Hook / Chorus] (x2)
Guess who built the scene? — YugaLabs!
Guess who runs the dream? — YugaLabs!
You tried to doubt the chain, but look what collapsed,
Now the world moves on — with YugaLabs.`,
    },

    {
        id: "goodmorning",
        title: "Good Morning",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Hiphop.png",
        audioSrc: "/music/tracks/Good Morning.mp3",
        lyrics: `[Verse 1]
Sunshine creepin’ on my screen,
Floor checkin’ while I sip that bean.
B A Y C cap, morning glow,
Feelin’ fresh, got that GM flow.

Toothbrush jammin’, Discord ping,
Someone minted a wild new thing.
PFP crisp, fit just right,
I’m an ape — yeah, the vibe’s so tight!

[Chorus / Hook]
 GM GM! What’s up, fam?
Apes in the mirror go BAM BAM BAM!
From Tokyo clocks to NYC,
We rise up loud with that energy! 

[Verse 2]
WAGMI dreams, banana toast,
Sayin’ GM way more than I post.
Ape life breezy, never too slow,
Ridin’ good vibes — now you know.

No suit, no tie, just hoodie grace,
Mutants with me, we own this space.
Who's that grinnin’ with NFT fate?
It’s Shawn T. Art 3258`,
        },

    {
        id: "otherside",
        title: "Otherside",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Hiphop.png",
        audioSrc: "/music/tracks/Otherside.mp3",
        lyrics: `(Verse 1)
Step into the Otherside, where the Apes run wild,
Digital jungle, got that metaverse style,
Bathroom Blitz poppin’, vibes hittin’ the max,
Pixelated dreams, yo, the future’s got facts,
ApeCoin fuels the quests, stackin’ up the gold,
Virtual world’s alive, stories yet untold,
From blockchain hustle to the neon-lit stream,
Otherside’s the spark, it’s the ultimate dream!  

(Chorus)
Otherside! (Otherside!) Otherside! (Otherside!) 
Where the Apes all ride,
Otherside! (Otherside!) Otherside! (Otherside!) 
Metaverse worldwide,
Bored Apes reign, in this digital scene,
Bathroom Blitz bangs, it’s the king of the dream!
Otherside! Otherside! Where the Apes all ride

 (Verse 2)
ApeChain’s the pulse, keepin’ systems in sync,
Neon skies glowin’, got the stars on the brink,
Questlines droppin’, pullin’ players to the core,
Yuga’s craftin’ worlds, always givin’ us more,
From Bored Ape yachts to the virtual flow,
NFTs ignitin’, watch the metaverse grow,
Otherside’s the vibe, where the Apes hold sway,
Buildin’ up the future, yo, it’s here to stay! 

(Chorus)
Otherside! (Otherside!) Otherside! (Otherside!) 
Where the Apes all ride,
Otherside! (Otherside!) Otherside! (Otherside!) 
Metaverse worldwide,
Bored Apes reign, in this digital scene,
Bathroom Blitz bangs, it’s the king of the dream!
Otherside! Otherside! Where the Apes all ride`,
        },

        {
            id: "garga",
            title: "Garga",
            artist: "Shawn T. Art",
            year: "2025",
            coverSrc: "/music/covers/Hiphop.png",
            audioSrc: "/music/tracks/Garga.mp3",
            lyrics: `(Verse 1)
From blockchain corners to the Otherside shine,
Garga’s got the vision, yo, his stars align,
ApeCoin stackin’, he’s writin’ the code,
Future’s lookin’ dope, watch him pave the road,
Community’s hyped, they’re ridin’ his wave,
NFT hustle, he’s bold and brave,
From Vegas ink dreams to the digital crown,
Garga’s buildin’ empires, never backin’ down! 

(Chorus)
Garga! Garga! King of the chain,
ApeCoin poppin’, he’s changin’ the game,
Bored Apes risin’, they’re callin’ his name,
CryptoGarga’s the flame, yo, he’s bringin’ the fame!

Crew’s got his back, yeah, the fam’s full force,
Garga’s droppin’ wisdom, settin’ trends, no remorse,
“$APE treasury dreams,” he’s callin’ the shots,
Buildin’ up the vault with them Bored Ape lots,
He’s spittin’ new moves, got the blockchain lit,
Every tweet he drops, yo, it’s hit after hit,
From pixelated vibes to the crypto throne,
Garga’s leadin’ the pack, he’s bad to the bone! 

(Chorus)
Garga! Garga! King of the chain,
ApeCoin poppin’, he’s changin’ the game,
Bored Apes risin’, they’re callin’ his name,
CryptoGarga’s the flame, yo, he’s bringin’ the fame!

(Outro)
Word on the street, @CryptoGarga
’s the champ,
Lightin’ up the future with his blockchain stamp,
From ‘80s hip-hop to the crypto frontier,
Garga’s droppin’ bars, yo, the crowd’s gonna cheer!`,
            },


        {
            id: "happymutantmonday",
            title: "Happy Mutant Monday",
            artist: "Shawn T. Art",
            year: "2025",
            coverSrc: "/music/covers/Hiphop.png",
            audioSrc: "/music/tracks/Happy Mutant Monday.mp3",
            lyrics: `[Verse 1]
Wake up fresh with the mutant drip,
Serum buzzin’, I’m on that trip.
Mirror flash, got that grin,
New week starts — let’s dive in.

Toes tappin’, speaker blastin’,
Discord pings — vibes everlastin’.
No more blues, no delay,
We do it loud the mutant way!

[Chorus – Hook Only]
Happy Mutant Monday!
Happy Mutant Monday!
Happy Mutant Monday!
Happy Mutant Monday! 

[Verse 2]
No suit, no tie, just style,
PFP glowin’, mutant smile.
From Tokyo streets to NYC,
We bring the vibes, we swing so free.

Floor might bounce, but we don’t trip,
We just post, and sip, and drip.
One big fam, from night to day,
MAYC’s how we start our week, hey!

[Chorus – Hook Only Repeat]
Happy Mutant Monday!
Happy Mutant Monday!
Happy Mutant Monday!
Happy Mutant Monday! `,
            },
    
            {
                id: "cultureneverdies",
                title: "Culture Never Dies",
                artist: "Shawn T. Art",
                year: "2025",
                coverSrc: "/music/covers/Hiphop.png",
                audioSrc: "/music/tracks/Culture Never Dies.mp3",
                lyrics: `[Verse 1]
They question the culture, they call it a trend,
But you can’t see the future, you don’t comprehend.
While you laugh at the chain, we building the rise,
History repeats — Culture never dies.

CryptoPunks lit it, the spark don’t fade,
BAYC roar, whole empire made.
Mutants evolve, new blood in the veins,
Meebits march 3D, breaking the chains.

[Hook / Chorus]
Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.

Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.


[Verse 2]
Azuki bloom sharp with a katana swing,
CloneX drop, future avatars bring.
Doodles paint loud, colors cut through the gray,
Cool Cats flex, still the kids wanna play.

Moonbirds rise, cast wisdom from skies,
World of Women shine, diversity flies.
Not just a market, it’s the art we defend,
This chain is the story that never will end.

[Hook / Chorus]
Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.

Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.

[Verse 3]
From Tokyo nights to the Brooklyn blocks,
Every mint stamped like eternal clocks.
Larva Labs roots, RTFKT flame,
Legends on chain, you remember the name.

They call it a bubble, but watch how it grows,
Each floor built higher, everybody knows.
Call it a fad? That’s a weak man’s cries,
Future is written — Culture never dies.

[Hook / Chorus] 
Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.

Culture never dies, no mask, no lies,
Blood in the block, fire in the eyes.
Break through the frame, smash every disguise,
Culture never dies — we immortalized.`,
                },
    
                {
                    id: "apestogetherstrong",
                    title: "Apes Together Strong",
                    artist: "Shawn T. Art",
                    year: "2025",
                    coverSrc: "/music/covers/Hiphop.png",
                    audioSrc: "/music/tracks/Apes Together Strong.mp3",
                    lyrics: `[Verse 1]
Backpack on, hoodie tight,
Scroll the chain in the dead of night.
Doubt the apes? You outta your mind,
We flip the script, leave the past behind.

Discord buzzin’, the pings go loud,
Mutants crash in, we draw a crowd.
Not just pics, it’s a lifestyle code,
We talk that heat, and we walk that road.

[Hook / Refrain]
Apes together strong, yeah we run this crew,
Laugh at the haters, what else is new?
Mock all you want, but you’ll sing along,
End of the day — Apes together strong.

[Verse 2]
Gold or green, full drip, full flex,
Every PFP cashin’ respect checks.
Tokyo nights, to the NYC scene,
We show up loud, keep the jungle mean.

It ain’t just fame, it’s love, it’s code,
Chain-linked bond, heavy we load.
One tribe, one vibe, beat stays long,
You see an ape — you know where you belong.

[Hook / Refrain]
Apes together strong, yeah we run this crew,
Laugh at the haters, what else is new?
Mock all you want, but you’ll sing along,
End of the day — Apes together strong.`,
                    },
    
    {
        id: "sorahalloweenjam",
        title: "SORA HALLOWEEN JAM",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/SORA HALLOWEEN JAM.png",
        audioSrc: "/music/tracks/SORA HALLOWEEN JAM.mp3",
        lyrics: `[Verse 1]
Welcome to the space, 光るSORA
ハロウィンナイトで highになろう
Pumpkin light, キャンディのrain
ここに集まる creative chain

[Rap 1]
Yo, trick or treat, 音でconnect
仮装もartも perfect set
From Spatial floor to cyber sky
SORAの仲間で we so fly

[Chorus]
SORA Halloween, everybody say "HEY!"
SORA Halloween, party all the way
SORA Halloween, bounce, don't stop
SORA Halloween, let the beat drop!

SORA! (yeah yeah)
Halloween! (oh oh)
SORA! (hands up)
Halloween! (let's go!)

[Verse 2: Member Shoutouts]
Wabi-Sabi — mastermind of the crew
Artとcommunity, breaking through
Kéiko's pixel, shining bright
Commit to the metaverse, day and night

[Rap 2]
Dahchan folds the world so neat
Origami magic, cool & sweet
Runné's jellyfish, floating free
UndeadBearもキュートなenergy

[Chorus]
SORA Halloween, everybody say "HEY!"
SORA Halloween, party all the way
SORA Halloween, bounce, don't stop
SORA Halloween, let the beat drop!

SORA! (yeah yeah)
Halloween! (oh oh)
SORA! (hands up)
Halloween! (let's go!)

[Verse 3: Unity]
仮装 parade, 笑顔のwave
未来に繋ぐこのsound we gave
五人のartで夜をdecorate
SORA Halloween, Let's celebrate

[Rap 3]
Hands up high, feel that heat
Spatial worldで meet and greet
Creators' power, trick or treat
SORA forever, can't be beat!

[Chorus]
SORA Halloween, everybody say "HEY!"
SORA Halloween, party all the way
SORA Halloween, bounce, don't stop
SORA Halloween, let the beat drop!

SORA! (yeah yeah)
Halloween! (oh oh)
SORA! (hands up)
Halloween! (let's go!)`,
    },
    
    {
        id: "dracula",
        title: "Dracula",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Dracula.png",
        audioSrc: "/music/tracks/Dracula.mp3",
        lyrics: `[Intro]
Dark sky crack, thunder in the chain,
Doors of the crypt swing open again.
Fog on the floor, bass in the chest,
Dracula's here — no time to rest.

[Hook / Chorus]
Haunted beats, we run this town,
Ghosts in the chain, never shutting down.
Dracula calls from the other side,
SORA's the castle, where the spirits ride.

[Verse 1]
I am the wicked, the Dracula king,
Rise from the coffin when the church bells ring.
Blood moon glowing, I sharpen my fangs,
Through shadows and fog where the Halloween hangs.

I found SORA glowing, a portal of light,
A metaverse castle for creatures of night.
Bats in the rafters, skeletons cheer,
"Welcome to the party — the vampire's here."

[Hook / Chorus]
Haunted beats, we run this town,
Ghosts in the chain, never shutting down.
Dracula calls from the other side,
SORA's the castle, where the spirits ride.

[Verse 2]
Pumpkins are laughing, their faces insane,
Chains start rattling, they sing in my name.
I drink from the rhythm, I bite on the sound,
Every beat drips blood as the spirits surround.

No mercy, no mirrors, just power I claim,
In Web3 domains, they all chant my name.
Eternal, immortal, forever I reign,
SORA's my kingdom — the dark will remain.

[Hook / Chorus]
Haunted beats, we run this town,
Ghosts in the chain, never shutting down.
Dracula calls from the other side,
SORA's the castle, where the spirits ride.`,
    },

    {
        id: "pumpkin",
        title: "Pumpkin",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Pumpkin.png",
        audioSrc: "/music/tracks/Pumpkin.mp3",
        lyrics: `[Verse 1]
I was raised in the dirt, just a pumpkin seed,
Nothing but a harvest for the farmer's need.
Thought I'd end up cooked, just another meal,
A silent fate — that's how life feels.

Then came a shadow, a voice so sly,
Wabi-Sabi whispered, "You're not meant to die.
I'll carve your skin, light fire in your eyes,
Send you to SORA where the avatars rise."

[Hook / Chorus]
Pumpkin, Pumpkin, glowing in the night,
Carved with a grin, set the world alight.
Pumpkin, Pumpkin, fear in my flame,
SORA's my kingdom, remember the name.

[Verse 2]
Blade cut deep, my flesh was torn,
From a humble fruit, a monster was born.
With a crooked smile and a twisted glow,
I laugh at the dark when the cold winds blow.

Avatars gather, they scream, they cheer,
Some run in fear, but they all draw near.
I'm more than a meal, I'm a sign of the game,
Pumpkin eternal in the Web3 flame.

[Hook / Chorus]
Pumpkin, Pumpkin, glowing in the night,
Carved with a grin, set the world alight.
Pumpkin, Pumpkin, fear in my flame,
SORA's my kingdom, remember the name.

[Bridge]
From the fields of silence to a digital stage,
Pumpkin reborn, escape from the cage.
Wabi-Sabi chose me, I broke the chain,
Now I burn forever in the metaverse reign.

[Hook / Chorus]
Pumpkin, Pumpkin, glowing in the night,
Carved with a grin, set the world alight.
Pumpkin, Pumpkin, fear in my flame,
SORA's my kingdom, remember the name.`,
    },

    {
        id: "zombie",
        title: "Zombie",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Zombie.png",
        audioSrc: "/music/tracks/Zombie.mp3",
        lyrics: `[Verse 1]
I was buried in the dirt, sleeping in the ground,
Silent in the shadows, never made a sound.
Dahchan and Kéiko dug me out one night,
Runné dressed me up, made the fit look tight.

Wabi-Sabi came, said "follow my lead,"
Dragged me to SORA where the avatars feed.
Didn't wanna shine, just hide in the crowd,
But the music pulled me in, the bass too loud.

[Hook / Chorus]
Zombie, zombie, stumbling slow,
Didn't wanna dance but they won't let go.
Zombie, zombie, caught in the game,
SORA's alive and it calls my name.

[Verse 2]
They painted their faces, imitating me,
Human zombies laughing — what a sight to see.
I scratch my head, can't understand,
Why they copy the dead, but they hold my hand.

Awkward at first, but the rhythm's sweet,
Even a zombie can move his feet.
Avatars shining, the costumes wild,
For once in my death, I just laughed and smiled.

[Hook / Chorus]
Zombie, zombie, stumbling slow,
Didn't wanna dance but they won't let go.
Zombie, zombie, caught in the game,
SORA's alive and it calls my name.

[Verse 3]
In the corner I hide, but they pull me near,
Every laugh, every cheer, breaks down my fear.
If the living pretend to be one like me,
Then maybe the grave is where I'm free.

Now I stumble with pride on the haunted floor,
A shy old corpse, but they ask for more.
Tonight I belong, in this crowd so strange,
Zombie forever — in SORA I change.

[Hook / Chorus]
Zombie, zombie, stumbling slow,
Didn't wanna dance but they won't let go.
Zombie, zombie, caught in the game,
SORA's alive and it calls my name.`,
    },
    
    {
        id: "bats",
        title: "Bats",
        artist: "Shawn T. Art",
        year: "2025",
        coverSrc: "/music/covers/Bats.png",
        audioSrc: "/music/tracks/Bats.mp3",
        lyrics: `[Verse 1]
We are the bats, creatures of the dark,
Tiny monsters flying, leaving shadows stark.
No one dares to step inside our hall,
Echoes in the mansion, we watch them all.

Then one night, the ground did shake,
SORA appeared, a new world to make.
At first we hissed, wings filled with rage,
But kindness broke through our haunted cage.

[Hook / Chorus]
Bats, bats, in the midnight sky,
Spread your wings, let the rhythm fly.
Dance like bats, together we soar,
Halloween beats on the SORA floor.

[Verse 2]
They brought the lanterns, the candles, the flame,
Decorations strange, but we loved the game.
Pumpkins glowing, ghosts in the air,
We found a new family waiting there.

Now this castle is shining bright,
From fear to joy on a Halloween night.
We flap our wings in a graceful trance,
A swarm of bats in a timeless dance.

[Hook / Chorus]
Bats, bats, in the midnight sky,
Spread your wings, let the rhythm fly.
Dance like bats, together we soar,
Halloween beats on the SORA floor.

[Bridge]
From shadows to neon, we changed our fate,
This metaverse kingdom we celebrate.
What once was haunted is now our song,
In SORA together, we all belong.

[Hook / Chorus]
Bats, bats, in the midnight sky,
Spread your wings, let the rhythm fly.
Dance like bats, together we soar,
Halloween beats on the SORA floor.`,
    },
];