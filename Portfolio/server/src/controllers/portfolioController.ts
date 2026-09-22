import { Request, Response } from 'express';
import { portfolioData } from '../data/portfolio';

export const getPortfolio = (req: Request, res: Response) => {
  res.json({
    success: true,
    data: portfolioData
  });
};

export const getProjects = (req: Request, res: Response) => {
  res.json({
    success: true,
    data: portfolioData.projects
  });
};

export const getProjectBySlug = (req: Request, res: Response) => {
  const { slug } = req.params;
  const project = portfolioData.projects.find(p => p.slug === slug);
  
  if (!project) {
    res.status(404).json({
      success: false,
      message: 'Project not found'
    });
    return;
  }

  res.json({
    success: true,
    data: project
  });
};
