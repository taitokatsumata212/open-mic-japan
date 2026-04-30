/**
 * ヒーロー用：ステージで人が輝くシーンのイラスト。
 * 画像差し替え：/public/images/hero-stage.png を変更すれば反映。
 */
export function MicIllustration() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/hero-stage.png"
      alt="ステージのマイクと観客のイラスト"
      className="w-full h-auto"
    />
  );
}
