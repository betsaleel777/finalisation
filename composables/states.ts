import type { HarcelementRule, Thematique } from "~/types/global"

export const useThematique = () => useState<Thematique>('thematique', () => ({ id: 0, texte: '', icon: '', image: '', content: '', rules: [] }))
export const useThematiques = () => useState<Thematique[]>('thematiques', () => [])
export const useHarcelement = () => useState<HarcelementRule>("harcelement", () => ({ id: 0, title: "", content: "", composant: "" }))
export const useHarcelements = () => useState<HarcelementRule[]>('harcelements', () => [])