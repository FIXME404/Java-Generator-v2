function JavaDocGenerator(props) {
  const { name, params, returns } = props;

  let paramList;

  if (params !== undefined) {
    if (params.length === 1) {
      paramList = `@param -`;
    } else if (params.length > 1) {
      paramList = params.map(param => {
        return `* @param ${param} -
        `;
      });
    } else {
      paramList = '';
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
    `${returns === '' ? '' : ` * @return ${returns}`}`,
    ` 
*/
`
  ];

  return <span style={{ whiteSpace: 'pre-wrap' }}>{lines.join(` `)}</span>;
}

export default JavaDocGenerator;
