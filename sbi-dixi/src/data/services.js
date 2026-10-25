import {
  LuPiggyBank, LuBuilding2, LuLandmark, LuRepeat, LuHouse, LuWallet, LuGem,
  LuGraduationCap, LuWheat, LuTractor, LuStore, LuCreditCard, LuSmartphone,
  LuQrCode, LuFingerprint, LuUsers, LuShieldCheck, LuSend,
} from 'react-icons/lu';

export const CATEGORIES = ['all', 'deposits', 'loans', 'agri', 'digital', 'govt'];

/*
 * Content transcribed from the design screens.
 * `title` / `tagline` have Marathi (mr); steps & documents are English-only for now —
 * the UI falls back to English via loc().
 * Category assignments (`cats`) are my reading of the filter chips — adjust freely.
 */

export const SERVICES = [
  {
    id: 'savings', Icon: LuPiggyBank, cats: ['deposits'],
    title: { en: 'Savings Account', mr: 'बचत खाते', hi:'बचत खाता' },
    tagline: {
      en: 'Open your SBI savings account and start saving safely.',
      mr: 'तुमचे SBI बचत खाते उघडा आणि सुरक्षितपणे बचत सुरू करा.',
      hi: 'अपना SBI बचत खाता खोलें और सुरक्षित रूप से बचत शुरू करें।'
    },
    steps: {
      en: [
        'Meet the Floor Coordinator and collect the Account Opening Form.',
        'Fill in your details, nominee and paste a photo.',
        'Attach self-attested copies of Aadhaar & PAN.',
        'Submit at the Junior Assistant desk for KYC verification.',
        'Deposit the initial amount at the cash counter.',
        'Collect your passbook & welcome kit; debit card follows by post.',
      ],
      mr: [
        'फ्लोअर कोऑर्डिनेटर यांना भेटून खाते उघडण्याचा फॉर्म घ्या.',
        'तुमची माहिती आणि नॉमिनीचे तपशील भरा व फोटो लावा.',
        'आधार कार्ड आणि PAN कार्डच्या स्वयं-साक्षांकित प्रती जोडा.',
        'KYC पडताळणीसाठी कनिष्ठ सहाय्यकांकडे फॉर्म जमा करा.',
        'कॅश काउंटरवर सुरुवातीची रक्कम जमा करा.',
        'पासबुक आणि वेलकम किट घ्या; डेबिट कार्ड पोस्टाने मिळेल.',
      ],
      hi: [
        'फ्लोर कोऑर्डिनेटर से मिलकर खाता खोलने का फॉर्म लें।',
        'अपनी जानकारी और नॉमिनी का विवरण भरें तथा फोटो लगाएँ।',
        'आधार और PAN कार्ड की स्व-सत्यापित प्रतियाँ संलग्न करें।',
        'KYC सत्यापन के लिए कनिष्ठ सहायक के काउंटर पर फॉर्म जमा करें।',
        'कैश काउंटर पर शुरुआती राशि जमा करें।',
        'पासबुक और वेलकम किट लें; डेबिट कार्ड डाक से मिलेगा।',
      ],
    },

    docs: {
      en: ['Aadhaar card', 'PAN card (or Form 60)', '2 passport size photos', 'Mobile number linked to Aadhaar'],
      mr: ['आधार कार्ड', 'PAN कार्ड (किंवा फॉर्म 60)', 'पासपोर्ट आकाराचे 2 फोटो', 'आधारशी जोडलेला मोबाइल नंबर'],
      hi: ['आधार कार्ड', 'PAN कार्ड (या फॉर्म 60)', 'पासपोर्ट आकार के 2 फोटो', 'आधार से जुड़ा मोबाइल नंबर'],
    },

    meet: ['bapu', 'pankaj'],
  },

  {
    id: 'current', Icon: LuBuilding2, cats: ['deposits'],
    title: { en: 'Current Account', mr: 'चालू खाते', hi:'चालू खाता' },
    tagline: {
      en: 'For shops, traders and businesses with daily transactions.',
      mr: 'दुकाने, व्यापारी आणि रोजचे व्यवहार असलेल्या व्यवसायांसाठी.',
      hi:'दुकानों, व्यापारियों और रोज़ाना लेन-देन करने वाले व्यवसायों के लिए।',
    },
    steps: {
      en: [
        'Collect the Current Account form from the branch.',
        'Fill business details and authorised signatory info.',
        'Attach KYC of owner/partners and business proof.',
        'Submit to the Junior Assistant for verification.',
        'Branch Manager approves the account.',
        'Deposit the initial amount and collect cheque book.',
      ],
      mr: [
        'शाखेतून चालू खात्याचा फॉर्म घ्या.',
        'व्यवसायाची माहिती आणि अधिकृत स्वाक्षरीकर्त्याचे तपशील भरा.',
        'मालक/भागीदारांचे KYC आणि व्यवसायाचा पुरावा जोडा.',
        'पडताळणीसाठी कनिष्ठ सहाय्यकांकडे फॉर्म जमा करा.',
        'शाखा व्यवस्थापक खात्याला मंजुरी देतात.',
        'सुरुवातीची रक्कम जमा करून चेकबुक घ्या.',
      ],
      hi: [
        'शाखा से चालू खाते खोलने का फॉर्म लें।',
        'व्यवसाय और अधिकृत हस्ताक्षरकर्ता की जानकारी भरें।',
        'मालिक/साझेदारों के KYC दस्तावेज़ और व्यवसाय का प्रमाण जोड़ें।',
        'सत्यापन के लिए कनिष्ठ सहायक के पास फॉर्म जमा करें।',
        'शाखा प्रबंधक खाते को मंज़ूरी देते हैं।',
        'शुरुआती राशि जमा करके चेकबुक लें।',
      ],
    },

    docs: {
      en: ["Owner's Aadhaar & PAN", 'Shop Act / GST / Udyam certificate', 'Business address proof', '2 photos of signatory'],
      mr: ['मालकाचे आधार आणि PAN कार्ड', 'शॉप ॲक्ट / GST / उद्यम प्रमाणपत्र', 'व्यवसायाच्या पत्त्याचा पुरावा', 'स्वाक्षरीकर्त्याचे 2 फोटो'],
      hi: ['मालिक का आधार और PAN कार्ड', 'शॉप एक्ट / GST / उद्यम प्रमाणपत्र', 'व्यवसाय के पते का प्रमाण', 'हस्ताक्षरकर्ता के 2 फोटो'],
    },

    meet: ['pankaj', 'vaibhav'],
  },

  {
    id: 'fd', Icon: LuLandmark, cats: ['deposits'],
    title: { en: 'Fixed Deposit (FD)', mr: 'मुदत ठेव (FD)', hi: 'मर्यादित जमा (FD)' },
    tagline: {
      en: 'Lock your money for a fixed period and earn assured interest.',
      mr: 'ठराविक कालावधीसाठी पैसे ठेवा आणि खात्रीशीर व्याज मिळवा.',
      hi: 'एक निश्चित अवधि के लिए पैसा जमा करें और ब्याज कमाएँ।',
    },
    steps: {
      en: [
        'Ask for the Term Deposit form (or open via YONO).',
        'Choose amount, period and interest payout option.',
        'Add nominee details.',
        'Deposit the amount by cash or from your SBI account.',
        'Collect the FD advice / receipt.',
      ],
      mr: [
        'मुदत ठेवीचा फॉर्म घ्या किंवा YONO द्वारे FD उघडा.',
        'रक्कम, कालावधी आणि व्याज मिळण्याचा पर्याय निवडा.',
        'नॉमिनीचे तपशील भरा.',
        'रोख किंवा SBI खात्यातून रक्कम जमा करा.',
        'FD पावती घ्या.',
      ],
      hi: [
        'सावधि जमा फॉर्म लें या YONO से FD खोलें।',
        'राशि, अवधि और ब्याज प्राप्त करने का विकल्प चुनें।',
        'नॉमिनी का विवरण भरें।',
        'नकद या अपने SBI खाते से राशि जमा करें।',
        'FD की रसीद लें।',
      ],
    },

    docs: {
      en: ['SBI account passbook', 'Aadhaar & PAN (if new customer)', 'Form 15G/15H to avoid TDS (if eligible)'],
      mr: ['SBI खातेचे पासबुक', 'नवीन ग्राहक असल्यास आधार आणि PAN', 'पात्र असल्यास TDS टाळण्यासाठी फॉर्म 15G/15H'],
      hi: ['SBI खाते की पासबुक', 'नए ग्राहक के लिए आधार और PAN', 'पात्र होने पर TDS से छूट के लिए फॉर्म 15G/15H'],
    },

    meet: ['pankaj', 'ravindra'],
  },

  {
    id: 'rd', Icon: LuRepeat, cats: ['deposits'],
    title: { en: 'Recurring Deposit (RD)', mr: 'आवर्ती ठेव (RD)', hi: 'आवर्ती जमा (RD)' },
    tagline: {
      en: 'Save a fixed amount every month and build a lump sum.',
      mr: 'दर महिन्याला ठराविक रक्कम बचत करून मोठी रक्कम जमवा.',
      hi: 'हर महीने एक निश्चित राशि जमा करके बड़ी बचत बनाएँ।'
    },

    steps: {
      en: [
        'Fill the RD form at the branch or open in YONO.',
        'Choose monthly instalment and period.',
        'Give standing instruction to auto-debit from savings.',
        'Pay the first instalment.',
        'Collect RD receipt; instalments continue every month.',
      ],
      mr: [
        'शाखेत RD फॉर्म भरा किंवा YONO मध्ये RD उघडा.',
        'मासिक हप्ता आणि कालावधी निवडा.',
        'बचत खात्यातून स्वयंचलित पैसे कापण्यासाठी सूचना द्या.',
        'पहिला हप्ता भरा.',
        'RD पावती घ्या; पुढील हप्ते दर महिन्याला भरले जातील.',
      ],
      hi: [
        'शाखा में RD फॉर्म भरें या YONO से RD खोलें।',
        'मासिक किस्त और अवधि चुनें।',
        'बचत खाते से स्वतः राशि कटने की स्थायी अनुमति दें।',
        'पहली किस्त जमा करें।',
        'RD की रसीद लें; आगे की किस्तें हर महीने जमा करें।',
      ],
    },

    docs: {
      en: ['SBI account passbook', 'Aadhaar & PAN'],
      mr: ['SBI खातेचे पासबुक', 'आधार आणि PAN कार्ड'],
      hi: ['SBI खाते की पासबुक', 'आधार और PAN कार्ड'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'home', Icon: LuHouse, cats: ['loans'],
    title: { en: 'Home Loan', mr: 'गृह कर्ज', hi: 'घर कर्ज' },
    tagline: {
      en: 'Buy, build or repair your dream home.',
      mr: 'तुमचे स्वप्नातील घर घ्या, बांधा किंवा दुरुस्त करा.',
      hi: 'अपने सपनों का घर खरीदें, बनाएँ या उसकी मरम्मत करें।',
    },

    steps: {
      en: [
        'Meet the Branch Manager to discuss eligibility.',
        'Fill the loan application with income details.',
        'Submit KYC, income & property documents.',
        'Bank does property valuation and legal check.',
        'Loan is sanctioned and sanction letter issued.',
        'Sign documents; amount is disbursed to seller/builder.',
      ],
      mr: [
        'पात्रतेबद्दल चर्चा करण्यासाठी शाखा व्यवस्थापकांना भेटा.',
        'उत्पन्नाची माहिती देऊन कर्ज अर्ज भरा.',
        'KYC, उत्पन्न आणि मालमत्तेची कागदपत्रे जमा करा.',
        'बँक मालमत्तेचे मूल्यांकन आणि कायदेशीर तपासणी करते.',
        'कर्ज मंजूर झाल्यानंतर मंजुरीपत्र दिले जाते.',
        'कागदपत्रांवर स्वाक्षरी करा; रक्कम विक्रेता/बांधकाम व्यावसायिकाला दिली जाते.',
      ],
      hi: [
        'पात्रता पर चर्चा करने के लिए शाखा प्रबंधक से मिलें।',
        'आय का विवरण देकर ऋण आवेदन भरें।',
        'KYC, आय और संपत्ति के दस्तावेज़ जमा करें।',
        'बैंक संपत्ति का मूल्यांकन और कानूनी जाँच करता है।',
        'ऋण मंज़ूर होने पर स्वीकृति पत्र जारी किया जाता है।',
        'दस्तावेज़ों पर हस्ताक्षर करें; राशि विक्रेता/बिल्डर को दी जाती है।',
      ],
    },

    docs: {
      en: ['Aadhaar, PAN & photos', 'Salary slips / ITR of last 2 years', '6-month bank statement', 'Property papers (7/12, agreement, plan)'],
      mr: ['आधार, PAN आणि फोटो', 'मागील 2 वर्षांच्या वेतन पावत्या / ITR', '6 महिन्यांचे बँक स्टेटमेंट', 'मालमत्तेची कागदपत्रे (7/12, करार, आराखडा)'],
      hi: ['आधार, PAN और फोटो', 'पिछले 2 वर्षों की वेतन पर्चियाँ / ITR', '6 महीने का बैंक स्टेटमेंट', 'संपत्ति के दस्तावेज़ (7/12, समझौता, नक्शा)'],
    },

    meet: ['vaibhav'],
  },

  {
    id: 'personal', Icon: LuWallet, cats: ['loans'],
    title: { en: 'Personal Loan', mr: 'वैयक्तिक कर्ज', hi: 'पर्सनल लोन' },
    tagline: {
      en: 'Quick loan for medical, wedding or family needs.',
      mr: 'वैद्यकीय, लग्न किंवा कौटुंबिक गरजांसाठी जलद कर्ज.',
      hi: 'चिकित्सा, शादी या पारिवारिक ज़रूरतों के लिए कर्ज।'
    },

    steps: {
      en: [
        'Check pre-approved offer in YONO or ask at branch.',
        'Fill the personal loan application.',
        'Submit KYC and income proof.',
        'Bank checks credit score and repayment capacity.',
        'Loan is sanctioned and credited to your account.',
      ],
      mr: [
        'YONO मधील पूर्व-मंजूर ऑफर तपासा किंवा शाखेत विचारा.',
        'वैयक्तिक कर्जाचा अर्ज भरा.',
        'KYC आणि उत्पन्नाचा पुरावा जमा करा.',
        'बँक क्रेडिट स्कोअर आणि परतफेड क्षमता तपासते.',
        'कर्ज मंजूर झाल्यावर रक्कम खात्यात जमा होते.',
      ],
      hi: [
        'YONO में पहले से मंज़ूर ऑफर देखें या शाखा में पूछें।',
        'पर्सनल लोन का आवेदन भरें।',
        'KYC और आय का प्रमाण जमा करें।',
        'बैंक क्रेडिट स्कोर और भुगतान क्षमता की जाँच करता है।',
        'ऋण मंज़ूर होने पर राशि खाते में जमा होती है।',
      ],
    },

    docs: {
      en: ['Aadhaar & PAN', 'Salary slips / income proof', 'Bank statement'],
      mr: ['आधार आणि PAN कार्ड', 'वेतन पावत्या / उत्पन्नाचा पुरावा', 'बँक स्टेटमेंट'],
      hi: ['आधार और PAN कार्ड', 'वेतन पर्चियाँ / आय का प्रमाण', 'बैंक स्टेटमेंट'],
    },

    meet: ['vaibhav'],
  },

  {
    id: 'gold', Icon: LuGem, cats: ['loans'],
    title: { en: 'Gold Loan', mr: 'सोनेतारण कर्ज', hi: 'गोल्ड लोन' },
    tagline: {
      en: 'Get money against your gold ornaments, same day.',
      mr: 'तुमच्या सोन्याच्या दागिन्यांवर त्याच दिवशी पैसे मिळवा.',
      hi: 'अपने सोने के आभूषणों के बदले उसी दिन ऋण प्राप्त करें।',
    },
    steps: {
      en: [
        'Bring your gold ornaments and KYC to the branch.',
        "Gold is tested & valued by the bank's appraiser.",
        'Fill the gold loan application.',
        'Sign the loan documents.',
        'Amount is credited; gold is kept safely in bank custody.',
        'Repay loan and collect your ornaments back.',
      ],
      mr: [
        'सोन्याचे दागिने आणि KYC कागदपत्रे शाखेत आणा.',
        'बँकेचा मूल्यांकनकर्ता सोन्याची तपासणी व मूल्यांकन करतो.',
        'सोनेतारण कर्जाचा अर्ज भरा.',
        'कर्जाच्या कागदपत्रांवर स्वाक्षरी करा.',
        'रक्कम खात्यात जमा होते आणि सोने बँकेच्या सुरक्षित ताब्यात ठेवले जाते.',
        'कर्जाची परतफेड करून दागिने परत घ्या.',
      ],
      hi: [
        'सोने के आभूषण और KYC दस्तावेज़ शाखा में लाएँ।',
        'बैंक का मूल्यांकनकर्ता सोने की जाँच और मूल्यांकन करता है।',
        'गोल्ड लोन का आवेदन भरें।',
        'ऋण दस्तावेज़ों पर हस्ताक्षर करें।',
        'राशि खाते में जमा होती है और सोना बैंक की सुरक्षित अभिरक्षा में रखा जाता है।',
        'ऋण चुकाकर अपने आभूषण वापस लें।',
      ],
    },

    docs: {
      en: ['Gold ornaments', 'Aadhaar & PAN', '2 photos'],
      mr: ['सोन्याचे दागिने', 'आधार आणि PAN कार्ड', '2 फोटो'],
      hi: ['सोने के आभूषण', 'आधार और PAN कार्ड', '2 फोटो'],
    },

    meet: ['vaibhav', 'pankaj'],
  },

  {
    id: 'education', Icon: LuGraduationCap, cats: ['loans'],
    title: { en: 'Education Loan', mr: 'शैक्षणिक कर्ज', hi: 'शिक्षा कर्ज' },
    tagline: {
      en: 'Fund higher studies in India or abroad.',
      mr: 'भारतात किंवा परदेशात उच्च शिक्षणासाठी आर्थिक मदत.',
      hi: 'भारत या विदेश में उच्च शिक्षा के लिए आर्थिक सहायता।',
    },

    steps: {
      en: [
        'Register on the Vidya Lakshmi portal (recommended).',
        'Meet the Branch Manager with admission letter.',
        'Submit fee structure and student/parent KYC.',
        'Bank appraises the course and co-borrower.',
        'Loan sanctioned; fees paid directly to the college.',
      ],
      mr: [
        'विद्या लक्ष्मी पोर्टलवर नोंदणी करा.',
        'प्रवेशपत्रासह शाखा व्यवस्थापकांना भेटा.',
        'शुल्क रचना आणि विद्यार्थी/पालकांचे KYC जमा करा.',
        'बँक अभ्यासक्रम आणि सह-कर्जदाराची तपासणी करते.',
        'कर्ज मंजूर झाल्यावर शुल्क थेट महाविद्यालयाला दिले जाते.',
      ],
      hi: [
        'विद्या लक्ष्मी पोर्टल पर पंजीकरण करें।',
        'प्रवेश पत्र लेकर शाखा प्रबंधक से मिलें।',
        'शुल्क विवरण और विद्यार्थी/अभिभावक के KYC दस्तावेज़ जमा करें।',
        'बैंक पाठ्यक्रम और सह-ऋणदाता का मूल्यांकन करता है।',
        'ऋण मंज़ूर होने पर फीस सीधे कॉलेज को दी जाती है।',
      ],
    },

    docs: {
      en: ['Admission letter & fee structure', '10th, 12th & degree marksheets', 'Student & parent Aadhaar, PAN', 'Parent income proof'],
      mr: ['प्रवेशपत्र आणि शुल्क रचना', '10वी, 12वी आणि पदवीच्या गुणपत्रिका', 'विद्यार्थी व पालकांचे आधार आणि PAN', 'पालकांच्या उत्पन्नाचा पुरावा'],
      hi: ['प्रवेश पत्र और शुल्क विवरण', '10वीं, 12वीं और डिग्री की अंकसूचियाँ', 'विद्यार्थी और अभिभावक के आधार व PAN', 'अभिभावक की आय का प्रमाण'],
    },

    meet: ['vaibhav'],
  },

  {id: 'kcc', Icon: LuWheat, cats: ['agri'],
    title: { en: 'Kisan Credit Card (KCC)', mr: 'किसान क्रेडिट कार्ड (KCC)', hi: 'किसान क्रेडिट कार्ड (KCC)' },
    tagline: {
      en: 'Crop loan for seeds, fertiliser and farm expenses.',
      mr: 'बियाणे, खते आणि शेतीच्या खर्चासाठी पीक कर्ज.',
      hi: 'बीज, उर्वरक और खेती के खर्चों के लिए फसल कर्ज।',
    },
    steps: {
      en: [
        'Meet the FOS Agri at the agri desk.',
        'Fill the KCC application with crop & land details.',
        'Submit 7/12, 8A and KYC documents.',
        'Field verification of land and crops.',
        'Limit sanctioned based on crop & land area.',
        'Collect RuPay KCC card; withdraw as needed and repay after harvest.',
      ],
      mr: [
        'कृषी काउंटरवरील FOS Agri यांना भेटा.',
        'पीक आणि जमिनीची माहिती देऊन KCC अर्ज भरा.',
        '7/12, 8A आणि KYC कागदपत्रे जमा करा.',
        'जमीन आणि पिकांची प्रत्यक्ष पडताळणी केली जाते.',
        'पीक आणि जमिनीच्या क्षेत्रानुसार कर्जमर्यादा मंजूर होते.',
        'RuPay KCC कार्ड घ्या; गरजेनुसार पैसे काढा आणि पीक काढणीनंतर परतफेड करा.',
      ],
      hi: [
        'कृषि काउंटर पर FOS Agri से मिलें।',
        'फसल और भूमि का विवरण देकर KCC आवेदन भरें।',
        '7/12, 8A और KYC दस्तावेज़ जमा करें।',
        'भूमि और फसल का भौतिक सत्यापन किया जाता है।',
        'फसल और भूमि क्षेत्र के आधार पर ऋण सीमा तय होती है।',
        'RuPay KCC कार्ड लें; ज़रूरत के अनुसार राशि निकालें और फसल कटने के बाद चुकाएँ।',
      ],
    },

    docs: {
      en: ['7/12 and 8A land extract', 'Aadhaar & PAN', '2 photos', 'No-dues certificate from other banks'],
      mr: ['7/12 आणि 8A उतारा', 'आधार आणि PAN कार्ड', '2 फोटो', 'इतर बँकांचे थकबाकी नसल्याचे प्रमाणपत्र'],
      hi: ['7/12 और 8A भूमि अभिलेख', 'आधार और PAN कार्ड', '2 फोटो', 'अन्य बैंकों से बकाया न होने का प्रमाणपत्र'],
    },

    meet: ['vishal'],
  },

  {
    id: 'tractor', Icon: LuTractor, cats: ['agri', 'loans'],
    title: { en: 'Tractor & Farm Loans', mr: 'ट्रॅक्टर व शेती कर्जे', hi: 'ट्रैक्टर और कृषि कर्ज' },
    tagline: {
      en: 'Tractor, drip irrigation, dairy & farm equipment loans.',
      mr: 'ट्रॅक्टर, ठिबक सिंचन, दुग्ध व्यवसाय आणि शेती उपकरणांसाठी कर्जे.',
      hi: 'ट्रैक्टर, ड्रिप सिंचाई, डेयरी और कृषि उपकरणों के लिए कर्ज।',
    },

    steps: {
      en: [
        'Discuss your requirement with the FOS Agri.',
        'Get a quotation from the dealer/supplier.',
        'Fill the loan application with land records.',
        'Bank inspects land & verifies documents.',
        'Manager sanctions the loan.',
        'Amount paid to the dealer; repay in easy instalments.',
      ],
      mr: [
        'FOS Agri यांच्याशी तुमच्या गरजेबद्दल चर्चा करा.',
        'विक्रेता किंवा पुरवठादाराकडून कोटेशन घ्या.',
        'जमिनीच्या नोंदींसह कर्ज अर्ज भरा.',
        'बँक जमिनीची पाहणी आणि कागदपत्रांची पडताळणी करते.',
        'व्यवस्थापक कर्ज मंजूर करतात.',
        'रक्कम विक्रेत्याला दिली जाते; सोप्या हप्त्यांत परतफेड करा.',
      ],
      hi: [
        'FOS Agri से अपनी ज़रूरत पर चर्चा करें।',
        'डीलर या आपूर्तिकर्ता से कोटेशन लें।',
        'भूमि रिकॉर्ड के साथ ऋण आवेदन भरें।',
        'बैंक भूमि का निरीक्षण और दस्तावेज़ों का सत्यापन करता है।',
        'प्रबंधक ऋण मंज़ूर करते हैं।',
        'राशि डीलर को दी जाती है; आसान किस्तों में भुगतान करें।',
      ],
    },

    docs: {
      en: ['7/12 and 8A extract', 'Dealer quotation', 'Aadhaar, PAN & photos'],
      mr: ['7/12 आणि 8A उतारा', 'विक्रेत्याचे कोटेशन', 'आधार, PAN आणि फोटो'],
      hi: ['7/12 और 8A भूमि अभिलेख', 'डीलर का कोटेशन', 'आधार, PAN और फोटो'],
    },

    meet: ['vishal', 'vaibhav'],
  },

  {
    id: 'mudra', Icon: LuStore, cats: ['loans', 'govt'],
    title: { en: 'MUDRA / Business Loan', mr: 'मुद्रा / व्यवसाय कर्ज', hi: 'मुद्रा / व्यवसाय कर्ज' },
    tagline: {
      en: 'Loans for small shops and new businesses (PMMY).',
      mr: 'लहान दुकाने आणि नवीन व्यवसायांसाठी कर्ज (PMMY).',
      hi: 'छोटी दुकानों और नए व्यवसायों के लिए कर्ज (PMMY)।',
    },

    steps: {
      en: [
        'Prepare a simple business plan / project report.',
        'Meet the Branch Manager.',
        'Fill the MUDRA application (Shishu / Kishor / Tarun).',
        'Submit KYC, business proof and quotations.',
        'Loan sanctioned; amount released for business use.',
      ],
      mr: [
        'साधा व्यवसाय आराखडा किंवा प्रकल्प अहवाल तयार करा.',
        'शाखा व्यवस्थापकांना भेटा.',
        'मुद्रा अर्ज भरा (शिशु / किशोर / तरुण).',
        'KYC, व्यवसायाचा पुरावा आणि कोटेशन जमा करा.',
        'कर्ज मंजूर झाल्यावर व्यवसायासाठी रक्कम दिली जाते.',
      ],
      hi: [
        'एक सरल व्यवसाय योजना या परियोजना रिपोर्ट तैयार करें।',
        'शाखा प्रबंधक से मिलें।',
        'मुद्रा आवेदन भरें (शिशु / किशोर / तरुण)।',
        'KYC, व्यवसाय का प्रमाण और कोटेशन जमा करें।',
        'ऋण मंज़ूर होने पर व्यवसाय के लिए राशि जारी की जाती है।',
      ],
    },

    docs: {
      en: ['Aadhaar & PAN', 'Udyam / shop registration', 'Project report & quotations'],
      mr: ['आधार आणि PAN कार्ड', 'उद्यम / दुकान नोंदणी', 'प्रकल्प अहवाल आणि कोटेशन'],
      hi: ['आधार और PAN कार्ड', 'उद्यम / दुकान पंजीकरण', 'परियोजना रिपोर्ट और कोटेशन'],
    },

    meet: ['vaibhav'],
  },

  {
    id: 'atm', Icon: LuCreditCard, cats: ['digital'],
    title: { en: 'ATM / Debit Card', mr: 'ATM / डेबिट कार्ड', hi: 'ATM / डेबिट कार्ड' },
    tagline: {
      en: 'Apply for a new card, set PIN or block a lost card.',
      mr: 'नवीन कार्डसाठी अर्ज करा, PIN सेट करा किंवा हरवलेले कार्ड ब्लॉक करा.',
      hi: 'नए कार्ड के लिए आवेदन करें, PIN बनाएँ या खोया हुआ कार्ड ब्लॉक करें।',
    },

    steps: {
      en: [
        'Fill the debit card request form at the branch (or apply in YONO).',
        'Card is delivered to your registered address.',
        'Generate PIN at any SBI ATM using OTP on registered mobile.',
        'Lost card? Call 1800 1234 or use YONO to block it immediately.',
        'Never share your PIN, CVV or OTP with anyone.',
      ],
      mr: [
        'शाखेत डेबिट कार्ड अर्ज भरा किंवा YONO मधून अर्ज करा.',
        'कार्ड नोंदणीकृत पत्त्यावर पाठवले जाते.',
        'नोंदणीकृत मोबाइलवरील OTP वापरून SBI ATM मध्ये PIN तयार करा.',
        'कार्ड हरवल्यास 1800 1234 वर कॉल करा किंवा YONO मधून त्वरित ब्लॉक करा.',
        'तुमचा PIN, CVV किंवा OTP कोणालाही सांगू नका.',
      ],
      hi: [
        'शाखा में डेबिट कार्ड का फॉर्म भरें या YONO से आवेदन करें।',
        'कार्ड आपके पंजीकृत पते पर भेजा जाता है।',
        'पंजीकृत मोबाइल पर मिले OTP से किसी SBI ATM पर PIN बनाएँ।',
        'कार्ड खोने पर 1800 1234 पर कॉल करें या YONO से तुरंत ब्लॉक करें।',
        'अपना PIN, CVV या OTP किसी के साथ साझा न करें।',
      ],
    },

    docs: {
      en: ['Passbook', 'Registered mobile number'],
      mr: ['पासबुक', 'नोंदणीकृत मोबाइल नंबर'],
      hi: ['पासबुक', 'पंजीकृत मोबाइल नंबर'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'yono', Icon: LuSmartphone, cats: ['digital'],
    title: { en: 'YONO & Net Banking', mr: 'YONO व नेट बँकिंग', hi: 'YONO और नेट बैंकिंग' },
    tagline: {
      en: 'Bank from your phone — balance, transfers, FD & more.',
      mr: 'फोनवरून बँकिंग — शिल्लक, ट्रान्सफर, FD आणि बरेच काही.',
      hi: 'अपने फोन से बैंकिंग करें — बैलेंस, ट्रांसफर, FD और बहुत कुछ।',
    },
    steps: {
      en: [
        "Download 'YONO SBI' from Play Store / App Store.",
        "Choose 'New User' and register with account number or debit card.",
        'Verify with OTP on your registered mobile.',
        'Set username, password and MPIN.',
        'Login and start using balance, transfer and deposit services.',
      ],
      mr: [
        "Play Store / App Store मधून 'YONO SBI' डाउनलोड करा.",
        "'New User' निवडा आणि खाते क्रमांक किंवा डेबिट कार्डने नोंदणी करा.",
        'नोंदणीकृत मोबाइलवर आलेल्या OTP द्वारे पडताळणी करा.',
        'वापरकर्ता नाव, पासवर्ड आणि MPIN सेट करा.',
        'लॉगिन करून शिल्लक, पैसे हस्तांतरण आणि ठेवींच्या सेवा वापरा.',
      ],
      hi: [
        "Play Store / App Store से 'YONO SBI' डाउनलोड करें।",
        "'New User' चुनें और खाता नंबर या डेबिट कार्ड से पंजीकरण करें।",
        'पंजीकृत मोबाइल पर आए OTP से सत्यापन करें।',
        'यूज़रनेम, पासवर्ड और MPIN बनाएँ।',
        'लॉगिन करके बैलेंस, ट्रांसफर और जमा सेवाओं का उपयोग करें।',
      ],
    },

    docs: {
      en: ['Smartphone with registered mobile number', 'Account number or debit card'],
      mr: ['नोंदणीकृत मोबाइल नंबर असलेला स्मार्टफोन', 'खाते क्रमांक किंवा डेबिट कार्ड'],
      hi: ['पंजीकृत मोबाइल नंबर वाला स्मार्टफोन', 'खाता नंबर या डेबिट कार्ड'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'upi', Icon: LuQrCode, cats: ['digital'],
    title: { en: 'UPI Payments', mr: 'UPI पेमेंट्स', hi: 'UPI भुगतान' },
    tagline: {
      en: 'Pay anyone instantly by scanning a QR code.',
      mr: 'QR कोड स्कॅन करून कोणालाही त्वरित पैसे द्या.',
      hi: 'QR कोड स्कैन करके तुरंत किसी को भी पैसे भेजें।'
    },
    steps: {
      en: [
        'Install BHIM SBI Pay, YONO or any UPI app.',
        'Verify your registered mobile number (SMS sent automatically).',
        'Select State Bank of India and your account.',
        'Set UPI PIN using debit card last 6 digits & expiry.',
        'Scan QR or enter UPI ID to pay; PIN is needed only to send money.',
      ],
      mr: [
        'BHIM SBI Pay, YONO किंवा कोणतेही UPI ॲप इन्स्टॉल करा.',
        'नोंदणीकृत मोबाइल नंबरची पडताळणी करा.',
        'स्टेट बँक ऑफ इंडिया आणि तुमचे खाते निवडा.',
        'डेबिट कार्डचे शेवटचे 6 अंक आणि वैधता वापरून UPI PIN सेट करा.',
        'पैसे देण्यासाठी QR स्कॅन करा किंवा UPI ID टाका; पैसे पाठवताना PIN आवश्यक असतो.',
      ],
      hi: [
        'BHIM SBI Pay, YONO या कोई UPI ऐप इंस्टॉल करें।',
        'अपने पंजीकृत मोबाइल नंबर का सत्यापन करें।',
        'स्टेट बैंक ऑफ इंडिया और अपना खाता चुनें।',
        'डेबिट कार्ड के अंतिम 6 अंक और समाप्ति तिथि से UPI PIN बनाएँ।',
        'भुगतान के लिए QR स्कैन करें या UPI ID डालें; PIN केवल पैसे भेजते समय आवश्यक है।',
      ],
    },

    docs: {
      en: ['Mobile linked to bank account', 'Active debit card'],
      mr: ['बँक खात्याशी जोडलेला मोबाइल नंबर', 'सक्रिय डेबिट कार्ड'],
      hi: ['बैंक खाते से जुड़ा मोबाइल नंबर', 'सक्रिय डेबिट कार्ड'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'kyc', Icon: LuFingerprint, cats: ['digital'],
    title: { en: 'KYC Update', mr: 'KYC अपडेट', hi: 'KYC अपडेट' },
    tagline: {
      en: 'Keep your account active by updating KYC.',
      mr: 'KYC अपडेट करून तुमचे खाते सक्रिय ठेवा.',
      hi: 'KYC अपडेट करके अपना खाता सक्रिय रखें।',
    },

    action: {
      label: { en: 'Do Online Re-KYC (YONO)', mr: 'ऑनलाइन Re-KYC करा (YONO)', hi: 'ऑनलाइन Re-KYC करें (YONO)' },
      href: 'https://onlinesbi.sbi',
    },

    steps: {
      en: [
        'Collect the KYC update form from the branch.',
        'Fill your current address & details.',
        'Attach self-attested Aadhaar and PAN copies.',
        'Submit at the Junior Assistant desk with originals for verification.',
        'You get an SMS once KYC is updated.',
      ],
      mr: [
        'शाखेतून KYC अपडेट फॉर्म घ्या.',
        'सध्याचा पत्ता आणि इतर तपशील भरा.',
        'आधार आणि PAN कार्डच्या स्वयं-साक्षांकित प्रती जोडा.',
        'मूळ कागदपत्रांसह कनिष्ठ सहाय्यकांकडे फॉर्म जमा करा.',
        'KYC अपडेट झाल्यावर SMS मिळेल.',
      ],
      hi: [
        'शाखा से KYC अपडेट फॉर्म लें।',
        'अपना वर्तमान पता और अन्य विवरण भरें।',
        'आधार और PAN कार्ड की स्व-सत्यापित प्रतियाँ जोड़ें।',
        'मूल दस्तावेज़ों के साथ कनिष्ठ सहायक के पास फॉर्म जमा करें।',
        'KYC अपडेट होने पर SMS मिलेगा।',
      ],
    },

    docs: {
      en: ['Aadhaar card', 'PAN card (or Form 60)', '2 passport size photos', 'Mobile number linked to Aadhaar'],
      mr: ['आधार कार्ड', 'PAN कार्ड (किंवा फॉर्म 60)', 'पासपोर्ट आकाराचे 2 फोटो', 'आधारशी जोडलेला मोबाइल नंबर'],
      hi: ['आधार कार्ड', 'PAN कार्ड (या फॉर्म 60)', 'पासपोर्ट आकार के 2 फोटो', 'आधार से जुड़ा मोबाइल नंबर'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'jandhan', Icon: LuUsers, cats: ['govt', 'deposits'],
    title: { en: 'Jan Dhan Account (PMJDY)', mr: 'जन धन खाते (PMJDY)', hi: 'जन धन खाता (PMJDY)' },
    tagline: {
      en: 'Zero-balance account with RuPay card for every family.',
      mr: 'प्रत्येक कुटुंबासाठी RuPay कार्डसह शून्य-शिल्लक खाते.',
      hi: 'हर परिवार के लिए RuPay कार्ड वाला शून्य-बैलेंस खाता।',
    },

    steps: {
      en: [
        'Ask the Floor Coordinator for the PMJDY form.',
        'Fill details and nominee.',
        'Attach Aadhaar copy and photo.',
        'Submit for verification — no minimum balance needed.',
        'Get passbook and RuPay debit card.',
      ],
      mr: [
        'फ्लोअर कोऑर्डिनेटर यांच्याकडून PMJDY फॉर्म घ्या.',
        'तपशील आणि नॉमिनीची माहिती भरा.',
        'आधार कार्डची प्रत आणि फोटो जोडा.',
        'पडताळणीसाठी अर्ज जमा करा — किमान शिल्लक आवश्यक नाही.',
        'पासबुक आणि RuPay डेबिट कार्ड घ्या.',
      ],
      hi: [
        'फ्लोर कोऑर्डिनेटर से PMJDY फॉर्म लें।',
        'अपना विवरण और नॉमिनी की जानकारी भरें।',
        'आधार कार्ड की प्रति और फोटो लगाएँ।',
        'सत्यापन के लिए आवेदन जमा करें — न्यूनतम बैलेंस आवश्यक नहीं है।',
        'पासबुक और RuPay डेबिट कार्ड प्राप्त करें।',
      ],
    },

    docs: {
      en: ['Aadhaar card', '1 photo'],
      mr: ['आधार कार्ड', '1 फोटो'],
      hi: ['आधार कार्ड', '1 फोटो'],
    },

    meet: ['bapu', 'pankaj'],
  },

  {
    id: 'schemes', Icon: LuShieldCheck, cats: ['govt'],
    title: { en: 'PMJJBY · PMSBY · APY', mr: 'PMJJBY · PMSBY · APY', hi: 'PMJJBY · PMSBY · APY' },
    tagline: {
      en: 'Low-cost life & accident insurance and Atal Pension.',
      mr: 'कमी खर्चाचा जीवन व अपघात विमा आणि अटल पेन्शन.',
      hi: 'कम लागत वाला जीवन एवं दुर्घटना बीमा और अटल पेंशन।',
    },

    steps: {
      en: [
        'Ask for the scheme enrolment form at the branch (or enrol in YONO).',
        'Choose scheme: PMJJBY (life), PMSBY (accident) or APY (pension).',
        'Fill nominee details and sign the auto-debit consent.',
        'Premium / contribution is auto-debited from your savings account.',
        'Keep the acknowledgement slip safely.',
      ],
      mr: [
        'शाखेतून योजनेचा नोंदणी फॉर्म घ्या किंवा YONO मधून नोंदणी करा.',
        'PMJJBY (जीवन), PMSBY (अपघात) किंवा APY (पेन्शन) योजना निवडा.',
        'नॉमिनीचे तपशील भरा आणि स्वयंचलित कपातीसाठी संमती द्या.',
        'विमा हप्ता किंवा योगदान बचत खात्यातून आपोआप कापले जाते.',
        'पावती सुरक्षित ठेवा.',
      ],
      hi: [
        'शाखा से योजना का पंजीकरण फॉर्म लें या YONO से पंजीकरण करें।',
        'PMJJBY (जीवन), PMSBY (दुर्घटना) या APY (पेंशन) योजना चुनें।',
        'नॉमिनी का विवरण भरें और ऑटो-डेबिट की सहमति दें।',
        'प्रीमियम या योगदान बचत खाते से अपने आप कट जाता है।',
        'पावती सुरक्षित रखें।',
      ],
    },

    docs: {
      en: ['SBI savings account', 'Aadhaar card', 'Nominee details'],
      mr: ['SBI बचत खातेचे तपशील', 'आधार कार्ड', 'नॉमिनीचे तपशील'],
      hi: ['SBI बचत खाते का विवरण', 'आधार कार्ड', 'नॉमिनी का विवरण'],
    },

    meet: ['pankaj'],
  },

  {
    id: 'transfers', Icon: LuSend, cats: ['digital'],
    title: { en: 'NEFT · RTGS · DD', mr: 'NEFT · RTGS · DD', hi: 'NEFT · RTGS · DD' },
    tagline: {
      en: 'Send money to any bank or get a Demand Draft.',
      mr: 'कोणत्याही बँकेत पैसे पाठवा किंवा डिमांड ड्राफ्ट मिळवा.',
      hi: 'किसी भी बैंक में पैसे भेजें या डिमांड ड्राफ्ट बनवाएँ।',
    },
    steps: {
      en: [
        'Collect the NEFT/RTGS or DD application form.',
        'Fill beneficiary name, account number and IFSC (for DD: payee & place).',
        'Pay by cash or debit from your SBI account.',
        'Submit at the counter and collect the UTR / DD.',
        'Tip: use YONO for faster, paperless transfers.',
      ],
      mr: [
        'NEFT/RTGS किंवा DD अर्जाचा फॉर्म घ्या.',
        'लाभार्थ्याचे नाव, खाते क्रमांक आणि IFSC भरा (DD साठी प्राप्तकर्त्याचे नाव व ठिकाण).',
        'रोख रक्कम भरा किंवा SBI खात्यातून पैसे वजा करा.',
        'काउंटरवर फॉर्म जमा करून UTR / DD घ्या.',
        'सूचना: जलद आणि कागदविरहित हस्तांतरणासाठी YONO वापरा.',
      ],
      hi: [
        'NEFT/RTGS या DD का आवेदन फॉर्म लें।',
        'लाभार्थी का नाम, खाता नंबर और IFSC भरें (DD के लिए प्राप्तकर्ता का नाम और स्थान)।',
        'नकद भुगतान करें या SBI खाते से राशि कटवाएँ।',
        'काउंटर पर फॉर्म जमा करके UTR / DD प्राप्त करें।',
        'सुझाव: तेज़ और कागज़ रहित ट्रांसफर के लिए YONO का उपयोग करें।',
      ],
    },

    docs: {
      en: ['Passbook / cheque', 'Beneficiary bank details', 'PAN for cash ₹50,000 & above'],
      mr: ['पासबुक / चेक', 'लाभार्थीच्या बँकेचे तपशील', '₹50,000 किंवा त्यापेक्षा जास्त रोख व्यवहारासाठी PAN'],
      hi: ['पासबुक / चेक', 'लाभार्थी के बैंक का विवरण', '₹50,000 या उससे अधिक नकद लेन-देन के लिए PAN'],
    },

    meet: ['ravindra', 'pankaj'],
  },
];

