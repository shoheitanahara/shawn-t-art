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
  ];