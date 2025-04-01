const GITHUB_TOKEN = "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";

export const fetchMembersData = async (organization: string, page: number) => {
  const perPage = 10;
  const url = `https://api.github.com/orgs/${organization}/members?per_page=${perPage}&page=${page}`;

  const headers = GITHUB_TOKEN
    ? { Authorization: `token ${GITHUB_TOKEN}` }
    : {};

  const response = await fetch(url, { headers });

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
