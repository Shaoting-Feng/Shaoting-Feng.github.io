// TODO Add a couple lines about each project
const data = [
  {
    title: 'DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving',
    subtitle: 'Preprint',
    link: 'https://arxiv.org/abs/2411.02820',
    images: ['/images/projects/DroidSpeak/overview.png', '/images/projects/DroidSpeak/results.png', '/images/projects/DroidSpeak/droidspeak_scenarios.png', '/images/projects/DroidSpeak/layer-sens.png'],
    // date: '2024-08',
    desc:
      'DroidSpeak turbocharges multi-LLM pipelines by sharing KV caches across fine-tuned models, slashing latency by up to 2.6× and boosting throughput by 3× with negligible accuracy loss. ',
  },
  {
    title: 'RAGServe: Fast Quality-Aware RAG Systems with Configuration Adaptation',
    subtitle: 'Preprint',
    link: 'https://arxiv.org/abs/2412.10543',
    images: ['/images/projects/RAGServe/design2.png', '/images/projects/RAGServe/design_est.png', '/images/projects/RAGServe/end_to_end_gpt_anntd.png', '/images/projects/RAGServe/per_input_annted.png'],
    // date: '2024-08',
    desc:
      'RAGServe turbocharges RAG by pruning and adapting per-query configurations on the fly, slashing latency by up to 2.5× without sacrificing quality.',
  },
  {
    title: 'Grouping Algorithms for Optimal Configuration of Virtual Links in AFDX',
    subtitle: 'JCST’25',
    link: 'https://jcst.ict.ac.cn/en/article/doi/10.1007/s11390-025-4525-x?viewType=HTML',
    images: ['/images/projects/AFDX/overview.png', '/images/projects/AFDX/results.png'],
    // date: '2024-08',
    desc:
      'Our algorithms turbocharge AFDX networks by smartly grouping message flows into virtual link. Scalable from just a handful of flows to hundreds, they deliver leaner, faster avionics communications with minimal overhead.',
  },
  {
    title: 'GIPUT: Maximizing Photo Coverage Efficiency for UAV Trajectory',
    subtitle: 'APWeb‑WAIM’24',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-7232-2_26',
    images: ['/images/projects/giput1.png', '/images/projects/giput2.png', '/images/projects/giput3.png', '/images/projects/giput4.png'],
    // date: '2024-08',
    desc:
      'GIPUT models objects with realistic shapes, enabling UAVs to learn optimal trajectories while considering photo coverage, energy consumption, and bandwidth utilization. It achieves twice the efficiency of state-of-the-art algorithms.',
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
