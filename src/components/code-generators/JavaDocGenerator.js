function JavaDocGenerator(props) {
  const { name, params, returns } = props;

  let paramList = '';

  if (params !== undefined) {
    if (params.length === 1) {
      paramList = `* @param -`;
    } else if (params.length > 1) {
      params.forEach(element => {
        paramList += `* @param ${element} -\n\t        `;
      });
    }
  }

  const javaDoc = (
    <span>
      {`        /**
              * ${name} -- 
              *
              ${paramList[0] === '' ? '' : paramList}${returns === '' || returns === undefined ? '' : `* @return`}
        */
         `}
    </span>
  );

  return <>{javaDoc}</>;
}

export default JavaDocGenerator;
