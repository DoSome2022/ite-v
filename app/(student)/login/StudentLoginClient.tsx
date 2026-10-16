'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Eye, EyeOff } from 'lucide-react';

export default function StudentLoginClient() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    // 這裡之後可替換成實際API登入
    try {
      // const res = await fetch("/api/student/login", { method:"POST", body:JSON.stringify({account,password}) })
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || "登入失敗");
      // router.push("/student/dashboard");

      // 模擬延遲
      await new Promise(r => setTimeout(r, 1200));
      if (account === '' || password === '') {
        throw new Error('請輸入帳號及密碼');
      }
      alert('模擬登入成功，可導向學生儀表板');
    } catch (err: any) {
      setErrorMsg(err.message || '登入失敗，請檢查帳號密碼');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center py-16">
        <section className="max-w-md w-full mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-gray-900">學生登入</h1>
              <p className="text-gray-500 mt-2">Student Portal Login</p>
            </div>

            {errorMsg && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">帳號 / Student ID</label>
                <input
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="請輸入學生帳號"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">密碼 / Password</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-11 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="請輸入密碼"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">記住登入</span>
                </label>
                {/* <a href="/student/forgot-password" className="text-blue-600 hover:underline">忘記密碼？</a> */}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
              >
                {loading ? '登入中...' : '登入 Login'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              未有學生帳號或忘記密碼？請聯絡課程顧問開通帳號
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
