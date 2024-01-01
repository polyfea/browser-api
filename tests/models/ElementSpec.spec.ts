import { ElementSpec, ElementSpecFromJSON, ElementSpecToJSON, instanceOfElementSpec } from '../../src/generated/models/ElementSpec';
import { expect, test } from 'vitest'

test('api of ElementSpec is nonbreaking', () => {
    expect(instanceOfElementSpec({ tagName: 'my-element' })).toBe(true);
    expect(instanceOfElementSpec({})).toBe(false);

    // compilation error checking
    const element: ElementSpec = {
        microfrontend: 'some',
        tagName: 'my-element',
        attributes: {
            'some': 'value'
        },
        style: {
            'some': 'value'
        }
    };

    let json = ElementSpecToJSON(element);
    // Check if the properties of ElementSpec are defined
    expect(json.tagName).toBeDefined();
    expect(json.attributes).toBeDefined();
    expect(json.style).toBeDefined();
    expect(json.microfrontend).toBeDefined();

    const copy = ElementSpecFromJSON(json);

    expect(copy.tagName).toBe(element.tagName);
    expect(copy.attributes).toBe(element.attributes);
    expect(copy.style).toBe(element.style);
    expect(copy.microfrontend).toBe(element.microfrontend);


});