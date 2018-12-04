ember-try-bower-ignored-reproduction
==============================================================================

Simple Addon repo to reproduce problem with ember-try when using a `bower` supplied version of ember. 


Reproduction
------------------------------------------------------------------------------

It's important to first have an `ember-source` version in your `node_modules`. Make sure to `yarn install` before running:

`ember try:each`

In `tests/acceptance/application-test`, I have this test:

```
test('visiting /', async function(assert) {
    await visit('/');
    assert.ok(window.Ember.VERSION);
    assert.equal(window.Ember.VERSION, "2.4.6");
});
```

Since that's what `lts-2-4` currently resolves to. You'll notice when running that `Ember.VERSION` resolves to `3.5.1`in the `ember-lts-2.4` test which uses a `bower` ember dependency. In the `ember-lts-2.18` version, which uses `ember-source` supplied by `npm`, `Ember.VERSION` is correct for `2.18`

If you then remove `ember-source` from this addon's `devDependencies`, the first test for `lts-2-4` will pass.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
