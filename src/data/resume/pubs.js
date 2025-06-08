/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name
 * @property {string} pub
 * @property {string} people
 * @property {string} codeUrl
 * @property {string} slidesUrl
 * @property {string} pdfUrl
 * @property {string} videoUrl
 */
const pubs = [
  {
    name: 'DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving',
    pub: 'Preprint',
    people: 'Yuhan Liu, Yuyang Huang, Jiayi Yao, <u>Shaoting Feng</u>, Zhuohan Gu, Kuntai Du, Hanchen Li, Yihua Cheng, Junchen Jiang, Shan Lu, Madan Musuvathi, Esha Choukse',
    pdfUrl: 'https://arxiv.org/abs/2411.02820',
  },
  {
    name: 'RAGServe: Fast Quality-Aware RAG Systems with Configuration Adaptation',
    pub: 'Preprint',
    people: 'Siddhant Ray, Rui Pan, Zhuohan Gu, Kuntai Du, <u>Shaoting Feng</u>, Ganesh Ananthanarayanan, Ravi Netravali, Junchen Jiang',
    pdfUrl: 'https://arxiv.org/abs/2412.10543',
    posterUrl: 'https://drive.google.com/file/d/13Jty9Ji_ICVineQB9Yx7r9eliO8oLpvl/view?usp=sharing',

  },
  {
    name: 'Grouping Algorithms for Optimal Configuration of Virtual Links in AFDX',
    pub: 'JCST’25',
    people: '<u>Shaoting Feng</u>, Quanquan Peng, Qinya Li, Fan Wu, Guihai Chen',
    codeUrl: 'https://github.com/Shaoting-Feng/Grouping-Algorithms-of-Virtual-Links',
    slidesUrl: 'https://docs.google.com/presentation/d/1Opyq9rNeQE5s-zv5Uxn78LpXPJYm9If3/edit?usp=sharing&ouid=117429613749838892485&rtpof=true&sd=true',
    pdfUrl: 'https://jcst.ict.ac.cn/en/article/doi/10.1007/s11390-025-4525-x?viewType=HTML',
  },
  {
    name: 'GIPUT: Maximizing Photo Coverage Efficiency for UAV Trajectory',
    pub: 'APWeb‑WAIM’24',
    people: '<u>Shaoting Feng</u>, Qinya Li, Yaodong Yang, Fan Wu, Guihai Chen',
    codeUrl: 'https://github.com/Shaoting-Feng/UAV-Trajectory-Algorithm',
    slidesUrl: 'https://drive.google.com/file/d/1mCJGBDjIUg9ix9JzXkK9mIaMy0yn9fDK/view?usp=drive_link',
    pdfUrl: 'https://link.springer.com/chapter/10.1007/978-981-97-7232-2_26',
  },
];

export default pubs;
