export const userData = async () => {
    const response = await fetch('/api/user-db');
    const data = await response.json();
    return data;
}

export const projectsByUserData = async (userId: string) => {
    const response = await fetch(`/api/projects-db/${userId}`);
    const data = await response.json();
    return data;
}

export const technologiesByUserData = async (userId: string) => {
    const response = await fetch(`/api/technologies-db/${userId}`);
    const data = await response.json();
    return data;
}

export const technologiesData = async () => {
    const response = await fetch('/api/technologies-db');
    const data = await response.json();
    return data;
}