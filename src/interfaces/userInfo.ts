export interface UserInfo {
  userAvatar: string;
  userFirstName: string;
  userLastName: string;
  userPosition: string;
  userDateOfBirth: string;
}

export function buildUserInfo(userData: Record<string, undefined>): UserInfo {
  if (
    typeof userData.avatar == 'undefined' ||
    typeof userData.avatar != 'string'
  ) {
    throw Error('received data "userData.avatar" has not valid value');
  }

  if (
    typeof userData.first_name == 'undefined' ||
    typeof userData.first_name !== 'string'
  ) {
    throw Error('received data "userData.first_name" has not valid value');
  }

  if (
    typeof userData.last_name == 'undefined' ||
    typeof userData.last_name !== 'string'
  ) {
    throw Error('received data "userData.last_name" has not valid value');
  }

  if (typeof userData.employment == 'undefined') {
    throw Error('received data "userData.employment" has not valid value');
  }

  const employment = userData.employment as Record<string, undefined>;
  if (
    typeof employment.title == 'undefined' ||
    typeof employment.title !== 'string'
  ) {
    throw Error(
      'received data "userData.employment.title" has not valid value'
    );
  }

  if (
    typeof userData.date_of_birth == 'undefined' ||
    typeof userData.date_of_birth !== 'string'
  ) {
    throw Error('received data "userData.date_of_birth" has not valid value');
  }

  return {
    userAvatar: userData.avatar,
    userFirstName: userData.first_name,
    userLastName: userData.last_name,
    userPosition: employment.title,
    userDateOfBirth: userData.date_of_birth
  };
}
