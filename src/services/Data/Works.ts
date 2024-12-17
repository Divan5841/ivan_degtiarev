interface Text {
  text: string;
  link?: string;
  list?: Text[];
}

export interface Work {
  title: Text;
  description: string;
  list: Text[];
}

export const WORKS: Work[] = [
  {
    title: { text: 'Halsa', link: 'https://myhalsa.ru/' },
    description:
      'An innovative platform for crafting customised vitamin formulations tailored to individual needs',
    list: [
      {
        text: 'Rewrote existing functionality from native JavaScript to React.',
      },
      {
        text: 'Maintained and developed the entire Frontend part of\u00A0the\u00A0company.',
      },
      {
        text: 'Participated in the description and preparation of tasks for\u00A0sprints.',
      },
      {
        text: 'Developed design mockups, UI kits with token systems, and\u00A0components.',
      },
      { text: 'Participated in conversion analysis and conducted tests.' },
      {
        text: 'Developed the administrative part for editing the survey graph.',
      },
      {
        text: 'Created a page templating system for the internal administrative\u00A0system.',
      },
      {
        text: 'Conducted interviews, mentored junior Frontend Developers, and provided detailed task\u00A0reviews.',
      },
    ],
  },
  {
    title: { text: 'Vizbl', link: 'https://vizbl.us/' },
    description:
      'Cutting-edge mobile app that elegantly situates 3D models within physical spaces, transforming imagination into immersive reality',
    list: [
      {
        text: 'Engineered the administrative segment of the application dedicated to model moderation.',
      },
      {
        text: 'Created forms enabling the upload of 3D models with various texture options.',
      },
      {
        text: 'Implemented the integration of 3D model display on the website utilising ThreeJS technology.',
      },
      {
        text: "Programmed a widget to embed 3D models from the\u00A0application's database into external websites",
      },
    ],
  },
  {
    title: { text: 'ViviParty' },
    description: 'Application for conducting audio-video conferences',
    list: [
      {
        text: 'Enhanced state manager functionality using Mobx-state-tree technology, ensuring alignment with the database schema and\u00A0employing lifecycle methods for robust data modelling.',
      },
      {
        text: 'Created user-friendly forms enabling the addition of video conferences to calendars, incorporating timezone support.',
      },
      {
        text: 'Integrated and optimized two WebRTC libraries to enhance video conference functionalities.',
      },
      {
        text: 'Developed fundamental aspects of video rooms, accommodating diverse participant roles to\u00A0facilitate seamless interactions.',
      },
      {
        text: 'Engineered intricate logic for real-time state synchronisation among conference participants using WebSocket technology, enhancing collaborative experiences.',
      },
      {
        text: 'Developed scalable conference functionality catering to 50+ participants, optimizing performance and user engagement.',
      },
      {
        text: 'Customised multiple layouts to suit specific conference purposes, enhancing user experience and visual appeal.',
      },
      {
        text: 'Made significant contributions to the design layout development process, ensuring a\u00A0harmonious integration of functionality and\u00A0aesthetics.',
      },
      {
        text: 'Demonstrated adaptability by promptly responding to changing project requirements, efficiently shifting development focus to\u00A0meet evolving demands.',
      },
    ],
  },
  {
    title: { text: 'Gennix' },
    description: 'Application for conducting audio-video conferences',
    list: [
      {
        text: "Implemented configuration for the application's interaction with the Metamack widget and user funds data.",
      },
      {
        text: 'Led the reverse coding process of smart contracts to enhance system understanding and\u00A0functionality.',
      },
      {
        text: 'Established seamless interaction between the client-side and the blockchain system using smart contracts, streamlining client account operations for optimal efficiency.',
      },
    ],
  },
  {
    title: { text: 'Triumff Partners' },
    description:
      'Coded visual representations for a variety of banking services',
    list: [
      {
        text: 'Developed intricate application forms for banking services, incorporating complex validation processes for tasks such as\u00A0account opening and insurance approval.',
      },
      {
        text: 'Collaborated closely with backend APIs, ensuring seamless data exchange and system integration.',
      },
      {
        text: 'Led the development of the user interface, focusing on creating intuitive and visually appealing designs to enhance user\u00A0experience.',
      },
    ],
  },
];
