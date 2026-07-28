export const HEART_DEEP_DOWN_TITLE = "Book cover - The heart deep down";
export const AVATAR_TITLE = "Avatar RPG Characters";

export const isHeartDeepDown = (title: string) =>
    title.trim().toLocaleLowerCase() === HEART_DEEP_DOWN_TITLE.toLocaleLowerCase();

export const isAvatarArtwork = (title: string) =>
    title.trim().toLocaleLowerCase() === AVATAR_TITLE.toLocaleLowerCase();
