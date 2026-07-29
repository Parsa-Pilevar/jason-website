import {defineArrayMember, defineField, defineType} from 'sanity'

const webLink = defineType({
  name: 'webLink',
  title: 'Web Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required()}),
  ],
})

const role = defineType({
  name: 'role',
  title: 'Role',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'org', title: 'Organisation', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'url', title: 'URL', type: 'url'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'org'},
  },
})

const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'object',
  fields: [
    defineField({name: 'citation', title: 'Citation', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
  preview: {
    select: {title: 'citation'},
  },
})

const publicationGroup = defineType({
  name: 'publicationGroup',
  title: 'Publication Group',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [defineArrayMember({type: 'publication'})],
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'institution', title: 'Institution', type: 'string'}),
    defineField({name: 'department', title: 'Department', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({
      name: 'links',
      title: 'Web Links',
      type: 'array',
      of: [defineArrayMember({type: 'webLink'})],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})

export const publicationsPage = defineType({
  name: 'publicationsPage',
  title: 'Publications Page',
  type: 'document',
  fields: [
    defineField({
      name: 'groups',
      title: 'Publication Groups',
      type: 'array',
      of: [defineArrayMember({type: 'publicationGroup'})],
    }),
  ],
})

export const practicePage = defineType({
  name: 'practicePage',
  title: 'Practice Page',
  type: 'document',
  fields: [
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [defineArrayMember({type: 'role'})],
    }),
  ],
})

export const advisoryPage = defineType({
  name: 'advisoryPage',
  title: 'Advisory Page',
  type: 'document',
  fields: [
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [defineArrayMember({type: 'role'})],
    }),
  ],
})

export const cvPage = defineType({
  name: 'cvPage',
  title: 'CV Page',
  type: 'document',
  fields: [
    defineField({name: 'cvFile', title: 'CV File', type: 'file'}),
    defineField({
      name: 'note',
      title: 'Fallback Note',
      type: 'string',
      initialValue: 'CV coming soon.',
    }),
  ],
})

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [defineField({name: 'intro', title: 'Intro Text', type: 'text', rows: 3})],
})

export const pageSchemaTypes = [
  webLink,
  role,
  publication,
  publicationGroup,
  homePage,
  publicationsPage,
  practicePage,
  advisoryPage,
  cvPage,
  contactPage,
]
