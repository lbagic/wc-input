import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WcInput } from '../src/WcInput.js';
import '../src/wc-input.js';

describe('WcInput', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<WcInput>(html`<wc-input></wc-input>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WcInput>(html`<wc-input></wc-input>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<WcInput>(html`<wc-input header="attribute header"></wc-input>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WcInput>(html`<wc-input></wc-input>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
