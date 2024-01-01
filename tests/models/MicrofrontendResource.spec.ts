import { MicrofrontendResource, MicrofrontendResourceFromJSON, MicrofrontendResourceToJSON, instanceOfMicrofrontendResource } from '../../src/generated/models/MicrofrontendResource';
import { expect, test } from 'vitest'

test('api of MicrofrontendResource is nonbreaking', () => {
    expect(instanceOfMicrofrontendResource({})).toBe(true);

    // compilation error checking
    const resource: MicrofrontendResource = {
        'kind': 'script',
        'href': './some',
        'attributes': {
            'some': 'value'
        },
        'waitOnLoad': true,
    };

    let json = MicrofrontendResourceToJSON(resource);
    // Check if the properties of MicrofrontendResource are defined
    expect(json.kind).toBeDefined();
    expect(json.href).toBeDefined();
    expect(json.attributes).toBeDefined();
    expect(json.waitOnLoad).toBeDefined();

    // add other properties of MicrofrontendResource here
    const copy = MicrofrontendResourceFromJSON(json);
    expect(copy.kind).toBe(resource.kind);
    expect(copy.href).toBe(resource.href);
    expect(copy.attributes).toBe(resource.attributes);
    expect(copy.waitOnLoad).toBe(resource.waitOnLoad);

});