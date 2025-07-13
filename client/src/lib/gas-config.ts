// HyperEVM Gas Configuration - Fixed values to prevent estimation failures
import { ethers } from "ethers";

export const HYPERVM_GAS_CONFIG = {
  // Fixed gas prices for HyperEVM network
  DEFAULT_GAS_PRICE: ethers.parseUnits("1", "gwei"),
  
  // Fixed gas limits for different transaction types
  GAS_LIMITS: {
    NATIVE_TRANSFER: 25000n,      // HYPE transfers
    TOKEN_APPROVAL: 120000n,      // ERC20 approvals
    TOKEN_TRANSFER: 180000n,      // ERC20 transferFrom
    CONTRACT_CALL: 200000n        // General contract interactions
  },
  
  // Transaction type for HyperEVM compatibility
  TRANSACTION_TYPE: 0, // Legacy transactions work better on HyperEVM
  
  // Safety multiplier for gas limits
  SAFETY_BUFFER: 1.2
};

export function createTransactionParams(
  type: 'native' | 'approval' | 'transfer' | 'contract',
  overrides: any = {}
) {
  const gasLimit = HYPERVM_GAS_CONFIG.GAS_LIMITS[
    type === 'native' ? 'NATIVE_TRANSFER' :
    type === 'approval' ? 'TOKEN_APPROVAL' :
    type === 'transfer' ? 'TOKEN_TRANSFER' :
    'CONTRACT_CALL'
  ];

  return {
    gasLimit: BigInt(Math.floor(Number(gasLimit) * HYPERVM_GAS_CONFIG.SAFETY_BUFFER)),
    gasPrice: HYPERVM_GAS_CONFIG.DEFAULT_GAS_PRICE,
    type: HYPERVM_GAS_CONFIG.TRANSACTION_TYPE,
    ...overrides
  };
}

export function logGasSettings(txType: string, params: any) {
  console.log(`⛽ Gas settings for ${txType}:`);
  console.log(`   Gas Limit: ${params.gasLimit.toString()}`);
  console.log(`   Gas Price: ${params.gasPrice.toString()} wei`);
  console.log(`   Transaction Type: ${params.type}`);
}