const BASE_URL: string = 'https://bootcamp-api.codeit.kr/api';

export async function getUserData() {
  try {
    const response = await fetch(`${BASE_URL}/sample/user`);
    const body = await response.json();
    return body;
  } catch (err: any) {
    console.log(err.message);
  }
}

export async function getUserPick() {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    const body = await response.json();
    return body;
  } catch (err: any) {
    console.log(err.message);
  }
}

export async function forUser1() {
  try {
    const response = await fetch(`${BASE_URL}/users/1`);
    const body = await response.json();
    return body;
  } catch (err: any) {
    console.log(err.message);
  }
}

export async function TasteUser1() {
  try {
    const response = await fetch(`${BASE_URL}/users/1/folders`);
    const body = await response.json();
    return body;
  } catch (err: any) {
    console.log(err.message);
  }
}

export async function getUserList(id?: number | null) {
  const query = id ? `folderId=${id}` : '';
  try {
    const response = await fetch(`${BASE_URL}/users/1/links?${query}`);
    const body = await response.json();
    return body;
  } catch (err: any) {
    console.log(err.message);
  }
}

// err 타입 처리 추후 수정 필요
