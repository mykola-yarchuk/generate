const userTemplate = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  phoneNumber: "phoneNumber",
};

const locationTemplate = {
  city: "city",
  address: "address",
};

const socialNetworksTemplate = {
  facebook: "facebook",
  linkedin: "linkedin",
  twitter: "twitter",
}

export const generateUsers = (amount: number) => {
  const users = [];
  for(let i = 1; i <= amount; i++) {

    const currentLocation = createCurrentEntity(i, locationTemplate);
    const currentSocialNetworks = createCurrentEntity(i, socialNetworksTemplate);
    const currentUser = createCurrentEntity(i, userTemplate);

    users.push({
      ...currentUser,
      location: currentLocation,
      socialNetwors: currentSocialNetworks,
    })
  }

  return users;

}

const createCurrentEntity = (n: number, template: Template) => {
  const entity: Template = {};

  for (const key in template) {
    entity[key] = template[key] + n;
  }

  return entity;
}
