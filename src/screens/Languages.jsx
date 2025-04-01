import React from 'react';

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  } else {
    alert('Sorry, your browser does not support speech synthesis.');
  }
}

const ALL_LANGUAGES = [
  // 1
  { name: 'English', phrase: 'I love you the most' },
  // 2
  { name: 'Kannada', phrase: 'Naanu ninnanu bhala preetisutteene' },
  // 3
  { name: 'Marathi', phrase: 'Mi tujhyavar khup prem karto' },
  // 4
  { name: 'Konkani', phrase: 'Hanv tuka khup mogg karta' },
  // 5
  { name: 'Hindi', phrase: 'Main tumse bohot pyar karta hoon' },
  // 6
  { name: 'French', phrase: "Je t'aime" },
  // 7
  { name: 'Spanish', phrase: 'Te amo' },
  // 8
  { name: 'German', phrase: 'Ich liebe dich' },
  // 9
  { name: 'Italian', phrase: 'Ti amo' },
  // 10
  { name: 'Portuguese', phrase: 'Eu te amo' },
  // 11
  { name: 'Russian', phrase: 'Я тебя люблю (Ya tebya lyublyu)' },
  // 12
  { name: 'Chinese', phrase: '我爱你 (Wǒ ài nǐ)' },
  // 13
  { name: 'Japanese', phrase: '愛してる (Aishiteru)' },
  // 14
  { name: 'Korean', phrase: '사랑해 (Saranghae)' },
  // 15
  { name: 'Arabic', phrase: 'أحبك (Aḥibbak)' },
  // 16
  { name: 'Turkish', phrase: 'Seni seviyorum' },
  // 17
  { name: 'Swedish', phrase: 'Jag älskar dig' },
  // 18
  { name: 'Norwegian', phrase: 'Jeg elsker deg' },
  // 19
  { name: 'Danish', phrase: 'Jeg elsker dig' },
  // 20
  { name: 'Finnish', phrase: 'Minä rakastan sinua' },
  // 21
  { name: 'Polish', phrase: 'Kocham cię' },
  // 22
  { name: 'Czech', phrase: 'Miluji tě' },
  // 23
  { name: 'Slovak', phrase: 'Ľúbim ťa' },
  // 24
  { name: 'Hungarian', phrase: 'Szeretlek' },
  // 25
  { name: 'Romanian', phrase: 'Te iubesc' },
  // 26
  { name: 'Bulgarian', phrase: 'Обичам те (Obicham te)' },
  // 27
  { name: 'Greek', phrase: 'Σ’ αγαπώ (S’agapó)' },
  // 28
  { name: 'Dutch', phrase: 'Ik hou van jou' },
  // 29
  { name: 'Luxembourgish', phrase: 'Ech hunn dech gär' },
  // 30
  { name: 'Bosnian', phrase: 'Volim te' },
  // 31
  { name: 'Serbian', phrase: 'Волим те (Volim te)' },
  // 32
  { name: 'Croatian', phrase: 'Volim te' },
  // 33
  { name: 'Slovenian', phrase: 'Ljubim te' },
  // 34
  { name: 'Macedonian', phrase: 'Те сакам (Te sakam)' },
  // 35
  { name: 'Albanian', phrase: 'Të dua' },
  // 36
  { name: 'Haitian Creole', phrase: 'Mwen renmen ou' },
  // 37
  { name: 'Indonesian', phrase: 'Aku cinta kamu' },
  // 38
  { name: 'Malay', phrase: 'Saya cintakan awak' },
  // 39
  { name: 'Tagalog (Filipino)', phrase: 'Mahal kita' },
  // 40
  { name: 'Thai', phrase: 'ฉันรักคุณ (Chan rak khun)' },
  // 41
  { name: 'Vietnamese', phrase: 'Tôi yêu bạn' },
  // 42
  { name: 'Khmer (Cambodian)', phrase: 'ខ្ញុំ​ស្រលាញ់​អ្នក (Khnhom sralanh anak)' },
  // 43
  { name: 'Burmese (Myanmar)', phrase: 'မင်းကိုချစ်တယ် (Min ko chit de)' },
  // 44
  { name: 'Lao', phrase: 'ຂ້າພະເຈົ້າຮັກເຈົ້າ (Khopchao hak chao)' },
  // 45
  { name: 'Hebrew', phrase: 'אני אוהב אותך (Ani ohev otach)' },
  // 46
  { name: 'Persian (Farsi)', phrase: 'دوستت دارم (Doostat daram)' },
  // 47
  { name: 'Pashto', phrase: 'زه تا سره مینه کوم (Za ta sara meena kom)' },
  // 48
  { name: 'Kurdish', phrase: 'Ez te hezdikhem' },
  // 49
  { name: 'Urdu', phrase: 'میں تم سے محبت کرتا ہوں (Main tumse muhabbat karta hoon)' },
  // 50
  { name: 'Swahili', phrase: 'Nakupenda' },
  // 51
  { name: 'Yoruba', phrase: 'Mo nifẹ rẹ' },
  // 52
  { name: 'Igbo', phrase: 'A hụrụ m gi n’anya' },
  // 53
  { name: 'Zulu', phrase: 'Ngiyakuthanda' },
  // 54
  { name: 'Xhosa', phrase: 'Ndiyakuthanda' },
  // 55
  { name: 'Shona', phrase: 'Ndinokuda' },
  // 56
  { name: 'Tswana', phrase: 'Ke a go rata' },
  // 57
  { name: 'Sesotho', phrase: 'Ke a u rata' },
  // 58
  { name: 'Amharic', phrase: 'እወድሻለሁ (Ewedihalehu)' },
  // 59
  { name: 'Tigrinya', phrase: 'ፍቕሪ ኣፍቂርኪ (Fikri Afqirki)' },
  // 60
  { name: 'Somali', phrase: 'Waan ku jecelahay' },
  // 61
  { name: 'Afrikaans', phrase: 'Ek het jou lief' },
  // 62
  { name: 'Twi', phrase: 'Me dɔ wo' },
  // 63
  { name: 'Telugu', phrase: 'నేను నిన్ను ప్రేమిస్తున్నాను (Nēnu ninnu prēmistunnānu)' },
  // 64
  { name: 'Tamil', phrase: 'நான் உன்னை காதலிக்கிறேன் (Naan unnai kaadhalikkiren)' },
  // 65
  { name: 'Malayalam', phrase: 'ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു (Ñān ninne snēhikkunnu)' },
  // 66
  { name: 'Odia (Oriya)', phrase: 'ମୁଁ ତୁମକୁ ଭଲ ପାଏ (Mu tumoku bhala paye)' },
  // 67
  { name: 'Assamese', phrase: 'মই তোমাক ভাল পাও (Moi tomaak bhal pau)' },
  // 68
  { name: 'Sinhalese', phrase: 'මම ඔයාට ආදරෙයි (Mama oyāṭa ādareyi)' },
  // 69
  { name: 'Nepali', phrase: 'म तिमीलाई माया गर्छु (Ma timilai maya garchu)' },
  // 70
  { name: 'Mongolian', phrase: 'Би чамд хайртай (Bi chamd hairtai)' },
  // 71
  { name: 'Kazakh', phrase: 'Мен сені сүйемін (Men seni sүyemin)' },
  // 72
  { name: 'Uzbek', phrase: 'Men seni sevaman' },
  // 73
  { name: 'Tajik', phrase: 'Ман туро дӯст медорам (Man turo dust medoram)' },
  // 74
  { name: 'Georgian', phrase: 'მიყვარხარ (Mikvarhar)' },
  // 75
  { name: 'Armenian', phrase: 'Ես քեզ սիրում եմ (Yes k’yez sirum yem)' },
  // 76
  { name: 'Azerbaijani', phrase: 'Mən səni sevirəm' },
  // 77
  { name: 'Belarusian', phrase: 'Я цябе кахаю (Ya tsyabe kakhayu)' },
  // 78
  { name: 'Ukrainian', phrase: 'Я тебе люблю (Ya tebe lyublyu)' },
  // 79
  { name: 'Lithuanian', phrase: 'Aš tave myliu' },
  // 80
  { name: 'Latvian', phrase: 'Es tevi mīlu' },
  // 81
  { name: 'Estonian', phrase: 'Ma armastan sind' },
  // 82
  { name: 'Scottish Gaelic', phrase: 'Tha gaol agam ort' },
  // 83
  { name: 'Welsh', phrase: 'Rwy’n dy garu di' },
  // 84
  { name: 'Breton', phrase: 'Da garan' },
  // 85
  { name: 'Samoan', phrase: 'Ou te alofa ia te oe' },
  // 86
  { name: 'Hawaiian', phrase: 'Aloha Au Ia ‘Oe' },
  // 87
  { name: 'Maori', phrase: 'Kei te aroha au ki a koe' },
  // 88
  { name: 'Fijian', phrase: 'Au lomani iko' },
  // 89
  { name: 'Marshallese', phrase: 'Iokwe eok' },
  // 90
  { name: 'Palauan', phrase: 'Ak merang er kau' },
  // 91
  { name: 'Chamorro', phrase: 'Hu guaiya hao' },
  // 92
  { name: 'Tetum', phrase: 'Ha\'u hadomi ó' },
  // 93
  { name: 'Sranan Tongo', phrase: 'Mi lobi yu' },
  // 94
  { name: 'Krio', phrase: 'A de lov u' },
  // 95
  { name: 'Jamaican Patois', phrase: 'Mi love yuh' },
  // 96
  { name: 'Surigaonon', phrase: 'Nahigugma ako nimo' },
  // 97
  { name: 'Waray', phrase: 'Hinigugma ko ikaw' },
  // 98
  { name: 'Faroese', phrase: 'Eg elski teg' },
  // 99
  { name: 'Greenlandic', phrase: 'Asavakit' },
  // 100
  { name: 'Icelandic', phrase: 'Ég elska þig' }
];

const Languages = () => {
  const languages = ALL_LANGUAGES.map((lang, index) => {
    const id = index + 1;
    return {
      id,
      name: lang.name,
      phrase: lang.phrase,
    };
  });

  return (
    <div className="languageWrapper">
      <h1>I wasn’t sure how to express myself to you or which language to use, so here it is shared in 100 different languages.</h1>
      <div className="cols">
        {languages.map((language) => (
          <div
            className="col"
            key={language.id}
            onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}
            onClick={(e) => e.currentTarget.classList.toggle('hover')}
          >
            <div className="container">
              {/* FRONT */}
              <div
                className="front"
                style={{
                  backgroundImage: `url(https://unsplash.it/${
                    500 + language.id
                  }/${500 + language.id}/)`,
                }}
              >
                <div className="inner">
                  <p>{language.name}</p>
                </div>
              </div>

              {/* BACK */}
              <div className="back">
                <div className="inner">
                  <p>{language.phrase}</p>
                  <button style={{ marginTop: '10px' }} onClick={() => speakText(language.phrase)}>
                    Speak
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
