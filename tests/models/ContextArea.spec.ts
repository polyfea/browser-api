import { ContextArea, ContextAreaToJSON, instanceOfContextArea } from '../../src/generated/models/ContextArea';
import { expect, test } from 'vitest'
import { ElementSpec } from '../../src/generated/models/ElementSpec';
import { MicrofrontendSpec } from '../../src/generated/models/MicrofrontendSpec';

test('api of ContextArea is nonbreaking', () => {
  expect(instanceOfContextArea({ elements: [] })).toBe(true);
  expect(instanceOfContextArea({})).toBe(false);

  // compilation error checking
  const area: ContextArea = {
    elements: [] as Array<ElementSpec>,
    microfrontends: {
      some: {} as MicrofrontendSpec

    }
  };

  let json = ContextAreaToJSON(area);
  expect(json.elements).toBeDefined();
  expect(json.microfrontends).toBeDefined();

  const copy = ContextAreaToJSON(json);
  expect(copy.elements).toStrictEqual(json.elements);
  expect(copy.microfrontends).toStrictEqual(json.microfrontends);

});