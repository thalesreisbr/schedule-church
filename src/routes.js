const express = require('express');

const routes = express.Router();

const AddressController = require('./controller/AddressController');
const UserController = require('./controller/UserController');
const PriestController = require('./controller/PriestController');
const FaithfulController = require('./controller/FaithfulController');
const ChurchController = require('./controller/ChurchController');
const MassController = require('./controller/MassConstroller');


routes.post('/user/store', UserController.store);
routes.get('/users', UserController.list);

routes.post('/address/store', AddressController.store);
routes.get('/address', AddressController.list);

routes.get('/faithful', FaithfulController.list);
routes.get('/faithful/:faithful_id/list/mass/all', FaithfulController.listAllMass);
routes.post('/faithful/store', FaithfulController.store);
routes.post('/faithful/setMass/:mass_id', FaithfulController.setMass);
routes.post('/faithful/removeMass/:mass_id', FaithfulController.removeMass);



routes.get('/church', ChurchController.list);
routes.post('/church/store', ChurchController.store);
routes.post('/church/update/priest', ChurchController.updatePriest);

routes.post('/priest/store', PriestController.store);
routes.get('/priest', PriestController.list)

routes.get('/mass/list/all', MassController.listAll);
routes.get('/mass/list/date/:date', MassController.listByDate);
routes.get('/mass/list/date/:date1/:date2', MassController.listByDateBetween);
routes.get('/mass/list/city/:city/:date', MassController.listByCityInDate);
routes.get('/mass/:mass_id/list/faithful/all', MassController.listAllFaithful);
routes.post('/mass/store', MassController.store);

module.exports = routes;