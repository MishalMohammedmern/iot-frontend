"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { postSubscribe } from "@/apiServices/apiServices";

const SubscriptionForm = ({ language, translations }) => {
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const t = translations[language] || translations.en;
  const isRTL = language === "ar";

  const validationSchema = Yup.object({
    email: Yup.string().email(t.emailInvalid).required(t.emailRequired),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) =>
      await handleSubscribe(values.email, resetForm),
  });

  const handleSubscribe = async (email, resetForm) => {
    setIsLoading(true);
    setSubscriptionStatus(null);
    try {
      await postSubscribe({ data: { mail: email } });
      setSubscriptionStatus("success");
      resetForm();
    } catch (error) {
      if (
        error.message.includes("duplicate") ||
        error.message.includes("already") ||
        error.response?.status === 400 ||
        error.response?.data?.message?.includes("already")
      ) {
        setSubscriptionStatus("duplicate");
      } else {
        setSubscriptionStatus("error");
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubscriptionStatus(null), 5000);
    }
  };

  const getStatusMessage = () => {
    switch (subscriptionStatus) {
      case "success":
        return <StatusMessage icon={<CheckCircle className="w-4 h-4" />} text={t.subscribeSuccess} color="text-green-400" />;
      case "duplicate":
        return <StatusMessage icon={<AlertCircle className="w-4 h-4" />} text={t.subscribeDuplicate} color="text-yellow-400" />;
      case "error":
        return <StatusMessage icon={<AlertCircle className="w-4 h-4" />} text={t.subscribeError} color="text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <form onSubmit={formik.handleSubmit} className="flex items-center gap-4">
        <div className="flex bg-white p-1 rounded-lg">
          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
            className={`px-4 py-2 border-0 text-gray-900 bg-white focus:outline-none ${
              isRTL ? "text-right rounded-r-md" : "rounded-l-md"
            } ${formik.touched.email && formik.errors.email ? "border-2 border-red-500" : ""}`}
            dir={isRTL ? "rtl" : "ltr"}
          />
          <button
            type="submit"
            disabled={isLoading || !formik.isValid}
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 text-white relative disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ backgroundColor: "#4B2615" }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.subscribing}</span>
              </>
            ) : (
              t.subscribe
            )}
          </button>
        </div>
      </form>
      {formik.touched.email && formik.errors.email && (
        <div className="text-red-400 text-sm">{formik.errors.email}</div>
      )}
      {getStatusMessage()}
    </div>
  );
};

const StatusMessage = ({ icon, text, color }) => (
  <div className={`flex items-center gap-2 ${color} text-sm mt-2`}>
    {icon}
    <span>{text}</span>
  </div>
);

export default SubscriptionForm;
