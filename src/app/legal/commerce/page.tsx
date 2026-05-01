import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata = {
  title: "特定商取引法に基づく表記",
};

export default function CommercePage() {
  return (
    <LegalPageShell
      title="特定商取引法に基づく表記"
      currentHref="/legal/commerce"
    >
      <p>
        特定非営利活動法人オープンマイクジャパン（以下「当法人」）が、会員制度・寄付・物販等を通じて行う取引にあたり、特定商取引法第11条に基づき以下のとおり表記します。
      </p>

      <table>
        <tbody>
          <tr>
            <th>事業者の名称</th>
            <td>特定非営利活動法人オープンマイクジャパン</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>理事長　荒木美月</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              〒155-0031 東京都世田谷区北沢二丁目30番14号 重宗ビル3F
            </td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>
              <a
                href="mailto:info@openmicjapan.com"
                className="text-omj-primary underline"
              >
                info@openmicjapan.com
              </a>
              <br />
              <span className="text-xs text-omj-sub">
                電話番号は請求があれば遅滞なく開示します。
              </span>
            </td>
          </tr>
          <tr>
            <th>取り扱う商品・サービス</th>
            <td>
              <ul>
                <li>会員制度（個人月額会員 / 法人協賛）</li>
                <li>寄付金の受領</li>
                <li>イベント参加費</li>
                <li>関連物販（ZINE・グッズ等／実施時）</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>販売価格</th>
            <td>
              各申込ページに記載の金額（会員プラン・イベント参加費・物販価格）。寄付金額は支援者が任意に設定。
            </td>
          </tr>
          <tr>
            <th>商品代金以外の必要料金</th>
            <td>
              振込手数料、決済代行手数料、配送料（物販の場合）等は支援者・購入者の負担となる場合があります。各申込時に明示します。
            </td>
          </tr>
          <tr>
            <th>支払方法</th>
            <td>
              <ul>
                <li>クレジットカード決済</li>
                <li>銀行振込</li>
                <li>その他、当法人が指定する方法</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>支払時期</th>
            <td>
              月額会員：申込時に初回課金、以降毎月自動課金。
              <br />
              単発寄付・物販：申込時。
              <br />
              イベント：各イベントページに記載。
            </td>
          </tr>
          <tr>
            <th>商品の引渡時期</th>
            <td>
              物販：注文確定後、原則7営業日以内に発送。
              <br />
              会員特典：会員登録完了後、順次提供。
            </td>
          </tr>
          <tr>
            <th>解約・返金について</th>
            <td>
              <p>
                <strong>月額会員（サブスクリプション）の解約</strong>
              </p>
              <ul>
                <li>
                  会員専用ポータル（Stripe Customer Portal）から、いつでもご自身で解約手続きを行うことができます。
                </li>
                <li>
                  ポータルでは、以下の操作を会員自身で行えます。
                  <ul>
                    <li>サブスクリプションの解約</li>
                    <li>支払い方法の変更</li>
                    <li>請求書・領収書のダウンロード</li>
                    <li>登録している個人情報の更新</li>
                  </ul>
                </li>
                <li>
                  解約は手続き完了時点から効力を生じます。現在の課金期間の末日までは会員資格が有効で、次回更新日以降は自動課金されません。
                </li>
                <li>
                  すでに支払われた会費について、日割り計算による返金は原則として承りません。
                </li>
                <li>
                  ポータルにアクセスできない、または操作が困難な場合は、
                  <a
                    href="mailto:info@openmicjapan.com"
                    className="text-omj-primary underline"
                  >
                    info@openmicjapan.com
                  </a>
                  までご連絡ください。
                </li>
              </ul>

              <p>
                <strong>単発寄付</strong>
              </p>
              <ul>
                <li>性質上、返金は原則として承りません。</li>
                <li>
                  重複決済等、事務手続上の誤りが判明した場合は、
                  <a
                    href="mailto:info@openmicjapan.com"
                    className="text-omj-primary underline"
                  >
                    info@openmicjapan.com
                  </a>
                  までご連絡ください。
                </li>
              </ul>

              <p>
                <strong>物販</strong>
              </p>
              <ul>
                <li>
                  商品到着後7日以内に、未開封・未使用のものに限り返品を承ります。送料は購入者負担となります。
                </li>
                <li>
                  商品に不良がある場合は、当法人負担で交換対応します。
                </li>
              </ul>

              <p>
                <strong>イベント参加費</strong>
              </p>
              <ul>
                <li>
                  開催 7 日前までのキャンセルは全額返金、それ以降は返金不可。
                </li>
                <li>
                  当法人都合・やむを得ない事情による中止の場合は別途案内します。
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>動作環境</th>
            <td>
              当法人ウェブサイトは、最新版の主要ブラウザ（Chrome / Safari /
              Edge / Firefox）でのご利用を推奨します。
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-xs text-omj-sub">
        ※ 本表記の最終確認・改定は、当法人事務局にて行います。
      </p>
    </LegalPageShell>
  );
}
