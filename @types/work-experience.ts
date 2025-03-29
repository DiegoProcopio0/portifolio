export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: KnownTech[]
  description: {
    raw: string
  }
}
