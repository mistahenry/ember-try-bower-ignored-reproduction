'use strict';

module.exports = function() {
  return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-2.4',
          bower: {
            dependencies: {
              'ember': 'components/ember#lts-2-4'
            },
            resolutions: {
              'ember': 'lts-2-4'
            }
          }
        },
        {
          name: 'ember-lts-2.18',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.18.0'
            }
          }
        }
      ]
    };
};
