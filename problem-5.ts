type Person = {
  name: string;
  age: number;
};

const getProperty = <property extends keyof Person>(
  person: Person,
  property: property
) => {
  return person[property];
};
