import { type MDXComponents as MDXComponentsType } from 'mdx/types'
import { MDXComponents } from '~~/components/Landing/MDXComponents'

export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MDXComponents,
  }
}
