import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import WalletTransfer from "@/pages/wallet-transfer";
import Swap from "@/pages/swap";
import Docs from "@/pages/docs";
import Points from "@/pages/points";
import Referral from "@/pages/referral";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Swap} />
      <Route path="/points" component={Points} />
      <Route path="/referral" component={Referral} />
      <Route path="/legacy" component={WalletTransfer} />
      <Route path="/docs" component={Docs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <Router />
      </div>
    </TooltipProvider>
  );
}

export default App;
