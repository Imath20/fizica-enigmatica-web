
import type { Problema } from '@/types/problema';

export const problemeData: Problema[] = [
  {
    id: '1',
    index: 1,
    titlu: 'Viteza undei P (Seism)',
    descriere: 'Calculul vitezei undelor primare în timpul unui seism',
    categorie: 'seisme',
    dificultate: 'usoare',
    cerinte: ['Calculează viteza', 'Determină timpul de propagare'],
    subpuncte: [
      {
        id: '1a',
        cerinta: 'Calculează viteza undei P știind că distanța este 150 km și timpul de propagare este 25 s',
        punctaj: 3
      },
      {
        id: '1b', 
        cerinta: 'Determină timpul necesar pentru a parcurge 200 km',
        punctaj: 2
      }
    ],
    punctajTotal: 5,
    continut: 'Pentru undele seismice P (primare), viteza se calculează folosind formula v = d/t, unde d este distanța parcursă și t este timpul de propagare.',
    formule: ['v = d/t', 't = d/v'],
    date: {
      distanta: 150,
      timp: 25,
      unitate_viteza: 'km/s'
    }
  },
  {
    id: '2',
    index: 2,
    titlu: 'Viteza undei S (Seism)',
    descriere: 'Calculul vitezei undelor secundare în timpul unui seism',
    categorie: 'seisme',
    dificultate: 'usoare',
    cerinte: ['Calculează viteza', 'Compară cu undele P'],
    subpuncte: [
      {
        id: '2a',
        cerinta: 'Calculează viteza undei S pentru aceeași distanță de 150 km parcursă în 45 s',
        punctaj: 3
      },
      {
        id: '2b',
        cerinta: 'Compară vitezele undelor P și S și explică diferența',
        punctaj: 4
      }
    ],
    punctajTotal: 7,
    continut: 'Undele S (secundare) se propagă mai lent decât undele P. Această diferență de viteză permite determinarea distanței până la epicentrul seismului.',
    formule: ['v_S = d/t_S', 'Δt = t_S - t_P'],
    date: {
      distanta: 150,
      timp_S: 45,
      timp_P: 25
    }
  },
  {
    id: '3',
    index: 3,
    titlu: 'Oscilația pendulului simplu',
    descriere: 'Calculul perioadei de oscilație pentru un pendul simplu',
    categorie: 'pendule',
    dificultate: 'medii',
    cerinte: ['Calculează perioada', 'Determină frecvența'],
    subpuncte: [
      {
        id: '3a',
        cerinta: 'Calculează perioada de oscilație pentru un pendul cu lungimea l = 1 m',
        punctaj: 4
      },
      {
        id: '3b',
        cerinta: 'Determină frecvența oscilației',
        punctaj: 3
      },
      {
        id: '3c',
        cerinta: 'Calculează energia cinetică maximă dacă masa este 0.5 kg și amplitudinea 0.1 m',
        punctaj: 5
      }
    ],
    punctajTotal: 12,
    continut: 'Pendulul simplu execută oscilații armonice simple pentru unghiuri mici. Perioada depinde doar de lungime și accelerația gravitațională.',
    formule: ['T = 2π√(l/g)', 'f = 1/T', 'E_c = ½mv²'],
    date: {
      lungime: 1,
      g: 9.8,
      masa: 0.5,
      amplitudine: 0.1
    }
  },
  {
    id: '4',
    index: 4,
    titlu: 'Interferența undelor',
    descriere: 'Studiul interferenței constructive și destructive a undelor',
    categorie: 'unde',
    dificultate: 'grele',
    cerinte: ['Analiza interferenței', 'Calculează diferența de fază'],
    subpuncte: [
      {
        id: '4a',
        cerinta: 'Determină condițiile pentru interferența constructivă',
        punctaj: 5
      },
      {
        id: '4b',
        cerinta: 'Calculează diferența de drum pentru primul minim',
        punctaj: 6
      },
      {
        id: '4c',
        cerinta: 'Analizează variația amplitudinii rezultante',
        punctaj: 7
      }
    ],
    punctajTotal: 18,
    continut: 'Când două unde se suprapun, se produce interferența. Amplitudinea rezultantă depinde de diferența de fază între unde.',
    formule: ['Δ = |x₁ - x₂|', 'φ = 2πΔ/λ', 'A = A₁ + A₂ (constructivă)'],
    date: {
      lambda: 0.5,
      amplitudine1: 2,
      amplitudine2: 1.5
    }
  },
  {
    id: '5',
    index: 5,
    titlu: 'Difracția luminii prin prismă',
    descriere: 'Studierea dispersiei luminii albe prin prisma optică',
    categorie: 'difractie',
    dificultate: 'dificile',
    cerinte: ['Calculează indicele de refracție', 'Determină unghiul de deviație'],
    subpuncte: [
      {
        id: '5a',
        cerinta: 'Calculează indicele de refracție pentru lumina roșie (λ = 650 nm)',
        punctaj: 6
      },
      {
        id: '5b',
        cerinta: 'Calculează indicele pentru lumina violetă (λ = 400 nm)',
        punctaj: 6
      },
      {
        id: '5c',
        cerinta: 'Determină dispersia unghiulară a prismei',
        punctaj: 8
      },
      {
        id: '5d',
        cerinta: 'Explică formarea spectrului continuu',
        punctaj: 5
      }
    ],
    punctajTotal: 25,
    continut: 'Prisma optică descompune lumina albă în spectrul său component datorită dependenței indicelui de refracție de lungimea de undă.',
    formule: ['n = sin((A+δ)/2)/sin(A/2)', 'δ = δ(λ)', 'D = dδ/dλ'],
    date: {
      unghi_prisma: 60,
      lambda_rosu: 650,
      lambda_violet: 400,
      n_rosu: 1.514,
      n_violet: 1.532
    }
  },
  {
    id: '6',
    index: 6,
    titlu: 'Figuri Lissajous',
    descriere: 'Analiza traiectoriilor rezultate din compunerea oscilațiilor perpendiculare',
    categorie: 'unde',
    dificultate: 'dificile',
    cerinte: ['Determină ecuațiile parametrice', 'Analizează forma traiectoriei'],
    subpuncte: [
      {
        id: '6a',
        cerinta: 'Scrie ecuațiile parametrice pentru x(t) și y(t)',
        punctaj: 4
      },
      {
        id: '6b',
        cerinta: 'Determină forma figurii pentru raportul frecvențelor 1:2',
        punctaj: 8
      },
      {
        id: '6c',
        cerinta: 'Analizează efectul diferenței de fază asupra figurii',
        punctaj: 10
      }
    ],
    punctajTotal: 22,
    continut: 'Figurile Lissajous se formează prin compunerea a două oscilații armonice perpendiculare cu frecvențe diferite.',
    formule: ['x(t) = A₁sin(ω₁t + φ₁)', 'y(t) = A₂sin(ω₂t + φ₂)', 'r = ω₁/ω₂'],
    date: {
      A1: 2,
      A2: 3,
      omega1: 1,
      omega2: 2,
      phi1: 0,
      phi2: Math.PI/4
    }
  }
];
