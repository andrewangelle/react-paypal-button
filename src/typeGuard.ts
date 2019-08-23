function typeGuard(str: string | undefined): string {
  if(str !== undefined){
    return str as string
  } else {
    return ''
  }
}

export default typeGuard

