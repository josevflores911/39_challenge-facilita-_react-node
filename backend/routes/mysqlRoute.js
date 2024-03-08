import express from 'express';
import {getClients,createClient, getClientById, updateClient, deleteClient} from '../models/postgresqlModel.js'
import { main } from '../services/mapService.js';



const router = express.Router();

// Route for Save a new Client
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.telephone ||
      !request.body.latitude ||
      !request.body.longitud
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, telephone,latitude,longitud',
      });
    }
    const newClient = {
      name: request.body.name,
      email: request.body.email,
      telephone: request.body.telephone,
      latitude: request.body.latitude,
      longitud: request.body.longitud,
    };

    const client = await createClient(newClient);
    //console.log("working", client);
    
    return response.status(201).send(client);
  } catch (error) {
    console.log("here");
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Clients from database
router.get('/', async (request, response) => {
  try {
      
      // DML Operation: Select (Get All)
    const rows = await getClients();
      console.log('All Clients:', rows);

    return response.status(200).json({
      count: rows.length,
      data: rows
    });
  } catch (error) {
    console.log("haha");
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get distance to Clients from database
router.get('/map', async (request, response) => {
  try {

    const result = await main();    
    return response.status(200).json({
      count: 777,
      data: result
    });
  } catch (error) {
   
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Client from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const client = await getClientById(id);
    console.log(client)

    return response.status(200).json(client);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Client
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.telephone ||
      !request.body.latitude ||
      !request.body.longitud
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, telephone,latitude,longitud',
      });
    }

    const { id } = request.params;

    const result = await updateClient(request.body, id);
 
    if (!result) {
      return response.status(404).json({ message: 'Client not found' });
    }

    return response.status(200).send({ message: 'Client updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a client
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await deleteClient(id);

    console.log(result)

    if (!result) {
      return response.status(404).json({ message: 'Client not found' });
    }

    return response.status(200).send({ message: 'Client deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;