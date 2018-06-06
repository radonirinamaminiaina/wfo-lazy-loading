import '@scss/app.scss'
import features from './features'

$(function () {
  // get the collection of features
  const dataFeatures = $('[data-features]').data('features')
  if (!dataFeatures) return;
  // dynamic import
  dataFeatures.forEach(url => {
    const ft = async () => {
      // we import the feature according to the url
      const feature = await import(`${features[url]}`)
      // we instanciate the feature we got
      const instanciateResult = new feature.default()
      // then call a public method, here render()
      instanciateResult.render()
    }
    ft()
  });
})