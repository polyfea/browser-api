import { StaticConfigArea, StaticConfigAreaFromJSON, StaticConfigAreaToJSON, instanceOfStaticConfigArea } from '../../src/generated/models/StaticConfigArea';
import { expect, test } from 'vitest'

test('api of StaticConfigArea is nonbreaking', () => {
    expect(instanceOfStaticConfigArea({name: {}})).toBe(true);
    expect(instanceOfStaticConfigArea({})).toBe(false);

    // compilation error checking
    const resource: StaticConfigArea = {        
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
    };

    let json = StaticConfigAreaToJSON(resource);
    // Check if the properties of StaticConfigArea are defined
    expect(json.name).toBeDefined();
    expect(json.path).toBeDefined();
    expect(json.contextArea).toBeDefined();


    // add other properties of StaticConfigArea here
    const copy = StaticConfigAreaFromJSON(json);
    expect(copy.name).toStrictEqual(resource.name);
    expect(copy.path).toStrictEqual(resource.path);
    expect(copy.contextArea).toStrictEqual(resource.contextArea);

});