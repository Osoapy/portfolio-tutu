export const HEART_DEEP_DOWN_TITLE = "Book cover - The heart deep down";
export const NYMPHS_TITLE = "Nymphs - Book ilustration";

export const isHeartDeepDown = (title: string) =>
    title.trim().toLocaleLowerCase() === HEART_DEEP_DOWN_TITLE.toLocaleLowerCase();

export const isNymphsArtwork = (title: string) =>
    title.trim().toLocaleLowerCase() === NYMPHS_TITLE.toLocaleLowerCase();
