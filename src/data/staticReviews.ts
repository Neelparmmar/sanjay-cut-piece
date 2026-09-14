import type { Language } from '../i18n/types';

export interface StaticReview {
  id: string;
  authorName: string;
  profilePhotoUrl: string;
  rating: number;
  relativeTimeDescription: Record<Language, string>;
  text: Record<Language, string>;
}

export const staticReviews: StaticReview[] = [
  {
    id: 'rev-1',
    authorName: 'Snehal Kulkarni',
    profilePhotoUrl: '/images/reviews/reviewer-1.jpg',
    rating: 5,
    relativeTimeDescription: {
      en: '2 weeks ago',
      mr: '२ आठवड्यांपूर्वी',
      hi: '२ हफ्ते पहले',
      gu: '૨ અઠવાડિયા પહેલા'
    },
    text: {
      en: 'Best shop in Thane near Jambli Naka for blouse pieces and aster matching. They have an incredible variety of shades and textures. The staff is patient and helps match the exact colour with your saree. Highly recommended!',
      mr: 'जांभळी नाक्याजवळ ब्लाउज पीस आणि अस्तर मॅचिंगसाठी ठाण्यातील सर्वोत्तम दुकान. त्यांच्याकडे शेड्स आणि टेक्सचरचे प्रचंड वैविध्य आहे. कर्मचारी अत्यंत सहकार्यपूर्ण असून साडीला अचूक मॅचिंग मिळवून देतात. नक्की भेट द्या!',
      hi: 'जांबली नाका के पास ब्लाउज पीस और अस्तर मैचिंग के लिए ठाणे में सबसे अच्छी दुकान। उनके पास रंगों और वैरायटी का शानदार कलेक्शन है। स्टाफ बहुत मददगार है और साड़ी के साथ सटीक मैचिंग ढूंढने में मदद करता है।',
      gu: 'જાંબલી નાકા પાસે બ્લાઉઝ પીસ અને અસ્તર મેચિંગ માટે થાણેમાં શ્રેષ્ઠ દુકાન. તેમની પાસે રંગો અને વિવિધતાનો ઉત્તમ સંગ્રહ છે. સ્ટાફ ખૂબ જ મદદગાર છે અને સાડી સાથે પરફેક્ટ મેચિંગ કરાવે છે. અચૂક મુલાકાત લો!'
    }
  },
  {
    id: 'rev-2',
    authorName: 'Pooja Shah',
    profilePhotoUrl: '/images/reviews/reviewer-2.jpg',
    rating: 5,
    relativeTimeDescription: {
      en: '1 month ago',
      mr: '१ महिन्यापूर्वी',
      hi: '१ महीने पहले',
      gu: '૧ મહિના પહેલા'
    },
    text: {
      en: 'We have been visiting Sanjay Cut Piece for years. Excellent quality cotton and silk dress materials at very reasonable prices. Their collection of ready-made blouses and dupattas is unmatched in Thane West.',
      mr: 'आम्ही गेल्या अनेक वर्षांपासून संजय कट पीस सेंटरला भेट देत आहोत. अतिशय वाजवी दरात दर्जेदार कॉटन आणि सिल्क ड्रेस मटेरियल्स मिळतात. ठाणे पश्चिमेत रेडीमेड ब्लाउज आणि ओढण्यांचे यांचे कलेक्शन अप्रतिम आहे.',
      hi: 'हम कई सालों से संजय कट पीस में खरीदारी कर रहे हैं। बहुत ही किफायती दामों पर बेहतरीन क्वालिटी के कॉटन और सिल्क ड्रेस मटेरियल मिलते हैं। रेडीमेड ब्लाउज और दुपट्टों का कलेक्शन बेमिसाल है।',
      gu: 'અમે વર્ષોથી સંજય કટ પીસની મુલાકાત લઈએ છીએ. ખૂબ જ વાજબી ભાવે ઉત્તમ ગુણવત્તાવાળા કોટન અને સિલ્ક ડ્રેસ મટિરિયલ્સ મળે છે. રેડીમેડ બ્લાઉઝ અને દુપટ્ટાનું કલેક્શન અદ્ભુત છે.'
    }
  },
  {
    id: 'rev-3',
    authorName: 'Anita Patil',
    profilePhotoUrl: '/images/reviews/reviewer-3.jpg',
    rating: 5,
    relativeTimeDescription: {
      en: '2 months ago',
      mr: '२ महिन्यांपूर्वी',
      hi: '२ महीने पहले',
      gu: '૨ મહિના પહેલા'
    },
    text: {
      en: 'Huge collection of cut pieces and designer fabrics. I found the perfect Banarasi dupatta and matching fabric for my sister\'s wedding outfit. Friendly and attentive service every single time!',
      mr: 'कट पीसेस आणि डिझायनर फॅब्रिक्सचा मोठा संग्रह. माझ्या बहिणीच्या लग्नासाठी मला येथे परिपूर्ण बनारसी ओढणी आणि मॅचिंग फॅब्रिक मिळाले. प्रत्येक वेळी मिळणारी आपुलकीची सेवा मनाला भावते!',
      hi: 'कट पीस और डिज़ाइनर फैब्रिक्स का बहुत बड़ा संग्रह। मेरी बहन की शादी के लिए मुझे यहां परफेक्ट बनारसी दुपट्टा और मैचिंग फैब्रिक मिला। हमेशा बहुत अच्छी और विनम्र सेवा मिलती है!',
      gu: 'કટ પીસ અને ડિઝાઇનર કાપડનો વિશાળ સંગ્રહ. મારી બહેનના લગ્ન માટે મને અહીં પરફેક્ટ બનારસી દુપટ્ટો અને મેચિંગ કાપડ મળ્યું. દરેક વખતે અદ્ભુત સેવા મળે છે!'
    }
  },
  {
    id: 'rev-4',
    authorName: 'Deepa Joshi',
    profilePhotoUrl: '/images/reviews/reviewer-4.jpg',
    rating: 5,
    relativeTimeDescription: {
      en: '3 months ago',
      mr: '३ महिन्यांपूर्वी',
      hi: '३ महीने पहले',
      gu: '૩ મહિના પહેલા'
    },
    text: {
      en: 'Trustworthy shop with consistent quality fabrics for decades. Perfect matching for saree falls, lining material, and saree shapewear. Always my first choice for festive and occasion shopping.',
      mr: 'दशकांपासून दर्जेदार कापडांसाठी अत्यंत विश्वासार्ह दुकान. साडी फॉल, अस्तर आणि साडी शेपवेअरसाठी तंतोतंत मॅचिंग मिळते. सणासुदीच्या आणि विशेष प्रसंगांच्या खरेदीसाठी माझी ही पहिलीच पसंती असते.',
      hi: 'दशकों से विश्वसनीय दुकान और बेहतरीन क्वालिटी का कपड़ा। साड़ी फॉल, अस्तर और साड़ी शेपवियर के लिए बिल्कुल सटीक मैचिंग मिलती है। त्योहारों की खरीदारी के लिए हमेशा मेरी पहली पसंद।',
      gu: 'દાયકાઓથી ગુણવત્તાયુક્ત કાપડ માટે અત્યંત વિશ્વસનીય દુકાન. સાડી ફોલ, અસ્તર અને સાડી શેપવેર માટે પરફેક્ટ મેચિંગ મળે છે. તહેવારોની ખરીદી માટે હંમેશા મારી પહેલી પસંદ.'
    }
  },
  {
    id: 'rev-5',
    authorName: 'Rajesh Mehta',
    profilePhotoUrl: '/images/reviews/reviewer-5.jpg',
    rating: 5,
    relativeTimeDescription: {
      en: '4 months ago',
      mr: '४ महिन्यांपूर्वी',
      hi: '४ महीने पहले',
      gu: '૪ મહિના પહેલા'
    },
    text: {
      en: 'Superb variety and genuine pricing. The quality of cotton dress materials and prints is top-notch. It\'s truly a one-stop destination for all ethnic fabric and tailoring needs in Thane.',
      mr: 'उत्कृष्ट विविधता आणि योग्य भाव. कॉटन ड्रेस मटेरियल आणि प्रिंट्सचा दर्जा उच्च प्रतीचा आहे. ठाण्यात पारंपरिक कापड आणि टेलरिंगच्या सर्व गरजांसाठी हे एक परिपूर्ण दुकान आहे.',
      hi: 'शानदार वैरायटी और वाजिब दाम। कॉटन ड्रेस मटेरियल और प्रिंट्स की क्वालिटी लाजवाब है। ठाणे में सभी एथनिक फैब्रिक और सिलाई संबंधी जरूरतों के लिए यह सबसे बेहतरीन जगह है।',
      gu: 'ઉત્તમ વિવિધતા અને વ્યાજબી ભાવ. કોટન ડ્રેસ મટિરિયલ્સ અને પ્રિન્ટ્સની ગુણવત્તા શ્રેષ્ઠ છે. થાણેમાં તમામ એથનિક કાપડની જરૂરિયાતો માટે આ એક વન-સ્ટોપ ડેસ્ટિનેશન છે.'
    }
  }
];

export function getLocalizedReviews(lang: Language = 'en') {
  return staticReviews.map((rev) => ({
    id: rev.id,
    authorName: rev.authorName,
    profilePhotoUrl: rev.profilePhotoUrl,
    rating: rev.rating,
    relativeTimeDescription: rev.relativeTimeDescription[lang] || rev.relativeTimeDescription.en,
    text: rev.text[lang] || rev.text.en
  }));
}
