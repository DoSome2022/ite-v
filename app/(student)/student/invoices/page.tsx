const invoiceList = [
  {
    id: "INV20261001",
    date: "2026-10-01",
    title: "AI 商業應用課程費用",
    amount: "HK$ 4,800",
  },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-slate-900 mb-8">
        發票 & 收據 <span className="text-gray-500 font-normal">Invoice & Receipt</span>
      </h1>
      <div className="space-y-4">
        {invoiceList.map((inv) => (
          <div key={inv.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="flex flex-wrap justify-between gap-3">
              <div>
                <h3 className="font-medium text-slate-900">{inv.title}</h3>
                <p className="text-sm text-gray-500">單號：{inv.id}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900">{inv.amount}</p>
                <p className="text-xs text-gray-500">{inv.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
