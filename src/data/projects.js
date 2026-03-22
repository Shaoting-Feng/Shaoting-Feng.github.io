// TODO Add a couple lines about each project
const data = [
  {
    title: 'LMCache',
    link: 'https://lmcache.ai/',
    images: ['/images/projects/LMCache/e2e_sys_diagram.png', '/images/projects/lmcache1.gif', '/images/projects/lmcache2.gif', '/images/projects/lmcache1.png'],
    subtitle: 'Star 7.7k',
    desc:
      'The best performance KV caching layer between LLM inference engines and storage backends.',
  },
  {
    title: 'vLLM production stack',
    link: 'https://docs.vllm.ai/projects/production-stack/en/latest/',
    images: ['/images/projects/prodstack-large.PNG'],
    subtitle: 'Star 2.2k',
    desc:
      'Cluster-wide Kubernetes orchestration.',
  },
  {
    title: 'LMBenchmark',
    link: 'https://github.com/LMCache/LMBenchmark',
    images: ['/images/projects/LMBenchmark/5.png', '/images/projects/LMBenchmark/1.jpg', '/images/projects/LMBenchmark/2.jpg'],
    subtitle: 'Star 52',
    desc:
      'Systematic and comprehensive benchmarks for LLM systems',
  },
  {
    title: 'EVICPRESS: Joint KV-Cache Compression and Eviction for Efficient LLM Serving',
    subtitle: 'arXiv',
    link: 'https://arxiv.org/abs/2512.14946',
    images: ['/images/projects/EVICPRESS/tradeoff.png', '/images/projects/EVICPRESS/e2e_system.png', '/images/projects/EVICPRESS/quality_vs_ttft.png'],
    // date: '2024-08',
    desc:
      'When a storage tier is full, whether we should compress the KV caches more aggressively or evict them to lower storage tiers.',
  },
  {
    title: 'DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving',
    subtitle: 'NSDI’26',
    link: 'https://arxiv.org/abs/2411.02820',
    images: ['/images/projects/DroidSpeak/system.png', '/images/projects/DroidSpeak/e2e_system.png', '/images/projects/DroidSpeak/overall-upper.png'],
    // date: '2024-08',
    desc:
      'The first distributed LLM inference system that enables KV cache reuse across distributed nodes running inference of different LLMs.',
  },
  {
    title: 'METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation',
    subtitle: 'SOSP’25',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764855',
    images: ['/images/projects/RAGServe/design2.png', '/images/projects/RAGServe/design_est.png', '/images/projects/RAGServe/end_to_end_gpt_anntd.png'],
    // date: '2024-08',
    desc:
      'The first RAG system that jointly schedules queries and adapts the key RAG configurations of each query, such as the number of retrieved text chunks and synthesis methods.',
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
