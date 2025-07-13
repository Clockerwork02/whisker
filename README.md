# WhiskerSwap - Professional DEX Interface

A modern decentralized exchange interface built for HyperEVM with advanced token swapping capabilities.

## Features

- 🔄 **Token Swapping**: Seamless token exchanges with real-time pricing
- 💎 **Multi-Token Support**: Support for HYPE, PURR, and all HyperEVM tokens
- 📊 **Live Pricing**: Real-time token prices from Hyperliquid and DexScreener APIs
- 🎯 **Points System**: Earn points for each swap transaction
- 🔗 **Referral Program**: Share referral links for bonus rewards
- ⚡ **Fast Approvals**: Optimized gas settings for efficient transactions

## Technology Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Blockchain**: HyperEVM (Chain ID 999)
- **UI Components**: Shadcn/ui + Radix UI
- **State Management**: TanStack Query
- **Build Tool**: Vite

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/whiskerswap.git
cd whiskerswap

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to any static hosting service

## Environment Setup

The application works out of the box with no environment variables required.

Optional configuration:
- `NODE_ENV=production` for production builds

## Network Configuration

- **Network**: HyperEVM Mainnet
- **Chain ID**: 999
- **RPC URL**: https://rpc.hyperliquid.xyz/evm
- **Native Token**: HYPE

## Supported Tokens

- HYPE (Hyperliquid) - Native token
- WHYPE (Wrapped HYPE)
- PURR (Purr Token)
- BUDDY, perpcoin, LIQD, USD₮0, PiP, CATBAL
- Custom ERC20 tokens via import feature

## API Integration

- **Hyperliquid API**: Live HYPE and PURR pricing
- **DexScreener API**: Multi-token price feeds
- **HyperSwap Contracts**: On-chain liquidity and routing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Security

This project implements standard DEX security practices:
- Contract verification
- Multi-signature operations
- Audited smart contract interactions

## Support

For support and questions:
- Twitter: @WhiskerSwap
- Telegram: @WhiskerSwapSupport

---

Built with ❤️ for the HyperEVM ecosystem