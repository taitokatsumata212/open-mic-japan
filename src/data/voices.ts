export type Voice = {
  id: string;
  name: string;
  affiliation?: string;
  body: string;
};

/**
 * 応援者の声。初日は空（準備中表記）でOK。
 * 5〜7月に大学関係者・SOY-POY長期メンバー・地域パートナーから取得して順次追加。
 */
export const voices: Voice[] = [];
