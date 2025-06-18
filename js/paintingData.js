

export const paintingData = [
  //Front Wall (3 paintings)
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: [
      'static/death_of_marat.jpg',
      'static/anguish.jpg',
      'static/lady_of_shalott.jpg',
    ][i],
    info: [
      {
        title: 'The Death of Marat',
        artist: 'Jacques-Louis David- 1793',
        description: 'death of marat is inspired by a tragic event of the french revolution. Marat was a journalist and politician during the french revolution, he was known as a "friend to the people" despite his violent acts of revolution. Death of Marat portrays the moment immediately after his assassination by a woman named Charlotte Corday  in his home. The blank and dark background makes it seem as though his body is abandoned in the midst of nothing, all alone. In his hand he holds the letter Corday gave him where she asked to visit because she had a dire secret to tell him. In his other hand is a pen, a symbol of his journalism that is about to fall from his hand. His wound is dripping but just barely, a clean stab. And his face is such a calm expression, an almost serene smile.',
      },
      {
        title: 'Anguish',
        artist: 'Auguste Schenck- 1878',
        description: 'The painting shows a mother sheep standing over the body of her lamb, surrounded by a group of crows.There is so much detail in this painting, from the breath of the sheep freezing in the cold air to a trickle of blood running from the mouth of the baby into the white snow.The two are encircled by a murder of black crows, ominously waiting around for an opportunity to ruthlessly scavenge them. The monotone colours of the painting further reflect the despairing subject matter.'
      },
      {
        title: 'The Lady of Shalott',
        artist: 'John William Waterhouse- 1833',
        description: 'The painting shows the Lady of Shalott drifting down a river in a boat toward her death. Cursed to live isolated, she was forbidden to look directly at the outside world. When she glimpses Sir Lancelot through her mirror, the curse breaks. Choosing to experience life, even briefly, she leaves her tower and sails toward Camelot — knowing she will die. The autumn leaves, tapestry, and fading light symbolize her lost innocence, doomed love, and tragic choice.',
      },
    ][i],
  })),

  // Right Wall (3 paintings)
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: [
      'static/Tarakanova.jpg',
      'static/Les_Saltimbanques.jpg',
      'static/merriage.jpg',
    ][i],
    info: [
      {
        title: 'Princess Tarakanova',
        artist: 'Konstantin Flavitsky- 1864',
        description: 'The painting captures Princess Tarakanova in a prison cell during the flood of 1777. Claiming royal descent, she was imprisoned by Catherine the Great. Alone in her flooded cell, she stands on her bed as water rises, awaiting death. Her calm expression contrasts with the horror of her fate. The murky water and bare walls symbolize isolation, political betrayal, and the merciless power of empire.',
      },
      {
        title: 'The Acrobat Family',
        artist: 'Gustave Doré- 1874',
        description: 'This painting portrays a family of acrobats resting behind the scenes, their expressions marked by fatigue and sorrow. The son has suffered a serious head injury and his mother holds him weeping. The father looks on, attempting to comfort his family, but to no avail. The other circus performers watch in sadness in the background. It is unclear what caused the accident, but it is assumed that the boy fell from a dangerous balancing device. The family is surrounded by an owl and two dogs, symbolizing wisdom and loyalty. ',
      },
      {
        title: 'The Unequal Marriage',
        artist: 'Vasily Pukirev- 1862',
        description: 'A young woman is forced to marry an older, powerful man. The bride stands pale and resigned, her hands clenched in despair. The groom smiles smugly, unaware or indifferent. Surrounding guests pretend to celebrate, masking the emotional violence beneath. Behind the husband is  his deceased wife watching the young girl go through the same thing as her. Pukirev persona is also in the painting, beside the girl, he is probably her lover, watching her get married off. The painting criticizes arranged marriages and lost autonomy — with the bridal veil and church setting emphasizing sacrifice over love.',
      },
    ][i],
  })),

  // Left Wall (3 paintings)
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: [
      'static/Stańczyk.jpg',
      'static/Ophelia.jpg',
      'static/ivanthet.jpg',
    ][i],
    info: [
      {
        title: 'Stańczyk',
        artist: 'Jan Matejko- 1862',
        description: 'Stańczyk, the court jester, sits alone in deep thought while a royal ball continues in the background. He has just learned of a military loss and is the only one mourning. The discarded letter at his feet reveals the tragic news. His red costume, once a symbol of mockery, becomes a mask for wisdom and patriotism. The painting highlights the irony of a clown being the most serious figure in the room — reflecting loss, foresight, and national sorrow.'
      },
      {
        title: 'Ophelia',
        artist: ' Sir John Everett Millais- 1851',
        description: 'The painting depicts Ophelia singing while floating in a river just before she drowns Ophelia’s father was killed by her own lover- Hamlet, resulting into her going into madness. While picking flowers for her father’s grave, she slips and falls into the water. The grief and madness conviced her to keep sinking into the water. The flowers around her are symbolic- poppies  mean death, daisies- innocence, pansies - love.'
      },
      {
        title: 'Ivan the Terrible and His Son',
        artist: 'Ilya Repin-  1885',
        description: 'This intense painting portrays Tsar Ivan IV cradling his dying son, whom he has just struck in a fit of rage. Ivan’s wide, haunted eyes are filled with horror and regret, while the prince lies limp, bloodied from the blow. The rich reds of the carpet and garments echo both royal grandeur and violence. The painting is a raw depiction of guilt, madness, and the destruction caused by unchecked power — capturing a single moment of irreversible tragedy.'
      },
    ][i],
  })),

  // Back Wall (3 paintings)
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: [
      'static/Orpheus-And-Euryd.jpg',
      'static/The_Last_Day_of_Pompeii.jpg',
      'static/the_meeting_on_the_turret_stairs.jpg',
    ][i],
    info: [
      {
        title: 'Orpheus and Eurydice',
        artist: 'Frederic Leighton- 1864',
        description: 'The painting shows the heartbreaking moment Orpheus turns to look at Eurydice, just before she vanishes back into the Underworld. Having won her return through music, his one condition was not to look back — a condition he breaks in a moment of doubt and love. Eurydice’s fading body and Orpheus’s horrified expression capture the fragility of trust and the permanence of loss. Their intertwined hands slipping apart symbolize the pain of separation and the tragic cost of hesitation.',
      },
      {
        title: 'The Last Day of Pompeii',
        artist: 'Karl Bryullov- 1833',
        description: 'The painting shows the chaotic and tragic final moments as Mount Vesuvius erupts over Pompeii. Families flee in terror, clutching loved ones and sacred objects. Amid flames and falling ash, some try to escape while others accept their fate. The light breaking through the smoke serves as both doom and divine judgment. The work symbolizes the fragility of civilization and the suddenness of catastrophe.',
      },
      {
        title: 'The Meeting on the Turret Stairs',
        artist: 'Frederic William Burton- 1864',
        description: 'Hellelil falls in love with her bodyguard Hilderbrand. Her father disapproves and orders her 7 brothers to murder Hilderbrand, he kills 6 of them. She saves her youngest brother but he imprisons her and sell her as a slave. This is the lover’s last meeting.',
      },
    ][i],
  })),
];