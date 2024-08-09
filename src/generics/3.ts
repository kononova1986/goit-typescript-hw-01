function merge<T extends object, U extends object>(objA: T, objB: U): T {
  return Object.assign(objA, objB);
}
