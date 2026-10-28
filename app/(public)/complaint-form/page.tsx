'use client';
import { useState } from 'react';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import { AlertCircle, CheckCircle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

// 定義表單數據類型
interface ComplaintFormData {
  name: string;
  contact: string;
  contactType: 'phone' | 'email';
  complaintType: string;
  subject: string;
  description: string;
  attachment: File | null;
}

// 投訴類型選項
const complaintTypes = [
  '服務態度問題',
  '產品質量問題',
  '收費爭議',
  '流程不合理',
  '工作失誤',
  '其他問題'
];

export default function ComplaintFormPage() {
  // 表單狀態管理
  const [formData, setFormData] = useState<ComplaintFormData>({
    name: '',
    contact: '',
    contactType: 'phone',
    complaintType: '',
    subject: '',
    description: '',
    attachment: null
  });
  
  // 表單驗證錯誤
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // 提交狀態
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 處理表單輸入變更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除對應字段的錯誤提示
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 處理文件上傳
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // 限制文件大小 5MB
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, attachment: '文件大小不能超過5MB' }));
        return;
      }
      // 限制文件類型
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, attachment: '僅支持JPG、PNG、PDF、Word文件' }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        attachment: file
      }));
      setErrors(prev => ({ ...prev, attachment: '' }));
    }
  };

  // 表單驗證
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '請填寫您的姓名';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = `請填寫您的${formData.contactType === 'phone' ? '聯繫電話' : '電子郵箱'}`;
    } else if (formData.contactType === 'phone' && !/^[\d\-\+\(\) ]{8,20}$/.test(formData.contact)) {
      newErrors.contact = '請填寫有效的聯繫電話';
    } else if (formData.contactType === 'email' && !/\S+@\S+\.\S+/.test(formData.contact)) {
      newErrors.contact = '請填寫有效的電子郵箱';
    }
    
    if (!formData.complaintType) {
      newErrors.complaintType = '請選擇投訴類型';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '請填寫投訴標題';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = '請詳細描述投訴內容';
    } else if (formData.description.length < 20) {
      newErrors.description = '投訴內容請至少填寫20個字符';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 表單提交處理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 表單驗證
    if (!validateForm()) return;
    
    try {
      setIsSubmitting(true);
      
      // 模擬表單提交（實際項目中替換為API請求）
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 提交成功
      setSubmitSuccess(true);
      
      // 重置表單（可選）
      setFormData({
        name: '',
        contact: '',
        contactType: 'phone',
        complaintType: '',
        subject: '',
        description: '',
        attachment: null
      });
      
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: '提交失敗，請稍後再試'
      }));
      console.error('投訴表單提交錯誤:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 導航欄 */}
      <Nav />
      
      {/* 主內容區 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 頁面標題 */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">投訴/建議表單</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我們重視您的每一個反饋，請詳細填寫以下信息，我們將盡快處理並回復您的投訴或建議
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 投訴表單 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              {submitSuccess ? (
                // 提交成功提示
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">提交成功！</h2>
                  <p className="text-gray-600 mb-6">
                    您的投訴已成功提交，我們將在1-3個工作日內與您聯繫處理
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    填寫新的投訴
                  </button>
                </div>
              ) : (
                // 投訴表單內容
                <form onSubmit={handleSubmit}>
                  {/* 通用錯誤提示 */}
                  {errors.general && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 flex items-center gap-2">
                      <AlertCircle size={18} />
                      {errors.general}
                    </div>
                  )}
                  
                  {/* 姓名 */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="請填寫您的真實姓名"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  {/* 聯繫方式 */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      聯繫方式 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <div className="flex items-center mb-2">
                        <input
                          type="radio"
                          id="contact-phone"
                          name="contactType"
                          value="phone"
                          checked={formData.contactType === 'phone'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="contact-phone" className="ml-2 text-sm text-gray-700">
                          電話
                        </label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input
                          type="radio"
                          id="contact-email"
                          name="contactType"
                          value="email"
                          checked={formData.contactType === 'email'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="contact-email" className="ml-2 text-sm text-gray-700">
                          郵箱
                        </label>
                      </div>
                    </div>
                    <input
                      type={formData.contactType === 'phone' ? 'tel' : 'email'}
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.contact ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder={`請填寫您的${formData.contactType === 'phone' ? '聯繫電話' : '電子郵箱'}`}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
                    )}
                  </div>
                  
                  {/* 投訴類型 */}
                  <div className="mb-6">
                    <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 mb-1">
                      投訴類型 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="complaintType"
                      name="complaintType"
                      value={formData.complaintType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.complaintType ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">請選擇投訴類型</option>
                      {complaintTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.complaintType && (
                      <p className="mt-1 text-sm text-red-500">{errors.complaintType}</p>
                    )}
                  </div>
                  
                  {/* 投訴標題 */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      投訴標題 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="請簡要描述投訴事項（如：服務態度問題投訴）"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  {/* 投訴詳情 */}
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      投訴詳細內容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        errors.description ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="請詳細描述您遇到的問題、時間、地點、涉及人員等信息，以便我們更好地處理您的投訴..."
                    ></textarea>
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      至少填寫20個字符，當前：{formData.description.length}
                    </p>
                  </div>
                  
                  {/* 附件上傳 */}
                  {/* <div className="mb-8">
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                      相關附件（可選）
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="attachment"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">點擊上傳</span> 或拖動文件至此
                          </p>
                          <p className="text-xs text-gray-500">
                            支持 JPG, PNG, PDF, Word (最大 5MB)
                          </p>
                        </div>
                        <input
                          id="attachment"
                          name="attachment"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        />
                      </label>
                    </div>
                    {errors.attachment && (
                      <p className="mt-1 text-sm text-red-500">{errors.attachment}</p>
                    )}
                    {formData.attachment && (
                      <p className="mt-2 text-sm text-gray-600">
                        已選擇文件：{formData.attachment.name}
                      </p>
                    )}
                  </div> */}
                  
                  {/* 提交按鈕 */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        提交投訴
                      </>
                    )}
                  </button>
                  
                  {/* 備註 */}
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    提交即表示您同意我們的《隱私政策》和《投訴處理條款》，我們會嚴格保護您的個人信息
                  </p>
                </form>
              )}
            </div>
          </div>
          
          {/* 聯繫信息側欄 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">
                聯繫我們
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">聯絡電話</h4>
                    <p className="text-gray-600">3163 9569</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">投訴郵箱</h4>
                    <p className="text-gray-600">info@ite.edu.hk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">辦公地址</h4>
                    <p className="text-gray-600">Flat B, 7/F, Sun Shine Centre, 61-63 Portland Street, Yau Ma Tei, Kln.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">處理時間</h4>
                    <p className="text-gray-600">工作日 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3">處理流程</h4>
                <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                  <li>提交投訴表單</li>
                  <li>工作人員審核信息</li>
                  <li>1-3個工作日內與您聯繫</li>
                  <li>跟進處理投訴事項</li>
                  <li>處理完畢後跟進回訪</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}