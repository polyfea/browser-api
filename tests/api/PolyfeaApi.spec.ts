
import { PolyfeaApi, GetContextAreaRequest } from '../../src/generated/apis/PolyfeaApi';
import { ContextArea, StaticConfig } from '../../src/generated/models';
import { expect, test } from 'vitest'
import { Configuration, FetchAPI } from '../../src/generated/runtime';
import * as FetchMock from 'fetch-mock';


test('getContextArea api of PolyfeaApi is nonbreaking', async () => {
    // given
    const expectedContextArea: ContextArea = {
        elements: [
            {
                microfrontend: 'some',
                tagName: 'my-element',
                attributes: {
                    'some': 'value'
                },
                style: {
                    'some': 'value'
                }
            }
        ],
        microfrontends: {
            some: {
                module: './some',
                dependsOn: undefined,
                resources: [{
                    kind: 'script',
                    href: './some',
                    attributes: {
                        'some': 'value'
                    },
                    waitOnLoad: true,
                }]
            }
        }
    };
    const fetchMock = FetchMock.sandbox();
    fetchMock.get('http://localhost:8080/polyfea/context-area/test?path=.%2Ftest&take=1', expectedContextArea);

    const config = new Configuration({
        basePath: 'http://localhost:8080/polyfea',
        fetchApi: fetchMock as unknown as FetchAPI
    });

    // when
    const api = new PolyfeaApi(config);
    const contextArea = await api.getContextArea({
        name: 'test',
        path: './test',
        take: 1,
    });

    // then
    expect(contextArea).toStrictEqual(expectedContextArea);
});

test('api of PolyfeaApi is nonbreaking', async () => {
    // given
    const expectedStaticConfig: StaticConfig = {
        contextAreas: [
            {
                name: 'some-area',
                path: '/some-area',
                contextArea: {
                    elements: [
                        {
                            microfrontend: 'some',
                            tagName: 'my-element',
                            attributes: {
                                'some': 'value'
                            },
                            style: {
                                'some': 'value'
                            }
                        }
                    ],
                    microfrontends: undefined
                }
            }
        ],
        microfrontends: {
            some: {
                dependsOn: ['some'],
                module: './some',
                resources: [{
                    kind: 'script',
                    href: './some',
                    attributes: {
                        'some': 'value'
                    },
                    waitOnLoad: true,
                }]
            }
        }
    };

    const fetchMock = FetchMock.sandbox();
    fetchMock.get('http://localhost:8080/polyfea/static-config', expectedStaticConfig);

    const config = new Configuration({
        basePath: 'http://localhost:8080/polyfea',
        fetchApi: fetchMock as unknown as FetchAPI
    });

    // when
    const api = new PolyfeaApi(config);
    const contextArea = await api.getStaticConfig();

    // then
    expect(contextArea).toStrictEqual(expectedStaticConfig);
});