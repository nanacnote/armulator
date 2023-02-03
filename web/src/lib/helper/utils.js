function parseInstructionForKstool(val) {
  // TODO: remove comments and replace line breaks with ; [think about how to handle branch names and main section]
  return val.replaceAll(/[\n\r;]+/g, ';');
}

export { parseInstructionForKstool };
