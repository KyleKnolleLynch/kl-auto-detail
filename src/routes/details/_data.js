import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export let details = [
  { id:'1', title: 'Full exterior and interior detail', cost: 250, details: lorem.generateParagraphs(3) },
  { id:'2', title: 'Exterior detail', cost: 150, details: lorem.generateParagraphs(3) },
  { id:'3', title: 'Interior detail', cost: 150, details: lorem.generateParagraphs(3) },
]