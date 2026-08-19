import { Request, Response } from 'express';
import prisma from '../config/db';

export const getFeligreses = async (req: Request, res: Response) => {
  try {
    const feligreses = await prisma.feligreses.findMany({
      where: { activo: true }
    });
    res.json(feligreses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener los feligreses' });
  }
};

export const createFeligres = async (req: Request, res: Response) => {
  try {
    const { 
      nombres, 
      apellido_paterno, 
      apellido_materno, 
      genero, 
      documento_identidad, 
      telefono, 
      direccion,
      ciudad_id 
    } = req.body;
    
    const nuevoFeligres = await prisma.feligreses.create({
      data: {
        nombres,
        apellido_paterno,
        apellido_materno,
        genero,
        documento_identidad,
        telefono,
        direccion,
        ciudad_id
      }
    });

    res.status(201).json({
      msg: 'Feligrés registrado exitosamente',
      feligres: nuevoFeligres
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al registrar el feligrés' });
  }
};