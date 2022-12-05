import React from 'react';

type Props = {
  name: string;
  params?: string[];
  returns?: string;
};

function JavaDocGenerator(props: Props) {
  const { name, params, returns } = props;

  let paramArray = '';

  if (params !== undefined) {
    if (params.length === 1) paramArray = `* @param -`;
    else if (params.length > 1) params.forEach(element => (paramArray += `* @param ${element} -\n\t`));
  }

  const javaDoc = `\t/**
              * ${name} -- 
              *
              ${paramArray[0] !== '' && paramArray}
              * ${(returns !== '' || returns !== undefined) && `@return`}
        */\n`;

  return <>{javaDoc}</>;
}

export default JavaDocGenerator;
