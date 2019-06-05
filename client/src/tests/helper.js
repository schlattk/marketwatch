const stock = (wrapper, value) => {
  const stockInput = wrapper.find('#first');
  stockInput.instance().value = value;
  stockInput.simulate('change');
};
const period = (wrapper, value) => {
  const periodInput = wrapper.find('select');
   periodInput.instance().value = value;
   periodInput.simulate('change');
};
const asset = { id: 0, stock: 'AAPL', period: '3m'};

const asset1 = { id: 1, stock: 'TWTR', period: '1m'};

const insertAsset = (wrapper) => {
    wrapper.instance().putData(asset.id, asset.stock, asset.period);
  };

const insertTwoAssets = (wrapper) => {
    wrapper.instance().putData(asset.id, asset.stock, asset.period);
    wrapper.instance().putData(asset1.id, asset1.stock, asset1.period);
  };

const timeOut = (time) => {
  new Promise((resolve,reject) => setTimeout (resolve, time));
}




export default { stock: stock,
                 period: period,
                 asset: asset,
                 insert: insertAsset,
                 insertTwo: insertTwoAssets,
                 timeOut: timeOut
               };
