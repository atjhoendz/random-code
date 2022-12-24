package generic

func ValueOrDefault[T comparable](value T, defaultValue T) T {
  var emptyValue T
  if value == emptyValue {
    return defaultValue
  }
  return value
}
