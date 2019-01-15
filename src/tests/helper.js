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

export default { stock: stock,
                 period: period
               };
