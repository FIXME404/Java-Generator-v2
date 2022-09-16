function JavaDocGenerator(props) {
  const { name, description, params, returns } = props;
  const paramList = params.map(param => {
    return `@param ${param.name} ${param.description}`;
  });
  const returnList = returns.map(ret => {
    return `@return ${ret.description}`;
  });
  const lines = [
    `/**`,
    ` * ${description}`,
    ` *`,
    ...paramList,
    ...returnList,
    ` */`,
    `${name}() {`,
    `}`
  ];

  return <span style={{ 'white-space': 'pre-line' }}>lines.join(` `);</span>;
}

export default JavaDocGenerator;
