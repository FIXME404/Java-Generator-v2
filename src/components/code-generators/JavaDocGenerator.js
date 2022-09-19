function JavaDocGenerator(props) {
  // console.log('JavaDocGenerator RENDERED');
  const { name, params, returns } = props;

  let paramList = ``;
  let returnList = ``;

  if (params !== undefined) {
    if (params.length === 1) {
      paramList = `@param -`;
    } else if (params.length > 1) {
      paramList = params.map(param => {
        return `@param ${param.name}`;
      });
    }
  }

  if (returns !== undefined) {
    if (returns.length === 1) {
      returnList = `@return -`;
    } else if (returns !== undefined && returns.length > 1) {
      returnList = returns.map(ret => {
        return `@return ${ret.name}`;
      });
    }
  }

  const lines = [
    ` /**
  `,
    ` * ${name} --
  `,
    ` *
  `,
    ...paramList,
    ...returnList,
    ` 
*/
`
  ];

  return <span style={{ whiteSpace: 'pre-wrap' }}>{lines.join(` `)}</span>;
}

export default JavaDocGenerator;
