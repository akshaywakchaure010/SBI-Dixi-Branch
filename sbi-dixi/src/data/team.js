// Branch team — names stay in English on purpose (real people; avoids mis-transliteration).
export const TEAM = [
  {
    id: 'vaibhav',
    initials: 'VB',
    name:  {en:'Shri Vaibhav Bodke', mr:'श्री. वैभव बोडके',hi: 'श्री वैभव बोडके'},
    role: { en: 'Branch Manager', mr: 'शाखा व्यवस्थापक', hi: 'शाखा व्यवस्थापक' },
    desc: {
      en: 'Loan approvals, branch administration & escalations',
      mr: 'कर्ज मंजुरी, शाखा प्रशासन आणि तक्रार निवारण',
      hi: 'कर्ज़ मंजूरी, शाखा प्रशासन और शिकायतों का निवारण',
    },
  },
  {
    id: 'ravindra',
    initials: 'RM',
    name:  {en:'Shri Ravindra Nath Mishra', mr:'श्री. रवींद्र नाथ मिश्रा', hi: 'श्री रवींद्र नाथ मिश्रा'},
    role: { en: 'Cash Officer', mr: 'कॅश ऑफिसर', hi: 'नकद अधिकारी' },
    desc: {
      en: 'Cash deposits, withdrawals & remittances',
      mr: 'रोख जमा, काढणे आणि पैसे पाठवणे',
      hi: 'नकद जमा, निकासी और धन प्रेषण',
    },
  },
  {
    id: 'pankaj',
    initials: 'PA',
    name:  {en:'Shri Pankaj Ahuja', mr:'श्री. पंकज आहुजा', hi: 'श्री पंकज आहूजा'},
    role: { en: 'Junior Assistant', mr: 'कनिष्ठ सहाय्यक', hi: 'कनिष्ठ सहायक' },
    desc: {
      en: 'Account opening, KYC, passbook & cards',
      mr: 'खाते उघडणे, KYC, पासबुक आणि कार्ड',
      hi: 'खाता खोलना, KYC, पासबुक और कार्ड',
    },
  },
  {
    id: 'vishal',
    initials: 'VP',
    name:  {en:'Shri Vishal Phapale', mr:'श्री. विशाल फापाळे', hi: 'श्री विशाल फापाळे'},
    role: { en: 'FOS Agri', mr: 'एफ.ओ.एस. कृषी', hi: 'एफ.ओ.एस. कृषि' },
    desc: {
      en: 'Kisan Credit Card & all farm loans',
      mr: 'किसान क्रेडिट कार्ड आणि सर्व शेती कर्जे',
      hi: 'किसान क्रेडिट कार्ड और सभी कृषि कर्ज़',
    },
  },
  {
    id: 'bhadane',
    initials: 'BM',
    // name: 'Shri Bhadane',
    name:  {en:'Shri Bhadane', mr:'श्री. भदाणे मेजर', hi: 'श्री भदाणे मेजर'},
    role: { en: 'Major', mr: 'मेजर', hi: 'मेजर'},
    desc: {
      en: 'Branch safety & help at the entrance',
      mr: 'शाखेची सुरक्षा आणि प्रवेशद्वारावर मदत',
      hi: 'शाखा की सुरक्षा और प्रवेश द्वार पर सहायता',
    },
  },
  {
    id: 'bapu',
    initials: 'BJ',
    name:  {en:'Shri Bapu Jadhav', mr:'श्री. बापू जाधव', hi: 'श्री बापू जाधव'},
    role: { en: 'Floor Coordinator', mr: 'फ्लोअर कोऑर्डिनेटर', hi: 'फ्लोर आयोजक' },
    desc: {
      en: 'Forms, guidance & the right counter for you',
      mr: 'फॉर्म, मार्गदर्शन आणि तुमच्यासाठी योग्य काउंटर',
      hi: 'फॉर्म, मार्गदर्शन और आपके लिए सही काउंटर की जानकारी',
    },
  },
];

export const TEAM_BY_ID = Object.fromEntries(TEAM.map((p) => [p.id, p]));
