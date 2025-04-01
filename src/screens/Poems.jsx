// src/Poems.jsx
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import Images from '../utils/images';

const Poems = () => {
  const initialPoems = [
    {
      title: 'Radiant Beauty',
      poem: `In your eyes, a universe unfolds,<br />
          Beauty unmatched, a story told.<br /><br />
          Your smile, a beacon, lighting the way,<br />
          Charming Akshata, you brighten my day.`,
      backgroundImage: Images.radiantBeauty,
    },
    {
      title: 'Waves of Laughter',
      poem: `Your laughter dances like waves on the sea,<br />
          Smart and funny, you captivate me.<br />
          With every joke and witty line,<br />
          My heart rejoices, glad you're mine.`,
      backgroundImage: Images.wavesOfLaughter,
    },
    {
      title: 'Rain’s Embrace',
      poem: `In the rain's gentle embrace,<br />
          I see the joy upon your face.<br />
          Water baby, free and wild,<br />
          Nature's own beloved child.`,
      backgroundImage: Images.rainEmbrace,
    },
    {
      title: 'Charming Soul',
      poem: `Charming and cute, a delightful pair,<br />
          With wavy locks of flowing hair.<br />
          Your presence is a soothing balm,<br />
          In your love, I find my calm.`,
      backgroundImage: Images.charmingSOul,
    },
    {
      title: 'Strength in Struggle',
      poem: `Through trials faced and battles fought,<br />
          Your strength and grace cannot be bought.<br />
          Healing from the pains of old,<br />
          Your story of resilience unfolds.`,
      backgroundImage: Images.strengthStruggle,
    },
    {
      title: 'Dedicated Heart',
      poem: `Hardworking hands and a dedicated heart,
          In every task, you play your part.
          Lovely Akshu, kind and true,
          The world is brighter because of you.`,
      backgroundImage: Images.dedicatedHeart,
    },
    {
      title: 'Lucky Stars',
      poem: `Under the canopy of night,<br />
          I thank my stars with all my might.<br />
          For in this life, I’ve found my way,<br />
          To you, my love, my Princess.`,
      backgroundImage: Images.luckyStars,
    },
    {
      title: 'Healing Journey',
      poem: `From shadows deep, you rise anew,<br />
          Healing wounds with strength in view.<br />
          Your courage shines, a guiding light,<br />
          Together, we'll embrace the night.`,
      backgroundImage: Images.healedGirl,
    },
    {
      title: 'Kindred Spirit',
      poem: `Kind-hearted soul with endless grace,<br />
          Compassion shines upon your face.<br />
          In your embrace, I find my home,<br />
          With you, I know I’m not alone.`,
      backgroundImage: Images.kindredSpirit,
    },
    {
      title: 'Eternal Sunshine',
      poem: `Your smile, a burst of morning light,<br />
          Dispelling darkness, making things right.<br />
          Gorgeous Akshata, joy you bring,<br />
          My heart's delight, my everything.`,
      backgroundImage: Images.eternalSunshine,
    },
    {
      title: 'Rain Dancer',
      poem: `In droplets' fall, you find your song,<br />
          Dancing freely, where you belong.<br />
          Water's muse, in rain's ballet,<br />
          With you, I'd waltz any day.`,
      backgroundImage: Images.rainDancer,
    },
    {
      title: 'Charming Enigma',
      poem: `Charming eyes and a playful grin,<br />
          With you, every day's a win.<br />
          Cute and clever, a perfect blend,<br />
          My love for you will never end.`,
      backgroundImage: Images.charmingGirl,
    },
    {
      title: 'Resilient Heart',
      poem: `Through life's storms, you've held on tight,<br />
          Emerging stronger, shining bright.<br />
          Healing wounds with tender care,<br />
          In your strength, I find my prayer.`,
      backgroundImage: Images.resilientGirl,
    },
    {
      title: 'Devoted Love',
      poem: `Dedicated to the core,<br />
          In you, I've found the one I adore.<br />
          Lovely Akshata, kind and pure,<br />
          With you, my love, I'm secure.`,
      backgroundImage: Images.devotedLove,
    },
    {
      title: 'Fortunate Fate',
      poem: `Lucky am I to call you mine,<br />
          In your presence, stars align.<br />
          Charming, cute, and all things sweet,<br />
          With you, my life is made complete.`,
      backgroundImage: Images.fortunateFate,
    },
    {
      title: 'Healing Hands',
      poem: `Your touch, a balm for aching souls,<br />
          Healing hearts and making whole.<br />
          Through trauma's depths, you've found your way,<br />
          Into the light of a brighter day.`,
      backgroundImage: Images.healingHands,
    },
    {
      title: 'Gentle Spirit',
      poem: `Kind-hearted angel, gentle and true,<br />
          The world is better because of you.<br />
          In your eyes, compassion gleams,<br />
          You are the woman of my dreams.`,
      backgroundImage: Images.gentleSPirit,
    },
    {
      title: 'Sunlit Smile',
      poem: `Your smile outshines the morning sun,<br />
          Gorgeous Akshu, you're the one.<br />
          With every laugh and every glance,<br />
          You lead my heart in a joyful dance.`,
      backgroundImage: Images.sunlitSpirit,
    },
    {
      title: 'Rain’s Melody',
      poem: `In the rhythm of the falling rain,<br />
          I hear your laughter, feel no pain.<br />
          Water baby, wild and free,<br />
          In your joy, I find me.`,
      backgroundImage: Images.rainGirlSpirit,
    },
    {
      title: 'Charming Grace',
      poem: `Charming whispers in the night,<br />
          Cute expressions, pure delight.<br />
          With wavy hair and sparkling eyes,<br />
          You are my heart's most cherished prize.`,
      backgroundImage: Images.charmingGrace,
    },
    {
      title: 'Strength Reborn',
      poem: `From the ashes of your past,<br />
          You've risen up, free at last.<br />
          Healing with each passing day,<br />
          In your strength, I find my way.`,
      backgroundImage: Images.strengthReborn,
    },
    {
      title: 'Enduring Love',
      poem: `Dedicated, hardworking, and kind,<br />
          In you, my love, a treasure I find.<br />
          Cutipie Akshata, my heart's desire,<br />
          You set my soul and life on fire.`,
      backgroundImage: Images.enduringLove,
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPoems = initialPoems.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPoems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPoems) % totalPoems);
  };

  const getPosition = (index) => {
    const offset = index - currentIndex;
    if (offset === 0) return 'active';
    if (offset === 1 || (offset === -totalPoems + 1)) return 'next';
    if (offset === -1 || (offset === totalPoems - 1)) return 'prev';
    return 'hidden';
  };

  return (
    <main className="poems-container">
      <ul className="slider">
        {initialPoems.map((poem, index) => {
          const position = getPosition(index);
          return (
            <li
              key={index}
              className={`item ${position}`}
              style={{ backgroundImage: `url('${poem.backgroundImage}')` }}
            >
              <div className="content">
                <h2 className="title">{poem.title}</h2>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: poem.poem }}
                ></p>
                {/* <p className="description">{poem.poem}</p> */}
              </div>
            </li>
          );
        })}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={handlePrev} aria-label="Previous">
          <KeyboardArrowLeft size={24} />
        </button>
        <button className="btn next" onClick={handleNext} aria-label="Next">
          <KeyboardArrowRight size={24} />
        </button>
      </nav>
    </main>
  );
};

export default Poems;
