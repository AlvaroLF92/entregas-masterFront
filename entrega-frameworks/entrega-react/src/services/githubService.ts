export const fetchMembersData = async (organization: string, page: number) => {
  const perPage = 10;
  const url = `https://api.github.com/orgs/${organization}/members?per_page=${perPage}&page=${page}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error al obtener miembros: ${response.statusText}`);
  }

  const data = await response.json();

  const linkHeader = response.headers.get("Link");
  let totalMembers = page * perPage;

  if (linkHeader) {
    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
    if (lastPageMatch) {
      totalMembers = parseInt(lastPageMatch[1], 10) * perPage;
    }
  } else if (data.length < perPage) {
    totalMembers = (page - 1) * perPage + data.length;
  }

  return {
    members: data,
    total: totalMembers,
  };
};
