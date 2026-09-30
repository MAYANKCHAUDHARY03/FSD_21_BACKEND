import { Router } from 'express';
import { getPortfolio, getProjects, getProjectBySlug } from '../controllers/portfolioController';
import { submitContact } from '../controllers/contactController';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ success: true, message: 'API is healthy' });
});

router.get('/portfolio', getPortfolio);
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);
router.post('/contact', submitContact);

export default router;
