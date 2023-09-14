export function validateAlphaSpace(value) {
  return !!value.match(/^[a-zA-Z\s]*$/) || 'Name must contain letters only';
}

export function hideWhenDisabled({document}) {
  return !document?.enabled;
}

export function isNotAdmin({ currentUser }) {
  return currentUser?.role !== 'administrator';
}
