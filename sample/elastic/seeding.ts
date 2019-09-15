import { Index } from '@elastic/elasticsearch/api/requestParams';
import { createIndex } from './lib/seeds';
import { ELASTIC_HOST } from './constants';

const indexList: Array<Index> = [
  {
    index: 'user',
    body: {
      id: '1',
      name: '荒木 駿輝',
      tel: [
        { number: '080-8318-3100' }
      ]
    }
  },
  {
    index: 'user',
    body: {
      id: '3',
      name: '荒木 ゆうた',
      tel: [
        { number: '080-8318-3100' }
      ]
    }
  },
  {
    index: 'user',
    body: {
      id: '2',
      name: '斎藤 秋人',
      tel: [
        { number: '080-8318-3100' }
      ]
    }
  }
];

createIndex(ELASTIC_HOST.DEVELOPMENT, indexList);
