const stock = (wrapper, value) => {
  const stockInput = wrapper.find('#first');
  stockInput.instance().value = value;
  stockInput.simulate('change');
};
const period = (wrapper, value) => {
  const periodInput = wrapper.find('#period');
   periodInput.instance().value = value;
   periodInput.simulate('change');
};
const ma1 = (wrapper, value) => {
  const stockInput = wrapper.find('#ma1');
  stockInput.instance().value = value;
  stockInput.simulate('change');
};
const ma2 = (wrapper, value) => {
  const periodInput = wrapper.find('#ma2');
   periodInput.instance().value = value;
   periodInput.simulate('change');
};
const asset = { id: 0, stock: 'AAPL', period: '3m', ma1: 10, ma2: 20};

const asset1 = { id: 1, stock: 'TWTR', period: '1m', ma1: 10, ma2: 20};

const insertAsset = (wrapper) => {
    wrapper.instance().putData(asset.id, asset.stock, asset.period, asset.ma1, asset.ma2);
  };

const insertTwoAssets = (wrapper) => {
    wrapper.instance().putData(asset.id, asset.stock, asset.period, asset.ma1, asset.ma2);
    wrapper.instance().putData(asset1.id, asset1.stock, asset1.period, asset1.ma1, asset1.ma2);
  };

const timeOut = (time) => {
  new Promise((resolve,reject) => setTimeout (resolve, time));
}




export default { stock: stock,
                 period: period,
                 ma1: ma1,
                 ma2: ma2,
                 asset: asset,
                 insert: insertAsset,
                 insertTwo: insertTwoAssets,
                 timeOut: timeOut
               };
