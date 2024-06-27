"use client";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { Toaster } from "sonner";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider attribute="class" storageKey="theme">
				<Toaster richColors />
				{children}
			</ThemeProvider>
		</>
	);
}

export default Providers;
