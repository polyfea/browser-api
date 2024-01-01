import { MicrofrontendSpec, MicrofrontendSpecFromJSON, MicrofrontendSpecToJSON, instanceOfMicrofrontendSpec } from '../../src/generated/models/MicrofrontendSpec';
import { expect, test } from 'vitest'

test('api of MicrofrontendSpec is nonbreaking', () => {
    expect(instanceOfMicrofrontendSpec({})).toBe(true);

    // compilation error checking
    const resource: MicrofrontendSpec = {
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
    };

    let json = MicrofrontendSpecToJSON(resource);
    // Check if the properties of MicrofrontendSpec are defined
    expect(json.dependsOn).toBeDefined();
    expect(json.module).toBeDefined();
    expect(json.resources).toBeDefined();

    
    // add other properties of MicrofrontendSpec here
    const copy = MicrofrontendSpecFromJSON(json);
    expect(copy.dependsOn).toStrictEqual(resource.dependsOn);
    expect(copy.module).toStrictEqual(resource.module);
    expect(copy.resources).toStrictEqual(resource.resources);

});