// TODO Add a couple lines about each project
const data = [
  {
    title: 'DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving',
    subtitle: 'NSDI’26',
    link: 'https://arxiv.org/abs/2411.02820',
    images: ['/images/projects/DroidSpeak/system.png', '/images/projects/DroidSpeak/e2e_system.png', '/images/projects/DroidSpeak/overall-upper.png'],
    // date: '2024-08',
    desc:
      'The first distributed LLM inference system that enables KV cache reuse across distributed nodes running inference of different LLMs',
  },
  {
    title: 'METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation',
    subtitle: 'SOSP’25',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764855',
    images: ['/images/projects/RAGServe/design2.png', '/images/projects/RAGServe/design_est.png', '/images/projects/RAGServe/end_to_end_gpt_anntd.png'],
    // date: '2024-08',
    desc:
      'The first RAG system that jointly schedules queries and adapts the key RAG configurations of each query, such as the number of retrieved text chunks and synthesis methods',
  },
  {
    title: 'Grouping Algorithms for Optimal Configuration of Virtual Links in AFDX',
    subtitle: 'JCST’25',
    link: 'https://jcst.ict.ac.cn/en/article/doi/10.1007/s11390-025-4525-x?viewType=HTML',
    images: ['/images/projects/AFDX/overview.png', '/images/projects/AFDX/Fig 6.png', '/images/projects/AFDX/results.png'],
    // date: '2024-08',
    desc:
      'Scalably assigning messages to Avionics Full-Duplex Switched Ethernet (AFDX) virtual links reduces bandwidth usage by 24.7%.',
  },
  {
    title: 'GIPUT: Maximizing Photo Coverage Efficiency for UAV Trajectory',
    subtitle: 'APWeb‑WAIM’24',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-7232-2_26',
    images: ['/images/projects/giput3.png', '/images/projects/giput2.png'],
    // date: '2024-08',
    desc:
      'GIPUT accurately models objects with realistic shapes, enabling precise computation of UAV photo coverage, which is essential for the UAV to learn optimal trajectories.',
  },
  // {
  //   title: 'Space Potato',
  //   subtitle: 'A kickstarter funded potato powered weather balloon.',
  //   link: 'http://www.spacepotato.org',
  //   image: '/images/projects/spacepotato.jpg',
  //   date: '2015-06-28',
  //   desc:
  //     'Launched a potato battery powered weather balloon with two cameras '
  //     + 'and gps transponder. Resulting photos were published in a coffee table book. '
  //     + 'You can email me for a copy.',
  // },
  // {
  //   title: 'Cat Detector',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc:
  //     'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //     + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //     + 'to continue hosting.',
  // },
];

export default data;
