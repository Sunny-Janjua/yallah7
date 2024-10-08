// controllers/sellerController.js
import Seller from '../models/sellerModel.js';
import User from '../models/userModel.js';
import Wallet from '../models/walletModel.js';

// Register a new seller
export const registerSeller = async (req, res) => {
  const { userId, storeName, storeDescription } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the user is already a seller
    if (user.role === 'seller') {
      return res.status(400).json({ message: 'User is already a seller' });
    }

    // Create a wallet for the seller
    const wallet = new Wallet({
      userId: user._id,
      balance: 0,
    });
    await wallet.save();

    // Create a seller account
    const newSeller = new Seller({
      userId: user._id,
      storeName,
      storeDescription,
      wallet: wallet._id,
    });

    await newSeller.save();

    // Update the user role and link the seller ID
    user.role = 'seller';
    user.sellerId = newSeller._id;
    user.walletId = wallet._id;  // Also link wallet to user

    await user.save();

    res.status(201).json({ message: 'Seller registered successfully', seller: newSeller });
  } catch (error) {
    console.error("Error in registerSeller:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get seller details
export const getSellerDetails = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.sellerId)
      .populate('products')
      .populate('wallet');
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.status(200).json({ seller });
  } catch (error) {
    console.error("Error in getSellerDetails:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update seller profile
export const updateSellerProfile = async (req, res) => {
  const { sellerId } = req.params;
  const { storeName, storeDescription } = req.body;

  try {
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    seller.storeName = storeName || seller.storeName;
    seller.storeDescription = storeDescription || seller.storeDescription;

    await seller.save();
    res.status(200).json({ message: 'Seller profile updated successfully', seller });
  } catch (error) {
    console.error("Error in updateSellerProfile:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a product to seller's store
export const addSellerProduct = async (req, res) => {
  const { sellerId, productId } = req.body;

  try {
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Add product to seller's product list
    seller.products.push(productId);
    await seller.save();

    res.status(200).json({ message: 'Product added to seller', seller });
  } catch (error) {
    console.error("Error in addSellerProduct:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Handle wallet transactions for seller (credit or debit)
export const handleSellerTransaction = async (req, res) => {
  const { sellerId, type, amount, description } = req.body;

  try {
    const seller = await Seller.findById(sellerId).populate('wallet');
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    const wallet = await Wallet.findById(seller.wallet);

    if (type === 'credit') {
      wallet.balance += amount;
    } else if (type === 'debit') {
      if (wallet.balance < amount) {
        return res.status(400).json({ message: 'Insufficient balance' });
      }
      wallet.balance -= amount;
    }

    wallet.transactions.push({
      type,
      amount,
      description,
    });

    wallet.lastUpdated = Date.now();

    await wallet.save();
    res.status(200).json({ message: `Transaction successful: ${type} ${amount}`, wallet });
  } catch (error) {
    console.error("Error in handleSellerTransaction:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
