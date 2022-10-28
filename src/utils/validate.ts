// 校验是否是有效链接
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
