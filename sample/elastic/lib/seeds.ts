import { Client } from '@elastic/elasticsearch';
import { Index } from '@elastic/elasticsearch/api/requestParams';

export const createIndex = (host: string, indexList: Array<Index>): Promise<void | Error> => {
  return new Promise((resolve, reject) => {
    const client = new Client({ node: host })
    indexList.forEach((index, i) => {
      client.index(index)
        .then(() => {
          if (i === indexList.length) {
            client.indices.refresh({ index: '*' })
            resolve();
          }
        })
        .catch(() => {
          console.error('インデックスが作成できませんでした。');
          reject(new Error('error'));
        });
    });
  });
}
