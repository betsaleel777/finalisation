interface Rule {
    id: number
    content: string
    title: string
}
interface Thematique {
    id: number
    texte: string;
    icon: string;
    content: string;
    image: string;
    rules: Array<Rule>
}
interface HarcelementRule {
    id: number,
    title: string;
    content: string;
    composant: string
}

export type { Thematique, Rule, HarcelementRule }