import { Client } from '@elastic/elasticsearch';
import { ErrorConsole } from './lib/errors';

import { ELASTIC_HOST } from './constants';
const client = new Client({ node: ELASTIC_HOST.DEVELOPMENT })

// インデックスの作成サンプル
const main = async () => {
  try {
    console.time('elastick-log');
    const { body } = await client.search({
      index: '*',
      // index: 'user',
      // index: 'game-of-thrones',
      // _source: '' // 表示するデータのカラムj
      // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
      // from: 5, // 5件後
      size: 100, // 取得するサイズ
      body: {
        // query: {
        //   // match: { quote: '' }
        // }
      }
    })
    console.timeEnd('elastick-log');

    console.log(JSON.stringify(body))
    console.log(body.hits.hits.length)
  } catch (err) {
    ErrorConsole(err);
  }
}

main();