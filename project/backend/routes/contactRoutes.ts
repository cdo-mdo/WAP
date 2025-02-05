import express from 'express';
import morgan from 'morgan';
import { get_contacts, get_one_contact, add_contact, update_contact, delete_contact,
        route_not_found, error_request_handler
 } from '../controllers/contactHandlers'

const router = express.Router();

router.get('/', get_contacts);
router.post('/', express.json(), add_contact);
router.get('/:id', get_one_contact);
router.put('/:id', express.json(), update_contact);
router.delete('/:id', delete_contact);

export default router;