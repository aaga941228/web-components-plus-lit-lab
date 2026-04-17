import { api } from './api';
import type { GetCharactersResponse } from '../types/character.types';

export const getCharacters = async (
  page = 1
): Promise<GetCharactersResponse> => {
  const response = await api.get<GetCharactersResponse>('/character', {
    params: { page },
  });

  return response.data;
};
