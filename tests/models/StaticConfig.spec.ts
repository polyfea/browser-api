import { StaticConfig, StaticConfigFromJSON, StaticConfigToJSON, instanceOfStaticConfig } from '../../src/generated/models/StaticConfig';
import { expect, test } from 'vitest'

test('api of StaticConfig is nonbreaking', () => {
    expect(instanceOfStaticConfig({
        microfrontends: {},
        contextAreas: []
    })).toBe(true);
    expect(instanceOfStaticConfig({})).toBe(false);

    // compilation error checking
    const resource: StaticConfig = {
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

    let json = StaticConfigToJSON(resource);
    // Check if the properties of StaticConfig are defined
    expect(json.contextAreas).toBeDefined();
    expect(json.microfrontends).toBeDefined();


    // add other properties of StaticConfig here
    const copy = StaticConfigFromJSON(json);
    expect(copy.contextAreas).toStrictEqual(resource.contextAreas);
    expect(copy.microfrontends).toStrictEqual(resource.microfrontends);

});