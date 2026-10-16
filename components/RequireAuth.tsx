'use client';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

export default function RequireAuth({ children, allowedRole }: { children: ReactNode; allowedRole: "admin" | "student" }) {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!currentUser || currentUser.role !== allowedRole) {
      router.push("/student/login");
    }
  }, [currentUser, isLoading, allowedRole, router]);

  if (isLoading || !currentUser || currentUser.role !== allowedRole) return <div>載入中...</div>;
  return <>{children}</>;
}
