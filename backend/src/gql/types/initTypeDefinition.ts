import { pathToFileURL } from 'url';
import { loadFiles } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
// import { __dirname } from './index.j';


export const initTypeDefinition = async () => {
    const resolversArray = await loadFiles(__dirname, {
        extensions: ['js'],
        ignoreIndex: true,
        requireMethod: (path: string) => {
            return import(pathToFileURL(path) as unknown as string);
        },
    });

    return mergeTypeDefs(resolversArray);
};
