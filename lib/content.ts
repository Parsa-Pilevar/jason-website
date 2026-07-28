import type { WebLink, PublicationGroup, Role } from "./types"

export const bio = {
  name: "Jason Grant-Rowles",
  title: "Doctoral Researcher",
  institution: "NIHR Biomedical Research Centre: Maudsley",
  department:
    "Institute of Psychiatry, Psychology, and Neuroscience (IoPPN), King's College London",
  email: "jason.grant-rowles@kcl.ac.uk",
  links: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=C6BOSOUAAAAJ&hl=en",
    },
    { label: "ORCID", url: "https://orcid.org/0000-0002-3532-1854" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jason-grant-rowles-70a22114/",
    },
    { label: "KCL", url: "https://www.kcl.ac.uk/people/jason-grant-rowles" },
  ] satisfies WebLink[],
  paragraphs: [
    "Lived Experience Researcher exploring how to improve informed consent within schizophrenia research.",
    "I am currently a NIHR Biomedical Research Centre: Maudsley Doctoral Researcher under the supervision of Professor Dame Til Wykes and Professor Gareth J Barker.",
    "I have been working in the field of mental health since 2016. My background includes the Civil Service, National Health Service, Academia, Charities, User-Led Groups, and Start Ups. Prior to working in mental health, I worked in Justice, Media, and Widening Participation.",
    "I am very keen to build international collaborations and explore opportunities, so do get in touch to have a conversation.",
  ],
}

export const publicationGroups: PublicationGroup[] = [
  {
    heading: "Articles from Doctoral Studies",
    publications: [
      {
        citation:
          "Grant-Rowles, J., Taylor, F., Moser, M., Barker, G. J., & Wykes, T. A systematic review and narrative synthesis of the strategies for obtaining meaningful informed consent from individuals with a diagnosis of schizophrenia. Available at SSRN 6576862.",
      },
    ],
  },
  {
    heading: "RECOLLECT group (King's College London and Nottingham)",
    publications: [
      {
        citation:
          "Hayes, D., Hunter-Brown, H., Camacho, E., McPhilbin, M., Elliott, R. A., Ronaldson, A., Grant-Rowles, J., ... & Jebara, T. (2023). Organisational and student characteristics, fidelity, funding models, and unit costs of recovery colleges in 28 countries: a cross-sectional survey. The Lancet Psychiatry, 10(10), 768-779.",
      },
      {
        citation:
          "McPhilbin, M., Repper, J., Kotera, Y., Grant-Rowles, J., ... & Slade, M. (2023). Organisational and student characteristics, fidelity, funding models, and unit costs of recovery colleges in 28 countries: a cross-sectional survey.",
      },
      {
        citation:
          "Kotera, Y., Ronaldson, A., Hayes, D., Hunter-Brown, H., McPhilbin, M., Dunnett, D., Grant-Rowles, J., ... & Slade, M. (2024). 28-country global study on associations between cultural characteristics and recovery college fidelity. Npj Mental Health Research, 3(1), 46.",
      },
      {
        citation:
          "McPhilbin, M., Stepanian, K., Yeo, C., Elton, D., Dunnett, D., Jennings, H., Grant-Rowles, J., ... & Lawrence, V. (2024). Investigating the impact of the COVID-19 pandemic on recovery colleges: multi-site qualitative study. BJPsych Open, 10(3), e113.",
      },
      {
        citation:
          "Kotera, Y., Ronaldson, A., Hayes, D., Hunter-Brown, H., McPhilbin, M., Dunnett, D., Grant-Rowles, J., ... & Slade, M. (2025). Cross-cultural insights from two global mental health studies: self-enhancement and ingroup biases. International Journal of Mental Health and Addiction, 23(5), 3572-3581.",
      },
      {
        citation:
          "Ronaldson, A., Allen, T., Bakolis, I., Emsley, R., Jebara, T., Kotera, Y., Grant-Rowles, J., ... & Slade, M. (2025). The impact of Recovery College enrolment on health service use and patient outcomes: retrospective matched cohort study using routinely collected data. medRxiv, 2025-12.",
      },
      {
        citation:
          "Takhi, S. K., Brown, H. H., Ronaldson, A., Lawrence, V., McPhilbin, M., Ingall, B. R., Grant-Rowles, J., ... & Slade, M. (2025). The content of Recovery College courses in England: a 71 college document analysis. Frontiers in Psychiatry, 16, 1605498.",
      },
      {
        citation:
          "Takhi, S. K., Jebara, T., McPhilbin, M., Stepanian, K., Dunnett, D., Grant-Rowles, J., ... & Lawrence, V. (2026). Organisational variation in Recovery College implementation: 31-college qualitative study. BJPsych Open, 12(1), e49.",
      },
    ],
  },
  {
    heading: "Manchester Group",
    publications: [
      {
        citation:
          "Haarmans, M., Nazroo, J., Kapadia, D., Maxwell, C., Osahan, S., Edant, J., Grant-Rowles, J., ... & Rhodes, J. (2022). The practice of participatory action research: Complicity, power and prestige in dialogue with the 'racialised mad'. Sociology of Health & Illness, 44, 106-123.",
      },
      {
        citation:
          "Kapadia, D., & Haarmans, M. (2025). Stigma, Racism, and Mental Healthcare. In Recalibrating Stigma (pp. 19-35). Bristol University Press.",
      },
      {
        citation:
          "Kapadia, D., Haarmans, M., Grant-Rowles, J., Maxwell, C., Motala, Z., Nazroo, J., ... & Rhodes, J. (2026). Racism, mortification and carcerality: Three concepts needed to understand the experiences of racially minoritised people diagnosed with severe mental illness. Social Science & Medicine, 119592.",
      },
    ],
  },
]

export const practiceRoles: Role[] = [
  { title: "Research Ethics Committee Member", org: "King's College London" },
  { title: "Student Representative", org: "Psychology PhD Students" },
  {
    title: "Web Editor",
    org: "Journal of Mental Health",
    url: "https://www.tandfonline.com/journals/ijmh20",
  },
  {
    title: "Lived Experience Practitioner",
    org: "Trauma Informed Collaborative, North London NHS Foundation Trust",
    url: "https://www.rcpsych.ac.uk/improving-care/nccmh/culture-of-care-programme/who-is-involved/culture-of-care-team-members/detail/jason-grant-knowles",
  },
]

export const advisoryRoles: Role[] = [
  {
    title: "Lived Experience Advisory Board",
    org: "Wellcome Prize for Mental Health Science, with Nature",
    url: "https://www.nature.com/immersive/wellcomeprizementalhealth/leab/index.html",
  },
  {
    title: "Public Board Member",
    org: "NIHR Applied Research Collaborative for Kent, Surrey, and Sussex",
    url: "https://arc-kss.nihr.ac.uk/about-us/governance",
  },
  {
    title: "Lived Experience Advisory Panel",
    org: "NIHR Research Support Service",
    url: "https://www.nihr.ac.uk/support-and-services/research-support-service/rss-hub-kings",
  },
]

export const contactIntro =
  "I am always happy to connect with new people, whether to talk about research, potential collaborations, or just to connect. Use the form below and I will get back to you as soon as I can."

export const cvNote = "CV coming soon."
