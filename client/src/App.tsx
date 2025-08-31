import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

// Базовый путь для GitHub Pages
const basePath = import.meta.env.BASE_URL || '/';

// Функция для обработки GitHub Pages 404 редиректов
function handleGitHubPagesRedirect() {
  if (import.meta.env.PROD && window.location.pathname.includes('/windows-landing/')) {
    // Если это GitHub Pages и есть параметр в URL, извлекаем его
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('/');
    
    if (redirectPath) {
      // Очищаем URL и перенаправляем на правильный путь
      const cleanPath = redirectPath.replace(/~and~/g, '&');
      window.history.replaceState(null, '', basePath + cleanPath);
    }
  }
}

function AppRouter() {
  useEffect(() => {
    handleGitHubPagesRedirect();
  }, []);

  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
