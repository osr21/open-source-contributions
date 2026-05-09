function interpolate(template, vars) {
  return template.replace(/{(w+)}/g, (_, k) => k in vars ? String(vars[k]) : '{' + k + '}');
}
module.exports = { interpolate };
