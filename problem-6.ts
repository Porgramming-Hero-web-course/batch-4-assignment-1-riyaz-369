interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, newAge: Partial<Profile>) => {
  return { ...profile, age: newAge.age };
};
