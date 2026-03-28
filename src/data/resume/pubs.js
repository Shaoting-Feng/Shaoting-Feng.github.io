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
    name: 'EVICPRESS: Joint KV-Cache Compression and Eviction for Efficient LLM Serving',
    pub: 'arXiv',
    people: '<u>Shaoting Feng</u><span>*</span>, Yuhan Liu<span>*</span>, Hanchen Li, Xiaokun Chen, Samuel Shen, Kuntai Du, Zhuohan Gu, Rui Zhang, Yuyang Huang, Yihua Cheng, Jiayi Yao, Qizheng Zhang, Ganesh Ananthanarayanan, Junchen Jiang',
    pdfUrl: 'https://arxiv.org/abs/2512.14946',
  },
  {
    name: 'LMCache: An Efficient KV Cache Layer for Enterprise-Scale LLM Inference',
    pub: 'arXiv',
    people: 'Yuhan Liu<span>*</span>, Yihua Cheng<span>*</span>, Jiayi Yao<span>*</span>, Yuwei An, Xiaokun Chen, <u>Shaoting Feng</u>, Yuyang Huang, Samuel Shen, Rui Zhang, Kuntai Du, Junchen Jiang',
    pdfUrl: 'https://arxiv.org/abs/2510.09665',
    codeUrl: 'https://github.com/LMCache/LMCache',
  },
  {
    name: 'DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving',
    pub: 'NSDI’26',
    people: 'Yuhan Liu, Yuyang Huang, Jiayi Yao, <u>Shaoting Feng</u>, Zhuohan Gu, Kuntai Du, Hanchen Li, Yihua Cheng, Junchen Jiang, Shan Lu, Madan Musuvathi, Esha Choukse',
    pdfUrl: 'https://arxiv.org/abs/2411.02820',
  },
  {
    name: 'AdaptCache: KV Cache Native Storage Hierarchy for Low-Delay and High-Quality Language Model Serving',
    pub: 'SOSP workshop BigMem’25',
    people: '<u>Shaoting Feng</u><span>*</span>, Hanchen Li<span>*</span>, Kuntai Du, Zhuohan Gu, Yuhan Liu, Jiayi Yao, Siddhant Ray, Samuel Shen, Yihua Cheng, Ganesh Ananthanarayanan, Junchen Jiang',
    pdfUrl: 'https://arxiv.org/pdf/2509.00105',
    slidesUrl: 'https://docs.google.com/presentation/d/1UWIFYIoNfhqE6urXdPH-vCjwsN59L_UX/edit?usp=sharing',
    codeUrl: 'https://github.com/Shaoting-Feng/LMCache/tree/9567da999f6c19e9743bb416568647be4155175e',
  },
  {
    name: 'METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation',
    pub: 'SOSP’25',
    people: 'Siddhant Ray, Rui Pan, Zhuohan Gu, Kuntai Du, <u>Shaoting Feng</u>, Ganesh Ananthanarayanan, Ravi Netravali, Junchen Jiang',
    pdfUrl: 'https://dl.acm.org/doi/10.1145/3731569.3764855',
    posterUrl: '/ragserve_poster.pdf',

  },
];

export default pubs;
